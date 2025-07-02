const title0 = "AI-IoT 기반 어르신 건강송"

odi = [
"https://blog.kakaocdn.net/dna/WEkek/btsOZFNjvUC/AAAAAAAAAAAAAAAAAAAAAAnZ0sUbf7lBTVAgylhQh6MIpLjztaQ8FMY3RL8YpMPv/AI-loT%2520%25EA%25B8%25B0%25EB%25B0%2598%2520%25EC%2596%25B4%25EB%25A5%25B4%25EC%258B%25A0%2520%25EA%25B1%25B4%25EA%25B0%2595%25EA%25B4%2580%25EB%25A6%25AC%25EC%2582%25AC%25EC%2597%2585_M7_FUZZ-1.1.mp3?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=1tqO6p4nYr7nL0ZAdeauAp1rOEg%3D&attach=1&knm=tfile.mp3|AI-loT 기반 어르신 건강관리사업_M7_FUZZ-1.1",
"https://blog.kakaocdn.net/dna/6U8x2/btsOZAlaLNe/AAAAAAAAAAAAAAAAAAAAAMKMvfaoy7mNag5MHeoQmUukZ4rKKAPjaCyTGSGvhpZI/AI-loT%2520%25EA%25B8%25B0%25EB%25B0%2598%2520%25EC%2596%25B4%25EB%25A5%25B4%25EC%258B%25A0%2520%25EA%25B1%25B4%25EA%25B0%2595%25EA%25B4%2580%25EB%25A6%25AC%25EC%2582%25AC%25EC%2597%2585_W4_FUZZ-1.1.mp3?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=sjMONI%2F%2FswUz8SrYbmKYpi9IfHU%3D&attach=1&knm=tfile.mp3|AI-loT 기반 어르신 건강관리사업_W4_FUZZ-1.1",
"https://blog.kakaocdn.net/dna/plhik/btsOZfhafgI/AAAAAAAAAAAAAAAAAAAAAFNLro6e45q2C3eaYFQ5PM3ucZIu4qEXk79Es-utJS7Z/AI-loT%2520%25EA%25B8%25B0%25EB%25B0%2598%2520%25EC%2596%25B4%25EB%25A5%25B4%25EC%258B%25A0%2520%25EA%25B1%25B4%25EA%25B0%2595%25EA%25B4%2580%25EB%25A6%25AC%25EC%2582%25AC%25EC%2597%2585_M1_FUZZ-1.1.mp3?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=WcCKLCq8lFFjhoe%2FXWWUwT9Nrtk%3D&attach=1&knm=tfile.mp3|AI-loT 기반 어르신 건강관리사업_M1_FUZZ-1.1",
"https://blog.kakaocdn.net/dna/c5b2DF/btsO0BQSbmE/AAAAAAAAAAAAAAAAAAAAADnHPWv2FOvmmFUifq_i5QsRqfmICVmzAqe76UrupCoc/AI-IoT%2520%25EC%2596%25B4%25EB%25A5%25B4%25EC%258B%25A0%2520%25EA%25B1%25B4%25EA%25B0%2595%25EC%2586%25A1_WM42_ChatGPT_FUZZ-1.1.mp3?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=eXs3UI6OBEmgsecf8P%2B8b%2FY1EW4%3D&attach=1&knm=tfile.mp3|AI-IoT 어르신 건강송_WM42_ChatGPT_FUZZ-1.1",
"https://blog.kakaocdn.net/dna/lBWKP/btsOZRUuRfK/AAAAAAAAAAAAAAAAAAAAABqPdDYUevn3cMZ1O_jvRy-Qy28UI69jS6hBqu30BKB-/AI-loT%2520%25EA%25B8%25B0%25EB%25B0%2598%2520%25EC%2596%25B4%25EB%25A5%25B4%25EC%258B%25A0%2520%25EA%25B1%25B4%25EA%25B0%2595%25EA%25B4%2580%25EB%25A6%25AC%25EC%2582%25AC%25EC%2597%2585_M2_FUZZ-1.1.mp3?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=9GHP8mwvCZicpJgYxnty5JkUR5U%3D&attach=1&knm=tfile.mp3|AI-loT 기반 어르신 건강관리사업_M2_FUZZ-1.1",
"https://blog.kakaocdn.net/dna/I7Eqz/btsO0dvYdJp/AAAAAAAAAAAAAAAAAAAAACrgYytTZWrD2unNorBGfKgZmvKxJH4zQh-_cSAlhPNT/AI-IoT%2520%25EC%2596%25B4%25EB%25A5%25B4%25EC%258B%25A0%2520%25EA%25B1%25B4%25EA%25B0%2595%25EC%2586%25A1_W45_ChatGPT_FUZZ-1.1.mp3?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=6ydk8Noy6B%2FYozOsjTgTzb8iJz8%3D&attach=1&knm=tfile.mp3|AI-IoT 어르신 건강송_W45_ChatGPT_FUZZ-1.1",
]

song = [
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/Xj6h3/btsOxjDAXcz/cen6SOE7KJFtvqXrwhQkEk/img.png') repeat fixed center center\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>AI-loT 기반 어르신 건강관리사업</b></font><br><br>\
\
'어르신'이 되었다면 건강 관리하세요.<br>\
AI 시대답게 loT 기반으로 하세요.<br><br>\
\
<img src='https://blog.kakaocdn.net/dna/cTLSaP/btsOZXmD8OM/AAAAAAAAAAAAAAAAAAAAAPHAUjn1fut4OUzz17C2ZwBcmM5XUfVh5KISrjCUhqWj/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=vs31%2FduHbIahT5D6P6OB2UMalxM%3D' width=100%><br><br>\
\
쉽고 편하게, <br>\
정확하게 기록 관리하세요.<br>\
사물 인터넷, <br>\
블루투스가 알아서 해준다네요~<br><br><br>\
\
\
1일 미션의 걷기 운동, <br>\
포인트는 5점이래요.<br>\
매일매일 30분 이상, <br>\
5,000 보는 걸어 봐요.<br><br>\
\
<img src='https://blog.kakaocdn.net/dna/lZGMw/btsOZgtG9Ji/AAAAAAAAAAAAAAAAAAAAAJ-J1CTelMoh-kbHe8NtARLJ3QzJqckpGuD9iYs_n5Su/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=r%2BVy65FrGprqvxd9VpGoERU94HA%3D' width=32%> <img \
\
src='https://blog.kakaocdn.net/dna/bxeHFp/btsOZAlchJf/AAAAAAAAAAAAAAAAAAAAAPZjmPRCYi61bIelMdFOX0O0uSefu4wCaCZrzgMF4puV/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=Ewa4g5r5FD3ClJAnSKrVjxCWZNQ%3D' width=32%> <img \
\
src='https://blog.kakaocdn.net/dna/Q88AN/btsOZTLzwDw/AAAAAAAAAAAAAAAAAAAAAK8kKvkqzbJ_qJCMP-sg0nqgB4FIUrQQkKnIjz0KVdOS/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=lGKmpbj4FxSskMdqSYVpjd5vJZY%3D' width=32%><br><br>\
\
집안에서 문밖까지 <br>\
가장 힘든 구간이지만..<br>\
여기 고비만 극복하면 <br>\
5,000 보는 금방이래요.<br><br><br>\
\
\
1일 미션의 혈압 측정, <br>\
포인트도 5점이래요.<br>\
팔꿈치 1~2cm 위로 <br>\
커프를 단단히 감아요.<br><br>\
\
<img src='https://blog.kakaocdn.net/dna/wS8IK/btsOZjKQzpS/AAAAAAAAAAAAAAAAAAAAAPax2S3MK06OQGwfPacqHUQYMKk57TX8ONfs0X-LNmNe/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=GDXIV314YSH%2BrtBUZUjCVGsATZY%3D' width=32%> <img \
\
src='https://blog.kakaocdn.net/dna/kPaWo/btsOZ8aC1Yx/AAAAAAAAAAAAAAAAAAAAAApwDtngfZE7eaxodtbOyN6plc8aNKHzmGjcmlSzQlXw/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=H4UmbEHRQua0L7EfbbgMwnkwpb8%3D' width=32%> <img \
\
src='https://blog.kakaocdn.net/dna/bVTJa1/btsO0VBEBKb/AAAAAAAAAAAAAAAAAAAAAIKp2Ogkxt9SPYyAWdwTN05GTIHEBxKI7G0W_5Zy4Lk9/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=cM88r4A9mYY7TJoC6VK6AQEXZUM%3D' width=32%><br><br>\
\
수축기 130은 경계, <br>\
140 이상은 위험하고요.<br>\
이완기는 80이 경계, <br>\
90이 넘으면 위험하대요.<br><br><br>\
\
\
맥박 수는 <br>\
60에서 100 사이가 정상이고요.<br>\
60 아래는 '서맥', <br>\
100이 넘어가면 '빈맥'입니다.<br><br>\
\
<img src='https://blog.kakaocdn.net/dna/Md0GE/btsOZyAUKga/AAAAAAAAAAAAAAAAAAAAANtI3sASJ_668R4d7ddE63N3GEXom48yhQcBUqlW7glU/img.png?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=OpbGlHSYSS9G5JH2n4SpKmD%2BrO0%3D' width=45%> <img \
\
src='https://blog.kakaocdn.net/dna/bruMyP/btsOZyAUKd9/AAAAAAAAAAAAAAAAAAAAANwm2nXZMGoVIvbO0FCsZDftBv6Evdi0DT8cuIe1aB7y/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=DMzezZ69I1b47B9%2BIijlabwx%2Bs8%3D' width=53%><br><br>\
\
신생아는 120~140, <br>\
운동선수는 50이래요.<br>\
나이 들면 느려질 수 있다니 <br>\
너무 걱정 말아요.<br><br><br>\
\
\
1일 미션의 <br>\
악력계와 건강 밴드는 2점이래요.<br>\
악력계를 꽉~꽉 눌러서 <br>\
손아귀 힘을 키워요~~<br><br>\
\
<img src='https://blog.kakaocdn.net/dna/Kl62Q/btsO1G42dCo/AAAAAAAAAAAAAAAAAAAAAECMa6C54tB0Ty4Hz5xZELBTF_Lq9GYsF5Ja3F4nd0ri/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=6fcWLe5pLmJC7GVYvog3LxATFyw%3D' width=64%> <img \
\
src='https://blog.kakaocdn.net/dna/dWJ4UG/btsOY6ESQon/AAAAAAAAAAAAAAAAAAAAAMM_HnOMJMIrkZ2RernCkqiUljquKMPptAp1_MbE_mic/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=WvvTuMGzyfxfb%2FImXHgGmyzpiAQ%3D' width=34%><br><br>\
\
건강 밴드 11개 동작은, <br>\
10번씩 3세트래요.<br>\
즐겁게 운동하니.. <br>\
집 나갔던 근육이 돌아오네요~~<br><br><br>\
\
\
주간 미션의 혈당 측정, <br>\
포인트는 5점이래요.<br>\
공복 혈당은, <br>\
최소한 8시간 금식하세요.<br><br>\
\
<img src='https://blog.kakaocdn.net/dna/9407h/btsO0GEHXfb/AAAAAAAAAAAAAAAAAAAAAAX_X_jcrl5ThOKmFRkeSmn-fSJ5CIUoOqj6ytlUDfjP/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=YlW%2FUpVznFZH1UHkAvlcA2%2FUnFg%3D' width=32%> <img \
\
src='https://blog.kakaocdn.net/dna/bznYPU/btsO08AFJLa/AAAAAAAAAAAAAAAAAAAAABLV0XfVF9JPQSHlKkARCJpeNxYlJSxzvTfIDd6EHNvi/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=4S4t5pdB%2BShFk790v9S2vT2vlsw%3D' width=32%> <img \
\
src='https://blog.kakaocdn.net/dna/cwv2mk/btsO1BJo2FU/AAAAAAAAAAAAAAAAAAAAABQvBOPXT8fIxDQ03MYjhr8g7NUNoUtmK7Jx7fSHnFky/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=rAzhaVSbUi457%2FC%2FF3oxwv7n1RY%3D' width=32%><br><br>\
\
탈수 방지용 물은 섭취, <br>\
다른 건 안 된답니다.<br>\
100 이상은 경계, <br>\
126 넘으면 위험 단계래요.<br><br><br>\
\
\
식후 혈당은 <br>\
식사 시작 시점부터 두 시간 뒤,<br>\
하지만 여덟 시간까지는 <br>\
식후로 간주합니다.<br><br>\
\
<img src='https://blog.kakaocdn.net/dna/dhUop4/btsOZXAb7hu/AAAAAAAAAAAAAAAAAAAAAEXoX5eidXsvpRVBOjWeKf4S3tQa7RpKsc74fy8qIoKi/img.png?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=hdPI3AiuKV1vPYWx4NDrrIxm4tk%3D' width=68%> <img \
\
src='https://blog.kakaocdn.net/dna/IVy8e/btsO0WHifXs/AAAAAAAAAAAAAAAAAAAAAPRYFNVRho4zFJA-hDSHCdrhuGCt3hf3ffHbE1eE8-Ux/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=MnKkHCZP209wC7DcVPmmI1i6Lnk%3D' width=30%><br><br>\
\
140 이상은 경계, <br>\
200 넘으면 위험 단계이고요~<br>\
당화 혈색소는 <br>\
7% 넘어가면 위험 신호랍니다.<br><br><br>\
\
\
주간 미션의 체중 측정은 <br>\
2점 밖에 안 되네요.<br>\
체중 감량보다는 <br>\
체지방률 감소에 신경 쓰세요~<br><br>\
\
<img src='https://blog.kakaocdn.net/dna/bGracv/btsO0KUnr0e/AAAAAAAAAAAAAAAAAAAAAKySMAtdpN9YmGcmOBF4B1P6dzQ9HOAI6XQlSSwnQGer/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=ax8pK%2FdhDOsxPZDWyJK26Lsdulg%3D' width=32%> <img \
\
src='https://blog.kakaocdn.net/dna/bdbRFQ/btsO0HwPVhy/AAAAAAAAAAAAAAAAAAAAACO66Gb6Ex8-vJS7fPau5K2Bq5ELWCxW99blOFAeZ4Bn/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=gsOXSH80zow5pppuV7lr5%2F%2BL0Ss%3D' width=32%> <img \
\
src='https://blog.kakaocdn.net/dna/bOX4zF/btsO0azyR67/AAAAAAAAAAAAAAAAAAAAAKcmhjdv3QCj6Po1cKrys3qKmb52zzkodUE8mFcy8Igr/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=bncMA70xLJMawFVSY9BHDQzl3fY%3D' width=32%><br><br>\
\
남자는 18% 정상, <br>\
25는 과체중, 이상은 비만이고요.<br>\
여자는 25% 정상, <br>\
30은 과체중, 넘으면 비만이래요.<br><br><br>\
\
\
건강 챙기면서 포인트 따는 <br>\
활기찬 노년이 됩니다.<br><br>\
\
<img src='https://blog.kakaocdn.net/dna/bxpKwU/btsO0OWLagi/AAAAAAAAAAAAAAAAAAAAAFoMnKzGjUHtQWieuh7wtkxMa_2UZIYyRNtLNdTZKbZO/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=LOKBFnsFonhfl7yudeZXfApqFRI%3D' width=32%> <img \
\
src='https://blog.kakaocdn.net/dna/dMfFUO/btsO1ChfncI/AAAAAAAAAAAAAAAAAAAAAPpg5qUwMFTY8wxEePs52UvZ6YdenDwlLPtidzbPjwce/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=gM8v5%2B1BFSvckVyuRTMi%2FhDDuzw%3D' width=32%> <img \
\
src='https://blog.kakaocdn.net/dna/lplU2/btsOZDu94wg/AAAAAAAAAAAAAAAAAAAAAPnoMUpT6HXvfieM3yd4JaMyTJeSR7YjxoP_CpzCdcai/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=cMz6aC7EikdFOb3GafCwOyqOlME%3D' width=32%><br><br>\
\
뽕~ 따고 임도 보고, <br>\
도랑 치고 가재 잡고..<br>\
꿩~ 먹고 알도 먹고, <br>\
굿도 보고 떡도 먹어요~<br><br>\
\
<img src='https://blog.kakaocdn.net/dna/bcenh6/btsOZwbZl7C/AAAAAAAAAAAAAAAAAAAAAJeLolQ-85L-s5vascK0a2QhIM9V9kyjTaG5JovvrnSI/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=lthIcWZp71FgaexW%2BN%2FAxpI8Oqc%3D' width=23%> <img \
\
src='https://blog.kakaocdn.net/dna/nuQRi/btsO0xViRGW/AAAAAAAAAAAAAAAAAAAAANxzyjlVmAsvzrIL6LjtfUuJJ2H_nEOH7LYvsAVskMnr/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=PlexVuu9dMcMkuhb9V%2BulmsfpNM%3D' width=23%> <img \
\
src='https://blog.kakaocdn.net/dna/bOLqyy/btsO1FE4jss/AAAAAAAAAAAAAAAAAAAAANmskhoSrnf2LEOW831T6gukBBZUd76YNDP5C4DudIyP/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=4ghd7do9U3Fp9xwkEuK1fhK%2F%2Bvo%3D' width=23%> <img \
\
src='https://blog.kakaocdn.net/dna/bGLq9I/btsOZG6AdWb/AAAAAAAAAAAAAAAAAAAAAL4DlmB6TIPntG7REhhFOs35JkFh6IEu_1nCoYrJJFGO/img.jpg?\
\
credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=zrA%2FgSgg%2BXn2BP1SYT4482eXB4I%3D' width=23%><br><br>\
\
일거 양득의 건강 관리, <br>\
쉽고 즐겁게 함께 해요.<br><br>\
\
'어르신 인생'을.. <br>\
건강하고 행복하게 살아갑시다~~<br><br>\
\
<img src='https://blog.kakaocdn.net/dna/cdLEdV/btsO0udpI2P/AAAAAAAAAAAAAAAAAAAAAH_XXjRAX64P8hGJG28gGKpo-ZvsSy85GJrpL7890ArJ/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=qImxrQ7wcO%2BxSAfsFo6VKDC0Lq8%3D' width=100%><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/w2O7G/btsOwvLzvhs/ZIe7tvEvh6OwCShCEqEJVK/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid2'>\
<font color='blue'><b>AI-IoT 어르신 건강송</b></font><br><br>\
\
'어르신'이 되셨다면 건강 챙기세요<br>\
AI 시대, 이제는 IoT로 해봐요<br><br>\
\
<img src='https://blog.kakaocdn.net/dna/crWs4L/btsOZRtsJQH/AAAAAAAAAAAAAAAAAAAAACKRmKq6qvsq6YJLtwfGy-qRkPk7_y-FZu0ptp3mxw1s/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=KwsdZb%2FX9joW87uRLxj5lHQ%2FMjw%3D' width=100%><br><br>\
\
쉽고 편하게, 정확하게 기록 관리!<br>\
사물 인터넷, 블루투스가 <br>\
알아서 해준답니다<br><br><br>\
\
\
1일 미션, <br>\
걷기 운동 포인트는 5점이래요<br>\
매일매일 30 분, 5,000 보를 걸어 봐요<br><br>\
\
집안에서 문밖까지, 가장 힘든 첫걸음,<br>\
고비만 넘기면 5,000 보는 금방이래요<br><br><br>\
\
\
1일 미션, <br>\
혈압 측정 포인트도 5점이래요<br>\
팔꿈치 위로 커프를 꽉~, <br>\
바르게 감아줘요<br><br>\
\
수축기 130은 경계, 140 넘으면 위험,<br>\
이완기 80은 경계, 90 넘으면 위험해요<br><br><br>\
\
\
맥박 수는 60에서 100 사이가 정상<br>\
60 아래는 '서맥', <br>\
100 넘어가면 '빈맥'이래요<br><br>\
\
신생아는 빠르고, <br>\
운동선수는 느리다네요<br>\
나이 들면 조금 느려도 너무 걱정 말아요<br><br><br>\
\
\
1일 미션, <br>\
악력계와 건강 밴드는 2점이래요<br>\
악력계를 꼭 쥐고, 손아귀 힘 키워봐요<br><br>\
\
건강 밴드 11개 동작, 10번씩 3세트<br>\
즐겁게 운동하면, <br>\
집 나간 근육이 돌아와요<br><br><br>\
\
\
주간 미션, <br>\
혈당 측정 포인트는 5점이래요<br><br>\
\
공복 혈당은 최소 8시간 금식이 필요해요<br>\
물은 마셔도 돼요, <br>\
다른 건 먹으면 안 돼요.<br>\
100 넘으면 경계, 126 넘으면 위험이래요<br><br><br>\
\
\
식후 혈당은 식사 후 두 시간에 재 봐요<br>\
여덟 시간까지도 식후로 본다네요<br>\
140 넘으면 경계, 200 넘으면 위험해요<br>\
당화혈색소 7% 넘으면 위험 신호랍니다<br><br><br>\
\
\
주간 미션, <br>\
체중 측정 포인트는 2점이래요<br><br>\
\
체중보다 체지방률에 신경 써야 해요<br>\
남자는 25%, 여자는 30% 넘으면 비만,<br>\
조금씩 줄이며, 건강을 지켜봐요<br><br><br>\
\
\
건강 챙기며 포인트 따는 <br>\
활기찬 노년이에요<br><br>\
\
꿩 먹고 알 먹고, 굿도 보고 떡도 먹어요<br>\
뽕도 따고 임도 보고, <br>\
도랑 치고 가재 잡고..<br><br>\
\
재밌고 건강한 '어르신 인생', <br>\
우리 함께 걸어요~~<br><br>\
\
AI로 건강 관리, <br>\
쉽고 즐겁게 함께 해요<br>\
재미있게 운동하는 오늘도 행복합니다~~<br><br>\
\
<img src='https://blog.kakaocdn.net/dna/T10YF/btsOZDu94oJ/AAAAAAAAAAAAAAAAAAAAALw8vh3hsRJvFrHjWUwz-bEKcDUeJgw3AK_jRFk9L-rL/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=f%2BhWP9b4B3BkmyQ4G%2BZjvZwiKPo%3D' width=100%><br>\
</td></tr></table>",
]

const updat = "<table style=\"border-radius: 30px; BACKGROUND:#ffcccc url('') repeat fixed left top\" cellpadding='10' width=100%><tr valign=middle><td>\
<P class='mid'><font color='blue'><b>업데이트 내역</b></font><br><br>\
\
2025. 07. 02 (무료 버전 6곡 수록)<br>\
가사 1) 4곡, 가사 2) 2곡 선정.<br><br>\
\
2025. 06. 24 (2가지 가사 생성)<br>\
1) AI-IoT 기반 어르신 건강관리사업 (나의 초안 작성)<br>\
2) AI-IoT 어르신 건강송 <br>\
(내 초안을 ChatGPT가 개사)<br><br>\
\
2025. 04. 18 (사업 참여)<br>\
양양군 보건소 시행, <br>\
'AI-loT 기반 어르신 건강관리사업'<br>\
</td></tr></table>"