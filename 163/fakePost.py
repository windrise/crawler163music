#功能：伪造POST，对参数进行加密

from cryptography.hazmat.primitives.ciphers import (
    Cipher, algorithms, modes
)
from cryptography.hazmat.backends import default_backend
import base64
import requests

mp3_url = "http://music.163.com/weapi/song/enhance/player/url?csrf_token="
    

headers = {
            'Referer': 'http://music.163.com/',
            'Host': 'music.163.com',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        }

second_param = "010001"
third_param = "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7"
forth_param = "0CoJUm6Qyw8W8jud"


def get_params(song_id):
    first_param = '{"ids":[' + str(song_id) + '], br:"320000",csrf_token:"csrf"}'
    iv = "0102030405060708"
    first_key = forth_param
    second_key = 16 * 'F'
    h_encText = AES_encrypt(first_param, first_key, iv)
    h_encText = AES_encrypt(h_encText.decode("utf-8"), second_key, iv)
    return h_encText


def get_encSecKey():
    encSecKey = "257348aecb5e556c066de214e531faadd1c55d814f9be95fd06d6bff9f4c7a41f831f6394d5a3fd2e3881736d94a02ca919d952872e7d0a50ebfa1769a7a62d512f5f1ca21aec60bc3819a9c3ffca5eca9a0dba6d6f7249b06f5965ecfff3695b54e1c28f3f624750ed39e7de08fc8493242e26dbc4484a01c76f739e135637c"
    return encSecKey
    

def AES_encrypt(text, key,iv):
    backend = default_backend()

    pad = 16 - len(text) % 16

    text = text + pad * chr(pad)
    cipher = Cipher(
        algorithms.AES(key.encode('utf-8')),
        modes.CBC(b'0102030405060708'),
        backend=backend
    )
    encryptor = cipher.encryptor()
 
    ciphertext = encryptor.update(text.encode('utf-8')) + encryptor.finalize()
    ciphertext = base64.b64encode(ciphertext)
    return ciphertext

def get_json(song_id):
    params = get_params(song_id);
    encSecKey = get_encSecKey();
    data = {
         "params": params,
         "encSecKey": encSecKey
    }
    r = requests.post(mp3_url, headers=headers, data=data)
    res = r.json()
    return res['data'][0]['url']


if __name__ == "__main__":
    
    #想要爬取歌曲的id
    params = get_params(437752374);
    encSecKey = get_encSecKey();
    data = {
         "params": params,
         "encSecKey": encSecKey
    }
    r = requests.post(mp3_url, headers=headers, data=data)
    res = r.json()
    res
    #print(res)
    print(res['data'][0]['url'])
    
