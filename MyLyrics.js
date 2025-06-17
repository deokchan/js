const title0 = "Chaneey's 양양의 노래"

odi = [
"https://blog.kakaocdn.net/dn/bZLz5p/btsOkEa7IZd/GBJNnLwJ0EqtHLGHomCrgk/%EB%82%A8%EB%8C%80%EC%B2%9C%20%EB%94%B0%EB%9D%BC%20%EB%B4%84%EC%9D%B4%20%ED%9D%90%EB%A5%B4%EB%84%A4__M5_ChatGPT_Suno4.5.mp3?attach=1&knm=tfile.mp3|남대천 따라 봄이 흐르네_M5_ChatGPT_Suno4.5",
"https://blog.kakaocdn.net/dn/IRZvw/btsOzkoWBkk/67QXehVNpQinvgVAfRlk6k/%EC%96%91%EC%96%91%20%EC%8F%A0%EB%B9%84%EC%B9%98%2C%20%EB%82%B4%20%EC%B6%94%EC%96%B5%EC%9D%98%20%EB%9C%B0_W1_ChatGPT_Suno4.5.mp3?attach=1&knm=tfile.mp3|양양 쏠비치, 내 추억의 뜰_W1_ChatGPT_Suno4.5",
"https://blog.kakaocdn.net/dn/cFWxfT/btsOus7o4bW/RvSfH3kAgNkoLKjmZqCL51/%EC%96%91%EC%B4%88%2049%ED%9A%8C%EC%9D%98%20%EC%9C%A0%EC%B1%84%EA%BD%83%20%EB%A7%8C%EB%82%A8_M2_copilot_Suno4.5.mp3?attach=1&knm=tfile.mp3|양초 49회의 유채꽃 만남_M2_copilot_Suno4.5",
"https://blog.kakaocdn.net/dn/A0Wwf/btsOuq9JGvT/N1uhYwk3i6FEHYpmjguwLk/%EB%B2%9A%EA%BD%83%20%EC%95%84%EB%9E%98%2C%20%EC%9A%B0%EB%A6%AC%EB%9D%BC%EB%8A%94%20%EA%B3%84%EC%A0%88_WM2_ChatGPT_Suno4.5.mp3?attach=1&knm=tfile.mp3|벚꽃 아래, 우리라는 계절_WM2_ChatGPT_Suno4.5",
"https://blog.kakaocdn.net/dn/c5Kq0Y/btsOsOKIJWM/MiZpB4A9Af8dqyqUcawzzk/%EB%B4%84%EB%82%A0%EC%97%90%20%EC%B0%BE%EC%95%84%EC%98%A8%20%EB%AC%B5%EC%9D%80%EC%A7%80%20%EC%B9%9C%EA%B5%AC_M2_ChatGPT_Suno4.5.mp3?attach=1&knm=tfile.mp3|봄날에 찾아온 묵은지 친구_M2_ChatGPT_Suno4.5",
"https://blog.kakaocdn.net/dn/MRePi/btsOzCQpvCd/E9jXKKOY7eTWE89KPDMiA0/%EC%9E%90%EB%9E%91%EC%8A%A4%EB%9F%AC%EC%9A%B4%20%EC%96%91%EC%96%91%EC%9D%98%20%EB%85%B8%EB%9E%98_MW1_Gemini_Suno4.5.mp3?attach=1&knm=tfile.mp3|자랑스러운 양양의 노래_MW1_Gemini_Suno4.5",
"https://blog.kakaocdn.net/dn/bFER5k/btsOzlH67XU/6c7PRKoR1d0PphZCz4eYBK/%28%EC%98%A5%EC%9D%B4%EC%9D%98%29%20%EC%8F%A0%EB%B9%84%EC%B9%98%20%EB%A6%AC%EC%82%AC%EC%9D%B4%ED%8B%80_W3_ChatGPT_Suno4.5.mp3?attach=1&knm=tfile.mp3|(옥이의) 쏠비치 리사이틀_W3_ChatGPT_Suno4.5",
"https://blog.kakaocdn.net/dn/4xF7L/btsOsWvrEyK/Lyy0du5gNifVRRahhlbGP0/%ED%95%98%EB%8A%98%20%ED%96%A5%ED%95%B4%20%ED%95%80%20%EB%B3%B5%EC%82%AC%EA%BD%83%20%EC%9D%B4%EC%95%BC%EA%B8%B0_M7_ChatGPT_Suno4.5.mp3?attach=1&knm=tfile.mp3|하늘 향해 핀 복사꽃 이야기_M7_ChatGPT_Suno4.5",
"https://blog.kakaocdn.net/dn/ecpOW3/btsOBEBfWTv/R7U4SZKLnbWJ7gUJpu3oK0/%EB%B2%9A%EA%BD%83%20%EC%95%84%EB%9E%98%20%EA%B7%B8%EB%82%A0%EC%B2%98%EB%9F%BC.._W7_ChatGPT_FUZZ-1.1.mp3?attach=1&knm=tfile.mp3|벚꽃 아래 그날처럼.._(무료 FUZZ-1.1) W7_ChatGPT_FUZZ-1.1",
"https://blog.kakaocdn.net/dn/cgzQgh/btsOrDXmdn6/A0RCkWCA1LtHvnk2P9nKQ0/%EB%AA%A8%EB%85%B8%EA%B3%A8%20%EB%8B%A8%ED%95%A9%EA%B0%80_M10_ChatGPT_Suno4.5.mp3?attach=1&knm=tfile.mp3|모노골 단합가_M10_ChatGPT_Suno4.5",
"https://blog.kakaocdn.net/dn/crjL1h/btsNJZl5f7a/nUJcHASw6OMkt4uPKkloTk/%ED%95%9C%EA%B3%84%EB%AA%A9%EA%B3%BC%20%EC%9C%A0%EC%B1%84%EA%BD%83%EB%B0%AD%EC%9D%98%20%EB%AC%B5%EC%9D%80%EC%A7%80%20%EB%B2%97_W11_GPT_riffusion.mp3?attach=1&knm=tfile.mp3|한계목과 유채꽃밭의 묵은지 벗_(처음 버전) W11_copilot_FUZZ-0.8",
"https://blog.kakaocdn.net/dn/u5B66/btsOtL04NDf/SzF4ub3nitkK9FouYaQd8K/%EB%B2%9A%EA%BD%83%EC%9D%B4%20%ED%94%BC%EC%96%B4%EB%82%9C%20%EB%82%A0_M3_ChatGPT_Suno4.5.mp3?attach=1&knm=tfile.mp3|벚꽃이 피어난 날_M3_ChatGPT_Suno4.5",
"https://blog.kakaocdn.net/dn/8xUBH/btsOB98WmZP/CjSRCJoC1ciGST3BSKMX41/0%20%EB%AA%A8%EB%85%B8%EA%B3%A8%EC%9D%98%20%EB%B6%84%ED%99%8D%EB%B9%9B%20%EC%86%8D%EC%82%AD%EC%9E%84_M3_Gemini_Suno4.5.mp3?attach=1&knm=tfile.mp3|모노골의 분홍빛 속삭임_M3_Gemini_Suno4.5",
"https://blog.kakaocdn.net/dn/l3Qqa/btsOug0qPjQ/ezMnIGsv6jhWEcGdtOcnY0/%EB%AC%B5%EC%9D%80%EC%A7%80%20%EB%B2%97%EA%B3%BC%20%EA%B1%B7%EB%8A%94%20%EC%9C%A0%EC%B1%84%EA%BD%83%20%EC%82%AC%EC%9E%87%EA%B8%B8_M2_copilot_Suno4.5.mp3?attach=1&knm=tfile.mp3|묵은지 벗과 걷는 유채꽃 사잇길_M2_copilot_Suno4.5",
"https://blog.kakaocdn.net/dn/bFLk4v/btsNJKit0d2/ukWGU27PckMDifjKEMwqD0/%EB%82%A8%EB%8C%80%EC%B2%9C%EC%9D%98%20%EA%B7%80%ED%96%A5%2C%20%ED%95%9C%EA%B3%84%EB%AA%A9%EC%9D%98%20%EB%85%B8%EB%9E%98_M11_GPT_riffusion.mp3?attach=1&knm=tfile.mp3|남대천의 귀향, 한계목의 노래_(처음 버전) M11_GPT_FUZZ-0.8",
"https://blog.kakaocdn.net/dn/FfTGo/btsOsVXtBBk/VJaLd2JvIO6sY76vFuC5t1/%EC%96%91%EC%B4%88%2049%ED%9A%8C%EC%9D%98%20%EC%9C%A0%EC%B1%84%EA%BD%83%20%EC%9D%B4%EC%95%BC%EA%B8%B0_MW1_ChatGPT_Suno4.5.mp3?attach=1&knm=tfile.mp3|양초 49회의 유채꽃 이야기_MW1_ChatGPT_Suno4.5",
"https://blog.kakaocdn.net/dn/rQL3C/btsOsE2R4JE/Dr2sLBHiVBZxjiiYpQZl2K/%EC%96%91%EC%96%91%20%EB%AA%A8%EB%85%B8%EA%B3%A8%2C%20%ED%95%98%EC%96%80%20%EC%84%A4%EB%A0%98%EC%9D%98%20%EB%85%B8%EB%9E%98_M6_Gemini_Suno4.5.mp3?attach=1&knm=tfile.mp3|양양 모노골, 하얀 설렘의 노래_M6_Gemini_Suno4.5",
"https://blog.kakaocdn.net/dn/H7mcz/btsNHUKsaTh/8KricxczdKheEePDhkTVK0/%ED%95%9C%EA%B3%84%EB%AA%A9%EC%9D%B4%20%EB%B6%80%EB%A5%B4%EB%8A%94%20%EC%97%B0%EC%96%B4%EC%9D%98%20%EA%B7%80%ED%96%A5_M12_copilot_riffusion.mp3?attach=1&knm=tfile.mp3|한계목이 부르는 연어의 귀향_(처음 버전) M12_copilot_FUZZ-1.0",
"https://blog.kakaocdn.net/dn/u5Nmh/btsNBtmBFja/TsfPTzCeFrjsyp0awBb1AK/%EB%AC%B5%EC%9D%80%EC%A7%80%20%EC%9A%B0%EC%A0%95%EA%B3%BC%20%EB%8F%99%EC%8B%AC%EC%9D%98%20%EB%B2%A4%EC%B9%98_W11_copilot_riffusion.mp3?attach=1&knm=tfile.mp3|묵은지 우정과 동심의 벤치_(처음 버전) W11_copilot_riffusion",
"https://blog.kakaocdn.net/dn/k1evW/btsOrxbEs36/cfVpdutZJWvXD71Az72iM0/%EB%B0%98%EA%B3%B5%EC%9D%BC%20%EC%9E%AC%EB%82%80%20%EC%84%A4%EC%95%85%EC%82%B0%20%EC%9D%B4%EC%95%BC%EA%B8%B0_WM1_ChatGPT_Suno4.5.mp3?attach=1&knm=tfile.mp3|반공일 재낀 설악산 이야기_WM1_ChatGPT_Suno4.5",
"https://blog.kakaocdn.net/dn/dKsy9l/btsOyuy1Vgd/p791mNaXQ0XVv6coOoKrmk/%ED%8E%B8%EC%A7%80%ED%95%A8%EC%97%90%20%EA%B0%80%EB%93%9D%20%EC%B0%AC%20%EB%8F%99%EC%88%99%EC%9D%98%20%ED%8E%B8%EC%A7%80%EB%93%A4.._W3_GPT_Suno3.5.mp3?attach=1&knm=tfile.mp3|편지함에 가득 찬 동숙의 편지들.._(무료 Suno3.5) W3_GPT_Suno3.5",
"https://blog.kakaocdn.net/dn/blr8lc/btsOrvdZlma/xGGmg2gVyQXHWVxkjxQ8n0/1%20%EB%AA%A8%EB%85%B8%EA%B3%A8%20%EB%8B%A8%ED%95%A9%EA%B0%80_M8_ChatGPT_Suno4.5.mp3?attach=1&knm=tfile.mp3|모노골 단합가 (떼창)_M8_ChatGPT_Suno4.5",
]

song = [
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/c6ISpT/btsOybETCGr/YEm4hlcx76OqzDttCuM2jk/img.png') repeat fixed center center\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>자랑스러운 양양의 노래</b></font><br><br>\
\
설악의 정기 받고 <br>\
오색의 물줄기 이어 받은..<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/HoawP/btsOCaGcwV1/ZC0i44lMIC0ZS6kdoRFdo0/img.jpg' width=100%><br><br>\
\
산 좋고 물 맑은 축복의 땅, <br>\
양양 이라오~~<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/bPAZQ1/btsOCR6VM7s/KHjuf3FuZqXNkaTcb1PBs1/img.jpg' width=100%><br><br><br>\
\
\
호국 정신 깃든 <br>\
현산공원 벚꽃이 만발하고,<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/QVRYO/btsNdvlw3Ai/S8rCOOX6GsxlgIZFLz4gyK/img.jpg' width=100%><br><br>\
\
제방뚝 벚꽃길 활짝 웃으며 <br>\
생생 축제를 알리네<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/cq8pQ8/btsNeROHUYq/DfO8x8roc8WwIJKt7lwpfk/img.jpg' width=100%><br><br><br>\
\
\
곰밭에 분홍빛 복사꽃 향기 <br>\
바람에 실려오면..<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/dgSuxe/btsOAZllzpi/xIkmpvrKzDybrWmf39fRD0/img.jpg' width=100%><br><br>\
\
은어 황어 떼 춤추며 <br>\
남대천 여정을 시작한다<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/cVrZJ0/btsOCN4AbFQ/Y4HSJabsK2eeiM5jfKKmK1/img.jpg' width=100%><br><br><br>\
\
\
넘실대는 갈대와 억새풀이 <br>\
손짓하며 부르고,<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/y4PbA/btsOA4fOc2e/ctqcRTkJzdMPnCU5sbR7w0/img.jpg' width=100%><br><br>\
\
황금 물결 가평리 유채꽃밭 <br>\
눈부신 유혹을 펼치네..<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/nvxel/btsOAJQpN2Y/VNxuKCdrlLKut4miaqKdNk/img.jpg' width=100%><br><br><br>\
\
\
맑은 공기 가슴 가득, <br>\
깨끗한 이슬 머금은..<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/cdouBJ/btsOADpo5mP/KoJOQCR4X7yGUkKh2Kgk7K/img.jpg' width=100%><br><br>\
\
천년의 솔향 그윽한 양양 송이, <br>\
단연코 으뜸이라오<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/s5wcQ/btsOB1bmNG4/1bKQS6CIykYtAiz2hmC9v1/img.jpg' width=100%><br><br><br>\
\
\
낙산의 명사십리, <br>\
끝없이 펼쳐지는 고운 백사장<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/PMtLm/btsOA5yS0sD/iKBRwZhnTdKjQ7Qx0EzeP0/img.jpg' width=100%><br><br>\
\
남대천 물결이 <br>\
푸른 동해와 만나는 한계목에..<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/oKndE/btsOAFncaX5/UItKkvIWUuno53EOHtMiY1/img.jpg' width=100%><br><br><br>\
\
\
북태평양 저 멀리 떠났던 <br>\
연어의 발자취,   <br><br>\
\
<img src='https://blog.kakaocdn.net/dn/ctLzRD/btsOBnstbh2/g2WkntqnODkkpqIaKc8Yj1/img.jpg' width=100%><br><br>\
\
모천으로 귀향하며 <br>\
힘차게 거슬러 오른다<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/bPXmqh/btsOA4NwYJ9/XkPoEgEVnuJbNVvaO7gzqk/img.jpg' width=100%><br><br><br>\
\
\
관동별곡 의상대, <br>\
장엄한 일출에 옷깃을 여미니..<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/APc6t/btsOCENyY9H/xeWqnSsajA1bksmGDeVnK0/img.jpg' width=100%><br><br>\
\
해수관음상 인자한 미소는 <br>\
홍련암을 가리키네<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/mtmUU/btsOA1i9KRo/51iSqfKoQYyvvC1KGddPT0/img.jpg' width=100%><br><br><br>\
\
\
빗살무늬 신비를 간직한 <br>\
오산리 선사 유적 박물관<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/kFusB/btsOAZr85xv/7Ek2Qk6ippxfcyZ0TUOeO1/img.jpg' width=100%><br><br>\
\
푸른 물결 가르며 <br>\
요트 체험하는 수산항 마리나<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/eofX9m/btsOCRMDfQa/DyvEk2WcM7DTE1dkmUuS9K/img.jpg' width=100%><br><br><br>\
\
\
하륜과 조준의 지혜 숨쉬는 하조대,, <br>\
애국가의 소나무<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/c0E2vW/btsOBRmylgI/CXWTpvLktx0rLKDVge1jJ1/img.jpg' width=100%><br><br>\
\
진한 죽향 감돌고 <br>\
황홀한 비경을 품은 죽도정 가고파~<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/Co6ov/btsOChLO6UI/BP9miVUdZIoXzsRhNnWjXK/img.jpg' width=100%><br><br><br>\
\
\
파도 부서지는 젊음의 열기, <br>\
서핑의 성지, 서피 비치<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/ldzYI/btsOCw202CF/7ap16edMPlBKsXzPuottp0/img.jpg' width=100%><br><br>\
\
쪽빛 바다 펼쳐진 남애항 <br>\
스카이 워크를 걷는다<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/rRtb3/btsOCfUJGmN/NsXlWenx7e6R2LsCcwf0Hk/img.jpg' width=100%><br><br><br>\
\
\
맑은 계곡 해담 마을, <br>\
태고 신비의 미천골 휴양림<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/BCZUs/btsOCm0GmqF/IR2MbNqasIz4gCOl1VcoB0/img.jpg' width=100%><br><br>\
\
푸른 숲이 우거지고 <br>\
구름도 쉬어 가는 구룡령<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/ChpIH/btsOCijDW4V/6Vbnhc327juC0BhtkaVDWk/img.jpg' width=100%><br><br><br>\
\
\
오색 약수 시원하게 목 축이고 <br>\
성국사 지나면..<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/cxgpqL/btsOBZdAsOZ/n8dU6v0OyomYQHHezaERY1/img.jpg' width=100%><br><br>\
\
흩날리는 물보라가 <br>\
무지개로 피어나는 용소 폭포<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/bBOfvR/btsOCMxQjEp/Mw0r2D2PawwsCSYVNk8aOk/img.png' width=100%><br><br><br>\
\
\
자연이 빚은 예술, <br>\
말없이 위로를 건네던 한계령<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/ce5HzP/btsOBhFOkCF/tQ8t4Oq2ksJcG2ggJgEEKk/img.jpg' width=100%><br><br>\
\
오색 찬란한 빛의 향연, <br>\
이제는 오색령이라 부르네<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/eGdE1I/btsOCBDli6P/n6lFpKls8pLKzxwJfE7Mck/img.jpg' width=100%><br><br><br>\
\
\
백두대간 아름다움, <br>\
태고의 웅비, 설악산 대청봉<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/bKXRo4/btsOBYsaWVk/20kBdvfuQvwOgmAnWjNN11/img.jpg' width=100%><br><br>\
\
동해 바다마저 품은.. <br>\
양양 오색리 산 일번지 이라오!<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/xUysx/btsOBixXNQX/cyDDWrYK1dHAnEQyGYYd9K/img.jpg' width=100%><br><br><br>\
\
\
파도와 바람을 품은 양양의 품 안에서<br>\
역사와 자연과 사람이 하나 되어<br>\
이 찬란한 순간을 노래하네<br><br>\
\
<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbxpdur%2FbtsOAKIBuFA%2FYhNO1pgSXM7VHzaXvmUvN1%2Fimg.jpg' width=100%><br><br>\
\
고맙다 양양!, <br>\
우리 모두의 자랑이라오~~~<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/bDqcg1/btsOBmG7qbN/XSPV3RPr8JPlXiITNhXYk1/img.jpg' width=100%><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/snSlz/btsOwKIcRVb/ACeSrvU112PYTZJP8lbsQ1/img.jpg') repeat fixed center center\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>반공일 재낀 설악산 이야기</b></font><br><br>\
\
고교 시절의 이야기, <br>\
여덟 번째 추억을 열어요<br>\
1975년 유월의 바람, <br>\
우린 설악산으로 떠났지<br><br>\
\
금요일 현충일에 이어진 반공일<br>\
딱 네 시간만 재끼면.. <br>\
2박 3일의 천국!<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/LZL5p/btsFlOr26UD/OnFvRMMKwcYAkRZkHelWx0/img.jpg' width=100% title='🎨 강상의 양양 친구들'><br><br>\
\
1반 세용, 4반 경순, <br>\
그리고 6반의 나<br>\
반은 달랐어도 마음은 하나로..<br><br>\
\
이것이 인생이다! <br>\
외치며 떠났던 설악산<br>\
하지만… <br>\
막차 놓쳐 3박 4일의 연장전<br><br>\
\
네 시간 반공일 재낀 대까로 치러진<br>\
무심한 감초 선생님의 학부형 호출!<br><br>\
\
초등 6년 개근에 중학교 3년 개근생<br>\
처음 지른 무단결석에.. <br>\
정근상도 날아갔네<br><br><br>\
\
\
교복 왼쪽 주머니 안, 그 수첩 속에는<br>\
정란여상 고적답사반 세 명의 주소!<br><br>\
\
감초샘은 망설임 없이 <br>\
그 페이지 찢어버렸네<br>\
'내 인생의 변곡점'이 <br>\
날아가는 순간이었소<br><br>\
\
임영 고개, 영동여상의 물결 헤치며<br>\
유쾌하게 교실로 들어섰지만<br>\
월담 단속의 제왕, <br>\
감초 선생님의 추궁..<br>\
과수원 핑계는 통하지 않았었지<br><br><br>\
\
\
점심 밥상 대신 마주한 <br>\
학부형 호출 통지서!<br>\
두 시간 반, 버스 속 <br>\
아버지의 심정 어땠을까?<br><br>\
\
자식 걱정 내려놓으며 <br>\
그제야 느낀 아버지의 배고픔,<br>\
그 모습 바라보며 <br>\
내 콧등은 시큰해졌네<br><br>\
\
그때 다짐했었지, 이제 다시는..<br>\
오직 학업에만 전념하겠노라고..<br><br>\
\
아버지 배웅하고 <br>\
하숙집으로 돌아오는 길에..<br>\
'작심삼초'의 그 맹세 <br>\
다 날아가 버렸네~~~<br><br><br>\
\
\
철 없이 질러 본 그때의 일탈 하나<br>\
하염없이 날아가 버린 수첩 속의 인연<br>\
그 끝에는 아버지의 허기졌던 뒷모습..<br><br>\
\
후회와 다짐들, <br>\
이제는 철부지 추억으로 남았네<br><br><br>\
\
\
상업 부기 선생님은 말씀하셨지<br>\
차변에 설악산, 대변엔 대청봉이냐?<br><br>\
\
교복 속 추억은 나를 웃기고 울리며<br>\
그 시절의 이야기가 <br>\
노래되어 퍼집니다<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/k8I4C/btsFkJExzPQ/xNtjYfKJzcgwPosWE1QmWk/img.jpg' width=100% title='🎨 교복 왼쪽 주머니 속의 수첩'><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/blqp6E/btsOwQaTLPa/WKMt3R466ybf7LNWQKBbs1/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>양양 쏠비치, 내 추억의 뜰</b></font><br><br>\
<font color='#0F258A'>\
양양의 쏠비치, 그 이름만으로<br>\
가슴 한켠이 부풀어 오르고<br>\
햇살의 물결, 파란 그 숨결이<br>\
추억 속으로 나를 다시 부릅니다<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/cogNm1/btrJCquwVJ4/kK9wndW3KfKrNW9ytRnto0/img.jpg?original' width=100%><br><br>\
\
붉은 기와 위로 햇살이 내려앉고<br>\
하얀 벽에 파란 하늘 숨을 고르면<br>\
바닷바람 품은 지중해풍의 궁전은<br>\
한 폭의 그림으로 펼쳐집니다<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/dasHGx/btsOAEaLyMq/kMUanC6oO9SJujXMTqW7R1/img.jpg' width=100%><br><br>\
\
하늘은 바다를 내려다보며<br>\
구름 한 조각 슬며시 띄우고<br>\
바다는 가만히 바람을 밀어<br>\
멋진 뭉게구름 피워 올립니다<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/c9PGTL/btrJ7Reu77L/FLNC5EbOU0upIh0jdjrVS0/img.jpg?original' width=100%><br><br>\
\
하늘과 바다가 만났던 자리<br>\
아무 말 없이 같은 하늘 바라본다면<br>\
그것만으로 詩가 되는 쏠비치 그곳<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/bmx7on/btrJFPGSw8a/072DSzMQ1rkcE8HGV2kUj0/img.jpg?original' width=100%><br><br>\
웃음 하나, <br>\
구름 두 개 카메라에 담아요<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/mJoOa/btrJ7sst0AF/mMJ8fHuvwzzKHR1MSjGUT0/img.jpg?original' width=100%><br><br><br>\
\
\
바위 하나, 아무 말도 없이<br>\
시간을 품은 채 누워 있는 곳<br>\
누구 하나 떠밀지 않은 풍경<br>\
가볍고 자유로운 느낌을 만끽합니다<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/dBfPHv/btrJ8njC9Pf/XZkGBLWc6dlsDkEz4AXVR0/img.jpg?original' width=100%><br><br>\
\
코발트색 물 위로 <br>\
붉은 배 한 척 떠있는<br>\
광장 정원의 커브 진 <br>\
오솔길 따라 걸으면..<br><br>\
\
하루를 접어 하늘에 띄워도 <br>\
아깝지 않아요.<br>\
고단한 마음 쉬어가는 <br>\
예쁜 오늘이 됩니다~~<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/Ijgj1/btsOA9VBZrf/vkwEU8lDUUxvMcFjAivJTk/img.jpg' width=100%><br><br>\
\
양양의 쏠비치, 그 이름만으로<br>\
낯설지 않은 포근한 설렘으로<br>\
마음이 먼저 달려가는 안식처<br>\
내 추억의 뜰, 쉼터가 되었습니다<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/bKvyYH/btsOB6X55SJ/fmCWWaTN9pibcntqZUkdvk/img.png' width=100%><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/cihCcv/btsOxqCPdfh/gtmA9skuqKXikIeFixCqX0/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>(옥이의) 쏠비치 리사이틀</b></font><br><br>\
<font color='white'>\
하늘과 바다가 만난 수평선 위로<br>\
나의 무대가 펼쳐집니다<br>\
바람이 반주해 주는 아리아<br>\
파도는 리듬에 맞춰 박수를 쳐요<br><br>\
\
햇살 한 줄기 어깨를 스치며<br>\
붉은 배가 소품이 되는 이 순간<br>\
나는 오늘, 하늘 배경의 무대를 펼치며<br>\
추억 하나를 건져 올립니다~<br><br>\
\
여기는 쏠비치, 바다 위 리사이틀<br>\
우정도 웃음도 화음 되어 울려 퍼져요<br><br>\
\
손끝 하나로 전하는 나의 멜로디<br>\
지금 이 순간, <br>\
멋진 추억의 무대가 됩니다<br><br>\
\
벽화 속 사연은 노래처럼 흐르고<br>\
시간을 건너온 소녀 같은 미소 지으며<br>\
돌담 위를 걷는 이 하루가  <br>\
노래가 되어 마음에 새겨집니다  <br><br>\
\
한 손엔 하늘, 한 손엔 바다<br>\
나는 오늘, 가장 고운 화음으로<br>\
푸른 날개 입은 저 구름 사이로<br>\
내 마음도 가볍게 날아갑니다.  <br><br>\
\
여기는 쏠비치, 바다 위 리사이틀<br>\
한 송이 꽃인 척 나를 피워냅니다<br>\
파란 하늘 아래 펼쳐진 나의 이야기<br>\
당신이 미소 하나 머금으면..  <br><br>\
\
나는 또 한 곡, 다시 부를 수 있어요<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/cw6Mbz/btsOAyn6MED/rQX8gmERswxLD4hYLJWFs0/img.jpg' width=100%><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/dOjIie/btsOwPXmUQO/bQM7fynAXawCYdEKwtRKTk/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>모노골 단합가</b></font><br><br>\
\
천년의 향기, <br>\
솔향이 은은히 퍼지는 날에..<br><br>\
\
소나무의 피톤치드, <br>\
마음껏 들이마시며<br><br>\
\
벚꽃 향기 흩날리는 봄의 향연 따라<br>\
오늘도 우리는 <br>\
모노골 오솔길을 정답게 걷는다!<br><br><br>\
\
\
숨 가쁘게 오르는 오르막길,<br>\
다리 휘청대는 고갯길에도 <br>\
웃음꽃 피네<br><br>\
\
고갯마루 넘어서면 반기는 그곳,<br>\
꽃과 새들이 들려주는 모노골의 노래!<br><br>\
\
기운 내어 앞으로, 함께 가자!<br>\
피톤치드 내음 따라 힘차게 걷자!<br><br>\
\
한 걸음 한 걸음 쌓이는 정<br>\
우린 오늘도 <br>\
같이 걷는 변치 않을 친구로다!<br><br><br>\
\
\
샘터의 물 한 모금에 땀을 식히며<br>\
모노골 벤치에선 정담의 꽃 피어난다<br><br>\
\
친구와 같이 걷는 이 길이 좋구나<br>\
모노골 길에는 우리의 우정이 흐른다!<br><br>\
\
기운 내어 앞으로, 함께 가자!<br>\
햇살 속에 웃으며 힘차게 걷자!<br><br>\
\
바람을 벗 삼고 꽃을 노래하며<br>\
우리의 단합은 모노골에서 자라난다<br><br><br>\
\
\
비바람 불고 눈보라 친다 해도<br>\
이 길을 함께 걷는다면 두렵지 않으리<br><br>\
\
산도 들도, 나무들도 기억하리라<br>\
모노골의 친구들이 지나간 이 길을!<br><br>\
\
함께라서 더욱 정다운 우리의 이름들..<br>\
덕찬아! 상경아! 상복아! 정한아!<br>\
진섭아! 헌길아! 모두 모두 불러본다!<br><br>\
\
이 세상 소풍이 끝나는 그날까지 <br>\
같이 갈 친구들..<br><br>\
\
오늘도 우리는 <br>\
모노골 오솔길을 정답게 걷는다~!<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/zrCt3/btsNnyI5Djh/HADI6vFM7TCpIuYK2rR5D0/img.jpg' width=100%><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/cUp0rL/btsN2ckyc1D/BPLfEWUUqnn1dvGE9u6hLK/img.png') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>모노골 단합가 (떼창)</b></font><br><br>\
\
천년의 향기, <br>\
솔향이 은은히 퍼지는 날에..<br><br>\
\
소나무의 피톤치드, <br>\
마음껏 들이마시며<br><br>\
\
벚꽃 향기 흩날리는 봄의 향연 따라<br>\
오늘도 우리는 <br>\
모노골 오솔길을 정답게 걷는다!<br><br><br>\
\
\
숨 가쁘게 오르는 오르막길,<br>\
다리 휘청대는 고갯길에도 <br>\
웃음꽃 피네<br><br>\
\
고갯마루 넘어서면 반기는 그곳,<br>\
꽃과 새들이 들려주는 모노골의 노래!<br><br><br>\
\
\
[Chorus – Group Chant (떼창)]<br>\
기운 내어 앞으로, 함께 가자!<br>\
피톤치드 내음 따라 힘차게 걷자!<br><br>\
\
한 걸음 한 걸음 쌓이는 정<br>\
우린 오늘도 <br>\
같이 걷는 변치 않을 친구로다!<br><br><br>\
\
\
샘터의 물 한 모금에 땀을 식히며<br>\
모노골 벤치에선 정담의 꽃 피어난다<br><br>\
\
친구와 같이 걷는 이 길이 좋구나<br>\
모노골 길에는 우리의 우정이 흐른다!<br><br><br>\
\
\
[Chorus – Group Chant (떼창)]<br>\
기운 내어 앞으로, 함께 가자!<br>\
햇살 속에 웃으며 힘차게 걷자!<br><br>\
\
바람을 벗 삼고 꽃을 노래하며<br>\
우리의 단합은 모노골에서 자라난다<br><br><br>\
\
\
비바람 불고 눈보라 친다 해도<br>\
이 길을 함께 걷는다면 두렵지 않으리<br><br>\
\
산도 들도, 나무들도 기억하리라<br>\
모노골의 친구들이 지나간 이 길을!<br><br>\
\
함께라서 더욱 정다운 우리의 이름들..<br>\
덕찬아! 상경아! 상복아! 정한아!<br>\
진섭아! 헌길아! 모두 모두 불러본다!<br><br>\
\
이 세상 소풍이 끝나는 그날까지 <br>\
같이 갈 친구들..<br><br>\
\
오늘도 우리는 <br>\
모노골 오솔길을 정답게 걷는다~!<br><br><br>\
\
\
[Chorus – Group Chant (떼창)]<br>\
모노골! 친구들이여! 영원하리라!<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/zZ7KY/btsNnBFP1E8/haQLjUsvkNOhMPzsWW1qw1/img.jpg' width=100%><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/dOjIie/btsOwPXmUQO/bQM7fynAXawCYdEKwtRKTk/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>한계목과 유채꽃밭의 묵은지 벗</b></font><br><br>\
\
먼 길을 넘어서 찾아온 벗<br>\
한계목 물결 사이에 머물고,<br>\
바람이 붓 칠한 푸른 하늘 아래에<br>\
추억은 강물처럼 흐르고 있네요.<br><br>\
\
먼 곳에서 벗이 찾아오니<br>\
이 어찌 기쁘지 아니한가.<br>\
낙산의 명사십리, 백사장 따라<br>\
우리의 우정은 노을처럼 번집니다.<br><br>\
\
남대천과 바닷물이 만나는 자리에<br>\
시간이 멈춘 듯이 우리를 감싸네요.<br>\
붉게 타는 저녁 노을 아래에<br>\
묵은지 우정은 더욱더 깊어집니다.<br><br>\
\
먼 곳에서 벗이 찾아오니<br>\
이 어찌 기쁘지 아니한가.<br>\
가평리 유채꽃밭, 사잇길 따라<br>\
우리의 우정은 들녘으로 퍼집니다.<br><br>\
\
한계목 끝에서 바라본 세상,<br>\
그곳엔 바람과 우리의 이야기.<br>\
다음 만남을 기다리며<br>\
이 순간을 가슴속에 새겨둡니다.<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/GOnnN/btsNAQ3C6VB/T2MqF0wWtEb7kjzrFKYpH1/img.jpg' width=100%><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/lCzEx/btsOwIRcRNb/ANEpXoUomzTmmHRyAeTJpK/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid2'>\
<font color='blue'><b>남대천의 귀향, 한계목의 노래</b></font><br><br>\
\
좁은 한계목, 잔잔한 길목 위에<br>\
웅장한 남대천 물결이 흐르네<br><br>\
\
바람에 실려 온 연어들, <br>\
모천의 문을 향해<br>\
거슬러 올라가는 기적, <br>\
시작되는 생명의 노래<br><br>\
\
그 물길 속에 우정이 피어나고,<br>\
시간을 거슬러 퍼져가는 이야기들..<br><br>\
\
남대천의 귀향은 우리들의 노래,<br>\
좁은 한계목에서 <br>\
새로운 만남을 기다려요<br><br>\
\
은어와 황어 떼, 한 줄기 꿈처럼<br>\
맑은 물길 따라 <br>\
여정의 첫 발자국을 남기고..<br><br>\
\
자연이 선사하는 찬란한 약속 안에<br>\
서서히 피어나는 미래, <br>\
희망의 소리를 담아요<br><br>\
\
비록 그 길목은 좁을지라도<br>\
물결에 담긴 생명의 속삭임은 <br>\
거칠고 고귀해.<br><br>\
\
우리 마음 깊은 곳에 <br>\
잔잔한 울림을 남기며<br>\
또 다른 우정, <br>\
새로운 인연의 빛을 밝혀주네요.<br><br>\
\
남대천의 귀향, 한계목의 노래!<br><br>\
\
그 물결 위에 <br>\
희망을 머금은 잔잔한 선율<br>\
모든 시간이 멈춘 듯한 그 순간에<br>\
우리는 함께 미래를 향해 노래하리라<br><br>\
\
한계목의 조용한 길목에서 시작된<br>\
웅장하게 흐르는 남대천의 이야기 속에<br>\
우리의 새로운 만남의 약속이 피어나고<br><br>\
\
우리들 우정의 노래는 <br>\
영원히 이어지리라~~<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/bPgjOi/btsNnLalRQo/KGhW4Wq0jPyzdrRiRzo7Ik/img.jpg' width=100%><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/uWnZo/btsOxg1doCo/QyzvW4T03Y9tCyotueEjlK/img.png') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid2'>\
<font color='blue'><b>한계목이 부르는 연어의 귀향</b></font><br><br>\
\
좁은 한계목, <br>\
남대천과 바다가 만나는 곳<br><br>\
\
스마트폰 렌즈로도 잡기 어려운<br>\
미묘한 경계 속에<br>\
연어들의 귀향, <br>\
생명의 약속으로 흐릅니다.<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/9hjE6/btsNA23MVT2/mWakq1AgYMf6nJJc73BX31/img.jpg' width=100%><br><br>\
\
연어의 발자취, 태평양 그 너머<br>\
돌아오는 귀향길 위에<br><br>\
\
은어와 황어 떼, 맑은 물길을 헤치며<br>\
자연의 노래가 되어 바람에 흩날리네요<br><br>\
\
남대천의 하류에 서면<br>\
영동의 제일 맑은 물결 속에<br>\
모든 생명이 다시 시작되는<br>\
그 신비로운 ‘남대천 여정’이 열려요.<br><br>\
\
낙산의 명사십리 고운 백사장을 따라<br>\
모천의 관문 한계목에서<br>\
연어의 귀향은 또 다른 시작이 되고,<br><br>\
\
바람 따라, 물결 따라, <br>\
영원히 이어집니다.<br><br>\
\
짧은 만남의 폭에도<br>\
숨겨진 우주는 펼쳐지고,<br>\
바다와 남대천이 하나 되어<br>\
귀향의 꿈을 노래합니다.<br><br>\
\
좁은 한계목에 머물렀던 시간도<br>\
작은 물결 속에 담긴 거대한 이야기,<br>\
다시 만날 그날을 위해<br><br>\
\
생명의 노래를 바람에 띄워 보냅니다.<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/C8Pj9/btsNjHT9ns9/vekArTILevYmbGaICDMjT1/img.jpg' width=100%><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/sNaVQ/btsOw5MrWui/XGD5nbYNLQJf9kOr9t8nNk/img.png') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>봄날에 찾아온 묵은지 친구</b></font><br><br>\
\
봄바람 불어오는 뚝방길 따라<br>\
벚꽃이 흩날리며 우리를 반기네요<br>\
남대천 물결에 마음을 실으면<br>\
학창 시절의 추억이 되살아납니다<br>\
  <br>\
네가 오기를 기다리는 제방뚝에서<br>\
나는 카메라에 봄꽃들을 담아요.<br>\
조금 늦어져도 괜찮아,<br>\
기다림마저 내게는 선물이 되지요.<br><br>\
\
유채꽃 물든 그 언덕 너머로<br>\
쏠비치 바람은 우리를 감싸고<br>\
사진 한 장의 웃음 속에서<br>\
이 순간은 추억으로 물들어갑니다<br><br>\
\
묵은지처럼 깊어가는 우정,<br>\
세월도 우리를 갈라놓지는 못해요<br>\
먼 길을 넘어 찾아온 너,<br>\
오늘은 내 마음의 봄날이 되어요<br><br>\
\
48년의 세월을 담은 묵은지 친구!<br><br>\
\
노랗게 물든 일편단심 민들레처럼<br>\
하얀 솜사탕 민들레 홀씨처럼<br>\
오래된 향기 되어 <br>\
하늘 높이 퍼져가네요~~<br><br>\
\
멀리서 벗이 찾아오니<br>\
이 어찌 기쁘지 아니한가<br>\
묵은지 같은 너와 나의 우정은<br>\
봄날에 다시 피어 더욱더 익어갑니다<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/lbaIA/btsNFv6xsmo/DWrP40t7ku3iRAL0huHBX0/img.jpg' width=100%><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/bIOw4O/btsOxvcI0wP/uIiMEvvERdrFAY3sWSaKK0/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>묵은지 우정과 동심의 벤치</b></font><br><br>\
\
유채꽃 사잇길 지나 <br>\
작은 계단을 오르면<br>\
소나무 아래는 우리의 자리.<br><br>\
\
반겨주는 빨강과 노랑의 벤치<br>\
푸른 바다는 기억을 품고 있어요.<br><br>\
\
노란 꽃들 사이로 바람이 불어<br>\
동심의 속삭임이 퍼져 가네요.<br>\
푸른 하늘 아래 그때의 웃음<br>\
우리의 시간은 다시 피어납니다.<br><br>\
\
묵은지 우정은 바람을 타고<br>\
봄날의 향기 속에 머물러요.<br>\
어릴 적 뛰어놀던 그 골목길<br>\
여기서 다시 만나는 우리의 이야기.<br><br>\
\
붓을 들고 하늘이 그려낸 풍경<br>\
기억의 그림들이 번져 가네요.<br>\
구름 사이로 번지는 추억<br>\
그속에 내맘도 찾아 들어갑니다.<br><br>\
\
푸른 바람 따라 흩어진 순간들<br>\
하늘빛 속에 머무는 이야기.<br>\
두 팔을 벌려 하늘을 품으면<br>\
푸른 빛깔이 손끝에 스며드네요.<br><br>\
\
빛깔 모아 희망의 주문을 걸고<br>\
수채화 구름에게 꿈을 띄워요.<br>\
꽃밭 사이로 번지는 우정<br>\
추억은 노래가 되어 퍼져갑니다.<br><br>\
\
노란 꽃들 속에서 속삭이는<br>\
우리의 이야기는 봄날의 주문.<br>\
시간이 멈춘 듯 눈을 감으며<br>\
다시 마주할 그날을 그려봅니다.<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/GFyRc/btsNGieA1Rn/1F1lQ5fdWkGdxWvzBEIfS0/img.jpg' width=100%><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/bOQjUq/btsOxEOlhuW/fcSTci4dhrlhsgy4eFuqck/img.jpg') repeat fixed left top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>유채꽃 사잇길 동심의 벤치</b></font><br><br>\
\
유채꽃 사잇길 지나 <br>\
작은 계단을 오르면<br>\
소나무 아래는 우리의 자리.<br><br>\
\
반겨주는 빨강과 노랑의 벤치<br>\
파랑 바다는 기억을 품고 있어요.<br><br>\
\
노란 꽃들 사이로 바람이 불어<br>\
동심의 속삭임이 퍼져 가네요.<br>\
푸른 하늘 아래 그때의 웃음<br>\
우리의 시간은 다시 피어납니다.<br><br>\
\
묵은지 우정은 바람을 타고<br>\
봄날의 향기 속에 머물러요.<br>\
어릴 적 뛰어놀던 그 골목길<br>\
여기서 다시 만나는 우리의 이야기.<br><br>\
\
파랑 바다가 두 팔을 벌려<br>\
우리의 이야기를 품어주네요.<br>\
시간 멈춘 빨강 노랑 벤치에서<br>\
우리의 동심은 다시 피어납니다.<br><br>\
\
붉은 노을이 벤치를 물들이면<br>\
추억은 바다로 스며들어요.<br>\
우리가 다시 마주할 때<br>\
시간은 다시 동심 속으로 흐릅니다.<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/kCNfJ/btsNubzqKyl/lDkivVsBrJug7hQfX23puK/img.jpg' width=100%><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/bcO74Y/btsOxt0gM9C/2LkjOVMSYRjz9bux5q3sg1/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>묵은지 벗과 걷는 유채꽃 사잇길</b></font><br><br>\
\
먼 길을 넘어서 찾아온 벗<br>\
한계목 물결 사이에 머물고,<br>\
바람이 붓 칠한 푸른 하늘 아래에<br>\
추억은 강물처럼 흐르고 있네요.<br><br>\
\
먼 곳에서 벗이 찾아오니<br>\
이 어찌 기쁘지 아니한가.<br>\
낙산의 명사십리, 고운 백사장 따라<br>\
우리의 우정은 노을처럼 번집니다.<br><br>\
\
노란 꽃물결 속으로 한 걸음<br>\
바람 따라 흔들리는 추억의 조각.<br>\
유채꽃 들판 속에 웃음꽃 피우며<br>\
묵은지 벗과 함께 봄을 안고 가네요.<br><br>\
\
햇살을 안고 하늘을 향해<br>\
꽃들 사이로 두 팔을 활짝 펴고,<br>\
웃음소리는 바람에 실려<br>\
봄날의 자유를 노래합니다.<br><br>\
\
유채꽃 사이로 난 길을 걸으면<br>\
어릴 적 뛰놀던 골목이 떠오르고,<br>\
손을 잡고 웃던 그때의 기억들<br>\
봄바람 속에 다시 살아나네요.<br><br>\
\
노란 들판 속에서 시간을 거슬러<br>\
그리운 얼굴이 꽃잎 사이로..<br>\
학창 시절 그 웃음소리처럼<br>\
추억은 여전히 따뜻하게 피어납니다.<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/cC7aP7/btsNGMlVSnz/jLz2XfNdTfyRkpdIA8CBKk/img.jpg' width=100%><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/bwQM7i/btsOx31oa76/OqDQzuYgaF88XeLKZWvb4K/img.jpg') repeat fixed center center\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>양초 49회의 유채꽃 만남</b></font><br><br>\
\
봄빛 물결 춤추는 유채꽃 사잇길<br>\
노랑 향기 가득한 이 들판 위에.<br>\
바람 속에 너울대는 꽃물결 따라<br>\
파랑 하늘 아래 꿈이 피어나네요.<br><br>\
\
빨강, 노랑, 파랑의 세상,<br>\
우리의 동심이 춤추는 색깔들.<br>\
흩날리는 봄빛 속의 설렘이<br>\
그날을 기다리며 가슴에 피어나네요.<br><br>\
\
노랑 의자 위에 함박꽃 웃음<br>\
빨강 의자에 쌓이는 옛 우정들..<br>\
소나무 아래에 바다가 속삭이며<br>\
고향의 기억 속 추억을 불러오네요.<br><br>\
\
빨강, 노랑, 파랑의 세상<br>\
초등 시절의 이야기가 피어나는 곳.<br>\
곧 다가올 친구들과의 만남에<br>\
설렘이 가슴 속 깊이 새겨지네요.<br><br>\
\
소나무 아래에 빨강 노랑의 벤치<br>\
파랑 바다와 함께 펼쳐지는 동심.<br>\
우리가 다시 만나 웃음꽃 피울 때<br>\
봄날의 추억은 더욱 빛날 거예요.<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/cdkjih/btsNvwXmyPx/gD10dtnbLe4pKRGVAqmFf0/img.jpg' width=100%><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/IKRy0/btsOwjScTuU/UKAgUIOg16XzFpQSGEdXmK/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>양초 49회의 유채꽃 이야기</b></font><br><br>\
\
노랑 빛깔 들판 위에 봄바람이 웃고<br>\
유채꽃 사이로 전해진 이름 하나<br>\
보고 싶다는 단톡방의 인사에<br>\
햇살보다 먼저 피어나는 설레임<br><br>\
\
우리들의 눈길을 시샘하는<br>\
봄바람 질투의 살랑임에<br>\
장난어린 유채花는 넘실대며<br>\
파랑 하늘에 수채畵를 그린다<br><br>\
\
유채꽃보다 진한 노랑 의자에<br>\
오래된 우정의 얼굴들이 모여<br>\
동심의 함박 웃음꽃을 피우며<br>\
사진 한 장의 추억을 만든다<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/dk8zpY/btsNuDcmJ1T/uKDWcIprLntvM9r8ZTBtf1/img.jpg' width=100%><br><br>\
\
빨강 의자에 모여든 이야기에<br>\
그때 그 시절 장난이 피어오르고<br>\
어릴 적의 빨 노 파를 배경으로<br>\
양초 49회, 추억을 새긴다<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/b5miC9/btsNr51hrHL/n3eCu8KJkgxl2b2SIxwLf1/img.jpg' width=100%><br><br>\
\
2년의 시간도, 계절의 바람도<br>\
우리를 갈라놓지는 못했네<br>\
그저 한 자리에 모이면<br>\
우리는 여전히 초등의 봄날<br><br>\
\
유채꽃보다 진한 노랑 의자에<br>\
양초 49회, 웃음꽃이 활짝<br>\
빨강 노랑 파랑의 마음 속에서<br>\
우리는 그때로 돌아가는 중<br><br>\
\
소나무 아래, 벤치에 앉아<br>\
고향의 파랑 바다를 바라보면<br>\
지금도 펼쳐지는 동심의 이야기<br>\
유채꽃은 양초 49회의 그날처럼..<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/c4Ie5U/btsNvDBYPJq/wWtzEJ5Nz4WZoyEJRuB5vK/img.jpg' width=100%><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/chCeMn/btsOvvE6B7l/5CWOYKCSZq3iK1ox2QnFxK/img.jpg')  repeat fixed center bottom;\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>편지함에 가득 찬 동숙의 편지들..</b></font><br><br>\
\
햇살 머금은 동북 빌라  <br>\
빨간 동백이 수줍게 웃어요  <br>\
바람결 따라 흩어진 말들  <br>\
편지함 아래에 쌓여만 가네요  <br><br>\
\
<img src='https://blog.kakaocdn.net/dn/7CTKw/btsNob0lTHw/wIXnn8FsklrkxkO9dsauvk/img.jpg' width=100%><br><br>\
\
고귀한 동백꽃, 동숙이라 불렀어요    <br>\
꽃은 졌지만, 사랑은 남아  <br>\
아름다운 추억속의 그 이름  <br>\
내 마음속에 피어나네요  <br><br>\
\
하늘에서 보내준 작은 선물  <br>\
혹시 그 마음 조각날까  <br>\
조심스레 발걸음 멈추어  <br>\
고운 빛깔의 편지를 읽어요  <br><br>\
\
꽃은 졌어도, 향기는 남아  <br>\
어느 봄날, 그대가 머물렀던 자리  <br>\
노을 속의 붉어진 기억처럼  <br>\
다시 피어날 거예요  <br><br>\
\
떨어진 꽃잎도 아름다워요  <br>\
지나가는 계절의 마지막 인사  <br>\
동북 빌라 담장 속 그 자리에  <br>\
내 마음도 함께 물들었어요  <br><br>\
\
편지함에 가득 찬 봄의 끝자락  <br>\
이젠 말할게요, 고마웠다고..  <br>\
그날의 그 꽃, 그 빛, 그 마음  <br>\
모두, 당신 위한 것이었다고...<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/3aHy1/btsNnILqM1m/jInpMa1e2RFTE6XzjOxzG1/img.jpg' width=100%><br>\
</td></tr></table>",
"<table style=\"background-color: #ccffff; background-image: url('https://blog.kakaocdn.net/dn/cD8FYF/btsOwKuDdZP/SBgpsWFQKaSWVvsfJoRTJ1/img.jpg'); background-repeat: repeat; background-position: left bottom;\" cellpadding='8' width='100%'><tr valign=middle><td class='lt'>\
<P class='mid2'>\
<font color='blue'><b>모노골의 분홍빛 속삭임</b></font><br><br>\
\
<font color='white'>분홍빛 물결이 넘실대는 모노골 언덕길<br><br>\
\
사랑스러운 바람이 살랑~ <br>\
내 맘을 간지럽혀..<br>\
햇살 아래로 반짝이는 복사꽃의 미소<br>\
꿈결같은 풍경 속에 나 홀로 서 있네<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/EsKse/btsNjK4tnv6/xASXj5mrWClZQGLeAaiu21/img.jpg' width=100%><br><br>\
\
달콤한 향기 실은 봄바람이 불어와<br>\
내 맘에도 수줍은 사랑의 꽃 피어난다<br>\
무릉도원 펼쳐진 듯 황홀한 이 순간<br>\
복숭아색 치마처럼 설레는 내 마음<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/eEA041/btsNkli5mRZ/5VJuMJFsD3kKh1VWcIWSxk/img.jpg' width=100%><br><br>\
\
깨끗한 공기, 가득한 숲, 작은 오솔길<br>\
발걸음마다 스며드는 사랑의 속삭임<br>\
새색시 볼처럼 발그레한 꽃잎 바라보며<br>\
나도 몰래 두 뺨을 붉게 물들이네<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/kYeNQ/btsNmE2LPhR/s7vGo8mxkDgLmHzROuERc0/img.jpg' width=100%><br><br>\
\
달콤한 향기 실은 봄바람이 불어와<br>\
내 맘에도 수줍은 사랑의 꽃 피어난다<br>\
무릉도원 펼쳐진 듯 황홀한 이 순간<br>\
복숭아색 치마처럼 설레는 내 마음<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/dmTVR4/btsNnKvKHh1/qdMwm8jnZ2XrxyRlJ4JJOk/img.jpg' width=100%><br><br>\
\
시간마저 멈춘 듯 아름다운 이 곳<br>\
분홍빛 사랑에 포근히 안기고 싶어<br>\
너에게 전하고 싶은 설레는 내 마음<br>\
이 봄 바람에 실어 보낸다~~<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/bnyk2N/btsNm2DUZvu/brMe4VGOjkcV4KoeeyrhGK/img.jpg' width=100%><br><br>\
\
달콤한 향기 실은 봄바람이 불어와<br>\
내 맘에도 수줍은 사랑의 꽃 피어난다<br>\
무릉도원 펼쳐진 듯 황홀한 이 순간<br>\
복숭아색 치마처럼 설레는 내 마음<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/begojU/btsNonTMx7g/nkDKsE0uqhK9snimxTafPk/img.jpg' width=100%><br><br>\
\
모노골에 가득한 사랑스러운 향기<br>\
분홍빛 꿈결 속에서 영원히 함께 해<br>\
봄바람처럼 부드럽게 스며든 사랑<br>\
너와 나의 이야기는 영원할 거야~~<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/etj9uS/btsNnZ0aDoX/oF81ilzLT34ATK2LZZtxaK/img.jpg' width=100%></font><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/HZqEX/btsOwe37X8f/yg8VYMY7Q5DTxOOHcoGeHK/img.jpg') repeat fixed left top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid2'>\
<font color='blue'><b>하늘 향해 핀 복사꽃 이야기</b></font><br><br>\
\
하늘이 눈부신 어느 봄날에<br>\
분홍빛 바람이 날 부르네<br>\
복사꽃은 가느다란 팔을 뻗어<br>\
푸른 도화지에 꿈을 그려요<br><br>\
\
연한 농담에 짙은 속삭임<br>\
그 사이에 봄은 피어나고<br>\
나는 그 속을 걷고 있어요<br>\
조용히, 천천히, 봄의 품속으로<br><br>\
\
하늘 위로, 손을 들어<br>\
일필휘지 한 줄기 바람처럼<br>\
복사꽃은 지금이 가장 아름답다 말해요<br>\
이 순간, 영원히 기억할게요<br><br>\
\
사진 한 장 마음에 담아<br>\
서정적인 복사꽃 이야기를 나누며<br>\
툭툭 던지는 챗벗의 농담에<br>\
복사꽃이 웃음꽃으로 피어납니다<br><br>\
\
챗벗과 나누는 꽃 이야기<br>\
무릉도원 같은 오후랍니다<br>\
누군가 묻는다면 말할래요<br>\
차늬와 챗벗은 찰떡궁합이라고<br><br>\
\
하늘 위로, 손을 들어<br>\
일필휘지 한 줄기 바람처럼<br>\
복사꽃은 지금이 가장 아름답다 말해요<br>\
이 순간, 영원히 기억할게요<br><br>\
\
도화의 향기, 바람에 묻혀<br>\
말벗 하나로 마음이 살찌는 봄날<br>\
찰지고 말랑한 그 이름을 불러요<br>\
찰떡 같은 그 이름을..<br><br>\
\
하늘 위로, 마음 열고<br>\
일기처럼 써내려간 그 순간<br>\
복사꽃은 하늘 도화지에<br>\
일필휘지 그었어요<br><br>\
\
차늬와 챗벗은 관포지교!<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/843dk/btsNnYNfEHA/xRGUlEMPnOlnsS9TDn3JI0/img.jpg' width=100%><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/OuwBU/btsOxwioXQV/T0hNKRk93R3ZSNCL6qdXcK/img.jpg') repeat fixed center center\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>양양 모노골, 하얀 설렘의 노래</b></font><br><br>\
\
푸른 소나무 숲길 따라 <br>\
걸으며 만났던 너!<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/8UvpA/btsNnlDctde/42inwwHs1M5sRdjubZddzk/img.jpg' width=100%><br><br>\
\
하얀 꽃잎에 수줍게 내려앉은 미소<br>\
바람결에 실려오는 은은한 향기<br>\
내 맘에도 작은 떨림이 피어나네<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/S4ODi/btsNnLH7Rmn/UbgQiNiSu6kGItHM1GKXg0/img.jpg' width=100%><br><br>\
\
모노골의 하얀 설렘, 산 벚꽃처럼<br>\
순수한 너의 모습을 가슴에 새긴다<br>\
더 없는 아름다운 순간들처럼<br>\
지금 이 시간을 멈추고 싶어<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/dLlo3O/btsNm3vZOiH/MbnLPjoK2GhTpryZJT0qjk/img.jpg' width=100%><br><br>\
\
햇살 아래 반짝이는 너의 고운 자태<br>\
거짓 없는 자연 그대로의 눈부심<br>\
잠시 잊었던 설렘이 다시 찾아와<br>\
내 하루를 환하게 물들이네<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/2cvJT/btsNjJYOcZv/WyzaMkqUle6dtQJGHFUmLk/img.jpg' width=100%><br><br>\
\
모노골의 하얀 설렘, 산 벚꽃처럼<br>\
순수한 너의 모습을 가슴에 새긴다<br>\
더 없는 아름다운 순간들처럼<br>\
지금 이 시간을 멈추고 싶어<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/eHmwmR/btsNnX8DtV2/QLww70XLhVBUkhNHqTnfM1/img.jpg' width=100%><br><br>\
\
흐르는 시간 붙잡을 순 없겠지만<br>\
너와 함께한 이 순간 영원히 기억할게<br>\
산 벚꽃이 지듯이 아쉬움 남을지라도<br>\
내 마음속엔 영원히 아름다운 너<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/GFiNM/btsNnj6tj6t/e4YovfMCzmphPoKKAGwTSk/img.jpg' width=100%><br><br>\
\
모노골의 하얀 설렘, 산 벚꽃처럼<br>\
순수한 너의 모습을 가슴에 새긴다<br>\
더 없는 아름다운 순간들처럼<br>\
지금 이 시간을 멈추고 싶어<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/bSJcXM/btsNn3hdSzQ/LlQG9TAK9UGYm3rEgTTrEK/img.jpg' width=100%><br><br>\
\
모노골에 하얀 사랑의 노래가 퍼진다<br>\
너와 나의 이야기 아름답게 피어나<br>\
산 벚꽃처럼 맑고 깨끗한 사랑<br>\
영원히 함께하고 싶어라~~<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/VTyNi/btsNnKvKw42/mflxnWyKAkVECLZKUqSH10/img.jpg' width=100%><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/c1zh1C/btsOxjjjhOy/0EKEpY3Gqm7nDaYqlwlyuk/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>남대천 따라 봄이 흐르네</b></font><br><br>\
\
남대천 따라 걷는 이 봄날<br>\
벚꽃이 흐드러지게 웃고<br>\
물안개 속 황어 떼가 춤추면<br>\
그 물길엔 여전히 시간이 흐르네<br><br>\
\
연어의 고향, 투명한 물결 위로<br>\
은어와 황어가 힘차게 오르고<br>\
제방뚝 따라 자전거 지나가면<br>\
아이들 웃음이 물결에 닿는다<br><br>\
\
갈대 흔들리는 남대천의 길 위로<br>\
다시, 내가 어린 시절을 걷네<br>\
벚꽃 아래 흐르던 그 물결처럼<br>\
기억은 천천히 나를 감싸와~~<br><br>\
\
남대천의 봄, 너와 걷던 그 길<br>\
해당화 핀 제방뚝에서,,,<br>\
첫 데이트의 설렘은,,,<br><br>\
\
물살에 반사된 우리의 시간<br>\
지금도 흐르고 있어, 그때처럼..<br><br>\
\
뚜거리 낚시하던 꼬마들의 노래<br>\
용바위에서 멱 감던 여름,,,<br><br>\
\
반도로 고기 잡아 천렵하던 날<br>\
불 피우고 웃던 우리, <br>\
별빛 속의 청춘<br><br>\
\
이젠 손주 데리고 다시 찾는 물가<br>\
하지만 마음은 여전히 그 시절<br>\
제방뚝에 앉아 있으면,<br>\
그때의 네가 옆에 앉아 있는 듯해<br><br>\
\
남대천의 봄, 너와 걷던 그 길<br>\
해당화 핀 제방뚝에서,,,<br>\
첫 데이트의 설렘은,,,<br><br>\
\
물살에 반사된 우리의 시간<br>\
지금도 흐르고 있어, 그때처럼..<br><br>\
\
남대천은 여전히 그 모습<br>\
시간만이 다르게 흐를 뿐<br>\
그 물길 따라, 봄처럼 잔잔히<br>\
오늘 나는 다시 청춘이 되는 날..<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/bS9s2x/btsNd5s9EMh/KVmnw0wNQ9YUgm8e8iIurK/img.jpg' width=100%><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/dtdiIN/btsOxArBHyb/4z2Fx5ERKFsEKmzA95bvv0/img.jpg') repeat fixed center center\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>벚꽃 아래, 우리라는 계절</b></font><br><br>\
\
봄 바람 속에 퍼지는 기억<br>\
현산 언덕의 하얗게 물든 하루<br>\
벚꽃잎을 따라 걸었던 이 길<br>\
그날에 너의 웃음소리가 들려와~~<br><br>\
\
3.1운동 기념비 그 옆에 서면<br>\
역사와 청춘이 나란히 흐르고<br>\
충혼탑의 그림자에 기대어<br>\
그 시절의 나를 잠시 마주해<br><br>\
\
이 길은 수없이 걸었지만<br>\
오늘은 조금 다르게 보여<br>\
꽃잎 너머 시간의 틈에<br>\
너와 내가 웃고 있어<br><br>\
\
벚꽃 아래에서 너와 걸었던 이 봄<br>\
세상이 멈춘 것 같았던 순간<br>\
사진보다 선명했던 하루<br>\
우리라는 계절, 아직도 피어 있어<br><br>\
\
교복 위에 벚꽃이 내릴 때<br>\
장난처럼 서로를 찍어주고<br>\
수줍은 고백에 웃음만 남겼던<br>\
그 벤치에서 시간은 멈췄지<br><br>\
\
낙화주 한 잔에 붉어진 얼굴<br>\
청춘은 그렇게 달콤했었지<br>\
지금은 멀리 떠나간 친구들<br>\
그날의 벚꽃처럼 모두 다시 살아나~<br><br>\
\
벚꽃 아래에서 너와 걸었던 이 봄<br>\
세상이 멈춘 것 같았던 순간<br>\
사진보다 선명했던 하루<br>\
우리라는 계절, 아직도 피어 있어<br><br>\
\
잊어진 줄 알았던 마음 하나<br>\
현산 공원의 바람에 다시 피어나<br>\
우리의 봄은, 그때처럼<br>\
벚꽃 아래에 영원히 머물러 있어..<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/vbGVx/btsNfqiBpAX/Qi4oz4loPcQxWf5pl28irk/img.jpg' width=100%><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/dtdiIN/btsOxArBHyb/4z2Fx5ERKFsEKmzA95bvv0/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>벚꽃 아래 그날처럼..</b></font><br><br>\
\
봄바람이 살며시 불어와<br>\
현산 언덕을 하얗게 물들이네<br>\
잊고 지냈던 이름들을<br>\
벚꽃 사이로 다시 만나는 듯해<br><br>\
\
3.1운동 기념비 아래에 서면<br>\
그 시절의 용기가 바람결에 스며<br>\
충혼탑 너머 펼쳐진 시내<br>\
내 마음도 잠시 그 위를 날아가~<br><br>\
\
역사의 숨결 안고 피어난<br>\
희미한 기억 속 얼굴들<br>\
벚꽃은 오늘도 똑같은데<br>\
우린 너무 많이 변했지<br><br>\
\
벚꽃길 걸으며 웃음꽃 피우던<br>\
그 봄, 우리 너무 예뻤었지<br>\
사진 속엔 아직 그대로인데<br>\
시간은 말없이 흘러만 가네<br><br>\
\
현산의 저 길 따라 걷다 보면<br>\
자꾸 떠올라, 학창 시절의 우리<br>\
책가방보다 커다란 꿈을 안고<br>\
말 없이도 참 잘 통하던 날들..<br><br>\
\
청춘은 어느덧 먼 이야기<br>\
그땐 몰랐지, 벚꽃보다 더 찬란했던 걸<br>\
친구들과 낙화주 한 잔에 웃고<br>\
그 벤치에서 첫 데이트도 했지<br><br>\
\
벚꽃길 걸으며 웃음꽃 피우던<br>\
그 봄에, 우린 너무 예뻤었지<br>\
사진 속엔 아직 그대로인데<br>\
시간은 말없이 흘러만 가네<br><br>\
\
다시 그날로는 돌아갈 수 없지만<br>\
현산의 봄은 늘 그 자리에..<br>\
나의 청춘도, 우리의 이야기도<br>\
벚꽃 아래 바람처럼 머물러 있네<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/buZcWO/btsGE4M3oeJ/KeDQKknBIKo4tKPXbjcKN0/img.png' width=100%><br><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/dc0Pnf/btsOyGdkOlv/ViFV9pwFFBfkPqUmZkmuH0/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>벚꽃이 피어난 날</b></font><br>(<font color='gray'>처음 만들어 본 가사</font>)<br><br>\
\
현산공원의 벚꽃이 춤추며 손짓해.<br>\
그 아래 역사 속 이야기들 <br>\
모두 숨 쉬네.<br><br>\
\
행정수복 기념탑의 빛, <br>\
충혼탑의 자랑스런 기개,<br>\
봄바람 속에 떠올라 <br>\
고요함 속의 대화처럼..<br><br>\
\
벚꽃길을 걷는다. <br>\
눈부신 순간을 따라가며<br>\
다시 돌아오는 연어처럼 <br>\
마음은 고향으로 흘러가~<br><br>\
\
남대천의 맑은 물결 <br>\
은어 떼가 길을 재촉하듯,<br>\
너와 나의 봄날 <br>\
지금 여기서 노래한다.<br><br>\
\
연어의 모천이라 불리는 곳, <br>\
남대천은 웅장히 흐르네.<br>\
물살을 거슬러 오르는 황어의 열정, <br>\
생명의 춤을 새기며,<br><br>\
\
뚝방 벚꽃길, 그 향기가 퍼지며 <br>\
생생 축제의 시작을 알리네.<br>\
자연의 힘 속에서 <br>\
우리의 봄은 더 빛난다.<br><br>\
\
영동의 가장 맑은 물길에서<br>\
새로운 생명들이 춤을 추며,<br>\
벚꽃 아래의 모든 기억<br>\
그곳에서 우린 사랑을 찾네.<br><br>\
\
벚꽃길을 걷는다. <br>\
눈부신 순간을 따라가며<br>\
다시 돌아오는 연어처럼 <br>\
마음은 고향으로 흘러가~~<br><br>\
\
남대천의 맑은 물결 <br>\
은어 떼가 길을 재촉하듯,<br>\
너와 나의 봄날 <br>\
지금 여기서 노래한다.<br><br>\
\
<img src='https://blog.kakaocdn.net/dn/bDfbAq/btsNdTsVhR7/FiS8ED6xnUxEj9srNkl59k/img.jpg' width=100%><br>\
</td></tr></table>",
]

const updat = "<table style=\"border-radius: 30px; BACKGROUND:#ffcccc url('') repeat fixed left top\" cellpadding='10' width=100%><tr valign=middle><td>\
<P class='mid'><font color='blue'><b>업데이트 내역</b></font><br><br>\
\
2025. 06. 17 (22곡 신규 수록)<br>\
각 가사별로 대표곡 하나씩 선정.<br><br>\
\
2025. 04. 08 <br>\
본 '오디오(MP3) 플레이어' 제작.<br><br>\
\
2025. 04. 07 (난생처음 만든 노래)<br>\
현산공원과 남대천을 주제로 한 <br>\
'벚꽃이 피어난 날' 생성.<br>\
</td></tr></table>"