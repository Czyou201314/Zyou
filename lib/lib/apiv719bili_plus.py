# coding = utf-8
# !/usr/bin/python

from Crypto.Util.Padding import unpad
from Crypto.Util.Padding import pad
from urllib.parse import unquote
from Crypto.Cipher import ARC4
from urllib.parse import quote
from base.spider import Spider
from Crypto.Cipher import AES
from datetime import datetime
from bs4 import BeautifulSoup
from base64 import b64decode
import urllib.request
import urllib.parse
import datetime
import binascii
import requests
import base64
import json
import time
import sys
import re
import os

sys.path.append('..')

xurl = "https://api.bilibili.com"

headerx = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
    'Referer':  'https://www.bilibili.com',
          }
pm = ''

class Spider(Spider):
    global xurl
    global headerx
    global headers

    def getName(self):
        return "首页"

    def init(self, extend):
        pass

    def isVideoFormat(self, url):
        pass

    def manualVideoCheck(self):
        pass

    def homeContent(self, filter):
        result = {}
        result = {"class": [{"type_id": "1001", "type_name": "影视"},
                            {"type_id": "1002", "type_name": "娱乐"},
                            {"type_id": "1003", "type_name": "音乐"},
                            {"type_id": "1004", "type_name": "舞蹈"},
                            {"type_id": "1007", "type_name": "鬼畜"},
                            {"type_id": "1008", "type_name": "游戏"},
                            {"type_id": "1009", "type_name": "资讯"},
                            {"type_id": "1010", "type_name": "知识"},
                            {"type_id": "1012", "type_name": "科技数码"},
                            {"type_id": "1020", "type_name": "美食"},
                            {"type_id": "1021", "type_name": "小剧场"}
                            ],
                  }

        return result

    def homeVideoContent(self):
        pass

    def format_views(self, num):
        if num >= 10000:
            return f"{num / 10000:.1f}万"
        else:
            return str(num)

    def categoryContent(self, cid, pg, filter, ext):
        result = {}
        videos = []
        url = f'{xurl}/x/web-interface/region/feed/rcmd?display_id={pg}&request_cnt=15&from_region={cid}'
        res = requests.get(url=url, headers=headerx)
        res.encoding = "utf-8"
        res = res.text
        kjson = json.loads(res)
        for i in kjson['data']['archives']:
            id = i['bvid']
            name = i['title']
            pic = i['cover']
            remarks = self.format_views(i['stat']['view'])

            video = {
                "vod_id": id,
                "vod_name": name,
                "vod_pic": pic,
                "vod_remarks": '播放量:'+ remarks
            }
            videos.append(video)
        result = {'list': videos}
        result['page'] = pg
        result['pagecount'] = 9999
        result['limit'] = 90
        result['total'] = 999999
        return result

    def detailContent(self, ids):
        result = {}
        videos = []
        did = ids[0]
        if 'https://www.bilibili.com/video/' not in did:
            did = f'https://www.bilibili.com/video/{did}'
        videos.append({
            "vod_id": did,
            "vod_name": '',
            "vod_actor": '',
            "vod_director": '',
            "vod_content": '',
            "vod_remarks": '',
            "vod_year": '',
            "vod_area": '',
            "vod_play_from": '哔哩视频',
            "vod_play_url": did
        })

        result['list'] = videos

        return result


    def playerContent(self, flag, id, vipFlags):  # 播放页
        return  {'jx':1,'parse': 1, 'url': id, 'header': headerx}

    def searchContentPage(self, key, quick, page):  # 搜索页
        result={}
        videos=[]
        if not page:
            page = 1
        url=f'https://search.bilibili.com/all?vt=64846139&keyword={key}&page={page}'
        res=requests.get(url=url,headers=headerx)
        res.encoding = "utf-8"
        res=res.text
        doc=BeautifulSoup(res, 'lxml')
        soups=doc.find_all('div', class_='bili-video-card__wrap')
        # print(len(soups))
        for i in soups:
            if 'www.bilibili.com/video' in i.find('a')['href']:
                if 'http' not in i.find('a')['href']:
                    id = 'https:' + i.find('a')['href']
                else:
                    id = i.find('a')['href']
                name=i.find('img')['alt']
                if 'http' not in i.find('source')['srcset']:
                    pic='https:' +i.find('source')['srcset']
                else:
                    pic = i.find('source')['srcset']
            else:
                continue
            video={
                "vod_id": id,
                "vod_name": name,
                "vod_pic": pic,
                "vod_remarks": 'remask'
            }
            videos.append(video)

        result['list'] = videos
        result['page'] = page
        result['pagecount'] = 9999
        result['limit'] = 90
        result['total'] = 999999
        return result

    def searchContent(self, key, quick, pg="1"):
        return self.searchContentPage(key, quick, '1')

    def localProxy(self, params):
        if params['type'] == "m3u8":
            return self.proxyM3u8(params)
        elif params['type'] == "media":
            return self.proxyMedia(params)
        elif params['type'] == "ts":
            return self.proxyTs(params)
        return None

if __name__ == '__main__':
    spider_instance = Spider()


    res=spider_instance.categoryContent('1002', 1, 'filter', {})  #  分页🚨

    res = spider_instance.detailContent(['BV1r5f9YuEVL'])


    print(res)
