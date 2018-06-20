#着手开始爬虫前，使用scrapy shell进行调试
'''
根据歌曲标签爬取对应的标签下的.mp3文件

'''
#http://music.163.com/discover/playlist/?cat=伤感
#a = re.findall('playlist\?id=[1-9]\d{8}[1-9]',response.text)
#去重
#ids=[]
#list(set(ids))
#list(map(lambda x : re.findall('[1-9]\d{8}[1-9]',x),ids))
#翻页
#http://music.163.com/discover/playlist/?order=hot&cat=伤感&limit=35&offset=35
#下载歌曲  urllib.request.urlretrieve(url,'songs\\{}.mp3'.format(song_name))

import re
import requests
from lxml import etree
#基本获得相应标签的歌单列表的url
base_url="http://music.163.com/discover/playlist/?cat="
#翻页的url
ChPage_url="http://music.163.com/discover/playlist/?order=hot&cat="
#获得相应id的歌单下的所有歌曲id的url
ID_url = "http://music.163.com/playlist?id="

headers={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36'}

#爬取多页歌单
def Mulcrawler(emotion,num=2):
	ids=[]
	ids.extend(crawler(emotion))
	num = num-1
	for i in range(1,num):

		url = ChPage_url+emotion+"&limit=35&offset="+ str(i*35)
		try:
			r = requests.get(url,headers=headers,timeout=30)
			r.raise_for_status()
			#r.encoding = code
		except:
			return("请求失败")
		a = re.findall(r'playlist\?id=[1-9]\d{9}',r.text)

		ids.extend(list(set(a)))
	IIDS=list()
	for data in list(map(lambda x : re.findall(r'[1-9]\d{9}',x),ids)):
		IIDS.extend(data)
	return IIDS

#爬取单页歌单
#返回值列表样式：['1231231','1321231'...]，里面的字符串是歌单id
def crawler(emotion):
	FirstUrl=base_url+emotion
	try:
		r = requests.get(FirstUrl,headers=headers,timeout=30)
		r.raise_for_status()
		#r.encoding = code
	except:
		return("请求失败")

	ids = re.findall(r'playlist\?id=[1-9]\d{9}',r.text)
	ids = list(set(ids))
	IIds=list()
	for data in list(map(lambda x : re.findall(r'[1-9]\d{9}',x),ids)):
		IIds.extend(data)
	return IIds

#从歌单页面解析出歌的id
#返回值是字典，键是歌单id，值是歌单中的歌曲id的列表
def ParseIds(ids):
	iddict={}
	iddict_id={}
	for idd in ids:
		#print(idd)
		url = ID_url+idd
		idds=list()
		try:
			r = requests.get(url,headers=headers,timeout=30)
			r.raise_for_status()
		except:
			return("请求失败")

		a = re.findall(r'/song\?id=[1-9]\d{8}',r.text)
		'''如果想要提取歌名可以用这种方法'''
		selector = etree.HTML(r.text)
		song_name = a
		for i in range(len(a)):
			stringg = '\"'+ a[i] + '\"'
			song_name[i]=selector.xpath('//a[@href='+stringg+']/text()')

			 
		a = re.findall(r'/song\?id=[1-9]\d{8}',r.text)
		idds.extend(list(set(a)))
		IIDS=list()
		for data in list(map(lambda x : re.findall(r'[1-9]\d{8}',x),idds)):
			IIDS.extend(data)
		IIIDS = IIDS
		for i in range(len(a)):
			IIDS[i] = IIDS[i] + song_name[i][0]
            
		iddict[idd]=IIDS
		iddict_id[idd]=IIIDS
		#iddict[idd]=IIDS
	return iddict



def main():
	pass
	#x=crawler("伤感")
	#y=ParseIds(x)
	#print(y)
    #y=ParseIds(x[0])
    #print(y)
if __name__ == '__main__':
	main()