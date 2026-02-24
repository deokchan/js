const title0 = "뽈랑이를 위한 노래"

odi = [
"https://cdn1.suno.ai/ee43791c-f07a-426a-a04e-6a9ee2ad7cfc.mp3|0[잉태 기쁨] 뽈랑이 사랑가 (트롯 스타일)_01W v4.5-all||",
"https://cdn1.suno.ai/be89a6a5-0958-42a0-b2bf-6eeadcea035b.mp3|0[잉태 기쁨] 뽈랑이의 꿈 (영화적인 심포닉 메탈, 웅장한 브라스와 현악기)_15MW v4.5-all||",
"https://cdn1.suno.ai/259a503a-1b9e-4f64-ac78-26472f4211f8.mp3|0[잉태 기쁨] 뽈랑이의 꿈 <br>(오페라 발라드, 현악기 금관악기)_13WM v4.5-all||",
"https://cdn1.suno.ai/d0631cb0-a6f8-4beb-aabc-c6a5fb8f1eab.mp3|0[잉태 기쁨] 뽈랑이의 노래 (뽈랑 요들송, 알프스 민요 어린이음악 폴카리듬 140BPM)_18M v4.5-all||",
"https://cdn1.suno.ai/bf3ddbe8-29ec-41d2-b520-64d755918f57.mp3|0[잉태 기쁨] 뽈랑이의 노래 <br>(7080, 통기타 하모니카 타악기)_02MW v4.5-all||",
"https://cdn1.suno.ai/681adcfe-85e2-45f2-bf04-21bc526bbca6.mp3|0[잉태 기쁨] 뽈랑이의 노래 <br>(행진곡, 군악대, 팡파르)_09MW v4.5-all||",
"https://cdn1.suno.ai/81f411ab-b98e-4b96-aa06-35ef6570c6e5.mp3|0[건강 기원] 뽈랑아, 우리 곁에 올 그날까지 <br>(트로트, 역동적인 댄스 비트)_12WM v4.5-all||",
"https://cdn1.suno.ai/45b808e7-795f-4e39-a5b9-aa2e01cdc478.mp3|1[잉태 기쁨] 뽈랑이의 꿈 <br>(7080, 통기타 하모니카 타악기)_02MW v4.5-all||",
"https://cdn1.suno.ai/34114db6-62dc-4016-a82d-06e36115a2f8.mp3|1[잉태 기쁨] 뽈랑이의 꿈 <br>(행진곡 금관악기, 영웅적 축제적)_09MM v4.5-all||",
"https://cdn1.suno.ai/ef06fb9d-e56a-40e2-b938-3ff2ddd818c9.mp3|1[잉태 기쁨] 뽈랑이의 노래 (뽈랑 요들송, 즐거운 분위기, EDM 130~140 BPM)_16M v4.5-all||",
"https://cdn1.suno.ai/a46ce5b2-a8c1-4180-9e23-42cfc1057c25.mp3|1[잉태 기쁨] 뽈랑이의 노래 (요들송, 감성적 즐거운 분위기, EDM 120~126 BPM)_11WM v4.5-all||",
"https://cdn1.suno.ai/b1954993-3a14-4e8e-8a8e-8a0ae94c06aa.mp3|1[잉태 기쁨] 뽈랑이의 노래 <br>(트로트 선율, 현대 무용 요소의 조화)_08MW v4.5-all||",
"https://cdn1.suno.ai/5394f3d0-81c5-4ef8-8064-dc9be4845a31.mp3|1[건강 기원] 뽈랑아, 우리 곁에 올 그날까지 (7080, 통기타 하모니카 타악기)_08MW v4.5-all||",
"https://cdn1.suno.ai/89709ae0-d151-4acd-9b56-0b68c5983c53.mp3|1[건강 기원] 뽈랑아, 우리 곁에 올 그날까지 <br>(트로트 선율, 현대 무용 요소의 조화)_10MW v4.5-all||",
"https://cdn1.suno.ai/f0cfedc6-a7eb-47cb-ab1a-6d1c049ed90c.mp3|2[잉태 기쁨] 뽈랑이의 꿈 <br>(동요풍, 갓 태어난 아기 신기함 설렘)_04WM v4.5-all||",
"https://cdn1.suno.ai/86ab578d-3a98-4c80-beaa-2f8908b0517b.mp3|2[잉태 기쁨] 뽈랑이의 노래 (뽈랑 요들송, 알프스 민요 어린이음악 폴카리듬 140BPM)_17M v4.5-all||",
"https://cdn1.suno.ai/2a425d89-16d9-4132-a46e-0e42428ae019.mp3|2[건강 기원] 뽈랑아, 우리 곁에 올 그날까지 (밝고 명랑한 동요, 아기 첫걸음 장난기)_05W v4.5-all||",
"https://cdn1.suno.ai/50ca5ee0-50ec-4d5e-b9e0-c1cc0afa6de1.mp3|3[잉태 기쁨] 뽈랑이의 꿈 <br>(바이올린 독주 오케스트라, 기대)_06WM v4.5-all||",
"https://cdn1.suno.ai/d55c273e-46d7-4b6f-a8e4-44e1f6488403.mp3|3[잉태 기쁨] 뽈랑이의 꿈 <br>(심포닉 EDM 오케스트라 140BPM)_12MW v4.5-all||",
"https://cdn1.suno.ai/b811b094-0548-409a-8e50-bbefe803e73e.mp3|3[잉태 기쁨] 뽈랑이의 꿈 <br>(오페라 발라드, 현악기 금관악기)_14W v4.5-all||",
"https://cdn1.suno.ai/d4fb152f-03e8-4d67-9e42-15cbefead6a5.mp3|3[잉태 기쁨] 뽈랑이의 노래 <br>(부드러운 신디사이저 멜로디)_04MW v4.5-all||",
"https://cdn1.suno.ai/c44a5fa2-3fda-46a3-ba73-110a4aea96b7.mp3|3[잉태 기쁨] 뽈랑이의 노래 <br>(하드록과 댄서블한 그루브 디스코)_06MW v4.5-all||",
"https://cdn1.suno.ai/8a0176e8-8dce-4238-b066-c73180d5444d.mp3|3[건강 기원] 뽈랑아, 우리 곁에 올 그날까지 <br>(바이올린 독주 오케스트라, 기대)_01M v4.5-all||",
"https://cdn1.suno.ai/1d2f99a3-f43b-4fe1-89dd-430b02f47797.mp3|3[건강 기원] 뽈랑아, 우리 곁에 올 그날까지 <br>(바이올린 독주 오케스트라, 기대)_02M v4.5-all||",
"https://cdn1.suno.ai/f81dc39f-b51c-49e7-a31b-7d8877fd83d3.mp3|3[건강 기원] 뽈랑아, 우리 곁에 올 그날까지 <br>(오케스트라, 웅장한 앙상블)_13MW v4.5-all||",
"https://cdn1.suno.ai/d881fc7f-6f12-4aef-8e2f-8376eeb6258d.mp3|3[건강 기원] 뽈랑아, 우리 곁에 올 그날까지 <br>(오케스트라, 웅장한 앙상블)_14MW v4.5-all||",
"https://cdn1.suno.ai/310a7f52-ef1a-4e92-8d66-c9b08fd98d0a.mp3|4[잉태 기쁨] 뽈랑이의 꿈 (에너지 넘치는 인디)_07MW v4.5-all||",
"https://cdn1.suno.ai/eead8fd7-0f05-4fac-ac01-4adb926a66b3.mp3|4[잉태 기쁨] 뽈랑이의 노래 (요들송, 감성적 즐거운 분위기, EDM 130~140 BPM)_19M v4.5-all||",
"https://cdn1.suno.ai/29a3ae6d-2741-4475-8f56-38cabc54a101.mp3|4[잉태 기쁨] 뽈랑이의 노래 (요들송, 감성적 즐거운 분위기, EDM 130~140 BPM)_20M v4.5-all||",
"https://cdn1.suno.ai/774a9007-d333-4617-a17c-b7d0a2f710f4.mp3|4[건강 기원] 뽈랑아, 우리 곁에 올 그날까지 (1980 이탈로 디스코, 신스웨이브 유로댄스)_04M v4.5-all||",
"https://cdn1.suno.ai/089a4f9a-eb7e-4114-93c1-8c0c9956673d.mp3|4[건강 기원] 뽈랑아, 우리 곁에 올 그날까지 <br>(트로트, 역동적인 댄스 비트)_11WM v4.5-all||",
"https://cdn1.suno.ai/b060c8f3-c298-4438-a7fc-3ce742c85d0a.mp3|5[잉태 기쁨] 뽈랑이의 노래 <br>(행진곡, 군악대, 팡파르)_10MW v4.5-all||",
"https://cdn1.suno.ai/80cb9f1c-9759-4d09-9d1f-1443b0eaa37b.mp3|5[잉태 기쁨] 뽈랑이의 노래 (요들송, 감성적 즐거운 분위기, EDM 120~126 BPM)_12M v4.5-all||",
"https://cdn1.suno.ai/039d7577-f7a5-4c19-b3d3-12e76bf7e176.mp3|5[잉태 기쁨] 뽈랑이의 노래 <br>(7080, 통기타 하모니카 타악기)_01MW v4.5-all||",
"https://cdn1.suno.ai/218183ab-3de4-4b1f-8c92-b4ac31235586.mp3|5[잉태 기쁨] 뽈랑이의 노래 <br>(트로트 선율, 현대 무용 요소의 조화)_07WM v4.5-all||",
"https://cdn1.suno.ai/795e58c4-318e-4f15-83b2-3e4ac1cfac7f.mp3|5[건강 기원] 뽈랑아, 우리 곁에 올 그날까지 (7080, 통기타 하모니카 타악기)_07MW v4.5-all||",
"https://cdn1.suno.ai/09fb9253-7898-4caf-97d3-c3b1359d86f0.mp3|5[건강 기원] 뽈랑아, 우리 곁에 올 그날까지 <br>(트로트 선율, 현대 무용 요소의 조화)_09MW v4.5-all||",
"https://cdn1.suno.ai/2ecc3ad8-2423-4da4-b305-315968f3bba4.mp3|5[잉태 기쁨] 뽈랑이의 꿈 <br>(동요풍, 갓 태어난 아기 신기함 설렘)_03MW v4.5-all||",
"https://cdn1.suno.ai/81ced993-59dd-4495-8501-7cf17be78485.mp3|5[건강 기원] 뽈랑아, 우리 곁에 올 그날까지 (밝고 명랑한 동요, 아기 첫걸음 장난기)_06WM v4.5-all||",
"https://cdn1.suno.ai/02924ad0-accc-4539-a8b2-df268d40a57a.mp3|5[잉태 기쁨] 뽈랑이의 꿈 <br>(7080, 통기타 하모니카 타악기)_01MW v4.5-all||",
"https://cdn1.suno.ai/e613b428-b81e-41fa-ba0f-d8f0561f1e94.mp3|5[잉태 기쁨] 뽈랑이의 꿈 <br>(바이올린 독주 오케스트라, 기대)_05MW v4.5-all||",
"https://cdn1.suno.ai/bf98ba2d-694e-423d-a22e-b0389851830e.mp3|5[잉태 기쁨] 뽈랑이의 꿈 <br>(심포닉 EDM 오케스트라 140BPM)_11MW v4.5-all||",
"https://cdn1.suno.ai/a218c1be-3b76-4727-a09d-5b7840a7998e.mp3|5[잉태 기쁨] 뽈랑이의 노래 <br>(부드러운 신디사이저 멜로디)_03MW v4.5-all||",
"https://cdn1.suno.ai/76d8fdb8-581d-4fef-8b8c-69d8967ca991.mp3|5[잉태 기쁨] 뽈랑이의 꿈 (에너지 넘치는 인디)_08MW v4.5-all||",
"https://cdn1.suno.ai/4092c815-9f41-497e-a552-94f5a93000e2.mp3|5[잉태 기쁨] 뽈랑이의 노래 <br>(하드록과 댄서블한 그루브 디스코)_05MW v4.5-all||",
"https://cdn1.suno.ai/2e32e3fb-b940-4876-8e00-bf5a1429e8f8.mp3|5[건강 기원] 뽈랑아, 우리 곁에 올 그날까지 (1980 이탈로 디스코, 신스웨이브 유로댄스)_03M v4.5-all||",
"https://cdn1.suno.ai/98908de8-593f-4a8c-8982-1dd7f79f265e.mp3|5[잉태 기쁨] 뽈랑이의 꿈 (영화적인 심포닉 메탈, 웅장한 브라스와 현악기)_16MW v4.5-all||",
"https://cdn1.suno.ai/222dc33b-b4be-40e4-a4f8-56bb962d89fd.mp3|5[잉태 기쁨] 뽈랑이의 꿈 <br>(행진곡 금관악기, 영웅적 축제적)_10MM v4.5-all||",
"https://cdn1.suno.ai/1331981c-01ab-4829-aafa-02ee5a4bd79b.mp3|5[잉태 기쁨] 뽈랑이의 노래 (요들송, 감성적 즐거운 분위기, EDM 120~126 BPM)_13M v4.5-all||",
"https://cdn1.suno.ai/cef058d7-0134-4c15-ae9a-5c0935991315.mp3|5[잉태 기쁨] 뽈랑이의 노래 (요들송, 감성적 즐거운 분위기, EDM 120~126 BPM)_14M v4.5-all||",
"https://cdn1.suno.ai/1875bdd1-e572-4fb9-aec2-afd52ef61cf1.mp3|8[잉태 기쁨] 뽈랑이의 노래 (뽈랑 요들송, 즐거운 분위기, EDM 130~140 BPM)_15M v4.5-all||",
]

song = [
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/sNaVQ/btsOw5MrWui/XGD5nbYNLQJf9kOr9t8nNk/img.png') repeat fixed center top" cellpadding='20' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>뽈랑이 사랑가</b></font><br>

얼씨구 좋다~<br>
오월에 복덩이 왔네~<br><br>

오월 바람 살랑이는 날에<br>
우리 집에 경사 났네<br>
엄마 품에 자라나는<br>
복덩이가 온다네<br><br>

콩닥콩닥 작은 심장<br>
기특하게 뛰고 있네<br>
온 가족의 소원 안고<br>
뽈랑이가 온다네<br><br>

뽈랑뽈랑 우리 뽈랑이<br>
하늘에서 내려온 복<br>
엄마 아빠 웃음꽃에<br>
사랑받으며 자라렴<br><br>

뽈랑뽈랑 내 강아지<br>
금보다 더 귀한 아이<br>
할아버지 두 팔 벌려<br>
세상 제일 축복한다<br><br><br>


고운 손에 쥔 희망이<br>
우리 집을 밝히네<br>
며느리의 고운 수고<br>
눈물겨이 고맙네<br><br>

아가야 넌 기적이란다<br>
우리 가문의 햇살<br>
태어나는 그날부터<br>
행복길만 걷거라<br><br>

뽈랑뽈랑 우리 뽈랑이<br>
오월 향기 닮은 아이<br>
웃음으로 복을 부르는<br>
우리 집의 효자손자<br><br>

뽈랑뽈랑 사랑둥이<br>
건강하게 자라다오<br>
할아버지 마음 담아<br>
평생토록 응원한다<br><br>

<img src="https://i.imgur.com/JYQELNp.png" width=100% title="📷 "><br><br>

얼씨구 좋다 우리 손자~<br>
뽈랑이야 사랑한다~<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/bvn2Wa/btsOyojFwNE/oQF6pyZs1UJR5h2oDftYeK/img.png') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>당신들의 생일을 축하합니다</b></font><br>

사랑하는 아들, 고운 며느리!<br>
오늘 당신들의 생일을 축하합니다~ ☆<br><br>

<img src="https://i.imgur.com/EWZIw9U.png" width=100% title="📷 "><br><br>

두 사람이 함께 걸어가는 길<br>
언제나 행복과 웃음 가득하기를..<br><br>

<img src="https://i.imgur.com/LTpQf2J.jpeg" width=100% title="📷 "><br><br>

생일 축하해요, 나의 소중한 두 사람!<br>
세상 가장 아름다운 당신들을 위해<br>
이 노래를 불러요, 마음을 담아..<br><br>

<img src="https://i.imgur.com/Ohsif0H.jpeg" width=100% title="📷 "><br><br>

늘 건강하고, <br>
늘 사랑하며, <br>
늘 행복하세요~~<br><br>

<img src="https://i.imgur.com/DXIveTr.jpeg" width=100% title="📷 "><br><br>

처음 당신들을 만났던 그날<br>
가슴 벅찬 설렘과 기쁨이었소<br>
어느새 이렇게 훌쩍 자라<br>
나의 든든한 버팀목이 되어주었네요.<br><br>

<img src="https://i.imgur.com/lVTDnas.png" width=100% title="📷 "><br><br>

생일 축하해요, 나의 소중한 두 사람!<br>
세상 가장 아름다운 당신들을 위해<br>
이 노래를 불러요, 마음을 담아..<br><br>

<img src="https://i.imgur.com/bjhcrHs.jpeg" width=100% title="📷 "><br><br>

늘 건강하고, <br>
늘 사랑하며, <br>
늘 행복하세요~~<br><br>

<img src="https://i.imgur.com/FlHOxSm.jpeg" width=100% title="📷 "><br><br>

때로는 힘든 날도 있겠지만<br>
서로를 보듬어주며 이겨내길 바라요.<br><br>

<img src="https://i.imgur.com/i8beEJ2.png" width=100% title="📷 "><br><br>

함께 살아가며 아름다운 추억을<br>
하나하나 만들어가는 당신들이 되기를<br><br>

<img src="https://i.imgur.com/K7jiyCV.jpeg" width=100% title="📷 "><br><br>

생일 축하해요, 나의 소중한 두 사람!<br>
세상 가장 아름다운 당신들을 위해<br>
이 노래를 불러요, 마음을 담아..<br><br>

<img src="https://i.imgur.com/0xpSrq1.jpeg" width=100% title="📷 "><br><br>

늘 건강하고, <br>
늘 사랑하며, <br>
늘 행복하세요~~<br><br>

<img src="https://i.imgur.com/xeFSOkP.jpeg" width=100% title="📷 "><br><br>

다시 한번 생일을 축하하며,<br>
이 기쁜 날, 오래도록 기억되기를..<br><br>

<img src="https://i.imgur.com/YxmArdL.png" width=100% title="📷 "><br><br>

사랑해요. 나의 아들, 나의 며느리!<br>
영원히 축복합니다~~~ ☆<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('http://cfile239.uf.daum.net/original/21085844525FBD3201F5E6') repeat fixed center top" cellpadding='2' width=100%><tr valign=middle><td class='lt'>
<P class='mid2'><font style="display:none"><b>로운이와 함께 하는 결혼 4주년 축하해!</b></font><br>

경진과 휘경, 두 사람의 이야기<br>
사랑으로 엮어가는 4년의 시간<br><br>

<img src="https://i.imgur.com/kUlat99.jpeg" width=100% title="📷 "><br><br>

햇살 닮은 미소로 처음 만난 날<br>
설렘 가득한 눈빛, 운명처럼 이끌렸지<br><br>

<img src="https://i.imgur.com/v5vZDhk.jpeg" width=100% title="📷 "><br><br>

함께 걸어온 발걸음, <br>
때론 힘들 때도 있었지만<br>
서로를 향한 믿음으로 굳건히 지켜왔네<br><br>

<img src="https://i.imgur.com/UQNOwIp.jpeg" width=100% title="📷 "><br><br>

시간은 흘러 4주년, <br>
혁혼의 약속으로 다시 한번<br>
두 사람의 사랑을 세상에 노래하네<br><br>

<img src="https://i.imgur.com/ERK2fEG.jpeg" width=100% title="📷 "><br><br>

경진아, 휘경아, <br>
너희들의 결혼 4주년을 축하한다<br><br>

<img src="https://i.imgur.com/j4MLFhw.jpeg" width=100% title="📷 "><br><br>

함께 웃고 울었던 소중한 기억들<br>
앞으로도 변치 않을 사랑으로<br>
행복 가득한 날들만 만들어가기를..<br><br>

<img src="https://i.imgur.com/hBNNkB6.jpeg" width=100% title="📷 "><br><br>

작년엔 없었던 작은 천사, <br>
로운이가 찾아왔으니<br>
온 세상의 빛이 되어 너희 곁을 지키네<br><br>

<img src="https://i.imgur.com/lHgiIHU.jpeg" width=100% title="📷 "><br><br>

세 식구가 된 너희들의 모습, <br>
얼마나 아름다운지<br>
사랑이 넘치는 가정, 희망이 꽃피는구나<br><br>

<img src="https://i.imgur.com/5IqFmEr.png" width=100% title="📷 "><br><br>

시간은 흘러 4주년, <br>
혁혼의 약속으로 다시 한번<br>
두 사람의 사랑을 세상에 노래하네<br><br>

<img src="https://i.imgur.com/rZ5pXQ8.jpeg" width=100% title="📷 "><br><br>

경진아, 휘경아, <br>
너희들의 결혼 4주년을 축하한다<br><br>

함께 웃고 울었던 소중한 기억들<br>
앞으로도 변치 않을 사랑으로<br>
행복 가득한 날들만 만들어가기를..<br><br>

<img src="https://i.imgur.com/pmnJc94.png" width=100% title="📷 "><br><br>

로운이의 환한 웃음처럼<br>
너희들의 앞날도 늘 밝게 빛나기를<br>
축복의 노래가 끊이지 않기를..<br><br>

<img src="https://i.imgur.com/UcHazfA.png" width=100% title="📷 "><br><br>

경진아, 휘경아, <br>
결혼 4주년을 진심으로 축하한다<br><br>

함께 써 내려갈 수많은 날들<br>
영원한 사랑을 맹세하며<br>
세상 가장 행복한 부부가 되기를..<br><br>

<img src="https://i.imgur.com/jDefw8f.jpeg" width=100% title="📷 "><br><br>

축하한다, 그리고 사랑한다<br>
경진아, 휘경아, 로운아!<br>
영원히 행복하기를…<br><br>

<img src="https://i.imgur.com/4CJfg6o.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/sNaVQ/btsOw5MrWui/XGD5nbYNLQJf9kOr9t8nNk/img.png') repeat fixed center top" cellpadding='2' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>로운에게 보내는 할아머니의 百日 축복</b></font><br>

따스한 햇살처럼 반짝이는 <br>
우리 아가 로운아!<br>
백일의 기쁨이 우리에게 찾아왔구나~<br><br>

<img src="https://i.imgur.com/yuKiZb9.png" width=100% title="📷 "><br><br><br>


작고 여린 손으로 세상을 더듬던 날<br>
우릴 보며 처음으로 웃음 짓던 그날<br>
할아버지 할머니는 매일 기도했단다<br>
건강하게 자라라고, 행복하라고..<br><br>

<img src="https://i.imgur.com/5O1kG8i.png" width=100% title="📷 "><br><br>

무럭무럭 자라나는 너의 모습 볼 때면<br>
가슴 벅찬 감동이 샘솟는구나<br><br>

<img src="https://i.imgur.com/VvBn8iq.png" width=100% title="📷 "><br><br>

세상의 좋은 빛깔이 너에게 향하기를<br>
곱고 이로운 마음으로 꿈을 펼치려무나<br><br>

<img src="https://i.imgur.com/NCaFs81.png" width=100% title="📷 "><br><br><br>


어느새 이렇게 훌쩍 자란 우리 아가야<br>
너의 웃음소리, 집안 가득 채우는구나~<br><br>

<img src="https://i.imgur.com/QtXauSh.png" width=100% title="📷 "><br><br>
<!-- img src='https://i.imgur.com/9IbXqwg.jpeg' width=100% title='📷 로운 고양이 배경'><br><br //-->

축하해, 우리 아가! <br>
백일을 맞은 로운아~~<br>
세상이 준 선물, 가장 소중한 보물<br><br>

<img src="https://i.imgur.com/u5wrtdW.png" width=100% title="📷 "><br><br>

앞으로 펼쳐질 너의 모든 날들을<br>
할아버지 할머니가 언제나 응원할게<br><br>

<img src="https://i.imgur.com/LVo2Xkp.png" width=100% title="📷 "><br><br><br>


때로는 넘어지고 어려울 때도 있겠지만<br>
그럴 때는 우리가 너를 지켜줄게<br><br>

<img src="https://i.imgur.com/LUdak2m.png" width=100% title="📷 "><br><br>

세상에 하나뿐인 너를 사랑하기에<br>
어떤 어려움도 이겨내게 해줄 거야<br><br>

<img src="https://i.imgur.com/6RZSB99.png" width=100% title="📷 "><br><br>

반짝이는 눈빛 속에 호기심 가득한 너<br>
슬기로운 지혜로 이 세상을 배우려무나<br><br>

<img src="https://i.imgur.com/9LD9tEn.png" width=100% title="📷 "><br><br>

할아버지 할머니는 너의 든든한 울타리<br>
언제나 너의 곁에서 힘이 되어 줄 거야<br><br>

<img src="https://i.imgur.com/gNaFYxz.png" width=100% title="📷 "><br><br><br>


어느새 이렇게 훌쩍 자란 우리 아가야<br>
너의 웃음소리, 집안 가득 채우는구나~<br><br>

축하해, 우리 아가! <br>
백일을 맞은 로운아~~<br>
세상이 준 선물, 가장 소중한 보물<br><br>

앞으로 펼쳐질 너의 모든 날들을<br>
할아버지 할머니가 언제나 응원할게<br><br>

<img src="https://i.imgur.com/0XHALzA.png" width=100% title="📷 "><br><br><br>


우리 손자로 우리에게 와주어서<br>
온 세상이 환하게 빛나는 것 같아<br><br>

<img src="https://i.imgur.com/LoEZvj1.png" width=100% title="📷 "><br><br>

감사해, 사랑해! <br>
우리 예쁜 아가 로운아~~<br>
영원히 너의 편이 되어 줄게<br><br>

<img src="https://i.imgur.com/2B0rGc7.png" width=100% title="📷 "><br><br>

축하해, 우리 아가! <br>
백일을 맞은 로운아~~<br>
세상이 준 선물, 가장 소중한 보물<br><br>

앞으로 펼쳐질 너의 모든 날들을<br>
할아버지 할머니가 언제나 응원할게<br><br>

<img src="https://i.imgur.com/TYF7sAQ.png" width=100% title="📷 "><br><br><br>


로운아 사랑한다... <br>
백일을 축하한다...<br><br>

<img src='https://i.imgur.com/ONpOhEg.png' class="fade-in-out" width=100% title='📷 로운 백일 반지'>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('http://cfile211.uf.daum.net/original/255B5044525FBE65234AD3') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>로운에게 보내는 百日 축하</b></font><br>

사랑하는 우리 아가 로운아, <br>
어느새 백일이야<br>
작고 소중한 너의 모습에 <br>
매일매일 감사해<br><br>

<img src="https://i.imgur.com/CKzi95t.png" width=100% title="📷 "><br><br>

까꿍하며 웃는 너의 얼굴, <br>
세상을 다 가진 듯해<br>
반짝이는 두 눈 속으로 <br>
엄마 사랑 가득 보낸다~<br><br>

<img src="https://i.imgur.com/t6hhA2e.jpeg" width=100% title="📷 "><br><br>
<!-- img src='https://i.imgur.com/NIbmceM.jpeg' style="filter: opacity(70%);" width=100% title='📷 로운 50일 기념'><br><br //-->

세상에 태어나줘서 고마워, <br>
우리의 보물<br>
하나, 둘, 셋.. 세어보던 날들이 <br>
꿈만 같아<br><br>

<img src="https://i.imgur.com/2u8OJQz.jpeg" width=100% title="📷 "><br><br>

힘들 때도 있었지만 <br>
너의 미소 보면 힘이 나~<br>
아빠의 넓은 품에서 <br>
언제나 편안하기를..<br><br>

<img src="https://i.imgur.com/gEEV9tL.png" width=100% title="📷 "><br><br><br>


작은 천사 우리 아가 로운아, <br>
세상의 빛이 될 거야<br>
너의 모든 날들이 축복으로 가득하길<br><br>

<img src="https://i.imgur.com/jGgSSiD.jpeg" width=100% title="📷 "><br><br>

백일의 기쁨, 우리 아가 로운아 축하해<br>
사랑으로 너를 감싸 안아줄게<br>
환하게 웃는 너의 모습 그대로<br>
세상 가장 행복한 아이로 자라렴<br><br>

<img src="https://i.imgur.com/pTHJhve.png" width=100% title="📷 "><br><br><br>


꽃보다 예쁜 손자 로운아, <br>
어느덧 백일이라니<br>
할미 가슴엔 늘 네가 있었단다, <br>
사랑한다 로운아!<br><br>

<img src="https://i.imgur.com/vXHk5Lc.jpeg" width=100% title="📷 "><br><br>

배냇저고리 입은 모습이 <br>
어찌나 귀엽던지<br>
무럭무럭 자라는 너의 모습에 <br>
할미는 행복해<br><br>

<img src="https://i.imgur.com/Y5ZOghJ.jpeg" width=100% title="📷 "><br><br><br>


힘찬 기운 받아라, <br>
우리의 자랑스러운 손자<br>
건강하게, 씩씩하게, <br>
지혜롭게 자라다오<br><br>

<img src="https://i.imgur.com/FsXNV5t.jpeg" width=100% title="📷 "><br><br>

언제나 너의 곁엔 <br>
든든한 할아버지 있단다<br>
세상 모든 좋은 것들이 <br>
너에게 향하기를..<br><br>

<img src="https://i.imgur.com/RZCKLZQ.jpeg" width=100% title="📷 "><br><br><br>


작은 새싹, 우리 아가 로운아, <br>
푸른 꿈을 펼치렴<br>
너의 모든 순간이 행복으로 물들기를..<br><br>

<img src="https://i.imgur.com/VmS2aUG.jpeg" width=100% title="📷 "><br><br>

백일의 기쁨, 우리 아가 로운아 축하해<br>
사랑으로 너를 감싸 안아줄게<br><br>

<img src="https://i.imgur.com/5nDkGoX.jpeg" width=100% title="📷 "><br><br>

환하게 웃는 너의 모습 그대로<br>
세상 가장 행복한 아이로 자라렴<br><br>

<img src="https://i.imgur.com/c5A0IJb.jpeg" width=100% title="📷 "><br><br><br>


넘어져도 괜찮아, <br>
다시 일어설 수 있도록<br><br>

<img src="https://i.imgur.com/25ihrh0.jpeg" width=100% title="📷 "><br><br>

늘 곁에서 응원할게, <br>
너의 꿈을 맘껏 펼치렴<br><br>

<img src="https://i.imgur.com/k4moqwY.jpeg" width=100% title="📷 "><br><br>

백일의 기쁨, 우리 아가 로운아 축하해<br>
사랑으로 너를 감싸 안아줄게<br><br>

<img src="https://i.imgur.com/fqop708.jpeg" width=100% title="📷 "><br><br>

환하게 웃는 너의 모습 그대로<br>
세상 가장 행복한 아이로 자라렴<br><br>

<img src="https://i.imgur.com/JL1djn5.jpeg" width=100% title="📷 "><br><br><br>


<!-- img src='https://i.imgur.com/RzZNHH8.jpeg' width=100% title='📷 로운 액자'><br><br //-->

사랑한다, 우리 아가 로운아!<br><br>

언제나 사랑한다. 영원토록...<br><br>

<img src="https://i.imgur.com/vvUpnXo.jpeg" width=100% title="📷 "></font>
</td></tr></table>`,
`<table style="BACKGROUND:#ffff66 url('https://blog.kakaocdn.net/dn/Xj6h3/btsOxjDAXcz/cen6SOE7KJFtvqXrwhQkEk/img.png') repeat fixed center top" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>까꿍~ 로운아! 탄생 100일을 축하해!</b></font><br>

까꿍 까꿍, 우리 아가 로운아<br>
옹알 옹알, 옹알 대장 로운아<br><br>

<img src="https://i.imgur.com/I2OamTB.jpeg" width=100% title="📷 "><br><br>

축하 축하, 로운이의 백일을..<br>
축복 축복, 로운에게 보낸다~~<br><br>

<img src="https://i.imgur.com/0TyLBjz.jpeg" width=100% title="📷 "><br><br><br>


조물 조물, 손가락이 귀여워<br><br>

<img src="https://i.imgur.com/stmYyjm.jpeg" width=100% title="📷 "><br><br>

꼬물 꼬물, 발가락도 예뻐라<br><br>

<img src="https://i.imgur.com/bFQi2Ud.jpeg" width=100% title="📷 "><br><br>

토실 토실, 복스러운 종아리<br><br>

<img src="https://i.imgur.com/5jqisiG.png" width=100% title="📷 "><br><br>

씰룩 씰룩, 엉덩이가 통통해<br><br>

<img src="https://i.imgur.com/BiiH3ig.png" width=100% title="📷 "><br><br><br>


똘망 똘망, 사랑스런 눈망울<br><br>

<img src="https://i.imgur.com/HPINsjE.png" width=100% title="📷 "><br><br>

포동 포동, 볼퉁이도 예뻐요<br><br>

<img src="https://i.imgur.com/mKZoJLD.jpeg" width=100% title="📷 "><br><br>

복슬 복슬, 머릿결이 빛나고<br><br>

<img src="https://i.imgur.com/HKjEcXw.png" width=100% title="📷 "><br><br>

새근 새근, 잠든 모습 상큼해<br><br>

<img src="https://i.imgur.com/WrDndsw.png" width=100% title="📷 "><br><br><br>


무럭 무럭, 건강하게 자라라<br><br>

<img src="https://i.imgur.com/GyQiUPb.jpeg" width=100% title="📷 "><br><br>

불끈 불끈, 씩씩하게 힘내라<br><br>

<img src="https://i.imgur.com/sSXqWuw.jpeg" width=100% title="📷 "><br><br>

듬뿍 듬뿍, 사랑으로 나눠라<br><br>

<img src="https://i.imgur.com/BXMLifn.jpeg" width=100% title="📷 "><br><br>

가득 가득, 행복으로 채워라<br><br>

<img src="https://i.imgur.com/qGLH5xp.jpeg" width=100% title="📷 "><br><br><br>


로운 로운, 슬기 로운 로운아<br><br>

<img src="https://i.imgur.com/lBQr7DU.png" width=100% title="📷 "><br><br>

크게 크게, 너의 꿈을 키워라<br><br>

<img src="https://i.imgur.com/sxzHJVC.png" width=100% title="📷 "><br><br>

높게 높게, 너의 이상 펼쳐라<br><br>

<img src="https://i.imgur.com/Qx6cAxv.jpeg" width=100% title="📷 "><br><br>

반짝 반짝, 우리 보배 빛나라<br><br>

<img src="https://i.imgur.com/KArcT3H.jpeg" width=100% title="📷 "><br><br><br>


널찍한 아빠의 가슴팍에 안기어<br>
귀여운 옹알이로 응답해 준 로운아~~<br>
로운이 아빠라서 자랑스러워<br><br>

<img src="https://i.imgur.com/KpfJkxG.png" width=100% title="📷 "><br><br>

어느 날 목 가누며, 앙증스런 얼굴로<br>
엄마에게 천사 미소 보내준 로운아~~<br>
로운이 엄마라서 너무 행복해<br><br>

<img src="https://i.imgur.com/7LDu0ez.png" width=100% title="📷 "><br><br><br>
<!-- img src='https://i.imgur.com/GYGm9Ct.jpeg' style='border-radius: 10%;' width=100% title='📷 로운 조약돌 배경'><br><br><br //-->


뭉클 뭉클, 엄마 아빠 가슴이<br>
몽글 몽글, 피어 나는 감격에..<br><br>

<img src="https://i.imgur.com/grYeyRg.png" width=100% title="📷 "><br><br>

백일 백일, 축하한다 로운아<br>
로운 로운, 축하한다 백일을..<br><br>

<img src="https://i.imgur.com/boMLSUM.jpeg" width=100% title="📷 "><br><br>

거듭 거듭, 축하한다 백일을..<br>
다시 다시, 축하한다 백일을..<br>
자꾸 자꾸, 축하한다 백일을..<br><br>

<img src="https://i.imgur.com/qJGp8H2.jpeg" width=100% title="📷 "><br><br>

다시 한번 축하한다. <br>
로운이의 백일을~~~<br>
</td></tr></table>`,
`<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/blyuoe/btsN2b0gXx6/iDOSuLAnhr8fXK3p4dhZv0/img.png') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>할아버지 할머니가 보내는 로운이의 축복</b></font><br>

작은 심장이 두근거려요<br>
로운이의 세상이 시작되었네<br><br>

<img src="https://i.imgur.com/7N1Loi6.jpeg" width=100% title="📷 "><br><br>

휘경아 경진아 애썼구나<br>
사랑스런 아가를 품에 안으니<br>
벅찬 기쁨에 눈물이 핑 돌아<br><br>

<img src="https://i.imgur.com/EeVXQCK.jpeg" width=100% title="📷 "><br><br>

로운아, 할아버지 할머니는<br>
너의 웃음소리에 힘이 솟는다<br>
반짝이는 눈망울, 우리의 별이구나<br><br>

<img src="https://i.imgur.com/If1WoyD.jpeg" width=100% title="📷 "><br><br>

로운 로운 우리 아가 로운이는<br>
온 세상 축복 속에 태어났어요<br>
휘경아 경진아 마음껏 펼쳐라<br>
희망과 사랑으로 가득한 미래를...<br><br>

<img src="https://i.imgur.com/3zCDcyI.jpeg" width=100% title="📷 "><br><br>

새근새근 잠든 모습이 천사 같아<br>
아픔 없이 건강하게 자라려무나<br>
지혜롭고 씩씩한 아이로...<br><br>

<img src="https://i.imgur.com/i3i9SFs.jpeg" width=100% title="📷 "><br><br>

엄마와 아빠의 사랑 듬뿍 받으며<br>
세상 모든 아름다움을 배우려무나<br>
할아버지 할머니가 언제나 지켜줄게<br><br>

<img src="https://i.imgur.com/1AYauHv.jpeg" width=100% title="📷 "><br><br>

로운 로운 우리 아가 로운이는<br>
온 세상 축복 속에 태어났어요<br>
휘경아 경진아 마음껏 펼쳐라<br>
희망과 사랑으로 가득한 미래를...<br><br>

작은 발걸음 하나하나에<br>
소중한 추억 만들어가려무나<br>
함께 노래하고 함께 웃으며...<br><br>

<img src="https://i.imgur.com/1iprl1v.jpeg" width=100% title="📷 "><br><br>

로운 로운 우리 아가 로운이는<br>
온 세상 축복 속에 태어났어요<br>
휘경아 경진아 마음껏 펼쳐라<br>
희망과 사랑으로 가득한 미래를...<br><br>

<img src="https://i.imgur.com/iT44NA2.jpeg" width=100% title="📷 "><br><br>

로운아, 사랑한다<br>
우리 아가 로운아, 영원토록...<br><br>

<img src="https://i.imgur.com/9udPFb5.jpeg" width=100% title="📷 "><br>
</td></tr></table>`,
`<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/RYT3z/btsN1SzNxf5/FvWnM0omExZiWsUAarjrb0/img.jpg') repeat fixed center top\" cellpadding='2' width=100%><tr valign=middle><td class='lt'>\
<P class='mid2'><font style="display:none"><b>로운에게 보내는 엄마 아빠의 축복</b></font><br>

사랑스러운 우리 아기, 로운아<br>
건강하게 우리에게 와줘서 고마워<br>
온 세상이 너의 탄생을 축하해<br>
모두가 기뻐하며 축복을 보내<br><br>

<img src="https://i.imgur.com/HtdjZVY.jpeg" width=100% title="📷 "><br><br>

작은 손짓, 작은 발길이 감격스러워<br>
너의 웃음, 너의 울음에 가슴이 벅차<br>
바다 색, 하늘 빛깔을 닮은 로운아<br>
너는 우리에게 소중한 기적의 선물이야 <br><br>

<img src="https://i.imgur.com/cGK5NPm.jpeg" width=100% title="📷 "><br><br>

로운이의 꿈, 펼쳐질 세상이 온 거야<br>
햇살이 눈부시고 뭉게구름이 피어나<br>
너를 안을 수 있어서 너무 기뻐<br>
너와 마주할 수 있어, 너무 행복해<br><br>

<img src="https://i.imgur.com/FzMnmM7.jpeg" width=100% title="📷 "><br><br>

튼튼하고 건강하게 자랄 수 있도록<br>
항상 든든하게 너의 곁에 서 있을게<br>
언제나 사랑으로 너의 모습 바라볼게<br>
모든 순간, 모든 날이 행복하기를...<br><br>

<img src="https://i.imgur.com/K38TMY9.jpeg" width=100% title="📷 "><br><br>

로운이의 미래를 함께 걸을 거야<br>
희망을 더 크게, 키워줄 거야<br>
사랑스런 눈빛으로 세상을 보고<br>
사랑 가득한 마음으로 살 수 있도록...<br><br>

<img src="https://i.imgur.com/1RPv5KP.jpeg" width=100% title="📷 "><br><br>

로운이의 꿈, 우리가 키워줄게<br>
로운이의 길, 우리가 밝혀줄게<br>
엄마 품에서 네 꿈이 피어나고<br>
아빠 품에선 그 꿈이 자랄 거야<br><br>

<img src="https://i.imgur.com/oWexNvE.jpeg" width=100% title="📷 "><br><br>

로운아, 사랑해<br>
이 세상에 빛으로 와줘서 고마워<br>
너는 우리 삶에서<br>
가장 찬란한 봄날의 시작이야<br><br>

<img src="https://i.imgur.com/3zZ9lUG.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/nxO4z/btsN2oZm5xw/qITmE0LZ1xxbTLffYrjtmk/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>이 세상 이름, 로운에게</b></font><br>

뽈랑아, <br>
웃으면서 우리 곁에 와줘서 고마워<br><br><font color='black'>

이제 세상에서 <br>
너를 부를 이름이 생겼구나<br><br>

여울 로, 높을 운— <br>
맑고 멋진 이름이로다<br><br>

로운아, 로운아, <br>
자꾸만 불러보고 싶구나~<br><br>

<img src="https://i.imgur.com/R4shAhl.png" width=100% title="📷 "><br><br><br>


세차게 흐르는 여울처럼 <br>
씩씩한 너 되기를<br><br>

<img src="https://i.imgur.com/S1FSwrY.jpeg" width=100% title="📷 "><br><br>

하늘을 향해 꿈을 펼칠 <br>
높을 운의 아이야<br><br>

<img src="https://i.imgur.com/q5lnutM.jpeg" width=100% title="📷 "><br><br>

이로운 마음, 슬기로운 눈빛으로<br>
이 세상에 웃음과 사랑 나누어 주기를<br><br>

<img src="https://i.imgur.com/thHpvTc.jpeg" width=100% title="📷 "><br><br><br>


로운아~ 귀엽게 잠든 너를 바라보며<br>
조용히 너의 이름을 속삭여 본다<br><br>

<img src="https://i.imgur.com/S5Xs5D3.jpeg" width=100% title="📷 "><br><br>

아픔 없이 건강하게 자라주기를<br>
희망과 사랑이 가득한 아이 되기를<br><br>

<img src="https://i.imgur.com/ntZOhpU.jpeg" width=100% title="📷 "><br><br><br>


로운이라는 이름에 <br>
축복이 담겨 있단다<br><br>

할아버지 목소리에도, <br>
할머니 미소 속에도<br><br>

<img src="https://i.imgur.com/kSWdNrd.png" width=100% title="📷 "><br><br>

너의 이름은 기쁨, 너의 이름은 약속<br>
언제나 이로운 빛으로 <br>
세상을 밝혀 주기를..<br><br>

<img src="https://i.imgur.com/2wMtjsx.jpeg" width=100% title="📷 "><br><br><br>


뽈랑으로 온 너, <br>
로운이 되어 피어났구나<br><br>

<img src="https://i.imgur.com/oaR84S0.jpeg" width=100% title="📷 "><br><br>

햇살 같은 아이야, 우리 모두의 봄날<br><br>

<img src="https://i.imgur.com/7ki5Ryn.jpeg" width=100% title="📷 "><br><br>

바람결에도, 나뭇잎 위에도<br>
로운이라는 이름이 <br>
아름답게 퍼져 간다<br><br>

<img src="https://i.imgur.com/4a5d84L.jpeg" width=100% title="📷 "><br><br><br>


로운아~ 사랑스러운 우리 손주야<br>
그 이름 또 불러보고 싶구나, 로운아~<br><br>

<img src="https://i.imgur.com/nXM7VDr.jpeg" width=100% title="📷 "><br><br>

자랑스럽고 슬기로운 그 이름<br>
이로운 이 세상에 <br>
널리 널리 빛날지어라<br><br>

<img src="https://i.imgur.com/cK145yi.jpeg" width=100% title="📷 "><br><br><br>


로운아, 사랑해<br>
너의 이름을 마음에 새긴다..<br><br>

<img src="https://i.imgur.com/dtGPA8q.png" width=100% title="📷 "><br><br>

이 세상 어디서든 그 이름으로<br>
밝게, 건강하게 살아가기를…<br><br>

<img src="https://i.imgur.com/cmZ7XGP.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/8on3l/btsOwFtmEEn/HSYC0Gfmz4UIyGihvrnyk1/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font color='white'><font style="display:none"><b>로운에게 보내는 할아머니의 축복</b></font><br>

건강하게 우리 곁에 와줘서 고마워, <br>
뽈랑아!<br>
드디어 이 세상이 부를 <br>
너의 이름 지어졌네<br><br>

<img src="https://i.imgur.com/ZYkUlCt.jpeg" width=100% title="📷 "><br><br>

여울 로, 높을 운, <br>
참으로 멋진 그 이름, 로운아!<br>
새로운 너의 이름 <br>
자꾸만 불러보고 싶구나<br><br>

<img src="https://i.imgur.com/3ZCcPQj.jpeg" width=100% title="📷 "><br><br>

세찬 여울처럼 씩씩한 기백으로<br>
높을 운답게 꿈과 이상을 높이 펼쳐라<br><br>

<img src="https://i.imgur.com/5fVb7n7.jpeg" width=100% title="📷 "><br><br>

슬기로운 눈길로 세상을 바라보고<br>
이로운 마음으로 행복을 나누려무나<br><br>

<img src="https://i.imgur.com/8GxZ9g9.jpeg" width=100% title="📷 "><br><br><br>


로운아~<br>
높이 날아라 자유롭게, <br>
용감한 기상으로 세상을 향해...<br><br>

<img src="https://i.imgur.com/aRrCQ7j.png" width=100% title="📷 "><br><br>

긍정적인 너의 삶이 <br>
언제나 행복하기를..<br>
모든 날 모든 순간을 우리가 축복할게<br><br>

<img src="https://i.imgur.com/8mtHRwJ.jpeg" width=100% title="📷 "><br><br>

새근새근 귀엽게 잠든 <br>
네 모습 지켜보면서<br>
조용히 너의 이름을 불러본다, <br>
로운아~~<br><br>

<img src="https://i.imgur.com/hZehBFz.jpeg" width=100% title="📷 "><br><br>

아픔 없이 밝고 건강하게 자라려무나<br>
희망과 사랑으로 가득한 아이로...<br><br>

<img src="https://i.imgur.com/1C1DA4e.jpeg" width=100% title="📷 "><br><br><br>


로운아~<br>
높이 날아라 자유롭게, <br>
용감한 기상으로 세상을 향해...<br><br>

긍정적인 너의 삶이 <br>
언제나 행복하기를<br>
모든 날 모든 순간을 우리가 축복할게<br><br>

소중하고 사랑스러운 우리 손주, <br>
로운아!<br>
그 이름 또 한 번 불러본다, 로운아~~<br><br>

<img src="https://i.imgur.com/Upcuqck.jpeg" width=100% title="📷 "><br><br>

자랑스럽고 슬기로운 그 이름,<br>
이로운 이 세상에 <br>
널리 널리 빛날지어라~~~ ☆<br><br>

<img src="https://i.imgur.com/JA6ERre.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/ceHzN3/btsOv8v4VZh/45ektZI7qUwePeiyzhU6e0/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>로운아, 빛나라~~~ ☆</b></font><br>

뽈랑 빛 미소로 우리 곁에 찾아온 너<br><br>

<img src="https://i.imgur.com/tAwxtkd.jpeg" width=100% title="📷 "><br><br>

새로운 세상 속에서 첫걸음 내딛네<br><br>

<img src="https://i.imgur.com/g2qtiQc.jpeg" width=100% title="📷 "><br><br>

여울처럼 힘차게, 바람처럼 자유롭게<br><br>

<img src="https://i.imgur.com/RFQtFrP.jpeg" width=100% title="📷 "><br><br>

높은 하늘 향해 네 꿈을 펼쳐보렴..<br><br>

<img src="https://i.imgur.com/8Goutkc.jpeg" width=100% title="📷 "><br><br><br>


로운아, 빛나라~ 밝은 별처럼..<br><br>

<img src="https://i.imgur.com/8NTN2Lu.jpeg" width=100% title="📷 "><br><br>

슬기로운 마음으로 세상을 품으려무나<br><br>

<img src="https://i.imgur.com/Zc44taZ.png" width=100% title="📷 "><br><br>

이로운 사랑으로 모두를 감싸며<br><br>

<img src="https://i.imgur.com/6R64lif.jpeg" width=100% title="📷 "><br><br>

우리 곁에서 소중하게 피어나렴..<br><br>

<img src="https://i.imgur.com/LuPOdas.jpeg" width=100% title="📷 "><br><br><br>


밤하늘 속 작은 별이 빛을 잃지 않듯<br>
네 이름 속 희망도 언제나 반짝일 거야<br><br>

<img src="https://i.imgur.com/WeKtPb3.png" width=100% title="📷 "><br><br>

기쁜 날도, 힘든 날도, 너를 불러줄게<br>
너의 이름 속에 담긴 사랑을 기억하며<br><br>

<img src="https://i.imgur.com/x66Kvon.png" width=100% title="📷 "><br><br><br>


로운아, 빛나라~ 밝은 별처럼..<br>
슬기로운 마음으로 세상을 품으려무나<br>
이로운 사랑으로 모두를 감싸며<br>
우리 곁에서 소중하게 피어나렴..<br><br><br>


높은 곳에서 밝게 빛나는 너<br>
세상 어디서나 그 이름 울려 퍼지기를<br><br>

<img src="https://i.imgur.com/uAy9R12.jpeg" width=100% title="📷 "><br><br>

로운아, 너의 이름처럼<br>
우리 곁에 기쁨을 안겨주기를..<br><br>

<img src="https://i.imgur.com/ZeTLLqZ.jpeg" width=100% title="📷 "><br><br><br>


로운아, 빛나라~ 밝은 별처럼..<br>
이로운 세상으로 너의 사랑을 전하렴<br><br>

<img src="https://i.imgur.com/UCYse3y.jpeg" width=100% title="📷 "><br><br>

슬기로운 마음으로 모두를 감싸며<br>
소중한 너의 빛을 <br>
영원히 간직하려무나~~~ ☆<br><br></font>

<img src="https://i.imgur.com/KO29JPb.png" width=100% title="📷 ">
</td></tr></table>`,
`<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/wBbix/btsN1lbKcry/EuTYJsBqFw6IGoAtF8uG6K/img.png') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>할아버지 할머니의 사랑을, 로운에게</b></font><br>

로운아, 사랑스러운 우리 아가야<br>
우리 곁에 와줘서 정말 고마워<br>
엄마와 아빠를 닮은 너의 얼굴 보면<br>
우리는 눈물이 나도록 감사해<br><br>

<img src="https://i.imgur.com/5N3DU2Z.jpeg" width=100% title="📷 "><br><br>

로운이 엄마, 휘경아<br>
로운이 아빠, 경진아<br>
너희 둘의 사랑이 씨앗이 되었고<br>
이제 결실을 맺은 기적을 축하해<br><br>

<img src="https://i.imgur.com/7ARphGE.jpeg" width=100% title="📷 "><br><br>

둘이 만들었던 사랑과 믿음으로<br>
지나온 시간들이 열매를 맺었구나<br>
이제는 셋이서 더 큰 사랑으로<br>
더 깊고 큰 행복을 만들어가기를..<br><br>

<img src="https://i.imgur.com/boaZhtl.jpeg" width=100% title="📷 "><br><br>

로운아, 할아버지 할머니는 정말 좋아<br>
너를 안을 수 있어서 너무 행복해<br>
뛰어노는 너의 모습 상상만 해도<br>
가슴이 벅차서 웃음이 그치지 않아<br><br>

<img src="https://i.imgur.com/AX82Zno.jpeg" width=100% title="📷 "><br><br>

사랑스런 눈빛으로 세상을 보고<br>
사랑 가득한 마음으로 자라나는<br>
너의 반듯한 모습을 지켜보며<br>
우리의 행복도 더 커져갈 거야<br><br>

<img src="https://i.imgur.com/kavz7CV.jpeg" width=100% title="📷 "><br><br>

로운이의 희망, 우리가 키워줄게<br>
로운이의 소원, 우리도 기도할게<br>
맑은 마음으로 네 꿈을 피우고<br>
힘찬 기백으로 그 꿈을 펼쳐라<br><br>

<img src="https://i.imgur.com/3106rH7.jpeg" width=100% title="📷 "><br><br>

로운아, 이 세상에 와줘서 고마워<br>
우리에게 너는 세상 가장 큰 기쁨이야<br>
큰 사랑 가득 담긴 이 노래처럼<br>
언제나 너를 축복할게<br><br>

<img src="https://i.imgur.com/QaMjqze.jpeg" width=100% title="📷 "><br><br>

로운아, 사랑해..<br>
언제나 너의 편이 되어줄게<br>
우리의 마음을 다하여 너를 응원할게, <br>
언제까지나 영원토록...<br><br>

<img src="https://i.imgur.com/k0atV2k.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/cNRdEW/btsN2lnXfqg/4hhAemVBwUY4WVniGa8NpK/img.png') repeat fixed left top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>예쁜 이름 로운아, 축하해!</b></font><br>

뽈랑~, 고운 빛깔 품고 온 아가<br><br>

<img src="https://i.imgur.com/y0RXe7m.png" width=100% title="📷 "><br><br><font color='black'>

로운~, 예쁜 이름 세상에 빛나네<br><br>

<img src="https://i.imgur.com/zFSzx4N.jpeg" width=100% title="📷 "><br><br><br>


세찬 여울처럼 씩씩하게 자라렴<br><br>

<img src="https://i.imgur.com/30L0KZN.jpeg" width=100% title="📷 "><br><br>

가슴 벅찬 꿈을 향해 나아가렴<br><br>

<img src="https://i.imgur.com/D74HaRi.jpeg" width=100% title="📷 "><br><br><br>


로운아, 축복 가득한 너의 길에<br>
슬기롭고 이로운 빛을 더하려무나<br><br>

<img src="https://i.imgur.com/JjZEmQA.png" width=100% title="📷 "><br><br>

높은 뜻 펼쳐서 밝게 빛나는<br>
사랑스러운 아가, 우리 로운아<br><br>

<img src="https://i.imgur.com/1dC47Q0.jpeg" width=100% title="📷 "><br><br>

높을 '운'처럼 꿈을 높이 펼치고<br>
이 세상 가득 사랑을 채워주렴<br><br>

<img src="https://i.imgur.com/cmAcYDy.jpeg" width=100% title="📷 "><br><br>

슬기로운 마음으로 세상을 배우고<br>
이로운 손길로 행복을 만들어가려무나<br><br>

<img src="https://i.imgur.com/Utg5Flc.jpeg" width=100% title="📷 "><br><br><br>


로운아, 축복 가득한 너의 길에<br>
슬기롭고 이로운 빛을 더하려무나<br><br>

높은 뜻 펼쳐서 밝게 빛나는<br>
사랑스러운 아가, 우리 로운아<br><br>

<img src="https://i.imgur.com/rG12wI9.jpeg" width=100% title="📷 "><br><br>

때로는 힘겨운 날도 있겠지만<br><br>

<img src="https://i.imgur.com/h1RQJ8f.jpeg" width=100% title="📷 "><br><br>

넘어져도 괜찮아, <br>
다시 일어설 수 있으니까<br><br>

<img src="https://i.imgur.com/u95Dusi.jpeg" width=100% title="📷 "><br><br>

로운아, 축복 가득한 너의 길에<br>
슬기롭고 이로운 빛을 더하려무나<br>
높은 뜻 펼쳐서 밝게 빛나는<br>
사랑스러운 아가, 우리 로운아<br><br>

<img src="https://i.imgur.com/nUzb3lq.jpeg" width=100% title="📷 "><br><br>

밝고 건강하게, 로운아<br>
사랑 가득하게, 로운아<br><br>

<img src="https://i.imgur.com/sX5SYz7.png" width=100% title="📷 "><br><br>

언제나 응원할게<br>
모든 순간, 너의 모든 날들을...<br><br>

<img src="https://i.imgur.com/HZt3zSk.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#ffffcc repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt04_4'>
<P class='mid'><font style="display:none"><b>할아버지 할머니가 보내는 뽈랑이의 축복</b></font><br>

작은 심장이 두근거려요<br>
뽈랑이의 세상이 시작되었네<br><br>

<img src="https://i.imgur.com/EjOLdak.jpeg" width=100% title="📷 "><br><br>

휘경아 경진아 애썼구나<br>
사랑스런 아가를 품에 안으니<br>
벅찬 기쁨에 눈물이 핑 돌아<br><br>

<img src="https://i.imgur.com/CJdzfoB.jpeg" width=100% title="📷 "><br><br>

뽈랑아, 할아버지 할머니는<br>
너의 웃음소리에 힘이 솟는다<br>
반짝이는 눈망울, 우리의 별이구나<br><br>

<img src="https://i.imgur.com/i9ngBef.jpeg" width=100% title="📷 "><br><br>

뽈랑 뽈랑 우리 아가 뽈랑이는<br>
온 세상 축복 속에 태어났어요<br>
휘경아 경진아 마음껏 펼쳐라<br>
희망과 사랑으로 가득한 미래를...<br><br>

<img src="https://i.imgur.com/GjU1AXU.jpeg" width=100% title="📷 "><br><br>

새근새근 잠든 모습이 천사 같아<br>
아픔 없이 건강하게 자라려무나<br>
지혜롭고 씩씩한 아이로...<br><br>

<img src="https://i.imgur.com/kgrjKk8.jpeg" width=100% title="📷 "><br><br>

엄마와 아빠의 사랑 듬뿍 받으며<br>
세상 모든 아름다움을 배우려무나<br>
할아버지 할머니가 언제나 지켜줄게<br><br>

<img src="https://i.imgur.com/ftvh2bt.jpeg" width=100% title="📷 "><br><br>

뽈랑 뽈랑 우리 아가 뽈랑이는<br>
온 세상 축복 속에 태어났어요<br>
휘경아 경진아 마음껏 펼쳐라<br>
희망과 사랑으로 가득한 미래를...<br><br>

<img src="https://i.imgur.com/mF2tzCM.jpeg" width=100% title="📷 "><br><br>

작은 발걸음 하나하나에<br>
소중한 추억 만들어가려무나<br>
함께 노래하고 함께 웃으며...<br><br>

<img src="https://i.imgur.com/ZctEmq3.jpeg" width=100% title="📷 "><br><br>

뽈랑 뽈랑 우리 아가 뽈랑이는<br>
온 세상 축복 속에 태어났어요<br>
휘경아 경진아 마음껏 펼쳐라<br>
희망과 사랑으로 가득한 미래를...<br><br>

<img src="https://i.imgur.com/L3rAcTO.jpeg" width=100% title="📷 "><br><br>

뽈랑아, 사랑한다<br>
우리 아가 뽈랑아, 영원토록...<br><br>

<img src="https://i.imgur.com/zLvWsgv.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table class='box' style=\"BACKGROUND:#ffff66 url('https://blog.kakaocdn.net/dn/c1zh1C/btsOxjjjhOy/0EKEpY3Gqm7nDaYqlwlyuk/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>나레이션 : 할아버지 할머니의 사랑을, 뽈랑에게</b></font><br>

<font color='#FF5722'>[Intro Narration 할아버지] </font><br><br>

뽈랑아! <br>
이 할아버지는 네가 태어난다는 소식을 들었을 때, 가슴이 뭉클했단다.  <br><br>

그리고 눈물이 핑 돌 정도로 감격스러웠어. 너는 우리 가족에게 아주 큰 기쁨이란다.  <br><br>

엄마와 아빠가 함께 걸어온 사랑의 시간이, 이제 너라는 선물로 찾아온 거지<br><br>

<img src="https://i.imgur.com/6GPajoX.jpeg" width=100% title="📷 "><br><br>

할아버지는 네가 건강하게 자라고,  <br>
밝은 웃음으로 세상을 가득 채우길 바란단다.  <br><br>

언제나 네 곁을 지켜줄게.<br>
사랑한다, 뽈랑아.<br><br>

<img src="https://i.imgur.com/wlL9d4O.jpeg" width=100% title="📷 "><br><br><br>

<!-- img src='https://i.imgur.com/RCNQ4sG.jpeg' width=100% title='📷 로운 03'><br><br><br //-->


[노래]<br><br>

뽈랑아, 사랑스러운 우리 아가야<br>
우리 곁에 와줘서 정말 고마워<br>
엄마와 아빠를 닮은 너의 얼굴 보면<br>
우리는 눈물이 나도록 감사해<br><br>

<img src="https://i.imgur.com/2k7huWN.jpeg" width=100% title="📷 "><br><br>

뽈랑이 엄마, 휘경아<br>
뽈랑이 아빠, 경진아<br>
너희 둘의 사랑이 씨앗이 되었고<br>
이제는 결실이 된 기적을 축하해<br><br>

<img src="https://i.imgur.com/T2GtXMI.jpeg" width=100% title="📷 "><br><br>

서로 아껴주던 그날들을 기억해<br>
함께한 시간들이 열매를 맺었구나<br>
이제는 셋이서 더 큰 사랑으로<br>
더 깊고 큰 행복을 만들어가기를...<br><br>

<img src="https://i.imgur.com/4MpQ4uO.jpeg" width=100% title="📷 "><br><br>

뽈랑아, 할아버지 할머니는 좋아<br>
너를 안을 수 있어서 너무 행복해<br><br>

<img src="https://i.imgur.com/MtReWQX.jpeg" width=100% title="📷 "><br><br>

뛰어노는 너의 모습 상상만 해도<br>
가슴이 벅차고 웃음이 멈추질 않아<br><br>

<img src="https://i.imgur.com/xMH81sQ.jpeg" width=100% title="📷 "><br><br>

사랑스런 눈빛으로 세상을 보고<br>
사랑 가득한 마음으로 자라나는<br>
너의 반듯한 모습 지켜보며<br>
우리의 행복도 더 커져갈 거야<br><br>

<img src="https://i.imgur.com/j9xmKYf.jpeg" width=100% title="📷 "><br><br>

뽈랑이의 희망, 우리가 키워줄게<br>
뽈랑이의 소원, 우리도 기도할게<br>
맑은 마음으로 네 꿈을 피우고<br>
힘찬 기백으로 그 꿈을 펼쳐라<br><br>

<img src="https://i.imgur.com/0kbqYoU.jpeg" width=100% title="📷 "><br><br>

뽈랑아, 이 세상에 와줘서 고마워<br>
우리에게 너는 세상 가장 큰 기쁨이야<br>
큰 사랑 가득 담긴 이 노래처럼<br>
언제나 너를 축복할게<br><br>

<img src="https://i.imgur.com/iuJfbWo.jpeg" width=100% title="📷 "><br><br>

뽈랑아, 사랑해..<br>
언제나 너의 편이 되어줄게<br>
우리의 마음을 다하여<br>
너를 응원할게, 영원토록...<br><br>

<img src="https://i.imgur.com/a9I286V.jpeg" width=100% title="📷 "><br><br><br>


<font color='#FF5722'>[Outro Narration 할머니] </font><br><br>

뽈랑아! 사랑스러운 우리 손자야.  <br><br>

네가 엄마 뱃속에 있을 때부터,  <br>
할머니는 매일, 네가 태어날 날을 기다렸단다.  <br><br>

너의 작은 숨결 하나, 작은 웃음 하나.  <br>
그 모든 게, 우리에게는 말로 다 못할 기쁨이란다.  <br><br>

<img src="https://i.imgur.com/k0Hlv97.jpeg" width=100% title="📷 "><br><br>

너를 만나게 돼서, 정말 고맙구나.  <br>
앞으로 네 삶이, 사랑으로 가득하길, 할머니는 늘 축복할게.  <br><br>

사랑한다, 뽈랑아.  <br>
할머니는 언제나, 네 편이야.<br><br>

<img src="https://i.imgur.com/7rmGpfj.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#ccccff repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>할아버지 할머니의 사랑을, 뽈랑에게</b></font><br>

뽈랑아, 사랑스러운 우리 아가야<br>
우리 곁에 와줘서 정말 고마워<br>
엄마와 아빠를 닮은 너의 얼굴 보면<br>
우리는 눈물이 나도록 감사해<br><br>

<img src="https://i.imgur.com/2k7huWN.jpeg" width=100% title="📷 "><br><br>

뽈랑이 엄마, 휘경아<br>
뽈랑이 아빠, 경진아<br>
너희 둘의 사랑이 씨앗이 되었고<br>
이제는 결실이 된 기적을 축하해<br><br>

<img src="https://i.imgur.com/T2GtXMI.jpeg" width=100% title="📷 "><br><br>

서로 아껴주던 그날들을 기억해<br>
함께한 시간들이 열매를 맺었구나<br>
이제는 셋이서 더 큰 사랑으로<br>
더 깊고 큰 행복을 만들어가기를...<br><br>

<img src="https://i.imgur.com/4MpQ4uO.jpeg" width=100% title="📷 "><br><br>

뽈랑아, 할아버지 할머니는 좋아<br>
너를 안을 수 있어서 너무 행복해<br><br>

<img src="https://i.imgur.com/MtReWQX.jpeg" width=100% title="📷 "><br><br>

뛰어노는 너의 모습 상상만 해도<br>
가슴이 벅차고 웃음이 멈추질 않아<br><br>

<img src="https://i.imgur.com/xMH81sQ.jpeg" width=100% title="📷 "><br><br>

사랑스런 눈빛으로 세상을 보고<br>
사랑 가득한 마음으로 자라나는<br>
너의 반듯한 모습 지켜보며<br>
우리의 행복도 더 커져갈 거야<br><br>

<img src="https://i.imgur.com/j9xmKYf.jpeg" width=100% title="📷 "><br><br>

뽈랑이의 희망, 우리가 키워줄게<br>
뽈랑이의 소원, 우리도 기도할게<br>
맑은 마음으로 네 꿈을 피우고<br>
힘찬 기백으로 그 꿈을 펼쳐라<br><br>

<img src="https://i.imgur.com/0kbqYoU.jpeg" width=100% title="📷 "><br><br>

뽈랑아, 이 세상에 와줘서 고마워<br>
우리에게 너는 세상 가장 큰 기쁨이야<br>
큰 사랑 가득 담긴 이 노래처럼<br>
언제나 너를 축복할게<br><br>

<img src="https://i.imgur.com/iuJfbWo.jpeg" width=100% title="📷 "><br><br>

뽈랑아, 사랑해..<br>
언제나 너의 편이 되어줄게<br>
우리의 마음을 다하여<br>
너를 응원할게, 영원토록...<br><br>

<img src="https://i.imgur.com/a9I286V.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#ccffff repeat fixed left top;' cellpadding='2' width=100%><tr valign=middle><td class='lt04_1'>
<P class='mid'><font style="display:none"><b>뽈랑이에게 보내는 엄마 아빠의 축복</b></font><br>

사랑스러운 우리 아기, 뽈랑아<br>
건강하게 우리에게 와줘서 고마워<br>
온 세상이 너의 탄생을 축하해<br>
모두가 기뻐하며 축복을 보내<br><br>

<img src="https://i.imgur.com/50DKNy2.jpeg" width=100% title="📷 "><br><br>

작은 손짓, 작은 발길이 감격스러워<br>
너의 웃음, 너의 울음에 가슴이 벅차<br>
바다 색, 하늘 빛깔 닮은 뽈랑아<br>
너는 우리에게 소중한 기적의 선물이야 <br><br>

<img src="https://i.imgur.com/57LKuaT.jpeg" width=100% title="📷 "><br><br>

뽈랑이의 꿈, 펼쳐질 세상이 온 거야<br>
햇살이 눈부시고 뭉게구름이 피어나<br>
너를 안을 수 있어서 너무 기뻐<br>
너와 마주할 수 있어, 너무 행복해<br><br>

<img src="https://i.imgur.com/lR4M35l.jpeg" width=100% title="📷 "><br><br>

튼튼하고 건강하게 자랄 수 있도록<br>
항상 든든하게 너의 곁에 서 있을게<br>
언제나 사랑으로 너의 모습 바라볼게<br>
모든 순간, 모든 날이 행복하기를...<br><br>

<img src="https://i.imgur.com/M1jCzc6.png" width=100% title="📷 "><br><br>

뽈랑이의 미래를 함께 걸을 거야<br>
희망을 더 크게, 키워줄 거야<br>
사랑스런 눈빛으로 세상을 보고<br>
사랑 가득한 마음으로 살 수 있도록...<br><br>

<img src="https://i.imgur.com/OXDEOFm.jpeg" width=100% title="📷 "><br><br>

뽈랑이의 꿈, 우리가 키워줄게<br>
뽈랑이의 길, 우리가 밝혀줄게<br>
엄마 품에서 네 꿈이 피어나고<br>
아빠 품에선 그 꿈이 자랄 거야<br><br>

<img src="https://i.imgur.com/1661ojP.jpeg" width=100% title="📷 "><br><br>

뽈랑아, 사랑해<br>
이 세상에 빛으로 와줘서 고마워<br>
너는 우리 삶에서<br>
가장 찬란한 봄날의 시작이야<br><br>

<img src="https://i.imgur.com/2yfNUH1.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#99ffff url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt03'>
<P class='mid'><font style="display:none"><b>뽈랑아, 우리 곁에 올 그날까지</b></font><br>

조용한 밤, 너를 떠올려  <br>
아직 만나지 못한 너의 미소  <br>
작은 심장 두근대는 소리  <br>
우릴 향한 사랑의 시작  <br><br>

<img src="https://i.imgur.com/SRJ3uC7.png" width=100% title="📷 "><br><br>

뽈랑아, 너는 우리 꿈이야  <br>
하루하루 너를 그리며 살아  <br>
작은 손, 작은 발, 작은 눈망울  <br>
세상 가장 귀한 선물  <br><br>

<img src="https://i.imgur.com/0bipMY1.jpeg" width=100% title="📷 "><br><br>

뽈랑아, 사랑한단 말로는 모자라  <br>
너의 모든 순간 함께할게  <br>
건강하게 웃으며 와줘  <br>
우린 널 위해 준비돼 있어  <br><br>

<img src="https://i.imgur.com/sOPIUyq.jpeg" width=100% title="📷 "><br><br>

뽈랑아, 너의 이름 부를 때마다  <br>
가슴이 벅차 눈물이 흘러  <br>
너를 품에 안을 그날만 기다려  <br>
우리의 온 세상이 돼줄게  <br><br>

<img src="https://i.imgur.com/cRSPNHr.jpeg" width=100% title="📷 "><br><br>

뽈랑아, 자랑스러운 우리 아기야  <br>
네가 오는 길 모든 순간이 기적이야  <br>
작은 기침, 웃음소리까지도  <br>
우리의 행복이 돼줄 거야  <br><br>

<img src="https://i.imgur.com/fc8F3W9.jpeg" width=100% title="📷 "><br><br>

뽈랑아, 밤하늘 별들처럼  <br>
너의 길엔 빛이 가득하길  <br>
넘어질 땐 우리가 손 내밀게  <br>
언제나 네 편이 되어줄게  <br><br>

<img src="https://i.imgur.com/TU0hQTE.jpeg" width=100% title="📷 "><br><br>

뽈랑아, 사랑한단 말로는 모자라  <br>
너의 모든 순간 함께할게  <br>
건강하게 웃으며 와줘  <br>
우린 널 위해 준비돼 있어  <br><br>

<img src="https://i.imgur.com/eXq2HeO.jpeg" width=100% title="📷 "><br><br>

뽈랑아, 사랑해  <br>
언제까지나, 영원토록...<br>
</td></tr></table>`,
`<table style='BACKGROUND:#fce4ec url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt01_2'>
<P class='mid'><font style="display:none"><b>뽈랑이의 노래</b></font><br>

하늘빛의 선물로 온 너, 작은 뽈랑아<br>
바다의 품 속에서 자란 소중한 꿈 <br>
우리 마음속에 별처럼 빛나는  <br>
뽈랑이, 넌 우리의 희망  <br><br>

<img src="https://i.imgur.com/Pg3K0iC.jpeg" width=100% title="📷 "><br><br>

뽈랑아, 넌 세상을 밝혀 주는 빛  <br>
우리 가슴속에 영원한 기쁨  <br>
파란 하늘처럼, 깊은 바다처럼  <br>
뽈랑아, 넌 사랑으로 자랄 거야  <br><br>

<img src="https://i.imgur.com/Zu54hF6.jpeg" width=100% title="📷 "><br><br>

작은 손, 작은 발로 세상을 만나  <br>
희망의 노래를 부를 아가야  <br>
엄마와 아빠의 끝없는 사랑 속에 <br>
뽈랑아, 넌 영원히 빛나  <br><br>

<img src="https://i.imgur.com/AIyUY5w.jpeg" width=100% title="📷 "><br><br>

파란색 바다 속 무한한 꿈을  <br>
파란색 하늘 속 자유를 담고  <br>
너와 함께할 모든 날이  <br>
기적 같은 순간, 특별한 선물  <br><br>

<img src="https://i.imgur.com/gdBXqxp.jpeg" width=100% title="📷 "><br><br>

뽈랑아, 넌 세상을 밝혀 주는 빛  <br>
우리 가슴속에 영원한 기쁨  <br>
파란 하늘처럼, 깊은 바다처럼  <br>
뽈랑아, 넌 사랑으로 자랄 거야  <br><br>

<img src="https://i.imgur.com/JrunL0C.jpeg" width=100% title="📷 "><br><br>

뽈랑아, 넌 우리의 소망  <br>
너와 함께 그리는 하루하루  <br>
사랑으로 가득 채워진 이 세상에서  <br>
뽈랑아, 넌 언제나 빛날 거야 <br><br>

<img src="https://i.imgur.com/2aOxcEh.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#F6FBFF url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt01_1'> <!--  class='lt01_1' #33ffff #F0F4FF (매우 연한 하늘색) #FFF9F0 (연한 아이보리) #F3E5F5 라벤더//-->
<P class='mid'><font style="display:none"><b>뽈랑이의 꿈</b></font><br>

별이 내려와 속삭인 밤, <br>
뽈랑이의 시작  <br><br>

<img src="https://i.imgur.com/oGLrlXN.png" width=100% title="📷 별이 내려오는.."><br><br>

작은 손으로 세상을 안아줄 너  <br>
하늘의 깊은 빛, 바다의 푸른 물결  <br>
뽈랑아, 넌 우리의 가장 큰 꿈  <br><br>

<img src="https://i.imgur.com/6lUSTGu.png" width=100% title="📷 하늘과 바다 사이의 뽈랑이"><br><br>

뽈랑아, 너는 세상을 환히 비춰 줄 별  <br>
희망 속에 빛나는 우리 사랑의 아이  <br>
너의 웃음은 태양처럼 따뜻하고  <br>
뽈랑아, 넌 소중한 기적이야  <br><br>

<img src="https://i.imgur.com/CKpcsbi.png" width=100% title="📷 두 팔 벌리고 환하게 웃는 뽈랑이"><br><br>

엄마의 품에서 자라는 너의 온기  <br>
아빠의 손길로 느끼는 세상의 너  <br>
작은 발걸음으로 이뤄낼 모든 꿈  <br>
뽈랑아, 넌 끝없는 희망을 품었어  <br><br>

<img src="https://i.imgur.com/pMSA1MH.png" width=100% title="📷 엄마 아빠 사이에서 행복한 표정의 뽈랑이"><br><br>

하늘 위를 바라보며 우리는 약속해  <br>
너의 날개가 커져서 <br>
세상에 날 수 있길..  <br><br>

바다처럼 넓은 마음으로 세상을 품고  <br>
뽈랑아, 넌 사랑으로 물들일 거야  <br><br>

<img src="https://i.imgur.com/idF1lbd.png" width=100% title="📷 무지갯빛 하늘을 향해 선 날개 단 뽈랑이"><br><br>

뽈랑아, <br>
너는 세상을 환히 비춰 줄 별<br><br>

희망 속에 빛나는 우리 사랑의 아이  <br>
너의 웃음은 태양처럼 따뜻하고  <br>
뽈랑아, 넌 소중한 기적이야<br><br>

<img src="https://i.imgur.com/GKmhyZB.png" width=100% title="📷 하늘에 환한 빛으로 떠있는 뽈랑이"><br><br>

뽈랑아, <br>
우리의 노래는 너를 향해 울려  <br><br>

너와 함께하는 하루가 가장 빛나  <br>
사랑으로 가득한 세상 속에서  <br>
뽈랑아, 넌 언제나 특별할 거야  <br>

<img src="https://i.imgur.com/x9fwNg7.png" width=100% title="📷 엄마 아빠의 품 속에서 빛나는 뽈랑이의 발">
</td></tr></table>`,
`<table style='BACKGROUND:#00ffff url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt02_4'>
<P class='mid'><font style="display:none"><b>뽈랑아, 너는 하늘을 넘어온 작은 기적</b></font><br>

뽈랑아! 아빠가 오늘 너에게 아주 특별한 이야기를 들려줄게. <br><br>

너는 알까? 엄마와 아빠가 처음 너를 느낀 그날, 하늘이 얼마나 파랗고 아름다웠는지. <br><br>

우리는 그날 너를 '뽈랑이'라고 불렀단다, 하늘의 색처럼 순수하고 빛나는 이름이야.<br><br>

<img src="https://i.imgur.com/nyLkI5f.jpeg" width=100% title="📷 "><br><br><br>


뽈랑아, 너는 하늘에서 내려온 작은 기적이란다. <br><br>

하늘의 바람이 속삭이며 우리에게 선물을 주겠다고 약속했지. <br><br>

그리고 너는 그 약속을 이루기 위해 엄마 품속에서 자라고 있어. <br><br>

아빠는 매일 너를 생각하며 얼마나 자랑스럽고 행복한지 몰라.<br><br>

<img src="https://i.imgur.com/7meDLca.png" width=100% title="📷 "><br><br><br>


뽈랑아! 네가 자라고 있는 동안, 아빠는 세상의 모든 멋진 이야기를 준비하고 있어. <br><br>

너와 함께 나무 아래서 바람을 느끼고, 별빛 아래서 너의 웃음을 듣고 싶단다. <br><br>

네 작은 손으로 아빠의 손을 꼭 잡아주는 날을 상상하면, 아빠는 그저 눈물이 날 만큼 기쁘고 감사해.<br><br>

<img src="https://i.imgur.com/JoHhZoJ.jpeg" width=100% title="📷 "><br><br><br>


뽈랑아, 건강하게 자라서 아빠와 만나면 너에게 세상의 놀라운 것들을 보여줄 거야. <br><br>

커다란 나무, 바람의 속삭임, 그리고 사랑이 가득한 가족의 품이 얼마나 따뜻한지. <br><br>

아빠는 매일 너의 첫 번째 웃음과 네 작은 발걸음을 기대하며 사랑으로 가득한 날을 꿈꾼단다.<br><br>

<img src="https://i.imgur.com/oqtNtXY.jpeg" width=100% title="📷 "><br><br><br>


뽈랑아! 너는 엄마와 아빠의 마음속에서 빛나는 별처럼, 세상을 밝히는 빛이 될 거란다. <br><br>

그리고 우리는 항상 너를 사랑하고 응원할 거야. <br><br>

우리 뽈랑아, 건강하게 자라서 아빠와 만나자. <br><br>

아빠가 네게 세상에서 가장 큰 사랑을 보여줄게.<br><br>

<img src="https://i.imgur.com/0r7zTEn.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#33ffcc url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt02_5'>
<P class='mid'><font style="display:none"><b>뽈랑이와 세상 탐험</b></font><br>

아빠는 작은 뽈랑이를 품에 안고 다정하게 속삭였어요. <br><br>

뽈랑아, 내 소중한 아가. 네가 엄마 품속에 들어오던 그날, 우리 마음엔 별처럼 빛나는 기적이 생겼단다.<br><br>

<img src="https://i.imgur.com/64Vybn4.jpeg" width=100% title="📷 "><br><br><br>


뽈랑이는 아빠의 말을 들으며 작은 눈을 깜박였지요. <br><br>

아빠는 따뜻한 미소를 지으며 이야기를 이어갔습니다. <br><br>

"뽈랑아, <br>
세상은 넓고 신비로운 곳이란다.<br><br>

내가 어릴 때, 커다란 나무 아래에서 바람이 속삭이는 소리를 들으며 꿈을 꾸었어. <br><br>

그리고 나무 꼭대기에서 보면 하늘이 얼마나 파랗고 멋진지 알 수 있었지."<br><br>

<img src="https://i.imgur.com/Sc9hOCx.jpeg" width=100% title="📷 "><br><br><br>


뽈랑이는 작은 손을 움찔하며 아빠의 말에 귀를 기울였어요. <br><br>

아빠는 뽈랑이를 살짝 들어올려 작은 발을 가리키며 말했지요. <br><br>

"뽈랑아, 이 작은 발로 너는 언젠가 나무 아래를 달리고, 햇살을 따라 멀리 걷게 될 거야. <br><br>

처음 걸음을 내딛는 그 순간이 얼마나 특별할지 알까?"<br><br>

<img src="https://i.imgur.com/bLr0Nbk.jpeg" width=100% title="📷 "><br><br><br>


아빠는 살며시 뽈랑이의 손을 잡으며 말했어요. <br><br>

"세상은 때때로 낯설고 어려워 보일 수 있지만, 뽈랑아, 너의 용기는 모든 것을 이겨낼 거야. <br><br>

그리고 네 발걸음마다 새로운 이야기가 시작될 거란다."<br><br>

<img src="https://i.imgur.com/GvEikGs.png" width=100% title="📷 "><br><br><br>


뽈랑이는 미소를 띠며 아빠에게 더 가까이 다가갔습니다. <br><br>

아빠는 마지막으로 속삭였어요. <br><br>

"뽈랑아, 네가 어디로 가든, 우리는 항상 너의 곁에 있을 거야. <br><br>

별처럼 빛나는 세상을 너의 사랑으로 가득 채우길 바란다."<br><br>

<img src="https://i.imgur.com/x2bik4Z.png" width=100% title="📷 "><br><br><br>


뽈랑이는 아빠의 품에서 편안히 잠이 들었고, 그 순간 아빠는 더없이 행복했답니다.<br><br>

<img src="https://i.imgur.com/lZRhRzO.png" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#ccffff url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt02_3'>
<P class='mid'><font style="display:none"><b>뽈랑이와 하늘의 선물</b></font><br>

옛날 옛적에, 하늘이 파랗고 바다가 깊은 곳에 아주 특별한 별이 살았단다<br><br>

그 별은 다른 별들처럼 빛나지 않았지만, 눈부신 사랑과 희망의 힘을 지니고 있었어. <br><br>

<img src="https://i.imgur.com/sCacjPT.jpeg" width=100% title="📷 "><br><br><br>


하늘의 바람은 그 별에게 속삭였지, <br><br>

"세상을 밝혀줄 <br>
작은 기적을 만들어 주렴."<br><br>

그리고 그 별은 자신을 작은 씨앗으로 변신시켜 하늘에서 아래로 내려왔단다<br><br>

<img src="https://i.imgur.com/cEPqqQE.jpeg" width=100% title="📷 "><br><br><br>


아주 아름답고 따스한 날, <br>
그 씨앗은 엄마와 아빠의 마음속 깊이 자리잡았어. <br><br>

"이 씨앗은 우리의 뽈랑이가 될 거야"<br><br>

엄마와 아빠는 기쁨과 설렘으로 속삭였지. <br><br>

뽈랑이는 엄마 품속에서 자라며, 사랑과 행복의 멜로디로 가득한 세상을 꿈꾸었단다.<br><br>

<img src="https://i.imgur.com/Fpub0Af.png" width=100% title="📷 "><br><br><br>


시간이 흘러 어느날, 엄마는 뽈랑이에게 이렇게 말했어. <br><br>

"뽈랑아, <br>
너는 하늘에서 내려온 작은 별이란다. 세상을 환히 비추고 사랑을 전하기 위해 태어난 소중한 기적이지<br><br>

엄마는 다정한 목소리로 이야기를 들려주며 뽈랑이에게 다가올 날들을 축복했어.<br><br>

<img src="https://i.imgur.com/OIGIImU.jpeg" width=100% title="📷 "><br><br><br>


언젠가 너는 첫 번째 발걸음을 내딛을 거야, 엄마는 말했단다. <br><br>

그리고 바람처럼 자유롭게 달리고, 별들처럼 반짝일 거란다.<br><br>

세상은 넓고 놀라운 것들로 가득하지만, 너의 웃음과 사랑이 세상을 더 아름답게 만들 거야."<br><br>

<img src="https://i.imgur.com/FU3YJoy.jpeg" width=100% title="📷 "><br><br><br>


뽈랑이는 그 이야기를 듣고 마음속에서 따스한 햇살이 퍼지는 듯한 느낌을 받았어. <br><br>

"엄마, 나는 어떻게 사랑을 전할 수 있을까요?" 뽈랑이가 물었지.<br><br>

엄마는 환히 웃으며 대답했어. <br><br>

"뽈랑아, 사랑은 아주 간단하단다. <br>
네가 웃을 때, 네가 따뜻한 마음으로 누군가를 바라볼 때, 그 모두가 사랑을 전하는 방법이란다."<br><br>

<img src="https://i.imgur.com/3bG3FY5.jpeg" width=100% title="📷 "><br><br><br>


그리고 뽈랑이는 엄마의 품에서 조용히 속삭였어. <br><br>

"엄마, <br>
나도 하늘의 별처럼 빛날 거예요."<br><br>

엄마는 뽈랑이를 꼭 안아주며 속삭였단다. <br><br>

"뽈랑아, 넌 이미 우리 세상을 환히 비추는 별이란다."<br><br>

<img src="https://i.imgur.com/I3b5o2N.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#82eafa url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt02_1'>
<P class='mid'><font style="display:none"><b>뽈랑이의 소중한 여정</b></font><br>

아주 오랜 옛날, 하늘과 바다는 특별한 약속을 나누었어요. <br><br>

"우리의 사랑과 희망을 담은 귀한 선물을 세상에 보내자," <br>
하늘이 속삭였지요<br><br>

바다는 고요한 물결로 대답했어요. <br><br>

"좋아, 우리의 모든 마음을 담아 특별한 존재를 만들자."<br><br>

<img src="https://i.imgur.com/xlnBjVI.png" width=100% title="📷 "><br><br><br>


그리고 그 순간, 파란빛으로 빛나는 작은 별이 하늘에서 내려왔어요. <br><br>

그 별은 하늘의 사랑과 바다의 품을 담고 있었답니다. <br><br>

그래서 모두 '뽈랑'이라고 불렀어요. <br><br>

"뽈랑아, 넌 우리의 희망과 사랑을 품고 있어. 넌 세상에 무한한 기쁨과 따뜻함을 줄 존재란다," <br>
하늘과 바다가 말했어요.<br><br>

<img src="https://i.imgur.com/Lzj74no.png" width=100% title="📷 "><br><br><br>


뽈랑이는 점점 세상으로 내려가 엄마와 아빠를 만나게 되었어요. <br><br>

엄마는 뽈랑이를 품에 안으며 이렇게 속삭였답니다. <br><br>

"뽈랑아, 넌 우리에게 온 가장 소중한 선물이야. <br>
너의 존재가 우리의 하루를 밝히고, <br>
우리의 마음을 가득 채워준단다."<br><br>

<img src="https://i.imgur.com/fvBbGEs.jpeg" width=100% title="📷 "><br><br><br>


아빠는 작은 뽈랑이의 손을 잡으며 말했어요. <br><br>

"우리는 너를 기다리는 동안 얼마나 설레고 행복했는지 몰라. <br>
너와 함께할 모든 날들이 더없이 특별하고 소중할 거야."<br><br>

<img src="https://i.imgur.com/KsJNMQD.jpeg" width=100% title="📷 "><br><br><br>


뽈랑이의 눈에는 하늘의 빛과 바다의 깊은 물결이 담겨 있었어요. <br><br>

뽈랑이는 언제나 사랑받으며, 세상에 기쁨과 희망을 전해줄 존재가 될 거예요. <br><br>

그리고 엄마와 아빠는 뽈랑이가 커가는 동안, 사랑과 기대, 그리고 무한한 희망을 함께 나누며 하루 하루를 보내겠지요.<br><br>

<img src="https://i.imgur.com/Zkc5KwG.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#66ffcc url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt02_2'>
<P class='mid'><font style="display:none"><b>하늘과 바다의 선물</b></font><br>

옛날 아주 먼 옛날, 하늘은 파란 옷을 입고, 바다는 푸른 물결로 춤을 추며 서로를 바라보는 친구였어요. <br><br>

하늘은 맑은 빛을, 바다는 촉촉한 바람을 서로 나누며 세상을 아름답게 만들었지요.<br><br>

<img src="https://i.imgur.com/rcJGIlK.jpeg" width=100% title="📷 "><br><br><br>


어느 날, 하늘과 바다는 사랑과 희망을 가득 담은 특별한 선물을 세상에 주기로 했어요. <br><br>

그래서 둘은 힘을 모아 가장 반짝이는 별빛과 가장 따뜻한 물결을 모아 작은 씨앗을 만들었답니다. <br><br>

그 씨앗은 세상을 따뜻하게 품어줄 아기였어요.<br><br>

<img src="https://i.imgur.com/wlrUMVV.png" width=100% title="📷 "><br><br><br>


"아가야, <br>
넌 하늘의 넓은 사랑과 바다의 깊은 꿈을 간직한 특별한 선물이야,"<br><br>

하늘과 바다가 말했어요. <br><br>

"너의 웃음은 태양처럼 세상을 환히 비출 거야. 너의 손길은 꽃처럼 사람들에게 기쁨을 줄 거란다."<br><br>

<img src="https://i.imgur.com/DnblD4L.jpeg" width=100% title="📷 "><br><br><br>


그리고 그 아가는 어느 멋진 날, <br>
엄마와 아빠의 품에 안기게 되었어요. <br><br>

엄마는 사랑스런 마음으로 아가를 품으며 속삭였어요. <br><br>

"너는 우리에게 온 가장 소중한 선물이야. <br><br>

네가 오기 전부터 우리는 너를 기다렸고, 지금 너를 만나게 되어 정말 행복해."<br><br>

<img src="https://i.imgur.com/HOQlyZP.jpeg" width=100% title="📷 "><br><br><br>


아빠는 아가의 작은 손을 잡으며 말했어요. <br><br>

"하늘과 바다가 준 선물을 우리가 지켜줄게. <br><br>

너는 언제나 사랑받고, 소중히 여겨질 거야."<br><br>

<img src="https://i.imgur.com/mgdZEMR.jpeg" width=100% title="📷 "><br><br><br>


이렇게 하늘과 바다가 아가에게 전한 사랑은 엄마와 아빠의 마음속에 더욱 크게 자라났답니다. <br><br>

그리고 그 사랑은 아가가 커가는 동안에도 언제나 함께할 거예요.<br><br>

<img src="https://i.imgur.com/PpAq7Xn.jpeg" width=100% title="📷 ">
</td></tr></table>`
]

const updat = `<table style=\"border-radius: 30px; BACKGROUND:#ffcccc url('') repeat fixed left top\" cellpadding='10'><tr valign=middle width=100%><td>
<P class='mid'><font color='red'><b>업데이트 내역</b></font><br><br>

<font color='blue'><b></b></font>
<font color='blue'><b></b></font>
<font color='blue'><b></b></font>

<font color='blue'><b>2026.02.13 순환 재생 방식으로 변경</b></font><br>
지금까지 생성된 곡 중에서 최종 286곡을 선정, '생성일자' 순으로 <br>
'계속 순환' 재생하는 방식으로 변경.<br><br>

(잉태 → 탄생 → 작명 → 백일 순)<br><br>

1순환 25곡 (1~25번) 선호도 0순위<br>
2순환 25곡 (26~50번) 선호도 1순위<br>
3순환 19곡 (51~69번) 동요 분위기<br>
4순환 23곡 (70~92번) 발라드 위주<br>
5순환 26곡 (93~118번) 기타의 장르<br><br>

번외 11곡 (119~129번) 증조모 생일,<br>
'울 엄마의 기구했던 생일'<br><br>

기타 미분류 157곡 (130~286번) <br>
순환 외 나머지 곡 <br><br>

<font color='blue'><b>2025.10.04 (번외) 로운이 증조모님 생일 회상. '울 엄마의 기구했던 생일'</b></font><br>
로운이 할아버지가 '엄마의 생일'을 회상하는 노래 11곡 생성. <br>
여기에는 11곡 전곡 수록<br><br>

<font color='blue'><b>2025.09.10 결혼 4주년 기념일 축하</b></font><br>
로운이 아빠 (9/13), 엄마 (9/15)의 생일 동시 축하 노래 (영구 버전)<br><br>

'당신들의 생일을 축하합니다' <br>
8곡 생성, 여기에는 6곡 수록<br><br>

<font color='blue'><b>2025.09.09 결혼 4주년 기념일 축하</b></font><br>
로운이 엄마 아빠의 결혼기념일 (9/11) 4주년 (혁혼식) 축하 노래<br><br>

'로운이와 함께 하는 결혼 4주년 축하해!' 16곡 생성, 여기에는 10곡 수록<br><br>

<font color='blue'><b>2025.08.23 탄생 百日 축하 및 축복</b></font><br>
'百日 축하'에 관한 노래 3가지 가사에 노래 다수 생성. <br>
여기에는 가사 3 x 5세트 = 15곡 수록<br><br>

<font color='blue'><b>2025.06.12 작명 축복</b></font><br>
'작명 축복'에 관한 노래 4가지 가사에 노래 다수 생성. <br>
여기에는 가사 4 x 6세트 = 24곡 수록<br><br>

<font color='blue'><b>2025.06.02 탄생 축하 및 축복(로운)</b></font><br>
기존의 '아기 탄생 축복' 노래에 태명 '뽈랑'에서 세상 이름 '로운'으로 개사.<br>
여기에는 가사 3 x 3세트 = 9곡 수록.<br><br>

<font color='blue'><b>2025.05.14 탄생 축하 및 축복(뽈랑)</b></font><br>
'아기 탄생'을 축하하고 축복을 보내는 노래 3가지 가사에 노래 다수 생성. <br>
여기에는 가사 3 x 3세트 = 9곡 수록.<br><br>

<font color='blue'><b>2025.04.08 건강한 만남 기원</b></font><br>
건강한 만남 (출산)을 기원하는 노래 <br><br>

"뽈랑아, 우리 곁에 올 그날까지.."<br>
10곡 생성, 여기에는 3곡만 수록.<br><br>

본 '오디오(MP3) 플레이어' 제작.<br><br>

<font color='blue'><b>2025.04.02 난생처음 만든 노래</b></font><br>
(잉태의 기쁨, 희망, 소망)<br><br>

노래: 가사 2 x 2세트 = 4곡 생성,<br>
태담: 5건 x 2 (여기에는 5건만 수록). <br>
</td></tr></table>`