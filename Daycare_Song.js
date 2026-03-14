const title0 = "로운이를 위한 태담과 노래"

odi = [
"https://cdn1.suno.ai/1f8fc36e-0154-429a-a09f-e0318196d46b.mp3|1*[어린이집] 로운이의 어린이집 입학송 (코믹 버전 한국 뮤지컬 스타일의 어린이 노래)_WM02 v4.5-all||",
"https://cdn1.suno.ai/7c471ef5-1f51-450c-9442-eb3984979699.mp3|1*[어린이집] 로운이의 즐거운 하루 (경쾌한 피치카토 현악기, 실로폰, 밝은 우쿨렐레)_W08 v4.5-all||",
"https://cdn1.suno.ai/c5e26e90-3995-4384-9848-504ce7107123.mp3|1*[어린이집] 로운이의 어린이집 모험 <br>(한국 전통 사극 발라드, 오케스트라)_W06 v4.5-all||",
"https://cdn1.suno.ai/179f56a6-e817-4df1-940f-ab0ca0693ba8.mp3|1*[어린이집] 로운이의 어린이집 뽀짝 모험 (경쾌한 폴카, 어린이 음악, 행복하고 신나는)_M04 v4.5-all||",
"https://cdn1.suno.ai/1bc504b0-e68a-464b-bf66-1db81fc2cc78.mp3|1*[어린이집] 로운이, 열 달의 기적 (감성 버전: 가족 자장가처럼 부드럽고 사랑스러운)_WM02 v4.5-all||",
"https://cdn1.suno.ai/8f0e74bd-f2f4-4b27-bc6d-5cc724283278.mp3|1*[어린이집] 로운이, 열 달의 기적 (감성 버전: 자장가, 오르골 첼레스타 글로켄슈필)_W06 v4.5-all||",
"https://cdn1.suno.ai/c16fdaa2-a885-4986-a4c5-2a3e6e5b6012.mp3|1*[어린이집] 로운이, 열 달의 기적 (감성 버전: 한국 전통 사극 발라드, 오케스트라)_W08 v4.5-all||",
"https://cdn1.suno.ai/e1d4dc32-5c47-421b-9389-6993e46c15a3.mp3|1*[어린이집] 로운이가 '어린이집'에 갑니다 (개사 전, 한국 뮤지컬 스타일 어린이 노래)_W09 v4.5-all||",
"https://cdn1.suno.ai/aa0b254f-813a-45de-a222-b1322c921508.mp3|2*[어린이집] 로운이의 어린이집 입학송 (코믹 버전 한국 포트송의 어쿠스틱 동요, 포근한 가족적인 분위기, 진심이 담긴 감성)_WM04 v4.5-all||",
"https://cdn1.suno.ai/b2dbf2f9-22c4-407c-b136-3e5901b62f35.mp3|2*[어린이집] 로운이의 즐거운 하루 (경쾌한 피치카토 현악기, 실로폰, 밝은 우쿨렐레)_W07 v4.5-all||",
"https://cdn1.suno.ai/a4575ad7-131a-4bad-b935-78866b0cdfe3.mp3|2*[어린이집] 로운이의 즐거운 하루 (동요 멜로디에 발랄하고 활기찬 분위기, 125 bpm)_W09 v4.5-all||",
"https://cdn1.suno.ai/f826237d-c97c-4a1a-9352-76ff0f96abf5.mp3|2*[어린이집] 로운이의 어린이집 모험 <br>(한국 뮤지컬 스타일의 어린이 노래)_W04 v4.5-all||",
"https://cdn1.suno.ai/8cb7c0ec-02b5-4c5b-9c4f-5651b9817010.mp3|2*[어린이집] 로운이의 어린이집 뽀짝 모험 (경쾌한 폴카, 어린이 음악, 행복하고 신나는)_M03 v4.5-all||",
"https://cdn1.suno.ai/d2305214-1c35-4639-bc58-f68f11353840.mp3|2[어린이집] 로운이의 어린이집 뽀짝 모험 <br>(한국 전통 사극 발라드, 오케스트라)_W12 v4.5-all||",
"https://cdn1.suno.ai/a8c3e44f-4087-4dc9-aa92-52d54684e2a8.mp3|2*[어린이집] 로운이, 열 달의 기적 (감성 버전: 가족 자장가처럼 부드럽고 사랑스러운)_WM01 v4.5-all||",
"https://cdn1.suno.ai/b2ef2e7c-8f3b-492e-8c06-7c6bd9e4dfaf.mp3|2*[어린이집] 로운이, 열 달의 기적 (감성 버전: 자장가, 오르골 첼레스타 글로켄슈필)_W05 v4.5-all||",
"https://cdn1.suno.ai/6676a543-7298-40b4-8d11-c8fe3099b5ca.mp3|2*[어린이집] 로운이가 '어린이집'에 갑니다 (개사 전, 어린이 뮤지컬, 재치 스토리텔링)_W07 v4.5-all||",
"https://cdn1.suno.ai/bb84077c-4afe-48f7-9c51-d6aba29fdc2b.mp3|2*[어린이집] 로운이가 '어린이집'에 갑니다 (개사 전, 장난스럽고 유쾌한 어린이 팝송)_WM01 v4.5-all||",
"https://cdn1.suno.ai/ce5773b5-f8f9-4d5a-b3f1-3b828140c1a1.mp3|3*[어린이집] 로운이의 어린이집 입학송 (코믹 버전 아기의 첫 어린이집 경험과 성장 과정을 그린 따뜻한 한국어린이 동화노래)_W15 v4.5-all||",
"https://cdn1.suno.ai/88f24ace-a8d7-45a8-a09e-7a56bbc7cb85.mp3|3*[어린이집] 로운이의 즐거운 하루 (밝고 경쾌한 한국 유치원 노래 공연, 120 bpm)_W12 v4.5-all||",
"https://cdn1.suno.ai/9e8cb8bf-5251-4094-83ba-278896b94a11.mp3|3*[어린이집] 로운이의 즐거운 하루 (장난기 넘치는 한국 아기 노래, 130 bpm)_W13 v4.5-all||132",
"https://cdn1.suno.ai/30f4328c-4fee-4a22-9f35-3b3eeb83c410.mp3|3*[어린이집] 로운이의 어린이집 모험 (명랑하고 장난기 넘치는 한국 어린이 팝송)_W03 v4.5-all||",
"https://cdn1.suno.ai/ed9a311c-77a6-4019-be63-8c039c8a90f8.mp3|3*[어린이집] 로운이의 어린이집 뽀짝 모험 (귀엽고 명랑한 한국 어린이노래 밝고 발랄한)_W09 v4.5-all||",
"https://cdn1.suno.ai/5df52a35-e659-43f1-9c71-4d130ac500d7.mp3|3*[어린이집] 로운이의 어린이집 뽀짝 모험 (귀엽고 명랑한 한국 어린이노래 밝고 발랄한)_W10 v4.5-all||",
"https://cdn1.suno.ai/b5b46d93-45f6-4284-8c33-d17e2954055f.mp3|3*[어린이집] 로운이가 '어린이집'에 갑니다 (개사 전, 장난스럽고 유쾌한 어린이 팝송)_W02 v4.5-all||",
"https://cdn1.suno.ai/c72f78b7-21d9-4f11-898e-d8d85e9a1c72.mp3|4*[어린이집] 로운이의 어린이집 입학송 (코믹 버전 아기의 첫 어린이집 경험과 성장 과정을 그린 따뜻한 한국어린이 동화노래)_W14후반부에러 v4.5-all||",
"https://cdn1.suno.ai/1467ba8b-5d46-4a25-9667-6ab7f1a291a9.mp3|4*[어린이집] 로운이의 즐거운 하루 <br>(차분한 분위기의 자장가 스타일)_W05 v4.5-all||",
"https://cdn1.suno.ai/5363ccf0-6167-4433-8a1a-2cd093916c7a.mp3|4*[어린이집] 로운이의 어린이집 모험 <br>(한국 전통 사극 발라드, 오케스트라)_W07 v4.5-all||",
"https://cdn1.suno.ai/84779152-366a-4dec-b58e-32f23bdfd31c.mp3|4*[어린이집] 로운이의 어린이집 뽀짝 모험 <br>(한국 전통 사극 발라드, 오케스트라)_W13 v4.5-all||",
"https://cdn1.suno.ai/6685e0a7-5c47-453e-aba3-7b1ed03d4090.mp3|4*[어린이집] 로운이, 열 달의 기적 (감성 버전: 느리고 깊고 울림 있는 첼로, 부드러운 바이올린, 조용한 오보에 대선율)_WM03 v4.5-all||",
"https://cdn1.suno.ai/0415cc03-31b3-4444-b4f6-9723fec922da.mp3|4*[어린이집] 로운이, 열 달의 기적 (감성 버전: 한국 전통 사극 발라드, 오케스트라)_W07 v4.5-all||",
"https://cdn1.suno.ai/bb421430-fde6-4d2d-aaa4-084c459493b8.mp3|4*[어린이집] 로운이가 '어린이집'에 갑니다 (개사 전, 친근한 남성 휘슬, 편안한 즐거운)_M02 v4.5-all||",
"https://cdn1.suno.ai/0eab5942-d335-4be3-ba5c-a40b0f5e301b.mp3|5*[어린이집] 로운이의 어린이집 입학송 <br>(코믹 버전 : 온 가족이 함께 즐길 수 있는 밝고 사랑스러운 분위기의 노래)_W12 v4.5-all||",
"https://cdn1.suno.ai/110296a0-8717-4cbc-84a5-52df695de4ce.mp3|5*[어린이집] 로운이의 어린이집 입학송 <br>(코믹 버전: 온 가족이 함께 즐길 수 있는 밝고 사랑스러운 분위기의 노래)_W13 v4.5-all||",
"https://cdn1.suno.ai/2072ecea-8ffb-44bb-b326-f38686538a1b.mp3|5*[어린이집] 로운이의 즐거운 하루 (밝고 경쾌한 한국 유치원 노래 공연, 120 bpm)_W11 v4.5-all||",
"https://cdn1.suno.ai/3be5f25b-6bd5-4bd2-b039-26f8034a8bbb.mp3|5*[어린이집] 로운이의 즐거운 하루 (장난기 넘치는 한국 아기 노래, 130 bpm)_W14 v4.5-all||",
"https://cdn1.suno.ai/b8d11296-0d2f-4b3d-99b6-06bf251a3b74.mp3|5*[어린이집] 로운이의 어린이집 모험 (명랑하고 장난기 넘치는 한국 어린이 팝송)_W02 v4.5-all||",
"https://cdn1.suno.ai/4b8ac53f-eecd-487d-b59a-c7c55a2546d4.mp3|5*[어린이집] 로운이의 어린이집 모험 <br>(한국 뮤지컬 스타일의 어린이 노래)_W05 v4.5-all||",
"https://cdn1.suno.ai/97a8421f-5266-4b60-a443-1b8920462077.mp3|5*[어린이집] 로운이의 어린이집 뽀짝 모험 <br>(경쾌한 템포와 트로트 듀엣)_W11 v4.5-all||",
"https://cdn1.suno.ai/7dcf01da-c9de-428b-92b0-1de6f04d2e7d.mp3|5*[어린이집] 로운이의 어린이집 뽀짝 모험 <br>(경쾌한 템포와 트로트 듀엣)_WM01 v4.5-all||",
"https://cdn1.suno.ai/8edf554f-f0e8-4c2f-a102-9b7690e9f4ff.mp3|5*[어린이집] 로운이, 열 달의 기적 <br>(트로트 댄스, 신디사이저 사운드)_W09 v4.5-all||",
"https://cdn1.suno.ai/44f8af65-f0a2-4d65-9286-4218642dcde5.mp3|5*[어린이집] 로운이, 열 달의 기적 <br>(트로트 댄스, 신디사이저 사운드)_W10 v4.5-all||",
"https://cdn1.suno.ai/61257b99-836b-4608-bcc9-a35fe8f08c55.mp3|5*[어린이집] 로운이가 '어린이집'에 갑니다 (개사 전, 레트로 키즈 디스코, 펑키한 베이스라인, 경쾌한 신스, 코믹한 분위기)_W06 v4.5-all||",
"https://cdn1.suno.ai/6a024b8c-829b-4d0f-9217-a71312694727.mp3|5*[어린이집] 로운이가 '어린이집'에 갑니다 (개사 전, 한국 뮤지컬 스타일 어린이 노래)_W03 v4.5-all||",
"https://cdn1.suno.ai/2142548e-138b-4cdf-a48c-109e24a6849f.mp3|5*[어린이집] 로운이가 '어린이집'에 갑니다 (개사 전, 한국 뮤지컬 스타일 어린이 노래)_W10 v4.5-all||",
"https://cdn1.suno.ai/2a2a837b-f79b-49ab-8883-c09364213b9e.mp3|6*[어린이집] 로운이의 어린이집 입학송 (코믹 버전 한국 포크송의 어쿠스틱 동요, 포근한 가족적인 분위기, 진심이 담긴 감성)_WM03 v4.5-all||",
"https://cdn1.suno.ai/ead31d10-5da6-470d-ae25-b3e2ba92428a.mp3|6*[어린이집] 로운이의 즐거운 하루 <br>(순수하고 장난기 넘치는 분위기)_W04 v4.5-all||",
"https://cdn1.suno.ai/ae8950a2-b47e-4b53-a273-5f31d59b4809.mp3|6*[어린이집] 로운이의 즐거운 하루 <br>(차분한 분위기의 자장가 스타일)_W06 v4.5-all||",
"https://cdn1.suno.ai/8b104bc9-968b-4546-bba1-03806a17ad7b.mp3|6*[어린이집] 로운이의 어린이집 뽀짝 모험 (경쾌한 폴카, 어린이 음악, 행복하고 신나는)_M02 v4.5-all||",
"https://cdn1.suno.ai/9309fbb6-c6a3-4081-9a41-e2a482a32797.mp3|6[어린이집] 로운이의 어린이집 입학송 (코믹 버전 어린이집 모험곡, 장난스런 분위기)_W03 v4.5-all||",
"https://cdn1.suno.ai/aae0172a-f32f-4c40-a853-055558a2124a.mp3|6[어린이집] 로운이의 어린이집 입학송 (코믹 버전 장난스럽고 유쾌한 한국 어린이팝송)_MW03 v4.5-all||",
"https://cdn1.suno.ai/cd4b071c-ec3a-45d1-a436-ef5e3aa5cada.mp3|6[어린이집] 로운이의 어린이집 모험 (어린이 뮤지컬 오케스트라 팝, 재치 스토리텔링)_W01 v4.5-all||",
"https://cdn1.suno.ai/62bb1d4f-0dd9-4119-9d56-5db9c89a317b.mp3|6*[어린이집] 로운이의 어린이집 뽀짝 모험 (경쾌한 폴카, 어린이 음악, 행복하고 신나는)_M01 v4.5-all||",
"https://cdn1.suno.ai/b06f49b7-fa80-48bb-be43-1b8938354087.mp3|6*[어린이집] 로운이의 어린이집 뽀짝 모험 (아이의 활기찬 탐험을 반영, 따뜻한 분위기)_W03 v4.5-all||",
"https://cdn1.suno.ai/d6f360c6-e7e7-4078-a06f-3ef8c0291f2c.mp3|6[어린이집] 로운이, 열 달의 기적 (감성 버전: 밝은 우쿨렐레, 장난스러운 실로폰, 가벼운 타악기와 플루트)_W03 v4.5-all||",
"https://cdn1.suno.ai/a08e43ec-16e2-4e67-b22d-583c6e59c303.mp3|6[어린이집] 로운이가 '어린이집'에 갑니다 (개사 전, 장난스럽고 유쾌한 어린이 팝송)_MW01 v4.5-all||",
"https://cdn1.suno.ai/cc15ae9c-568b-4102-a53b-bfa7cb2b088e.mp3|6[어린이집] 로운이가 '어린이집'에 갑니다 (개사 전, 장난스럽고 유쾌한 어린이 팝송)_W01 v4.5-all||",
"https://cdn1.suno.ai/ba7d37b9-2a60-4aaf-85a5-5aa9eb5fd9c9.mp3|6*[어린이집] 로운이가 '어린이집'에 갑니다 (개사 전, 한국 뮤지컬 스타일 어린이 노래)_W04 v4.5-all||",
"https://cdn1.suno.ai/638594e4-253c-4f18-98ed-b23bcff0bac8.mp3|6[어린이집] 로운이의 어린이집 입학송 (코믹 버전 장난스럽고 유쾌한 한국 어린이팝송)_W09 v4.5-all||",
"https://cdn1.suno.ai/90faa349-ea8c-4739-8128-17ddd16ccab9.mp3|6[어린이집] 로운이의 어린이집 입학송 (코믹 버전 즐거움, 우정, 근심 없는 놀이 시간)_W07 v4.5-all||",
"https://cdn1.suno.ai/6a6ff1ef-18f9-406b-a1c5-bb3cab8d7d75.mp3|6[어린이집] 로운이의 즐거운 하루 (동요 멜로디에 발랄하고 활기찬 분위기, 125 bpm)_W10 v4.5-all||",
"https://cdn1.suno.ai/c72d31dc-2dad-46e1-aed8-05c34611e930.mp3|6[어린이집] 로운이의 즐거운 하루 <br>(순수하고 장난기 넘치는 분위기)_W03 v4.5-all||",
"https://cdn1.suno.ai/ed94237e-833c-4464-bc4c-dba2334c8c28.mp3|6[어린이집] 로운이의 즐거운 하루 <br>(어린이집 모험, 순수한 동심)_W02 v4.5-all||",
"https://cdn1.suno.ai/5a6adaca-f9d2-4f45-ac85-35e8b90060b3.mp3|6*[어린이집] 로운이의 어린이집 뽀짝 모험 (귀엽고 명랑한 한국 어린이노래 밝고 발랄한)_W02 v4.5-all||",
"https://cdn1.suno.ai/a94e771f-6dee-4799-b95a-fddf8c46e75e.mp3|6*[어린이집] 로운이의 어린이집 뽀짝 모험 (동요 멜로디, 발랄하고 활기찬, 125 BPM)_W07 v4.5-all||",
"https://cdn1.suno.ai/a22a34c8-3406-41f3-bd45-2b8510b95c9d.mp3|6*[어린이집] 로운이의 어린이집 뽀짝 모험 (자장가처럼 부드럽고 편안한 베이스라인)_W06 v4.5-all||",
"https://cdn1.suno.ai/cb30b359-c72c-40c5-b8b6-8fa9744c623f.mp3|6[어린이집] 로운이가 '어린이집'에 갑니다 (개사 전, 어린이 뮤지컬, 재치 스토리텔링)_W08 v4.5-all||",
"https://cdn1.suno.ai/d881a0dc-ca87-4392-837f-1d3688df1bb9.mp3|6*[어린이집] 로운이의 어린이집 뽀짝 모험 (자장가처럼 부드럽고 편안한 베이스라인)_W05 v4.5-all||",
"https://cdn1.suno.ai/e6e806ba-6414-43a7-b1d0-5aa2276eaf6b.mp3|6[어린이집] 로운이, 열 달의 기적 (감성 버전: 느리고 깊고 울림 있는 첼로, 부드러운 바이올린, 조용한 오보에 대선율)_WM04 v4.5-all||",
"https://cdn1.suno.ai/e356b7ad-4d6b-4698-9911-789d32ecc2c6.mp3|6[어린이집] 로운이, 열 달의 기적 (감성 버전: 피아노, 잔잔한 통기타, 은은한 현악기)_W01 v4.5-all||",
"https://cdn1.suno.ai/fb92a6d5-7d80-4604-b860-0f43fee76201.mp3|6[어린이집] 로운이, 열 달의 기적 (감성 버전: 피아노, 잔잔한 통기타, 은은한 현악기)_W02 v4.5-all||",
"https://cdn1.suno.ai/cc13ebcf-6f44-4de7-b2a3-6e160871fb7d.mp3|6[어린이집] 로운이가 '어린이집'에 갑니다 (개사 전, 친근한 남성, 휘슬, 편안한 즐거운)_M01 v4.5-all||",
"https://cdn1.suno.ai/9604c901-8951-4e08-90d3-75464f9d3c29.mp3|6[어린이집] 로운이의 어린이집 입학송 (코믹 버전 어린이집 모험곡, 장난스런 분위기)_W04 v4.5-all||",
"https://cdn1.suno.ai/04721540-d62d-4ba1-b8f3-1f81ec170853.mp3|6[어린이집] 로운이의 어린이집 입학송 (코믹 버전 한국 뮤지컬 스타일의 어린이 노래)_M01 v4.5-all||",
"https://cdn1.suno.ai/f72cd03f-b4e7-4c0b-9ecc-5cdb9b135c19.mp3|6[어린이집] 로운이의 즐거운 하루 <br>(어린이집 모험, 순수한 동심)_W01 v4.5-all||",
"https://cdn1.suno.ai/4ff640cb-7f6f-4818-8022-26a14e7e5227.mp3|6*[어린이집] 로운이의 어린이집 뽀짝 모험 (귀엽고 명랑한 한국 어린이노래 밝고 발랄한)_W01 v4.5-all||",
"https://cdn1.suno.ai/419541b3-1ad0-4525-95b7-50d4785bdfc9.mp3|6*[어린이집] 로운이의 어린이집 뽀짝 모험 (동요 멜로디, 발랄하고 활기찬, 125 BPM)_W08 v4.5-all||",
"https://cdn1.suno.ai/8123be43-1168-4eb5-b52f-76044c401e43.mp3|6[어린이집] 로운이가 '어린이집'에 갑니다 (개사 전, 레트로 키즈 디스코, 펑키한 베이스라인, 경쾌한 신스, 코믹한 분위기)_W05 v4.5-all||",
]

song = [
`<table class='box' style="BACKGROUND:white url('https://blog.kakaocdn.net/dn/cNRdEW/btsN2lnXfqg/4hhAemVBwUY4WVniGa8NpK/img.png') no-repeat fixed center center" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>로운이의 어린이집 뽀짝 모험</b></font>

<img src='https://cheerful-kangaroo-a63580.netlify.app/23 로운이의 어린이집 뽀짝 모험_J_01.jpg' width=100% title='📷 '><br><br>

햇님 방긋 상쾌한 아침<br>
꼬물꼬물 눈을 비벼요<br><br>

<img src='https://cheerful-kangaroo-a63580.netlify.app/23 로운이의 어린이집 뽀짝 모험_J_03.png' width=100% title='📷 '><br><br>

토닥토닥 엄마 품에서<br>
싱글벙글 인사를 해요<br><br>

<img src='https://cheerful-kangaroo-a63580.netlify.app/23 로운이의 어린이집 뽀짝 모험_J_04.png' width=100% title='📷 '><br><br>

가방 메고 출발을 해요<br>
뽀짝 뽀짝 걸음걸이로<br><br>

<img src='https://cheerful-kangaroo-a63580.netlify.app/23 로운이의 어린이집 뽀짝 모험_J_05.png' width=100% title='📷 '><br><br>

띵동 띵동 문이 열리며<br>
선생님이 반겨주네요<br><br>

<img src='https://cheerful-kangaroo-a63580.netlify.app/23 로운이의 어린이집 뽀짝 모험_J_06.png' width=100% title='📷 '><br><br>

냠냠~ 냠냠, 이유식 먹고<br>
오물오물 입술을 쪽쪽~<br><br>

<img src='https://cheerful-kangaroo-a63580.netlify.app/23 로운이의 어린이집 뽀짝 모험_J_07.png' width=100% title='📷 '><br><br>

꿀꺽꿀꺽 잘도 먹어요<br>
짝짝 짝짝 박수를 쳐요<br><br>

<img src='https://cheerful-kangaroo-a63580.netlify.app/23 로운이의 어린이집 뽀짝 모험_J_08.png' width=100% title='📷 '><br><br>

블록 쌓기 톡톡. 탁탁탁<br>
데굴데굴 공을 굴려요<br><br>

<img src='https://cheerful-kangaroo-a63580.netlify.app/23 로운이의 어린이집 뽀짝 모험_J_09.png' width=100% title='📷 '><br><br>

까르르르 웃음꽃들이<br>
몽실몽실 피어나네요<br><br>

<img src='https://cheerful-kangaroo-a63580.netlify.app/23 로운이의 어린이집 뽀짝 모험_J_10.png' width=100% title='📷 '><br><br>

새록새록 낮잠 시간에<br>
포근포근 이불 속으로..<br><br>

<img src='https://cheerful-kangaroo-a63580.netlify.app/23 로운이의 어린이집 뽀짝 모험_J_11.png' width=100% title='📷 '><br><br>

꿈속에서 둥실 두둥실<br>
별나라로 여행을 가요<br><br>

<img src='https://cheerful-kangaroo-a63580.netlify.app/23 로운이의 어린이집 뽀짝 모험_J_12.png' width=100% title='📷 '><br><br>

친구들과 손을 잡고서<br>
조잘조잘 이야기꽃을..<br><br>

<img src='https://cheerful-kangaroo-a63580.netlify.app/23 로운이의 어린이집 뽀짝 모험_J_13.png' width=100% title='📷 '><br><br>

양보 배려 척척해내요<br>
슬기로운 로운이에요<br><br>

<img src='https://cheerful-kangaroo-a63580.netlify.app/23 로운이의 어린이집 뽀짝 모험_J_14.png' width=100% title='📷 '><br><br>

선생님과 눈을 맞추며<br>
귀는 쫑긋, 고개는 끄덕<br><br>

<img src='https://cheerful-kangaroo-a63580.netlify.app/23 로운이의 어린이집 뽀짝 모험_J_15.png' width=100% title='📷 '><br><br>

봉긋봉긋 지혜가 가득<br>
사랑둥이 빛이 나네요~~<br><br>

<img src='https://cheerful-kangaroo-a63580.netlify.app/23 로운이의 어린이집 뽀짝 모험_J_16.png' width=100% title='📷 '><br><br>

하원 길에 총총 총총총<br>
잘도 먹고, 잠 잘 자면서<br><br>

<img src='https://cheerful-kangaroo-a63580.netlify.app/23 로운이의 어린이집 뽀짝 모험_J_17.png' width=100% title='📷 '><br><br>

오늘도 또, 잘 놀았기에<br>
무럭무럭 자라납니다~~<br><br>

<img src='https://cheerful-kangaroo-a63580.netlify.app/23 로운이의 어린이집 뽀짝 모험_J_18.png' width=100% title='📷 '><br><br>

로운이, 멋지다 멋져!<br><br>

<img src='https://cheerful-kangaroo-a63580.netlify.app/23 로운이의 어린이집 뽀짝 모험_J_19.png' width=100% title='📷 '>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:white url('https://blog.kakaocdn.net/dn/cNRdEW/btsN2lnXfqg/4hhAemVBwUY4WVniGa8NpK/img.png') no-repeat fixed center center" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>로운이, 열 달의 기적</b></font><br>

열 달 품에 안겼던<br>
작은 우리 로운이<br><br>

오늘 처음 세상 속<br>
한 걸음 내딛어요<br><br>

말은 아직 못 하지만<br>
눈빛은 다~ 말해요<br><br>

엄마 아빠 사랑을<br>
가슴 가득 안고<br><br>

가방 메고 서 있는<br>
그 작은 뒷모습<br><br>

유모차에 앉았지만<br>
마음은 훌쩍 컸어요<br><br>

벚꽃 피는 봄이 오면<br>
말도 하고 걷겠지요<br><br>

계절 따라 자라나는<br>
로운이의 하루하루~<br><br>

냠냠~ 잘도 먹고<br>
새근새근 잠들고<br><br>

하하 웃는 모습에<br>
우리 마음 녹아요~<br><br>

지혜로운 이름처럼<br>
슬기롭게 자라서<br><br>

이 세상에 환한 빛<br>
되어 주렴, 로운아~~<br><br>

<img src="" width=100% title="📷 ">
</td></tr></table>`,
`<table class='box' style="BACKGROUND:white url('https://blog.kakaocdn.net/dn/cNRdEW/btsN2lnXfqg/4hhAemVBwUY4WVniGa8NpK/img.png') no-repeat fixed center center" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>로운이의 어린이집 모험</b></font><br>

콩. 콩. 콩. 발걸음, 두근두근 설레임<br> 
알록달록 가방에 파란 꿈 가득 담아<br>
까르르 웃음소리, 반짝반짝 눈빛으로<br>
로운이 오늘도 씩씩하게 출발해요<br><br>

<img src="https://i.imgur.com/LXaf9Bt.png" width=100% title="📷 "><br><br>

쓱싹쓱싹 그림을, 색칠하며 놀고<br>  
똑딱똑딱 블록을, 차곡차곡 쌓고<br><br>

<img src="https://i.imgur.com/xCqoF1o.png" width=100% title="📷 "><br><br>

찰방찰방 물놀이, 신나는 웃음<br>
로운이 친구랑 사이좋게 어울려요<br><br>

<img src="https://i.imgur.com/3Bhjb1D.png" width=100% title="📷 "><br><br>

냠냠~ 냠냠~ 맛있게 밥을 먹으면<br>  
스르륵~ 졸리는 눈, 달콤한 낮잠의<br>
꿈속에서 하하 호호 춤을 추면서<br>
로운이 쑥쑥쑥 건강하게 자라나요~~<br><br>

<img src="https://i.imgur.com/HF0i1aQ.png" width=100% title="📷 "><br><br>

손을 잡고 빙빙빙 원을 그리고<br>
랄라라라 노래 부르며 뛰노는<br><br>

<img src="https://i.imgur.com/ePJ0zrM.png" width=100% title="📷 "><br><br>

찰칵. 찰칵. 사진 속의 웃는 얼굴<br>
로운이 하루가 행복으로 가득해요<br><br>

<img src="https://i.imgur.com/ny3IoiE.png" width=100% title="📷 "><br><br>

선생님 말씀에는 귀 쫑긋 세우고<br>
또래 친구들과 재미있게 놀면서<br><br>

<img src="https://i.imgur.com/MO1r6re.png" width=100% title="📷 "><br><br>

슬기로운 마음이 쑥쑥 자라나는<br>
로운이 하루는 지혜롭게 빛이 나요<br><br>

<img src="https://i.imgur.com/LPHKn4P.png" width=100% title="📷 "><br><br>

톡. 톡. 톡. 작은 손, 사랑을 전하고<br>
방글방글 미소로 모두를 감싸며<br><br>

<img src="https://i.imgur.com/x1a9wyh.png" width=100% title="📷 "><br><br>

콩닥콩닥 심장에 희망을 담고서<br>
로운이 내일도 활기차게 올 거예요~~<br><br>

<img src="https://i.imgur.com/Rpnx5wn.png" width=100% title="📷 "><br><br>

로운아! 사랑해~~~ ♡<br><br>

<img src="https://i.imgur.com/s60IPfW.png" width=100% title="📷 ">

</td></tr></table>`,
`<table class='box' style="BACKGROUND:white url('https://blog.kakaocdn.net/dn/cNRdEW/btsN2lnXfqg/4hhAemVBwUY4WVniGa8NpK/img.png') no-repeat fixed center center" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>로운이의 어린이집 입학송</b></font><br>

로운 로운, 우리 아들 로운이가<br>
이 세상 열 달 만에 어린이집 갑니다~<br><br>

<img src="https://i.imgur.com/mcrw4nS.png" width=100% title="📷 "><br><br>

"엄마 아빠, 다녀오겠습니다"<br>
하지만 아직 말은 못 한답니다~<br>
(하하하~)<br><br>

<img src="https://i.imgur.com/zIwDViw.png" width=100% title="📷 "><br><br>

벚꽃이 만발하는 사월이 오면<br>
그때는 말문이 터질 거예요~ (정말?)<br><br>

<img src="https://i.imgur.com/RybTBj1.png" width=100% title="📷 "><br><br>

가방 메고 아장아장 걸어갑니다<br>
그러나 오늘은 유모차로 간답니다~<br>
(하하하~)<br><br>

<img src="https://i.imgur.com/0tJrpRA.png" width=100% title="📷 "><br><br>

첫돌을 맞이하는 오월이 오면<br>
아마도 뛰어갈 거예요~ (진짜?)<br><br>

<img src="https://i.imgur.com/cNdwJ8m.png" width=100% title="📷 "><br><br>

딱지치기 딱. 딱. 총싸움도 빵. 빵.<br>
그런데 지금은 기어 다닌답니다~<br>
(하하하~)<br><br>

<img src="https://i.imgur.com/DVCi6Ev.png" width=100% title="📷 "><br><br>

이제 곧 말도 하고, 걷게 되면<br>
뛰뛰 빵빵, 자동차 놀이할 거예요~<br>
(좋겠다~)<br><br>

<img src="https://i.imgur.com/LSkjPkh.png" width=100% title="📷 "><br><br>

나는 나는 될 거예요<br>
어린이집 우등생이 될 거예요~~<br><br>

<img src="https://i.imgur.com/CvrcJzd.png" width=100% title="📷 "><br><br>

냠냠~ 냠냠, 맛있게 먹고<br>
새록 새록, 잠도 잘 자고<br><br>

<img src="https://i.imgur.com/dE8nfgr.png" width=100% title="📷 "><br><br>

꽁냥 꽁냥, 친구랑 사이좋게<br>
하하 호호, 재미있게 놀면서..<br><br>

<img src="https://i.imgur.com/CxBA4R5.png" width=100% title="📷 "><br><br>

지혜로운.. 슬기로운..<br>
로운이가 될 거예요 (와~~ 기특하네)<br><br>

<img src="https://i.imgur.com/sGheH9R.png" width=100% title="📷 "><br><br>

로운 로운, 우리 손자 로운이가<br>
이 세상 열 달 만에 어린이집 갑니다~<br><br>

<img src="https://i.imgur.com/dpPIVS8.png" width=100% title="📷 "><br><br>

로운이, 최고!<br><br>

<img src="https://i.imgur.com/zMm8Ezo.png" width=100% title="📷 ">
</td></tr></table>`,
`<table class='box' style="BACKGROUND:white url('https://blog.kakaocdn.net/dn/cNRdEW/btsN2lnXfqg/4hhAemVBwUY4WVniGa8NpK/img.png') no-repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>로운이가 '어린이집'에 갑니다</b></font><br>

로운 로운 우리 아들 로운이가<br>
이 세상 열 달 만에 어린이집 갑니다~<br><br>

<img src="https://i.imgur.com/mcrw4nS.png" width=100% title="📷 "><br><br>

"엄마 아빠, 다녀오겠습니다"<br>
하지만 아직 말은 못 한답니다~<br><br>

<img src="https://i.imgur.com/zIwDViw.png" width=100% title="📷 "><br><br>

벚꽃이 만발하는 사월이 오면<br>
그때는 말문이 터질 거예요~<br><br>

<img src="https://i.imgur.com/RybTBj1.png" width=100% title="📷 "><br><br>

가방 메고 아장아장 걸어갑니다<br>
그러나 오늘은 유모차로 간답니다~<br><br>

<img src="https://i.imgur.com/0tJrpRA.png" width=100% title="📷 "><br><br>

첫돌을 맞이하는 오월이 오면<br>
아마도 뛰어갈 거예요~<br><br>

<img src="https://i.imgur.com/cNdwJ8m.png" width=100% title="📷 "><br><br>

딱지치기 딱. 딱. 총싸움도 빵. 빵.<br>
그런데 지금은 기어다닌답니다~<br><br>

<img src="https://i.imgur.com/DVCi6Ev.png" width=100% title="📷 "><br><br>

이제 곧 말도 하고, 걷게 되면<br>
뛰뛰 빵빵, 자동차 놀이할 거예요~<br><br>

<img src="https://i.imgur.com/LSkjPkh.png" width=100% title="📷 "><br><br>

나는 나는 될 거예요<br>
어린이집 우등생이 될 거예요<br><br>

<img src="https://i.imgur.com/CvrcJzd.png" width=100% title="📷 "><br><br>

쩝쩝 냠냠, 맛있게 먹고<br>
새록 새록, 잠도 잘 자고<br><br>

<img src="https://i.imgur.com/dE8nfgr.png" width=100% title="📷 "><br><br>

꽁냥 꽁냥, 친구랑 사이좋게<br>
하하 호호, 재밌게 놀면서..<br><br>

<img src="https://i.imgur.com/CxBA4R5.png" width=100% title="📷 "><br><br>

지혜로운.. 슬기로운..<br>
로운이가 될 거예요~<br><br>

<img src="https://i.imgur.com/sGheH9R.png" width=100% title="📷 "><br><br>

로운 로운 우리 손자 로운이가<br>
이 세상 열 달 만에 어린이집 갑니다~<br><br>

<img src="https://i.imgur.com/dpPIVS8.png" width=100% title="📷 ">
</td></tr></table>`,
`<table class='box' style="BACKGROUND:white url('https://blog.kakaocdn.net/dn/cNRdEW/btsN2lnXfqg/4hhAemVBwUY4WVniGa8NpK/img.png') no-repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>로운이의 즐거운 하루</b></font><br>

옹알이 뿅뿅~, 로운이 콩콩콩~<br>
세상이 궁금해, 눈이 반짝반짝<br><br>

<img src="https://i.imgur.com/R9rU1Bl.png" width=100% title="📷 "><br><br>

어린이집 갑니다, 룰루랄라 신이 나요<br>
새 친구 만나러, 폴짝폴짝 뛰어갑니다<br><br>

<img src="https://i.imgur.com/LvnWD99.png" width=100% title="📷 "><br><br>

선생님 품에 안겨, 까르르~ 웃음꽃<br>
장난감 친구들과, 데굴데굴 춤춰요<br><br>

<img src="https://i.imgur.com/i6zw5qT.png" width=100% title="📷 "><br><br>

냠냠 맛있는 점심, 꿀꺽꿀꺽 잘 먹어요<br>
쿨쿨 달콤한 낮잠, 세상모르고 잘 자요<br><br>

<img src="https://i.imgur.com/eem9DgT.png" width=100% title="📷 "><br><br>

미끄럼틀 슝슝~, 꺄르르~ 신나는 놀이<br>
친구 손잡고 빙글, 모두 함께 즐거워요<br><br>

<img src="https://i.imgur.com/k2dzK8Z.png" width=100% title="📷 "><br><br>

블록 쌓기 차곡차곡, 멋진 성을 지어요<br>
색깔 크레파스로, <br>
알록달록 그림 그려요<br><br>

<img src="https://i.imgur.com/YmHc4xG.png" width=100% title="📷 "><br><br>

냠냠 맛있는 간식, 오물오물 잘 먹어요<br>
쿨쿨 달콤한 꿈나라, 예쁜 꿈을 꾸어요<br><br>

<img src="https://i.imgur.com/M5Bm43q.png" width=100% title="📷 "><br><br>

집에 갈 시간 땡! 엄마 아빠 보고파요<br>
오늘 하루 즐거웠어요, 내일 또 만나요<br><br>

<img src="https://i.imgur.com/GNQDz0n.png" width=100% title="📷 "><br><br>

씩씩한 로운이, 사랑스러운 로운이<br>
선아 어린이집, 최고로 즐거워요~~<br><br>

<img src="https://i.imgur.com/I0Ot68b.png" width=100% title="📷 "><br><br>

선아 어린이집! 최고야~!<br><br>

<img src="https://i.imgur.com/h29f3Sk.png" width=100% title="📷 ">

</td></tr></table>`,
`<table class='box' style="BACKGROUND:white url('https://i.imgur.com/dgZzxa6.jpeg') no-repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>울 엄마의 기구했던 생일</b></font><br>

용띠 해 무진년에 오시어<br>
용띠 해 갑진년에 가신..<br>
막내도 같은 띠, 용띠라 하시며<br>
좋아하셨던 나의 어머니!<br><br>

<img src="https://i.imgur.com/y3ZpxAB.jpeg" width=100% title="📷 "><br><br>

울 엄마 생일은 음력 12월 30일.<br>
"올해는 엄마 생일이 없네?"<br>
"어머야! 왜 내 생일이 없니?"<br><br>

<img src="https://i.imgur.com/R6GOl4s.png" width=100% title="📷 "><br><br>

섣달그믐은 늘 오는데<br>
음력 서른 날은 없는 해가 많아요<br>
그래서 이제부터 울 엄마 생일은<br>
무조건 설날 하루 전!<br><br>

<img src="https://i.imgur.com/r5RWfQF.jpeg" width=100% title="📷 "><br><br>

기구했던 엄마의 생일날이기에 <br>
모처럼 찾아온 온전한 올해는 <br>
케이크 들고 재롱 떨려 했는데, <br><br>

<img src="https://i.imgur.com/w6cSxyv.jpeg" width=100% title="📷 "><br><br>

가족들 사진 보면 환하게 웃으시던<br>
그 모습 보고 싶어 애써 준비했는데<br><br>

<img src="https://i.imgur.com/QzymRzx.jpeg" width=100% title="📷 "><br><br>

불과 며칠 남기고, <br>
왜 홀연히 떠나셨나요..<br><br>

<img src="https://i.imgur.com/hXEJRly.png" width=100% title="📷 "><br><br>

부엌에서 과수원으로 분주한 삶에도<br>
세월 따라 손주들 자라는 자리에, <br>
함께 웃던 그 모든 날의 그 모습들.. <br>
사진 속에는 선명하게 살아계시네요~<br><br>

<img src="https://i.imgur.com/a1SIJqp.jpeg" width=100% title="📷 "><br><br><br>


1번 성찬, 2번 덕찬, 3번 승찬! <br>
휴대폰의 무용지물에 가슴 아파졌고,<br><br>

<img src="https://i.imgur.com/MPh9L4b.jpeg" width=100% title="📷 "><br><br>

애지중지하던 통장을 내어주실 때<br>
가슴이 미어졌습니다~<br><br>

<img src="https://i.imgur.com/EbzDKiL.png" width=100% title="📷 "><br><br>

엘리베이터 안,<br>
"엄마! 안녕" 나의 손짓에<br>
맥없이 손 흔들어 주시던 그 모습!<br>
그것이 마지막 인사일 줄이야... 아~~<br><br>

<img src="https://i.imgur.com/osWK0ID.png" width=100% title="📷 "><br><br>

논화리 아버님 모셔온 그 자리, <br>
7층 로얄층에 편히 잠드소서. <br><br>

<img src="https://i.imgur.com/4NPx3Lj.png" width=100% title="📷 "><br><br>

섣달그믐 아닌 좋은 날에<br>
고통 없는 곳으로, <br>
부디 극락 왕생하세요. <br><br>

<img src="https://i.imgur.com/yeSYJSQ.jpeg" width=100% title="📷 "><br><br><br>


아버님! 어머님!<br>
언제나 고마웠습니다!<br><br>

<img src="https://i.imgur.com/HBrfxU3.png" width=100% title="📷 "><br><br>

나의 어머님!<br>
영원히 사랑합니다!<br><br>

<img src="https://i.imgur.com/b4GkUZR.png" width=100% title="📷 "><br><br>

나의 아버님!<br>
영원히 사랑합니다~~~<br><br>

<img src="https://i.imgur.com/FzxRBRY.jpeg" width=100% title="📷 ">
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

파랑아, <br>
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


파랑으로 온 너, <br>
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
파랑아!<br>
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

파랑 빛 미소로 우리 곁에 찾아온 너<br><br>

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

파랑~, 고운 빛깔 품고 온 아가<br><br>

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
<P class='mid'><font style="display:none"><b>할아버지 할머니가 보내는 파랑이의 축복</b></font><br>

작은 심장이 두근거려요<br>
파랑이의 세상이 시작되었네<br><br>

<img src="https://i.imgur.com/EjOLdak.jpeg" width=100% title="📷 "><br><br>

휘경아 경진아 애썼구나<br>
사랑스런 아가를 품에 안으니<br>
벅찬 기쁨에 눈물이 핑 돌아<br><br>

<img src="https://i.imgur.com/CJdzfoB.jpeg" width=100% title="📷 "><br><br>

파랑아, 할아버지 할머니는<br>
너의 웃음소리에 힘이 솟는다<br>
반짝이는 눈망울, 우리의 별이구나<br><br>

<img src="https://i.imgur.com/i9ngBef.jpeg" width=100% title="📷 "><br><br>

파랑 파랑 우리 아가 파랑이는<br>
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

파랑 파랑 우리 아가 파랑이는<br>
온 세상 축복 속에 태어났어요<br>
휘경아 경진아 마음껏 펼쳐라<br>
희망과 사랑으로 가득한 미래를...<br><br>

<img src="https://i.imgur.com/mF2tzCM.jpeg" width=100% title="📷 "><br><br>

작은 발걸음 하나하나에<br>
소중한 추억 만들어가려무나<br>
함께 노래하고 함께 웃으며...<br><br>

<img src="https://i.imgur.com/ZctEmq3.jpeg" width=100% title="📷 "><br><br>

파랑 파랑 우리 아가 파랑이는<br>
온 세상 축복 속에 태어났어요<br>
휘경아 경진아 마음껏 펼쳐라<br>
희망과 사랑으로 가득한 미래를...<br><br>

<img src="https://i.imgur.com/L3rAcTO.jpeg" width=100% title="📷 "><br><br>

파랑아, 사랑한다<br>
우리 아가 파랑아, 영원토록...<br><br>

<img src="https://i.imgur.com/zLvWsgv.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table class='box' style=\"BACKGROUND:#ffff66 url('https://blog.kakaocdn.net/dn/c1zh1C/btsOxjjjhOy/0EKEpY3Gqm7nDaYqlwlyuk/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>나레이션 : 할아버지 할머니의 사랑을, 파랑에게</b></font><br>

<font color='#FF5722'>[Intro Narration 할아버지] </font><br><br>

파랑아! <br>
이 할아버지는 네가 태어난다는 소식을 들었을 때, 가슴이 뭉클했단다.  <br><br>

그리고 눈물이 핑 돌 정도로 감격스러웠어. 너는 우리 가족에게 아주 큰 기쁨이란다.  <br><br>

엄마와 아빠가 함께 걸어온 사랑의 시간이, 이제 너라는 선물로 찾아온 거지<br><br>

<img src="https://i.imgur.com/6GPajoX.jpeg" width=100% title="📷 "><br><br>

할아버지는 네가 건강하게 자라고,  <br>
밝은 웃음으로 세상을 가득 채우길 바란단다.  <br><br>

언제나 네 곁을 지켜줄게.<br>
사랑한다, 파랑아.<br><br>

<img src="https://i.imgur.com/wlL9d4O.jpeg" width=100% title="📷 "><br><br><br>

<!-- img src='https://i.imgur.com/RCNQ4sG.jpeg' width=100% title='📷 로운 03'><br><br><br //-->


[노래]<br><br>

파랑아, 사랑스러운 우리 아가야<br>
우리 곁에 와줘서 정말 고마워<br>
엄마와 아빠를 닮은 너의 얼굴 보면<br>
우리는 눈물이 나도록 감사해<br><br>

<img src="https://i.imgur.com/2k7huWN.jpeg" width=100% title="📷 "><br><br>

파랑이 엄마, 휘경아<br>
파랑이 아빠, 경진아<br>
너희 둘의 사랑이 씨앗이 되었고<br>
이제는 결실이 된 기적을 축하해<br><br>

<img src="https://i.imgur.com/T2GtXMI.jpeg" width=100% title="📷 "><br><br>

서로 아껴주던 그날들을 기억해<br>
함께한 시간들이 열매를 맺었구나<br>
이제는 셋이서 더 큰 사랑으로<br>
더 깊고 큰 행복을 만들어가기를...<br><br>

<img src="https://i.imgur.com/4MpQ4uO.jpeg" width=100% title="📷 "><br><br>

파랑아, 할아버지 할머니는 좋아<br>
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

파랑이의 희망, 우리가 키워줄게<br>
파랑이의 소원, 우리도 기도할게<br>
맑은 마음으로 네 꿈을 피우고<br>
힘찬 기백으로 그 꿈을 펼쳐라<br><br>

<img src="https://i.imgur.com/0kbqYoU.jpeg" width=100% title="📷 "><br><br>

파랑아, 이 세상에 와줘서 고마워<br>
우리에게 너는 세상 가장 큰 기쁨이야<br>
큰 사랑 가득 담긴 이 노래처럼<br>
언제나 너를 축복할게<br><br>

<img src="https://i.imgur.com/iuJfbWo.jpeg" width=100% title="📷 "><br><br>

파랑아, 사랑해..<br>
언제나 너의 편이 되어줄게<br>
우리의 마음을 다하여<br>
너를 응원할게, 영원토록...<br><br>

<img src="https://i.imgur.com/a9I286V.jpeg" width=100% title="📷 "><br><br><br>


<font color='#FF5722'>[Outro Narration 할머니] </font><br><br>

파랑아! 사랑스러운 우리 손자야.  <br><br>

네가 엄마 뱃속에 있을 때부터,  <br>
할머니는 매일, 네가 태어날 날을 기다렸단다.  <br><br>

너의 작은 숨결 하나, 작은 웃음 하나.  <br>
그 모든 게, 우리에게는 말로 다 못할 기쁨이란다.  <br><br>

<img src="https://i.imgur.com/k0Hlv97.jpeg" width=100% title="📷 "><br><br>

너를 만나게 돼서, 정말 고맙구나.  <br>
앞으로 네 삶이, 사랑으로 가득하길, 할머니는 늘 축복할게.  <br><br>

사랑한다, 파랑아.  <br>
할머니는 언제나, 네 편이야.<br><br>

<img src="https://i.imgur.com/7rmGpfj.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#ccccff repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>할아버지 할머니의 사랑을, 파랑에게</b></font><br>

파랑아, 사랑스러운 우리 아가야<br>
우리 곁에 와줘서 정말 고마워<br>
엄마와 아빠를 닮은 너의 얼굴 보면<br>
우리는 눈물이 나도록 감사해<br><br>

<img src="https://i.imgur.com/2k7huWN.jpeg" width=100% title="📷 "><br><br>

파랑이 엄마, 휘경아<br>
파랑이 아빠, 경진아<br>
너희 둘의 사랑이 씨앗이 되었고<br>
이제는 결실이 된 기적을 축하해<br><br>

<img src="https://i.imgur.com/T2GtXMI.jpeg" width=100% title="📷 "><br><br>

서로 아껴주던 그날들을 기억해<br>
함께한 시간들이 열매를 맺었구나<br>
이제는 셋이서 더 큰 사랑으로<br>
더 깊고 큰 행복을 만들어가기를...<br><br>

<img src="https://i.imgur.com/4MpQ4uO.jpeg" width=100% title="📷 "><br><br>

파랑아, 할아버지 할머니는 좋아<br>
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

파랑이의 희망, 우리가 키워줄게<br>
파랑이의 소원, 우리도 기도할게<br>
맑은 마음으로 네 꿈을 피우고<br>
힘찬 기백으로 그 꿈을 펼쳐라<br><br>

<img src="https://i.imgur.com/0kbqYoU.jpeg" width=100% title="📷 "><br><br>

파랑아, 이 세상에 와줘서 고마워<br>
우리에게 너는 세상 가장 큰 기쁨이야<br>
큰 사랑 가득 담긴 이 노래처럼<br>
언제나 너를 축복할게<br><br>

<img src="https://i.imgur.com/iuJfbWo.jpeg" width=100% title="📷 "><br><br>

파랑아, 사랑해..<br>
언제나 너의 편이 되어줄게<br>
우리의 마음을 다하여<br>
너를 응원할게, 영원토록...<br><br>

<img src="https://i.imgur.com/a9I286V.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#ccffff repeat fixed left top;' cellpadding='2' width=100%><tr valign=middle><td class='lt04_1'>
<P class='mid'><font style="display:none"><b>파랑이에게 보내는 엄마 아빠의 축복</b></font><br>

사랑스러운 우리 아기, 파랑아<br>
건강하게 우리에게 와줘서 고마워<br>
온 세상이 너의 탄생을 축하해<br>
모두가 기뻐하며 축복을 보내<br><br>

<img src="https://i.imgur.com/50DKNy2.jpeg" width=100% title="📷 "><br><br>

작은 손짓, 작은 발길이 감격스러워<br>
너의 웃음, 너의 울음에 가슴이 벅차<br>
바다 색, 하늘 빛깔 닮은 파랑아<br>
너는 우리에게 소중한 기적의 선물이야 <br><br>

<img src="https://i.imgur.com/57LKuaT.jpeg" width=100% title="📷 "><br><br>

파랑이의 꿈, 펼쳐질 세상이 온 거야<br>
햇살이 눈부시고 뭉게구름이 피어나<br>
너를 안을 수 있어서 너무 기뻐<br>
너와 마주할 수 있어, 너무 행복해<br><br>

<img src="https://i.imgur.com/lR4M35l.jpeg" width=100% title="📷 "><br><br>

튼튼하고 건강하게 자랄 수 있도록<br>
항상 든든하게 너의 곁에 서 있을게<br>
언제나 사랑으로 너의 모습 바라볼게<br>
모든 순간, 모든 날이 행복하기를...<br><br>

<img src="https://i.imgur.com/M1jCzc6.png" width=100% title="📷 "><br><br>

파랑이의 미래를 함께 걸을 거야<br>
희망을 더 크게, 키워줄 거야<br>
사랑스런 눈빛으로 세상을 보고<br>
사랑 가득한 마음으로 살 수 있도록...<br><br>

<img src="https://i.imgur.com/OXDEOFm.jpeg" width=100% title="📷 "><br><br>

파랑이의 꿈, 우리가 키워줄게<br>
파랑이의 길, 우리가 밝혀줄게<br>
엄마 품에서 네 꿈이 피어나고<br>
아빠 품에선 그 꿈이 자랄 거야<br><br>

<img src="https://i.imgur.com/1661ojP.jpeg" width=100% title="📷 "><br><br>

파랑아, 사랑해<br>
이 세상에 빛으로 와줘서 고마워<br>
너는 우리 삶에서<br>
가장 찬란한 봄날의 시작이야<br><br>

<img src="https://i.imgur.com/2yfNUH1.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#99ffff url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt03'>
<P class='mid'><font style="display:none"><b>파랑아, 우리 곁에 올 그날까지</b></font><br>

조용한 밤, 너를 떠올려  <br>
아직 만나지 못한 너의 미소  <br>
작은 심장 두근대는 소리  <br>
우릴 향한 사랑의 시작  <br><br>

<img src="https://i.imgur.com/SRJ3uC7.png" width=100% title="📷 "><br><br>

파랑아, 너는 우리 꿈이야  <br>
하루하루 너를 그리며 살아  <br>
작은 손, 작은 발, 작은 눈망울  <br>
세상 가장 귀한 선물  <br><br>

<img src="https://i.imgur.com/0bipMY1.jpeg" width=100% title="📷 "><br><br>

파랑아, 사랑한단 말로는 모자라  <br>
너의 모든 순간 함께할게  <br>
건강하게 웃으며 와줘  <br>
우린 널 위해 준비돼 있어  <br><br>

<img src="https://i.imgur.com/sOPIUyq.jpeg" width=100% title="📷 "><br><br>

파랑아, 너의 이름 부를 때마다  <br>
가슴이 벅차 눈물이 흘러  <br>
너를 품에 안을 그날만 기다려  <br>
우리의 온 세상이 돼줄게  <br><br>

<img src="https://i.imgur.com/cRSPNHr.jpeg" width=100% title="📷 "><br><br>

파랑아, 자랑스러운 우리 아기야  <br>
네가 오는 길 모든 순간이 기적이야  <br>
작은 기침, 웃음소리까지도  <br>
우리의 행복이 돼줄 거야  <br><br>

<img src="https://i.imgur.com/fc8F3W9.jpeg" width=100% title="📷 "><br><br>

파랑아, 밤하늘 별들처럼  <br>
너의 길엔 빛이 가득하길  <br>
넘어질 땐 우리가 손 내밀게  <br>
언제나 네 편이 되어줄게  <br><br>

<img src="https://i.imgur.com/TU0hQTE.jpeg" width=100% title="📷 "><br><br>

파랑아, 사랑한단 말로는 모자라  <br>
너의 모든 순간 함께할게  <br>
건강하게 웃으며 와줘  <br>
우린 널 위해 준비돼 있어  <br><br>

<img src="https://i.imgur.com/eXq2HeO.jpeg" width=100% title="📷 "><br><br>

파랑아, 사랑해  <br>
언제까지나, 영원토록...<br>
</td></tr></table>`,
`<table style='BACKGROUND:#fce4ec url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt01_2'>
<P class='mid'><font style="display:none"><b>파랑이의 노래</b></font><br>

하늘빛의 선물로 온 너, 작은 파랑아<br>
바다의 품 속에서 자란 소중한 꿈 <br>
우리 마음속에 별처럼 빛나는  <br>
파랑이, 넌 우리의 희망  <br><br>

<img src="https://i.imgur.com/Pg3K0iC.jpeg" width=100% title="📷 "><br><br>

파랑아, 넌 세상을 밝혀 주는 빛  <br>
우리 가슴속에 영원한 기쁨  <br>
파란 하늘처럼, 깊은 바다처럼  <br>
파랑아, 넌 사랑으로 자랄 거야  <br><br>

<img src="https://i.imgur.com/Zu54hF6.jpeg" width=100% title="📷 "><br><br>

작은 손, 작은 발로 세상을 만나  <br>
희망의 노래를 부를 아가야  <br>
엄마와 아빠의 끝없는 사랑 속에 <br>
파랑아, 넌 영원히 빛나  <br><br>

<img src="https://i.imgur.com/AIyUY5w.jpeg" width=100% title="📷 "><br><br>

파란색 바다 속 무한한 꿈을  <br>
파란색 하늘 속 자유를 담고  <br>
너와 함께할 모든 날이  <br>
기적 같은 순간, 특별한 선물  <br><br>

<img src="https://i.imgur.com/gdBXqxp.jpeg" width=100% title="📷 "><br><br>

파랑아, 넌 세상을 밝혀 주는 빛  <br>
우리 가슴속에 영원한 기쁨  <br>
파란 하늘처럼, 깊은 바다처럼  <br>
파랑아, 넌 사랑으로 자랄 거야  <br><br>

<img src="https://i.imgur.com/JrunL0C.jpeg" width=100% title="📷 "><br><br>

파랑아, 넌 우리의 소망  <br>
너와 함께 그리는 하루하루  <br>
사랑으로 가득 채워진 이 세상에서  <br>
파랑아, 넌 언제나 빛날 거야 <br><br>

<img src="https://i.imgur.com/2aOxcEh.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#F6FBFF url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt01_1'> <!--  class='lt01_1' #33ffff #F0F4FF (매우 연한 하늘색) #FFF9F0 (연한 아이보리) #F3E5F5 라벤더//-->
<P class='mid'><font style="display:none"><b>파랑이의 꿈</b></font><br>

별이 내려와 속삭인 밤, <br>
파랑이의 시작  <br><br>

<img src="https://i.imgur.com/oGLrlXN.png" width=100% title="📷 별이 내려오는.."><br><br>

작은 손으로 세상을 안아줄 너  <br>
하늘의 깊은 빛, 바다의 푸른 물결  <br>
파랑아, 넌 우리의 가장 큰 꿈  <br><br>

<img src="https://i.imgur.com/6lUSTGu.png" width=100% title="📷 하늘과 바다 사이의 파랑이"><br><br>

파랑아, 너는 세상을 환히 비춰 줄 별  <br>
희망 속에 빛나는 우리 사랑의 아이  <br>
너의 웃음은 태양처럼 따뜻하고  <br>
파랑아, 넌 소중한 기적이야  <br><br>

<img src="https://i.imgur.com/CKpcsbi.png" width=100% title="📷 두 팔 벌리고 환하게 웃는 파랑이"><br><br>

엄마의 품에서 자라는 너의 온기  <br>
아빠의 손길로 느끼는 세상의 너  <br>
작은 발걸음으로 이뤄낼 모든 꿈  <br>
파랑아, 넌 끝없는 희망을 품었어  <br><br>

<img src="https://i.imgur.com/pMSA1MH.png" width=100% title="📷 엄마 아빠 사이에서 행복한 표정의 파랑이"><br><br>

하늘 위를 바라보며 우리는 약속해  <br>
너의 날개가 커져서 <br>
세상에 날 수 있길..  <br><br>

바다처럼 넓은 마음으로 세상을 품고  <br>
파랑아, 넌 사랑으로 물들일 거야  <br><br>

<img src="https://i.imgur.com/idF1lbd.png" width=100% title="📷 무지갯빛 하늘을 향해 선 날개 단 파랑이"><br><br>

파랑아, <br>
너는 세상을 환히 비춰 줄 별<br><br>

희망 속에 빛나는 우리 사랑의 아이  <br>
너의 웃음은 태양처럼 따뜻하고  <br>
파랑아, 넌 소중한 기적이야<br><br>

<img src="https://i.imgur.com/GKmhyZB.png" width=100% title="📷 하늘에 환한 빛으로 떠있는 파랑이"><br><br>

파랑아, <br>
우리의 노래는 너를 향해 울려  <br><br>

너와 함께하는 하루가 가장 빛나  <br>
사랑으로 가득한 세상 속에서  <br>
파랑아, 넌 언제나 특별할 거야  <br>

<img src="https://i.imgur.com/x9fwNg7.png" width=100% title="📷 엄마 아빠의 품 속에서 빛나는 파랑이의 발">
</td></tr></table>`,
`<table style='BACKGROUND:#00ffff url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt02_4'>
<P class='mid'><font style="display:none"><b>파랑아, 너는 하늘을 넘어온 작은 기적</b></font><br>

파랑아! 아빠가 오늘 너에게 아주 특별한 이야기를 들려줄게. <br><br>

너는 알까? 엄마와 아빠가 처음 너를 느낀 그날, 하늘이 얼마나 파랗고 아름다웠는지. <br><br>

우리는 그날 너를 '파랑이'라고 불렀단다, 하늘의 색처럼 순수하고 빛나는 이름이야.<br><br>

<img src="https://i.imgur.com/nyLkI5f.jpeg" width=100% title="📷 "><br><br><br>


파랑아, 너는 하늘에서 내려온 작은 기적이란다. <br><br>

하늘의 바람이 속삭이며 우리에게 선물을 주겠다고 약속했지. <br><br>

그리고 너는 그 약속을 이루기 위해 엄마 품속에서 자라고 있어. <br><br>

아빠는 매일 너를 생각하며 얼마나 자랑스럽고 행복한지 몰라.<br><br>

<img src="https://i.imgur.com/7meDLca.png" width=100% title="📷 "><br><br><br>


파랑아! 네가 자라고 있는 동안, 아빠는 세상의 모든 멋진 이야기를 준비하고 있어. <br><br>

너와 함께 나무 아래서 바람을 느끼고, 별빛 아래서 너의 웃음을 듣고 싶단다. <br><br>

네 작은 손으로 아빠의 손을 꼭 잡아주는 날을 상상하면, 아빠는 그저 눈물이 날 만큼 기쁘고 감사해.<br><br>

<img src="https://i.imgur.com/JoHhZoJ.jpeg" width=100% title="📷 "><br><br><br>


파랑아, 건강하게 자라서 아빠와 만나면 너에게 세상의 놀라운 것들을 보여줄 거야. <br><br>

커다란 나무, 바람의 속삭임, 그리고 사랑이 가득한 가족의 품이 얼마나 따뜻한지. <br><br>

아빠는 매일 너의 첫 번째 웃음과 네 작은 발걸음을 기대하며 사랑으로 가득한 날을 꿈꾼단다.<br><br>

<img src="https://i.imgur.com/oqtNtXY.jpeg" width=100% title="📷 "><br><br><br>


파랑아! 너는 엄마와 아빠의 마음속에서 빛나는 별처럼, 세상을 밝히는 빛이 될 거란다. <br><br>

그리고 우리는 항상 너를 사랑하고 응원할 거야. <br><br>

우리 파랑아, 건강하게 자라서 아빠와 만나자. <br><br>

아빠가 네게 세상에서 가장 큰 사랑을 보여줄게.<br><br>

<img src="https://i.imgur.com/0r7zTEn.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#33ffcc url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt02_5'>
<P class='mid'><font style="display:none"><b>파랑이와 세상 탐험</b></font><br>

아빠는 작은 파랑이를 품에 안고 다정하게 속삭였어요. <br><br>

파랑아, 내 소중한 아가. 네가 엄마 품속에 들어오던 그날, 우리 마음엔 별처럼 빛나는 기적이 생겼단다.<br><br>

<img src="https://i.imgur.com/64Vybn4.jpeg" width=100% title="📷 "><br><br><br>


파랑이는 아빠의 말을 들으며 작은 눈을 깜박였지요. <br><br>

아빠는 따뜻한 미소를 지으며 이야기를 이어갔습니다. <br><br>

"파랑아, <br>
세상은 넓고 신비로운 곳이란다.<br><br>

내가 어릴 때, 커다란 나무 아래에서 바람이 속삭이는 소리를 들으며 꿈을 꾸었어. <br><br>

그리고 나무 꼭대기에서 보면 하늘이 얼마나 파랗고 멋진지 알 수 있었지."<br><br>

<img src="https://i.imgur.com/Sc9hOCx.jpeg" width=100% title="📷 "><br><br><br>


파랑이는 작은 손을 움찔하며 아빠의 말에 귀를 기울였어요. <br><br>

아빠는 파랑이를 살짝 들어올려 작은 발을 가리키며 말했지요. <br><br>

"파랑아, 이 작은 발로 너는 언젠가 나무 아래를 달리고, 햇살을 따라 멀리 걷게 될 거야. <br><br>

처음 걸음을 내딛는 그 순간이 얼마나 특별할지 알까?"<br><br>

<img src="https://i.imgur.com/bLr0Nbk.jpeg" width=100% title="📷 "><br><br><br>


아빠는 살며시 파랑이의 손을 잡으며 말했어요. <br><br>

"세상은 때때로 낯설고 어려워 보일 수 있지만, 파랑아, 너의 용기는 모든 것을 이겨낼 거야. <br><br>

그리고 네 발걸음마다 새로운 이야기가 시작될 거란다."<br><br>

<img src="https://i.imgur.com/GvEikGs.png" width=100% title="📷 "><br><br><br>


파랑이는 미소를 띠며 아빠에게 더 가까이 다가갔습니다. <br><br>

아빠는 마지막으로 속삭였어요. <br><br>

"파랑아, 네가 어디로 가든, 우리는 항상 너의 곁에 있을 거야. <br><br>

별처럼 빛나는 세상을 너의 사랑으로 가득 채우길 바란다."<br><br>

<img src="https://i.imgur.com/x2bik4Z.png" width=100% title="📷 "><br><br><br>


파랑이는 아빠의 품에서 편안히 잠이 들었고, 그 순간 아빠는 더없이 행복했답니다.<br><br>

<img src="https://i.imgur.com/lZRhRzO.png" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#ccffff url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt02_3'>
<P class='mid'><font style="display:none"><b>파랑이와 하늘의 선물</b></font><br>

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

"이 씨앗은 우리의 파랑이가 될 거야"<br><br>

엄마와 아빠는 기쁨과 설렘으로 속삭였지. <br><br>

파랑이는 엄마 품속에서 자라며, 사랑과 행복의 멜로디로 가득한 세상을 꿈꾸었단다.<br><br>

<img src="https://i.imgur.com/Fpub0Af.png" width=100% title="📷 "><br><br><br>


시간이 흘러 어느날, 엄마는 파랑이에게 이렇게 말했어. <br><br>

"파랑아, <br>
너는 하늘에서 내려온 작은 별이란다. 세상을 환히 비추고 사랑을 전하기 위해 태어난 소중한 기적이지<br><br>

엄마는 다정한 목소리로 이야기를 들려주며 파랑이에게 다가올 날들을 축복했어.<br><br>

<img src="https://i.imgur.com/OIGIImU.jpeg" width=100% title="📷 "><br><br><br>


언젠가 너는 첫 번째 발걸음을 내딛을 거야, 엄마는 말했단다. <br><br>

그리고 바람처럼 자유롭게 달리고, 별들처럼 반짝일 거란다.<br><br>

세상은 넓고 놀라운 것들로 가득하지만, 너의 웃음과 사랑이 세상을 더 아름답게 만들 거야."<br><br>

<img src="https://i.imgur.com/FU3YJoy.jpeg" width=100% title="📷 "><br><br><br>


파랑이는 그 이야기를 듣고 마음속에서 따스한 햇살이 퍼지는 듯한 느낌을 받았어. <br><br>

"엄마, 나는 어떻게 사랑을 전할 수 있을까요?" 파랑이가 물었지.<br><br>

엄마는 환히 웃으며 대답했어. <br><br>

"파랑아, 사랑은 아주 간단하단다. <br>
네가 웃을 때, 네가 따뜻한 마음으로 누군가를 바라볼 때, 그 모두가 사랑을 전하는 방법이란다."<br><br>

<img src="https://i.imgur.com/3bG3FY5.jpeg" width=100% title="📷 "><br><br><br>


그리고 파랑이는 엄마의 품에서 조용히 속삭였어. <br><br>

"엄마, <br>
나도 하늘의 별처럼 빛날 거예요."<br><br>

엄마는 파랑이를 꼭 안아주며 속삭였단다. <br><br>

"파랑아, 넌 이미 우리 세상을 환히 비추는 별이란다."<br><br>

<img src="https://i.imgur.com/I3b5o2N.jpeg" width=100% title="📷 ">
</td></tr></table>`,
`<table style='BACKGROUND:#82eafa url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt02_1'>
<P class='mid'><font style="display:none"><b>파랑이의 소중한 여정</b></font><br>

아주 오랜 옛날, 하늘과 바다는 특별한 약속을 나누었어요. <br><br>

"우리의 사랑과 희망을 담은 귀한 선물을 세상에 보내자," <br>
하늘이 속삭였지요<br><br>

바다는 고요한 물결로 대답했어요. <br><br>

"좋아, 우리의 모든 마음을 담아 특별한 존재를 만들자."<br><br>

<img src="https://i.imgur.com/xlnBjVI.png" width=100% title="📷 "><br><br><br>


그리고 그 순간, 파란빛으로 빛나는 작은 별이 하늘에서 내려왔어요. <br><br>

그 별은 하늘의 사랑과 바다의 품을 담고 있었답니다. <br><br>

그래서 모두 '파랑'이라고 불렀어요. <br><br>

"파랑아, 넌 우리의 희망과 사랑을 품고 있어. 넌 세상에 무한한 기쁨과 따뜻함을 줄 존재란다," <br>
하늘과 바다가 말했어요.<br><br>

<img src="https://i.imgur.com/Lzj74no.png" width=100% title="📷 "><br><br><br>


파랑이는 점점 세상으로 내려가 엄마와 아빠를 만나게 되었어요. <br><br>

엄마는 파랑이를 품에 안으며 이렇게 속삭였답니다. <br><br>

"파랑아, 넌 우리에게 온 가장 소중한 선물이야. <br>
너의 존재가 우리의 하루를 밝히고, <br>
우리의 마음을 가득 채워준단다."<br><br>

<img src="https://i.imgur.com/fvBbGEs.jpeg" width=100% title="📷 "><br><br><br>


아빠는 작은 파랑이의 손을 잡으며 말했어요. <br><br>

"우리는 너를 기다리는 동안 얼마나 설레고 행복했는지 몰라. <br>
너와 함께할 모든 날들이 더없이 특별하고 소중할 거야."<br><br>

<img src="https://i.imgur.com/KsJNMQD.jpeg" width=100% title="📷 "><br><br><br>


파랑이의 눈에는 하늘의 빛과 바다의 깊은 물결이 담겨 있었어요. <br><br>

파랑이는 언제나 사랑받으며, 세상에 기쁨과 희망을 전해줄 존재가 될 거예요. <br><br>

그리고 엄마와 아빠는 파랑이가 커가는 동안, 사랑과 기대, 그리고 무한한 희망을 함께 나누며 하루 하루를 보내겠지요.<br><br>

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