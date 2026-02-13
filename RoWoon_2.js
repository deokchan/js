const title0 = "로운이를 위한 태담과 노래"

odi = [
"https://cdn1.suno.ai/45e853e5-2238-4ed4-a938-123ca8cfd735.mp3|0[잉태 기쁨] 파랑이의 꿈 <br>(케이팝, 난생처음 만들어 본 노래)_M01 v4||",
"https://cdn1.suno.ai/68db7f93-dd78-43ee-851e-074cd15fdfed.mp3|0[잉태 기쁨] 파랑이의 노래 (신스 멜로디)_W01 v4||",
"https://blog.kakaocdn.net/dn/y3j5T/btsNalXDxFt/eMhfv3ne3DPbbLiUhEqmu0/%ED%8C%8C%EB%9E%91%EC%9D%B4%EC%9D%98%20%EC%86%8C%EC%A4%91%ED%95%9C%20%EC%97%AC%EC%A0%95_%EC%9D%B8%EC%A4%80.mp3?attach=2&knm=tfile.mp3|0[태담 희망] 파랑이의 소중한 여정 (인준 버전) ||",
"https://blog.kakaocdn.net/dn/blxWuV/btsNbg8Qdf1/KD2x0GBbT7iWQMGWMfdjn1/%ED%95%98%EB%8A%98%EA%B3%BC%20%EB%B0%94%EB%8B%A4%EC%9D%98%20%EC%84%A0%EB%AC%BC_%ED%98%84%EC%88%98.mp3?attach=2&knm=tfile.mp3|0[태담 희망] 하늘과 바다의 선물 (현수 버전) ||",
"https://blog.kakaocdn.net/dn/bCYfdo/btsNdidVK5J/5vLxj96qyB0aWo1lb4mqZ0/%5B%ED%83%9C%EB%8B%B4%5D%20%ED%8C%8C%EB%9E%91%EC%9D%B4%EC%99%80%20%ED%95%98%EB%8A%98%EC%9D%98%20%EC%84%A0%EB%AC%BC%20%28%EC%84%9C%ED%98%84%29.mp3?attach=2&knm=tfile.mp3|0[태담 희망] 파랑이와 하늘의 선물 (서현 버전) ||",
"https://blog.kakaocdn.net/dn/mkEzO/btsNc8oXJJu/KkPDz41GOHKIC8LZGbBHm0/%5B%ED%83%9C%EB%8B%B4%5D%20%ED%8C%8C%EB%9E%91%EC%95%84%2C%20%EB%84%88%EB%8A%94%20%ED%95%98%EB%8A%98%EC%9D%84%20%EB%84%98%EC%96%B4%EC%98%A8%20%EC%9E%91%EC%9D%80%20%EA%B8%B0%EC%A0%81%21%20%28Hyunsu%20%EB%B2%84%EC%A0%84%29.mp3?attach=2&knm=tfile.mp3|0[태담 희망] 파랑아, 너는 하늘을 넘어온 작은 기적 (Hyunsu 버전) ||",
"https://blog.kakaocdn.net/dn/bITJOL/btsNbauhuwr/gYbefS7SEKgQKyKjynUARK/%ED%8C%8C%EB%9E%91%EC%9D%B4%EC%99%80%20%EC%84%B8%EC%83%81%20%ED%83%90%ED%97%98_%EB%B4%89%EC%A7%84.mp3?attach=2&knm=tfile.mp3|0[태담 희망] 파랑이와 세상 탐험 (봉진 버전) ||",
"https://cdn1.suno.ai/3600c86c-8d73-45d2-981c-c46c9e723848.mp3|0[건강 만남] 파랑아, 우리 곁에 올 그날까지 <br>(첼로 독주 피아노, 순수한 기대감)_MW03 v4.5-all||",
"https://cdn1.suno.ai/a3784a59-08b7-4f26-9260-b59e31ccb0f3.mp3|0[탄생 파랑] 파랑이에게 보내는 엄마 아빠의 축복 (바이올린 독주와 오케스트라 협주곡)_MW38 v4.5-all||",
"https://blog.kakaocdn.net/dn/bCQPG0/btsNTlXgmhK/9kEvkLKdNMsxcYZUx5c7P1/%EB%82%98%EB%A0%88%EC%9D%B4%EC%85%98_%ED%95%A0%EC%95%84%EB%B2%84%EC%A7%80%20%ED%95%A0%EB%A8%B8%EB%8B%88%EC%9D%98%20%EC%82%AC%EB%9E%91%EC%9D%84%2C%20%ED%8C%8C%EB%9E%91%EC%97%90%EA%B2%8C%20%28%EC%86%90%EC%9E%90%EC%9D%98%20%EC%B6%95%EB%B3%B5%29_WM34_GPT_Suno4.5.mp3?attach=1&knm=tfile.mp3|0[탄생 파랑] 나레이션 : 할아버지 할머니의 사랑을, 파랑에게 (손자의 축복, 발라드)_WM34_GPT v4.5||",
"https://cdn1.suno.ai/937c965a-dd9b-4a04-9f48-52581f9d5764.mp3|0[탄생 파랑] 할아버지 할머니가 보내는 파랑이의 축복 (어쿠스틱 기타, 첼로)_WM32 v4.5||",
"https://cdn1.suno.ai/0d5c01fa-a6d5-442d-8c51-597498588ed2.mp3|0[탄생 로운] 로운에게 보내는 엄마 아빠의 축복 (바이올린 신스팝)_M07 v4.5||",
"https://cdn1.suno.ai/a93ba039-84ed-4a6e-89cb-949687f8bbbe.mp3|0[탄생 로운] 할아버지 할머니의 사랑을, 로운에게 (행진곡 금관악기 영웅적 축제적)_M08 v4.5||",
"https://cdn1.suno.ai/fcc3b36a-164e-4a0c-bf4a-fbb5d291f252.mp3|0[탄생 로운] 할아버지 할머니가 보내는 로운이의 축복 (휘파람, 즐거운 트레킹 기분)_W04 v4.5||",
"https://cdn1.suno.ai/13af2615-470a-4b74-b375-97c3cdeb71cf.mp3|0[작명 축복] 예쁜 이름 로운아, 축하해! <br>(행진곡 금관악기 영웅적 축제적)_M01 v4.5||",
"https://cdn1.suno.ai/55f720a3-1afe-4785-8131-387c5877610d.mp3|0[작명 축복] 로운아, 빛나라~~~ ☆ (인디)_M03 v4.5||",
"https://cdn1.suno.ai/a1c17bb1-ce81-461d-9a16-699ebf35fd37.mp3|0[작명 축복] 로운에게 보내는 할아머니의 축복 <br>(행진곡 금관악기 영웅적 축제적)_MM01 v4.5||",
"https://cdn1.suno.ai/e6566255-2666-4d61-875e-6103d3057648.mp3|0[작명 축복] 이 세상 이름, 로운에게 (발라드 통기타, 자부심, 기쁨, 격려의 마음)_MW01 v4.5-all||",
"https://cdn1.suno.ai/f58815dd-bd04-466f-9d91-79b99040d673.mp3|0[작명 축복] 로운에게 보내는 할아머니의 축복 <br>(가사 수정 전, 행진곡 영웅적 축제적)_M04 v4.5||235",
"https://cdn1.suno.ai/b8f63b99-fe53-4c07-aad8-a65c7e504fdf.mp3|0[백일 축하] 까꿍~ 로운아! 탄생 100일을 축하해! (경쾌한 행진곡 리듬, 트로트 스타일)_W09 v4.5+||",
"https://cdn1.suno.ai/29e0fd83-7c3a-4394-b517-efc9d75c5198.mp3|0[백일 축하] 로운에게 보내는 百日 축하 <br>(발라드, 컨트리 음악, 남녀 보컬)_MW18 v4.5+||",
"https://cdn1.suno.ai/39b3015e-1c4a-4ff3-bc3e-72c333611b1e.mp3|0[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (심포닉 록, 오케스트라)_MW17 v4.5+||",
"https://cdn1.suno.ai/4873980c-5f25-4753-a5ff-418d34922f80.mp3|0[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (트로트, 다소 느린 80bpm)_MW05 v4.5+||",
"https://cdn1.suno.ai/80a1900f-61c5-4461-8b6a-71975c3963f7.mp3|0[결혼 기념] 로운이와 함께 하는 결혼 4주년 축하해! (브라스밴드 행진, 트럼펫 트롬본)_M10 v4.5+||",
"https://cdn1.suno.ai/c6a702b2-008b-440d-b667-773e1c431a26.mp3|0[생일 축하] 당신들의 생일을 축하합니다 <br>(브라스밴드 행진곡, 낭만적 분위기)_M05 v4.5+||",
"https://cdn1.suno.ai/ed819816-faa9-4dc3-a232-9157de63b425.mp3|1[잉태 기쁨] 파랑이의 꿈 <br>(7080 100~120 BPM, 활기차고 경쾌한 템포의 통기타 하모니카 타악기)_MW06 v4.5-all||",
"https://cdn1.suno.ai/56d66f16-1e2d-43e9-b300-723c51ed4af5.mp3|1[잉태 기쁨] 파랑이의 노래 <br>(7080 포크송, 통기타, 하모니카)_MW02 v4.5-all||",
"https://blog.kakaocdn.net/dn/bmr5oU/btsNahAVb5y/KCjkOnAGXuHouB2cK3R8M0/%ED%8C%8C%EB%9E%91%EC%9D%B4%EC%9D%98%20%EC%86%8C%EC%A4%91%ED%95%9C%20%EC%97%AC%EC%A0%95_%EC%84%A0%ED%9E%88.mp3?attach=2&knm=tfile.mp3|1[태담 희망] 파랑이의 소중한 여정 (선히 버전) ||",
"https://blog.kakaocdn.net/dn/Ceo4d/btsM98YzPlV/aIBqypbgKkmqu83G90tME0/%ED%95%98%EB%8A%98%EA%B3%BC%20%EB%B0%94%EB%8B%A4%EC%9D%98%20%EC%84%A0%EB%AC%BC_%EC%84%9C%ED%98%84.mp3?attach=2&knm=tfile.mp3|1[태담 희망] 하늘과 바다의 선물 (서현 버전) ||",
"https://blog.kakaocdn.net/dn/6EKii/btsNbqQWTwU/qRNp7c1EBroFB7Gie4eWKk/%ED%8C%8C%EB%9E%91%EC%9D%B4%EC%99%80%20%ED%95%98%EB%8A%98%EC%9D%98%20%EC%84%A0%EB%AC%BC_%EC%88%9C%EB%B3%B5.mp3?attach=2&knm=tfile.mp3|1[태담 희망] 파랑이와 하늘의 선물 (서현 버전) ||",
"https://blog.kakaocdn.net/dn/b0fd6f/btsNR8RcVqB/y7kJ7iGg2RhGQK5niiSKPK/%ED%8C%8C%EB%9E%91%EC%95%84%2C%20%EC%9A%B0%EB%A6%AC%20%EA%B3%81%EC%97%90%20%EC%98%AC%20%EA%B7%B8%EB%82%A0%EA%B9%8C%EC%A7%80.._W13_GPT_riffusion.mp3?attach=1&knm=tfile.mp3|1[건강 만남] 파랑아, 우리 곁에 올 그날까지 ('레몬 트리'처럼 활기차고 즐거운 분위기)_W13_GPT riffusion||",
"https://blog.kakaocdn.net/dn/bWmAHr/btsNUB5W5CV/IK84tS3rAcxbsRTZcBlTAk/%ED%8C%8C%EB%9E%91%EC%9D%B4%EC%97%90%EA%B2%8C%20%EB%B3%B4%EB%82%B4%EB%8A%94%20%EC%97%84%EB%A7%88%20%EC%95%84%EB%B9%A0%EC%9D%98%20%EC%B6%95%EB%B3%B5%20%28%ED%83%84%EC%83%9D%EC%9D%84%20%EC%B6%95%ED%95%98%29_WM21_GPT_riffusion.mp3?attach=1&knm=tfile.mp3|1[탄생 파랑] 파랑이에게 보내는 엄마 아빠의 축복 (한국팝 듀엣, 아기 향한 기쁨과 축복)_WM21_GPT FUZZ-1.0||",
"https://cdn1.suno.ai/4a43e689-b9de-47e0-b26c-a8aced94e990.mp3|1[탄생 파랑] 할아버지 할머니의 사랑을, 파랑에게 (바이올린 & 오케스트라, 축복 희망)_MW32 v4.5-all||",
"https://cdn1.suno.ai/8d1cab81-0a83-413e-9319-30d8c279a1d3.mp3|1[탄생 파랑] 할아버지 할머니가 보내는 파랑이의 축복 (어쿠스틱 기타, 첼로)_MW31 v4.5||",
"https://cdn1.suno.ai/53f58222-9e8d-441e-9511-b2f4a671fabc.mp3|1[탄생 로운] 로운에게 보내는 엄마 아빠의 축복 (첼레스타, 새로운 삶을 축하)_WM03 v4.5-all||",
"https://cdn1.suno.ai/31376a07-0e5f-4f4c-966b-f16afb5645a0.mp3|1[탄생 로운] 할아버지 할머니의 사랑을, 로운에게 (7080 100~120 BPM, 활기차고 경쾌한 템포의 통기타 하모니카 타악기)_MW01 v4.5-all||",
"https://cdn1.suno.ai/ec8dd3d7-daea-40a7-a372-bd7b1461cd27.mp3|1[탄생 로운] 할아버지 할머니의 사랑을, 로운에게 (트로트, 역동적인 댄스 비트)_MW05 v4.5-all||",
"https://cdn1.suno.ai/063c8d16-f3cd-43ef-955c-06ed16154694.mp3|1[탄생 로운] 할아버지 할머니가 보내는 로운이의 축복 (경쾌한 템포의 트로트 듀엣)_MW08 v4.5-all||",
"https://cdn1.suno.ai/915a0008-7de4-45f2-8abb-f2d29a3e9568.mp3|1[작명 축복] 예쁜 이름 로운아, 축하해! <br>(행진곡 금관악기 영웅적 축제적)_MW01 v4.5||",
"https://cdn1.suno.ai/d2e160b7-9ac2-4e20-a679-acb84a255b6f.mp3|1[작명 축복] 로운아, 빛나라~~~ ☆ <br>(동심, 새로운 시작을 축하)_W10 v4.5||",
"https://cdn1.suno.ai/0abf9f8d-4928-4640-ad48-1f961536724f.mp3|1[작명 축복] 로운에게 보내는 할아머니의 축복 <br>(밝고 단순한 멜로디, 안정적인 박자)_WM01 v4.5||",
"https://cdn1.suno.ai/f426bd56-4b4e-4d85-9656-00e97350a11b.mp3|1[작명 축복] 이 세상 이름, 로운에게 <br>(브라스 밴드 행진곡 영웅적 축제적)_M10 v4.5||",
"https://cdn1.suno.ai/d0d3d651-ae33-462a-a3cd-dfb06d73ab4b.mp3|1[작명 축복] 로운에게 보내는 할아머니의 축복 (가사 수정 전, 가벼운 발걸음의 트레킹)_MW02 v4.5||",
"https://cdn1.suno.ai/9aa2e6f5-acf3-41fb-91e4-5ebfce0f5f98.mp3|1[백일 축하] 까꿍~ 로운아! 탄생 100일을 축하해! (가벼운 행진곡 리듬의 트로트 듀엣)_WM06 v4.5+||",
"https://cdn1.suno.ai/e249f873-967d-4689-a156-c28051132ed3.mp3|1[백일 축하] 까꿍~ 로운아! 탄생 100일을 축하해! (경쾌한 행진곡 리듬, 트로트 스타일)_MW08 v4.5+||",
"https://cdn1.suno.ai/adba19da-00c2-4c98-9ba1-f6ec7cd7f6e2.mp3|1[백일 축하] 로운에게 보내는 百日 축하 <br>(가벼운 클래식 크로스오버)_MW22 v4.5+||",
"https://cdn1.suno.ai/f2e8d536-e7a7-412b-be7c-d511a3cf3f0e.mp3|1[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (인디)_MW08 v4.5+||",
"https://cdn1.suno.ai/e9dc2a38-e2a4-4b40-a8ae-347e5f9b4f17.mp3|1[결혼 기념] 로운이와 함께 하는 결혼 4주년 축하해! (트로트 듀엣의 주고받는 보컬)_MW05 v4.5+||",
"https://cdn1.suno.ai/d1f8dabf-3db2-4631-a61d-86958a1a57af.mp3|1[생일 축하] 당신들의 생일을 축하합니다 <br>(오케스트라, 낭만적인 축하 분위기)_M02 v4.5+||",
"https://cdn1.suno.ai/9cad251b-69b1-4efb-aaf1-615e4d3be98f.mp3|1[생일 축하] 당신들의 생일을 축하합니다 <br>(트로트 듀엣의 주고받는 보컬)_MW01 v4.5+||",
"https://cdn1.suno.ai/2a564d1c-a959-4802-8f03-cfa686987bdd.mp3|2[잉태 기쁨] 파랑이의 꿈 (동요풍, 100~120BPM)_MW04 v4.5-all||",
"https://cdn1.suno.ai/c6ef6e98-7adf-492b-8141-6ebd43e2b6d7.mp3|2[잉태 기쁨] 파랑이의 노래 (활기차고 경쾌한 멜로디, 아이들의 자유로운 영혼)_W03 v4.5-all||",
"https://cdn1.suno.ai/2e87ff9f-b515-44cf-b7a9-604122893319.mp3|2[건강 만남] 파랑아, 우리 곁에 올 그날까지 (밝고 명랑한 동요, 아기 첫걸음 장난기)_MW05 v4.5-all||",
"https://cdn1.suno.ai/b7e45779-6b08-41f8-80b0-81374e765c51.mp3|2[탄생 파랑] 파랑이에게 보내는 엄마 아빠의 축복 (사랑, 축복, 희망, R&B 95BPM)_WM32 v4.5||",
"https://cdn1.suno.ai/501ad502-f776-4f21-8cbe-fc8e9ac83a71.mp3|2[탄생 파랑] 할아버지 할머니의 사랑을, 파랑에게 (아기 탄생을 축복. 밝고 즐거운 노래)_MW34 v4.5-all||",
"https://cdn1.suno.ai/e9b26c85-d329-4895-bd1f-039c5a6b842e.mp3|2[탄생 파랑] 할아버지 할머니가 보내는 파랑이의 축복 (할아버지 할머니의 소원)_W31 v4.5||",
"https://cdn1.suno.ai/deea0b3a-aee5-405e-be1c-7236e33ec6e1.mp3|2[탄생 로운] 로운에게 보내는 엄마 아빠의 축복 (동요풍 갓 태어난 아기 신기함 설렘)_MW02 v4.5-all||",
"https://cdn1.suno.ai/d48e54e6-9b4f-49aa-846b-ca0ce243a966.mp3|2[탄생 로운] 할아버지 할머니의 사랑을, 로운에게 (아이들의 자유로운 영혼)_W10 v4.5||",
"https://cdn1.suno.ai/7a245e35-093f-4287-a2a8-363f86b36630.mp3|2[탄생 로운] 할아버지 할머니가 보내는 로운이의 축복 (동요, 아기에 대한 신기함 설렘)_MW10 v4.5-all||",
"https://cdn1.suno.ai/4784bacf-2878-4d16-bf92-680abc2f57a2.mp3|2[작명 축복] 예쁜 이름 로운아, 축하해! <br>(동심, 새로운 시작을 축하)_W16 v4.5||",
"https://cdn1.suno.ai/0e6f2a9c-4cdc-40fd-9fad-3b4789ab60da.mp3|2[작명 축복] 로운아, 빛나라~~~ ☆ <br>(동심, 새로운 시작을 축하)_W08 v4.5||155",
"https://cdn1.suno.ai/93560fc9-1ed0-4c11-a199-663a72626f12.mp3|2[작명 축복] 로운에게 보내는 할아머니의 축복 <br>(피치카토 우드블록, 순수 천진난만)_MW01 v4.5-all||",
"https://cdn1.suno.ai/ac911312-8071-4413-85aa-cb9b89073fd7.mp3|2[작명 축복] 로운에게 보내는 할아머니의 축복 <br>(한국 동요, 밝고 명랑한)_WM06 v4.5-all||",
"https://cdn1.suno.ai/487f1bf4-5e3d-4e8d-90bd-dfa94cd4e3a5.mp3|2[작명 축복] 이 세상 이름, 로운에게 (가벼운 발걸음으로 트레킹을 떠나는 듯한 기분)_W07 v4.5||",
"https://cdn1.suno.ai/3c1dce55-2a9f-4b4a-bf96-694b1c90c513.mp3|2[작명 축복] 이 세상 이름, 로운에게 <br>(행진곡, 희망찬 새로운 미래)_W01 v4.5||",
"https://cdn1.suno.ai/841c001b-16c7-4e5a-bb05-98b5528eed11.mp3|2[작명 축복] 로운에게 보내는 할아머니의 축복 (가사 수정 전, 행진곡 희망 새로운 미래)_W01 v4.5||",
"https://cdn1.suno.ai/bad69ddb-75eb-4e05-bf1e-e8bf7a7b9c95.mp3|2[백일 축하] 까꿍~ 로운아! 탄생 100일을 축하해! (뽀로로와 같은 아기 주제가 분위기)_WM02 v4.5+||",
"https://cdn1.suno.ai/04be9710-dbc0-45bd-aefd-4883f1ff8a0d.mp3|2[백일 축하] 로운에게 보내는 百日 축하 <br>(뽀로로와 같은 아기 주제가 분위기)_MW26 v4.5-all||",
"https://cdn1.suno.ai/b6bb3306-0bdb-4c1a-ad9a-eeb69eb90eeb.mp3|2[백일 축하] 로운에게 보내는 百日 축하 <br>(뽀로로와 같은 아기 주제가 분위기)_MW27 v4.5-all||",
"https://cdn1.suno.ai/6d25c7df-998a-476c-9b5e-a43feda16ddb.mp3|2[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (동요, 아기에 대한 신기함과 설렘)_MW24 v4.5-all||",
"https://cdn1.suno.ai/eaf77eb2-d692-42c4-bd1d-05836d7f5821.mp3|2[결혼 기념] 로운이와 함께 하는 결혼 4주년 축하해! (7080 포크송, 통기타 타악기)_MW03 v4.5+||",
"https://cdn1.suno.ai/d4ca41e4-da82-4797-befb-285d91e08fc6.mp3|3[잉태 기쁨] 파랑이의 꿈 <br>(자장가 풍, 경이로움과 평화로움)_WM03 v4.5-all||",
"https://cdn1.suno.ai/246bddf1-790c-4c1f-8753-fef0dc8538b6.mp3|3[잉태 기쁨] 파랑이의 꿈 <br>(피아노와 현악기 플룻, 새로운 삶을 축하, 희망적이고 따뜻한 분위기)_WM01 v4.5-all||",
"https://cdn1.suno.ai/a4b41b41-6984-4d99-aec4-1c87f934dd07.mp3|3[잉태 기쁨] 파랑이의 노래 <br>(동요풍 갓 태어난 아기 신기함 설렘)_MW04 v4.5-all||",
"https://cdn1.suno.ai/bf65f8e0-775d-4011-8f0e-bfdfdbd7a4f6.mp3|3[건강 만남] 파랑아, 우리 곁에 올 그날까지 (바이올린 독주 오케스트라 협연, 기대)_MW02 v4.5-all||",
"https://cdn1.suno.ai/c43eb309-81c7-47ce-a2f6-1340d948103c.mp3|3[탄생 파랑] 파랑이에게 보내는 엄마 아빠의 축복 (피아노 바이올린 오케스트라 협주)_MW37 v4.5-all||",
"https://cdn1.suno.ai/851344a2-c452-4f3c-b316-138ce71f5baf.mp3|3[탄생 파랑] 할아버지 할머니의 사랑을, 파랑에게 (손주를 향한 깊은 사랑과 축복, 감성적인 발라드 70BPM)_MW31 v4.5||",
"https://cdn1.suno.ai/e7209213-81da-45fe-aa92-53f8ea38963b.mp3|3[탄생 파랑] 할아버지 할머니가 보내는 파랑이의 축복 (발라드, 통기타 잔잔한 타악기)_MW32 v4.5-all||",
"https://cdn1.suno.ai/5568b824-2ee7-429b-9a5f-e6338d6bf2cc.mp3|3[탄생 로운] 로운에게 보내는 엄마 아빠의 축복 (발라드 피아노, 사랑, 탄생, 꿈, 감사)_WM01 v4.5||",
"https://cdn1.suno.ai/15abde9f-dcca-484b-b473-b18f6009d042.mp3|3[탄생 로운] 할아버지 할머니의 사랑을, 로운에게 (7080 100~120 BPM, 활기차고 경쾌한 템포의 통기타 하모니카 타악기)_MW02 v4.5-all||",
"https://cdn1.suno.ai/fa6c676b-7b2e-4aaf-9c95-68151b436a5d.mp3|3[탄생 로운] 할아버지 할머니의 사랑을, 로운에게 (트로트 듀엣의 주고받는 보컬)_MW03 v4.5-all||",
"https://cdn1.suno.ai/152db13f-a83c-4853-9ab2-b23ac075b84d.mp3|3[탄생 로운] 할아버지 할머니가 보내는 로운이의 축복 (통기타, 경쾌한 즐거운 분위기)_MW04 v4.5||",
"https://cdn1.suno.ai/620fcbcc-fd44-451f-a704-ec46c127e7a4.mp3|3[작명 축복] 예쁜 이름 로운아, 축하해! <br>(일정한 리듬, 기억하기 쉬운 멜로디)_W18 v4.5||",
"https://cdn1.suno.ai/074eee5b-8eeb-4f8c-a550-74e32c6dda70.mp3|3[작명 축복] 로운아, 빛나라~~~ ☆ (감성 발라드, 밝은 미래를 기원하는 분위기)_M02 v4.5||",
"https://cdn1.suno.ai/a0633b3b-5dfb-431c-9960-5ecbb5de144c.mp3|3[작명 축복] 로운에게 보내는 할아머니의 축복 <br>(7080 포크송, 통기타, 하모니카)_MW03 v4.5-all||",
"https://cdn1.suno.ai/4dd750df-4446-491a-867a-2171a132dc29.mp3|3[작명 축복] 로운에게 보내는 할아머니의 축복 <br>(발라드, 사랑스러움, 평화로움)_M03 v4.5||",
"https://cdn1.suno.ai/868d93ba-9421-4e2d-92f7-ead053deb960.mp3|3[작명 축복] 이 세상 이름, 로운에게 (발라드 통기타, 자부심, 기쁨, 격려의 마음)_MW02 v4.5-all||",
"https://cdn1.suno.ai/d2468781-eef6-4269-a8e3-d6cf1b31478a.mp3|3[작명 축복] 로운에게 보내는 할아머니의 축복 (가사 수정 전, 오케스트라 반주 행진곡)_MW01 v4.5||",
"https://cdn1.suno.ai/6f69af5e-0850-4764-a8de-0a2b8aabf663.mp3|3[백일 축하] 까꿍~ 로운아! 탄생 100일을 축하해! (트로트 다소 느린 80bpm)_MW11 v4.5+||",
"https://cdn1.suno.ai/e87ee37c-7bf5-407b-ab05-75cee03a36c7.mp3|3[백일 축하] 로운에게 보내는 百日 축하 <br>(바이올린 신스팝)_MW09 v4.5+||",
"https://cdn1.suno.ai/9e9c057c-1b18-460e-89af-17345035853f.mp3|3[백일 축하] 로운에게 보내는 百日 축하 <br>(발라드 85BPM, 감사, 기쁨, 사랑)_MW01 v4.5+||",
"https://cdn1.suno.ai/43535c9c-c894-4525-8fed-1a80706b4677.mp3|3[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (감성적인 발라드 75BPM)_MW01 v4.5+||",
"https://cdn1.suno.ai/5ccc01e3-2b46-40f7-b1b1-0144d23acd28.mp3|3[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (오케스트라 요소 80~95 BPM)_WM04 v4.5+||",
"https://cdn1.suno.ai/267869f8-2b38-48fe-a4ce-70460503eae7.mp3|3[결혼 기념] 로운이와 함께 하는 결혼 4주년 축하해! (바이올린, 베이스 드럼)_M08 v4.5+||",
"https://cdn1.suno.ai/8d3d5b3d-5c89-4bde-acca-21b7b266afbb.mp3|3[결혼 기념] 로운이와 함께 하는 결혼 4주년 축하해! (발라드 피아노 색소폰 헌신 애정)_M06 v4.5+||",
"https://cdn1.suno.ai/08f45616-b4c9-4454-9ca2-ab6e3ba1adc0.mp3|3[생일 축하] 당신들의 생일을 축하합니다 <br>(교향곡 금관악기, 기쁨과 환희)_M03 v4.5+||",
"https://cdn1.suno.ai/420bb0a7-4c19-4afe-be32-54031c3a0815.mp3|3[생일 축하] 당신들의 생일을 축하합니다 <br>(오케스트라, 낭만적인 축하 분위기)_M01 v4.5+||",
"https://cdn1.suno.ai/6723d32e-109c-462a-8363-ee000a733f79.mp3|4[잉태 기쁨] 파랑이의 꿈 (케이팝)_W01 v4||194",
"https://cdn1.suno.ai/9e89c24f-5add-4c60-884f-8779362bdcd7.mp3|4[잉태 기쁨] 파랑이의 노래 (신스 멜로디)_W02 v4||",
"https://cdn1.suno.ai/fe8de27d-2d1c-4cb2-aa82-2f36d9fe9068.mp3|4[건강 만남] 파랑아, 우리 곁에 올 그날까지 (밝고 명랑한 동요, 아기 첫걸음 장난기)_MW06 v4.5-all||",
"https://cdn1.suno.ai/48d48944-5d47-45a4-bb34-c95b21b5f6c5.mp3|4[건강 만남] 파랑아, 우리 곁에 올 그날까지 <br>(브라스밴드 행진, 희망, 새로운 시작)_M10 v4.5-all||",
"https://cdn1.suno.ai/53356ebf-1ea1-417c-a65e-4fd9b0f01bcb.mp3|4[탄생 파랑] 파랑이에게 보내는 엄마 아빠의 축복 (피치카토 우드블록, 순수 천진난만)_MW33 v4.5-all||",
"https://cdn1.suno.ai/134a34c9-5ed4-4547-a31e-4e94b4142123.mp3|4[탄생 파랑] 할아버지 할머니의 사랑을, 파랑에게 (아기 탄생을 축복, 밝고 즐거운 노래)_MW35 v4.5-all||",
"https://cdn1.suno.ai/14fbc195-88e8-41ee-9735-5f94addfde38.mp3|4[탄생 파랑] 할아버지 할머니가 보내는 파랑이의 축복 (트롯댄스 금관악기 신디사이저)_MW34 v4.5-all||",
"https://cdn1.suno.ai/57eb2949-f85e-486f-9b26-3559071feea6.mp3|4[탄생 로운] 로운에게 보내는 엄마 아빠의 축복 (발라드 이모 팝)_M04 v4.5||",
"https://cdn1.suno.ai/8f1653aa-4783-4103-a2bd-ec6f1bd9308d.mp3|4[탄생 로운] 할아버지 할머니의 사랑을, 로운에게 (트로트, 역동적인 댄스 비트)_MW04 v4.5-all||",
"https://cdn1.suno.ai/1a463b68-bdab-40e7-808a-8a639370fa23.mp3|4[탄생 로운] 할아버지 할머니의 사랑을, 로운에게 (행진곡 금관악기 영웅적 축제적)_M10 v4.5||",
"https://cdn1.suno.ai/e055f222-d824-4cd2-888a-20e7ff0ace51.mp3|4[탄생 로운] 할아버지 할머니가 보내는 로운이의 축복 (7080 포크송, 통기타, 하모니카)_MW06 v4.5-all||",
"https://cdn1.suno.ai/5ba74d41-4116-4813-9b8d-a41a1c58a55c.mp3|4[작명 축복] 예쁜 이름 로운아, 축하해! <br>(밝고 경쾌한 분위기의 행진곡풍)_W01 v4.5||",
"https://cdn1.suno.ai/78f69d24-ba2f-4fd1-850e-f6a3ecd80c72.mp3|4[작명 축복] 로운아, 빛나라~~~ ☆ <br>(행진곡 금관악기 영웅적 축제적)_W14 v4.5||",
"https://cdn1.suno.ai/00c3b8cb-6468-4e24-a8e9-473a39c0b550.mp3|4[작명 축복] 로운에게 보내는 할아머니의 축복 (가벼운 발걸음으로 산책하는 듯한 기분)_W08 v4.5||",
"https://cdn1.suno.ai/f5eb6228-9265-4958-b293-d0ab6eeaebd7.mp3|4[작명 축복] 로운에게 보내는 할아머니의 축복 <br>(행진곡, 희망찬 새로운 미래)_WM02 v4.5||",
"https://cdn1.suno.ai/f6136165-171f-4061-9bf4-889c24f75abe.mp3|4[작명 축복] 이 세상 이름, 로운에게 <br>(행진곡 금관악기 영웅적 축제적)_WM02 v4.5||",
"https://cdn1.suno.ai/2e509f2e-2585-4634-9e8d-a324f9543075.mp3|4[작명 축복] 로운에게 보내는 할아머니의 축복 (가사 수정 전, 오케스트라 반주 행진곡)_M05 v4.5||",
"https://cdn1.suno.ai/0697cce7-cef7-441c-92fb-cb954973a46b.mp3|4[작명 축복] 로운에게 보내는 할아머니의 축복 <br>(가사 수정 전, 행진곡 영웅적 축제적)_M03 v4.5||",
"https://cdn1.suno.ai/484f8462-66b9-4688-8da1-21d9c9e2e07a.mp3|4[백일 축하] 까꿍~ 로운아! 탄생 100일을 축하해! (바이올린 신스팝)_MW13 v4.5+||",
"https://cdn1.suno.ai/28b80768-523f-4bb9-9921-7c39bfc0a521.mp3|4[백일 축하] 까꿍~ 로운아! 탄생 100일을 축하해! (바이올린 신스팝)_MW14 v4.5+||",
"https://cdn1.suno.ai/674a6e25-2293-43e3-b378-9ac94f022e35.mp3|4[백일 축하] 로운에게 보내는 百日 축하 (인디)_MW14 v4.5+||",
"https://cdn1.suno.ai/36a1987d-bfeb-4fb8-9b1a-08e3473ee0be.mp3|4[백일 축하] 로운에게 보내는 百日 축하 <br>(바이올린 신스팝)_MW08 v4.5+||",
"https://cdn1.suno.ai/3fa1add0-d1c1-4722-b0d6-46d95c46905d.mp3|4[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (80년대, 뉴 웨이브 펑크 웨이브)_MW21 v4.5+||",
"https://cdn1.suno.ai/c444768c-434b-4635-ad33-1a56c23ab0be.mp3|4[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (감성적인 이모 팝 80bpm)_MW14 v4.5+||",
"https://cdn1.suno.ai/3a0734e0-46a6-424e-905a-986ee6c550ea.mp3|4[결혼 기념] 로운이와 함께 하는 결혼 4주년 축하해! (브라스밴드 행진, 트럼펫 트롬본)_M09 v4.5+||",
"https://cdn1.suno.ai/e9c39240-560b-434c-8e7e-85f40dfd4c06.mp3|4[결혼 기념] 로운이와 함께 하는 결혼 4주년 축하해! (트로트 듀엣의 주고받는 보컬)_MW06 v4.5+||",
"https://cdn1.suno.ai/cf1a24b0-c22e-4488-9e3b-c3ad61f69417.mp3|4[생일 축하] 당신들의 생일을 축하합니다 <br>(교향곡 금관악기, 기쁨과 환희)_M04 v4.5+||",
"https://cdn1.suno.ai/396e05a5-ef14-4d52-8f53-87b64c85adc6.mp3|4[생일 축하] 당신들의 생일을 축하합니다 <br>(브라스밴드 행진곡, 낭만적 분위기)_M06 v4.5+||",
"https://cdn1.suno.ai/1b2294c2-fe70-4928-8962-fb79d47dc387.mp3|4[생일 축하] 당신들의 생일을 축하합니다 <br>(트로트 듀엣의 주고받는 보컬)_M07 v4.5+||",
"https://cdn1.suno.ai/83ca4e61-6b0c-4684-bc3f-6c5994bb2805.mp3|0[증조모 생일] 울 엄마의 기구했던 생일 <br>(바이올린 신스팝)_MW02 v5||",
"https://cdn1.suno.ai/245e94a3-a342-4bae-bd25-107f5e9aa124.mp3|0[증조모 생일] 울 엄마의 기구했던 생일 <br>(전통 사극 발라드)_W02 v5||",
"https://cdn1.suno.ai/88160654-39fc-4029-80e7-71009a63e51e.mp3|0[증조모 생일] 울 엄마의 기구했던 생일 <br>(전통 발라드)_M02 v5||",
"https://cdn1.suno.ai/38c73479-2029-46a0-9cd0-7e6d2dc8f1b1.mp3|0[증조모 생일] 울 엄마의 기구했던 생일 <br>(전통 사극 발라드)_W01 v5||",
"https://cdn1.suno.ai/9a4660e6-f404-4b9e-b8e6-4246b9651735.mp3|0[증조모 생일] 울 엄마의 기구했던 생일 <br>(전통 발라드)_M03 v5||",
"https://cdn1.suno.ai/5e1c7bda-dd53-441f-96e7-7a684778881f.mp3|0[증조모 생일] 울 엄마의 기구했던 생일 <br>(전통 발라드)_W04 v5||",
"https://cdn1.suno.ai/74d4d057-4a49-47ad-8083-5e8025c5fccb.mp3|0[증조모 생일] 울 엄마의 기구했던 생일 <br>(서정적 포크)_M04 v5||",
"https://cdn1.suno.ai/3b8b6559-9be5-4214-8407-9d0b5a7c38ab.mp3|0[증조모 생일] 울 엄마의 기구했던 생일 <br>(바이올린 신스팝)_MW01 v5||",
"https://cdn1.suno.ai/13945f2f-25b5-46b1-a15c-bfda6942e3b7.mp3|0[증조모 생일] 울 엄마의 기구했던 생일 <br>(서정적 포크)_M05 v5||",
"https://cdn1.suno.ai/94f36ae9-a979-48e0-9659-bf402e23b746.mp3|1[증조모 생일] 울 엄마의 기구했던 생일 (발라드)_M01 v5||",
"https://cdn1.suno.ai/c31ee404-ee66-42b3-b813-55f53904eed5.mp3|1[증조모 생일] 울 엄마의 기구했던 생일 <br>(전통 발라드)_W03 v5||",
"https://cdn1.suno.ai/89f3294a-989e-49ac-8d4d-f6d8099ada7b.mp3|4[잉태 기쁨] 파랑이의 꿈 (동요풍, 100~120BPM)_MW05 v4.5-all||",
"https://cdn1.suno.ai/b4f1d4c5-93e7-4f2c-b1f2-633e117870b6.mp3|4[잉태 기쁨] 파랑이의 꿈 (피아노 현악기, 희망적인 멜로디가 꿈과 가능성을 상징)_MW03 v4.5-all||",
"https://cdn1.suno.ai/24375e92-d254-449b-ae51-acbf67079aff.mp3|5[잉태 기쁨] 파랑이의 꿈 <br>(7080 100~120 BPM, 활기차고 경쾌한 템포의 통기타 하모니카 타악기)_MW07 v4.5-all||",
"https://cdn1.suno.ai/2e066dbd-37d8-4a63-bf56-f999823d03b6.mp3|5[잉태 기쁨] 파랑이의 꿈 <br>(자장가 풍, 경이로움과 평화로움)_WM02 v4.5-all||",
"https://cdn1.suno.ai/eacddca6-dd2a-4cef-843a-8ca353d8f186.mp3|5[잉태 기쁨] 파랑이의 꿈 <br>(피아노와 현악기 플룻, 새로운 삶을 축하, 희망적이고 따뜻한 분위기)_MW01 v4.5-all||",
"https://cdn1.suno.ai/450e20ee-6419-4f02-a2d1-5a27e8d44bc6.mp3|6[잉태 기쁨] 파랑이의 꿈 (피아노 현악기, 희망적인 멜로디가 꿈과 가능성을 상징)_MW02 v4.5-all||",
"https://cdn1.suno.ai/c69a037a-831c-499d-954b-12e98e37f425.mp3|4[잉태 기쁨] 파랑이의 노래 <br>(동요풍 갓 태어난 아기 신기함 설렘)_MW03 v4.5-all||",
"https://cdn1.suno.ai/3a92de78-74c9-4e7d-aeef-dc9368219c88.mp3|5[잉태 기쁨] 파랑이의 노래 (활기차고 경쾌한 멜로디, 아이들의 자유로운 영혼)_MW05 v4.5-all||",
"https://cdn1.suno.ai/f9f67399-c363-4807-a53c-8edbc44dac8a.mp3|5[잉태 기쁨] 파랑이의 노래 <br>(7080 포크송, 통기타, 하모니카)_MW01 v4.5-all||",
"https://cdn1.suno.ai/17c3549e-33ba-4145-aab5-2d33ec0cc5ca.mp3|4[건강 만남] 파랑아, 우리 곁에 올 그날까지 (바이올린 독주 오케스트라 협연, 기대)_M11 v4.5-all||",
"https://blog.kakaocdn.net/dn/buiifG/btsNUstsmau/8ocSvcZcg3BC8890VYxgcK/%ED%8C%8C%EB%9E%91%EC%95%84%2C%20%EC%9A%B0%EB%A6%AC%20%EA%B3%81%EC%97%90%20%EC%98%AC%20%EA%B7%B8%EB%82%A0%EA%B9%8C%EC%A7%80.._MW12_GPT_riffusion.mp3?attach=1&knm=tfile.mp3|4[건강 만남] 파랑아, 우리 곁에 올 그날까지 <br>(발라드, 아기를 향한 사랑,희망,기대)_MW12_GPT riffusion||",
"https://cdn1.suno.ai/dbf03e80-4003-424e-926c-52731ab2a20c.mp3|5[건강 만남] 파랑아, 우리 곁에 올 그날까지 <br>(감성적인 발라드, 아버지 되는 기분)_M05 v4||",
"https://cdn1.suno.ai/a34ccdcd-d150-4a35-aa91-cca443e089b9.mp3|5[건강 만남] 파랑아, 우리 곁에 올 그날까지 <br>('레몬 트리'처럼 설레는 마음)_M07 v4||",
"https://cdn1.suno.ai/e52bf5bc-a8cc-476a-afd4-88743305532a.mp3|5[건강 만남] 파랑아, 우리 곁에 올 그날까지 <br>(브라스밴드 행진, 희망, 새로운 시작)_M09 v4.5-all||",
"https://cdn1.suno.ai/53816af0-7e6d-4da9-936a-1cf950313619.mp3|5[건강 만남] 파랑아, 우리 곁에 올 그날까지 <br>(아기를 기다리는 행복한 마음)_WM01 v4||",
"https://cdn1.suno.ai/d2604844-11bd-4fae-a1a2-eb771e29a6c6.mp3|5[건강 만남] 파랑아, 우리 곁에 올 그날까지 <br>(첼로 독주 피아노, 순수한 기대감)_MW04 v4.5-all||",
"https://cdn1.suno.ai/822a3868-82fe-4cc3-8ed1-7b65c5f54b3c.mp3|4[탄생 파랑] 파랑이에게 보내는 엄마 아빠의 축복 (피아노 바이올린 오케스트라 협주)_MW36 v4.5-all||",
"https://cdn1.suno.ai/6530f27c-dbfa-44c1-b7bd-18bd1771b7e9.mp3|4[탄생 파랑] 파랑이에게 보내는 엄마 아빠의 축복 (바이올린 독주와 오케스트라 협주곡)_MW39 v4.5-all||",
"https://cdn1.suno.ai/bf8f7651-0ed4-4fc3-90c1-7e9f168a5450.mp3|5[탄생 파랑] 파랑이에게 보내는 엄마 아빠의 축복 (피아노 현악,관악기 장엄한 분위기)_M32 v4.5-all||",
"https://cdn1.suno.ai/78934dc9-0b1f-4d03-8be7-0b7cc8911759.mp3|5[탄생 파랑] 파랑이에게 보내는 엄마 아빠의 축복 (피아노 현악,관악기 장엄한 분위기)_MW35 v4.5-all||",
"https://blog.kakaocdn.net/dn/bqJREe/btsNR8jfu96/SGKmzuZPkgvIPc4K64oxn1/%ED%8C%8C%EB%9E%91%EC%9D%B4%EC%97%90%EA%B2%8C%20%EB%B3%B4%EB%82%B4%EB%8A%94%20%EC%97%84%EB%A7%88%20%EC%95%84%EB%B9%A0%EC%9D%98%20%EC%B6%95%EB%B3%B5%20%28%EC%82%AC%EB%9E%91%2C%20%ED%83%84%EC%83%9D%2C%20%EA%BF%88%2C%20%EA%B0%90%EC%82%AC%29_M23_GPT_riffusion.mp3?attach=1&knm=tfile.mp3|5[탄생 파랑] 파랑이에게 보내는 엄마 아빠의 축복 (피아노, 사랑, 탄생, 꿈, 감사)_M23_GPT FUZZ-1.0||",
"https://cdn1.suno.ai/c92ca5ba-8125-4f5b-bc28-fd92d2ad4b45.mp3|5[탄생 파랑] 파랑이에게 보내는 엄마 아빠의 축복 (감성 발라드, 사랑, 탄생, 꿈, 감사)_M31 v4.5||",
"https://cdn1.suno.ai/f123deb0-9bdb-4f73-a59e-13f3f89b1703.mp3|5[탄생 파랑] 파랑이에게 보내는 엄마 아빠의 축복 (사랑, 축복, 희망, R&B 95BPM)_W31 v4.5||",
"https://cdn1.suno.ai/7e9c8395-3070-448d-a334-b80ef211253d.mp3|5[탄생 파랑] 파랑이에게 보내는 엄마 아빠의 축복 (어쿠스틱 기타와 부드러운 타악기)_W32 v4.5-all||",
"https://cdn1.suno.ai/ffafc1db-4acf-4c6c-873d-5f0050727d33.mp3|5[탄생 파랑] 파랑이에게 보내는 엄마 아빠의 축복 (어쿠스틱 기타와 부드러운 타악기)_W33 v4.5-all||",
"https://cdn1.suno.ai/c3dcbf81-3b60-47b6-af3c-ce63fd4b9956.mp3|5[탄생 파랑] 파랑이에게 보내는 엄마 아빠의 축복 (피치카토 우드블록, 순수 천진난만)_MW34 v4.5-all||",
"https://cdn1.suno.ai/e63511f9-486a-49fa-8f41-fc4d0bccca81.mp3|5[탄생 파랑] 파랑이에게 보내는 엄마 아빠의 축복 (기쁨과 축복, 한국 팝 듀엣)_WM31 v4.5||",
"https://cdn1.suno.ai/cc163dad-2899-4b7b-bd81-aa786a4e202f.mp3|5[탄생 파랑] 할아버지 할머니의 사랑을, 파랑에게 (발라드, 감사, 세대 간의 사랑, 희망)_WM31 v4.5||",
"https://cdn1.suno.ai/fa525d97-1403-4660-a980-58e6433510c6.mp3|5[탄생 파랑] 할아버지 할머니의 사랑을, 파랑에게 (발라드, 피아노, 손자의 축복)_WM34 v4.5||",
"https://cdn1.suno.ai/5ded02ea-7b73-47d8-a575-fddafaa2d398.mp3|5[탄생 파랑] 할아버지 할머니의 사랑을, 파랑에게 (성장 가족의 행복을 축하, 85 BPM)_MW32 v4.5||",
"https://cdn1.suno.ai/430ac099-51a8-4334-b16a-872fd076ed1a.mp3|5[탄생 파랑] 할아버지 할머니의 사랑을, 파랑에게 (감성적인 발라드, 피아노)_WM33 v4.5||",
"https://cdn1.suno.ai/ca983edc-2eaa-4cb0-91fc-3cf516d404fb.mp3|5[탄생 파랑] 할아버지 할머니의 사랑을, 파랑에게 (발라드, 감사, 세대 간의 사랑, 희망)_WM32 v4.5||",
"https://cdn1.suno.ai/dd98d5de-f29e-4256-babc-21041c150e74.mp3|5[탄생 파랑] 할아버지 할머니의 사랑을, 파랑에게 (피아노, 평화로운 작은 별의 자장가)_WM37 v4.5||",
"https://cdn1.suno.ai/d7d915e3-d9b7-4053-a1bb-a588ae3d39dd.mp3|4[탄생 파랑] 할아버지 할머니가 보내는 파랑이의 축복 (할아버지 할머니의 소원)_M31 v4.5||",
"https://cdn1.suno.ai/c0ad549b-93aa-45ec-8b6e-37411afc6c98.mp3|5[탄생 파랑] 할아버지 할머니가 보내는 파랑이의 축복 (7080 통기타 하모니카 타악기)_MW35 v4.5-all||",
"https://cdn1.suno.ai/abf770ce-a9bc-4a95-9dcd-a04f8fb52f20.mp3|5[탄생 파랑] 할아버지 할머니가 보내는 파랑이의 축복 (가사 수정 전, 탄생 축복)_W31 v4.5||",
"https://cdn1.suno.ai/c146bd7c-a8b5-4575-a818-703dfd748545.mp3|5[탄생 파랑] 할아버지 할머니가 보내는 파랑이의 축복 (가사 수정 전, 탄생 축복)_WM31 v4.5||",
"https://cdn1.suno.ai/efa8a6cf-3b75-4a17-ab9b-bcc6eb8601fb.mp3|5[탄생 파랑] 할아버지 할머니가 보내는 파랑이의 축복 (발라드, 통기타 잔잔한 타악기)_MW33 v4.5-all||",
"https://cdn1.suno.ai/732aabe2-ff50-4c70-b6c0-2600198a201f.mp3|5[탄생 파랑] 할아버지 할머니가 보내는 파랑이의 축복 (트롯댄스 금관악기 신디사이저)_M32 v4.5-all||",
"https://cdn1.suno.ai/bd8e589a-81f4-4932-85c1-502224db5727.mp3|5[탄생 파랑] 할아버지 할머니가 보내는 파랑이의 축복 (7080 통기타 하모니카 타악기)_MW36 v4.5-all||",
"https://cdn1.suno.ai/8db5b656-9327-459a-a346-98d3f90a6abe.mp3|5[탄생 로운] 로운에게 보내는 엄마 아빠의 축복 (동요풍 갓 태어난 아기 신기함 설렘)_MW01 v4.5-all||",
"https://cdn1.suno.ai/d59459ba-ecee-4328-92d4-1e8b03a577aa.mp3|5[탄생 로운] 로운에게 보내는 엄마 아빠의 축복 (첼레스타, 새로운 삶을 축하)_WM02 v4.5-all||",
"https://cdn1.suno.ai/fc929b1f-f8b9-4560-a50d-be77032b3028.mp3|4[탄생 로운] 할아버지 할머니의 사랑을, 로운에게 (단순한 멜로디, 활기찬 분위기)_W04 v4.5||",
"https://cdn1.suno.ai/b634db3e-1203-49c8-81a4-afee051e540b.mp3|4[탄생 로운] 할아버지 할머니의 사랑을, 로운에게 (새로운 이름, 새로운 세상)_W02 v4.5||",
"https://cdn1.suno.ai/4e51edb6-c71b-4596-a260-9ff45a262f91.mp3|4[탄생 로운] 할아버지 할머니의 사랑을, 로운에게 (새로운 이름, 새로운 세상, 휘파람)_W01 v4.5||",
"https://cdn1.suno.ai/ace37a46-0f0a-4c86-a615-6558094f496a.mp3|4[탄생 로운] 할아버지 할머니의 사랑을, 로운에게 (트로트 듀엣의 주고받는 보컬)_M11 v4.5-all||",
"https://cdn1.suno.ai/d88e7e85-b6b8-4563-9281-5b385ddd86d1.mp3|5[탄생 로운] 할아버지 할머니의 사랑을, 로운에게 (감동적인 축하, 사랑과 희망, 기쁨)_W06 v4.5||",
"https://cdn1.suno.ai/8e1160e9-e3f0-4d65-b991-13fe3b6e81da.mp3|5[탄생 로운] 할아버지 할머니의 사랑을, 로운에게 (자애로운 목소리의 할머니)_W07 v4.5||",
"https://cdn1.suno.ai/345523a8-e150-41a3-bd32-6f440fc0265c.mp3|6[탄생 로운] 할아버지 할머니의 사랑을, 로운에게 (단순한 멜로디, 활기찬 분위기)_W03 v4.5||",
"https://cdn1.suno.ai/57948741-6bfe-4e29-bdc3-7c42da4d5498.mp3|4[탄생 로운] 할아버지 할머니가 보내는 로운이의 축복 (동요, 아기에 대한 신기함 설렘)_MW09 v4.5-all||",
"https://cdn1.suno.ai/333b47f6-69cf-449f-be65-87104a71a89f.mp3|5[탄생 로운] 할아버지 할머니가 보내는 로운이의 축복 (7080 포크송, 통기타, 하모니카)_MW05 v4.5-all||",
"https://cdn1.suno.ai/7346e7ed-c747-4f12-a4f2-7b9d9273462d.mp3|5[탄생 로운] 할아버지 할머니가 보내는 로운이의 축복 (경쾌한 템포의 트로트 듀엣)_MW07 v4.5-all||",
"https://cdn1.suno.ai/bdb59d5d-29b8-48b5-8525-892ee54802a1.mp3|5[작명 축복] 예쁜 이름 로운아, 축하해! (인디)_M04 v4.5||",
"https://cdn1.suno.ai/2eeb6c6c-96bd-4fa0-bd5c-12589b3cb009.mp3|5[작명 축복] 예쁜 이름 로운아, 축하해! (인디)_W07 v4.5||",
"https://cdn1.suno.ai/f4c3af5f-2657-4ef8-bcb2-3815db5ad3f2.mp3|5[작명 축복] 예쁜 이름 로운아, 축하해! (인디)_W08 v4.5||",
"https://cdn1.suno.ai/9e417258-3f45-4a07-b743-ec5fc031e107.mp3|5[작명 축복] 예쁜 이름 로운아, 축하해! <br>(발랄 에너지, 즐겁고 유쾌한 분위기)_WM01 v4.5||",
"https://cdn1.suno.ai/49166703-1f6b-4fb3-b3aa-9f51cf7c85a7.mp3|5[작명 축복] 예쁜 이름 로운아, 축하해! <br>(밝고 경쾌한 분위기의 행진곡풍)_W02 v4.5||",
"https://cdn1.suno.ai/3e32ff0e-ad2a-43b9-bb6f-b3563e463bd8.mp3|5[작명 축복] 예쁜 이름 로운아, 축하해! <br>(밝고 단순한 멜로디, 안정적인 박자)_W14 v4.5||",
"https://cdn1.suno.ai/005de5ea-2563-4ff8-bf00-21c92719362f.mp3|5[작명 축복] 로운아, 빛나라~~~ ☆ (인디)_M04 v4.5||",
"https://cdn1.suno.ai/733d6d3b-b039-4ad5-afd5-9460f7fdc0ca.mp3|5[작명 축복] 로운아, 빛나라~~~ ☆ (인디)_MW01 v4.5||",
"https://cdn1.suno.ai/455f67ec-3e82-4f29-b9d1-531012d84c18.mp3|5[작명 축복] 로운아, 빛나라~~~ ☆ (피아노 발라드 자랑스러움, 기쁨, 그리고 응원)_W01 v4.5||",
"https://cdn1.suno.ai/75cc1f4f-fdd5-43db-90af-25ab6677fed7.mp3|5[작명 축복] 로운아, 빛나라~~~ ☆ <br>(밝고 단순한 멜로디, 안정적인 박자)_W07 v4.5||",
"https://cdn1.suno.ai/d3f12cac-9d56-4ea4-9ee0-494fd12e2050.mp3|5[작명 축복] 로운아, 빛나라~~~ ☆ <br>(일정한 리듬, 기억하기 쉬운 멜로디)_W06 v4.5||",
"https://cdn1.suno.ai/95def51d-b049-4ddc-bbfb-dd789eac5904.mp3|5[작명 축복] 로운아, 빛나라~~~ ☆ <br>(행진곡, 희망찬 새로운 미래)_W03 v4.5||",
"https://cdn1.suno.ai/12ef9615-31e8-4928-9cf5-25007ea48a92.mp3|5[작명 축복] 로운아, 빛나라~~~ ☆ <br>(행진곡, 희망찬 새로운 미래)_W04 v4.5||",
"https://cdn1.suno.ai/7da927b6-7f7d-4e71-9577-b09963933672.mp3|5[작명 축복] 로운아, 빛나라~~~ ☆ <br>(행진곡, 희망찬 새로운 미래)_W16 v4.5||",
"https://cdn1.suno.ai/3c3f715a-204e-4ba5-9c12-1ac3121c7185.mp3|4[작명 축복] 로운에게 보내는 할아머니의 축복 <br>(피치카토 우드블록, 순수 천진난만)_MW02 v4.5-all||",
"https://cdn1.suno.ai/a80c01e0-efd8-4aff-9bb4-79901dda34eb.mp3|4[작명 축복] 로운에게 보내는 할아머니의 축복 <br>(7080 포크송, 통기타, 하모니카)_MW04 v4.5-all||",
"https://cdn1.suno.ai/364e14ce-7283-492a-9776-68ccb4ad45c7.mp3|4[작명 축복] 로운에게 보내는 할아머니의 축복 <br>(밝고 감성적이며 즐거운 분위기)_WM05 v4.5||",
"https://cdn1.suno.ai/ef0b4fe8-d42b-4cb9-891e-b4478a07a83a.mp3|4[작명 축복] 로운에게 보내는 할아머니의 축복 <br>(7080 포크송, 통기타, 하모니카)_MW05 v4.5-all|149|",
"https://cdn1.suno.ai/02c4c178-c51c-4916-ae39-efa2962527c0.mp3|5[작명 축복] 로운에게 보내는 할아머니의 축복 <br>(7080 포크송, 통기타, 하모니카)_MW06 v4.5-all||",
"https://cdn1.suno.ai/9eb52801-7898-4362-aa86-7d4a80aa20aa.mp3|5[작명 축복] 로운에게 보내는 할아머니의 축복 (발라드 서정적, 밝은, 긍정적, 부드러운)_M01 v4.5||",
"https://cdn1.suno.ai/3cc310a7-333b-4f85-9e48-7d7ef93f60ea.mp3|5[작명 축복] 로운에게 보내는 할아머니의 축복 <br>(밝고 감성적이며 즐거운 분위기)_WW01 v4.5||",
"https://cdn1.suno.ai/f39b58fa-13d7-4fc9-90c6-6c16198e9175.mp3|6[작명 축복] 로운에게 보내는 할아머니의 축복 <br>(동심, 새로운 시작을 축하)_M04 v4.5-all||",
"https://cdn1.suno.ai/d16acb76-9933-4333-88b2-40334d95c359.mp3|6[작명 축복] 로운에게 보내는 할아머니의 축복 <br>(동심, 새로운 시작을 축하)_M05 v4.5-all||",
"https://cdn1.suno.ai/8dc74b78-c73c-4b70-86a7-5048a63ad8e5.mp3|4[작명 축복] 이 세상 이름, 로운에게 <br>(바이올린 신스팝)_W21 v4.5||",
"https://cdn1.suno.ai/3f396c53-83aa-424f-aea0-09b1f220b8a4.mp3|5[작명 축복] 이 세상 이름, 로운에게 (밝고 경쾌한 동요, 순수하고 행복한 분위기)_MW03 v4.5-all||",
"https://cdn1.suno.ai/792d302c-d14c-44ca-a8a7-bef52ec5debb.mp3|5[작명 축복] 이 세상 이름, 로운에게 (작명식에 어울리는 서정적인 애정 넘치는 분위기)_W01 v4.5||",
"https://cdn1.suno.ai/d8c8e3f2-8fce-427e-914a-ed78bd2a5f02.mp3|5[작명 축복] 이 세상 이름, 로운에게 (밝고 경쾌한 동요, 순수하고 행복한 분위기)_MW04 v4.5-all||",
"https://cdn1.suno.ai/89852265-4615-4f3e-b9f5-f70fa3d87f49.mp3|5[작명 축복] 로운에게 보내는 할아머니의 축복 (가사 수정 전, 발라드 사랑스러움, 평화)_M02 v4.5||",
"https://cdn1.suno.ai/bbf3d0d0-825e-4eed-beba-989db9409d74.mp3|5[작명 축복] 로운에게 보내는 할아머니의 축복 <br>(가사 수정 전, '레몬 트리' 분위기)_W02 v4.5||",
"https://cdn1.suno.ai/3d31d0df-7f1e-4320-b910-505c0b34dbcb.mp3|5[작명 축복] 로운에게 보내는 할아머니의 축복 <br>(가사 수정 전, '레몬 트리' 분위기)_W03 v4.5||",
"https://cdn1.suno.ai/4058b72b-a8d1-4ba6-bb13-26e8e1901ab2.mp3|5[작명 축복] 로운에게 보내는 할아머니의 축복 (가사 수정 전, 발라드 사랑스러움, 평화)_M01 v4.5||",
"https://cdn1.suno.ai/20e1e1a1-fb0a-420b-b0b7-8620776ca081.mp3|4[백일 축하] 까꿍~ 로운아! 탄생 100일을 축하해! (경쾌한 행진곡 리듬, 트로트 스타일)_WM04 v4.5+||",
"https://cdn1.suno.ai/9ae0ec37-3a32-4301-9d57-62c4a467fac8.mp3|4[백일 축하] 까꿍~ 로운아! 탄생 100일을 축하해! (장난스럽고 활기찬 멜로디)_MW02 v4.5+||",
"https://cdn1.suno.ai/ea47e08c-c349-4110-a505-110e141fbdce.mp3|4[백일 축하] 까꿍~ 로운아! 탄생 100일을 축하해! (가벼운 행진곡 리듬의 트로트 듀엣)_MW04 v4.5+||",
"https://cdn1.suno.ai/870e20b8-3f54-4393-9e4b-bfc83330722e.mp3|4[백일 축하] 까꿍~ 로운아! 탄생 100일을 축하해! (밝고 경쾌한 동요 100~120 BPM)_WM03 v4.5+||",
"https://cdn1.suno.ai/4b734316-af2e-4550-9bf3-ee9efa0d62c8.mp3|4[백일 축하] 까꿍~ 로운아! 탄생 100일을 축하해! (경쾌한 행진곡 리듬, 트로트 스타일)_WM05 v4.5+||",
"https://cdn1.suno.ai/c662fe61-eded-470f-8476-73c7a0d40319.mp3|4[백일 축하] 까꿍~ 로운아! 탄생 100일을 축하해! (뽀로로와 같은 아기 주제가 분위기)_WW01 v4.5+||",
"https://cdn1.suno.ai/c9ee4a5e-f4de-4735-b50d-701ea0433067.mp3|5[백일 축하] 까꿍~ 로운아! 탄생 100일을 축하해! (가벼운 행진곡 리듬의 트로트 듀엣)_MW03 v4.5+||",
"https://cdn1.suno.ai/6fd0ae7e-52bd-4658-b3ec-376c737a6389.mp3|5[백일 축하] 까꿍~ 로운아! 탄생 100일을 축하해! (가벼운 행진곡 리듬의 트로트 듀엣)_MW05 v4.5+||",
"https://cdn1.suno.ai/f9bcfe2f-aa05-4f56-94e3-f1823e495065.mp3|5[백일 축하] 까꿍~ 로운아! 탄생 100일을 축하해! (가벼운 행진곡 리듬의 트로트 듀엣)_MW06 v4.5+||",
"https://cdn1.suno.ai/0403f6ef-6f27-4fe5-b326-0e9ccea5dfcc.mp3|5[백일 축하] 까꿍~ 로운아! 탄생 100일을 축하해! (장난스럽고 활기찬 멜로디)_MW01 v4.5+||",
"https://cdn1.suno.ai/d6996445-6b86-4c0b-9f10-301d1834dc23.mp3|5[백일 축하] 까꿍~ 로운아! 탄생 100일을 축하해! (트로트 다소 느린 80bpm)_W12 v4.5+||",
"https://cdn1.suno.ai/7c829d8f-b450-4ad8-b3b9-a72f5e58aac5.mp3|5[백일 축하] 까꿍~ 로운아! 탄생 100일을 축하해! (밝고 경쾌한 동요 100~120 BPM)_W08 v4.5+||",
"https://cdn1.suno.ai/49dbf379-4b69-4ca9-ac9f-26e60171500b.mp3|6[백일 축하] 까꿍~ 로운아! 탄생 100일을 축하해! (가벼운 행진곡 리듬의 트로트 듀엣)_MW07 v4.5+||",
"https://cdn1.suno.ai/a87c0f53-09c7-4ecc-84c7-68cb989da353.mp3|4[백일 축하] 로운에게 보내는 百日 축하 <br>(가벼운 클래식 크로스오버)_MW23 v4.5+||",
"https://cdn1.suno.ai/4ac1264f-f638-4e1d-ada5-f10efbcf3453.mp3|4[백일 축하] 로운에게 보내는 百日 축하 (인디)_MW15 v4.5+||",
"https://cdn1.suno.ai/25172b98-31cc-43fd-bc39-eabb5e6ad5e3.mp3|4[백일 축하] 로운에게 보내는 百日 축하 <br>(감성적인 이모 팝 보컬 멜로디)_MW10 v4.5+||",
"https://cdn1.suno.ai/93874342-bef4-4349-992e-af5b410a247d.mp3|5[백일 축하] 로운에게 보내는 百日 축하 (K팝 특유의 활기차고 생동감 넘치는 에너지)_MW24 v4.5-all||",
"https://cdn1.suno.ai/2c16f4db-d2db-48f5-bb5d-75a387157570.mp3|5[백일 축하] 로운에게 보내는 百日 축하 (발라드, 감동적, 가족, 축복, 서정적, 희망)_MW04 v4.5+||",
"https://cdn1.suno.ai/0a293eb7-187f-48fe-a8b5-9f808612ba84.mp3|5[백일 축하] 로운에게 보내는 百日 축하 (발라드, 감동적, 가족, 축복, 서정적, 희망)_MW05 v4.5+||",
"https://cdn1.suno.ai/ec54aff3-7e67-48bf-859a-123bebd55077.mp3|5[백일 축하] 로운에게 보내는 百日 축하 (컨트리)_MW21 v4.5+||",
"https://cdn1.suno.ai/4fedc516-5aee-4051-8cf1-a0c8fbfad04b.mp3|5[백일 축하] 로운에게 보내는 百日 축하 <br>(가벼운 행진곡 리듬의 트로트 듀엣)_MW06 v4.5+||",
"https://cdn1.suno.ai/411ead71-e353-49e5-9cc0-dbe3eb633cb8.mp3|5[백일 축하] 로운에게 보내는 百日 축하 <br>(가벼운 행진곡 리듬의 트로트 듀엣)_MW07 v4.5+||",
"https://cdn1.suno.ai/bb44513c-c975-433d-8dde-6cbc23f3deef.mp3|5[백일 축하] 로운에게 보내는 百日 축하 <br>(감성적인 이모 팝 보컬 멜로디)_MW11 v4.5+||",
"https://cdn1.suno.ai/33f8c20e-5b30-4bc0-afe4-c7a48da22e9f.mp3|5[백일 축하] 로운에게 보내는 百日 축하 <br>(발라드 70~85 BPM 격려와 희망)_MW02 v4.5+||",
"https://cdn1.suno.ai/dcb0d5b0-f096-44ff-b32b-061bd6bee325.mp3|5[백일 축하] 로운에게 보내는 百日 축하 <br>(발라드 70~85 BPM 격려와 희망)_MW03 v4.5+||",
"https://cdn1.suno.ai/1773c243-2d1a-4113-90a7-1d2c0998d85c.mp3|5[백일 축하] 로운에게 보내는 百日 축하 <br>(발라드 85BPM 감사, 기쁨, 사랑)_WM01 v4.5+||",
"https://cdn1.suno.ai/f792e7ee-8233-4125-a35b-c8d47cee058d.mp3|5[백일 축하] 로운에게 보내는 百日 축하 <br>(발라드, 컨트리 음악, 남녀 보컬)_MW19 v4.5+||",
"https://cdn1.suno.ai/ee0fd08a-2dd5-4752-a34d-2575686989c0.mp3|5[백일 축하] 로운에게 보내는 百日 축하 <br>(심포닉록, 오케스트라)_MW16 v4.5+||",
"https://cdn1.suno.ai/855122db-0a4f-485c-ba95-2d608f9549d5.mp3|5[백일 축하] 로운에게 보내는 百日 축하 <br>(심포닉록, 오케스트라)_MW17 v4.5+||",
"https://cdn1.suno.ai/81fd1f89-af6e-4474-a677-6bf051812f27.mp3|5[백일 축하] 로운에게 보내는 百日 축하 <br>(트로트 다소 느린 80bpm)(트로트 80bpm)_MW13 v4.5+||",
"https://cdn1.suno.ai/762c1a99-0ec3-44c6-809d-71d423749016.mp3|5[백일 축하] 로운에게 보내는 百日 축하 <br>(트로트 다소 느린 80bpm)_MW12 v4.5+||",
"https://cdn1.suno.ai/95821cac-316f-42ed-b8ea-2b32a3776e9a.mp3|5[백일 축하] 로운에게 보내는 百日 축하 (K팝 특유의 활기차고 생동감 넘치는 에너지)_MW25 v4.5-all||",
"https://cdn1.suno.ai/e1abd8b6-1410-45d8-b7a7-1782bdee8d03.mp3|6[백일 축하] 로운에게 보내는 百日 축하 (컨트리)_MW20 v4.5+||",
"https://cdn1.suno.ai/86a57f8f-6aa7-42de-88a5-c4539d5fcdf3.mp3|4[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (바이올린 드럼)_MW12 v4.5+||",
"https://cdn1.suno.ai/ac5d4fb0-8f81-4407-9a4a-65ad39df61d5.mp3|4[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (바이올린 신스팝)_MW10 v4.5+||",
"https://cdn1.suno.ai/501d1b91-3ce0-46a1-9c02-9589d1d6cd0f.mp3|4[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (동요, 아기에 대한 신기함과 설렘)_MW25 v4.5-all||",
"https://cdn1.suno.ai/4a47607d-fcb6-4a6d-8d88-24f5f2b7dd0e.mp3|4[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (감성적인 발라드 75BPM)_MW02 v4.5+||",
"https://cdn1.suno.ai/740dd4d1-7d96-4b01-afb9-c74a7262ed38.mp3|4[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (발라드, 컨트리 음악, 남녀 보컬)_MW19 v4.5+||",
"https://cdn1.suno.ai/87e3c77f-f7ef-4b5b-80d7-91c4b02211d8.mp3|4[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (오케스트라 요소 80~95 BPM)_MW22 v4.5+||",
"https://cdn1.suno.ai/bd1633f1-4533-48ee-b86f-6cef398bc943.mp3|4[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (2000년대 일렉트로닉 팝)_W01 v4.5+||",
"https://cdn1.suno.ai/ec59bfc4-8a56-426a-9944-30cae8d1683c.mp3|4[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (80년대, 뉴 웨이브 펑크 웨이브)_MW20 v4.5+||",
"https://cdn1.suno.ai/15864649-9ed2-4435-80be-62bf27c87015.mp3|4[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (인디)_MW09 v4.5+||",
"https://cdn1.suno.ai/5a75a8f9-b00d-4a36-bae4-fb1e0c577801.mp3|5[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (가벼운 클래식 크로스오버)_WM01 v4.5+||",
"https://cdn1.suno.ai/e1b1c0c0-a1f6-42c7-8fed-faca6943ba75.mp3|5[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (감성적인 이모 팝 80bpm)_MW15 v4.5+||",
"https://cdn1.suno.ai/7b2c2127-da58-4303-9087-348523bac1df.mp3|5[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (심포닉록, 오케스트라)_MW16 v4.5+||",
"https://cdn1.suno.ai/1dea7f00-9bd1-40ab-b8ad-942cd10a43c2.mp3|5[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (웅장한 서정적인 클래식 스타일)_MW04 v4.5+||",
"https://cdn1.suno.ai/204a4b73-5816-4d70-999b-88b8689d36c3.mp3|5[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (트로트 90bpm)_MW07 v4.5+||",
"https://cdn1.suno.ai/55b0453c-d135-447e-86bc-96e3bc19d97d.mp3|5[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (트로트 90bpm)_WM03 v4.5+||",
"https://cdn1.suno.ai/55ff7625-8175-4995-9735-1fea056f9f0f.mp3|5[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (트로트 특유의 비브라토와 벤딩)_MM01 v4.5+||",
"https://cdn1.suno.ai/593a6203-ab8f-4836-99eb-aa256084b1f2.mp3|5[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (트로트, 다소 느린 80bpm)_MW06 v4.5+||",
"https://cdn1.suno.ai/7777289b-1281-4c43-9878-55998645ba57.mp3|6[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (2000년대 일렉트로닉 팝)_W02 v4.5+||",
"https://cdn1.suno.ai/50824a0c-7be5-4e19-8097-60a8d15c1f27.mp3|6[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (가벼운 클래식 크로스오버)_MW03 v4.5+||",
"https://cdn1.suno.ai/02fba269-fab9-4774-b00a-66fd835d7fa2.mp3|6[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (바이올린 드럼)_MW13 v4.5+||",
"https://cdn1.suno.ai/946630ca-0d1c-41bf-8683-d346618f2346.mp3|6[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (바이올린 신스팝)_MW11 v4.5+||",
"https://cdn1.suno.ai/476d94bd-c326-47bb-8801-7bbf372f3d56.mp3|6[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (발라드, 컨트리 음악, 남녀 보컬)_MW18 v4.5+||",
"https://cdn1.suno.ai/3538b5c3-234b-4fe3-b4b7-f17757722def.mp3|6[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (웅장한 서정적인 클래식 스타일)_WM02 v4.5+||",
"https://cdn1.suno.ai/4d74a882-6117-4865-a17c-1defbb43f5aa.mp3|6[백일 축하] 로운에게 보내는 할아머니의 百日 축복 (트로트 특유의 비브라토와 벤딩)_MW23 v4.5+||",
"https://cdn1.suno.ai/b687b145-4b3d-44cd-aeb0-738f7192c4a0.mp3|4[결혼 기념] 로운이와 함께 하는 결혼 4주년 축하해! (7080 포크송, 통기타 타악기)_MW04 v4.5+||",
"https://cdn1.suno.ai/ace19fb7-58cc-4bb0-9f32-4b112fe7df22.mp3|5[결혼 기념] 로운이와 함께 하는 결혼 4주년 축하해! (발라드)_M05 v4.5+||",
"https://cdn1.suno.ai/5590b6a3-0107-4492-a797-be827c075795.mp3|5[결혼 기념] 로운이와 함께 하는 결혼 4주년 축하해! (어쿠스틱 기타)_M01 v4.5+||",
"https://cdn1.suno.ai/5f0782ab-7480-4cb4-aa42-e3f5872f9c26.mp3|5[결혼 기념] 로운이와 함께 하는 결혼 4주년 축하해! (피아노)_M03 v4.5+||",
"https://cdn1.suno.ai/45b3819d-8448-4d87-acdd-d42e7202867a.mp3|5[결혼 기념] 로운이와 함께 하는 결혼 4주년 축하해! (피아노)_M04 v4.5+||",
"https://cdn1.suno.ai/7b1d1ba3-d2ba-48c0-878a-0bb5676a5181.mp3|5[결혼 기념] 로운이와 함께 하는 결혼 4주년 축하해! (베이스 드럼)_M07 v4.5+||",
"https://cdn1.suno.ai/728aa2c3-e798-48cb-b776-8e01c9ae1908.mp3|5[결혼 기념] 로운이와 함께 하는 결혼 4주년 축하해! (바이올린 신스팝)_MW01 v4.5+||",
"https://cdn1.suno.ai/7e46b60d-ac82-4d45-bce1-42db5c4ce298.mp3|5[결혼 기념] 로운이와 함께 하는 결혼 4주년 축하해! (바이올린 신스팝)_MW02 v4.5+||",
"https://cdn1.suno.ai/5b2031d8-f11a-489e-920b-3a6645ea9fb5.mp3|5[결혼 기념] 로운이와 함께 하는 결혼 4주년 축하해! (어쿠스틱 기타)_M02 v4.5+||",
]

song = [
`<table class='box' style="BACKGROUND:white url('./images/dgZzxa6.webp') no-repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>울 엄마의 기구했던 생일</b></font><br><br>

용띠 해 무진년에 오시어<br>
용띠 해 갑진년에 가신..<br>
막내도 같은 띠, 용띠라 하시며<br>
좋아하셨던 나의 어머니!<br><br>

<img src="./images/y3ZpxAB.webp" width=100% title="📷 "><br><br>

울 엄마 생일은 음력 12월 30일.<br>
"올해는 엄마 생일이 없네?"<br>
"어머야! 왜 내 생일이 없니?"<br><br>

<img src="./images/R6GOl4s.webp" width=100% title="📷 "><br><br>

섣달그믐은 늘 오는데<br>
음력 서른 날은 없는 해가 많아요<br>
그래서 이제부터 울 엄마 생일은<br>
무조건 설날 하루 전!<br><br>

<img src="./images/r5RWfQF.webp" width=100% title="📷 "><br><br>

기구했던 엄마의 생일날이기에 <br>
모처럼 찾아온 온전한 올해는 <br>
케이크 들고 재롱 떨려 했는데, <br><br>

<img src="./images/w6cSxyv.webp" width=100% title="📷 "><br><br>

가족들 사진 보면 환하게 웃으시던<br>
그 모습 보고 싶어 애써 준비했는데<br><br>

<img src="./images/QzymRzx.webp" width=100% title="📷 "><br><br>

불과 며칠 남기고, <br>
왜 홀연히 떠나셨나요..<br><br>

<img src="./images/hXEJRly.webp" width=100% title="📷 "><br><br>

부엌에서 과수원으로 분주한 삶에도<br>
세월 따라 손주들 자라는 자리에, <br>
함께 웃던 그 모든 날의 그 모습들.. <br>
사진 속에는 선명하게 살아계시네요~<br><br>

<img src="./images/a1SIJqp.webp" width=100% title="📷 "><br><br><br>


1번 성찬, 2번 덕찬, 3번 승찬! <br>
휴대폰의 무용지물에 가슴 아파졌고,<br><br>

<img src="./images/MPh9L4b.webp" width=100% title="📷 "><br><br>

애지중지하던 통장을 내어주실 때<br>
가슴이 미어졌습니다~<br><br>

<img src="./images/EbzDKiL.webp" width=100% title="📷 "><br><br>

엘리베이터 안,<br>
"엄마! 안녕" 나의 손짓에<br>
맥없이 손 흔들어 주시던 그 모습!<br>
그것이 마지막 인사일 줄이야... 아~~<br><br>

<img src="./images/osWK0ID.webp" width=100% title="📷 "><br><br>

논화리 아버님 모셔온 그 자리, <br>
7층 로얄층에 편히 잠드소서. <br><br>

<img src="./images/4NPx3Lj.webp" width=100% title="📷 "><br><br>

섣달그믐 아닌 좋은 날에<br>
고통 없는 곳으로, <br>
부디 극락 왕생하세요. <br><br>

<img src="./images/yeSYJSQ.webp" width=100% title="📷 "><br><br><br>


아버님! 어머님!<br>
언제나 고마웠습니다!<br><br>

<img src="./images/HBrfxU3.webp" width=100% title="📷 "><br><br>

나의 어머님!<br>
영원히 사랑합니다!<br><br>

<img src="./images/b4GkUZR.webp" width=100% title="📷 "><br><br>

나의 아버님!<br>
영원히 사랑합니다~~~<br><br>

<img src="./images/FzxRBRY.webp" width=100% title="📷 ">
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/bvn2Wa/btsOyojFwNE/oQF6pyZs1UJR5h2oDftYeK/img.webp') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>당신들의 생일을 축하합니다</b></font><br>

사랑하는 아들, 고운 며느리!<br>
오늘 당신들의 생일을 축하합니다~ ☆<br><br>

<img src="./images/EWZIw9U.webp" width=100% title="📷 "><br><br>

두 사람이 함께 걸어가는 길<br>
언제나 행복과 웃음 가득하기를..<br><br>

<img src="./images/LTpQf2J.webp" width=100% title="📷 "><br><br>

생일 축하해요, 나의 소중한 두 사람!<br>
세상 가장 아름다운 당신들을 위해<br>
이 노래를 불러요, 마음을 담아..<br><br>

<img src="./images/Ohsif0H.webp" width=100% title="📷 "><br><br>

늘 건강하고, <br>
늘 사랑하며, <br>
늘 행복하세요~~<br><br>

<img src="./images/DXIveTr.webp" width=100% title="📷 "><br><br>

처음 당신들을 만났던 그날<br>
가슴 벅찬 설렘과 기쁨이었소<br>
어느새 이렇게 훌쩍 자라<br>
나의 든든한 버팀목이 되어주었네요.<br><br>

<img src="./images/lVTDnas.webp" width=100% title="📷 "><br><br>

생일 축하해요, 나의 소중한 두 사람!<br>
세상 가장 아름다운 당신들을 위해<br>
이 노래를 불러요, 마음을 담아..<br><br>

<img src="./images/bjhcrHs.webp" width=100% title="📷 "><br><br>

늘 건강하고, <br>
늘 사랑하며, <br>
늘 행복하세요~~<br><br>

<img src="./images/FlHOxSm.webp" width=100% title="📷 "><br><br>

때로는 힘든 날도 있겠지만<br>
서로를 보듬어주며 이겨내길 바라요.<br><br>

<img src="./images/i8beEJ2.webp" width=100% title="📷 "><br><br>

함께 살아가며 아름다운 추억을<br>
하나하나 만들어가는 당신들이 되기를<br><br>

<img src="./images/K7jiyCV.webp" width=100% title="📷 "><br><br>

생일 축하해요, 나의 소중한 두 사람!<br>
세상 가장 아름다운 당신들을 위해<br>
이 노래를 불러요, 마음을 담아..<br><br>

<img src="./images/0xpSrq1.webp" width=100% title="📷 "><br><br>

늘 건강하고, <br>
늘 사랑하며, <br>
늘 행복하세요~~<br><br>

<img src="./images/xeFSOkP.webp" width=100% title="📷 "><br><br>

다시 한번 생일을 축하하며,<br>
이 기쁜 날, 오래도록 기억되기를..<br><br>

<img src="./images/YxmArdL.webp" width=100% title="📷 "><br><br>

사랑해요. 나의 아들, 나의 며느리!<br>
영원히 축복합니다~~~ ☆<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('http://cfile239.uf.daum.net/original/21085844525FBD3201F5E6') repeat fixed center top" cellpadding='2' width=100%><tr valign=middle><td class='lt'>
<P class='mid2'><font style="display:none"><b>로운이와 함께 하는 결혼 4주년 축하해!</b></font><br>

경진과 휘경, 두 사람의 이야기<br>
사랑으로 엮어가는 4년의 시간<br><br>

<img src="./images/kUlat99.webp" width=100% title="📷 "><br><br>

햇살 닮은 미소로 처음 만난 날<br>
설렘 가득한 눈빛, 운명처럼 이끌렸지<br><br>

<img src="./images/v5vZDhk.webp" width=100% title="📷 "><br><br>

함께 걸어온 발걸음, <br>
때론 힘들 때도 있었지만<br>
서로를 향한 믿음으로 굳건히 지켜왔네<br><br>

<img src="./images/UQNOwIp.webp" width=100% title="📷 "><br><br>

시간은 흘러 4주년, <br>
혁혼의 약속으로 다시 한번<br>
두 사람의 사랑을 세상에 노래하네<br><br>

<img src="./images/ERK2fEG.webp" width=100% title="📷 "><br><br>

경진아, 휘경아, <br>
너희들의 결혼 4주년을 축하한다<br><br>

<img src="./images/j4MLFhw.webp" width=100% title="📷 "><br><br>

함께 웃고 울었던 소중한 기억들<br>
앞으로도 변치 않을 사랑으로<br>
행복 가득한 날들만 만들어가기를..<br><br>

<img src="./images/hBNNkB6.webp" width=100% title="📷 "><br><br>

작년엔 없었던 작은 천사, <br>
로운이가 찾아왔으니<br>
온 세상의 빛이 되어 너희 곁을 지키네<br><br>

<img src="./images/lHgiIHU.webp" width=100% title="📷 "><br><br>

세 식구가 된 너희들의 모습, <br>
얼마나 아름다운지<br>
사랑이 넘치는 가정, 희망이 꽃피는구나<br><br>

<img src="./images/5IqFmEr.webp" width=100% title="📷 "><br><br>

시간은 흘러 4주년, <br>
혁혼의 약속으로 다시 한번<br>
두 사람의 사랑을 세상에 노래하네<br><br>

<img src="./images/rZ5pXQ8.webp" width=100% title="📷 "><br><br>

경진아, 휘경아, <br>
너희들의 결혼 4주년을 축하한다<br><br>

함께 웃고 울었던 소중한 기억들<br>
앞으로도 변치 않을 사랑으로<br>
행복 가득한 날들만 만들어가기를..<br><br>

<img src="./images/pmnJc94.webp" width=100% title="📷 "><br><br>

로운이의 환한 웃음처럼<br>
너희들의 앞날도 늘 밝게 빛나기를<br>
축복의 노래가 끊이지 않기를..<br><br>

<img src="./images/UcHazfA.webp" width=100% title="📷 "><br><br>

경진아, 휘경아, <br>
결혼 4주년을 진심으로 축하한다<br><br>

함께 써 내려갈 수많은 날들<br>
영원한 사랑을 맹세하며<br>
세상 가장 행복한 부부가 되기를..<br><br>

<img src="./images/jDefw8f.webp" width=100% title="📷 "><br><br>

축하한다, 그리고 사랑한다<br>
경진아, 휘경아, 로운아!<br>
영원히 행복하기를…<br><br>

<img src="./images/4CJfg6o.webp" width=100% title="📷 ">
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/sNaVQ/btsOw5MrWui/XGD5nbYNLQJf9kOr9t8nNk/img.webp') repeat fixed center top" cellpadding='2' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>로운에게 보내는 할아머니의 百日 축복</b></font><br>

따스한 햇살처럼 반짝이는 <br>
우리 아가 로운아!<br>
백일의 기쁨이 우리에게 찾아왔구나~<br><br>

<img src="./images/yuKiZb9.webp" width=100% title="📷 "><br><br><br>


작고 여린 손으로 세상을 더듬던 날<br>
우릴 보며 처음으로 웃음 짓던 그날<br>
할아버지 할머니는 매일 기도했단다<br>
건강하게 자라라고, 행복하라고..<br><br>

<img src="./images/5O1kG8i.webp" width=100% title="📷 "><br><br>

무럭무럭 자라나는 너의 모습 볼 때면<br>
가슴 벅찬 감동이 샘솟는구나<br><br>

<img src="./images/VvBn8iq.webp" width=100% title="📷 "><br><br>

세상의 좋은 빛깔이 너에게 향하기를<br>
곱고 이로운 마음으로 꿈을 펼치려무나<br><br>

<img src="./images/NCaFs81.webp" width=100% title="📷 "><br><br><br>


어느새 이렇게 훌쩍 자란 우리 아가야<br>
너의 웃음소리, 집안 가득 채우는구나~<br><br>

<img src="./images/QtXauSh.webp" width=100% title="📷 "><br><br>
<!-- img src='./images/9IbXqwg.webp' width=100% title='📷 로운 고양이 배경'><br><br //-->

축하해, 우리 아가! <br>
백일을 맞은 로운아~~<br>
세상이 준 선물, 가장 소중한 보물<br><br>

<img src="./images/u5wrtdW.webp" width=100% title="📷 "><br><br>

앞으로 펼쳐질 너의 모든 날들을<br>
할아버지 할머니가 언제나 응원할게<br><br>

<img src="./images/LVo2Xkp.webp" width=100% title="📷 "><br><br><br>


때로는 넘어지고 어려울 때도 있겠지만<br>
그럴 때는 우리가 너를 지켜줄게<br><br>

<img src="./images/LUdak2m.webp" width=100% title="📷 "><br><br>

세상에 하나뿐인 너를 사랑하기에<br>
어떤 어려움도 이겨내게 해줄 거야<br><br>

<img src="./images/6RZSB99.webp" width=100% title="📷 "><br><br>

반짝이는 눈빛 속에 호기심 가득한 너<br>
슬기로운 지혜로 이 세상을 배우려무나<br><br>

<img src="./images/9LD9tEn.webp" width=100% title="📷 "><br><br>

할아버지 할머니는 너의 든든한 울타리<br>
언제나 너의 곁에서 힘이 되어 줄 거야<br><br>

<img src="./images/gNaFYxz.webp" width=100% title="📷 "><br><br><br>


어느새 이렇게 훌쩍 자란 우리 아가야<br>
너의 웃음소리, 집안 가득 채우는구나~<br><br>

축하해, 우리 아가! <br>
백일을 맞은 로운아~~<br>
세상이 준 선물, 가장 소중한 보물<br><br>

앞으로 펼쳐질 너의 모든 날들을<br>
할아버지 할머니가 언제나 응원할게<br><br>

<img src="./images/0XHALzA.webp" width=100% title="📷 "><br><br><br>


우리 손자로 우리에게 와주어서<br>
온 세상이 환하게 빛나는 것 같아<br><br>

<img src="./images/LoEZvj1.webp" width=100% title="📷 "><br><br>

감사해, 사랑해! <br>
우리 예쁜 아가 로운아~~<br>
영원히 너의 편이 되어 줄게<br><br>

<img src="./images/2B0rGc7.webp" width=100% title="📷 "><br><br>

축하해, 우리 아가! <br>
백일을 맞은 로운아~~<br>
세상이 준 선물, 가장 소중한 보물<br><br>

앞으로 펼쳐질 너의 모든 날들을<br>
할아버지 할머니가 언제나 응원할게<br><br>

<img src="./images/TYF7sAQ.webp" width=100% title="📷 "><br><br><br>


로운아 사랑한다... <br>
백일을 축하한다...<br><br>

<img src='./images/ONpOhEg.webp' class="fade-in-out" width=100% title='📷 로운 백일 반지'>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('http://cfile211.uf.daum.net/original/255B5044525FBE65234AD3') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>로운에게 보내는 百日 축하</b></font><br>

사랑하는 우리 아가 로운아, <br>
어느새 백일이야<br>
작고 소중한 너의 모습에 <br>
매일매일 감사해<br><br>

<img src="./images/CKzi95t.webp" width=100% title="📷 "><br><br>

까꿍하며 웃는 너의 얼굴, <br>
세상을 다 가진 듯해<br>
반짝이는 두 눈 속으로 <br>
엄마 사랑 가득 보낸다~<br><br>

<img src="./images/t6hhA2e.webp" width=100% title="📷 "><br><br>
<!-- img src='./images/NIbmceM.webp' style="filter: opacity(70%);" width=100% title='📷 로운 50일 기념'><br><br //-->

세상에 태어나줘서 고마워, <br>
우리의 보물<br>
하나, 둘, 셋.. 세어보던 날들이 <br>
꿈만 같아<br><br>

<img src="./images/2u8OJQz.webp" width=100% title="📷 "><br><br>

힘들 때도 있었지만 <br>
너의 미소 보면 힘이 나~<br>
아빠의 넓은 품에서 <br>
언제나 편안하기를..<br><br>

<img src="./images/gEEV9tL.webp" width=100% title="📷 "><br><br><br>


작은 천사 우리 아가 로운아, <br>
세상의 빛이 될 거야<br>
너의 모든 날들이 축복으로 가득하길<br><br>

<img src="./images/jGgSSiD.webp" width=100% title="📷 "><br><br>

백일의 기쁨, 우리 아가 로운아 축하해<br>
사랑으로 너를 감싸 안아줄게<br>
환하게 웃는 너의 모습 그대로<br>
세상 가장 행복한 아이로 자라렴<br><br>

<img src="./images/pTHJhve.webp" width=100% title="📷 "><br><br><br>


꽃보다 예쁜 손자 로운아, <br>
어느덧 백일이라니<br>
할미 가슴엔 늘 네가 있었단다, <br>
사랑한다 로운아!<br><br>

<img src="./images/vXHk5Lc.webp" width=100% title="📷 "><br><br>

배냇저고리 입은 모습이 <br>
어찌나 귀엽던지<br>
무럭무럭 자라는 너의 모습에 <br>
할미는 행복해<br><br>

<img src="./images/Y5ZOghJ.webp" width=100% title="📷 "><br><br><br>


힘찬 기운 받아라, <br>
우리의 자랑스러운 손자<br>
건강하게, 씩씩하게, <br>
지혜롭게 자라다오<br><br>

<img src="./images/FsXNV5t.webp" width=100% title="📷 "><br><br>

언제나 너의 곁엔 <br>
든든한 할아버지 있단다<br>
세상 모든 좋은 것들이 <br>
너에게 향하기를..<br><br>

<img src="./images/RZCKLZQ.webp" width=100% title="📷 "><br><br><br>


작은 새싹, 우리 아가 로운아, <br>
푸른 꿈을 펼치렴<br>
너의 모든 순간이 행복으로 물들기를..<br><br>

<img src="./images/VmS2aUG.webp" width=100% title="📷 "><br><br>

백일의 기쁨, 우리 아가 로운아 축하해<br>
사랑으로 너를 감싸 안아줄게<br><br>

<img src="./images/5nDkGoX.webp" width=100% title="📷 "><br><br>

환하게 웃는 너의 모습 그대로<br>
세상 가장 행복한 아이로 자라렴<br><br>

<img src="./images/c5A0IJb.webp" width=100% title="📷 "><br><br><br>


넘어져도 괜찮아, <br>
다시 일어설 수 있도록<br><br>

<img src="./images/25ihrh0.webp" width=100% title="📷 "><br><br>

늘 곁에서 응원할게, <br>
너의 꿈을 맘껏 펼치렴<br><br>

<img src="./images/k4moqwY.webp" width=100% title="📷 "><br><br>

백일의 기쁨, 우리 아가 로운아 축하해<br>
사랑으로 너를 감싸 안아줄게<br><br>

<img src="./images/fqop708.webp" width=100% title="📷 "><br><br>

환하게 웃는 너의 모습 그대로<br>
세상 가장 행복한 아이로 자라렴<br><br>

<img src="./images/JL1djn5.webp" width=100% title="📷 "><br><br><br>


<!-- img src='./images/RzZNHH8.webp' width=100% title='📷 로운 액자'><br><br //-->

사랑한다, 우리 아가 로운아!<br><br>

언제나 사랑한다. 영원토록...<br><br>

<img src="./images/vvUpnXo.webp" width=100% title="📷 "></font>
</td></tr></table>`,
`<table style="BACKGROUND:#ffff66 url('https://blog.kakaocdn.net/dn/Xj6h3/btsOxjDAXcz/cen6SOE7KJFtvqXrwhQkEk/img.webp') repeat fixed center top" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>까꿍~ 로운아! 탄생 100일을 축하해!</b></font><br>

까꿍 까꿍, 우리 아가 로운아<br>
옹알 옹알, 옹알 대장 로운아<br><br>

<img src="./images/I2OamTB.webp" width=100% title="📷 "><br><br>

축하 축하, 로운이의 백일을..<br>
축복 축복, 로운에게 보낸다~~<br><br>

<img src="./images/0TyLBjz.webp" width=100% title="📷 "><br><br><br>


조물 조물, 손가락이 귀여워<br><br>

<img src="./images/stmYyjm.webp" width=100% title="📷 "><br><br>

꼬물 꼬물, 발가락도 예뻐라<br><br>

<img src="./images/bFQi2Ud.webp" width=100% title="📷 "><br><br>

토실 토실, 복스러운 종아리<br><br>

<img src="./images/5jqisiG.webp" width=100% title="📷 "><br><br>

씰룩 씰룩, 엉덩이가 통통해<br><br>

<img src="./images/BiiH3ig.webp" width=100% title="📷 "><br><br><br>


똘망 똘망, 사랑스런 눈망울<br><br>

<img src="./images/HPINsjE.webp" width=100% title="📷 "><br><br>

포동 포동, 볼퉁이도 예뻐요<br><br>

<img src="./images/mKZoJLD.webp" width=100% title="📷 "><br><br>

복슬 복슬, 머릿결이 빛나고<br><br>

<img src="./images/HKjEcXw.webp" width=100% title="📷 "><br><br>

새근 새근, 잠든 모습 상큼해<br><br>

<img src="./images/WrDndsw.webp" width=100% title="📷 "><br><br><br>


무럭 무럭, 건강하게 자라라<br><br>

<img src="./images/GyQiUPb.webp" width=100% title="📷 "><br><br>

불끈 불끈, 씩씩하게 힘내라<br><br>

<img src="./images/sSXqWuw.webp" width=100% title="📷 "><br><br>

듬뿍 듬뿍, 사랑으로 나눠라<br><br>

<img src="./images/BXMLifn.webp" width=100% title="📷 "><br><br>

가득 가득, 행복으로 채워라<br><br>

<img src="./images/qGLH5xp.webp" width=100% title="📷 "><br><br><br>


로운 로운, 슬기 로운 로운아<br><br>

<img src="./images/lBQr7DU.webp" width=100% title="📷 "><br><br>

크게 크게, 너의 꿈을 키워라<br><br>

<img src="./images/sxzHJVC.webp" width=100% title="📷 "><br><br>

높게 높게, 너의 이상 펼쳐라<br><br>

<img src="./images/Qx6cAxv.webp" width=100% title="📷 "><br><br>

반짝 반짝, 우리 보배 빛나라<br><br>

<img src="./images/KArcT3H.webp" width=100% title="📷 "><br><br><br>


널찍한 아빠의 가슴팍에 안기어<br>
귀여운 옹알이로 응답해 준 로운아~~<br>
로운이 아빠라서 자랑스러워<br><br>

<img src="./images/KpfJkxG.webp" width=100% title="📷 "><br><br>

어느 날 목 가누며, 앙증스런 얼굴로<br>
엄마에게 천사 미소 보내준 로운아~~<br>
로운이 엄마라서 너무 행복해<br><br>

<img src="./images/7LDu0ez.webp" width=100% title="📷 "><br><br><br>
<!-- img src='./images/GYGm9Ct.webp' style='border-radius: 10%;' width=100% title='📷 로운 조약돌 배경'><br><br><br //-->


뭉클 뭉클, 엄마 아빠 가슴이<br>
몽글 몽글, 피어 나는 감격에..<br><br>

<img src="./images/grYeyRg.webp" width=100% title="📷 "><br><br>

백일 백일, 축하한다 로운아<br>
로운 로운, 축하한다 백일을..<br><br>

<img src="./images/boMLSUM.webp" width=100% title="📷 "><br><br>

거듭 거듭, 축하한다 백일을..<br>
다시 다시, 축하한다 백일을..<br>
자꾸 자꾸, 축하한다 백일을..<br><br>

<img src="./images/qJGp8H2.webp" width=100% title="📷 "><br><br>

다시 한번 축하한다. <br>
로운이의 백일을~~~<br>
</td></tr></table>`,
`<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/blyuoe/btsN2b0gXx6/iDOSuLAnhr8fXK3p4dhZv0/img.webp') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>할아버지 할머니가 보내는 로운이의 축복</b></font><br>

작은 심장이 두근거려요<br>
로운이의 세상이 시작되었네<br><br>

<img src="./images/7N1Loi6.webp" width=100% title="📷 "><br><br>

휘경아 경진아 애썼구나<br>
사랑스런 아가를 품에 안으니<br>
벅찬 기쁨에 눈물이 핑 돌아<br><br>

<img src="./images/EeVXQCK.webp" width=100% title="📷 "><br><br>

로운아, 할아버지 할머니는<br>
너의 웃음소리에 힘이 솟는다<br>
반짝이는 눈망울, 우리의 별이구나<br><br>

<img src="./images/If1WoyD.webp" width=100% title="📷 "><br><br>

로운 로운 우리 아가 로운이는<br>
온 세상 축복 속에 태어났어요<br>
휘경아 경진아 마음껏 펼쳐라<br>
희망과 사랑으로 가득한 미래를...<br><br>

<img src="./images/3zCDcyI.webp" width=100% title="📷 "><br><br>

새근새근 잠든 모습이 천사 같아<br>
아픔 없이 건강하게 자라려무나<br>
지혜롭고 씩씩한 아이로...<br><br>

<img src="./images/i3i9SFs.webp" width=100% title="📷 "><br><br>

엄마와 아빠의 사랑 듬뿍 받으며<br>
세상 모든 아름다움을 배우려무나<br>
할아버지 할머니가 언제나 지켜줄게<br><br>

<img src="./images/1AYauHv.webp" width=100% title="📷 "><br><br>

로운 로운 우리 아가 로운이는<br>
온 세상 축복 속에 태어났어요<br>
휘경아 경진아 마음껏 펼쳐라<br>
희망과 사랑으로 가득한 미래를...<br><br>

작은 발걸음 하나하나에<br>
소중한 추억 만들어가려무나<br>
함께 노래하고 함께 웃으며...<br><br>

<img src="./images/1iprl1v.webp" width=100% title="📷 "><br><br>

로운 로운 우리 아가 로운이는<br>
온 세상 축복 속에 태어났어요<br>
휘경아 경진아 마음껏 펼쳐라<br>
희망과 사랑으로 가득한 미래를...<br><br>

<img src="./images/iT44NA2.webp" width=100% title="📷 "><br><br>

로운아, 사랑한다<br>
우리 아가 로운아, 영원토록...<br><br>

<img src="./images/9udPFb5.webp" width=100% title="📷 "><br>
</td></tr></table>`,
`<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/RYT3z/btsN1SzNxf5/FvWnM0omExZiWsUAarjrb0/img.jpg') repeat fixed center top\" cellpadding='2' width=100%><tr valign=middle><td class='lt'>\
<P class='mid2'><font style="display:none"><b>로운에게 보내는 엄마 아빠의 축복</b></font><br>

사랑스러운 우리 아기, 로운아<br>
건강하게 우리에게 와줘서 고마워<br>
온 세상이 너의 탄생을 축하해<br>
모두가 기뻐하며 축복을 보내<br><br>

<img src="./images/HtdjZVY.webp" width=100% title="📷 "><br><br>

작은 손짓, 작은 발길이 감격스러워<br>
너의 웃음, 너의 울음에 가슴이 벅차<br>
바다 색, 하늘 빛깔을 닮은 로운아<br>
너는 우리에게 소중한 기적의 선물이야 <br><br>

<img src="./images/cGK5NPm.webp" width=100% title="📷 "><br><br>

로운이의 꿈, 펼쳐질 세상이 온 거야<br>
햇살이 눈부시고 뭉게구름이 피어나<br>
너를 안을 수 있어서 너무 기뻐<br>
너와 마주할 수 있어, 너무 행복해<br><br>

<img src="./images/FzMnmM7.webp" width=100% title="📷 "><br><br>

튼튼하고 건강하게 자랄 수 있도록<br>
항상 든든하게 너의 곁에 서 있을게<br>
언제나 사랑으로 너의 모습 바라볼게<br>
모든 순간, 모든 날이 행복하기를...<br><br>

<img src="./images/K38TMY9.webp" width=100% title="📷 "><br><br>

로운이의 미래를 함께 걸을 거야<br>
희망을 더 크게, 키워줄 거야<br>
사랑스런 눈빛으로 세상을 보고<br>
사랑 가득한 마음으로 살 수 있도록...<br><br>

<img src="./images/1RPv5KP.webp" width=100% title="📷 "><br><br>

로운이의 꿈, 우리가 키워줄게<br>
로운이의 길, 우리가 밝혀줄게<br>
엄마 품에서 네 꿈이 피어나고<br>
아빠 품에선 그 꿈이 자랄 거야<br><br>

<img src="./images/oWexNvE.webp" width=100% title="📷 "><br><br>

로운아, 사랑해<br>
이 세상에 빛으로 와줘서 고마워<br>
너는 우리 삶에서<br>
가장 찬란한 봄날의 시작이야<br><br>

<img src="./images/3zZ9lUG.webp" width=100% title="📷 ">
</td></tr></table>`,
`<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/nxO4z/btsN2oZm5xw/qITmE0LZ1xxbTLffYrjtmk/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>이 세상 이름, 로운에게</b></font><br>

파랑아, <br>
웃으면서 우리 곁에 와줘서 고마워<br><br><font color='black'>

이제 세상에서 <br>
너를 부를 이름이 생겼구나<br><br>

여울 로, 높을 운— <br>
맑고 멋진 이름이로다<br><br>

로운아, 로운아, <br>
자꾸만 불러보고 싶구나~<br><br>

<img src="./images/R4shAhl.webp" width=100% title="📷 "><br><br><br>


세차게 흐르는 여울처럼 <br>
씩씩한 너 되기를<br><br>

<img src="./images/S1FSwrY.webp" width=100% title="📷 "><br><br>

하늘을 향해 꿈을 펼칠 <br>
높을 운의 아이야<br><br>

<img src="./images/q5lnutM.webp" width=100% title="📷 "><br><br>

이로운 마음, 슬기로운 눈빛으로<br>
이 세상에 웃음과 사랑 나누어 주기를<br><br>

<img src="./images/thHpvTc.webp" width=100% title="📷 "><br><br><br>


로운아~ 귀엽게 잠든 너를 바라보며<br>
조용히 너의 이름을 속삭여 본다<br><br>

<img src="./images/S5Xs5D3.webp" width=100% title="📷 "><br><br>

아픔 없이 건강하게 자라주기를<br>
희망과 사랑이 가득한 아이 되기를<br><br>

<img src="./images/ntZOhpU.webp" width=100% title="📷 "><br><br><br>


로운이라는 이름에 <br>
축복이 담겨 있단다<br><br>

할아버지 목소리에도, <br>
할머니 미소 속에도<br><br>

<img src="./images/kSWdNrd.webp" width=100% title="📷 "><br><br>

너의 이름은 기쁨, 너의 이름은 약속<br>
언제나 이로운 빛으로 <br>
세상을 밝혀 주기를..<br><br>

<img src="./images/2wMtjsx.webp" width=100% title="📷 "><br><br><br>


파랑으로 온 너, <br>
로운이 되어 피어났구나<br><br>

<img src="./images/oaR84S0.webp" width=100% title="📷 "><br><br>

햇살 같은 아이야, 우리 모두의 봄날<br><br>

<img src="./images/7ki5Ryn.webp" width=100% title="📷 "><br><br>

바람결에도, 나뭇잎 위에도<br>
로운이라는 이름이 <br>
아름답게 퍼져 간다<br><br>

<img src="./images/4a5d84L.webp" width=100% title="📷 "><br><br><br>


로운아~ 사랑스러운 우리 손주야<br>
그 이름 또 불러보고 싶구나, 로운아~<br><br>

<img src="./images/nXM7VDr.webp" width=100% title="📷 "><br><br>

자랑스럽고 슬기로운 그 이름<br>
이로운 이 세상에 <br>
널리 널리 빛날지어라<br><br>

<img src="./images/cK145yi.webp" width=100% title="📷 "><br><br><br>


로운아, 사랑해<br>
너의 이름을 마음에 새긴다..<br><br>

<img src="./images/dtGPA8q.webp" width=100% title="📷 "><br><br>

이 세상 어디서든 그 이름으로<br>
밝게, 건강하게 살아가기를…<br><br>

<img src="./images/cmZ7XGP.webp" width=100% title="📷 ">
</td></tr></table>`,
`<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/8on3l/btsOwFtmEEn/HSYC0Gfmz4UIyGihvrnyk1/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font color='white'><font style="display:none"><b>로운에게 보내는 할아머니의 축복</b></font><br>

건강하게 우리 곁에 와줘서 고마워, <br>
파랑아!<br>
드디어 이 세상이 부를 <br>
너의 이름 지어졌네<br><br>

<img src="./images/ZYkUlCt.webp" width=100% title="📷 "><br><br>

여울 로, 높을 운, <br>
참으로 멋진 그 이름, 로운아!<br>
새로운 너의 이름 <br>
자꾸만 불러보고 싶구나<br><br>

<img src="./images/3ZCcPQj.webp" width=100% title="📷 "><br><br>

세찬 여울처럼 씩씩한 기백으로<br>
높을 운답게 꿈과 이상을 높이 펼쳐라<br><br>

<img src="./images/5fVb7n7.webp" width=100% title="📷 "><br><br>

슬기로운 눈길로 세상을 바라보고<br>
이로운 마음으로 행복을 나누려무나<br><br>

<img src="./images/8GxZ9g9.webp" width=100% title="📷 "><br><br><br>


로운아~<br>
높이 날아라 자유롭게, <br>
용감한 기상으로 세상을 향해...<br><br>

<img src="./images/aRrCQ7j.webp" width=100% title="📷 "><br><br>

긍정적인 너의 삶이 <br>
언제나 행복하기를..<br>
모든 날 모든 순간을 우리가 축복할게<br><br>

<img src="./images/8mtHRwJ.webp" width=100% title="📷 "><br><br>

새근새근 귀엽게 잠든 <br>
네 모습 지켜보면서<br>
조용히 너의 이름을 불러본다, <br>
로운아~~<br><br>

<img src="./images/hZehBFz.webp" width=100% title="📷 "><br><br>

아픔 없이 밝고 건강하게 자라려무나<br>
희망과 사랑으로 가득한 아이로...<br><br>

<img src="./images/1C1DA4e.webp" width=100% title="📷 "><br><br><br>


로운아~<br>
높이 날아라 자유롭게, <br>
용감한 기상으로 세상을 향해...<br><br>

긍정적인 너의 삶이 <br>
언제나 행복하기를<br>
모든 날 모든 순간을 우리가 축복할게<br><br>

소중하고 사랑스러운 우리 손주, <br>
로운아!<br>
그 이름 또 한 번 불러본다, 로운아~~<br><br>

<img src="./images/Upcuqck.webp" width=100% title="📷 "><br><br>

자랑스럽고 슬기로운 그 이름,<br>
이로운 이 세상에 <br>
널리 널리 빛날지어라~~~ ☆<br><br>

<img src="./images/JA6ERre.webp" width=100% title="📷 ">
</td></tr></table>`,
`<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/ceHzN3/btsOv8v4VZh/45ektZI7qUwePeiyzhU6e0/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>로운아, 빛나라~~~ ☆</b></font><br>

파랑 빛 미소로 우리 곁에 찾아온 너<br><br>

<img src="./images/tAwxtkd.webp" width=100% title="📷 "><br><br>

새로운 세상 속에서 첫걸음 내딛네<br><br>

<img src="./images/g2qtiQc.webp" width=100% title="📷 "><br><br>

여울처럼 힘차게, 바람처럼 자유롭게<br><br>

<img src="./images/RFQtFrP.webp" width=100% title="📷 "><br><br>

높은 하늘 향해 네 꿈을 펼쳐보렴..<br><br>

<img src="./images/8Goutkc.webp" width=100% title="📷 "><br><br><br>


로운아, 빛나라~ 밝은 별처럼..<br><br>

<img src="./images/8NTN2Lu.webp" width=100% title="📷 "><br><br>

슬기로운 마음으로 세상을 품으려무나<br><br>

<img src="./images/Zc44taZ.webp" width=100% title="📷 "><br><br>

이로운 사랑으로 모두를 감싸며<br><br>

<img src="./images/6R64lif.webp" width=100% title="📷 "><br><br>

우리 곁에서 소중하게 피어나렴..<br><br>

<img src="./images/LuPOdas.webp" width=100% title="📷 "><br><br><br>


밤하늘 속 작은 별이 빛을 잃지 않듯<br>
네 이름 속 희망도 언제나 반짝일 거야<br><br>

<img src="./images/WeKtPb3.webp" width=100% title="📷 "><br><br>

기쁜 날도, 힘든 날도, 너를 불러줄게<br>
너의 이름 속에 담긴 사랑을 기억하며<br><br>

<img src="./images/x66Kvon.webp" width=100% title="📷 "><br><br><br>


로운아, 빛나라~ 밝은 별처럼..<br>
슬기로운 마음으로 세상을 품으려무나<br>
이로운 사랑으로 모두를 감싸며<br>
우리 곁에서 소중하게 피어나렴..<br><br><br>


높은 곳에서 밝게 빛나는 너<br>
세상 어디서나 그 이름 울려 퍼지기를<br><br>

<img src="./images/uAy9R12.webp" width=100% title="📷 "><br><br>

로운아, 너의 이름처럼<br>
우리 곁에 기쁨을 안겨주기를..<br><br>

<img src="./images/ZeTLLqZ.webp" width=100% title="📷 "><br><br><br>


로운아, 빛나라~ 밝은 별처럼..<br>
이로운 세상으로 너의 사랑을 전하렴<br><br>

<img src="./images/UCYse3y.webp" width=100% title="📷 "><br><br>

슬기로운 마음으로 모두를 감싸며<br>
소중한 너의 빛을 <br>
영원히 간직하려무나~~~ ☆<br><br></font>

<img src="./images/KO29JPb.webp" width=100% title="📷 ">
</td></tr></table>`,
`<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/wBbix/btsN1lbKcry/EuTYJsBqFw6IGoAtF8uG6K/img.webp') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>할아버지 할머니의 사랑을, 로운에게</b></font><br>

로운아, 사랑스러운 우리 아가야<br>
우리 곁에 와줘서 정말 고마워<br>
엄마와 아빠를 닮은 너의 얼굴 보면<br>
우리는 눈물이 나도록 감사해<br><br>

<img src="./images/5N3DU2Z.webp" width=100% title="📷 "><br><br>

로운이 엄마, 휘경아<br>
로운이 아빠, 경진아<br>
너희 둘의 사랑이 씨앗이 되었고<br>
이제 결실을 맺은 기적을 축하해<br><br>

<img src="./images/7ARphGE.webp" width=100% title="📷 "><br><br>

둘이 만들었던 사랑과 믿음으로<br>
지나온 시간들이 열매를 맺었구나<br>
이제는 셋이서 더 큰 사랑으로<br>
더 깊고 큰 행복을 만들어가기를..<br><br>

<img src="./images/boaZhtl.webp" width=100% title="📷 "><br><br>

로운아, 할아버지 할머니는 정말 좋아<br>
너를 안을 수 있어서 너무 행복해<br>
뛰어노는 너의 모습 상상만 해도<br>
가슴이 벅차서 웃음이 그치지 않아<br><br>

<img src="./images/AX82Zno.webp" width=100% title="📷 "><br><br>

사랑스런 눈빛으로 세상을 보고<br>
사랑 가득한 마음으로 자라나는<br>
너의 반듯한 모습을 지켜보며<br>
우리의 행복도 더 커져갈 거야<br><br>

<img src="./images/kavz7CV.webp" width=100% title="📷 "><br><br>

로운이의 희망, 우리가 키워줄게<br>
로운이의 소원, 우리도 기도할게<br>
맑은 마음으로 네 꿈을 피우고<br>
힘찬 기백으로 그 꿈을 펼쳐라<br><br>

<img src="./images/3106rH7.webp" width=100% title="📷 "><br><br>

로운아, 이 세상에 와줘서 고마워<br>
우리에게 너는 세상 가장 큰 기쁨이야<br>
큰 사랑 가득 담긴 이 노래처럼<br>
언제나 너를 축복할게<br><br>

<img src="./images/QaMjqze.webp" width=100% title="📷 "><br><br>

로운아, 사랑해..<br>
언제나 너의 편이 되어줄게<br>
우리의 마음을 다하여 너를 응원할게, <br>
언제까지나 영원토록...<br><br>

<img src="./images/k0atV2k.webp" width=100% title="📷 ">
</td></tr></table>`,
`<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/cNRdEW/btsN2lnXfqg/4hhAemVBwUY4WVniGa8NpK/img.webp') repeat fixed left top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>예쁜 이름 로운아, 축하해!</b></font><br>

파랑~, 고운 빛깔 품고 온 아가<br><br>

<img src="./images/y0RXe7m.webp" width=100% title="📷 "><br><br><font color='black'>

로운~, 예쁜 이름 세상에 빛나네<br><br>

<img src="./images/zFSzx4N.webp" width=100% title="📷 "><br><br><br>


세찬 여울처럼 씩씩하게 자라렴<br><br>

<img src="./images/30L0KZN.webp" width=100% title="📷 "><br><br>

가슴 벅찬 꿈을 향해 나아가렴<br><br>

<img src="./images/D74HaRi.webp" width=100% title="📷 "><br><br><br>


로운아, 축복 가득한 너의 길에<br>
슬기롭고 이로운 빛을 더하려무나<br><br>

<img src="./images/JjZEmQA.webp" width=100% title="📷 "><br><br>

높은 뜻 펼쳐서 밝게 빛나는<br>
사랑스러운 아가, 우리 로운아<br><br>

<img src="./images/1dC47Q0.webp" width=100% title="📷 "><br><br>

높을 '운'처럼 꿈을 높이 펼치고<br>
이 세상 가득 사랑을 채워주렴<br><br>

<img src="./images/cmAcYDy.webp" width=100% title="📷 "><br><br>

슬기로운 마음으로 세상을 배우고<br>
이로운 손길로 행복을 만들어가려무나<br><br>

<img src="./images/Utg5Flc.webp" width=100% title="📷 "><br><br><br>


로운아, 축복 가득한 너의 길에<br>
슬기롭고 이로운 빛을 더하려무나<br><br>

높은 뜻 펼쳐서 밝게 빛나는<br>
사랑스러운 아가, 우리 로운아<br><br>

<img src="./images/rG12wI9.webp" width=100% title="📷 "><br><br>

때로는 힘겨운 날도 있겠지만<br><br>

<img src="./images/h1RQJ8f.webp" width=100% title="📷 "><br><br>

넘어져도 괜찮아, <br>
다시 일어설 수 있으니까<br><br>

<img src="./images/u95Dusi.webp" width=100% title="📷 "><br><br>

로운아, 축복 가득한 너의 길에<br>
슬기롭고 이로운 빛을 더하려무나<br>
높은 뜻 펼쳐서 밝게 빛나는<br>
사랑스러운 아가, 우리 로운아<br><br>

<img src="./images/nUzb3lq.webp" width=100% title="📷 "><br><br>

밝고 건강하게, 로운아<br>
사랑 가득하게, 로운아<br><br>

<img src="./images/sX5SYz7.webp" width=100% title="📷 "><br><br>

언제나 응원할게<br>
모든 순간, 너의 모든 날들을...<br><br>

<img src="./images/HZt3zSk.webp" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#ffffcc repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt04_4'>
<P class='mid'><font style="display:none"><b>할아버지 할머니가 보내는 파랑이의 축복</b></font><br>

작은 심장이 두근거려요<br>
파랑이의 세상이 시작되었네<br><br>

<img src="./images/EjOLdak.webp" width=100% title="📷 "><br><br>

휘경아 경진아 애썼구나<br>
사랑스런 아가를 품에 안으니<br>
벅찬 기쁨에 눈물이 핑 돌아<br><br>

<img src="./images/CJdzfoB.webp" width=100% title="📷 "><br><br>

파랑아, 할아버지 할머니는<br>
너의 웃음소리에 힘이 솟는다<br>
반짝이는 눈망울, 우리의 별이구나<br><br>

<img src="./images/i9ngBef.webp" width=100% title="📷 "><br><br>

파랑 파랑 우리 아가 파랑이는<br>
온 세상 축복 속에 태어났어요<br>
휘경아 경진아 마음껏 펼쳐라<br>
희망과 사랑으로 가득한 미래를...<br><br>

<img src="./images/GjU1AXU.webp" width=100% title="📷 "><br><br>

새근새근 잠든 모습이 천사 같아<br>
아픔 없이 건강하게 자라려무나<br>
지혜롭고 씩씩한 아이로...<br><br>

<img src="./images/kgrjKk8.webp" width=100% title="📷 "><br><br>

엄마와 아빠의 사랑 듬뿍 받으며<br>
세상 모든 아름다움을 배우려무나<br>
할아버지 할머니가 언제나 지켜줄게<br><br>

<img src="./images/ftvh2bt.webp" width=100% title="📷 "><br><br>

파랑 파랑 우리 아가 파랑이는<br>
온 세상 축복 속에 태어났어요<br>
휘경아 경진아 마음껏 펼쳐라<br>
희망과 사랑으로 가득한 미래를...<br><br>

<img src="./images/mF2tzCM.webp" width=100% title="📷 "><br><br>

작은 발걸음 하나하나에<br>
소중한 추억 만들어가려무나<br>
함께 노래하고 함께 웃으며...<br><br>

<img src="./images/ZctEmq3.webp" width=100% title="📷 "><br><br>

파랑 파랑 우리 아가 파랑이는<br>
온 세상 축복 속에 태어났어요<br>
휘경아 경진아 마음껏 펼쳐라<br>
희망과 사랑으로 가득한 미래를...<br><br>

<img src="./images/L3rAcTO.webp" width=100% title="📷 "><br><br>

파랑아, 사랑한다<br>
우리 아가 파랑아, 영원토록...<br><br>

<img src="./images/zLvWsgv.webp" width=100% title="📷 ">
</td></tr></table>`,
`<table class='box' style=\"BACKGROUND:#ffff66 url('https://blog.kakaocdn.net/dn/c1zh1C/btsOxjjjhOy/0EKEpY3Gqm7nDaYqlwlyuk/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>나레이션 : 할아버지 할머니의 사랑을, 파랑에게</b></font><br>

<font color='#FF5722'>[Intro Narration 할아버지] </font><br><br>

파랑아! <br>
이 할아버지는 네가 태어난다는 소식을 들었을 때, 가슴이 뭉클했단다.  <br><br>

그리고 눈물이 핑 돌 정도로 감격스러웠어. 너는 우리 가족에게 아주 큰 기쁨이란다.  <br><br>

엄마와 아빠가 함께 걸어온 사랑의 시간이, 이제 너라는 선물로 찾아온 거지<br><br>

<img src="./images/6GPajoX.webp" width=100% title="📷 "><br><br>

할아버지는 네가 건강하게 자라고,  <br>
밝은 웃음으로 세상을 가득 채우길 바란단다.  <br><br>

언제나 네 곁을 지켜줄게.<br>
사랑한다, 파랑아.<br><br>

<img src="./images/wlL9d4O.webp" width=100% title="📷 "><br><br><br>

<!-- img src='./images/RCNQ4sG.webp' width=100% title='📷 로운 03'><br><br><br //-->


[노래]<br><br>

파랑아, 사랑스러운 우리 아가야<br>
우리 곁에 와줘서 정말 고마워<br>
엄마와 아빠를 닮은 너의 얼굴 보면<br>
우리는 눈물이 나도록 감사해<br><br>

<img src="./images/2k7huWN.webp" width=100% title="📷 "><br><br>

파랑이 엄마, 휘경아<br>
파랑이 아빠, 경진아<br>
너희 둘의 사랑이 씨앗이 되었고<br>
이제는 결실이 된 기적을 축하해<br><br>

<img src="./images/T2GtXMI.webp" width=100% title="📷 "><br><br>

서로 아껴주던 그날들을 기억해<br>
함께한 시간들이 열매를 맺었구나<br>
이제는 셋이서 더 큰 사랑으로<br>
더 깊고 큰 행복을 만들어가기를...<br><br>

<img src="./images/4MpQ4uO.webp" width=100% title="📷 "><br><br>

파랑아, 할아버지 할머니는 좋아<br>
너를 안을 수 있어서 너무 행복해<br><br>

<img src="./images/MtReWQX.webp" width=100% title="📷 "><br><br>

뛰어노는 너의 모습 상상만 해도<br>
가슴이 벅차고 웃음이 멈추질 않아<br><br>

<img src="./images/xMH81sQ.webp" width=100% title="📷 "><br><br>

사랑스런 눈빛으로 세상을 보고<br>
사랑 가득한 마음으로 자라나는<br>
너의 반듯한 모습 지켜보며<br>
우리의 행복도 더 커져갈 거야<br><br>

<img src="./images/j9xmKYf.webp" width=100% title="📷 "><br><br>

파랑이의 희망, 우리가 키워줄게<br>
파랑이의 소원, 우리도 기도할게<br>
맑은 마음으로 네 꿈을 피우고<br>
힘찬 기백으로 그 꿈을 펼쳐라<br><br>

<img src="./images/0kbqYoU.webp" width=100% title="📷 "><br><br>

파랑아, 이 세상에 와줘서 고마워<br>
우리에게 너는 세상 가장 큰 기쁨이야<br>
큰 사랑 가득 담긴 이 노래처럼<br>
언제나 너를 축복할게<br><br>

<img src="./images/iuJfbWo.webp" width=100% title="📷 "><br><br>

파랑아, 사랑해..<br>
언제나 너의 편이 되어줄게<br>
우리의 마음을 다하여<br>
너를 응원할게, 영원토록...<br><br>

<img src="./images/a9I286V.webp" width=100% title="📷 "><br><br><br>


<font color='#FF5722'>[Outro Narration 할머니] </font><br><br>

파랑아! 사랑스러운 우리 손자야.  <br><br>

네가 엄마 뱃속에 있을 때부터,  <br>
할머니는 매일, 네가 태어날 날을 기다렸단다.  <br><br>

너의 작은 숨결 하나, 작은 웃음 하나.  <br>
그 모든 게, 우리에게는 말로 다 못할 기쁨이란다.  <br><br>

<img src="./images/k0Hlv97.webp" width=100% title="📷 "><br><br>

너를 만나게 돼서, 정말 고맙구나.  <br>
앞으로 네 삶이, 사랑으로 가득하길, 할머니는 늘 축복할게.  <br><br>

사랑한다, 파랑아.  <br>
할머니는 언제나, 네 편이야.<br><br>

<img src="./images/7rmGpfj.webp" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#ccccff repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>할아버지 할머니의 사랑을, 파랑에게</b></font><br>

파랑아, 사랑스러운 우리 아가야<br>
우리 곁에 와줘서 정말 고마워<br>
엄마와 아빠를 닮은 너의 얼굴 보면<br>
우리는 눈물이 나도록 감사해<br><br>

<img src="./images/2k7huWN.webp" width=100% title="📷 "><br><br>

파랑이 엄마, 휘경아<br>
파랑이 아빠, 경진아<br>
너희 둘의 사랑이 씨앗이 되었고<br>
이제는 결실이 된 기적을 축하해<br><br>

<img src="./images/T2GtXMI.webp" width=100% title="📷 "><br><br>

서로 아껴주던 그날들을 기억해<br>
함께한 시간들이 열매를 맺었구나<br>
이제는 셋이서 더 큰 사랑으로<br>
더 깊고 큰 행복을 만들어가기를...<br><br>

<img src="./images/4MpQ4uO.webp" width=100% title="📷 "><br><br>

파랑아, 할아버지 할머니는 좋아<br>
너를 안을 수 있어서 너무 행복해<br><br>

<img src="./images/MtReWQX.webp" width=100% title="📷 "><br><br>

뛰어노는 너의 모습 상상만 해도<br>
가슴이 벅차고 웃음이 멈추질 않아<br><br>

<img src="./images/xMH81sQ.webp" width=100% title="📷 "><br><br>

사랑스런 눈빛으로 세상을 보고<br>
사랑 가득한 마음으로 자라나는<br>
너의 반듯한 모습 지켜보며<br>
우리의 행복도 더 커져갈 거야<br><br>

<img src="./images/j9xmKYf.webp" width=100% title="📷 "><br><br>

파랑이의 희망, 우리가 키워줄게<br>
파랑이의 소원, 우리도 기도할게<br>
맑은 마음으로 네 꿈을 피우고<br>
힘찬 기백으로 그 꿈을 펼쳐라<br><br>

<img src="./images/0kbqYoU.webp" width=100% title="📷 "><br><br>

파랑아, 이 세상에 와줘서 고마워<br>
우리에게 너는 세상 가장 큰 기쁨이야<br>
큰 사랑 가득 담긴 이 노래처럼<br>
언제나 너를 축복할게<br><br>

<img src="./images/iuJfbWo.webp" width=100% title="📷 "><br><br>

파랑아, 사랑해..<br>
언제나 너의 편이 되어줄게<br>
우리의 마음을 다하여<br>
너를 응원할게, 영원토록...<br><br>

<img src="./images/a9I286V.webp" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#ccffff repeat fixed left top;' cellpadding='2' width=100%><tr valign=middle><td class='lt04_1'>
<P class='mid'><font style="display:none"><b>파랑이에게 보내는 엄마 아빠의 축복</b></font><br>

사랑스러운 우리 아기, 파랑아<br>
건강하게 우리에게 와줘서 고마워<br>
온 세상이 너의 탄생을 축하해<br>
모두가 기뻐하며 축복을 보내<br><br>

<img src="./images/50DKNy2.webp" width=100% title="📷 "><br><br>

작은 손짓, 작은 발길이 감격스러워<br>
너의 웃음, 너의 울음에 가슴이 벅차<br>
바다 색, 하늘 빛깔 닮은 파랑아<br>
너는 우리에게 소중한 기적의 선물이야 <br><br>

<img src="./images/57LKuaT.webp" width=100% title="📷 "><br><br>

파랑이의 꿈, 펼쳐질 세상이 온 거야<br>
햇살이 눈부시고 뭉게구름이 피어나<br>
너를 안을 수 있어서 너무 기뻐<br>
너와 마주할 수 있어, 너무 행복해<br><br>

<img src="./images/lR4M35l.webp" width=100% title="📷 "><br><br>

튼튼하고 건강하게 자랄 수 있도록<br>
항상 든든하게 너의 곁에 서 있을게<br>
언제나 사랑으로 너의 모습 바라볼게<br>
모든 순간, 모든 날이 행복하기를...<br><br>

<img src="./images/M1jCzc6.webp" width=100% title="📷 "><br><br>

파랑이의 미래를 함께 걸을 거야<br>
희망을 더 크게, 키워줄 거야<br>
사랑스런 눈빛으로 세상을 보고<br>
사랑 가득한 마음으로 살 수 있도록...<br><br>

<img src="./images/OXDEOFm.webp" width=100% title="📷 "><br><br>

파랑이의 꿈, 우리가 키워줄게<br>
파랑이의 길, 우리가 밝혀줄게<br>
엄마 품에서 네 꿈이 피어나고<br>
아빠 품에선 그 꿈이 자랄 거야<br><br>

<img src="./images/1661ojP.webp" width=100% title="📷 "><br><br>

파랑아, 사랑해<br>
이 세상에 빛으로 와줘서 고마워<br>
너는 우리 삶에서<br>
가장 찬란한 봄날의 시작이야<br><br>

<img src="./images/2yfNUH1.webp" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#99ffff url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt03'>
<P class='mid'><font style="display:none"><b>파랑아, 우리 곁에 올 그날까지</b></font><br>

조용한 밤, 너를 떠올려  <br>
아직 만나지 못한 너의 미소  <br>
작은 심장 두근대는 소리  <br>
우릴 향한 사랑의 시작  <br><br>

<img src="./images/SRJ3uC7.webp" width=100% title="📷 "><br><br>

파랑아, 너는 우리 꿈이야  <br>
하루하루 너를 그리며 살아  <br>
작은 손, 작은 발, 작은 눈망울  <br>
세상 가장 귀한 선물  <br><br>

<img src="./images/0bipMY1.webp" width=100% title="📷 "><br><br>

파랑아, 사랑한단 말로는 모자라  <br>
너의 모든 순간 함께할게  <br>
건강하게 웃으며 와줘  <br>
우린 널 위해 준비돼 있어  <br><br>

<img src="./images/sOPIUyq.webp" width=100% title="📷 "><br><br>

파랑아, 너의 이름 부를 때마다  <br>
가슴이 벅차 눈물이 흘러  <br>
너를 품에 안을 그날만 기다려  <br>
우리의 온 세상이 돼줄게  <br><br>

<img src="./images/cRSPNHr.webp" width=100% title="📷 "><br><br>

파랑아, 자랑스러운 우리 아기야  <br>
네가 오는 길 모든 순간이 기적이야  <br>
작은 기침, 웃음소리까지도  <br>
우리의 행복이 돼줄 거야  <br><br>

<img src="./images/fc8F3W9.webp" width=100% title="📷 "><br><br>

파랑아, 밤하늘 별들처럼  <br>
너의 길엔 빛이 가득하길  <br>
넘어질 땐 우리가 손 내밀게  <br>
언제나 네 편이 되어줄게  <br><br>

<img src="./images/TU0hQTE.webp" width=100% title="📷 "><br><br>

파랑아, 사랑한단 말로는 모자라  <br>
너의 모든 순간 함께할게  <br>
건강하게 웃으며 와줘  <br>
우린 널 위해 준비돼 있어  <br><br>

<img src="./images/eXq2HeO.webp" width=100% title="📷 "><br><br>

파랑아, 사랑해  <br>
언제까지나, 영원토록...<br>
</td></tr></table>`,
`<table style='BACKGROUND:#fce4ec url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt01_2'>
<P class='mid'><font style="display:none"><b>파랑이의 노래</b></font><br>

하늘빛의 선물로 온 너, 작은 파랑아<br>
바다의 품 속에서 자란 소중한 꿈 <br>
우리 마음속에 별처럼 빛나는  <br>
파랑이, 넌 우리의 희망  <br><br>

<img src="./images/Pg3K0iC.webp" width=100% title="📷 "><br><br>

파랑아, 넌 세상을 밝혀 주는 빛  <br>
우리 가슴속에 영원한 기쁨  <br>
파란 하늘처럼, 깊은 바다처럼  <br>
파랑아, 넌 사랑으로 자랄 거야  <br><br>

<img src="./images/Zu54hF6.webp" width=100% title="📷 "><br><br>

작은 손, 작은 발로 세상을 만나  <br>
희망의 노래를 부를 아가야  <br>
엄마와 아빠의 끝없는 사랑 속에 <br>
파랑아, 넌 영원히 빛나  <br><br>

<img src="./images/AIyUY5w.webp" width=100% title="📷 "><br><br>

파란색 바다 속 무한한 꿈을  <br>
파란색 하늘 속 자유를 담고  <br>
너와 함께할 모든 날이  <br>
기적 같은 순간, 특별한 선물  <br><br>

<img src="./images/gdBXqxp.webp" width=100% title="📷 "><br><br>

파랑아, 넌 세상을 밝혀 주는 빛  <br>
우리 가슴속에 영원한 기쁨  <br>
파란 하늘처럼, 깊은 바다처럼  <br>
파랑아, 넌 사랑으로 자랄 거야  <br><br>

<img src="./images/JrunL0C.webp" width=100% title="📷 "><br><br>

파랑아, 넌 우리의 소망  <br>
너와 함께 그리는 하루하루  <br>
사랑으로 가득 채워진 이 세상에서  <br>
파랑아, 넌 언제나 빛날 거야 <br><br>

<img src="./images/2aOxcEh.webp" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#F6FBFF url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt01_1'> <!--  class='lt01_1' #33ffff #F0F4FF (매우 연한 하늘색) #FFF9F0 (연한 아이보리) #F3E5F5 라벤더//-->
<P class='mid'><font style="display:none"><b>파랑이의 꿈</b></font><br>

별이 내려와 속삭인 밤, <br>
파랑이의 시작  <br><br>

<img src="./images/oGLrlXN.webp" width=100% title="📷 별이 내려오는.."><br><br>

작은 손으로 세상을 안아줄 너  <br>
하늘의 깊은 빛, 바다의 푸른 물결  <br>
파랑아, 넌 우리의 가장 큰 꿈  <br><br>

<img src="./images/6lUSTGu.webp" width=100% title="📷 하늘과 바다 사이의 파랑이"><br><br>

파랑아, 너는 세상을 환히 비춰 줄 별  <br>
희망 속에 빛나는 우리 사랑의 아이  <br>
너의 웃음은 태양처럼 따뜻하고  <br>
파랑아, 넌 소중한 기적이야  <br><br>

<img src="./images/CKpcsbi.webp" width=100% title="📷 두 팔 벌리고 환하게 웃는 파랑이"><br><br>

엄마의 품에서 자라는 너의 온기  <br>
아빠의 손길로 느끼는 세상의 너  <br>
작은 발걸음으로 이뤄낼 모든 꿈  <br>
파랑아, 넌 끝없는 희망을 품었어  <br><br>

<img src="./images/pMSA1MH.webp" width=100% title="📷 엄마 아빠 사이에서 행복한 표정의 파랑이"><br><br>

하늘 위를 바라보며 우리는 약속해  <br>
너의 날개가 커져서 <br>
세상에 날 수 있길..  <br><br>

바다처럼 넓은 마음으로 세상을 품고  <br>
파랑아, 넌 사랑으로 물들일 거야  <br><br>

<img src="./images/idF1lbd.webp" width=100% title="📷 무지갯빛 하늘을 향해 선 날개 단 파랑이"><br><br>

파랑아, <br>
너는 세상을 환히 비춰 줄 별<br><br>

희망 속에 빛나는 우리 사랑의 아이  <br>
너의 웃음은 태양처럼 따뜻하고  <br>
파랑아, 넌 소중한 기적이야<br><br>

<img src="./images/GKmhyZB.webp" width=100% title="📷 하늘에 환한 빛으로 떠있는 파랑이"><br><br>

파랑아, <br>
우리의 노래는 너를 향해 울려  <br><br>

너와 함께하는 하루가 가장 빛나  <br>
사랑으로 가득한 세상 속에서  <br>
파랑아, 넌 언제나 특별할 거야  <br>

<img src="./images/x9fwNg7.webp" width=100% title="📷 엄마 아빠의 품 속에서 빛나는 파랑이의 발">
</td></tr></table>`,
`<table style='BACKGROUND:#00ffff url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt02_4'>
<P class='mid'><font style="display:none"><b>파랑아, 너는 하늘을 넘어온 작은 기적</b></font><br>

파랑아! 아빠가 오늘 너에게 아주 특별한 이야기를 들려줄게. <br><br>

너는 알까? 엄마와 아빠가 처음 너를 느낀 그날, 하늘이 얼마나 파랗고 아름다웠는지. <br><br>

우리는 그날 너를 '파랑이'라고 불렀단다, 하늘의 색처럼 순수하고 빛나는 이름이야.<br><br>

<img src="./images/nyLkI5f.webp" width=100% title="📷 "><br><br><br>


파랑아, 너는 하늘에서 내려온 작은 기적이란다. <br><br>

하늘의 바람이 속삭이며 우리에게 선물을 주겠다고 약속했지. <br><br>

그리고 너는 그 약속을 이루기 위해 엄마 품속에서 자라고 있어. <br><br>

아빠는 매일 너를 생각하며 얼마나 자랑스럽고 행복한지 몰라.<br><br>

<img src="./images/7meDLca.webp" width=100% title="📷 "><br><br><br>


파랑아! 네가 자라고 있는 동안, 아빠는 세상의 모든 멋진 이야기를 준비하고 있어. <br><br>

너와 함께 나무 아래서 바람을 느끼고, 별빛 아래서 너의 웃음을 듣고 싶단다. <br><br>

네 작은 손으로 아빠의 손을 꼭 잡아주는 날을 상상하면, 아빠는 그저 눈물이 날 만큼 기쁘고 감사해.<br><br>

<img src="./images/JoHhZoJ.webp" width=100% title="📷 "><br><br><br>


파랑아, 건강하게 자라서 아빠와 만나면 너에게 세상의 놀라운 것들을 보여줄 거야. <br><br>

커다란 나무, 바람의 속삭임, 그리고 사랑이 가득한 가족의 품이 얼마나 따뜻한지. <br><br>

아빠는 매일 너의 첫 번째 웃음과 네 작은 발걸음을 기대하며 사랑으로 가득한 날을 꿈꾼단다.<br><br>

<img src="./images/oqtNtXY.webp" width=100% title="📷 "><br><br><br>


파랑아! 너는 엄마와 아빠의 마음속에서 빛나는 별처럼, 세상을 밝히는 빛이 될 거란다. <br><br>

그리고 우리는 항상 너를 사랑하고 응원할 거야. <br><br>

우리 파랑아, 건강하게 자라서 아빠와 만나자. <br><br>

아빠가 네게 세상에서 가장 큰 사랑을 보여줄게.<br><br>

<img src="./images/0r7zTEn.webp" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#33ffcc url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt02_5'>
<P class='mid'><font style="display:none"><b>파랑이와 세상 탐험</b></font><br>

아빠는 작은 파랑이를 품에 안고 다정하게 속삭였어요. <br><br>

파랑아, 내 소중한 아가. 네가 엄마 품속에 들어오던 그날, 우리 마음엔 별처럼 빛나는 기적이 생겼단다.<br><br>

<img src="./images/64Vybn4.webp" width=100% title="📷 "><br><br><br>


파랑이는 아빠의 말을 들으며 작은 눈을 깜박였지요. <br><br>

아빠는 따뜻한 미소를 지으며 이야기를 이어갔습니다. <br><br>

"파랑아, <br>
세상은 넓고 신비로운 곳이란다.<br><br>

내가 어릴 때, 커다란 나무 아래에서 바람이 속삭이는 소리를 들으며 꿈을 꾸었어. <br><br>

그리고 나무 꼭대기에서 보면 하늘이 얼마나 파랗고 멋진지 알 수 있었지."<br><br>

<img src="./images/Sc9hOCx.webp" width=100% title="📷 "><br><br><br>


파랑이는 작은 손을 움찔하며 아빠의 말에 귀를 기울였어요. <br><br>

아빠는 파랑이를 살짝 들어올려 작은 발을 가리키며 말했지요. <br><br>

"파랑아, 이 작은 발로 너는 언젠가 나무 아래를 달리고, 햇살을 따라 멀리 걷게 될 거야. <br><br>

처음 걸음을 내딛는 그 순간이 얼마나 특별할지 알까?"<br><br>

<img src="./images/bLr0Nbk.webp" width=100% title="📷 "><br><br><br>


아빠는 살며시 파랑이의 손을 잡으며 말했어요. <br><br>

"세상은 때때로 낯설고 어려워 보일 수 있지만, 파랑아, 너의 용기는 모든 것을 이겨낼 거야. <br><br>

그리고 네 발걸음마다 새로운 이야기가 시작될 거란다."<br><br>

<img src="./images/GvEikGs.webp" width=100% title="📷 "><br><br><br>


파랑이는 미소를 띠며 아빠에게 더 가까이 다가갔습니다. <br><br>

아빠는 마지막으로 속삭였어요. <br><br>

"파랑아, 네가 어디로 가든, 우리는 항상 너의 곁에 있을 거야. <br><br>

별처럼 빛나는 세상을 너의 사랑으로 가득 채우길 바란다."<br><br>

<img src="./images/x2bik4Z.webp" width=100% title="📷 "><br><br><br>


파랑이는 아빠의 품에서 편안히 잠이 들었고, 그 순간 아빠는 더없이 행복했답니다.<br><br>

<img src="./images/lZRhRzO.webp" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#ccffff url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt02_3'>
<P class='mid'><font style="display:none"><b>파랑이와 하늘의 선물</b></font><br>

옛날 옛적에, 하늘이 파랗고 바다가 깊은 곳에 아주 특별한 별이 살았단다<br><br>

그 별은 다른 별들처럼 빛나지 않았지만, 눈부신 사랑과 희망의 힘을 지니고 있었어. <br><br>

<img src="./images/sCacjPT.webp" width=100% title="📷 "><br><br><br>


하늘의 바람은 그 별에게 속삭였지, <br><br>

"세상을 밝혀줄 <br>
작은 기적을 만들어 주렴."<br><br>

그리고 그 별은 자신을 작은 씨앗으로 변신시켜 하늘에서 아래로 내려왔단다<br><br>

<img src="./images/cEPqqQE.webp" width=100% title="📷 "><br><br><br>


아주 아름답고 따스한 날, <br>
그 씨앗은 엄마와 아빠의 마음속 깊이 자리잡았어. <br><br>

"이 씨앗은 우리의 파랑이가 될 거야"<br><br>

엄마와 아빠는 기쁨과 설렘으로 속삭였지. <br><br>

파랑이는 엄마 품속에서 자라며, 사랑과 행복의 멜로디로 가득한 세상을 꿈꾸었단다.<br><br>

<img src="./images/Fpub0Af.webp" width=100% title="📷 "><br><br><br>


시간이 흘러 어느날, 엄마는 파랑이에게 이렇게 말했어. <br><br>

"파랑아, <br>
너는 하늘에서 내려온 작은 별이란다. 세상을 환히 비추고 사랑을 전하기 위해 태어난 소중한 기적이지<br><br>

엄마는 다정한 목소리로 이야기를 들려주며 파랑이에게 다가올 날들을 축복했어.<br><br>

<img src="./images/OIGIImU.webp" width=100% title="📷 "><br><br><br>


언젠가 너는 첫 번째 발걸음을 내딛을 거야, 엄마는 말했단다. <br><br>

그리고 바람처럼 자유롭게 달리고, 별들처럼 반짝일 거란다.<br><br>

세상은 넓고 놀라운 것들로 가득하지만, 너의 웃음과 사랑이 세상을 더 아름답게 만들 거야."<br><br>

<img src="./images/FU3YJoy.webp" width=100% title="📷 "><br><br><br>


파랑이는 그 이야기를 듣고 마음속에서 따스한 햇살이 퍼지는 듯한 느낌을 받았어. <br><br>

"엄마, 나는 어떻게 사랑을 전할 수 있을까요?" 파랑이가 물었지.<br><br>

엄마는 환히 웃으며 대답했어. <br><br>

"파랑아, 사랑은 아주 간단하단다. <br>
네가 웃을 때, 네가 따뜻한 마음으로 누군가를 바라볼 때, 그 모두가 사랑을 전하는 방법이란다."<br><br>

<img src="./images/3bG3FY5.webp" width=100% title="📷 "><br><br><br>


그리고 파랑이는 엄마의 품에서 조용히 속삭였어. <br><br>

"엄마, <br>
나도 하늘의 별처럼 빛날 거예요."<br><br>

엄마는 파랑이를 꼭 안아주며 속삭였단다. <br><br>

"파랑아, 넌 이미 우리 세상을 환히 비추는 별이란다."<br><br>

<img src="./images/I3b5o2N.webp" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#82eafa url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt02_1'>
<P class='mid'><font style="display:none"><b>파랑이의 소중한 여정</b></font><br>

아주 오랜 옛날, 하늘과 바다는 특별한 약속을 나누었어요. <br><br>

"우리의 사랑과 희망을 담은 귀한 선물을 세상에 보내자," <br>
하늘이 속삭였지요<br><br>

바다는 고요한 물결로 대답했어요. <br><br>

"좋아, 우리의 모든 마음을 담아 특별한 존재를 만들자."<br><br>

<img src="./images/xlnBjVI.webp" width=100% title="📷 "><br><br><br>


그리고 그 순간, 파란빛으로 빛나는 작은 별이 하늘에서 내려왔어요. <br><br>

그 별은 하늘의 사랑과 바다의 품을 담고 있었답니다. <br><br>

그래서 모두 '파랑'이라고 불렀어요. <br><br>

"파랑아, 넌 우리의 희망과 사랑을 품고 있어. 넌 세상에 무한한 기쁨과 따뜻함을 줄 존재란다," <br>
하늘과 바다가 말했어요.<br><br>

<img src="./images/Lzj74no.webp" width=100% title="📷 "><br><br><br>


파랑이는 점점 세상으로 내려가 엄마와 아빠를 만나게 되었어요. <br><br>

엄마는 파랑이를 품에 안으며 이렇게 속삭였답니다. <br><br>

"파랑아, 넌 우리에게 온 가장 소중한 선물이야. <br>
너의 존재가 우리의 하루를 밝히고, <br>
우리의 마음을 가득 채워준단다."<br><br>

<img src="./images/fvBbGEs.webp" width=100% title="📷 "><br><br><br>


아빠는 작은 파랑이의 손을 잡으며 말했어요. <br><br>

"우리는 너를 기다리는 동안 얼마나 설레고 행복했는지 몰라. <br>
너와 함께할 모든 날들이 더없이 특별하고 소중할 거야."<br><br>

<img src="./images/KsJNMQD.webp" width=100% title="📷 "><br><br><br>


파랑이의 눈에는 하늘의 빛과 바다의 깊은 물결이 담겨 있었어요. <br><br>

파랑이는 언제나 사랑받으며, 세상에 기쁨과 희망을 전해줄 존재가 될 거예요. <br><br>

그리고 엄마와 아빠는 파랑이가 커가는 동안, 사랑과 기대, 그리고 무한한 희망을 함께 나누며 하루 하루를 보내겠지요.<br><br>

<img src="./images/Zkc5KwG.webp" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#66ffcc url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt02_2'>
<P class='mid'><font style="display:none"><b>하늘과 바다의 선물</b></font><br>

옛날 아주 먼 옛날, 하늘은 파란 옷을 입고, 바다는 푸른 물결로 춤을 추며 서로를 바라보는 친구였어요. <br><br>

하늘은 맑은 빛을, 바다는 촉촉한 바람을 서로 나누며 세상을 아름답게 만들었지요.<br><br>

<img src="./images/rcJGIlK.webp" width=100% title="📷 "><br><br><br>


어느 날, 하늘과 바다는 사랑과 희망을 가득 담은 특별한 선물을 세상에 주기로 했어요. <br><br>

그래서 둘은 힘을 모아 가장 반짝이는 별빛과 가장 따뜻한 물결을 모아 작은 씨앗을 만들었답니다. <br><br>

그 씨앗은 세상을 따뜻하게 품어줄 아기였어요.<br><br>

<img src="./images/wlrUMVV.webp" width=100% title="📷 "><br><br><br>


"아가야, <br>
넌 하늘의 넓은 사랑과 바다의 깊은 꿈을 간직한 특별한 선물이야,"<br><br>

하늘과 바다가 말했어요. <br><br>

"너의 웃음은 태양처럼 세상을 환히 비출 거야. 너의 손길은 꽃처럼 사람들에게 기쁨을 줄 거란다."<br><br>

<img src="./images/DnblD4L.webp" width=100% title="📷 "><br><br><br>


그리고 그 아가는 어느 멋진 날, <br>
엄마와 아빠의 품에 안기게 되었어요. <br><br>

엄마는 사랑스런 마음으로 아가를 품으며 속삭였어요. <br><br>

"너는 우리에게 온 가장 소중한 선물이야. <br><br>

네가 오기 전부터 우리는 너를 기다렸고, 지금 너를 만나게 되어 정말 행복해."<br><br>

<img src="./images/HOQlyZP.webp" width=100% title="📷 "><br><br><br>


아빠는 아가의 작은 손을 잡으며 말했어요. <br><br>

"하늘과 바다가 준 선물을 우리가 지켜줄게. <br><br>

너는 언제나 사랑받고, 소중히 여겨질 거야."<br><br>

<img src="./images/mgdZEMR.webp" width=100% title="📷 "><br><br><br>


이렇게 하늘과 바다가 아가에게 전한 사랑은 엄마와 아빠의 마음속에 더욱 크게 자라났답니다. <br><br>

그리고 그 사랑은 아가가 커가는 동안에도 언제나 함께할 거예요.<br><br>

<img src="./images/PpAq7Xn.webp" width=100% title="📷 ">
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
기존의 '아기 탄생 축복' 노래에 태명 '파랑'에서 세상 이름 '로운'으로 개사.<br>
여기에는 가사 3 x 3세트 = 9곡 수록.<br><br>

<font color='blue'><b>2025.05.14 탄생 축하 및 축복(파랑)</b></font><br>
'아기 탄생'을 축하하고 축복을 보내는 노래 3가지 가사에 노래 다수 생성. <br>
여기에는 가사 3 x 3세트 = 9곡 수록.<br><br>

<font color='blue'><b>2025.04.08 건강한 만남 기원</b></font><br>
건강한 만남 (출산)을 기원하는 노래 <br><br>

"파랑아, 우리 곁에 올 그날까지.."<br>
10곡 생성, 여기에는 3곡만 수록.<br><br>

본 '오디오(MP3) 플레이어' 제작.<br><br>

<font color='blue'><b>2025.04.02 난생처음 만든 노래</b></font><br>
(잉태의 기쁨, 희망, 소망)<br><br>

노래: 가사 2 x 2세트 = 4곡 생성,<br>
태담: 5건 x 2 (여기에는 5건만 수록). <br>
</td></tr></table>`