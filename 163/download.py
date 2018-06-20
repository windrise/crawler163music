import crawler
import random 
import fakePost as fp



tag = "性感"
#怀旧 清新 浪漫 性感 伤感 治愈 放松 孤独 感动 兴奋 快乐 安静 思念

#print(musicIds)

def emotional(emo=tag,filename = 'music.txt'):
    playlists=crawler.crawler(tag)
    
    k = random.randint(0,len(playlists)-2)
    
    musicName=crawler.ParseIds(playlists[k:k+2])
    file = open(filename,'w')
    #name = list()
    #url = list()
    for key,value in musicName.items():
        
        #playlist = key
        #url = list()
        for i in range(len(value[:10])):
            #url.append(fp.get_json(value[i][-9:]))
            file.write(value[i][9:]+'\n')
            file.write(fp.get_json(value[i][:9])+'\n')
    file.close()
    return  

if __name__ == '__main__':
    tag = "性感"

    emotional(emo=tag)