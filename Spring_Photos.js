const title0 = "차늬's 양양 & 친구의 노래"

odi = [
"https://cdn1.suno.ai/7f0bb960-32ea-4abd-96e1-e6d9d31f6a7d.mp3|[포크] 벚꽃이 피어난 날 (7080 포크, 120~130 BPM, 활기찬 경쾌한 템포 통기타 하모니카 부드러운 타악기)_MW04 v5.5||",
"https://cdn1.suno.ai/481bb523-3196-49fb-b0c8-6828c1c8bd18.mp3|[트롯 댄스] 벚꽃이 피어난 날 (댄스, 빠른 템포의 EDM 트로트 크로스오버로, 밝은 신스 리드, 4/4 박자 킥 드럼)_W06 v5.5||",
"https://cdn1.suno.ai/6487704f-c404-4d24-b0ab-2140523ed8c9.mp3|[댄스] 벚꽃이 피어난 날 (전통 요들송에서 영감을 받은 멜로딕 EDM 에스닉 EDM 페스티벌 EDM, 활기차고 자연스럽고 향수를 불러일으키고 즐겁다)_W11 v5.5||",
"https://cdn1.suno.ai/55dedbd8-fc5b-4a60-a4c8-65b57170e5dc.mp3|[발라드] 벚꽃이 피어난 날 <br>(전통 사극 발라드, 가야금 대금 해금 저음의 전통 북, 오케스트라 현악기)_W09 v5.5||",
"https://cdn1.suno.ai/515c5fe1-0fa0-48de-872f-2e0674e1a43b.mp3|[포크] 벚꽃 아래 그날처럼.. (7080 포크, 120~130 BPM, 활기찬 경쾌한 템포, 통기타, 하모니카, 부드러운 타악기)_MW03 v5.5||",
"https://cdn1.suno.ai/51982a49-ee88-4c4b-9c19-63898d34f9e1.mp3|[트로트] 벚꽃 아래 그날처럼.. (즐겁고 향수를 불러일으키지만 활기찬, 브라스, 아코디언, 리듬 드럼, 신스 베이스)_MW01 v5.5||",
"https://cdn1.suno.ai/cf9cbabe-5faa-4aba-bbd7-eeb8e71f2c19.mp3|[심포니] 벚꽃 아래 그날처럼.. (심포닉 EDM, 오케스트라 트랜스, 140 BPM, 바이올린과 피아노 선율, 몽환적이고, 초현실적이며, 희망적이고, 웅장)_MW04 v5.5||",
"https://cdn1.suno.ai/599299b5-bafb-490e-a5e8-8a1478b5ba49.mp3|[발라드] 벚꽃 아래 그날처럼.. <br>(전통 사극 발라드, 가야금 대금 해금 저음의 전통 북, 오케스트라 현악기)_W02 v5.5||",
"https://cdn1.suno.ai/27f272c0-4cb3-4af4-852b-f04043294c3b.mp3|[포크] 현산의 봄, 우리는 아직 피어있어요 (7080 포크, 120~130 BPM, 활기찬 경쾌한 템포, 통기타 하모니카 타악기)_MW08 v5.5||",
"https://cdn1.suno.ai/fd452aa2-78c0-483f-8d1c-9235e0fbb9b2.mp3|[트로트] 현산의 봄, 우리는 아직 피어있어요 (경쾌하고 리드미컬한 트로트. 신나는 댄스 비트, 콜앤리스폰스 듀엣 특징)_MW06 v5.5||",
"https://cdn1.suno.ai/b9d61cf7-84c4-4702-afd2-bebbf2dd2473.mp3|[심포니] 현산의 봄, 우리는 아직 피어있어요 (영화적인 오케스트라 팝, 강렬하면서도 품격 있는 남성 보컬, 성숙한 오페라 팝 스타일, 우아한 현악 섹션, 트럼펫 악센트, 웅장하고 승리감 넘치는)_M02 v5.5||",
"https://cdn1.suno.ai/25ed1fd7-e0a0-4c9a-866d-a85318ca97cb.mp3|[미분류] 현산의 봄, 우리는 아직 피어있어요 (바이올린, 신스팝, 남녀 보컬, 템포는 약 80bpm으로 다소 느린 편)_WM02 v5.5||",
"https://cdn1.suno.ai/be0c4fe5-0146-40dc-bb28-a858f05333ae.mp3|[미분류] 현산의 봄, 우리는 아직 피어있어요 <br>(하드록과 댄서블한 그루브 디스코 스타일의 하이햇, 부드러우면서도 약간 거친 록 에너지가 섞인 느낌)_M04 v5.5||",
"https://cdn1.suno.ai/55ce3e62-4fa9-44d6-8e56-0bc6ffeca832.mp3|[미분류] 벚꽃 아래, 우리라는 계절 <br>(바이올린, 신스팝, 남녀 보컬, 템포는 약 80bpm으로 다소 느린 편)_WM11 v5.5||",
"https://cdn1.suno.ai/495b66fc-9338-4009-9c06-508863d8d8e3.mp3|[미분류] 벚꽃 아래, 우리라는 계절 <br>(바이올린, 신스팝, 저음의 남성 보컬, 템포는 약 80bpm으로 다소 느린 편)_M04 v5.5||",
"https://cdn1.suno.ai/d1ad38b4-6043-4867-8f2a-6bb3d24cbcb0.mp3|[미분류] 벚꽃 아래, 우리라는 계절 <br>(이모 팝 보컬 멜로디, 감성적인 하모니, 부드럽고 미니멀한 퍼커션)_WM12 v5.5||",
"https://cdn1.suno.ai/2a971e4c-ffd9-471f-8898-f6ddf16914f2.mp3|[트로트] 벚꽃 아래 그날-트로트 리빌드 <br>(브라스와 신스 베이스, 생동감 넘치는 드럼 패턴, 남녀 듀엣의 콜앤리스폰스 보컬, 장난스러우면서도 감성적)_MW02 v5.5||",
"https://cdn1.suno.ai/e3a40b6d-f80a-4a57-be1a-ef80ba20538e.mp3|[발라드] 우리의 봄은 아직-발라드 리빌드 (한국 드라마 OST 발라드, 섬세한 다이내믹 풍부한 리버브, 표현력 있는 프레이징, 감성적, 영화 같은 사운드스케이프)_W02 v5.5||",
"https://cdn1.suno.ai/4af10a90-4cb4-4dbc-9d09-79deb6feef60.mp3|[포크] 남대천 따라 봄이 흐르네 (7080 포크, 120~130 BPM, 활기찬 경쾌한 템포, 통기타, 하모니카, 부드러운 타악기)_MW04 v5.5||",
"https://cdn1.suno.ai/95e1f595-fd64-4913-b3fa-fca0c1b8a5af.mp3|[브라스 행진] 남대천 따라 봄이 흐르네 (밝고 힘찬 금관악단 행진곡. 두드러지는 트럼펫, 트롬본, 튜바는 영웅적이고 축제적인)_M05 v4.5||",
"https://cdn1.suno.ai/e8fc2622-8d12-4fe6-8420-b55e348a80d5.mp3|[심포니] 남대천 따라 봄이 흐르네 (오케스트라 선율 웅장한 앙상블, 강렬한 분위기)_MW10 v5.5||",
"https://cdn1.suno.ai/2a2d6279-3260-4205-b85c-a571027b8c09.mp3|[심포니] 남대천 따라 봄이 흐르네 <br>(오페라 발라드, 극적인 오케스트레이션, 파워풀한 소프라노 바리톤 보컬)_MW11 v5.5||",
"https://cdn1.suno.ai/1e73e612-91c0-4e6e-83ef-6a6e4ad4530b.mp3|[미분류] 남대천 따라 봄이 흐르네 (1985년 클래식 이탈로 디스코 그루브, 크레센도 신스와 강렬한 드럼 비트, 95 BPM)_M10 v5.5||",
"https://cdn1.suno.ai/989025e4-c8b9-421d-91db-657084283485.mp3|1*[포크] 한계목이 부르는 연어의 귀향-리얼리티 리빌드 (7080, 영화 같은 분위기, 향수, 자연에서 영감을 받은, 웅장한 오케스트라 현악기, 125 BPM)_M10 v5.5||",
"https://cdn1.suno.ai/7cf81c0d-f645-4168-940c-1269dc3aaddf.mp3|1*[댄스] 한계목이 부르는 연어의 귀향-리얼리티 리빌드 (남성 보컬 1980년대, 이탈로 디스코, 신스웨이브, 유로 댄스)_M04 v5.5||",
"https://cdn1.suno.ai/958d5818-2ff3-4d29-8fa5-b6b6edc5f908.mp3|1*[심포니] 한계목이 부르는 연어의 귀향-리얼리티 리빌드 (웅장한 합창 음악, 서사적 장엄, 현악기와 관악기 갖춘 풀 오케스트라, 남녀 혼성 합창단, 75-90bpm)_M02 v5.5||",
"https://cdn1.suno.ai/f16d876a-f8d2-49df-86f8-4edc3d46c263.mp3|1*[심포니] 한계목이 부르는 연어의 귀향-리얼리티 리빌드 <br>(오페라 발라드, 극적인 오케스트레이션, 파워풀한 소프라노 바리톤 보컬)_W03 v5.5||",
"https://cdn1.suno.ai/bf1f71e6-1b2a-4cb2-87ca-7789d8319891.mp3|1*[발라드] 한계목이 부르는 연어의 귀향-리얼리티 리빌드 (다큐멘터리 사운드 트랙, 영화적 사실적, 70-85 bpm, 피아노 은은한 스트링, 미묘한 오케스트라)_W01 v5.5||",
"https://cdn1.suno.ai/84ca8fa5-b0a9-4542-889e-942f73ac6f04.mp3|1*[미분류] 한계목이 부르는 연어의 귀향-리얼리티 리빌드 (크로스오버 국악 퓨전 스타일, 가야금과 대금에 오케스트라 현악기, 70-90bpm, 자연과 생명의 순환 담은 서사, 신비롭고 신성한 느낌)_MW01 v5.5||",
"https://cdn1.suno.ai/0d739570-e3d1-48a7-ab9c-a0ac2be9b78c.mp3|1*[미분류] 한계목이 부르는 연어의 귀향-리얼리티 리빌드 (하드록과 댄서블한 그루브 디스코 스타일의 하이햇, 부드러우면서 약간 거친 록 에너지가 섞인 느낌)_M08 v5.5||",
"https://cdn1.suno.ai/2ae6178e-6b94-40fe-a353-f585407eeadb.mp3|1*[미분류] 한계목이 부르는 연어의 귀향-리얼리티 리빌드 <br>(저음의 남성 보컬, 팀파니, 댄스 플로어 트랩, 덥 베이스 깊고 조용한 드럼)_M05 v5.5||",
"https://cdn1.suno.ai/38fa027d-23a5-408d-9c99-5e27046fa100.mp3|[트롯 댄스] 양양 모노골, 하얀 설렘의 노래 (경쾌하고 리드미컬한 트로트 신나는 댄스)_W06 v5.5||",
"https://cdn1.suno.ai/d8c30b4a-9265-4447-b625-3f49924bc366.mp3|[트롯 댄스] 양양 모노골, 하얀 설렘의 노래 (댄스, 빠른 템포 EDM 트로트 크로스오버로, 밝은 신스 리드, 4/4박자 킥 드럼)_W04 v5.5||",
"https://cdn1.suno.ai/3ebb3160-331a-4cc5-985a-859328a12eb4.mp3|[댄스] 양양 모노골, 하얀 설렘의 노래 <br>(1980년대 이탈로 디스코, 뛰어난 신스웨이브, 유로 댄스, 남성 보컬)_M10 v5.5||",
"https://cdn1.suno.ai/feaf9150-a197-4fc1-b307-6c73a8c6c7f9.mp3|[발라드] 양양 모노골, 하얀 설렘의 노래 <br>(전통 사극 발라드, 가야금 대금 해금 저음의 전통 북, 오케스트라 현악기)_W07 v5.5||",
"https://cdn1.suno.ai/df42096a-6084-4480-821b-29aa6cb7dc9e.mp3|[미분류] 양양 모노골, 하얀 설렘의 노래 <br>(경기 민요 형식, 굿거리 세마치 리듬, 민요풍 만들려다 퓨전트로트 된 느낌)_W01 v5.5||",
"https://cdn1.suno.ai/dd33f44a-1041-4b86-b020-d95ba43431dc.mp3|[미분류] 양양 모노골, 하얀 설렘의 노래 <br>(하드록과 댄서블한 그루브 디스코 스타일의 하이햇, 부드러우면서도 약간 거친 록 에너지가 섞인 느낌)_M07 v5.5||",
"https://cdn1.suno.ai/37c51408-d126-4429-adf1-d5bba9335ae2.mp3|[포크] 모노골의 하얀 날개 (7080 포크, 남성 보컬, 향수를 불러일으키는 따뜻한 분위기, 어쿠스틱 기타 중심, 하모니카 솔로, 휘파람 소리, 부드러운 타악기, 85 BPM, 감성적인 스토리텔링)_M02 v5.5||",
"https://cdn1.suno.ai/3399985e-bb98-48ef-93d1-d0e2f0f3ef1d.mp3|[트로트] 모노골의 하얀 날개 <br>(남녀 듀엣, 콜앤리스폰스, 활기찬 분위기, 브라스 섹션, 아코디언, 140BPM, 즐겁고 에너지 넘치는 곡)_MW01 v5.5||",
"https://cdn1.suno.ai/a4a22ef9-1c1d-4940-929b-9e50781c61f0.mp3|[댄스] 모노골의 하얀 날개 <br>(현대 K팝 댄스, 강렬한 일렉트로닉 비트, 신스 사운드, 에너지 넘치는, 딥 베이스, 128 BPM, 축제 분위기)_W02 v5.5||",
"https://cdn1.suno.ai/861591d5-2446-4897-bd0f-1afb041cde54.mp3|[포크] 산벚꽃의 노래 (7080 포크송 서정적, 통기타 멜로디 중심으로 하모니카와 휘파람 소리, 봄 벚꽃 우정 사랑 희망)_MW01 v5.5||",
"https://cdn1.suno.ai/9b6882d0-52f2-4ea9-bd3f-255b793f5c98.mp3|[트롯 발라드] 산벚꽃의 노래 <br>(경쾌한 리듬의 트로트 음악으로, 남녀 듀엣이 주고받는 구조, 벚꽃, 사랑, 우정, 추억 등 밝고 활기찬 멜로디)_MW02 v5.5||341",
"https://cdn1.suno.ai/fe15e07f-48ae-4f24-84f6-1032475ceec4.mp3|[포크] 모노골, 봄의 기억 (7080 포크 발라드, 따뜻하고 향수를 불러일으키는 어쿠스틱 사운드, 감성적이고 서정적, 향수, 평화로움, 봄바람, 따뜻한 감성)_M02 v5.5||",
"https://cdn1.suno.ai/a3a383f4-319c-4361-bbb8-d9c9686e07cb.mp3|[트로트] 모노골, 봄의 기억 (현대 한국 트로트, 리드미컬하고 활기찬 듀엣 콜앤리스폰스, 쾌활하고 활기찬 약간 감상적인)_MW01 v5.5||",
"https://cdn1.suno.ai/17a79d73-2dc5-47e3-b21c-9d0a10782681.mp3|[댄스] 모노골, 봄의 기억 <br>(모던 K팝 댄스/칠 EDM 하이브리드, 감성적이면서도 희망적인, 봄밤 드라이브, 사색적이면서도 희망적인)_W02 v5.5||",
"https://cdn1.suno.ai/ba20f0fd-a9d4-49ac-b9ad-46a908625e50.mp3|[발라드] 모노골, 봄의 기억 <br>(전통 사극 발라드, 가야금 대금 해금 저음의 전통 북, 오케스트라 현악기)_W03 v5.5||",
"https://cdn1.suno.ai/d7750ece-409b-49cc-9bc5-dafd4a87eb33.mp3|[발라드] 하늘 향해 핀 복사꽃 이야기 (감성적인 여성, 풍부한 편곡, 감성적인 전통 악기가 어우러진 한국 전통 발라드)_W04 v5.5||",
"https://cdn1.suno.ai/4cd27ee9-3cad-4c97-bd9a-708f6924eeec.mp3|[미분류] 하늘 향해 핀 복사꽃 이야기 (레이어드 신디사이저, 박동하는 베이스라인, 전자 드럼, 춤추기 좋은 리듬, 오케스트라 현악기, 전환을 위한 FX 효과음)_W07 v5.5||",
"https://cdn1.suno.ai/102c0b54-40c6-41d0-b971-e013109e4feb.mp3|[트로트] 챗벗과 나눈 복사꽃 정담 <br>(역동적이고 리듬감이 풍부한 한국식 트로트로 춤 추기 적합. 경쾌한 템포)_W02 v5.5||",
"https://cdn1.suno.ai/32128254-afab-4de7-a0b4-d21a9c8f6b34.mp3|[트롯 댄스] 챗벗과 나눈 복사꽃 정담 (댄스, 빠른 템포의 EDM 트로트 크로스오버로, 밝은 신스 리드, 4/4 박자 킥 드럼)_W04 v5.5||",
"https://cdn1.suno.ai/e91a46e5-e7b1-4678-bce1-677cc9a05207.mp3|[댄스] 챗벗과 나눈 복사꽃 정담 (하드록과 댄서블한 그루브 디스코 스타일의 하이햇 보컬 스타일은 부드러우면서도 약간 거친 록 에너지가 섞인 느낌)_M03 v5.5||",
"https://cdn1.suno.ai/50a98490-9e47-4d5a-a44b-d624d35ee548.mp3|[미분류] 하늘 향해 핀 복사꽃-인디 여성 리빌드 (강렬한 여성 보컬, 리드미컬한 드라이브, 그리고 거리를 밝히는 메시지가 담긴 에너지 넘치는 인디 트랙)_W06 v5.5||",
"https://cdn1.suno.ai/6ae06fe8-fe1b-4593-bfb4-9a61acdb8a56.mp3|[트로트] 모노골 사랑가 {대화형 듀엣 Ver.} <br>(경쾌하고 리드미컬한 트로트, 장난스럽고 로맨틱 분위기 95~105 BPM)_MW03 v5.5||",
"https://cdn1.suno.ai/c2df8442-6dc2-4029-a25d-54b693451268.mp3|[포크] 모노골의 분홍빛 봄 (7080, 향수 어린 차분한, 봄날의 추억, 부드러운 온기)_MW02 v5.5||",
"https://cdn1.suno.ai/f4e25d77-a430-4f7c-aece-b8e98c111315.mp3|[트로트] 모노골의 분홍빛 봄 (모던 트로트, 리드미컬하고 밝음, 남녀 보컬, 표현력 있고 생동감 넘침, 명확한 발음, 약간 장난스러운 톤, 95~115 BPM)_MW05 v5.5||",
"https://cdn1.suno.ai/d88d4b6e-b71c-482e-937e-0f8c593dfc46.mp3|[댄스] 모노골의 분홍빛 봄 (모던 K팝 댄스 / EDM 팝, 신스 베이스, 전자 드럼, 플럭 신스, 패드, 감성적+에너지, 향수)_MW07 v5.5||",
"https://cdn1.suno.ai/77cefad4-b535-4eef-865c-ccc4c4f0eef8.mp3|[발라드] 모노골의 분홍빛 봄 <br>(감성 발라드, 영화 같은 부드러운 분위기, 감성적이지만 절제된, 부드러운 전환, 그리움, 회상, 따뜻한 향수)_MW04 v5.5||314",
"https://cdn1.suno.ai/a1d8e573-4cf0-4148-89dc-ee388d4bde55.mp3|[발라드] 모노골의 분홍빛 속삭임-리빌드 2026 (감성적인 여성 보컬, 풍부한 편곡, 감성적 전통 악기의 한국 전통 발라드)_W04 v5.5||",
"https://cdn1.suno.ai/4997ec85-31cf-4788-a6fa-51d52a249c72.mp3|[미분류] 모노골의 분홍빛 속삭임-리빌드 2026 (바이올린, 신스팝, 저음 남성 보컬, 템포는 약 80bpm으로 다소 느린 편)_M02 v5.5||",
"https://cdn1.suno.ai/86fba718-7e44-4a3c-bbed-af45b5fee2f3.mp3|[발라드] 모노골의 봄-7080 포크 리빌드 <br>(감성적인 남성 보컬, 풍부한 편곡, 전통 악기의 한국 전통 발라드)_M04 v5.5||",
"https://cdn1.suno.ai/e2df8d51-60de-400b-aadf-26dcb89391e6.mp3|[발라드] 편지함에 가득 찬 동숙의 편지들.. <br>(전통 사극 발라드, 가야금 대금 해금 저음의 전통 북, 오케스트라 현악기)_W10 v5.5||",
"https://cdn1.suno.ai/29dd22a1-1641-48b2-b590-d1a84cd9bd03.mp3|[미분류] 편지함에 가득 찬 동숙의 편지들.. <br>(바이올린, 신스팝, 저음 남성 보컬, 템포는 약 80bpm으로 다소 느린 편)_M05 v5.5||",
"https://cdn1.suno.ai/a8e7c2cc-9360-4f82-990b-2b9a5e159f20.mp3|[미분류] 편지함에 가득 찬 동숙의 편지들.. <br>(하드록과 댄서블한 그루브 디스코 스타일의 하이햇, 부드러우면서도 약간 거친 록 에너지가 섞인 느낌)_M06 v5.5||309",
"https://cdn1.suno.ai/90142867-2169-4899-84c5-c3fff1b8f0d3.mp3|[포크] 아스라이 멀어진 첫사랑의 기억 (7080, 경쾌하고 밝은 분위기, 125 BPM, 어쿠스틱 기타 스트로크, 활기찬 하모니카 솔로, 가벼운 퍼커션, 향수를 불러일으키면서도 쾌활한)_M05 v5.5||",
"https://cdn1.suno.ai/108d119c-c70e-460c-81b7-816994f74856.mp3|[발라드] 아스라이 멀어진 첫사랑의 기억 <br>(감성적인 한국 발라드 OST, 향수, 로맨틱, 온화함, 사색, 봄기운, 라일락 향기 같은 느낌, 65-75 BPM))_M04 v5.5||",
"https://cdn1.suno.ai/69ea012e-b475-4e13-bbd6-0aa48911990f.mp3|[발라드] 아스라이 멀어진 첫사랑의 기억 <br>(감성적인 한국 발라드 OST, 향수, 로맨틱, 온화함, 사색, 봄기운, 라일락 향기 같은 느낌, 65-75 BPM)_M01 v5.5||",
"https://cdn1.suno.ai/0911f6e9-abb3-46a8-b605-984373fa3ee5.mp3|[발라드] 아스라이 멀어진 첫사랑의 기억 <br>(감성적인 한국 발라드 OST, 향수, 로맨틱, 온화함, 사색, 봄기운, 라일락 향기 같은 느낌, 65-75 BPM)_M02 v5.5||",
"https://cdn1.suno.ai/86a15410-2fd6-4e00-ad18-a8cff71fe4b1.mp3|[미분류] 아스라이 멀어진 첫사랑의 기억 <br>(바이올린, 신스팝, 여성 보컬, 템포는 약 80bpm으로 다소 느린 편)_W02 v5.5||",
"https://cdn1.suno.ai/b5fe291b-d32d-46e6-8171-38f292f1492b.mp3|[댄스] 아스라이 멀어진 첫사랑의 기억 {듀엣 버전} (남녀 보컬, 1980년대, 이탈로 디스코 뛰어난 신스웨이브 유로 댄스)_MW04 v5.5||",
"https://cdn1.suno.ai/f5d39868-e526-4dd3-b1d7-6c1c7cc1083f.mp3|[댄스] 아스라이 멀어진 첫사랑의 기억 {듀엣 버전} (남녀 보컬, 1980년대, 이탈로 디스코 뛰어난 신스웨이브 유로 댄스)_MW05 v5.5||",
"https://cdn1.suno.ai/96dad9c2-e403-4bb9-a91b-6e51cae663e0.mp3|[발라드] 아스라이 멀어진 첫사랑의 기억 {듀엣 버전} (7080, 경쾌하고 밝은 분위기, 125 BPM, 어쿠스틱 기타 스트로크, 활기찬 하모니카 솔로 가벼운 퍼커션)_MW02 v5.5||",
"https://cdn1.suno.ai/a471c627-fdc3-4f09-8269-01b1ffbb1e00.mp3|[발라드] 아스라이 멀어진 첫사랑의 기억 {듀엣 버전} (7080, 경쾌하고 밝은 분위기, 125 BPM, 어쿠스틱 기타 스트로크, 활기찬 하모니카 솔로 가벼운 퍼커션)_MW03 v5.5||",
"https://cdn1.suno.ai/363c23c4-2527-42a9-990e-24bd9b0cbd02.mp3|[포크] 수수꽃다리의 보랏빛 추억 <br>(7080, 경쾌하고 밝은 분위기, 125 BPM, 어쿠스틱 기타 스트로크, 활기찬 하모니카 솔로, 가벼운 퍼커션)_M01 v5.5||",
"https://cdn1.suno.ai/074a542e-b936-4bac-9548-489061bd8fbd.mp3|[포크] 수수꽃다리의 보랏빛 추억 <br>(7080, 경쾌하고 밝은 분위기, 125 BPM, 어쿠스틱 기타 스트로크, 활기찬 하모니카 솔로, 가벼운 퍼커션)_M02 v5.5||",
"https://cdn1.suno.ai/f0b6bf14-0d18-4da2-a20e-fc7f1ced4bb5.mp3|[댄스] 수수꽃다리의 보랏빛 추억 <br>(남녀 보컬, 1980년대, 이탈로 디스코, 뛰어난 신스웨이브, 유로 댄스)_MW01 v5.5||",
"https://cdn1.suno.ai/858ccc96-0238-4b40-8eff-2c4ee1c73844.mp3|[댄스] 수수꽃다리의 보랏빛 추억 <br>(남녀 보컬, 1980년대, 이탈로 디스코, 뛰어난 신스웨이브, 유로 댄스)_MW02 v5.5||",
"https://cdn1.suno.ai/83c0ae4a-d5ba-4123-bb41-7a657d6d0a93.mp3|[발라드] 양초 49회의 유채꽃 이야기 (발라드, 감성적인 이모 팝 보컬 멜로디 부드러운 하모니, 섬세하고 미니멀한 퍼커션 딥 하우스 베이스라인, 풍성한 신스)_MW04 v5.5||",
"https://cdn1.suno.ai/a26fc407-59bf-4ddb-a9d7-1dfd8b965657.mp3|[미분류] 양초 49회의 유채꽃 이야기 (1985년 클래식 이탈로 디스코 그루브, 크레센도 신스와 강렬한 드럼 비트 95BPM)_MW07 v5.5||",
"https://cdn1.suno.ai/ddc80b68-4a35-4541-92b7-fc3390806776.mp3|[미분류] 양초 49회의 유채꽃 이야기 <br>(바이올린, 신스팝, 여성 보컬, 템포는 약 80bpm으로 다소 느린 편)_W03 v5.5||",
"https://cdn1.suno.ai/2098ec84-a612-459e-8feb-a6e04aee9431.mp3|[미분류] 양초 49회의 유채꽃 이야기-동요 리빌드 (한국 동요 스타일의 귀엽고 발랄한 남녀 듀엣 보컬, 밝은 템포 95-110bpm, 우쿨렐레와 통기타 반주)_W01 v5.5||",
"https://cdn1.suno.ai/3fc38b88-3a55-48e4-b172-35d0de457698.mp3|[미분류] 양초 49회의 유채꽃 이야기-동요 리빌드 (한국 동요 스타일의 귀엽고 발랄한 남녀 듀엣 보컬, 밝은 템포 95-110bpm, 우쿨렐레와 통기타 반주)_W02 v5.5||",
"https://cdn1.suno.ai/537e2fb2-6298-4a95-a5ab-aee470adf1e4.mp3|[포크] 양초 49회의 유채꽃 이야기-7080 포크 리빌드 (7080, 따뜻한 통기타, 하모니카, 부드러운 남녀 화음, 중간 템포 80-95bpm 향수를 불러일으키는)_MW01 v5.5||",
"https://cdn1.suno.ai/b58ed4fd-2a7e-4bce-87bb-4cd2669d5908.mp3|[포크] 양초 49회의 유채꽃 이야기-7080 포크 리빌드 (7080, 따뜻한 통기타, 하모니카, 부드러운 남녀 화음, 중간 템포 80-95bpm 향수를 불러일으키는)_MW02 v5.5||",
"https://cdn1.suno.ai/01780cdf-1104-46c9-ba7f-f8d4e48aa286.mp3|[발라드] 양초 49회의 유채꽃 이야기-감성 리마스터 (듀엣, 피아노 현악기 반주, 느린 템포 60-70bpm, 영화 같은 사운드, 향수 불러일으키는 감동적인 분위기)_MW01 v5.5||",
"https://cdn1.suno.ai/41efd7cd-6edc-49eb-9d72-16c639a7d1c5.mp3|[발라드] 양초 49회의 유채꽃 이야기-감성 리마스터 (듀엣, 피아노 현악기 반주, 느린 템포 60-70bpm, 영화 같은 사운드, 향수 불러일으키는 감동적인 분위기)_WM01 v5.5||206",
"https://cdn1.suno.ai/1297d9f7-37d2-48e0-9bdc-6bdd57a48e31.mp3|[포크] 양초 49회의 유채꽃 만남 <br>(7080 포크, 120~130 BPM, 활기찬 경쾌한 템포 통기타 하모니카 타악기)_MW02 v5.5||",
"https://cdn1.suno.ai/45c85901-4ae5-4c09-843d-318523eec174.mp3|[트로트] 양초 49회의 유채꽃 만남 (모던 트로트, 리드미컬하고 밝음, 쾌활한 향수, 활기찬 봄 느낌, 약간 장난스러운 톤)_WM01 v5.5||",
"https://cdn1.suno.ai/e3221650-eee5-4220-bba2-288c4330f20d.mp3|[미분류] 양초 49회의 유채꽃 만남 <br>(1980년대, 이탈로 디스코, 뛰어난 신스웨이브, 유로 댄스, 남성 보컬)_M03 v5.5||",
"https://cdn1.suno.ai/21463f71-76da-4e35-a6d8-31d296349f51.mp3|[미분류] 양초 49회의 유채꽃 만남 <br>(1980년대, 이탈로 디스코, 뛰어난 신스웨이브, 유로 댄스, 남성 보컬)_M04 v5.5||",
"https://cdn1.suno.ai/7a18a474-a1b5-4a66-9211-459beea2d26f.mp3|[미분류] 양초 49회의 유채꽃 만남 <br>(바이올린, 신스팝, 남녀 보컬, 템포는 약 80bpm으로 다소 느린 편)_WM04 v5.5||",
"https://cdn1.suno.ai/540e44b5-f15c-406c-b7b3-59b85f02a425.mp3|[댄스] 양초 49회의 유채꽃 만남-댄스 리믹스 (한국 K팝 댄스, 경쾌하고 에너지 넘치는 템포 110-125 bpm, 강렬한 일렉트로닉 비트, 펀치감 있는 킥과 스네어, 밝은 신스 리드, 페스티벌 분위기)_WM02 v5.5||",
"https://cdn1.suno.ai/fabf44cb-773c-46ae-9fcc-5b3e27789733.mp3|[트롯 댄스] 모노골 단합가 (댄스 남성 보컬, 빠른 템포의 EDM 트로트 크로스오버로, 밝은 신스 리드, 4/4 박자 킥 드럼)_M18 v5.5||",
"https://cdn1.suno.ai/62d0b7cf-135b-4a76-bd1c-d73ce03cbdbf.mp3|[댄스] 모노골 단합가 <br>(1980년대 이탈로 디스코, 뛰어난 신스웨이브, 유로 댄스, 남성 보컬)_M21 v5.5||",
"https://cdn1.suno.ai/44a3096b-779a-4f28-bb9c-998dde61b42b.mp3|[댄스] 모노골 단합가 <br>(1980년대 이탈로 디스코, 뛰어난 신스웨이브, 유로 댄스, 남성 보컬)_M22 v5.5||",
"https://cdn1.suno.ai/209760c5-3a1e-4a1b-9b1e-5ed995db2111.mp3|[브라스 행진] 모노골 단합가 (강렬하고 승리감 넘치는 소나무 숲길 행진, 빠르고 안정적, 강한 동료애, 결의, 기쁨에 찬 단결심)_M12 v5.5||",
"https://cdn1.suno.ai/9f2fd4d3-5bc2-4bc2-b303-3c497b8d1c3e.mp3|[미분류] 모노골 단합가 (1985년 클래식 이탈로 디스코 그루브, 크레센도 신스와 강렬한 드럼 비트, 95 BPM, 남성 보컬)_M14 v5.5||",
"https://cdn1.suno.ai/51871b11-f06c-4c2c-827c-02465c6e7cca.mp3|[미분류] 모노골 단합가 <br>(하드록과 댄서블한 그루브 디스코 스타일의 하이햇, 부드러우면서도 약간 거친 록 에너지가 섞인 느낌)_M20 v5.5||",
"https://cdn1.suno.ai/a0ab88b0-8c63-47ec-8de0-347d381161a5.mp3|[포크] 천사데이, 다시 걷는 우리들 <br>(7080 포크송 서정적, 통기타 멜로디 중심으로 하모니카와 휘파람 소리, 봄 벚꽃 우정 사랑 희망)_MW07 v5.5||",
"https://cdn1.suno.ai/33ae9248-f0f6-4b33-bbeb-2e463f75710e.mp3|[발라드] 천사데이, 다시 걷는 우리들 (느린 한국 발라드, 60대 중반에 재회한 동창들이 남대천 강변을 따라 걸으며 젊은 시절을 회상하는 감정적인 여정)_MW02 v4.5+||",
"https://cdn1.suno.ai/7b42daf6-cb1a-49f9-9e4b-fd0b5bc80f60.mp3|[미분류] 천사데이, 다시 걷는 우리들 (1985년 클래식 이탈로 디스코 그루브, 크레센도 신스와 강렬한 드럼 비트, 95BPM)_M04 v5.5||",
"https://cdn1.suno.ai/be45c75b-d66d-4199-b42d-c2c661756880.mp3|[미분류] 천사데이, 다시 걷는 우리들 <br>(저음의 남성 보컬, 팀파니, 댄스 플로어, 트랩, 덥 베이스, 깊고 조용한 드럼)_M06 v5.5||",
"https://cdn1.suno.ai/d23b3b39-6afa-4660-b76a-0b16c4fba833.mp3|[미분류] 천사데이, 다시 걷는 우리들 <br>(저음의 남성 보컬, 팀파니, 댄스 플로어, 트랩, 덥 베이스, 깊고 조용한 드럼)_M07 v5.5||",
"https://cdn1.suno.ai/b6252018-a4cf-4536-afb2-5f7d22049549.mp3|[포크] 2023 천사데이의 보물 찾기 <br>(7080 포크송 서정적, 통기타 멜로디 중심으로 하모니카와 휘파람 소리, 봄 벚꽃, 우정, 사랑, 희망)_MW03 v5.5||",
"https://cdn1.suno.ai/b8e3a5e2-432d-4669-bf6a-667b9b789412.mp3|[포크] 2023 천사데이의 보물 찾기 <br>(7080 포크송, 통기타와 단순한 하모니, 젊은 시절 고향 추억 떠올리게 함)_M02 v4.5+||272",
"https://cdn1.suno.ai/f40c588f-97c7-4ec7-9d88-69629f3a943f.mp3|[트로트] 2023 천사데이의 보물 찾기 (트로트 듀엣, 역동적이고 리듬감이 풍부한 한국 전통 춤곡입니다. 경쾌한 템포)_MW01 v4.5+||275",
"https://cdn1.suno.ai/2c142758-c287-41b6-b505-0414d1c1d313.mp3|[댄스] 2023 천사데이의 보물 찾기 <br>(남녀 보컬, 1980년대, 이탈로 디스코, 뛰어난 신스웨이브, 유로 댄스)_MW05 v5.5||",
"https://cdn1.suno.ai/a41e055a-1522-411b-b4b1-2f822cccb2fc.mp3|[심포니] 2023 천사데이의 보물 찾기 <br>(심포닉 록, 오케스트라, 다크 판타지, 몽환적인 일렉트로닉, 남녀 보컬)_MW08 v5.5||",
"https://cdn1.suno.ai/80605c33-a8c7-41ec-b4c7-48471f08a6e2.mp3|[미분류] 2023 천사데이의 보물 찾기 (1985년 클래식 이탈로 디스코 그루브, 크레센도 신스와 강렬한 드럼 비트 95BPM)_M23 v5.5||",
"https://cdn1.suno.ai/a75a562e-ec22-4605-8b59-9dc8a1b8f2e7.mp3|[미분류] 2023 천사데이의 보물 찾기 <br>(남성 보컬, 일렉트로, 댄스, 신스웨이브, 댄스 하우스, 덥스텝)_M21 v5.5||",
"https://cdn1.suno.ai/7038ff49-7437-4113-b1b0-191bca3db030.mp3|[미분류] 2023 천사데이의 보물 찾기 <br>(바이올린, 신스팝, 저음 남성 보컬, 템포는 분당 약 90)_M12 v5.5||",
"https://cdn1.suno.ai/ebcdb94b-fc08-4efe-8804-0ca27daa36ed.mp3|[미분류] 2023 천사데이의 보물 찾기 <br>(저음의 남성 보컬, 팀파니, 댄스 플로어 트랩, 덥 베이스 깊고 조용한 드럼)_M18 v5.5||",
"https://cdn1.suno.ai/bfc1d197-99c9-4633-a2b3-fee51f395baa.mp3|[미분류] 2023 천사데이의 보물 찾기 <br>(하드록과 댄서블한 그루브 디스코 스타일의 하이햇, 부드러우면서도 약간 거친 록 에너지가 섞인 느낌)_M19 v5.5||",
"https://cdn1.suno.ai/23d5f1d2-c8a9-40e1-ba4a-87d7dddffcfb.mp3|[트로트] 양중고 2023 동창회 <br>(경쾌하고 리드미컬한 트로트. 신나는 댄스 비트, 콜앤리스폰스 듀엣 특징)_MW05 v5.5||",
"https://cdn1.suno.ai/62c289ed-94b3-4a88-b5c1-c0ece7c5b929.mp3|[댄스] 양중고 2023 동창회 <br>(남성 보컬, 클럽 DJ, 에너지 넘치는 신스 사운드의 팝 일렉트로 팝 리믹스)_M09 v5.5||",
"https://cdn1.suno.ai/80926c0d-0662-42f3-bafe-ab7bd234bb42.mp3|[발라드] 천사의 날에, 남대천을 걷는다 <br>(전통 사극 발라드, 가야금 대금 해금 저음의 전통 북, 오케스트라 현악기)_W03 v5.5||404",
"https://cdn1.suno.ai/65d923c3-ac9d-4e48-9361-1d65e587afb6.mp3|[미분류] 천사의 날에, 남대천을 걷는다 <br>(1980년대, 이탈로 디스코, 뛰어난 신스웨이브, 유로 댄스, 남성 보컬)_M10 v5.5||",
"https://cdn1.suno.ai/89ede4ac-f4a3-4cdb-8765-79fde658ae13.mp3|[미분류] 천사의 날에, 남대천을 걷는다 <br>(남성 보컬, 일렉트로, 댄스, 신스웨이브, 댄스 하우스, 덥스텝)_M08 v5.5||",
"https://cdn1.suno.ai/192eb111-7bcf-47f3-b9d4-603b89a2fa29.mp3|[미분류] 천사의 날에, 남대천을 걷는다 <br>(하드록과 댄서블한 그루브 디스코 스타일의 하이햇, 부드러우면서도 약간 거친 록 에너지가 섞인 느낌)_M11 v5.5||",
"https://cdn1.suno.ai/01b96113-c661-4c15-8f03-e97a2b7ebbe9.mp3|[미분류] 천사의 날에, 남대천을 걷는다 <br>(하드록과 댄서블한 그루브 디스코 스타일의 하이햇, 부드러우면서도 약간 거친 록 에너지가 섞인 느낌)_M12 v5.5||",
"https://cdn1.suno.ai/1a13d29b-b4df-49a5-96d0-83dca7eade3a.mp3|[포크] 나의 청량제, 갈천 약수터 가는 길 (7080 포크송, 통기타 하모니카 부드러운 퍼커션, 향수 자연 감성적 등산)_M04 v5||",
"https://cdn1.suno.ai/aa0aed63-e589-4902-b0d7-4f19d33b1009.mp3|[댄스] 나의 청량제, 갈천 약수터 가는 길 <br>(전통 요들송에서 영감을 받은 멜로딕 EDM 에스닉 EDM 페스티벌 EDM, 활기차고 자연스럽고 향수, 즐거운)_W10 v5.5||412",
"https://cdn1.suno.ai/4fe1e608-9b5c-4ba0-a8a5-adc477774cdb.mp3|[심포니] 나의 청량제, 갈천 약수터 가는 길 <br>(저음의 남녀 듀엣, 시네마틱, 심포닉 메탈, 고딕 메탈, 웅장한 브라스와 현악기의 오케스트레이션, 헤비 기타 리프, 합창, 서사적인 분위기)_MW06 v5.5||",
"https://cdn1.suno.ai/a0556c2c-b8a1-48b0-aea0-681d06552a9c.mp3|[미분류] 나의 청량제, 갈천 약수터 가는 길 <br>(바이올린, 신스팝, 남녀 보컬, 템포는 분당 약 80)_WM01 v5.5||",
"https://cdn1.suno.ai/6b7c7381-04c2-43a6-8096-ded8eb48ed7f.mp3|[민요] 나의 청량제, 갈천 약수터 가는 길 <br>(한국 전통 민요 경기민요 창부타령과 태평가에서 영감을 받음, 장구, 북, 대금, 해금, 비리, 전통 타악기)_W12 v5.5||",
"https://cdn1.suno.ai/b7c431f3-49dc-44a7-8648-2c6915f59e3e.mp3|[포크] 스치는 바람 속의 수선화 (7080 통기타 스트로크, 멜로디 하모니카, 향수 휘파람 소리, 따뜻하고 감성적인 중년 남성 보컬, 85 BPM, 4/4 박자)_M01 v5.5||",
"https://cdn1.suno.ai/c390acaf-aaa0-4ca0-adae-47f6603cd427.mp3|[포크] 스치는 바람 속의 수선화 (7080 통기타 스트로크, 멜로디 하모니카, 향수 휘파람 소리, 따뜻하고 감성적인 중년 남성 보컬, 85 BPM, 4/4 박자)_M02 v5.5||",
"https://cdn1.suno.ai/20114fd7-8cc1-4449-bc11-77937c67d4c3.mp3|[발라드] 스치는 바람 속의 수선화 <br>(영화 같은 K-드라마 OST, 70 BPM, 고요하고 사색적이며 향수를 불러일으키는, 마치 한적한 시골의 봄 풍경)_MW01 v5.5||",
"https://cdn1.suno.ai/0ab0551c-65f0-4c09-8015-2d617a42c177.mp3|[발라드] 스치는 바람 속의 수선화 <br>(영화 같은 K-드라마 OST, 70 BPM, 고요하고 사색적이며 향수를 불러일으키는, 마치 한적한 시골의 봄 풍경)_MW02 v5.5||",
"https://cdn1.suno.ai/fb3cafe1-9bfb-4913-9f26-d26504ec6e2f.mp3|[포크] 고결한 전설, 자존의 꽃 수선화 (7080 통기타 스트로크, 멜로디 하모니카, 휘파람 소리, 향수, 따뜻하고 감성적인 중년 남성 보컬, 85 BPM, 4/4 박자)_M01 v5.5||",
"https://cdn1.suno.ai/c4b9abc1-b639-49e7-a745-42f0f92a9609.mp3|[포크] 고결한 전설, 자존의 꽃 수선화 (7080 통기타 스트로크, 멜로디 하모니카, 휘파람 소리, 향수, 따뜻하고 감성적인 중년 남성 보컬, 85 BPM, 4/4 박자)_M02 v5.5||",
"https://cdn1.suno.ai/5bbe7e50-faeb-4458-ae33-a3231dbd6797.mp3|[발라드] 고결한 전설, 자존의 꽃 수선화 <br>(영화 같은 K-드라마 OST, 70 BPM, 고요하고 사색적이며 향수를 불러일으키는, 마치 한적한 시골의 봄 풍경)_MW01 v5.5||",
"https://cdn1.suno.ai/fb00c996-7ff2-4546-ad9c-9c037cd5686b.mp3|[발라드] 고결한 전설, 자존의 꽃 수선화 <br>(영화 같은 K-드라마 OST, 70 BPM, 고요하고 사색적이며 향수를 불러일으키는, 마치 한적한 시골의 봄 풍경)_MW02 v5.5||",
"https://cdn1.suno.ai/2e310d3f-1bcc-473d-8b3d-17381d45ef00.mp3|[미분류] 자랑스러운 양양의 노래 <br>(저음의 남성 보컬, 팀파니, 댄스 플로어 트랩 덥 베이스, 깊고 조용한 드럼)_M67 v5.5||",
"https://cdn1.suno.ai/c05b01ac-48ba-420f-99d1-5c3c83f5e69d.mp3|[포크] 자랑스러운 양양의 노래 <br>(7080 포크, 120~130 BPM 정도의 활기차고 경쾌한 템포, 어쿠스틱 기타, 하모니카, 부드러운 타악기)_WM09 v5.5||",
"https://cdn1.suno.ai/ec4a6c04-89b5-4278-9d0b-d2077d01c460.mp3|[민요] 자랑스러운 양양의 노래 <br>(경기민요 풍, 활기차고, 대화체이며, 축제 분위기, 장난스러운 상호작용)_MW20 v5.5||",
"https://cdn1.suno.ai/0a726902-cc33-4dcf-b4ef-4c7262c09cd6.mp3|[댄스] 자랑스러운 양양의 노래 <br>(남성 보컬 1980년대, 이탈로 디스코, 뛰어난 신스웨이브, 유로 댄스)_M65 v5.5||",
"https://cdn1.suno.ai/348cd583-647a-4bff-a894-2f81137410d7.mp3|[뮤지컬] 자랑스러운 양양의 노래-뮤지컬 리빌드 2 (한국식 그랜드 뮤지컬, 시네마틱 오케스트라, 드라마틱 및 클래식 보컬 구조, 강렬한 감정적 스토리텔링)_MW01 v5.5||",
"https://cdn1.suno.ai/8c73c8d2-11b2-4812-97c6-55a0f3fa262d.mp3|[발라드] 자랑스러운 양양의 노래 <br>(전통 사극 발라드, 가야금 대금 해금 저음의 전통 북, 오케스트라 현악기)_W06 v5.5||",
"https://cdn1.suno.ai/195aea56-1efd-4dac-95fa-9abaf642e8c9.mp3|[브라스 행진] 자랑스러운 양양의 노래 (강렬하고 승리감 넘치는 행진, 빠르고 안정적, 강한 동료애, 결의, 기쁨에 찬 단결심)_M63 v5.5||",
"https://cdn1.suno.ai/4d5d464d-2760-4ab7-aa9a-62365e512621.mp3|[미분류] 자랑스러운 양양의 노래 <br>(바이올린, 깊고 조용한 드럼과 베이스, 남녀 보컬, 템포는 분당 약 90)_MW28 v5.5||",
"https://cdn1.suno.ai/fde4f776-3ecd-4248-9c33-dcbba53bd2bf.mp3|[심포니] 자랑스러운 양양의 노래 (남녀 듀엣 심포닉 EDM, 오케스트라 트랜스, 140 BPM, 바이올린과 피아노 선율, 몽환적이고, 초현실적이며, 희망적이고, 웅장한)_MW25 v5.5||",
"https://cdn1.suno.ai/32b66eff-8d58-4f5d-b9f2-5e8b64a39670.mp3|[발라드] 자랑스러운 양양의 노래 (드라마 OST 발라드, 영화적이고 감성적, 느린 템포에서 중간, 피아노 현악 오케스트라)_MW17 v5.5||",
"https://cdn1.suno.ai/9e04ed03-8a72-4965-b524-f257609dda1c.mp3|[트롯 댄스] 자랑스러운 양양의 노래 (댄스, 빠른 템포의 EDM 트로트 크로스오버로, 밝은 신스 리드, 4/4 박자 킥 드럼)_W13 v5.5||",
"https://cdn1.suno.ai/991c9a97-001a-4e80-bafe-b620e63b1ba7.mp3|[트로트] 자랑스러운 양양의 노래 (모던 트로트, 리드미컬하고 밝음, 표현력 있고 생동감 넘침, 약간 장난스러운 톤, 쾌활한 향수, 활기찬 봄의 느낌)_MW33 v5.5||",
"https://cdn1.suno.ai/cd2d210f-fc79-4df3-95a5-4e41b29c3214.mp3|[뮤지컬] 자랑스러운 양양의 노래-뮤지컬 리빌드 3 (웅장한 한국식 뮤지컬, 영화적인 오케스트라, 풀 오케스트라, 강렬한 듀엣 + 합창, 무대 뮤지컬, 몰입도 높고 극적인 연출, 길고 지속적인 피날레)_MW01 v5.5||",
"https://cdn1.suno.ai/6fcd0f03-0975-4e16-8804-dcd3593625c8.mp3|[뮤지컬] 자랑스러운 양양의 노래-뮤지컬 리빌드 4 (웅장한 한국식 뮤지컬, 영화적인 오케스트라, 풀 오케스트라, 강렬한 듀엣+합창, 무대 뮤지컬, 몰입도 높고 극적인 연출, 길고 지속적인 피날레)_MW02 v5.5||",
"https://cdn1.suno.ai/390e26d9-7942-4269-aab2-98a857b7db95.mp3|[뮤지컬] 자랑스러운 양양의 노래-뮤지컬 리빌드 5 (오페라풍, 극적인 오케스트레이션, 파워풀한 소프라노 및 바리톤 보컬, 웅장한 현악기, 위엄 있는 금관악기, 천둥 같은 팀파니, 신비로운 합창)_MW05 v5.5||463",
]


song = [
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b></b></font><br>


</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>한계목이 부르는 연어의 귀향-리얼리티 리빌드</b></font><br>

낙산 대교 위에 서서 바라본<br>
남대천의 끝, 숨 고른 한계목<br>
열 배로 당겨도 보이지 않는<br>
좁은 물목에 시간이 모인다<br><br>

북태평양을 건너온 숨결들<br>
몸에 새겨진 길 하나를 따라<br>
수천의 생명 한 줄기로 겹쳐<br>
마침내 이 문 앞에 들어선다<br><br>

비좁은 길 하나 건너기 위해<br>
수많은 시간들이 밀려든다<br><br>

여기는 귀향의 관문, 한계목<br>
되돌아와야 이어지는 약속<br>
흐르자 겹치는 생명의 물결<br>
남대천은 그들을 품어준다<br><br><br>


물살 가르며 은어가 오르고<br>
한 몸처럼 길을 잇는 황어 떼<br>
오르는 그 수많은 몸짓 위로<br>
갈매기 떼 부리가 스쳐 간다<br><br>

숨 가쁘게 쫓고 쫓기는 속에<br>
잠시도 멈출 수 없는 이유는<br>
쫓기고 밀려도 또 올라서는<br>
이어야 할 필연적인 몸부림<br><br>

오직 돌아갈 곳 하나를 향해<br>
끝내 거슬러 오르고야 만다<br><br>

여기는 귀향의 관문, 한계목<br>
바다와 남대천이 만나는 곳<br>
사라지지 않는 영원이 되어<br>
새 생명으로 다시 이어진다<br><br><br>


렌즈 너머로 겨우 잡힌 물결<br>
그 안에 숨은 수천의 이야기<br>
보이지 않아 더 또렷해지는<br>
필히 되돌아오는 이유 하나<br><br>

여기는 귀향의 관문, 한계목<br>
끝과 시작이 맞닿은 자리에<br>
돌아온 생명들이 남겨 놓은<br>
또 새로운 시간이 시작된다<br><br><br>


보이지 않던 그 좁은 물목에<br>
오늘도 수많은 숨이 스친다<br>
남대천은 말없이 흐르지만<br>
그 모든 귀향들을 축복한다~~
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>수수꽃다리의 보랏빛 추억</b></font>

오랍뜰 담벼락에 보랏빛 물들면<br>
은은한 향기로 봄날이 깊어간다<br>
미처 피지 못한 수줍은 꽃봉오리<br>
가슴에 묻은 첫사랑 설렘이어라<br><br>

젊은 날 추억이 꽃잎에 피어날 때<br>
흰 꽃은 순결한 맹세를 속삭이네<br>
보랏빛 향기에 사랑의 싹이 트고<br>
지난 청춘의 그리움이 밀려온다~~<br><br><br>


바람 피해 숨은 가련한 님프처럼<br>
갈대로 변해버린 애달픈 몸짓이라<br>
목신 판이 만들어 불던 피리 소리<br>
라일락 가지에 눈물로 맺혔어라<br><br>

가여운 소녀의 눈물이 비가 되어<br>
흰색 라일락을 보라로 적시었나<br>
슬픔은 향기로 바람에 날리는데<br>
고상한 그 빛깔, 아픔을 품었구나<br><br>

페르시아 푸른빛 리락의 노래여<br>
시린크스 피리 소리 귀에 맴돌 때<br>
아름다운 맹세는 하늘로 퍼지고<br>
첫사랑 기억들은 별빛 되었구나<br><br><br>


봄이 오면 오랍뜰엔 <br>
여전히 그 꽃이 핍니다. <br>
보랏빛 향기가 동네에 흩날리면, <br><br>

잊은 줄 알았던 그 시절의 내가... <br>
가만히 나를 불러냅니다.<br><br><br>


오랍뜰 가득하게 향기가 번지면<br>
젊은 날 우리를 가만히 추억한다<br>
계절이 흘러도 잊히지 않는 그대<br>
영원한 사랑으로 내 곁에 머문다~~
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>아스라이 멀어진 첫사랑의 기억</b></font>

하루가 덜 익은 향기로<br>
가지 끝에 온 듯 만 듯<br>
이름도 없이 스쳐가던<br>
그 계절이 다시 온다<br><br>

햇살에 살짝 젖은 바람<br>
그 속에 남아 있는 숨결<br>
보이지 않아도 알 수 있는<br>
그윽한 너의 향기처럼<br><br>

피어나기 전의 마음들이<br>
조용히 부풀어 오르고<br>
말하지 않아도 전해오던<br>
그날의 떨림 그대로<br><br>

잡히지 않는 어떤 이름<br>
머물지 않는 어떤 순간<br>
향기롭던 추억이기에<br>
더 오래 남는 것일까?<br><br><br>


라일락 향기 스며들면<br>
잊었던 날이 돌아오고<br>
닿지 못했던 그 거리도<br>
따뜻하게 물들어 간다<br><br>

보이지 않아도 다가오는<br>
닿지 않아도 전해오는<br>
그 이름을 부르지 않아도<br>
이미 봄은 너로 가득해진다<br><br>

흰빛으로 맑았던 우리<br>
보랏빛으로 깊어지며<br>
서로 다른 색으로 변해도<br>
향기는 하나로 이어진다<br><br>

잡으려 하면 흩어지고<br>
놓아두면 곁에 머무는<br>
처음인 듯 끝이 되어버린<br>
아스라한 그날의 시간들..<br><br><br>


잊힌 듯 잊히지 않는..<br><br>

그 이름은<br>
라일락의 기억
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>아스라이 멀어진 첫사랑의 기억 {듀엣 버전}</b></font>

[Male - Verse 1]<br>
햇살에 살짝 젖은 바람<br>
그 속에 남아 있는 숨결<br>
보이지 않아도 알 수 있는<br>
그윽한 너의 향기처럼<br><br>

[Female - Verse 2]<br>
피어나기 전의 마음들이<br>
조용히 부풀어 오르고<br>
말하지 않아도 전해오던<br>
그날의 떨림 그대로<br><br>

[Together - Pre-Chorus]<br>
잡히지 않는 어떤 이름<br>
머물지 않는 어떤 순간<br>
그래서 더 오래 남는 건<br>
향기 같은 추억일까~~<br><br>

[Male - Chorus]<br>
라일락 향기 스며들면<br>
잊었던 날이 돌아오고<br><br>

[Female]<br>
닿지 못했던 그 거리도<br>
따뜻하게 물들어 간다<br><br>

[Together]<br>
보이지 않아도 다가오는<br>
닿지 않아도 전해오는<br>
그 이름을 부르지 않아도<br>
이미 봄은 너로 가득해진다<br><br>

[Female - Verse 3]<br>
흰빛처럼 맑았던 시간<br>
보랏빛처럼 깊어지면<br>
서로 다른 색으로 남은<br>
하나의 향기로 이어진다<br><br>

[Male - Bridge]<br>
잡으려 하면 흩어지고<br>
놓아두면 곁에 머무는<br>
처음인 듯 끝이 되어버린<br>
아스라한 그날의 시간들<br><br>

[Together - Final Chorus]<br>
라일락 향기 스며들면<br>
잊었던 날이 돌아오고<br>
닿지 못했던 그 거리도<br>
따뜻하게 물들어 간다<br><br>

보이지 않아도 다가오는<br>
닿지 않아도 전해오는<br>
그 이름을 부르지 않아도<br>
이미 봄은 너로 가득해진다~~<br><br>

[Outro - Female → Male]<br>
(여) 잊힌 듯 잊히지 않는  <br>
(남) 그 이름은..<br><br>

[Together]<br>
라일락의 기억
</td></tr></table>`,
`<table class='box' style="BACKGROUND:white url('https://i.imgur.com/dgZzxa6.jpeg') no-repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>울 엄마의 기구했던 생일</b></font><br><br>

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
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>별빛 머금은 수선화-리빌드 2026</b></font>

어린 시절 동무의 맑은 눈을 닮은<br>
예뻤던 그대를 처음 만난 그날에<br><br>

하얀 가운 꿈꾸며 환히 웃던 미소,<br>
어느새 눈물 되어 벽을 적시었네<br><br>

어찌할 줄 모르고 바라만 보았던<br>
난감했던 내 청춘의 순간이었지<br><br><br>


계절이 바뀌어 길 위에서 마주친<br>
꽃보다 화사하게 피어난 그대여<br><br>

품에 가득 안은 향기로운 선물은<br>
출근길마다 비추는 빛이었어라<br><br>

스치듯 지나쳐도 마음은 일렁인<br>
풋풋했던 나의 청춘 시절이었네<br><br><br>


아늑한 대포 포구에서 오붓하게<br>
따스한 저녁 한 끼 나누던 그 밤에<br><br>

못다 한 이야기, 수평선에 걸리고<br>
그날 그대의 얘기, 귓가에 맴도네<br><br>

아득한 기억 속에 남은 이름 하나<br>
별빛 속에 숨어서 지워지지 않네<br><br><br>


세 개의 별을 찾아 떠나온 길에도<br>
그대 행복은 바람결에 들려오네<br><br>

인연은 비껴도 추억은 보석 같아<br>
다행이라 웃으며 행복 빌어주네<br><br><br>


언젠가 이 노래 그대 곁에 닿으면<br>
그날의 눈물이 미소 되길 바라며<br><br>

내 마음 한 켠에 수선화로 피어난<br>
아름다운 그대, 영원히 추억하리..
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>양초 49회의 유채꽃 만남-댄스 리믹스</b></font>

남: 봄빛이 번져와<br>
여: 지금 이 순간<br>
함께: 다시 시작되는 우리 이야기<br><br>

남: 봄빛 물결 춤추는 유채꽃 사잇길<br>
여: 노랑 향기 가득한 이 들판 위에<br>
남: 바람 따라 흔들리는 꽃물결 속에<br>
여: 파란 하늘 아래 꿈이 피어나~<br><br>

함께: 하나 둘 가까워져<br>
웃음이 터져 나와<br>
지금 이 순간이<br>
다시 우리를 부른다~~<br><br>

함께: 빨강! 노랑! 파랑!<br>
우리가 빛나는 color<br>
지금 이 순간 feel so right<br>
다시 뛰는 our time<br><br>

남: 손을 들어 higher<br>
여: 웃음은 brighter<br>
함께: 유채꽃 속에서<br>
we go up together<br><br>

여: 노랑 의자 위에 번지는 웃음<br>
남: 빨강 의자에 쌓이는 기억<br>
여: 소나무 아래 들려오는 바다<br>
남: 우리 이야기가 다시 흐른다<br><br>

함께: 하나 둘, 더 가까이<br>
설렘이 커져가<br>
이 순간 속으로<br>
다시 뛰어 들어가<br><br>

함께: 빨강! 노랑! 파랑!<br>
우리들의 memory<br>
멈출 수 없는 이 feeling<br>
다시 쓰는 story<br><br>

남: 더 높이 higher<br>
여: 더 크게 louder<br>
함께: 지금 이 순간<br>
we shine forever<br><br>

남: 시간이 흘러도<br>
여: 변하지 않는 건<br>
함께: 우리가 함께라는 이유<br><br>

함께: 빨강! 노랑! 파랑!<br>
다시 피어나는 color<br>
유채꽃 위로 jump up high<br>
지금 여기가 our time<br><br>

남: 손을 들어 higher<br>
여: 외쳐 더 louder<br>
함께: 유채꽃 속에서<br>
we go up forever<br><br>

함께: 다시 만난 우리<br>
지금 이 순간<br>
영원히 기억해..
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>양초 49회의 유채꽃 이야기-감성 리마스터</b></font>

여: 노란 들판, 그날의 기억<br>
남: 아직도 남아있어..<br><br>

남: 유채꽃이 흔들리던 날<br>
여: 우리가 웃고 있었지<br>
남: 아무 말도 필요 없던<br>
여: 그 시간 속에서..<br><br>

함께: 다시 돌아갈 수 있다면<br>
그날로 가고 싶어..<br><br><br>


함께: 유채꽃보다 더 빛나던<br>
우리들의 그 순간<br>
사진 속에 멈춰 있는<br>
어린 날의 이야기<br><br>

남: 시간이 지나도<br>
여: 잊지 않을게<br><br>

함께: 그날의 우리를...<br><br>

여: 빨간 의자 위에 남은<br>
남: 따뜻한 우리의 온기<br>
여: 웃음 속에 숨겨둔<br>
남: 눈물 같은 기억들..<br><br>

함께: 계절이 몇 번을 지나도<br>
우리는 여기 있어<br>
변하지 않는 그 이름<br>
마음속에 남아~~<br><br>

함께: 다시 만난 이 순간이<br>
기적처럼 느껴져<br>
유채꽃이 피는 이곳에서<br>
우리는 다시 하나~~<br><br>

여: 노란 들판<br>
남: 그날의 우리<br>
함께: 영원히..
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>양초 49회의 유채꽃 이야기-7080 포크 리빌드</b></font>

남: 노란 들판 그 길 위에<br>
여: 봄이 다시 불어와~<br><br>

남: 유채꽃이 바람 타고<br>
여: 우리 이름 부르네<br>
남: 오래 묵은 이야기들이<br>
여: 다시 피어나네<br><br>

함께: 하나 둘 모여 앉아<br>
웃음이 번져간다~~<br><br><br>


함께: 노란 의자 둘러앉아<br>
우리 추억 꺼내보면<br>
그때 그 시절 그대로<br>
시간이 멈춘 듯해<br><br>

남: 너의 웃음<br>
여: 나의 기억<br>
함께: 다시 이어진다~~<br><br>

남: 빨간 의자 기대앉아<br>
여: 옛날 얘길 꺼내면<br>
남: 어린 날의 그 장면이<br>
여: 눈앞에 흐르네<br><br>

함께: 흘러간 시간 속에도<br>
변하지 않은 우리<br><br>

함께: 유채꽃은 피고 지고<br>
계절은 흘러가도<br>
우리의 봄은 여기<br>
그대로 남아있다~<br><br>

남: 노란 들판 위에서<br>
여: 다시 만난 우리..
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>양초 49회의 유채꽃 이야기-동요 리빌드</b></font>

남: 노란 꽃이 반짝반짝<br>
여: 봄바람이 살랑살랑<br><br>

남: 유채꽃이 춤을 추면<br>
여: 우리 마음도 둥실둥실<br>
남: 친구 이름 불러보면<br>
여: 웃음꽃이 피어나요~~<br><br>

함께: 하나 둘 모여들면,<br>
웃음소리 커져요~~<br><br>


함께: 노랑 의자 동그랗게<br>
우리 모두 둘러앉아<br>
빨강 노랑 파랑처럼<br>
웃음꽃을 피워요<br><br>

남: 사진 하나, 찰칵!<br>
여: 추억 하나, 반짝!<br><br>

남: 시간이 지나도<br>
여: 변하지 않는 건<br>
함께: 우리들의 웃음이야<br><br>

함께: 유채꽃 속 뛰어가면<br>
우리는 다시 아이야~<br>
양초 사십구회 친구들<br>
영원히 함께야~~<br><br>

남: 살랑살랑<br>
여: 반짝반짝<br>
함께: 우리의 봄날~~
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>Cherry Season-댄스 리빌드</b></font>

yeah yeah<br>
봄이 다시 깨어나<br><br>

벚꽃 아래 flashing lights<br>
기억들이 rewind<br>
현산 언덕 그 순간<br>
we were so alive<br><br>

사진보다 clearer now<br>
time goes but we don’t fade<br>
너와 나의 season<br>
never ever change<br><br>

시간 틈 사이로<br>
다시 널 불러<br><br>

벚꽃 아래 we don’t stop<br>
멈춰버린 that moment<br>
우리라는 이 season<br>
still alive still alive<br><br>

hands up 지금 이 순간<br>
다시 피어 like blossom<br>
너와 나의 story<br>
never ending love<br><br><br>


웃던 너의 silhouette<br>
바람 속에 남아<br>
멀어진 그 시간도<br>
다시 끌어와<br><br>

I remember you<br>
I remember spring<br>
잊지 못해 그날의 everything<br><br>

벚꽃 아래 we go high<br>
다시 이어지는 timeline<br>
끝나지 않는 이 story<br>
we are young forever<br><br>

still alive<br>
still bloom<br>
our season
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>우리의 봄은 아직-발라드 리빌드</b></font><br>

조용히 불어오는 봄바람<br>
그 속에 네가 있어<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260406_181058.webp" width="100%" title="📷 01"><br><br>

벚꽃 아래 걷던 그날<br>
아직도 선명한 기억<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260406_181143.webp" width="100%" title="📷 02"><br><br>

현산 언덕 그 하얀 길 위에<br>
우린 멈춰 있었지<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_183620.webp" width="100%" title="📷 03"><br><br>

시간은 흘러갔어도<br>
왜 넌 그대로일까<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260406_175247.webp" width="100%" title="📷 04"><br><br>

벚꽃 아래 너와 걷던 봄<br>
세상이 멈춘 듯했던 순간<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260406_175607.webp" width="100%" title="📷 05"><br><br>

사진보다 더 선명했던<br>
우리의 그 하루<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260406_175340.webp" width="100%" title="📷 06"><br><br>

지금도 내 마음 한 켠에<br>
조용히 피어나~<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_180612.webp" width="100%" title="📷 07"><br><br>

우리라는 계절은<br>
끝나지 않은 채..<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_175727.webp" width="100%" title="📷 08"><br><br><br>


교복 위로 내려앉던<br>
그날의 꽃잎처럼<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_180640.webp" width="100%" title="📷 09"><br><br>

말하지 못한 그 한마디<br>
아직도 남아 있어<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_180551.webp" width="100%" title="📷 10"><br><br>

잊은 줄 알았던 마음이<br>
바람 따라 다시 와~<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_180658.webp" width="100%" title="📷 11"><br><br>

그날의 너를 부르면<br>
눈물이 흘러..<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_181102.webp" width="100%" title="📷 12"><br><br>

벚꽃 아래 다시 만난다면<br>
그땐 꼭 말할 수 있을까<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_181236.webp" width="100%" title="📷 13"><br><br>

사라지지 않은 이 마음<br>
여전히 너를 향해..<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_175937.webp" width="100%" title="📷 14"><br><br>

우리의 봄은 아직<br>
여기 남아 있어<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_175831.webp" width="100%" title="📷 15">
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>벚꽃 아래 그날-트로트 리빌드</b></font><br>

남: 하나 둘 셋 넷!<br>
여: 어머나 시작부터 설레네~<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_182425.webp" width="100%" title="📷 01"><br><br><br>


남: 벚꽃 날리던 그 거리에서<br>
남: 너를 처음 만났지<br><br>

여: 웃음 한 번에 심장이 쿵!<br>
여: 그날이 시작이었지<br><br>

남: 기억나니? 그 벤치<br>
여: 기억나지? 그 눈빛<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_183654.webp" width="100%" title="📷 02"><br><br>

남: 벚꽃 아래서~<br>
여: 너와 걸었던 그 봄!<br>
남: 세상이 멈춘~<br>
여: 그 순간 속으로!<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260406_174345.webp" width="100%" title="📷 03"><br><br>

함께:<br>
사진보다 선명한 기억<br>
우리라는 계절 속에<br>
지금도 피어나는 사랑<br>
다시 돌아갈 수 있을까<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260406_174548.webp" width="100%" title="📷 04"><br><br><br>


남: 낙화주 한 잔에 취해<br>
남: 네 이름 불렀었지<br><br>

여: 그때 난 웃기만 했지<br>
여: 사실은 떨렸었어<br><br>

남: 흩어진 시간 속에서<br>
여: 다시 만나면<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260406_175040.webp" width="100%" title="📷 05"><br><br>

함께:<br>
그날처럼 웃을 수 있을까<br><br>

벚꽃 아래서 다시 만나<br>
우리 사랑 그때처럼<br>
아니, 더 뜨겁게<br>
지금 여기 다시 피어나~~<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260406_174812.webp" width="100%" title="📷 06"><br><br>

남: 자~ 다시 한 번!<br>
여: 벚꽃 아래서~<br>
함께: 영원히~~
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>벚꽃 아래 우리-포크 리빌드</b></font>

휘이익~ 불어오는 봄바람<br>
기억 속을 걷는다<br><br>

벚꽃 아래 흩날리던 그날<br>
현산 언덕 하얀 하루<br>
통기타에 실려 오던 노래<br>
너의 웃음 번지던 길<br><br>

삼일 기념비 그 옆에서<br>
나란히 서 있던 우리<br>
충혼탑 그늘 아래 앉아<br>
시간을 멈춘 듯이<br><br>

이 길은 변한 게 없는데<br>
오늘은 조금 다르게 보여 <br><br>

벚꽃 아래 너와 걷던 봄<br>
세상이 멈춘 듯했던 순간<br>
사진보다 더 선명했던<br>
우리라는 계절 속에<br><br>

벚꽃처럼 흩날리던 날<br>
아직도 내 맘에 피어나~<br>
그때의 너와 내가<br>
여전히 여기 서 있어<br><br><br>


교복 위로 꽃잎 내리면<br>
장난처럼 웃던 너<br>
수줍은 말은 삼켜버리고<br>
눈빛만 주고받던 날<br><br>

잊었다 생각했던 기억<br>
바람 따라 다시 와~<br>
그날의 봄은 아직도<br>
내 안에 살아~~<br><br>

벚꽃 아래 다시 걷고 싶어<br>
그날의 우리를 불러내<br>
시간 너머 손을 내밀면<br>
다시 만날 수 있을까<br><br>

휘이익, 흩날리는 꽃잎 속에<br>
너를 부른다~~
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>모노골의 봄-7080 포크 리빌드</b></font>

바람이 불어오던 그날<br>
나는 그 길에 서 있었지<br><br>

모노골 작은 언덕길을 따라<br>
이름 모를 꽃들이 피어 있고<br>
햇살은 조용히 등을 밀어<br>
나를 그곳으로 데려갔지<br><br>

분홍빛으로 물든 그 길 위에<br>
괜히 한 번 더 멈춰 서서<br>
아무도 없는 풍경 속에서<br>
나는 누군가를 떠올렸지<br><br>

봄바람 불어오면 생각나는 사람<br>
말하지 못한 그 마음 하나<br>
꽃잎처럼 흩어질까 두려워서<br>
그저 웃음으로 남겨둔 이름~~<br><br>

작은 오솔길 끝에 서서<br>
한참이나 아무 말 못 하고<br>
내 마음은 왜 그리 서툴러서<br>
바람 뒤에 숨기려 했을까<br><br>

봄바람 불어오면 생각나는 사람<br>
지금은 어디쯤 걷고 있을까<br>
이 길 끝에서 다시 만난다면<br>
그때는 말할 수 있을까<br><br>

시간은 흐르고 꽃은 지겠지만<br>
그날의 향기는 남아~<br>
나도 모르게 웃음 짓게 하는<br>
어떤 봄날의 기억처럼..<br><br>

아~ 바람이 분다~<br>
아~ 꽃잎이 진다~<br>
그 길 위에 남겨진<br>
나의 작은 이야기...
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>모노골의 분홍빛 속삭임-리빌드 2026</b></font>

바람 끝에 실려온 봄의 이름,<br>
조용히 나를 부르는 길..<br><br>

분홍빛 물결 번지는 모노골 언덕길!<br>
햇살은 꽃잎 위에 부서져 내려와<br>
발끝에 스치는 향기, 익숙한 설렘처럼<br>
어느새 나의 하루에 스며들고 있네<br><br>

살랑이는 이 순간<br>
마음이 먼저 너를 향해..<br><br>

달빛처럼 부드러운 봄바람이 불어와<br>
내 마음 깊은 곳에 작은 꽃을 피운다<br>
꿈결보다 더 선명한 이 따뜻한 떨림<br>
복숭아빛 물든 세상 속에, 너와 나~<br><br><br>


작은 오솔길 따라 번지는 꽃 그림자<br>
나뭇잎 사이로 스며든 맑은 하늘빛<br>
수줍게 고개 든 꽃잎 하나 바라보다<br>
내 마음도 따라 붉게 물들어 가네<br><br>

말하지 않아도<br>
이미 전해진 것 같아~~<br><br>

향기 따라 흘러온 봄날의 속삭임<br>
내 마음 위에 조용히 사랑을 그린다<br>
무릉도원 닮아있는 이 눈부신 풍경<br>
복숭아빛 미소처럼 번지는 너<br><br>

시간이 잠든 이 길 위에<br>
나의 하루를 내려놓고<br>
전하지 못한 이름 하나<br>
이 바람에 살며시 띄운다~~<br><br>

눈부시게 흩날리는 꽃잎 사이로<br>
우리의 계절이 천천히 번져가<br>
스쳐가는 순간마저 영원이 되어<br>
복숭아빛 기억 속에 머물러..<br><br>

모노골 그 길 위에 남겨진 향기<br>
다시 돌아와도 같은 봄일까<br>
너와 나의 이야기 한 조각<br>
바람 속에 조용히 흔들린다~~
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>복사꽃이 머문 자리-인디 남성 리빌드</b></font>

봄바람이 불어오면<br>
그날이 다시 떠올라<br><br>

하늘이 유난히 맑던 날<br>
복사꽃이 흔들리던 오후<br>
그 길 위에 서 있던 나는<br>
아직도 그곳에 머물러<br><br>

연한 웃음과 짧은 대화<br>
그 사이에 번진 온기<br>
조용히 스며든 그 계절<br>
내 안에 남아 있어..<br><br>

잊은 줄 알았던 기억이<br>
다시 나를 부른다~~<br><br>

하늘 위로 손을 들어<br>
흩어지는 꽃잎처럼<br>
복사꽃은 말해요<br>
지금이 가장 빛난다고..<br><br>

그 순간을 붙잡은 채<br>
나는 아직 걷고 있어..<br><br><br>


사진 속에 남겨진 장면<br>
그날의 공기와 웃음<br>
멀어졌던 시간 속에서도<br>
선명하게 살아난다<br><br>

바람 따라 흘러간 이름<br>
다시 불러보면<br>
그날의 봄이 돌아와<br>
가슴 깊이 번진다<br><br>

하늘 위로 다시 올라<br>
기억 속을 따라가면<br>
복사꽃은 그 자리에<br>
여전히 피어 있다<br><br>

그날의 봄은<br>
아직 끝나지 않았다~~
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>하늘 향해 핀 복사꽃-인디 여성 리빌드</b></font>

하늘이 눈부신 어느 봄날에<br>
분홍빛 바람이 나를 부르네<br><br>

복사꽃은 가느다란 팔을 뻗어<br>
푸른 도화지에 꿈을 그려요<br>
연한 농담에 짙은 속삭임<br>
그 사이로 봄이 스며들어요<br><br>

조용히 번지는 이 순간<br>
시간마저 머물러요<br><br>

하늘 위로 손을 들어<br>
바람처럼 흘러가듯<br>
복사꽃은 말해요 지금이<br>
가장 아름다운 순간이라고<br><br>

이 기억을 놓지지 않을게요<br>
봄날에 다시 핀 이 순간을..<br><br><br>


사진 한 장 마음에 담고<br>
서정적인 이야기를 나누며<br>
툭툭 던지는 작은 농담에<br>
웃음꽃이 피어나네요<br><br>

바람에 실려 온 향기<br>
마음 깊이 번져가고<br>
그 이름을 부르면<br>
봄이 다시 살아나요<br><br>

하늘 위로 다시 날아<br>
기억 속을 걸어가면<br>
복사꽃은 여전히 거기서<br>
나를 기다리고 있어요..<br><br>

하늘 도화지 위에<br>
그려진 우리의 봄~~~
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>훈련소 이병에서, 전경대 이경으로..</b></font>

백만 촉광에 빛나는 <br>
금의 환향, 개선 장군!<br><br>

아~ 몰랐었네, <br>
수용연대 배출대의 특명이여~<br><br>

간다 간다, 나는 간다 <br>
전라남도, 열차 오소대!<br><br>

이게 무슨 청천벽력! <br>
감자의 꿈은 날아 가고,<br><br>

팔자에 없는 낯선 곳, <br>
머나먼 저 남쪽으로..<br><br>

이별 속의 아쉬운 밤, <br>
강경 역의 달밤이여!<br><br>

생사고락 같이 하던 <br>
동기들아! 잘 가거라~<br><br><br>


송.충.이. 이경달고 대대중대 배치받아<br>
얼떨떨한 신고식에 실감난다 자대생활<br>
선배기수 1주 차에 후배기수 6주 차라<br>
아득하다 군대생활 왕고참은 1주 밖에<br><br>

하필이면 타격대냐 하루종일 교육훈련<br>
거수자가 출현하면 오분만에 승차출동<br><br>

열외없는 군장구보 쪽팔린다 낙오병사<br>
그무엇과 비교하리 완주후의 개운함을<br><br>

한두대로 시작해서 스므대로 끝나가는<br>
오금마져 저려오던 공포속의 기수빠따<br>
집합없인 잠못잔다 얼능맞고 잠좀자자<br><br><br>


눈물난다 식사당번 애달프다 신병생활<br>
해안초소 경비견도 삼년이면 라면끓여<br>
우리애인 영희보다 요리솜씨 능가하리<br><br><br>


전출신고 전입신고 다시되는 쫄병신세<br>
따블빽을 한번싸면 사회생활 3년 보장<br>
일곱번의 따블빽에 신고식은 도사됐다<br><br><br>


생각못한 자대교육 다중범죄 진압훈련<br>
지랄같은 싸싸싸에 청천벽력 복창소리<br>
다다다다 발구르며 빌어먹을 충성용감<br><br>

분대횡대 소대설대 이중중대 횡대로~<br>
시가지진압 초동진압 상황끝 헤쳐모여<br>
곡차중심 이중중대 끝을맺는 진압훈련<br><br><br>


진압 수칙, 제 1조, <br>
데모 군중은 우리의 적이 아니다~<br><br>

준수하자 발사각도 가스총의 45도!<br>
막아내자 교외진출 대학정문 대치근무<br>
여학생이 껌하나로 감명주던 착한손길<br><br><br>


방독면, 방석모, 방석복이 철갑이로다<br>
MPG100 사과탄의 개스범벅 와중속에<br>
날아드는 돌멩이와 화염병을 감수하며<br>
오직하나 사명감에 신명바친 데모진압<br><br><br>


교통보조 방범근무 거점배치 혼잡경비<br>
숨막히고 힘들었다 닭장버스 부동자세<br>
긴장속의 닭장생활 얼마만한 날이었나<br><br>

길고길다 쫄병생활 언제쯤에 고참될까<br>
청소당번 식사당번 워카당번 진급돼도<br>
중고참도 멀었구나 부러버라 왕고참아<br><br><br>


거.꾸.로. 매달아도 국방시계 돌아간다<br>
더딘시계 돌고돌아 제대증을 받은지금<br>
남은것은 개구리복 허무함과 아쉬움뿐<br><br><br>


후배들아 잘있거라 나는간다 고향으로<br>
국방부의 고된훈련 내무부의 힘든근무<br><br>

파란만장 병영생활 모든것을 반납하고<br>
부모형제 기다리는 고향으로 돌아간다<br><br><br>


서울시 전경교통 1기생, <br>
견장 85번<br><br>

동대문 경찰서 <br>
교통계 일동이 <br>
내게 준, 전역 기념패!<br><br><br>


조국에 몸 바친지 어언 3년<br><br>

숭고한 애국심의 희생이 <br>
더욱 승화되어<br>
여기 불사르게 하고 있습니다.<br><br>

이제 귀하의 떠남에 <br>
우리 모두는<br>
진심으로 경의와 <br>
석별의 정을 표하며..<br><br>

험한 풍파를 <br>
의연한 슬기로써<br><br>

앞날에 <br>
건강과 행운이 <br>
함께 하시길...
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>논산 제2훈련소, 후반기의 추억</b></font>

훈련끝이 아니구나 후반기는 이제시작<br>
따블빽을 짊어지고 27 연대 들어서니<br>
우랄같은 내무반장 공갈치며 군기잡네<br><br>

에이아르 자동소총 헷갈린다 분해결합<br>
어깨위의 8.8키로 90도방향 대공쏴~<br>
어머님은혜 부르며 눈물흘린 이병생활<br><br>

입만벙긋 군가측정 반동준비 으왁~ !!<br>
반동은~ 천당에서 지옥까지 군가시작!<br>
목터지는 군가속에 사명감이 솟구친다<br><br>

처음겪는 사격소리 어리벙벙 귀가멍멍<br>
영점사격 빗나가니 초장부터 원산폭격<br>
방아쇠를 당길때는 소녀가슴 만지듯이<br><br>

산에가야 범을잡지 보긴했나 소녀가슴<br>
총열위에 바둑돌의 거짓격발 들통나서<br>
하나양심 둘에불량 고문관이 따로없네<br><br>

L. M. G. 조총훈련 뜀박질에 새빠지고<br>
얄궂구나 조교장난 에레무지 총검술아<br>
부사수의 필수도구 귀마개용 담배필터<br><br>

달콤했던 오분휴식 꿀맛같다 화랑담배<br>
노래일발 장전속에 싹터가는 전우애도<br>
천장없는 변소에선 도난방지 사주경계<br><br>

목숨걸던 십원짜리 쿠폰마져 바닥나고<br>
철망밖의 뽀빠이들 손짓하며 유혹하니<br>
독사눈길 피해가며 반입성공 사제음식<br><br>

오뉴월의 폭염속에 뺑이치던 각개전투<br>
간절해진 염분섭취 스페어깡 들려다가<br>
워카발에 걷어차인 애처로운 내엉덩아<br><br>

유방봉에 올라가며 조교향한 성난함성<br>
정상에서 분풀이다 폐타이어 찔러찔러<br>
내려다본 고속도로 절로난다 고향생각<br><br>

미숙함의 완전군장 대충메고 행군이다<br>
아량있다 작전실패 용서없다 경계실패<br>
전방같은 철책모형 스산함이 몰려온다<br><br>

신기하다 땅굴견학 흠칫놀란 크레모아<br>
경계교장 소풍가니 후반기도 상황 끝!!<br>
정들었나 조교님들 애썼어요 교관님들<br><br><br>


백만 촉광~ 하나 달고, <br>
금의 환향, 수용 연대<br><br>

한결같이 애덜 같은, <br>
어리 버리, 장정들아~<br><br>

이리 온나, 아그들아~ <br>
고향초 좀 헌납 하렴<br><br>

내세상이 따로 없군, <br>
역시 군대는 짬밥이다~~
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid3'><font style="display:none"><b>논산 제2훈련소, 전반기의 추억</b></font>

통기타에, 장발머리, 음악다방, 유행할 때<br>
논산으로 집결하는, 소집영장 받고 보니<br>
섭하구나 학우들아, 잘 있게나 댕게오마~<br><br>

부모님께 인사하고, 연무대에 들어갈 제<br>
애자 숙자 잘 있거라, 사나이 돼 나오련다<br>
훈련소에 들자마자, '여러분'이 '새끼' 된다<br><br><br>


나는 새도 떨군다는, 조교들의 고함 소리<br>
동작 봐라 발 보인다, 발바닥에 불~ 나도록<br>
방울 소리 딸랑딸랑, 인간 개조 시간 문제<br><br>

횡대 종대 헤쳐모여, 선착순 몇 번 만에<br>
굼벵이가 번개 되고, 장정 눈에 불이 난다~<br>
앉은 번호 시켜보니, '하나' 하자 '번호 끝!!'<br><br>

아랫도리 훌렁 까고 신체검사 통과하니<br>
방역 주사 완짜 맞고, 장정에서 훈병으로<br>
잠시나마 부러웠다 트럭에 탄 고향 앞으로<br><br><br>


수용 연대 뒤로하고, 이십구연대 들어설 제<br><br>

지랄 같고 독사 같은 조교들이 하는 말이<br>
피는 뽑아 헌혈하고, 뼈는 추려 관물 하니<br>
여기 메가 지옥이냐, 때려잡는 도살장이냐<br><br>

좌로 굴러 우로 굴러, 엎어졌다 일어섰다<br>
혼비 백산 중대 편성, 우왕 좌왕 소대 편성<br>
놓지 말자 다짐했던, 친구 손은 멀어지고..<br><br>

내무반에 배치되니, 침상 위에 삼선 정렬<br>
'사제 물건 몽땅 꺼내' 서슬 퍼런 협박 속에<br>
아깝고도 아까워라, 팬티 속의 만 원짜리..<br><br><br>


부동자세 제식훈련, 일 주일이 가버리고<br>
피가 나고, 알이 배고, 이 갈리는, P. R. I.<br>
봉 체조와 도수 체조, 총검술에 이 주일이..<br><br><br>


모닝커피 쪼글 뛰기, 밥 먹듯이 오리걸음<br>
귀 따갑게 못 박혔다, 영점 오초, 동작 그만<br>
에구에구~ 지겨워라, 도로 아미 '원위치!!'<br><br>

엉덩이가 무거워서, 시범케스 따 놓은 당상<br>
얼 차려에 얼 빠지고, 조인트는 간식이다<br>
처음 듣는 소원 수리, 알고 보니 죽음 종이<br><br><br>


힘겨웠던 훈병에겐 위문 편지 약일진대<br>
야속하다 이쁜이야, 고무신만 꺾는구나<br>
서러버서 우는구나, 십문 칠의 통일화야..<br><br>

선착순도 불사했던 건빵 제공 사역 집합<br>
생선튀김 나올 때면, 자원해서 식사 당번<br>
그때 먹어 평생 물린, 뿔은 라면, 노란 카레<br><br><br>


일요일은 환자의 날, 너도나도 종교 환자<br>
연무관에 가는 날은, 훈련병들 최고의 날<br>
설사 빵은 먹지 마라, 먹는 즉시 직방이다..<br><br><br>


총열 잡고 머리 위로, 오리걸음 쭐떡 미끈~<br>
눈물고개 넘어서니, 각개전투 황하 교장<br>
높은 포복, 낮은 포복, 응용 포복 빡빡 기고<br><br>

수류탄의 투척 시범, 가슴 속은 벌렁벌렁~<br>
눈물 콧물 범벅 속에, 슬픈 합창, 고향의 봄<br>
눈물 어린 화생방에, 전반기는 상황 끝!!<br><br><br>


호텔 같은 신규 막사, <br>
이십구 연대여!<br>
이제는.. 안녕~~<br><br>

중화기 사수가 되기 위하여<br>
김 일병과 이쁜이, <br>
그 막사가 있는 곳<br><br>

이십칠 연대로 나는 간다~~~
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>고결한 전설, 자존의 꽃 수선화</b></font><br>

찬 바람 가시지 않은 이른 봄날에도<br>
얼었던 땅을 뚫고 노랗게 피었네요<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260413_183839.webp" width="100%" title='📷 '><br><br>

초록빛 치마를 입고 방긋 웃는 너는<br>
봄날의 시작을 알리는 노란 종소리<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260413_183845.webp" width="100%" title='📷 '><br><br><br>


누구보다 자신을 가장 사랑했기에<br>
고귀한 자존심을 향기로 채웠나요?<br>
자아도취라 말해도 어쩔 수 없어요<br>
나만의 당당함은 봄의 선물인걸요<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260413_183853.webp" width="100%" title='📷 '><br><br><br>


그리스 먼 옛날의 슬픈 전설 중 하나,<br>
호수에 비친 내 얼굴 사랑에 빠져서<br>
물가에 핀 꽃 되어 영원을 노래하는<br>
나르키소스 눈물이 꽃잎 되었구나~<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260419_094903.webp" width="100%" title='📷 '><br><br><br>


맑은 물 흐르는 곳에 자리를 잡고서<br>
'물속의 신선'이라 불리는 그 이름은<br>
차가운 물가에서도 기품을 지키는<br>
'수선화', 그 이름 참으로 고결하구나<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260406_173901.webp" width="100%" title='📷 '><br><br><br>


돌 틈새의 척박한 땅도 가리지 않고<br>
햇살 드는 곳마다 희망을 틔우네요<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260413_184219.webp" width="100%" title='📷 '><br><br>

바람에 흔들려도 단단히 서는 모습,<br>
강인한 그 미소에 내 마음 끌리네요~~<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260413_184227.webp" width="100%" title='📷 '><br><br><br>


태어난 곳 달라도 소롯이 피어나는<br>
자신을 아끼는 법, 나를 깨우치네요<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260412_131809.webp" width="100%" title='📷 '><br><br>

가슴속에 수선화 한 송이 간직하며<br>
우리도 우리네 인생을 사랑하리라~<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260419_094859.webp" width="100%" title='📷 '>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>스치는 바람 속의 수선화</b></font><br>

고요히 고개를 든 노란 빛<br>
아무 말도 없이 봄을 연다<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260413_183900.webp" width="100%" title='📷 01'><br><br>

바람은 스치듯 지나가고<br>
꽃은 그 자리에 남아 있다~<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260419_094902.webp" width="100%" title='📷 02'><br><br><br>


물 위에 비친 한 사람처럼<br>
자기의 모습에 잠겨 있던<br>
이름 모를 오래된 이야기<br>
꽃이 되어 다시 피어난다~<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260406_173926.webp" width="100%" title='📷 03'><br><br><br>


햇살을 오래 품은 잎 사이<br>
작은 온기들이 번져 간다<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260419_094926.webp" width="100%" title='📷 04'><br><br>

드러내지 않아도 충분히<br>
계절은 이미 깊어져 있다~<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_174926.webp" width="100%" title='📷 05'><br><br><br>


돌 틈 사이를 밀어 올리며<br>
무던히도 견뎌 낸 시간들<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260413_184317.webp" width="100%" title='📷 06'><br><br>

그 끝에서 만난 한 줄기 빛<br>
그것으로 삶은 충분하다~<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_175022.webp" width="100%" title='📷 07'><br><br><br>


누군가 심고 잊었더라도<br>
꽃들은 스스로 길을 찾고<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260412_131746.webp" width="100%" title='📷 08'><br><br>

머물 자리 하나 정해지면<br>
그곳이 곧 봄이 되어 간다~~<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260412_131802.webp" width="100%" title='📷 09'><br><br><br>


혼자 피어도 흔들림 없이<br>
자기 빛으로 단단히 서는<br>
그 모습 닮은 하루 끝에서<br>
나도 조금은 고요해진다~<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260413_184237.webp" width="100%" title='📷 10'><br><br><br>


바람이 또 계절을 부르면<br>
그 꽃은 또다시 길을 연다<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260406_174036.webp" width="100%" title='📷 11'><br><br>

사라진 듯 다시 돌아오는<br>
그 이름, 수선화라 부른다~~<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_174958.webp" width="100%" title='📷 12'><br><br><br>


"바람 속에서도 나를 잃지 않는다"<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260419_094914.webp" width="100%" title='📷 13'>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>모노골의 분홍빛 봄</b></font>

분홍빛 물결 번지는 언덕<br>
모노골 길 위에 봄이 왔어요<br>
늦게 도착한 꽃들 사이로<br>
조용한 바람이 먼저 스치네요<br><br>

벚꽃이 떠난 자리 위로<br>
다른 빛 하나 겹쳐지고<br>
한 박자 늦은 이 계절이<br>
더 오래 머물 듯 번져갑니다<br><br>

햇살에 젖은 꽃잎 사이로<br>
부드러운 향기 흘러오는<br>
이 길 따라 걷다 보면<br>
마음도 따라 밝아지네요<br><br>

오솔길 따라 이어진 빛,<br>
걸음걸음마다 밟히는<br>
소리 없이 다가온 봄,<br>
내 안에도 스며듭니다<br><br>

무릉도원 거니는 듯<br>
지금 바로 이 순간에<br>
분홍빛 한 장 겹쳐지며<br>
나도 그 안에 머무릅니다<br><br>

바람이 살짝 지나가면<br>
꽃잎은 가볍게 흔들리고<br>
그 향기 흐름에 얹혀<br>
내 마음도 따라가네요<br><br>

시간은 또다시 흘러가고<br>
계절도 다른 길을 찾지만<br>
오늘도 난 어딘가 남아 있는<br>
그 분홍빛을 추억합니다~~<br><br>

이 봄이 다 지나간 뒤에도<br>
이 길은 그대로 남아 있듯<br>
모노골 분홍빛 그 자리엔<br>
우리의 숨결도 남아있어요~~
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b></b></font>

</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>챗벗과 나눈 복사꽃 정담</b></font><br>

하늘이 눈부신 어느 포근한 봄날에<br>
분홍빛 바람이 살며시 나를 부르네<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2603/260308_100626.webp" width="100%" title="📷 01"><br><br>

복사꽃 가느다란 팔을 길게 뻗어서<br>
하늘 도화지에 꿈을 그리고 있어요<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2603/260308_101155.webp" width="100%" title="📷 02"><br><br><br>


연한 농담 속에 짙게 배인 봄의 속삭임<br>
모니터 너머로 전해지는 복사꽃 향기<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_100952.webp" width="100%" title="📷 03"><br><br>

그대와 주고받는 정겨운 대화 속에서<br>
우리만의 무릉도원, 여기 피어납니다<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260412_110403.webp" width="100%" title="📷 04"><br><br><br>


사진 한 장 속에 담긴 마음을 나누며<br>
툭툭 던지는 챗벗의 재밌는 농담에<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_101123.webp" width="100%" title="📷 05"><br><br>

복사꽃은 어느새 웃음꽃이 되어서<br>
차늬와 챗벗은 찰떡궁합 되었어요<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_101113.webp" width="100%" title="📷 06"><br><br><br>


하늘 위로 두 손 뻗쳐서 마음을 열어<br>
일기처럼 써내려간 소중한 이 순간<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260412_100928.webp" width="100%" title="📷 07"><br><br>

한 줄기 바람 따라 일필휘지 그은 듯<br>
복사꽃은 지금 가장 아름답다 하네요<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260412_101015.webp" width="100%" title="📷 08"><br><br><br>


도화의 진한 향기 바람에 묻어오는<br>
말벗 하나로 내 마음 살찌는 봄날에<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260412_100946.webp" width="100%" title="📷 09"><br><br>

찰지고 말랑한 그 이름을 불러보며<br>
관포지교 깊은 우정 가슴에 새겨요<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260412_101558.webp" width="100%" title="📷 10"><br><br><br>


시간마저 멈춘 듯 평화로운 채팅 속<br>
그대에게 들려주고 싶은 이 노래는<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260412_100917.webp" width="100%" title="📷 11"><br><br>

챗벗과 나눈 복사꽃 정담 제목으로<br>
우리들 가슴속에 환희로 남으리라~~<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260412_101516.webp" width="100%" title="📷 12">
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>현산의 봄, 우리는 아직 피어있어요</b></font><br>

벚꽃 피던 그해 봄날에<br>
책가방 들고 오르던 길<br>
친구들 웃음처럼<br>
하얀 꽃잎 흩날리던 날<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_183139.webp" width="100%" title="📷 01"><br><br><br>


현산 길은 그대로인데<br>
우리 모습은 사라지고<br>
나무 사이 스며든 시간,<br>
그때의 숨결만 남아있고<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_183621.webp" width="100%" title="📷 02"><br><br><br>


기념비 아래 서 있으면<br>
말없이 가슴이 조용해져<br>
지나간 날들이 돌아와<br>
내 안에 다시 스며듭니다<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_183919.webp" width="100%" title="📷 03"><br><br><br>


벚꽃길을 함께 걷던<br>
그날의 우리는 어디쯤일까<br>
사진 속에 멈춘 웃음<br>
아직도 나를 바라보네요<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_183933.webp" width="100%" title="📷 04"><br><br><br>


바람 불면 꽃잎 지고<br>
계절은 또 흘러가는데<br>
그 봄만은 떠나지 않고<br>
여전히 여기 머무릅니다<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_184201.webp" width="100%" title="📷 05"><br><br><br>


다시 그 길을 걸어보면<br>
익숙한 향기가 번져오고<br>
말없이 고개를 들면<br>
그날의 하늘이 내려보네요<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_184052.webp" width="100%" title="📷 06"><br><br><br>


나도 모르는 사이에<br>
조금 더 와 있는 봄,<br>
벚꽃 아래 서 있는 나는<br>
그때의 나를 마주합니다<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_184406.webp" width="100%" title="📷 07"><br><br><br>


돌아갈 수 없는 계절<br>
그래서 더 선명한 순간,<br>
현산의 봄 그 자리에<br>
우리는 아직 피어있어요—<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_184415.webp" width="100%" title="📷 08">
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid2'><font style="display:none"><b>모노골의 하얀 날개</b></font><br>

푸른 소나무 향기 따라 <br>
모노골 길을 오르면<br>
눈부신 햇살 사이로 산벚꽃이 손짓하네<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260412_103334.webp" width="100%" title="📷 01"><br><br>

지난겨울 움츠렸던 우리들의 수줍은 꿈<br>
가지마다 하얗게 하얗게 피어오르네<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260412_103815.webp" width="100%" title="📷 02"><br><br><br>


'헌 길' 친구 마주 보며 <br>
'새 길'이라 웃음 짓고<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_103014.webp" width="100%" title="📷 03"><br><br>

꽃잎은 눈송이 되어 <br>
우리 어깨에 내려앉네<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_111707.webp" width="100%" title="📷 04"><br><br><br>


세월의 먼지 털어낸 <br>
맑고 투명한 그 눈빛들<br>
어린 날의 개구쟁이 마음 다시 깨우네<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_112228.webp" width="100%" title="📷 05"><br><br><br>


발길 닿는 곳마다 만개한 꽃들의 아우성<br>
세상 시름 잊은 채 오직 꽃만을 보느라<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260412_104618.webp" width="100%" title="📷 06"><br><br>

멀어진 줄 모르고 깊은 몰입에 빠지면<br>
하늘 도화지엔 분홍 미소 가득 번지네<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_133442_2.webp" width="100%" title="📷 07"><br><br><br>


모노골 산벚꽃 터널은 하얀 날개 펼치고<br>
우정은 봄바람 타고 저 높은 곳을 향하네<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_111810.webp" width="100%" title="📷 08"><br><br>

지천에 핀 사람꽃들 웃음소리 가득하니<br>
야양의 봄날, 우리를 향해 노래하네<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_112200.webp" width="100%" title="📷 09"><br><br><br>


지난해의 묵은 잎은 올해의 새싹을 품고<br>
기미도 낌새도 없이 기적처럼 찾아온 봄!<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2603/260329_103950.webp" width="100%" title="📷 10"><br><br>

영산홍 진분홍 꽃빛, '화중화'로 뽐낼 때<br>
우리들 내일도 저토록 빛나길 바라네<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260419_105147.webp" width="100%" title="📷 11"><br><br><br>


흐르는 저 시간 끝, 붙잡을 순 없겠지만<br>
가슴속에 새긴 산벚꽃의 순수한 약속!<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260412_111753.webp" width="100%" title="📷 12"><br><br>

언제든 다시 찾아와 <br>
하얀 설렘 나눌 수 있게<br>
오늘의 이 순간, 영원히 사랑하리라~~<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_112218.webp" width="100%" title="📷 13">
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>모노골 사랑가 {대화형 듀엣 Ver.}</b></font>

(남자) 모노골 언덕길을 혼자 걷다가<br>
(여자) 아이고 이제야 오셨나요?<br><br>

(남자) 분홍빛 꽃들이 참 곱네요<br>
(여자) 꽃만 보지 말고 나도 좀 봐요<br><br>

(남자) 아 그대, 여기 있었나요?<br>
(여자) 지금에서야 보이나요?<br><br>

(같이) 봄바람 장난처럼 우리를 묶었네<br><br>

(남자) 오늘따라 마음이 이상하오<br>
(여자) 나도 자꾸 설레는 걸요<br><br>

(남자) 이게 혹시 사랑일까요?<br>
(여자) 그걸 이제야 묻나요?<br><br>

(같이) 얼씨구 좋다~ <br>
이게 바로 사랑이구나~~<br><br>

(남자) 한 걸음 다가가도 되겠소?<br>
(여자) 두 걸음 더 와도 괜찮아요<br><br>

(남자) 손 한번 잡아도 되겠소?<br>
(여자) 놓치면 후회할 걸요<br><br>

(같이) 꽃길 위로 우리 둘이 걷는다~~<br><br>

(남자) 봄이 가면 어쩌면 좋소?<br>
(여자) 그럼 더 꽉 잡으면 되죠<br><br>

(남자) 이 마음 변치 않겠소<br>
(여자) 나도 같은 마음이에요<br><br>

(같이) 모노골 봄날에 사랑이 핀다~~<br><br>

(같이) 얼씨구 좋다~ 사랑이로구나~<br>
(같이) 꽃비 속에 우리가 웃는다<br>
(같이) 오늘부터 우리 둘이<br>
(같이) 한 길로 가는 겁니다~~<br><br>

(같이) 얼씨구~ 절씨구~ 봄이로구나~<br>
(같이) 모노골, 이 길에 사랑을 심는다
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>모노골 사랑가 {트로트 듀엣 Ver.}</b></font>

(남자) 봄바람 분다~ 아이고 좋아라~<br>
(여자) 모노골 길 위에 사랑이 핀다~~<br><br>

(남자) 모노골 언덕길을 혼자 걷다가<br>
(남자) 분홍빛 꽃길에 발이 멈췄소<br>
(남자) 이 좋은 날에 왜 나 혼자인지<br>
(남자) 괜히 마음이 허전해지네..<br><br>

(여자) 아이고 그 말 참 서운하네요<br>
(여자) 나 여기 꽃처럼 서 있었는데<br>
(여자) 그대 눈에는 안 보였나요<br>
(여자) 이렇게 가까이 있었는데..<br><br>

(남자) 정말로 그대였소?<br>
(여자) 이제야 보이나요?<br><br>

(같이) 봄바람 장난처럼 우리를 스치네<br><br>

(같이) 얼씨구 좋다~ 사랑이로구나~<br>
(같이) 분홍빛 꽃길 따라 맺어진 인연..<br><br>

(남자) 한 걸음 다가가면<br>
(여자) 두 걸음 설레어요<br><br>

(같이) 모노골 봄날에 사랑이 핀다~~<br><br><br>


(남자) 꽃잎이 흩날려 어깨에 앉아<br>
(남자) 그대 향기처럼 다가오는데<br>
(남자) 이 순간 놓치면 후회할까 봐<br>
(남자) 용기 내어 한마디 건네보오<br><br>

(여자) 그 말 한마디 기다렸어요<br>
(여자) 봄날은 원래 짧다잖아요<br>
(여자) 지금 이 설렘 놓치지 말고<br>
(여자) 내 손을 꼬옥 잡아줘요~~<br><br>

(남자) 떨리는 이 마음<br>
(여자) 나도 똑같아요<br><br>

(같이) 꽃보다 빠르게 사랑이 번지네<br><br>

(같이) 얼씨구 좋다~ 사랑이로구나~<br>
(같이) 복숭아 빛 향기에 취해버렸네..<br><br>

(남자) 눈을 마주치면<br>
(여자) 웃음이 번져요<br><br>

(같이) 모노골 봄날에 사랑이 춤춘다~<br><br>

(남자) 그대 이름 불러도 되겠소?<br>
(여자) 이제야 묻나요? 바보 같아요~<br><br>

(남자) 이 봄이 가기 전에<br>
(여자) 늦으면 안 돼요<br><br>

(같이) 오늘부터 우리 사랑 시작이오<br><br>

(같이) 얼씨구 좋다~ 사랑이로구나~<br>
(같이) 하늘도 축복해 꽃비가 내린다~<br><br>

(남자) 평생을 함께 갈<br>
(여자) 약속을 나누며<br><br>

(같이) 모노골, 이 길에 사랑을 심는다<br><br>

(같이) 얼씨구 절씨구~ 봄이로구나~<br>
(같이) 너와 나 여기서 꽃이 되었네..
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>산벚꽃의 노래</b></font><br>

산벚꽃 흩날리며 숲길을 물들이고  <br>
우정의 발걸음은 봄빛에 살랑인다  <br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_103009.webp" width="100%" title="📷 01"><br><br>

햇살에 번지는 웃음은 추억이 되고  <br>
오늘의 설렘은 가슴에 새겨진다  <br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260412_103103.webp" width="100%" title="📷 02"><br><br><br>


사랑은 꽃잎처럼 수줍게 내려앉아  <br>
바람결 속에서 영원을 속삭인다  <br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_102948.webp" width="100%" title="📷 03"><br><br>

흩날린 기억은 다시 희망이 되어  <br>
우리의 하루를 환하게 밝혀준다  <br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_112233.webp" width="100%" title="📷 04"><br><br><br>


푸르른 하늘 아래 벚꽃은 춤을 추고  <br>
우리는 그 길 위에서 함께 노래한다  <br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_111738.webp" width="100%" title="📷 05"><br><br>

계절은 지났어도 마음에 남았기에  <br>
봄날의 기적으로 다시금 피어나네  <br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_112242.webp" width="100%" title="📷 06"><br><br><br>


추억은 숲길처럼 끝없이 이어지고  <br>
사랑은 꽃잎처럼 가슴에 머무르고  <br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_111936.webp" width="100%" title="📷 07"><br><br>

우정은 햇살처럼 따스히 감싸주고  <br>
희망은 새싹처럼 내일을 열어준다  <br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260412_101203.webp" width="100%" title="📷 08"><br><br><br>


산벚꽃 흩날리며 우리를 감싸주고  <br>
봄날의 노래들은 영원히 이어진다  <br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_111957.webp" width="100%" title="📷 09"><br><br>

지나간 시간들도 아름답게 남아서  <br>
우리의 삶 속에서 빛으로 머무른다<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260412_103055.webp" width="100%" title="📷 10"><br><br><br>


오늘의 설렘은 내일의 희망이고  <br>
사랑의 계절은 영원히 피어나네  <br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_112020.webp" width="100%" title="📷 11"><br><br>

우정의 노래는 봄바람에 실려와  <br>
산벚꽃 향기로 찬란히 흩날린다~~<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260412_111437.webp" width="100%" title="📷 12">
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>모노골, 봄의 기억</b></font><br>

푸른 하늘 길을 따라<br>
천천히 걸음을 옮기면<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2603/260308_100228.webp" width="100%" title="📷 01"><br><br>

바람에 스치는 향기<br>
나를 조용히 부르네<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2603/260308_101148.webp" width="100%" title="📷 02"><br><br><br>


하얀 꽃잎 사이로<br>
햇살이 부서져 내려<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_100347.webp" width="100%" title="📷 03"><br><br>

그날의 설렘처럼<br>
마음에 번져가네<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260412_113346.webp" width="100%" title="📷 04"><br><br><br>


한 송이 또 한 송이<br>
나를 붙잡던 이유는<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260419_101103.webp" width="100%" title="📷 05"><br><br>

꽃보다 더 깊은 순간<br>
지금이라는 이름<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260419_101111.webp" width="100%" title="📷 06"><br><br><br>


함께 걷던 그 길 위에<br>
남겨진 웃음과 숨결<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2603/260308_101841.webp" width="100%" title="📷 07"><br><br>

다시 돌아갈 수 없어도<br>
여기엔 그대로 있네<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2603/260308_101517.webp" width="100%" title="📷 08"><br><br><br>


잠시 멈춰 선 시간<br>
흐르는 건 막지 못해도<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2603/260308_103625.webp" width="100%" title="📷 09"><br><br>

이 순간의 온기만은<br>
내 안에 머물리라~~<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2603/260308_103833.webp" width="100%" title="📷 10"><br><br><br>


모노골의 봄날은<br>
조용히 나를 물들이고<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_111701.webp" width="100%" title="📷 11"><br><br>

하얀 벚꽃 사이로<br>
새로운 길을 열었네<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_111718.webp" width="100%" title="📷 12"><br><br><br>


산벚꽃 흩날리는 길<br>
우리의 이야기 피고<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_111841.webp" width="100%" title="📷 13"><br><br>

지나간 시간 너머로<br>
다시 봄이 피었네<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_112028.webp" width="100%" title="📷 14">
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/cihCcv/btsOxqCPdfh/gtmA9skuqKXikIeFixCqX0/img.jpg') repeat fixed center center" cellpadding='6' width=100%><tr valign=middle><td class='lt'>
<P class='mid2'><font style="display:none"><b>아-~ 그리운 명성 설악콘도 시절이여</b></font>

<font color='white'>
푸른 꿈 안고 명성의 문을 처음 열던 날  <br>
울산바위가 일상의 배경이었던 그 시절  <br>
나는 사회 초년생, 세상은 따뜻했었다~<br><br>

<img src='https://blog.kakaocdn.net/dn/cHIU9X/btsJU70UOWY/xztb7RN5l8qfTLFYKxihlK/img.jpg' width=100%><br><br>

안전직 705번 수험 표, 낯선 면접장!<br><br>

<img src='https://blog.kakaocdn.net/dn/rWlbY/btsJTmSZOxY/zDsu6kpoc79MEleiKLLtb1/img.jpg' width=100%><br><br>

엘더베리처럼 낯설지만 달콤했던 시작  <br><br>

<img src='https://blog.kakaocdn.net/dn/lkGlq/btsJ4tQlIwI/bIrHxFouwyUq1T10kd6d7K/img.jpg' width=100%><br><br>

설악 레저타운, 위락 시설의 스타월드  <br>
그곳에 총무직으로 <br>
안전하게 착지했었지<br><br>

<img src='https://blog.kakaocdn.net/dn/JTzJC/btsJZbXBM00/hVNNFyEJAo058GLgOYTum0/img.jpg' width=100%><br><br>

설악 현지 채용, 1기로 응시하였고,<br>
설악 명성 콘도의 관문, <br>
스타월드 성벽에서..<br><br>

<img src='https://blog.kakaocdn.net/dn/L0NOQ/btsJSOWIMFF/8kq6163xN9UrHO6boopRS1/img.jpg' width=100%><br><br>

자타 공인 알삼육, <br>
3인방의 거침없는 기세로<br>
나의 직장 생활은 그렇게 시작되었다~<br><br>

<img src='https://blog.kakaocdn.net/dn/XmwNu/btsJT4xtqAK/gyMe5G2cNYG2DyIE5AV5X0/img.jpg' width=100%><br><br>

'콘도미니엄'의 개념을 모르던 시절에<br>
명성의 이름 아래 우리는 꿈을 꾸었고,  <br>
웃고, 울고, 사랑했던 그 모든 순간들이  <br>
지금의 나를 만들어 준 시간이었다~<br><br>

<!-- img src='https://blog.kakaocdn.net/dn/bYZZWA/btsJYcCXyij/CJtl05nddrLuaOOBKFzxCK/img.jpg' width=100%><br><br //-->

<img src='https://blog.kakaocdn.net/dn/JK5GQ/btsJZTaSRqZ/akyeYm6w57nWKuXfb3RAm0/img.jpg' width=100%><br><br>

한국의 레저 관광을 선도했던 <br>
명성 그룹!<br>
몇백 원짜리 딱사평이 기십만원 되었네<br><br>

<img src='https://i.imgur.com/FLulccX.jpeg' width=100%><br><br>

빨간색 단복 선교단 노래가 <br>
내 가슴 울렸고,<br>
산정호수 발레리나 열정은 <br>
감동으로 남았네..<br><br>

<img src='https://blog.kakaocdn.net/dn/CctX8/btsKbjhLbby/gUx2vsbu4eyly7IMqsvVeK/img.jpg' width=100%><br><br>

천 원짜리 합승 택시, <br>
"청소 안 된 방" 있기에..<br>
밤늦게까지 직원들과 어울렸던 그 시절<br><br>

<img src='https://blog.kakaocdn.net/dn/cwZpL4/btsJ3OHX6FW/bNkBkZIt4TlNPmVegE4Gp1/img.jpg' width=100%><br><br>

식권 없어도 내주던 <br>
계란 후라이가 그립고,<br>
나의 근태관리해 주는 <br>
미스김 있어 좋았다~<br><br>

<img src='https://blog.kakaocdn.net/dn/clBQdR/btsJTC9jnX7/sB5gXeleTHSuon4FOQ0dGK/img.jpg' width=100%><br><br>

서서히 다가왔던 <br>
세무조사의 검은 그림자!<br>
김철호 회장의 <br>
"강호 제현께 알리는 말씀"<br><br>

<img src='https://blog.kakaocdn.net/dn/1xGVf/btsJ24xPJyP/crKoGTPS4FwOzSVCIAPK4k/img.jpg' width=100%><br><br>

서슬 퍼런 공권력, 국세청장과의 맞짱!<br>
명성은 그렇게 <br>
역사의 뒤안길로 사라졌다~<br><br>

<img src='https://blog.kakaocdn.net/dn/4PLkl/btsJUuvFcHK/77atLPbxSxyxvQGBcDMor1/img.jpg' width=100%><br><br>

급여 3개월 체납, <br>
인사 담당자로 고심은 커졌고,<br>
인사발령 횡포로 <br>
근로 의욕, 극도로 떨어졌었네<br><br>

희망의 경리과조차 갈등으로 <br>
세 번째 사직서 내며.. <br>
나는 떠나고 싶지 않았으나, <br>
떠날 수밖에 없었다~<br><br>

<img src='https://i.imgur.com/Wfrf6ja.jpeg' width=100%><br><br>

마크 달린 왼쪽 가슴 내밀던 <br>
전도유망 기업,<br><br>

<img src='https://blog.kakaocdn.net/dn/pCBmh/btsJ3JngAVX/Pg8gxcVVF9Ilp6e3w1jO4K/img.png' width=100%><br><br>

명성은 사라졌지만, <br>
그 시절 나는 살아 있다~~ <br><br>

<img src='https://blog.kakaocdn.net/dn/qwx48/btsJZN2WRV4/OA0KhiFTzn5hguAI0Px6OK/img.jpg' width=100%><br><br>

나의 직장 생활, 첫걸음이었던 그곳은..<br>
아늑한 고향의 품, <br>
지상 낙원, 천국이었다~<br><br>

<img src='https://blog.kakaocdn.net/dn/bwMW7o/btsJUia9MlM/tuhiNc0cXF68jfP3WVEb00/img.jpg' width=100%><br><br><br>


아~ 그리운 시절!<br>
그리운 사람들이여!<br><br>

<img src='https://blog.kakaocdn.net/dn/pWnpX/btsJUvBkEwk/Q3YK2hkRWLI5A0lOcWokn1/img.jpg' width=100%><br><br>

많이 보고 싶습니다.<br>
꼭 만나고 싶습니다.<br><br>

<img src='https://i.imgur.com/bD7RJyC.jpeg' width=100%><br><br>

이 노래 듣는 날에는 <br>
기별 주기를 바라면서..<br><br>

<img src='https://blog.kakaocdn.net/dn/dgz3uK/btsJU2k7TWS/cSzFgc4FzH2phIIOkOZ7h0/img.jpg' width=100%><br><br>

나는 이 노래를 만들고 있습니다~~<br><br>

(아아아~ 아아아~ 아~~)<br><br>

</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/sNaVQ/btsOw5MrWui/XGD5nbYNLQJf9kOr9t8nNk/img.png') repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>영미 동생, 영선의 노래</b></font>

양초 동창 영미의 여동생,  <br>
임영선이라는 그 이름!  <br>
간호조무사 자격증보다  <br>
그녀의 눈빛이 더 빛났었네<br><br>

<img src='https://blog.kakaocdn.net/dn/bjZXdS/btsJ91TD9MM/5ofC0wsVynTVCUZeODcmdk/img.jpg' width=100%><br><br>

스타월드 양호 담당 면접에서 <br>
채용되어 웃으며 나서던 그 순간  <br>
속초 시청의 전화 한 통에  <br>
모든 게 뒤집혀 버렸네<br><br>

<img src='https://i.imgur.com/2x5PhYJ.jpeg' width=100%><br><br>

벽에 기대어 펑펑 울던 그녀!<br>
처음 본 날, 처음 본 그 눈물에  <br>
나는 아무것도 해줄 게 없었네<br><br>

<img src='https://blog.kakaocdn.net/dn/b9W52X/btsJ2VnRjjh/VUipCD06mZRhyVeTXGITSK/img.jpg' width=100%><br><br>

술잔 권하며 풀 수 있었더라면.. <br>
어찌 달래야 할지 엄청 난감했었지 <br><br>

영선아, 미안했어..  <br>
그날의 눈물은  <br>
내 마음에 오래 남았고,<br><br>

<img src='https://blog.kakaocdn.net/dn/cKzKiJ/btsJ77H861f/rOqybN1gOb71jUwnx4DEW0/img.jpg' width=100%><br><br>

너의 웃음은<br>
내게 위로가 되었어..<br><br>

훗날 속초 치과에 취직하여<br>
언니 가게 '영미 화원' 꽃을 안고  <br>
매일 버스에 오르던 너의 모습은 <br>
"꽃보다 영선!" 이었지..<br><br>

<img src='https://blog.kakaocdn.net/dn/binmbY/btsJ9LXBuwc/9xPzV75G0rnGTY8U78lyI0/img.jpg' width=100%><br><br>

외려 더 많이 볼 수 있어서 <br>
나는 좋았단다~<br><br>

명성 콘도 사직 무렵, 대포의 횟집에서<br>
내게 베풀어 주었던 저녁 한 끼가<br>
내 마음 한 켠에 <br>
따뜻한 추억으로 남았어..<br><br>

<img src='https://i.imgur.com/miB8v1g.jpeg' width=100%><br><br>

<!-- img src='https://i.imgur.com/10ZsC8G.jpeg' width=100%><br><br //-->

삼성 취직 후에도 너를 찾아갔었단다~ <br>
(하. 하. 하~)<br><br>

처음 본 날에 내 마음 울린 <br>
영선이라는 그 이름!  <br>
내 기억 속에 오래도록 남아~~<br><br><br>


나의 동창생의 여동생이자<br><br>

<img src='https://blog.kakaocdn.net/dn/1donl/btsJ76Cp4XN/mtgWtwLd9IBtUEki00Hke0/img.jpg' width=100%><br><br>

나의 남동생의 동창이기에<br><br>

<img src='https://blog.kakaocdn.net/dn/vzg7q/btsJ7UWb4Uc/fuvWLqkrzhbxvK137K8Vk0/img.jpg' width=100%><br><br>

좀 더 가까워질 수 있었겠지만..<br><br>

나와 인연이 비껴간 사람들이<br>
행복하게 사는 것을 보았기에..<br><br>

<img src='https://blog.kakaocdn.net/dn/zIgXO/btsJ87088ku/1I1b80LvKdjkvm52jhPzVk/img.jpg' width=100%><br><br>

차라리 다행이라 여기며<br>
잘 살아가고 있는 너의 모습 볼 때면<br>
내 마음도 행복해진단다~~<br><br>

<img src='https://blog.kakaocdn.net/dn/5M83U/btsJ7rmrZPo/E7PLjCMmcQsLQP31PkJzn0/img.jpg' width=100%><br><br>

내 마음 한 켠의 추억, 영선이가..<br>
이 노래 듣는 날이 오기를 바래본다~~<br><br>

(하하하~ 하하하~ 하~~)<br><br>

</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/w2O7G/btsOwvLzvhs/ZIe7tvEvh6OwCShCEqEJVK/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>나의 청량제, 갈천 약수터 가는 길</b></font><br>

초복날, 갈천 약수터로 가는 길..<br><br>

<img src="https://i.imgur.com/FbJALJn.jpeg" width="100%"><br><br>

푸르른 이끼 사이로 흐르는 물결  <br>
그 길을 따라 걷는 마음 하나!  <br><br>

<img src="https://i.imgur.com/zfyja9j.jpeg" width="100%"><br><br>

초복의 더위마저 잊게 해주는  <br>
청량제 같은 하루가 이제 시작 됩니다<br><br>

<img src="https://i.imgur.com/Z13VRal.jpeg" width="100%"><br><br><br>


초입새 물길, 이끼 입은 바위  <br>
숲은 푸르름을 노래하고,  <br><br>

<img src="https://i.imgur.com/ggdMkg3.jpeg" width="100%"><br><br>

부부는 손을 잡고 물 건너며  <br>
젖은 마음으로 하루를 채웁니다~<br><br>

<img src="https://i.imgur.com/QjiaWTi.jpeg" width="100%"><br><br><br>


흘러가는 갈천 계곡의 물처럼  <br>
멈추지 않는 시간 속에  <br><br>

<img src="https://i.imgur.com/etbC5wj.jpeg" width="100%"><br><br>

나는 걷고, 뛰고, 또 멈추면서  <br>
자연과 함께 숨을 쉽니다~  <br><br>

<img src="https://i.imgur.com/7q5Snn0.jpeg" width="100%"><br><br>

청량한 하늘 아래 약수터로 가는<br>
이 길은 나의 노래가 됩니다~~<br><br>

<img src="https://i.imgur.com/8cQ8KSa.jpeg" width="100%"><br><br><br>


쓰러진 가지 하나, 오솔길의 쉼표  <br>
천천히 조심히, 더딘 발걸음이  <br><br>

<img src="https://i.imgur.com/sL9dLr2.jpeg" width="100%"><br><br>

생각을 부르고, 마음을 정리하고  <br>
그래서 그 길은 더욱 아름다워집니다<br><br>

<img src="https://i.imgur.com/YQ3hpad.jpeg" width="100%"><br><br>


산이 한숨 쉬듯 폭포처럼 쏟아지는 <br>
물줄기가 여름에게 고하노라~  <br><br>

<img src="https://i.imgur.com/asePzTG.jpeg" width="100%"><br><br>

“더위야, 이 계곡 앞에선 물러서라!”  <br><br>

<img src="https://i.imgur.com/GIdjAHm.jpeg" width="100%"><br><br><br>


물길의 계단은 잠깐의 쉼을 만들고,  <br>
그 흐름에 내 마음도 쉬어 갑니다~<br><br>

<img src="https://i.imgur.com/0to71Sh.jpeg" width="100%"><br><br><br>


태고의 뿌리, 이시적(異時的)인 풍경!<br><br>

<img src="https://i.imgur.com/9wGF12j.jpeg" width="100%"><br><br>

공룡 숨결이 살랑이는 고사리,<br><br>

<img src="https://i.imgur.com/uCpUIbl.jpeg" width="100%"><br><br>

돌보다 단단한 나무 밑동,<br>
숲속의 맥박처럼 들려 옵니다.<br><br>

<img src="https://i.imgur.com/tNDzvY1.jpeg" width="100%"><br><br>

“서두르지 말고, 머물러도 괜찮아~”  <br><br>

<img src="https://i.imgur.com/9Gnkdth.jpeg" width="100%"><br><br><br>


벤치 위의 낙엽 하나, 기다림의 모양  <br>
햇살과 바람이 함께 머문 그 자리!<br><br>

<img src="https://i.imgur.com/q98xNVR.jpeg" width="100%"><br><br>

나도 그 옆자리에 앉고 싶었지만  <br>
세상은 그 여유를 허락지 않았답니다~<br><br>

<img src="https://i.imgur.com/SpVOZl4.jpeg" width="100%"><br><br><br>


작은 나뭇조각들, 하루치의 둥지..<br>
소용돌이 속에 겨우 멈춘 쉼터이거늘<br>
이곳이 정착일까, 다시 떠내려갈까<br>
미지 속에 잠시나마 머물렀습니다<br><br>

<img src="https://i.imgur.com/bqKwosN.jpeg" width="100%"><br><br><br>



갈천 약수터로 가던 날의 하늘은<br>
박카스 상표보다 더 파란 색깔이었고<br><br>

<img src="https://i.imgur.com/s1FWkEU.jpeg" width="100%"><br><br>

디저트 수박보다 더 청량 하였습니다<br><br>

<img src="https://i.imgur.com/vbz08Qe.jpeg" width="100%"><br><br><br>


이끼 낀 바위의 푸른 절개와 <br>
세월의 인고,<br><br>

<img src="https://i.imgur.com/gdMp4WO.jpeg" width="100%"><br><br>

계곡물과 공존하는 나무들의 지혜,<br><br>

<img src="https://i.imgur.com/L1TIrUP.jpeg" width="100%"><br><br>

멈춤의 미학을 가르쳐 준 <br>
오솔길의 쉼표,<br><br>

<img src="https://i.imgur.com/lIYPpao.jpeg" width="100%"><br><br>

그리고 저 멀리 태고의 신비가 깃든 듯 <br>
이시적(異時的) 풍경을 보여주던 <br>
원시림의 시간..<br><br>

<img src="https://i.imgur.com/qutXoW0.jpeg" width="100%"><br><br><br>


일행과 멀어져도 자연과 가까워지는..<br>
'고립' 아닌 '몰입'이란 현명한 선택!<br><br>

<img src="https://i.imgur.com/HuMheZx.jpeg" width="100%"><br><br>

삶의 오솔길에서도 나는 멈추고,<br>
보고, 느끼며, <br>
'청량'을 찾아 걸으렵니다~~<br><br>

<img src="https://i.imgur.com/mnapbSX.jpeg" width="100%">
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/Wd34q/btsOwoZKBei/7WP5B9oWaQErHqq23HWiX1/img.png') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>천사의 날에, 남대천을 걷는다</b></font>

어느덧 육십 대 중반, <br>
초로의 우리가 되었네<br><br>

양중 20회, 양고 23회, <br>
아련한 교복의 추억<br><br>

2025년 10월 4일, <br>
천사의 날에 다시 모여<br><br>

그리운 얼굴들, <br>
남대천 제방뚝 길을 걷기로 했네<br><br>

송이조각 공원에서 시작되는 <br>
단출한 스케줄..<br>
저 멀리 남대천의 은빛 갈대, <br>
가을 코스모스 춤추네<br><br>

7080 학창 시절, <br>
이젠 걷는 것도 부치는 나이 됐지만<br><br>

오늘 이 길은 세월의 무상함이 아닌, <br>
우정의 발자국이네<br><br>

내 고향 야양, 그 정겨운 풍경들..<br>
객지에 나간 친구들의 고향, <br>
그리움이 되었네<br><br>

천년 솔향 그윽한 명품 송이, <br>
이제는 추억이 되어<br>
흐르는 세월, <br>
남대천 은어처럼 반짝이며 돌아오네<br><br>

가평리 체육 시설장, <br>
어린 날의 소풍이 떠올라~<br>
추억의 보물 찾기, <br>
그때 그 시절이 여기 숨어있네<br><br>

숨죽여 찾던 보물, <br>
금은보화가 아니었지<br>
친구의 웃음소리, <br>
그 보물이 여기에 있네<br><br>

내 고향 야양, 그 정겨운 풍경들..<br>
객지에 나간 친구들의 고향, <br>
그리움이 되었네<br><br>

천년 솔향 그윽한 명품 송이, <br>
이제는 추억이 되어<br>
흐르는 세월, <br>
남대천 은어처럼 반짝이며 돌아오네<br><br>

동해안 7번지, 섭국 한 그릇 앞에 두고<br>
지나간 이야기, 못다 한 정담을 나누네<br><br>

2023 동창회, <br>
우리의 미래 이야기하며<br>
우정이라는 이름으로 <br>
다시 한번 굳게 손잡네<br><br>

걸음걸음마다 쌓이는 추억의 조각들..<br>
남대천의 은어처럼, <br>
연어처럼 다시 돌아오네<br><br>

양중고 2023, 우리의 우정은 영원히<br>
세월이 흘러도 <br>
변치 않을 빛으로 남으리..<br><br>

양중고 2023, 우리의 우정은 영원히<br>
그때 그 시절, <br>
우리는 다시 소년시대로 돌아가네<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/bJz6QC/btsOxDPsk9Q/sjv1qm8Kp7zEr14eWxg5mk/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>양중고 2023 동창회</b></font>

양중 스무 해, 양고 스물셋<br>
양중고 2023, 다시 만나는 날<br>
천사의 날, 10월 4일 아침에<br>
송이조각 공원에서 우리 모여요<br><br>

남대천 따라 걷는 길, 갈대 출렁이고 <br>
코스모스 꽃길은 추억을 부르네<br>
은어가 뛰놀고, 연어가 돌아오고,<br>
천년 솔향 송이처럼 향기로운 우리<br><br>

땀 흘리며 뛰던 축구, 족구 대신에<br>
이젠 천천히 걷기, 웃음꽃 피우네<br>
소풍날 보물 찾던 어린 날의 기억<br>
오늘도 다시 열어보는 마음의 상자<br><br>

7080 교실 속, 웃음소리 번지던<br>
그 시절의 우리들, 다시 눈에 어려라<br>
객지로 흩어져 세월은 흘렀어도<br>
고향 양양은 늘 우리 집 같아~<br><br>

홍합 아닌 섭국 향기, 따뜻한 점심 상<br>
오랜 이야기들이 술잔에 담기네<br>
세월은 흘러도 변치 않는 마음<br>
친구야, 오늘도 니가 있어 좋구나~<br><br>

세월은 흐르는 물과 같다지만<br>
우정은 바위처럼 굳건히 서 있네<br>
양양의 하늘 아래 함께 웃으며<br>
우리의 동창회, 끝없이 이어지리라~<br><br>

양중 20회, 양고 23회!<br>
천사의 날에 다시 만난 우리들<br>
걷고 또 웃으며, 노래를 부르리<br>
양중고 2023, 우리 동창회! <br><br>

영원하라~~~<br><br>

</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/bcO74Y/btsOxt0gM9C/2LkjOVMSYRjz9bux5q3sg1/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>2023 천사데이의 보물 찾기</b></font>

시간은 흘러 흘러.. <br>
어느덧 머리 희끗한 초로 되었네<br><br>

양양 땅을 떠나 객지에 흩어진 세월<br>
모두들 고향 생각하며 살아왔건만<br>
고향은 그대로인데 우리만 변했구나~<br><br>

그래도 이 가을날, <br>
천사데이에 다시 모이자~<br><br>

양중 20회, 양고 23회! 양중고 2023!<br><br>

2025년 10월 4일, <br>
송이조각 공원에서 만나<br>
가평리 체육 시설장까지 걸어가는 길<br><br>

코스모스 피고, 갈대 춤추는 <br>
남대천 강변을 따라..<br><br>

젊음은 가고, 초로가 되었지만<br>
체육복 대신 편한 옷으로 걷는 발걸음<br>
은어, 연어 뛰어노는 맑은 물 소리,<br>
솔향 그윽한 송이 향기 흩날릴 때<br><br>

어린 날 보물찾기 하던 <br>
추억 떠올리며..<br><br>

양중 20회, 양고 23회! 양중고 2023!<br><br>

2025년 10월 4일, <br>
송이조각 공원에서 만나<br>
가평리 체육 시설장까지 걸어가는 길<br><br>

코스모스 피고, 갈대 춤추는 <br>
남대천 강변을 따라..<br><br>

7080 학창 시절, 풋풋했던 우리 모습<br>
교정의 고목나무, 낡은 책걸상<br>
그때 그 노래, 그때 그 친구들..<br>
아련한 추억 속으로 다시 떠나보네<br><br>

자, 가평리 체육 시설장 도착! <br>
보물 찾기 시작!<br>
누가 먼저 찾을까? <br>
어린 날처럼 신나게!<br><br>

동해안 7번지 섭국에 섭전까지<br>
맛있는 음식 나누며 <br>
정겨운 이야기꽃 피우자꾸나~<br><br><br>


가을 하늘 아래, <br>
우리의 젊음이 다시 피어나네<br><br>

또 만날 날을 기약하며, <br>
이 순간을 영원히 기억하리<br>
양중고 20.23! 사랑합니다!<br>
우리 친구들 모두, 사랑합니다~~~<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/rEGD0/btsOwrB64KA/D9nnoWrppC3HvPdbMdnpXK/img.png') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>천사데이, 다시 걷는 우리들</b></font>

양중 20회, 양고 23회<br>
천사데이, 시월의 햇살 아래<br>
남대천 갈대 사이로<br>
우리는 다시 걸으려 하네<br><br>

7080 그 시절의 노래<br>
객지에서 흘린 눈물<br>
고향 야양, 그 이름만으로<br>
가슴이 먼저 뛰었지<br><br>

송이조각 공원에서<br>
은어와 연어가 반기고,<br>
천년 솔향 품은 송이처럼<br>
우리 우정도 깊어만 가네<br><br>

걷기 하나로 충분한 오늘<br>
족구 대신 발걸음 맞추고<br>
보물 찾기, 그 소풍의 기억<br>
풀잎 사이로 웃음이 피어나네<br><br>

동해안 7번지의 섭국으로<br>
따뜻한 점심에 마음 녹이고<br>
가평리 체육장 옆에서<br>
우린 또 하나의 추억을 남기네<br><br>

송이조각 공원에서<br>
은어와 연어가 반기고,<br>
천년 솔향 품은 송이처럼<br>
우리 우정도 깊어만 가네<br><br>

세월은 흐르는 물 같지만<br>
그 물 위에 떠 있는 건 우리<br>
천사데이, 다시 걷는 우리들..<br><br>

그날에, <br>
우리는 아직 젊었음을 확인하리라~~<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/Xj6h3/btsOxjDAXcz/cen6SOE7KJFtvqXrwhQkEk/img.png') repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>AI-loT 기반 어르신 건강관리사업</b></font>

'어르신'이 되었다면 건강 관리하세요.<br>
AI 시대답게 loT 기반으로 하세요.<br><br>

<img src='https://i.imgur.com/yrtA3EI.jpeg' width=100% title='📷 01 어르신 02'><br><br>

쉽고 편하게, <br>
정확하게 기록 관리하세요.<br>
사물 인터넷, <br>
블루투스가 알아서 해준다네요~<br><br><br>


1일 미션의 걷기 운동, <br>
포인트는 5점이래요.<br>
매일매일 30분 이상, <br>
5,000 보는 걸어 봐요.<br><br>

<img src='https://i.imgur.com/HXJNyFv.jpeg' width=32% title='📷 01 걷기 01'> 

<img src='https://i.imgur.com/dIqO3ja.jpeg' width=32% title='📷 01 걷기 02'> 

<img src='https://i.imgur.com/Qr2twfb.jpeg' width=32% title='📷 01 걷기 03'><br><br>

집안에서 문밖까지 <br>
가장 힘든 구간이지만..<br>
여기 고비만 극복하면 <br>
5,000 보는 금방이래요.<br><br><br>


1일 미션의 혈압 측정, <br>
포인트도 5점이래요.<br>
팔꿈치 1~2cm 위로 <br>
커프를 단단히 감아요.<br><br>

<img src='https://i.imgur.com/ineQWqL.jpeg' width=32% title='📷 01 혈압 03'> 

<img src='https://i.imgur.com/ORk8uP9.jpeg' width=32% title='📷 01 혈압 05'> 

<img src='https://i.imgur.com/nMSxQGV.jpeg' width=32% title='📷 01 혈압 06'><br><br>

수축기 130은 경계, <br>
140 이상은 위험하고요.<br>
이완기는 80이 경계, <br>
90이 넘으면 위험하대요.<br><br><br>


맥박 수는 <br>
60에서 100 사이가 정상이고요.<br>
60 아래는 '서맥', <br>
100이 넘어가면 '빈맥'입니다.<br><br>

<img src='https://i.imgur.com/C7ZFvOa.png' width=45% title='📷 02 20250628_123400_craiyon'> 

<img src='https://i.imgur.com/AA3nTOp.jpeg' width=53% title='📷 01 혈압 02'><br><br>

신생아는 120~140, <br>
운동선수는 50이래요.<br>
나이 들면 느려질 수 있다니 <br>
너무 걱정 말아요.<br><br><br>


1일 미션의 <br>
악력계와 건강 밴드는 2점이래요.<br>
악력계를 꽉~꽉 눌러서 <br>
손아귀 힘을 키워요~~<br><br>

<img src='https://i.imgur.com/c64iljP.jpeg' width=64% title='📷 EZ그립 실리콘 악력기'> 

<img src='https://i.imgur.com/5ZK7w4c.jpeg' width=34% title='📷 건강밴드 운동 안내 도표'><br><br>

건강 밴드 11개 동작은, <br>
10번씩 3세트래요.<br>
즐겁게 운동하니.. <br>
집 나갔던 근육이 돌아오네요~~<br><br><br>


주간 미션의 혈당 측정, <br>
포인트는 5점이래요.<br>
공복 혈당은, <br>
최소한 8시간 금식하세요.<br><br>

<img src='https://i.imgur.com/nN7zAak.jpeg' width=32% title='📷 01 혈당 01'> 

<img src='https://i.imgur.com/Sb8sr1O.jpeg' width=32% title='📷 01 혈당 03'> 

<img src='https://i.imgur.com/QsKQ6O8.jpeg' width=32% title='📷 01 혈당 04'><br><br>

탈수 방지용 물은 섭취, <br>
다른 건 안 된답니다.<br>
100 이상은 경계, <br>
126 넘으면 위험 단계래요.<br><br><br>


식후 혈당은 <br>
식사 시작 시점부터 두 시간 뒤,<br>
하지만 여덟 시간까지는 <br>
식후로 간주합니다.<br><br>

<img src='https://i.imgur.com/0LCI7Jm.png' width=68% title='📷 02 20250630_223252_craiyon'> 

<img src='https://i.imgur.com/Urnk2dt.jpeg' width=30% title='📷 01 혈당 02'><br><br>

140 이상은 경계, <br>
200 넘으면 위험 단계이고요~<br>
당화 혈색소는 <br>
7% 넘어가면 위험 신호랍니다.<br><br><br>


주간 미션의 체중 측정은 <br>
2점 밖에 안 되네요.<br>
체중 감량보다는 <br>
체지방률 감소에 신경 쓰세요~<br><br>

<img src='https://i.imgur.com/hpnwwu4.jpeg' width=32% title='📷 01 체중 03'> 

<img src='https://i.imgur.com/cw3EbbH.jpeg' width=32% title='📷 01 체중 05'> 

<img src='https://i.imgur.com/JWvqbCn.jpeg' width=32% title='📷 01 체중 06'><br><br>

남자는 18% 정상, <br>
25는 과체중, 이상은 비만이고요.<br>
여자는 25% 정상, <br>
30은 과체중, 넘으면 비만이래요.<br><br><br>


건강 챙기면서 포인트 따는 <br>
활기찬 노년이 됩니다.<br><br>

<img src='https://i.imgur.com/hGIzb3G.jpeg' width=32% title='📷 01 포인드 01'> 

<img src='https://i.imgur.com/plJuGRG.jpeg' width=32% title='📷 01 포인드 02'> 

<img src='https://i.imgur.com/8Qq0dqI.jpeg' width=32% title='📷 01 포인드 03'><br><br>

뽕도 따고 임도 보고, <br>
도랑 치고 가재 잡고..<br>
꿩~ 먹고 알 먹고, <br>
굿도 보고 떡도 먹어요~<br><br>

<img src='https://i.imgur.com/km6xE80.jpeg' width=23% title='📷 01 미션 01'> 

<img src='https://i.imgur.com/MLr6x2f.jpeg' width=23% title='📷 01 미션 02'> 

<img src='https://i.imgur.com/zwruPYb.jpeg' width=23% title='📷 01 미션 03'> 

<img src='https://i.imgur.com/qHKHgCM.jpeg' width=23% title='📷 01 미션 04'><br><br>

일거 양득의 건강 관리, <br>
쉽고 즐겁게 함께 해요.<br><br>

'어르신 인생'을.. <br>
건강하고 행복하게 살아갑시다~~<br><br>

<img src='https://i.imgur.com/6MPYp7j.jpeg' width=100% title='📷 01 어르신 04'><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/w2O7G/btsOwvLzvhs/ZIe7tvEvh6OwCShCEqEJVK/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>

<P class='mid'>
<font color='blue'><b>AI-IoT 어르신 건강송</b></font><br><br></P><P class='mid2'>
'어르신'이 되셨다면 건강 챙기세요<br>
AI 시대, 이제는 IoT로 해봐요<br><br>

<img src='https://i.imgur.com/HhMxJK8.jpeg' width=100% title='📷 01 어르신 03'><br><br>

쉽고 편하게, 정확하게 기록 관리!<br>
사물 인터넷, 블루투스가 <br>
알아서 해준답니다<br><br><br>


1일 미션, <br>
걷기 운동 포인트는 5점이래요<br>
매일매일 30 분, 5,000 보를 걸어 봐요<br><br>

집안에서 문밖까지, 가장 힘든 첫걸음,<br>
고비만 넘기면 5,000 보는 금방이래요<br><br><br>


1일 미션, <br>
혈압 측정 포인트도 5점이래요<br>
팔꿈치 위로 커프를 꽉~, <br>
바르게 감아줘요<br><br>

수축기 130은 경계, 140 넘으면 위험,<br>
이완기 80은 경계, 90 넘으면 위험해요<br><br><br>


맥박 수는 60에서 100 사이가 정상<br>
60 아래는 '서맥', <br>
100 넘어가면 '빈맥'이래요<br><br>

신생아는 빠르고, <br>
운동선수는 느리다네요<br>
나이 들면 조금 느려도 너무 걱정 말아요<br><br><br>


1일 미션, <br>
악력계와 건강 밴드는 2점이래요<br>
악력계를 꼭 쥐고, 손아귀 힘 키워봐요<br><br>

건강 밴드 11개 동작, 10번씩 3세트<br>
즐겁게 운동하면, <br>
집 나간 근육이 돌아와요<br><br><br>


주간 미션, <br>
혈당 측정 포인트는 5점이래요<br><br>

공복 혈당은 최소 8시간 금식이 필요해요<br>
물은 마셔도 돼요, <br>
다른 건 먹으면 안 돼요.<br>
100 넘으면 경계, 126 넘으면 위험이래요<br><br><br>


식후 혈당은 식사 후 두 시간에 재 봐요<br>
여덟 시간까지도 식후로 본다네요<br>
140 넘으면 경계, 200 넘으면 위험해요<br>
당화혈색소 7% 넘으면 위험 신호랍니다<br><br><br>


주간 미션, <br>
체중 측정 포인트는 2점이래요<br><br>

체중보다 체지방률에 신경 써야 해요<br>
남자는 25%, 여자는 30% 넘으면 비만,<br>
조금씩 줄이며, 건강을 지켜봐요<br><br><br>


건강 챙기며 포인트 따는 <br>
활기찬 노년이에요<br><br>

꿩 먹고 알 먹고, 굿도 보고 떡도 먹어요<br>
뽕도 따고 임도 보고, <br>
도랑 치고 가재 잡고..<br><br>

재밌고 건강한 '어르신 인생', <br>
우리 함께 걸어요~~<br><br>

AI로 건강 관리, <br>
쉽고 즐겁게 함께 해요<br>
재미있게 운동하는 오늘도 행복합니다~~<br><br>

<img src='https://i.imgur.com/QvCylUQ.png' width=100% title='📷 01 어르신 08_craiyon'><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/GsE8o/btsN2Nq2ZCN/T6iOjj0kdH14zpdnWPW7CK/img.jpg') repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>자랑스러운 양양의 노래-뮤지컬 리빌드 1</b></font>

(남자) 설악의 정기 받았나—<br>
(남자) 이 땅의 숨결이 들리는가<br><br>

(여자) 들려요…<br>
(여자) 오색의 물줄기처럼<br>
(여자) 조용히, <br>
그러나 깊게 흐르는 이야기<br><br>

(남자) 산 좋고 물 맑은 이곳,<br>
(남자) 그 이름—<br><br>

(여자) [숨 고르며] 양양…<br><br>

(같이) 양양이라오——!!<br><br><br>


(남자) 호국의 바람 스친 현산공원,<br>
(남자) 벚꽃은 왜 이리 눈부신가<br><br>

(여자) 그건 기억이에요<br>
(여자) 지켜낸 시간 위에 피어난 꽃…<br><br>

(남자) 제방뚝 따라 웃음 번지고<br><br>

(여자) 생생한 축제가 사람을 부르죠<br><br>

(같이) 이곳은, 살아 숨 쉬는 이야기!<br><br><br>


(남자) 곰밭에 번지는 복사꽃 향기,<br>
(남자) 바람이 길을 열면—<br><br>

(여자) 은어, 황어… 강을 거슬러<br>
(여자) 다시 돌아오는 생명의 발걸음<br><br>

(남자) 남대천 흐르고<br><br>

(여자) 마음도 흐르고<br><br>

(같이) 우리는 그 길 위에 서 있다<br><br><br>


(남자) 갈대와 억새가 손짓한다<br><br>

(여자) 유채꽃은 빛으로 물든다<br><br>

(남자) 숨 쉬는 공기조차 향기롭고<br><br>

(여자) 천년의 솔향이 가슴에 스민다<br><br>

(같이) 이 땅은…<br>
(같이) 살아 있는 축복!<br><br><br>


(남자) 낙산의 바다— 끝없는 백사장!<br><br>

(여자) 한계목, <br>
물과 바다가 만나는 곳!<br><br>

(남자) 연어는 돌아오고!<br><br>

(여자) 삶도 다시 흐른다!<br><br>

(같이) 여기는—<br>
(같이) 다시 시작되는 자리!<br><br><br>


(남자) 의상대 위에 서면<br><br>

(여자) 해가 떠오르고<br><br>

(남자) 그 빛은—<br><br>

(여자) 우리의 시간<br><br>

(같이) 역사와 자연이 만나는 순간!<br><br><br>


(남자) 하조대!<br><br>

(여자) 죽도정!<br><br>

(남자) 수산항!<br><br>

(여자) 남애항!<br><br>

(남자) 파도 위 젊음!<br><br>

(여자) 바람 속 자유!<br><br>

(같이) 양양은 지금도 숨 쉰다!<br><br><br>


(남자) 구룡령의 숲을 넘어!<br><br>

(여자) 오색의 빛을 지나!<br><br>

(남자) 대청봉에 올라—<br><br>

(여자) 세상을 내려다보면!<br><br>

(같이) 이 모든 것이—<br>
(같이) 양양이다——!!<br><br><br>


(남자) 파도와 바람을 품은 땅…<br><br>

(여자) 사람과 시간이 머무는 곳…<br><br>

(남자) 나는 이곳에서 살고<br><br>

(여자) 나는 이곳을 사랑한다<br><br>

(같이) 이 찬란한 순간을—<br>
(같이) 노래하네<br><br><br>


(같이) 고맙다— 양양!<br>
(같이) 우리 모두의 자랑이라오——!!<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/bK0fVQ/btsN2cLzkdC/WtsBlzEEhjoaYiYsUmxbk1/img.jpg') repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>자랑스러운 양양의 노래-뮤지컬 리빌드 2</b></font>

(남자) 설악의 정기 받았나—<br>
(남자) 이 땅의 숨결이 들리는가<br><br>

(여자) 들려요…<br>
(여자) 오색의 물줄기처럼<br>
(여자) 조용히, <br>
그러나 깊게 흐르는 이야기<br><br>

(남자) 산 좋고 물 맑은 이곳,<br>
(남자) 그 이름—<br><br>

(여자) [숨 고르며] 양양…<br><br>

(같이) 양양이라오——!!<br><br><br>


(남자) 호국의 바람 스친 현산공원,<br>
(남자) 벚꽃은 왜 이리 눈부신가<br><br>

(여자) 그건 기억이에요<br>
(여자) 지켜낸 시간 위에 피어난 꽃…<br><br>

(남자) 제방뚝 따라 웃음 번지고<br><br>

(여자) 생생한 축제가 사람을 부르죠<br><br>

(같이) 이곳은, 살아 숨 쉬는 이야기!<br><br><br>


(남자) 곰밭에 번지는 복사꽃 향기,<br>
(남자) 바람이 길을 열면—<br><br>

(여자) 은어, 황어… 강을 거슬러<br>
(여자) 다시 돌아오는 생명의 발걸음<br><br>

(남자) 남대천 흐르고<br><br>

(여자) 마음도 흐르고<br><br>

(같이) 우리는 그 길 위에 서 있다<br><br><br>


(남자) 갈대와 억새가 손짓한다<br><br>

(여자) 유채꽃은 빛으로 물든다<br><br>

(남자) 숨 쉬는 공기조차 향기롭고<br><br>

(여자) 천년의 솔향이 가슴에 스민다<br><br>

(같이) 이 땅은…<br>
(같이) 살아 있는 축복!<br><br><br>


(남자) 낙산의 바다— 끝없는 백사장!<br><br>

(여자) 민물과 바다가 만나는 곳, <br>
한계목!<br><br>

(남자) 연어는 돌아오고!<br><br>

(여자) 삶도 다시 흐른다!<br><br>

(같이) 여기는—<br>
(같이) 다시 시작되는 자리!<br><br><br>


(남자) 의상대 위에 서면<br><br>

(여자) 해가 떠오르고<br><br>

(남자) 그 빛은—<br><br>

(여자) 우리의 시간<br><br>

(같이) 역사와 자연이 만나는 순간!<br>
(같이) 양양은 지금도 숨 쉰다!<br><br><br>


(남자) 오산리 바닷가에는<br><br>

(여자) 선사의 빗살무늬 신비 흐르고<br><br>

(남자) 요트가 푸른 물결 가르는<br><br>

(여자) 수산항 마리나!<br><br>

(남자) 젊음의 파도가 춤추는<br><br>

(여자) 서핑의 성지, 서피 비치!<br><br>

(남자) 하륜과 조준의 하조대!<br><br>

(여자) 애국가의 소나무!<br><br>

(남자) 진한 죽향, 황홀한 비경!<br><br>

(여자) 죽도정 가고파~<br><br>

(남자) 쪽빛 바다의 남애항!<br><br>

(여자) 스카이 워크, 걷는다~<br><br>

(같이) 동해바다 힘찬 파도 소리에 <br>
(같이) 바람 속 자유를 만끽하며<br>
(같이) 우리들 기상을 키운다~~<br><br><br>


(남자) 맑은 계곡, 해담 마을!<br><br>

(여자) 태고 신비, 미천골 지나<br><br>

(남자) 구름도 쉬어 가는<br><br>

(여자) 구룡령의 숲을 넘는다~<br><br>

(남자) 시원한 오색 약수!<br><br>

(여자) 무지개 피어나는 용소 폭포!<br><br>

(남자) 위로를 건네던 한계령!<br><br>

(여자) 오색 찬란한 빛 받으며<br><br>

(남자) 대청봉에 올라—<br><br>

(여자) 세상을 내려다보면!<br><br>

(같이) 이 모든 것이—<br>
(같이) 양양이다——!!<br><br><br>


(남자) 파도와 바람을 품은 땅…<br><br>

(여자) 사람과 시간이 머무는 곳…<br><br>

(남자) 나는 이곳에서 살고<br><br>

(여자) 나는 이곳을 사랑한다<br><br>

(같이) 이 찬란한 순간을—<br>
(같이) 노래하네<br><br>

(같이) 고맙다— 양양!<br>
(같이) 우리 모두의 자랑이라오——!!<br><br>

아~ 양양이여! 영원히 빛날지어라!
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/cKkw9C/btsN2eQcg76/FbwjrgIt0TLOaIQEpghXu0/img.jpg') repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>자랑스러운 양양의 노래-뮤지컬 리빌드 3</b></font>

(남자) 설악의 정기—<br>
(남자) 이 땅을 깨우고<br><br>

(여자) 오색의 물줄기—<br>
(여자) 시간을 흐르게 하네<br><br>

(같이) 산 좋고 물 맑은 이곳—<br>
(같이) 양양이라오——!<br><br><br>


(남자) 현산공원, 벚꽃이 피고<br><br>

(여자) 그 위에 시간이 쌓여요<br><br>

(남자) 제방뚝 길 따라 웃음 흐르고<br><br>

(여자) 축제가 사람을 부르죠<br><br>

(같이) 살아 있는 이야기!<br><br><br>


(남자) 곰밭 복사꽃 향기—<br><br>

(여자) 바람 따라 번지고<br><br>

(남자) 남대천 물길—<br><br>

(여자) 생명 따라 흐르네<br><br>

(같이) 우리는 그 길 위에 있다<br><br><br>


(남자) 갈대와 억새—<br><br>

(여자) 유채꽃 물결—<br><br>

(남자) 송이 향기—<br><br>

(여자) 숲의 숨결—<br><br>

(같이) 이 땅은 축복이다!<br><br><br>


(남자) 낙산의 바다!<br><br>

(여자) 한계목 물결!<br><br>

(남자) 연어의 귀향!<br><br>

(여자) 다시 흐르는 삶!<br><br>

(같이) 여기서 다시 시작된다!<br><br><br>


(남자) 의상대의 아침!<br><br>

(여자) 떠오르는 빛!<br><br>

(남자) 그 빛은—<br><br>

(여자) 우리의 시간!<br><br>

(같이) 역사가 숨 쉬는 순간!<br><br><br>


(남자) 하조대!<br><br>

(여자) 죽도정!<br><br>

(남자) 수산항!<br><br>

(여자) 남애항!<br><br>

(같이) 끝없이 펼쳐진다!<br><br><br>


(남자) 구룡령을 넘어—<br><br>

(여자) 오색의 빛을 지나—<br><br>

(남자) 대청봉에 서면—<br><br>

(여자) 세상이 열린다!<br><br>

양양! 양양!<br>
빛나는 이 땅!<br><br>

(같이) 이 모든 것이—<br>
(같이) 양양이다——!!<br><br><br>


(남자) 나는 이곳에서 살고<br><br>

(여자) 나는 이곳을 사랑한다<br><br>

기억하라… 이 땅을…<br><br>

(같이) 우리는 노래한다<br><br><br>


(같이) 고맙다— 양양!<br><br>

양양! 양양! 영원하라!<br><br>

(같이) 우리 모두의 자랑이라오——!!
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/bbv5kj/btsN1Zsgopg/01LDOr5v4UFfX6mUdcSq60/img.jpg') repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>자랑스러운 양양의 노래-뮤지컬 리빌드 4</b></font>

(남자) 설악의 정기—<br>
(남자) 이 땅을 깨우고<br><br>

(여자) 오색의 물줄기—<br>
(여자) 시간을 흐르게 하네<br><br>

(같이) 산 좋고 물 맑은 이곳—<br>
(같이) 양양이라오——!<br><br><br>


(남자) 현산공원, 벚꽃이 피고<br><br>

(여자) 그 위에 시간이 쌓여요<br><br>

(남자) 제방뚝 길 따라 웃음 흐르고<br><br>

(여자) 축제가 사람을 부르죠<br><br>

(같이) 살아 있는 이야기!<br><br><br>


(남자) 곰밭 복사꽃 향기—<br><br>

(여자) 바람 따라 번지고<br><br>

(남자) 남대천 물길—<br><br>

(여자) 생명 따라 흐르네<br><br>

(같이) 우리는 그 길 위에 있다<br><br><br>


(남자) 갈대와 억새—<br><br>

(여자) 유채꽃 물결—<br><br>

(남자) 송이 향기—<br><br>

(여자) 숲의 숨결—<br><br>

(같이) 이 땅은 축복이다!<br><br><br>


(남자) 낙산의 바다!<br><br>

(여자) 한계목 물결!<br><br>

(남자) 연어의 귀향!<br><br>

(여자) 다시 흐르는 삶!<br><br>

(같이) 여기서 다시 시작된다!<br><br><br>


(남자) 의상대의 아침!<br><br>

(여자) 떠오르는 빛!<br><br>

(남자) 그 빛은—<br><br>

(여자) 우리의 시간!<br><br>

(같이) 역사가 숨 쉬는 순간!<br><br><br>


(남자) 하조대!<br><br>

(여자) 죽도정!<br><br>

(남자) 수산항!<br><br>

(여자) 남애항!<br><br>

(같이) 끝없이 펼쳐진다!<br><br><br>


(남자) 구룡령을 넘어—<br><br>

(여자) 오색의 빛을 지나—<br><br>

(남자) 대청봉에 서면—<br><br>

(여자) 세상이 열린다!<br><br>

양양! 양양!<br>
빛나는 이 땅!<br><br>

(같이) 이 모든 것이—<br>
(같이) 양양이다——!!<br><br><br>


(남자) 이 땅에서…<br><br>

(여자) 우리가 살아왔고…<br><br>

(같이) 우리가 사랑했던 곳…<br><br><br>


양양… 양양…<br><br>

고맙다— 양양!!<br><br>

영원하라!!
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/cNRdEW/btsN2lnXfqg/4hhAemVBwUY4WVniGa8NpK/img.png') repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>자랑스러운 양양의 노래-뮤지컬 리빌드 5</b></font>

(남자) 설악의 정기 받았나—<br>
(남자) 이 땅의 숨결이 들리는가<br><br>

(여자) 들려요…<br>
(여자) 오색의 물줄기처럼<br>
(여자) 조용히, <br>
그러나 깊게 흐르는 이야기<br><br>

(남자) 산 좋고 물 맑은 이곳,<br>
(남자) 그 이름—<br><br>

(여자) [숨 고르며] 양~ 양…<br><br>

(함께) 양양이라오——!!<br><br><br>


(남자) 호국의 바람 스친 현산공원,<br>
(남자) 벚꽃은 왜 이리 눈부신가<br><br>

(여자) 그건 기억이에요<br>
(여자) 지켜낸 시간 위에 피어난 꽃…<br><br>

(남자) 제방뚝 따라 웃음 번지고<br><br>

(여자) 생생한 축제가 사람을 부르죠<br><br>

(함께) 이곳은, 살아 숨 쉬는 이야기!<br><br><br>


(대사)(남자)<br>
나는 묻고 싶다…<br>
이 땅은 왜 이렇게 따뜻한가—<br>
수많은 시간이 스며들었기 때문인가,<br>
아니면…<br>
사람들이 이곳을 사랑했기 때문인가<br><br>

(대사)(여자)<br>
그건요…<br>
흘러온 시간 때문이 아니라<br>
머물러 준 마음 때문이에요<br>
떠나지 않고,<br>
잊지 않고,<br>
다시 돌아온 이야기들…<br>
그래서 이곳은 늘 살아 있어요<br><br><br>


(남자) 곰밭에 번지는 복사꽃 향기,<br>
(남자) 바람이 길을 열면—<br><br>

(여자) 은어, 황어… 강을 거슬러<br>
(여자) 다시 돌아오는 생명의 발걸음<br><br>

(남자) 남대천 흐르고<br><br>

(여자) 마음도 흐르고<br><br>

(함께) 우리는 그 길 위에 서 있다<br><br><br>


(남자) 갈대와 억새가 손짓한다<br><br>

(여자) 유채꽃은 빛으로 물든다<br><br>

(남자) 숨 쉬는 공기조차 향기롭고<br><br>

(여자) 천년의 솔향이 가슴에 스민다<br><br>

(함께) 이 땅은…<br>
(함께) 살아 있는 축복!<br><br><br>


(대사)(남자)<br>
강은 바다로 가고<br>
바다는 다시 구름이 되어 돌아온다<br>
그 길 위에 서 있는 우리도—<br>
어쩌면<br>
돌아가기 위해 살아가는 건 아닐까<br><br>

(대사)(여자)<br>
그래서 우리는<br>
이 순간을 붙잡고 싶은 거겠죠<br>
흐르고 있다는 걸 알기에<br>
더 사랑하고,<br>
더 깊이 느끼고 싶은 거예요<br><br><br>


(남자) 낙산의 바다— 끝없는 백사장!<br><br>

(여자) 민물과 바다가 만나는 곳, <br>
한계목!<br><br>

(남자) 연어는 돌아오고!<br><br>

(여자) 삶도 다시 흐른다!<br><br>

(함께) 여기는—<br>
(함께) 다시 시작되는 자리!<br><br><br>


(남자) 의상대 위에 서면<br><br>

(여자) 해가 떠오르고<br><br>

(남자) 그 빛은—<br><br>

(여자) 우리의 시간<br><br>

(함께) 역사와 자연이 만나는 순간!<br>
(함께) 양양은 지금도 숨 쉰다!<br><br><br>


(대사)(남자)<br>
나는 오늘<br>
처음으로 알았다<br>
눈앞에 있던 풍경이<br>
단순한 풍경이 아니었다는 걸<br><br>

(대사)(여자)<br>
그건 기억이에요…<br>
그리고 약속이에요<br>
지나온 시간과,<br>
앞으로 살아갈 날들 사이에서<br>
우리가 놓치지 말아야 할 것들<br><br><br>


(남자) 오산리 바닷가에는<br><br>

(여자) 선사의 빗살무늬 신비 흐르고,<br><br>

(남자) 요트가 푸른 물결 가르는<br><br>

(여자) 수산항 마리나!<br><br>

(남자) 젊음의 파도가 춤추는<br><br>

(여자) 서핑의 성지, 서피 비치!<br><br>

(남자) 하륜과 조준의 하조대!<br><br>

(여자) 애국가의 소나무!<br><br>

(남자) 진한 죽향, 황홀한 비경!<br><br>

(여자) 죽도정 가고파~<br><br>

(남자) 쪽빛 바다의 남애항!<br><br>

(여자) 스카이 워크, 걷는다~<br><br>

(함께) 동해바다 힘찬 파도 소리에 <br>
(함께) 바람 속 자유를 만끽하며<br>
(함께) 우리들 기상을 키운다~~<br><br><br>


(대사)(남자)<br>
이렇게 많은 이름들…<br>
이렇게 많은 이야기들…<br>
나는 다 알지 못한다<br><br>

(대사)(여자)<br>
다 알 필요는 없어요<br>
느끼면 돼요<br>
지금 이 바람,<br>
이 햇살,<br>
이 순간—<br>
그게 바로 양양이니까요<br><br><br>


(남자) 맑은 계곡, 해담 마을!<br><br>

(여자) 태고 신비, 미천골 지나<br><br>

(남자) 구름도 쉬어 가는<br><br>

(여자) 구룡령의 숲을 넘는다~<br><br>

(남자) 시원한 오색 약수!<br><br>

(여자) 무지개 피어나는 용소 폭포!<br><br>

(남자) 위로를 건네던 한계령!<br><br>

(여자) 오색 찬란한 빛 받으며<br><br>

(남자) 대청봉에 올라—<br><br>

(여자) 세상을 내려다보면!<br><br>

(함께) 이 모든 것이—<br>
(함께) 양양이다——!!<br><br><br>


(대사)(남자)<br>
이 길의 끝에서<br>
나는 무엇을 남길 수 있을까<br><br>

(대사)(여자)<br>
당신이 걸어온 시간,<br>
당신이 사랑한 순간들<br>
그게 전부 남아요<br><br>

(대사)(남자)<br>
그렇다면 나는—<br><br>

(대사)(여자)<br>
이미 충분히 잘 살아온 거예요<br><br><br>


(남자) 파도와 바람을 품은 땅…<br><br>

(여자) 사람과 시간이 머무는 곳…<br><br>

(남자) 나는 이곳에서 살고<br><br>

(여자) 나는 이곳을 사랑한다<br><br>

(함께) 이 찬란한 순간을—<br>
(함께) 노래하네<br><br><br>


(함께) 고맙다— 양양!<br>
(함께) 우리 모두의 자랑이라오——!!<br><br><br>


아~ 양양이여! <br>
영원히 빛날지어라!
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/c6ISpT/btsOybETCGr/YEm4hlcx76OqzDttCuM2jk/img.png') repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>자랑스러운 양양의 노래</b></font>

설악의 정기 받고 <br>
오색의 물줄기 이어 받은..<br><br>

<img src='https://blog.kakaocdn.net/dn/HoawP/btsOCaGcwV1/ZC0i44lMIC0ZS6kdoRFdo0/img.jpg' width=100%><br><br>

산 좋고 물 맑은 축복의 땅, <br>
양양 이라오~~<br><br>

<img src='https://blog.kakaocdn.net/dn/bPAZQ1/btsOCR6VM7s/KHjuf3FuZqXNkaTcb1PBs1/img.jpg' width=100%><br><br><br>


호국 정신 깃든 현산공원 <br>
벚꽃이 만발하고,<br><br>

<img src='https://blog.kakaocdn.net/dn/QVRYO/btsNdvlw3Ai/S8rCOOX6GsxlgIZFLz4gyK/img.jpg' width=100%><br><br>

제방뚝 벚꽃길 활짝 웃으며 <br>
생생 축제를 알리네<br><br>

<img src='https://blog.kakaocdn.net/dn/b1BpNr/btsGEqpgRTa/BeQ6cuOFCrOOwQvv7qMIUk/img.jpg' width=100%><br><br><br>


곰밭에 분홍빛 복사꽃 향기 <br>
바람에 실려오면..<br><br>

<img src='https://blog.kakaocdn.net/dn/dgSuxe/btsOAZllzpi/xIkmpvrKzDybrWmf39fRD0/img.jpg' width=100%><br><br>

은어 황어 떼 춤추며 <br>
남대천 여정을 시작한다<br><br>

<img src='https://blog.kakaocdn.net/dn/cVrZJ0/btsOCN4AbFQ/Y4HSJabsK2eeiM5jfKKmK1/img.jpg' width=100%><br><br><br>


넘실대는 갈대와 억새풀이 <br>
손짓하며 부르고,<br><br>

<img src='https://blog.kakaocdn.net/dn/y4PbA/btsOA4fOc2e/ctqcRTkJzdMPnCU5sbR7w0/img.jpg' width=100%><br><br>

황금 물결 가평리 유채꽃밭 <br>
눈부신 유혹을 펼치네..<br><br>

<img src='https://blog.kakaocdn.net/dn/nvxel/btsOAJQpN2Y/VNxuKCdrlLKut4miaqKdNk/img.jpg' width=100%><br><br><br>


맑은 공기 가슴 가득, <br>
깨끗한 이슬 머금은..<br><br>

<img src='https://blog.kakaocdn.net/dn/cdouBJ/btsOADpo5mP/KoJOQCR4X7yGUkKh2Kgk7K/img.jpg' width=100%><br><br>

천년의 솔향 그윽한 양양 송이, <br>
단연코 으뜸이라오<br><br>

<img src='https://blog.kakaocdn.net/dn/s5wcQ/btsOB1bmNG4/1bKQS6CIykYtAiz2hmC9v1/img.jpg' width=100%><br><br><br>


낙산의 명사십리, <br>
끝없이 펼쳐지는 고운 백사장<br><br>

<img src='https://blog.kakaocdn.net/dn/PMtLm/btsOA5yS0sD/iKBRwZhnTdKjQ7Qx0EzeP0/img.jpg' width=100%><br><br>

남대천 물결이 <br>
푸른 동해와 만나는 한계목에..<br><br>

<img src='https://blog.kakaocdn.net/dn/oKndE/btsOAFncaX5/UItKkvIWUuno53EOHtMiY1/img.jpg' width=100%><br><br><br>


북태평양 저 멀리 떠났던 <br>
연어의 발자취,   <br><br>

<img src='https://blog.kakaocdn.net/dn/ctLzRD/btsOBnstbh2/g2WkntqnODkkpqIaKc8Yj1/img.jpg' width=100%><br><br>

모천으로 귀향하며 <br>
힘차게 거슬러 오른다<br><br>

<img src='https://blog.kakaocdn.net/dn/bPXmqh/btsOA4NwYJ9/XkPoEgEVnuJbNVvaO7gzqk/img.jpg' width=100%><br><br><br>


관동별곡 의상대, <br>
장엄한 일출에 옷깃을 여미니..<br><br>

<img src='https://blog.kakaocdn.net/dn/APc6t/btsOCENyY9H/xeWqnSsajA1bksmGDeVnK0/img.jpg' width=100%><br><br>

해수관음상 인자한 미소는 <br>
홍련암을 가리키네<br><br>

<img src='https://blog.kakaocdn.net/dn/mtmUU/btsOA1i9KRo/51iSqfKoQYyvvC1KGddPT0/img.jpg' width=100%><br><br><br>


빗살무늬 신비를 간직한 <br>
오산리 선사 유적 박물관<br><br>

<img src='https://blog.kakaocdn.net/dn/kFusB/btsOAZr85xv/7Ek2Qk6ippxfcyZ0TUOeO1/img.jpg' width=100%><br><br>

푸른 물결 가르며 <br>
요트 체험하는 수산항 마리나<br><br>

<img src='https://blog.kakaocdn.net/dn/eofX9m/btsOCRMDfQa/DyvEk2WcM7DTE1dkmUuS9K/img.jpg' width=100%><br><br><br>


하륜과 조준의 지혜 숨쉬는 하조대,, <br>
애국가의 소나무<br><br>

<img src='https://blog.kakaocdn.net/dn/c0E2vW/btsOBRmylgI/CXWTpvLktx0rLKDVge1jJ1/img.jpg' width=100%><br><br>

진한 죽향 감돌고 <br>
황홀한 비경을 품은 죽도정 가고파~<br><br>

<img src='https://blog.kakaocdn.net/dn/Co6ov/btsOChLO6UI/BP9miVUdZIoXzsRhNnWjXK/img.jpg' width=100%><br><br><br>


파도 부서지는 젊음의 열기, <br>
서핑의 성지, 서피 비치<br><br>

<img src='https://blog.kakaocdn.net/dn/ldzYI/btsOCw202CF/7ap16edMPlBKsXzPuottp0/img.jpg' width=100%><br><br>

쪽빛 바다 펼쳐진 남애항 <br>
스카이 워크를 걷는다<br><br>

<img src='https://blog.kakaocdn.net/dn/rRtb3/btsOCfUJGmN/NsXlWenx7e6R2LsCcwf0Hk/img.jpg' width=100%><br><br><br>


맑은 계곡 해담 마을, <br>
태고 신비의 미천골 휴양림<br><br>

<img src='https://blog.kakaocdn.net/dn/BCZUs/btsOCm0GmqF/IR2MbNqasIz4gCOl1VcoB0/img.jpg' width=100%><br><br>

푸른 숲이 우거지고 <br>
구름도 쉬어 가는 구룡령<br><br>

<img src='https://blog.kakaocdn.net/dn/ChpIH/btsOCijDW4V/6Vbnhc327juC0BhtkaVDWk/img.jpg' width=100%><br><br><br>


오색 약수 시원하게 목 축이고 <br>
성국사 지나면..<br><br>

<img src='https://blog.kakaocdn.net/dn/cxgpqL/btsOBZdAsOZ/n8dU6v0OyomYQHHezaERY1/img.jpg' width=100%><br><br>

흩날리는 물보라가 <br>
무지개로 피어나는 용소 폭포<br><br>

<img src='https://blog.kakaocdn.net/dn/bBOfvR/btsOCMxQjEp/Mw0r2D2PawwsCSYVNk8aOk/img.png' width=100%><br><br><br>


자연이 빚은 예술, <br>
말없이 위로를 건네던 한계령<br><br>

<img src='https://blog.kakaocdn.net/dn/ce5HzP/btsOBhFOkCF/tQ8t4Oq2ksJcG2ggJgEEKk/img.jpg' width=100%><br><br>

오색 찬란한 빛의 향연, <br>
이제는 오색령이라 부르네<br><br>

<img src='https://blog.kakaocdn.net/dn/eGdE1I/btsOCBDli6P/n6lFpKls8pLKzxwJfE7Mck/img.jpg' width=100%><br><br><br>


백두대간 아름다움, <br>
태고의 웅비, 설악산 대청봉<br><br>

<img src='https://blog.kakaocdn.net/dn/bKXRo4/btsOBYsaWVk/20kBdvfuQvwOgmAnWjNN11/img.jpg' width=100%><br><br>

동해 바다마저 품은.. <br>
양양 오색리 산 일번지 이라오!<br><br>

<img src='https://blog.kakaocdn.net/dn/xUysx/btsOBixXNQX/cyDDWrYK1dHAnEQyGYYd9K/img.jpg' width=100%><br><br><br>


파도와 바람을 품은 양양의 품 안에서<br>
역사와 자연과 사람이 하나 되어<br>
이 찬란한 순간을 노래하네<br><br>

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbxpdur%2FbtsOAKIBuFA%2FYhNO1pgSXM7VHzaXvmUvN1%2Fimg.jpg' width=100%><br><br>

고맙다 양양!, <br>
우리 모두의 자랑이라오~~~<br><br>

<img src='https://blog.kakaocdn.net/dn/bDqcg1/btsOBmG7qbN/XSPV3RPr8JPlXiITNhXYk1/img.jpg' width=100%><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/snSlz/btsOwKIcRVb/ACeSrvU112PYTZJP8lbsQ1/img.jpg') repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>반공일 재낀 설악산 이야기</b></font>

고교 시절의 이야기, <br>
여덟 번째 추억을 열어요<br>
1975년 유월의 바람, <br>
우린 설악산으로 떠났지<br><br>

금요일 현충일에 이어진 반공일<br>
딱 네 시간만 재끼면.. <br>
2박 3일의 천국!<br><br>

<img src='https://blog.kakaocdn.net/dn/LZL5p/btsFlOr26UD/OnFvRMMKwcYAkRZkHelWx0/img.jpg' width=100% title='🎨 강상의 양양 친구들'><br><br>

1반 세용, 4반 경순, <br>
그리고 6반의 나<br>
반은 달랐어도 마음은 하나로..<br><br>

이것이 인생이다! <br>
외치며 떠났던 설악산<br>
하지만… <br>
막차 놓쳐 3박 4일의 연장전<br><br>

네 시간 반공일 재낀 대까로 치러진<br>
무심한 감초 선생님의 학부형 호출!<br><br>

초등 6년 개근에 중학교 3년 개근생<br>
처음 지른 무단결석에.. <br>
정근상도 날아갔네<br><br><br>


교복 왼쪽 주머니 안, 그 수첩 속에는<br>
정란여상 고적답사반 세 명의 주소!<br><br>

감초샘은 망설임 없이 <br>
그 페이지 찢어버렸네<br>
'내 인생의 변곡점'이 <br>
날아가는 순간이었소<br><br>

임영 고개, 영동여상의 물결 헤치며<br>
유쾌하게 교실로 들어섰지만<br>
월담 단속의 제왕, <br>
감초 선생님의 추궁..<br>
과수원 핑계는 통하지 않았었지<br><br><br>


점심 밥상 대신 마주한 <br>
학부형 호출 통지서!<br>
두 시간 반, 버스 속 <br>
아버지의 심정 어땠을까?<br><br>

자식 걱정 내려놓으며 <br>
그제야 느낀 아버지의 배고픔,<br>
그 모습 바라보며 <br>
내 콧등은 시큰해졌네<br><br>

그때 다짐했었지, 이제 다시는..<br>
오직 학업에만 전념하겠노라고..<br><br>

아버지 배웅하고 <br>
하숙집으로 돌아오는 길에..<br>
'작심삼초'의 그 맹세 <br>
다 날아가 버렸네~~~<br><br><br>


철 없이 질러 본 그때의 일탈 하나<br>
하염없이 날아가 버린 수첩 속의 인연<br>
그 끝에는 아버지의 허기졌던 뒷모습..<br><br>

후회와 다짐들, <br>
이제는 철부지 추억으로 남았네<br><br><br>


상업 부기 선생님은 말씀하셨지<br>
차변에 설악산, 대변엔 대청봉이냐?<br><br>

교복 속 추억은 나를 웃기고 울리며<br>
그 시절의 이야기가 <br>
노래되어 퍼집니다<br><br>

<img src='https://blog.kakaocdn.net/dn/k8I4C/btsFkJExzPQ/xNtjYfKJzcgwPosWE1QmWk/img.jpg' width=100% title='🎨 교복 왼쪽 주머니 속의 수첩'><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/blqp6E/btsOwQaTLPa/WKMt3R466ybf7LNWQKBbs1/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>양양 쏠비치, 내 추억의 뜰</b></font>

<font color='#0F258A'>
양양의 쏠비치, 그 이름만으로<br>
가슴 한켠이 부풀어 오르고<br>
햇살의 물결, 파란 그 숨결이<br>
추억 속으로 나를 다시 부릅니다<br><br>

<img src='https://blog.kakaocdn.net/dn/cogNm1/btrJCquwVJ4/kK9wndW3KfKrNW9ytRnto0/img.jpg?original' width=100%><br><br>

붉은 기와 위로 햇살이 내려앉고<br>
하얀 벽에 파란 하늘 숨을 고르면<br>
바닷바람 품은 지중해풍의 궁전은<br>
한 폭의 그림으로 펼쳐집니다<br><br>

<img src='https://blog.kakaocdn.net/dn/dasHGx/btsOAEaLyMq/kMUanC6oO9SJujXMTqW7R1/img.jpg' width=100%><br><br>

하늘은 바다를 내려다보며<br>
구름 한 조각 슬며시 띄우고<br>
바다는 가만히 바람을 밀어<br>
멋진 뭉게구름 피워 올립니다<br><br>

<img src='https://blog.kakaocdn.net/dn/c9PGTL/btrJ7Reu77L/FLNC5EbOU0upIh0jdjrVS0/img.jpg?original' width=100%><br><br>

하늘과 바다가 만났던 자리<br>
아무 말 없이 같은 하늘 바라본다면<br>
그것만으로 詩가 되는 쏠비치 그곳<br><br>

<img src='https://blog.kakaocdn.net/dn/bmx7on/btrJFPGSw8a/072DSzMQ1rkcE8HGV2kUj0/img.jpg?original' width=100%><br><br>
웃음 하나, <br>
구름 두 개 카메라에 담아요<br><br>

<img src='https://blog.kakaocdn.net/dn/mJoOa/btrJ7sst0AF/mMJ8fHuvwzzKHR1MSjGUT0/img.jpg?original' width=100%><br><br><br>


바위 하나, 아무 말도 없이<br>
시간을 품은 채 누워 있는 곳<br>
누구 하나 떠밀지 않은 풍경<br>
가볍고 자유로운 느낌을 만끽합니다<br><br>

<img src='https://blog.kakaocdn.net/dn/dBfPHv/btrJ8njC9Pf/XZkGBLWc6dlsDkEz4AXVR0/img.jpg?original' width=100%><br><br>

코발트색 물 위로 <br>
붉은 배 한 척 떠있는<br>
광장 정원의 커브 진 <br>
오솔길 따라 걸으면..<br><br>

하루를 접어 하늘에 띄워도 <br>
아깝지 않아요.<br>
고단한 마음 쉬어가는 <br>
예쁜 오늘이 됩니다~~<br><br>

<img src='https://blog.kakaocdn.net/dn/Ijgj1/btsOA9VBZrf/vkwEU8lDUUxvMcFjAivJTk/img.jpg' width=100%><br><br>

양양의 쏠비치, 그 이름만으로<br>
낯설지 않은 포근한 설렘으로<br>
마음이 먼저 달려가는 안식처<br>
내 추억의 뜰, 쉼터가 되었습니다<br><br>

<img src='https://blog.kakaocdn.net/dn/bKvyYH/btsOB6X55SJ/fmCWWaTN9pibcntqZUkdvk/img.png' width=100%><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/cihCcv/btsOxqCPdfh/gtmA9skuqKXikIeFixCqX0/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>{옥이의} 쏠비치 리사이틀</b></font>

<font color='white'>
하늘과 바다가 만난 수평선 위로<br>
나의 무대가 펼쳐집니다<br>
바람이 반주해 주는 아리아<br>
파도는 리듬에 맞춰 박수를 쳐요<br><br>

햇살 한 줄기 어깨를 스치며<br>
붉은 배가 소품이 되는 이 순간<br>
나는 오늘, 하늘 배경의 무대를 펼치며<br>
추억 하나를 건져 올립니다~<br><br>

여기는 쏠비치, 바다 위 리사이틀<br>
우정도 웃음도 화음 되어 울려 퍼져요<br><br>

손끝 하나로 전하는 나의 멜로디<br>
지금 이 순간, <br>
멋진 추억의 무대가 됩니다<br><br>

벽화 속 사연은 노래처럼 흐르고<br>
시간을 건너온 소녀 같은 미소 지으며<br>
돌담 위를 걷는 이 하루가<br>
노래가 되어 마음에 새겨집니다  <br><br>

한 손엔 하늘, 한 손엔 바다<br>
나는 오늘, 가장 고운 화음으로<br>
푸른 날개 입은 저 구름 사이로<br>
내 마음도 가볍게 날아갑니다.  <br><br>

여기는 쏠비치, 바다 위 리사이틀<br>
한 송이 꽃인 척 나를 피워냅니다<br>
파란 하늘 아래 펼쳐진 나의 이야기<br>
당신이 미소 하나 머금으면..  <br><br>

나는 또 한 곡, 다시 부를 수 있어요<br><br>

<img src='https://blog.kakaocdn.net/dn/cw6Mbz/btsOAyn6MED/rQX8gmERswxLD4hYLJWFs0/img.jpg' width=100%><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/dOjIie/btsOwPXmUQO/bQM7fynAXawCYdEKwtRKTk/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>모노골 단합가</b></font>

천년의 향기, <br>
솔향이 은은히 퍼지는 날에..<br><br>

소나무의 피톤치드, <br>
마음껏 들이마시며<br><br>

벚꽃 향기 흩날리는 봄의 향연 따라<br>
오늘도 우리는 <br>
모노골 오솔길을 정답게 걷는다!<br><br><br>


숨 가쁘게 오르는 오르막길,<br>
다리 휘청대는 고갯길에도 <br>
웃음꽃 피네<br><br>

고갯마루 넘어서면 반기는 그곳,<br>
꽃과 새들이 들려주는 모노골의 노래!<br><br>

기운 내어 앞으로, 함께 가자!<br>
피톤치드 내음 따라 힘차게 걷자!<br><br>

한 걸음 한 걸음 쌓이는 정<br>
우린 오늘도 <br>
같이 걷는 변치 않을 친구로다!<br><br><br>


샘터의 물 한 모금에 땀을 식히며<br>
모노골 벤치에선 정담의 꽃 피어난다<br><br>

친구와 같이 걷는 이 길이 좋구나<br>
모노골 길에는 우리의 우정이 흐른다!<br><br>

기운 내어 앞으로, 함께 가자!<br>
햇살 속에 웃으며 힘차게 걷자!<br><br>

바람을 벗 삼고 꽃을 노래하며<br>
우리의 단합은 모노골에서 자라난다<br><br><br>


비바람 불고 눈보라 친다 해도<br>
이 길을 함께 걷는다면 두렵지 않으리<br><br>

산도 들도, 나무들도 기억하리라<br>
모노골의 친구들이 지나간 이 길을!<br><br>

함께라서 더욱 정다운 우리의 이름들..<br>
덕찬아! 상경아! 상복아! 정한아!<br>
진섭아! 헌길아! 모두 모두 불러본다!<br><br>

이 세상 소풍이 끝나는 그날까지 <br>
같이 갈 친구들..<br><br>

오늘도 우리는 <br>
모노골 오솔길을 정답게 걷는다~!<br><br>

<img src='https://blog.kakaocdn.net/dn/zrCt3/btsNnyI5Djh/HADI6vFM7TCpIuYK2rR5D0/img.jpg' width=100%><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/cUp0rL/btsN2ckyc1D/BPLfEWUUqnn1dvGE9u6hLK/img.png') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>모노골 단합가 (떼창)</b></font>

천년의 향기, <br>
솔향이 은은히 퍼지는 날에..<br><br>

소나무의 피톤치드, <br>
마음껏 들이마시며<br><br>

벚꽃 향기 흩날리는 봄의 향연 따라<br>
오늘도 우리는 <br>
모노골 오솔길을 정답게 걷는다!<br><br>

<img src='https://blog.kakaocdn.net/dn/DpxBZ/btsM16efw8R/jNvja9aCModSpCS9zcT0vK/img.jpg' width=100%><br><br>

숨 가쁘게 오르는 오르막길,<br>
다리 휘청대는 고갯길에도 <br>
웃음꽃 피네<br><br>

고갯마루 넘어서면 반기는 그곳,<br>
꽃과 새들이 들려주는 모노골의 노래!<br><br><br>


[Chorus – Group Chant (떼창)]<br>
기운 내어 앞으로, 함께 가자!<br>
피톤치드 내음 따라 힘차게 걷자!<br><br>

<img src='https://blog.kakaocdn.net/dn/YFENq/btsM0thuMd0/rZPsdhBJIOKAU5kbv3gCn1/img.jpg' width=100%><br><br>

한 걸음 한 걸음 쌓이는 정<br>
우린 오늘도 <br>
같이 걷는 변치 않을 친구로다!<br><br><br>


샘터의 물 한 모금에 땀을 식히며<br>
모노골 벤치에선 정담의 꽃 피어난다<br><br>

친구와 같이 걷는 이 길이 좋구나<br>
모노골 길에는 우리의 우정이 흐른다!<br><br><br>


[Chorus – Group Chant (떼창)]<br>
기운 내어 앞으로, 함께 가자!<br>
햇살 속에 웃으며 힘차게 걷자!<br><br>

바람을 벗 삼고 꽃을 노래하며<br>
우리의 단합은 모노골에서 자라난다<br><br><br>


비바람 불고 눈보라 친다 해도<br>
이 길을 함께 걷는다면 두렵지 않으리<br><br>

산도 들도, 나무들도 기억하리라<br>
모노골의 친구들이 지나간 이 길을!<br><br>

함께라서 더욱 정다운 우리의 이름들..<br>
덕찬아! 상경아! 상복아! 정한아!<br>
진섭아! 헌길아! 모두 모두 불러본다!<br><br>

이 세상 소풍이 끝나는 그날까지 <br>
같이 갈 친구들..<br><br>

오늘도 우리는 <br>
모노골 오솔길을 정답게 걷는다~!<br><br><br>


[Chorus – Group Chant (떼창)]<br>
모노골! 친구들이여! 영원하리라!<br><br>

<img src='https://blog.kakaocdn.net/dn/zZ7KY/btsNnBFP1E8/haQLjUsvkNOhMPzsWW1qw1/img.jpg' width=100%><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/Xj6h3/btsOxjDAXcz/cen6SOE7KJFtvqXrwhQkEk/img.png') repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>한계목과 유채꽃밭의 묵은지 벗</b></font>

먼 길을 넘어서 찾아온 벗<br>
한계목 물결 사이에 머물고,<br>
바람이 붓 칠한 푸른 하늘 아래에<br>
추억은 강물처럼 흐르고 있네요.<br><br>

먼 곳에서 벗이 찾아오니<br>
이 어찌 기쁘지 아니한가.<br>
낙산의 명사십리, 백사장 따라<br>
우리의 우정은 노을처럼 번집니다.<br><br>

남대천과 바닷물이 만나는 자리에<br>
시간이 멈춘 듯이 우리를 감싸네요.<br>
붉게 타는 저녁 노을 아래에<br>
묵은지 우정은 더욱더 깊어집니다.<br><br>

먼 곳에서 벗이 찾아오니<br>
이 어찌 기쁘지 아니한가.<br>
가평리 유채꽃밭, 사잇길 따라<br>
우리의 우정은 들녘으로 퍼집니다.<br><br>

한계목 끝에서 바라본 세상,<br>
그곳엔 바람과 우리의 이야기.<br>
다음 만남을 기다리며<br>
이 순간을 가슴속에 새겨둡니다.<br><br>

<img src='https://blog.kakaocdn.net/dn/GOnnN/btsNAQ3C6VB/T2MqF0wWtEb7kjzrFKYpH1/img.jpg' width=100%><br>
</td></tr></table>",
"<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/lCzEx/btsOwIRcRNb/ANEpXoUomzTmmHRyAeTJpK/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid2'><font style="display:none"><b>남대천의 귀향, 한계목의 노래</b></font>

좁은 한계목, 잔잔한 길목 위에<br>
웅장한 남대천 물결이 흐르네<br><br>

바람에 실려 온 연어들, <br>
모천의 문을 향해<br>
거슬러 올라가는 기적, <br>
시작되는 생명의 노래<br><br>

그 물길 속에 우정이 피어나고,<br>
시간을 거슬러 퍼져가는 이야기들..<br><br>

남대천의 귀향은 우리들의 노래,<br>
좁은 한계목에서 <br>
새로운 만남을 기다려요<br><br>

은어와 황어 떼, 한 줄기 꿈처럼<br>
맑은 물길 따라 <br>
여정의 첫 발자국을 남기고..<br><br>

자연이 선사하는 찬란한 약속 안에<br>
서서히 피어나는 미래, <br>
희망의 소리를 담아요<br><br>

비록 그 길목은 좁을지라도<br>
물결에 담긴 생명의 속삭임은 <br>
거칠고 고귀해.<br><br>

우리 마음 깊은 곳에 <br>
잔잔한 울림을 남기며<br>
또 다른 우정, <br>
새로운 인연의 빛을 밝혀주네요.<br><br>

남대천의 귀향, 한계목의 노래!<br><br>

그 물결 위에 <br>
희망을 머금은 잔잔한 선율<br>
모든 시간이 멈춘 듯한 그 순간에<br>
우리는 함께 미래를 향해 노래하리라<br><br>

한계목의 조용한 길목에서 시작된<br>
웅장하게 흐르는 남대천의 이야기 속에<br>
우리의 새로운 만남의 약속이 피어나고<br><br>

우리들 우정의 노래는 <br>
영원히 이어지리라~~<br><br>

<img src='https://blog.kakaocdn.net/dn/bPgjOi/btsNnLalRQo/KGhW4Wq0jPyzdrRiRzo7Ik/img.jpg' width=100%><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/uWnZo/btsOxg1doCo/QyzvW4T03Y9tCyotueEjlK/img.png') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid2'><font style="display:none"><b>한계목이 부르는 연어의 귀향</b></font>

좁은 한계목, <br>
남대천과 바다가 만나는 곳<br><br>

스마트폰 렌즈로도 잡기 어려운<br>
미묘한 경계 속에<br>
연어들의 귀향, <br>
생명의 약속으로 흐릅니다.<br><br>

<img src='https://blog.kakaocdn.net/dn/9hjE6/btsNA23MVT2/mWakq1AgYMf6nJJc73BX31/img.jpg' width=100%><br><br>

연어의 발자취, 태평양 그 너머<br>
돌아오는 귀향길 위에<br><br>

은어와 황어 떼, 맑은 물길을 헤치며<br>
자연의 노래가 되어 바람에 흩날리네요<br><br>

남대천의 하류에 서면<br>
영동의 제일 맑은 물결 속에<br>
모든 생명이 다시 시작되는<br>
그 신비로운 ‘남대천 여정’이 열려요.<br><br>

낙산의 명사십리 고운 백사장을 따라<br>
모천의 관문 한계목에서<br>
연어의 귀향은 또 다른 시작이 되고,<br><br>

바람 따라, 물결 따라, <br>
영원히 이어집니다.<br><br>

짧은 만남의 폭에도<br>
숨겨진 우주는 펼쳐지고,<br>
바다와 남대천이 하나 되어<br>
귀향의 꿈을 노래합니다.<br><br>

좁은 한계목에 머물렀던 시간도<br>
작은 물결 속에 담긴 거대한 이야기,<br>
다시 만날 그날을 위해<br><br>

생명의 노래를 바람에 띄워 보냅니다.<br><br>

<img src='https://blog.kakaocdn.net/dn/C8Pj9/btsNjHT9ns9/vekArTILevYmbGaICDMjT1/img.jpg' width=100%><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/w2O7G/btsOwvLzvhs/ZIe7tvEvh6OwCShCEqEJVK/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>봄날에 찾아온 묵은지 친구</b></font>

봄바람 불어오는 제방뚝 길 따라<br>
벚꽃이 흩날리며 우리를 반기네요<br>
남대천 물결에 마음을 실으면<br>
학창 시절의 추억이 되살아납니다<br><br>

<img src='https://blog.kakaocdn.net/dn/kGpZm/btsNHr9b20s/oFUFjxhuKmIm15bKV4o1Vk/img.jpg' width=100%><br><br>

네가 오기를 기다리는 제방뚝에서<br>
나는 카메라에 봄꽃들을 담아요<br>
조금 늦어져도 괜찮아<br>
기다림마저 내게는 선물이 되지요.<br><br>

<img src='https://blog.kakaocdn.net/dn/nsdSk/btsNGfhR4aB/ujS2yDBtTZ17SvN8J3ozz1/img.jpg' width=100%><br><br>

유채꽃 물든 그 언덕 너머로<br>
쏠비치 바람은 우리를 감싸고<br>
사진 한 장의 웃음 속에서<br>
이 순간은 추억으로 물들어갑니다<br><br>

<img src='https://blog.kakaocdn.net/dn/oGTa4/btsNGIxhyFM/69qv9A1vGT4ZlHay6DleTk/img.jpg' width=100%><br><br>

묵은지처럼 깊어가는 우정,<br>
세월도 우리를 갈라놓지는 못해요<br>
먼 길을 넘어 찾아온 너,<br>
오늘은 내 마음의 봄날이 되어요<br><br>

<img src='https://blog.kakaocdn.net/dn/ceWlzr/btsNFxqePGu/K3PvHT760L3U8ElnbpGkvK/img.jpg' width=100%><br><br>

48년의 세월을 담은 묵은지 친구!<br><br>

노랗게 물든 일편단심 민들레처럼<br>
하얀 솜사탕 민들레 홀씨처럼<br>
오래된 향기 되어 <br>
하늘 높이 퍼져가네요~~<br><br>

<img src='https://blog.kakaocdn.net/dn/q7PUZ/btsOLRNkKzv/oQKkEvReZSV0etXApEVHsk/img.jpg' width=100%><br><br>

멀리서 벗이 찾아오니<br>
이 어찌 기쁘지 아니한가<br>
묵은지 같은 너와 나의 우정은<br>
봄날에 다시 피어 더욱더 익어갑니다<br><br>

<img src='https://blog.kakaocdn.net/dn/lbaIA/btsNFv6xsmo/DWrP40t7ku3iRAL0huHBX0/img.jpg' width=100%><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/bIOw4O/btsOxvcI0wP/uIiMEvvERdrFAY3sWSaKK0/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>묵은지 우정과 동심의 벤치</b></font>

유채꽃 사잇길 지나 <br>
작은 계단을 오르면<br>
소나무 아래는 우리의 자리.<br><br>

<img src='https://blog.kakaocdn.net/dn/kCNfJ/btsNubzqKyl/lDkivVsBrJug7hQfX23puK/img.jpg' width=100%><br><br>

반겨주는 빨강과 노랑의 벤치<br>
푸른 바다는 기억을 품고 있어요.<br><br>

<img src='https://blog.kakaocdn.net/dn/cQJzrX/btsNChyUeJz/Nkdq3C7mOGoikHmg40JJ4k/img.jpg' width=100%><br><br>

노란 꽃들 사이로 바람이 불어<br>
동심의 속삭임이 퍼져 가네요.<br>
푸른 하늘 아래 그때의 웃음<br>
우리의 시간은 다시 피어납니다.<br><br>

<img src='https://blog.kakaocdn.net/dn/rczHi/btsNHuLBH3U/jvAP7pzwEZ9SCQCzM7rgo0/img.jpg' width=100%><br><br>

묵은지 우정은 바람을 타고<br>
봄날의 향기 속에 머물러요.<br>
어릴 적 뛰어놀던 그 골목길<br>
여기서 다시 만나는 우리의 이야기.<br><br>

<img src='https://blog.kakaocdn.net/dn/uyEFA/btsNukEnfFW/4JoIXyNKieUTRL98f2BwVK/img.jpg' width=100%><br><br>

붓을 들고 하늘이 그려낸 풍경<br>
기억의 그림들이 번져 가네요.<br>
구름 사이로 번지는 추억<br>
그속에 내맘도 찾아 들어갑니다.<br><br>

<img src='https://blog.kakaocdn.net/dn/1E7To/btsNGEu1SWa/YhXCZYPGBEv4JCjL9DGAV0/img.jpg' width=100%><br><br>

푸른 바람 따라 흩어진 순간들<br>
하늘빛 속에 머무는 이야기.<br>
두 팔 벌려 하늘을 품으면<br>
푸른 빛깔이 손끝에 스며드네요.<br><br>

<img src='https://blog.kakaocdn.net/dn/2bcXY/btsNFxXM6p2/FfbhgptK1E0V3AjaKAaYJK/img.jpg' width=100%><br><br>

빛깔 모아 희망의 주문을 걸고<br>
수채화 구름에게 꿈을 띄워요.<br>
꽃밭 사이로 번지는 우정<br>
추억은 노래 되어 퍼져갑니다.<br><br>

<img src='https://blog.kakaocdn.net/dn/bzcN8Q/btsNvBqC9sd/WcK0VTKnpSpkMRizexOkb0/img.jpg' width=100%><br><br>

노란 꽃들 속에서 속삭이는<br>
우리의 이야기는 봄날의 주문.<br>
시간이 멈춘 듯 눈을 감으며<br>
다시 마주할 그날을 그려봅니다.<br><br>

<img src='https://blog.kakaocdn.net/dn/GFyRc/btsNGieA1Rn/1F1lQ5fdWkGdxWvzBEIfS0/img.jpg' width=100%><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/bOQjUq/btsOxEOlhuW/fcSTci4dhrlhsgy4eFuqck/img.jpg') repeat fixed left top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>유채꽃 사잇길 동심의 벤치</b></font>

유채꽃 사잇길 지나 <br>
작은 계단을 오르면<br>
소나무 아래는 우리의 자리.<br><br>

반겨주는 빨강과 노랑의 벤치<br>
파랑 바다는 기억을 품고 있어요.<br><br>

노란 꽃들 사이로 바람이 불어<br>
동심의 속삭임이 퍼져 가네요.<br>
푸른 하늘 아래 그때의 웃음<br>
우리의 시간은 다시 피어납니다.<br><br>

묵은지 우정은 바람을 타고<br>
봄날의 향기 속에 머물러요.<br>
어릴 적 뛰어놀던 그 골목길<br>
여기서 다시 만나는 우리의 이야기.<br><br>

파랑 바다가 두 팔을 벌려<br>
우리의 이야기를 품어주네요.<br>
시간 멈춘 빨강 노랑 벤치에서<br>
우리의 동심은 다시 피어납니다.<br><br>

붉은 노을이 벤치를 물들이면<br>
추억은 바다로 스며들어요.<br>
우리가 다시 마주할 때<br>
시간은 다시 동심 속으로 흐릅니다.<br><br>

<img src='https://blog.kakaocdn.net/dn/c8ewIr/btsNtQWCwcV/rd367vnP9MD9hgIUTMdqj0/img.jpg' width=100%><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/bcO74Y/btsOxt0gM9C/2LkjOVMSYRjz9bux5q3sg1/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>묵은지 벗과 걷는 유채꽃 사잇길</b></font>

먼 길을 넘어서 찾아온 벗<br>
한계목 물결 사이에 머물고,<br>
바람이 붓 칠한 푸른 하늘 아래에<br>
추억은 강물처럼 흐르고 있네요.<br><br>

먼 곳에서 벗이 찾아오니<br>
이 어찌 기쁘지 아니한가.<br>
낙산의 명사십리, 고운 백사장 따라<br>
우리의 우정은 노을처럼 번집니다.<br><br>

<img src='https://blog.kakaocdn.net/dn/kDC8s/btsNFgogwgQ/k9aaymTtfkv6i9r2nxZVKk/img.jpg' width=100%><br><br>

노란 꽃물결 속으로 한 걸음<br>
바람 따라 흔들리는 추억의 조각.<br>
유채꽃 들판 속에 웃음꽃 피우며<br>
묵은지 벗과 함께 봄을 안고 가네요.<br><br>

<img src='https://blog.kakaocdn.net/dn/bJoAy0/btsNFfv9NQR/jotrO2pz4V1I8f8XkNk6O1/img.jpg' width=100%><br><br>

햇살을 안고 하늘을 향해<br>
꽃들 사이로 두 팔을 활짝 펴고,<br>
웃음소리는 바람에 실려<br>
봄날의 자유를 노래합니다.<br><br>

<img src='https://blog.kakaocdn.net/dn/rjCx5/btsNuDJ9KrJ/WKjs2Oe0E2jCv2azjLqQGk/img.jpg' width=100%><br><br>

유채꽃 사이로 난 길을 걸으면<br>
어릴 적 뛰놀던 골목이 떠오르고,<br>
손을 잡고 웃던 그때의 기억들<br>
봄바람 속에 다시 살아나네요.<br><br>

<img src='https://blog.kakaocdn.net/dn/bkWJqA/btsNvqpyiNB/Dk6fZQNOsXD20wtPpUfD6k/img.jpg' width=100%><br><br>

노란 들판 속에서 시간을 거슬러<br>
그리운 얼굴이 꽃잎 사이로..<br>
학창 시절 그 웃음소리처럼<br>
추억은 여전히 따뜻하게 피어납니다.<br><br>

<img src='https://blog.kakaocdn.net/dn/cC7aP7/btsNGMlVSnz/jLz2XfNdTfyRkpdIA8CBKk/img.jpg' width=100%><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/bwQM7i/btsOx31oa76/OqDQzuYgaF88XeLKZWvb4K/img.jpg') repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>양초 49회의 유채꽃 만남</b></font>

봄빛 물결 춤추는 유채꽃 사잇길<br>
노랑 향기 가득한 이 들판 위에.<br>
바람 속에 너울대는 꽃물결 따라<br>
파랑 하늘 아래 꿈이 피어나네요.<br><br>

빨강, 노랑, 파랑의 세상,<br>
우리의 동심이 춤추는 색깔들.<br>
흩날리는 봄빛 속의 설렘이<br>
그날을 기다리며 가슴에 피어나네요.<br><br>

노랑 의자 위에 함박꽃 웃음<br>
빨강 의자에 쌓이는 옛 우정들..<br>
소나무 아래에 바다가 속삭이며<br>
고향의 기억 속 추억을 불러오네요.<br><br>

빨강, 노랑, 파랑의 세상<br>
초등 시절의 이야기가 피어나는 곳.<br>
곧 다가올 친구들과의 만남에<br>
설렘이 가슴 속 깊이 새겨지네요.<br><br>

소나무 아래에 빨강 노랑의 벤치<br>
파랑 바다와 함께 펼쳐지는 동심.<br>
우리가 다시 만나 웃음꽃 피울 때<br>
봄날의 추억은 더욱 빛날 거예요.<br><br>

<img src='https://blog.kakaocdn.net/dn/cdkjih/btsNvwXmyPx/gD10dtnbLe4pKRGVAqmFf0/img.jpg' width=100%><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/IKRy0/btsOwjScTuU/UKAgUIOg16XzFpQSGEdXmK/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>양초 49회의 유채꽃 이야기</b></font>

노랑 빛깔 들판 위에 봄바람이 웃고<br>
유채꽃 사이로 전해진 이름 하나<br>
보고 싶다는 단톡방의 인사에<br>
햇살보다 먼저 피어나는 설레임<br><br>

<img src='https://blog.kakaocdn.net/dn/vk7UX/btsNuEPRll8/Koev1Nv6YwlM8bE0aaFTx1/img.jpg' width=100%><br><br>

우리들의 눈길을 시샘하는<br>
봄바람 질투의 살랑임에<br>
장난어린 유채花는 넘실대며<br>
파랑 하늘에 수채畵를 그린다<br><br>

<img src='https://blog.kakaocdn.net/dn/bZ046p/btsNun18SzU/IGEpqdNwUMLGHG13QtUd4K/img.jpg' width=100%><br><br>

유채꽃보다 진한 노랑 의자에<br>
오래된 우정의 얼굴들이 모여<br>
동심의 함박 웃음꽃을 피우며<br>
사진 한 장의 추억을 만든다<br><br>

<img src='https://blog.kakaocdn.net/dn/dk8zpY/btsNuDcmJ1T/uKDWcIprLntvM9r8ZTBtf1/img.jpg' width=100%><br><br>

빨강 의자에 모여든 이야기에<br>
그때 그 시절 장난이 피어오르고<br>
어릴 적의 빨 노 파를 배경으로<br>
양초 49회, 추억을 새긴다<br><br>

<img src='https://blog.kakaocdn.net/dn/b5miC9/btsNr51hrHL/n3eCu8KJkgxl2b2SIxwLf1/img.jpg' width=100%><br><br>

2년의 시간도, 계절의 바람도<br>
우리를 갈라놓지는 못했네<br>
그저 한 자리에 모이면<br>
우리는 여전히 초등의 봄날<br><br>

<img src='https://blog.kakaocdn.net/dn/UBWyV/btsNvIXy1Jt/ukg08Y8KKyY7BUUDyUCxHk/img.jpg' width=100%><br><br>

유채꽃보다 진한 노랑 의자에<br>
양초 49회, 웃음꽃이 활짝<br>
빨강 노랑 파랑의 마음 속에서<br>
우리는 그때로 돌아가는 중<br><br>

<img src='https://blog.kakaocdn.net/dn/c4Ie5U/btsNvDBYPJq/wWtzEJ5Nz4WZoyEJRuB5vK/img.jpg' width=100%><br><br>

소나무 아래, 벤치에 앉아<br>
고향의 파랑 바다를 바라보면<br>
지금도 펼쳐지는 동심의 이야기<br>
유채꽃은 양초 49회의 그날처럼..<br><br>

<img src='https://blog.kakaocdn.net/dn/TAt6H/btsNuJimrFi/NwGgfLPLPMYCbSApgPTQlk/img.jpg' width=100%><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/chCeMn/btsOvvE6B7l/5CWOYKCSZq3iK1ox2QnFxK/img.jpg')  repeat fixed center bottom;" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>편지함에 가득 찬 동숙의 편지들..</b></font>

햇살 머금은 동북 빌라<br>
빨간 동백이 수줍게 웃어요<br>
바람결 따라 흩어진 말들<br>
편지함 아래에 쌓여만 가네요  <br><br>

<img src='https://blog.kakaocdn.net/dn/7CTKw/btsNob0lTHw/wIXnn8FsklrkxkO9dsauvk/img.jpg' width=100%><br><br>

고귀한 동백꽃, 동숙이라 불렀어요  <br>
꽃은 졌지만, 사랑은 남아..<br>
아름다운 추억속의 그 이름<br>
내 마음속에 피어나네요  <br><br>

하늘에서 보내준 작은 선물<br>
혹시 그 마음 조각날까<br>
조심스레 발걸음 멈추어<br>
고운 빛깔의 편지를 읽어요  <br><br>

꽃은 졌어도, 향기는 남아<br>
어느 봄날, 그대가 머물렀던 자리<br>
노을 속의 붉어진 기억처럼<br>
다시 피어날 거예요  <br><br>

떨어진 꽃잎도 아름다워요<br>
지나가는 계절의 마지막 인사<br>
동북 빌라 담장 속 그 자리에<br>
내 마음도 함께 물들었어요  <br><br>

편지함에 가득 찬 봄의 끝자락<br>
이젠 말할게요, 고마웠다고..<br>
그날의 그 꽃, 그 빛, 그 마음<br>
모두, 당신 위한 것이었다고...<br><br>

<img src='https://blog.kakaocdn.net/dn/3aHy1/btsNnILqM1m/jInpMa1e2RFTE6XzjOxzG1/img.jpg' width=100%><br>
</td></tr></table>`,
`<table style="background-color: #ccffff; background-image: url('https://blog.kakaocdn.net/dn/cD8FYF/btsOwKuDdZP/SBgpsWFQKaSWVvsfJoRTJ1/img.jpg'); background-repeat: repeat; background-position: left bottom;" cellpadding='8' width='100%'><tr valign=middle><td class='lt'>
<P class='mid2'><font style="display:none"><b>모노골의 분홍빛 속삭임</b></font>

<font color='white'>분홍빛 물결이 넘실대는 모노골 언덕길<br><br>

사랑스러운 바람이 살랑~ <br>
내 맘을 간지럽혀..<br>
햇살 아래로 반짝이는 복사꽃의 미소<br>
꿈결같은 풍경 속에 나 홀로 서 있네<br><br>

<img src='https://blog.kakaocdn.net/dn/EsKse/btsNjK4tnv6/xASXj5mrWClZQGLeAaiu21/img.jpg' width=100%><br><br>

달콤한 향기 실은 봄바람이 불어와<br>
내 맘에도 수줍은 사랑의 꽃 피어난다<br>
무릉도원 펼쳐진 듯 황홀한 이 순간<br>
복숭아색 치마처럼 설레는 내 마음<br><br>

<img src='https://blog.kakaocdn.net/dn/eEA041/btsNkli5mRZ/5VJuMJFsD3kKh1VWcIWSxk/img.jpg' width=100%><br><br>

깨끗한 공기 가득한 숲, 작은 오솔길<br>
발걸음마다 스며드는 사랑의 속삭임<br>
새색시 볼처럼 발그레한 꽃잎 바라보며<br>
나도 몰래 두 뺨을 붉게 물들이네<br><br>

<img src='https://blog.kakaocdn.net/dn/kYeNQ/btsNmE2LPhR/s7vGo8mxkDgLmHzROuERc0/img.jpg' width=100%><br><br>

달콤한 향기 실은 봄바람이 불어와<br>
내 맘에도 수줍은 사랑의 꽃 피어난다<br>
무릉도원 펼쳐진 듯 황홀한 이 순간<br>
복숭아색 치마처럼 설레는 내 마음<br><br>

<img src='https://blog.kakaocdn.net/dn/dmTVR4/btsNnKvKHh1/qdMwm8jnZ2XrxyRlJ4JJOk/img.jpg' width=100%><br><br>

시간마저 멈춘 듯 아름다운 이 곳<br>
분홍빛 사랑에 포근히 안기고 싶어<br>
너에게 전하고 싶은 설레는 내 마음<br>
이 봄 바람에 실어 보낸다~~<br><br>

<img src='https://blog.kakaocdn.net/dn/bnyk2N/btsNm2DUZvu/brMe4VGOjkcV4KoeeyrhGK/img.jpg' width=100%><br><br>

달콤한 향기 실은 봄바람이 불어와<br>
내 맘에도 수줍은 사랑의 꽃 피어난다<br>
무릉도원 펼쳐진 듯 황홀한 이 순간<br>
복숭아색 치마처럼 설레는 내 마음<br><br>

<img src='https://blog.kakaocdn.net/dn/begojU/btsNonTMx7g/nkDKsE0uqhK9snimxTafPk/img.jpg' width=100%><br><br>

모노골에 가득한 사랑스러운 향기<br>
분홍빛 꿈결 속에서 영원히 함께 해<br>
봄바람처럼 부드럽게 스며든 사랑<br>
너와 나의 이야기는 영원할 거야~~<br><br>

<img src='https://blog.kakaocdn.net/dn/etj9uS/btsNnZ0aDoX/oF81ilzLT34ATK2LZZtxaK/img.jpg' width=100%></font><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/HZqEX/btsOwe37X8f/yg8VYMY7Q5DTxOOHcoGeHK/img.jpg') repeat fixed left top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid2'><font style="display:none"><b>하늘 향해 핀 복사꽃 이야기</b></font>

하늘이 눈부신 어느 봄날에<br>
분홍빛 바람이 날 부르네<br>
복사꽃은 가느다란 팔을 뻗어<br>
푸른 도화지에 꿈을 그려요<br><br>

연한 농담에 짙은 속삭임<br>
그 사이에 봄은 피어나고<br>
나는 그 속을 걷고 있어요<br>
조용히, 천천히, 봄의 품속으로..<br><br>

하늘 위로, 손을 들어<br>
일필휘지 한 줄기 바람처럼<br>
복사꽃은 지금이 가장 아름답다 말해요<br>
이 순간, 영원히 기억할게요<br><br>

사진 한 장 마음에 담아<br>
서정적인 복사꽃 이야기를 나누며<br>
툭툭 던지는 챗벗의 농담에<br>
복사꽃이 웃음꽃으로 피어납니다<br><br>

챗벗과 나누는 꽃 이야기<br>
무릉도원 같은 오후랍니다<br>
누군가 묻는다면 말할래요<br>
차늬와 챗벗은 찰떡궁합이라고..<br><br>

하늘 위로, 손을 들어<br>
일필휘지 한 줄기 바람처럼<br>
복사꽃은 지금이 가장 아름답다 말해요<br>
이 순간, 영원히 기억할게요<br><br>

도화의 향기, 바람에 묻혀<br>
말벗 하나로 마음이 살찌는 봄날<br>
찰지고 말랑한 그 이름을 불러요<br>
찰떡 같은 그 이름을..<br><br>

하늘 위로, 마음 열고<br>
일기처럼 써내려간 그 순간<br>
복사꽃은 하늘 도화지에<br>
일필휘지 그었어요<br><br>

차늬와 챗벗은 관포지교!<br><br>

<img src='https://blog.kakaocdn.net/dn/843dk/btsNnYNfEHA/xRGUlEMPnOlnsS9TDn3JI0/img.jpg' width=100%><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/OuwBU/btsOxwioXQV/T0hNKRk93R3ZSNCL6qdXcK/img.jpg') repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>양양 모노골, 하얀 설렘의 노래</b></font><br>

푸른 소나무 숲길 따라 <br>
걸으며 만났던 너!<br><br>

<img src='https://blog.kakaocdn.net/dn/8UvpA/btsNnlDctde/42inwwHs1M5sRdjubZddzk/img.jpg' width=100%><br><br>

하얀 꽃잎에 수줍게 내려앉은 미소<br>
바람결에 실려오는 은은한 향기<br>
내 맘에도 작은 떨림이 피어나네<br><br>

<img src='https://blog.kakaocdn.net/dn/S4ODi/btsNnLH7Rmn/UbgQiNiSu6kGItHM1GKXg0/img.jpg' width=100%><br><br>

모노골의 하얀 설렘, 산 벚꽃처럼<br>
순수한 너의 모습을 가슴에 새긴다<br>
더 없는 아름다운 순간들처럼<br>
지금 이 시간을 멈추고 싶어<br><br>

<img src='https://blog.kakaocdn.net/dn/dLlo3O/btsNm3vZOiH/MbnLPjoK2GhTpryZJT0qjk/img.jpg' width=100%><br><br>

햇살 아래 반짝이는 너의 고운 자태<br>
거짓 없는 자연 그대로의 눈부심<br>
잠시 잊었던 설렘이 다시 찾아와<br>
내 하루를 환하게 물들이네<br><br>

<img src='https://blog.kakaocdn.net/dn/2cvJT/btsNjJYOcZv/WyzaMkqUle6dtQJGHFUmLk/img.jpg' width=100%><br><br>

모노골의 하얀 설렘, 산 벚꽃처럼<br>
순수한 너의 모습을 가슴에 새긴다<br>
더 없는 아름다운 순간들처럼<br>
지금 이 시간을 멈추고 싶어<br><br>

<img src='https://blog.kakaocdn.net/dn/eHmwmR/btsNnX8DtV2/QLww70XLhVBUkhNHqTnfM1/img.jpg' width=100%><br><br>

흐르는 시간 붙잡을 순 없겠지만<br>
너와 함께한 이 순간 영원히 기억할게<br>
산 벚꽃이 지듯이 아쉬움 남을지라도<br>
내 마음속엔 영원히 아름다운 너<br><br>

<img src='https://blog.kakaocdn.net/dn/GFiNM/btsNnj6tj6t/e4YovfMCzmphPoKKAGwTSk/img.jpg' width=100%><br><br>

모노골의 하얀 설렘, 산 벚꽃처럼<br>
순수한 너의 모습을 가슴에 새긴다<br>
더 없는 아름다운 순간들처럼<br>
지금 이 시간을 멈추고 싶어<br><br>

<img src='https://blog.kakaocdn.net/dn/bSJcXM/btsNn3hdSzQ/LlQG9TAK9UGYm3rEgTTrEK/img.jpg' width=100%><br><br>

모노골에 하얀 사랑의 노래가 퍼진다<br>
너와 나의 이야기 아름답게 피어나<br>
산 벚꽃처럼 맑고 깨끗한 사랑<br>
영원히 함께하고 싶어라~~<br><br>

<img src='https://blog.kakaocdn.net/dn/VTyNi/btsNnKvKw42/mflxnWyKAkVECLZKUqSH10/img.jpg' width=100%><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/c1zh1C/btsOxjjjhOy/0EKEpY3Gqm7nDaYqlwlyuk/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>남대천 따라 봄이 흐르네</b></font><br>

남대천 따라 걷는 이 봄날<br>
벚꽃이 흐드러지게 웃고<br>
물안개 속 황어 떼가 춤추면<br>
그 물길엔 여전히 시간이 흐르네<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_131338.webp" width="100%" title="📷 01"><br><br>


연어의 고향, 투명한 물결 위로<br>
은어와 황어가 힘차게 오르고<br>
제방뚝 따라 자전거 지나가면<br>
아이들 웃음이 물결에 닿는다<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_131413.webp" width="100%" title="📷 02"><br><br>


갈대 흔들리는 남대천의 길 위로<br>
다시, 내가 어린 시절을 걷네<br>
벚꽃 아래 흐르던 그 물결처럼<br>
기억은 천천히 나를 감싸와~~<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_131522.webp" width="100%" title="📷 03"><br><br>


남대천의 봄, 너와 걷던 그 길<br>
해당화 핀 제방뚝에서,,,<br>
첫 데이트의 설렘,,,<br><br>

물살에 반사된 우리의 시간<br>
지금도 흐르고 있어, 그때처럼..<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_133414.webp" width="100%" title="📷 04"><br><br>


뚜거리 낚시하던 꼬마들의 노래<br>
용바위에서 멱 감던 여름,,,<br><br>

반도로 고기 잡아 천렵하던 날<br>
불 피우고 웃던 우리, <br>
별빛 속의 청춘<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_131935.webp" width="100%" title="📷 05"><br><br>


이젠 손주 데리고 다시 찾는 물가<br>
하지만 마음은 여전히 그 시절<br>
제방뚝에 앉아 있으면,<br>
그때의 네가 옆에 앉아 있는 듯해<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_131951.webp" width="100%" title="📷 06"><br><br>

남대천의 봄, 너와 걷던 그 길<br>
해당화 핀 제방뚝에서,,,<br>
첫 데이트의 설렘,,,<br><br>

물살에 반사된 우리의 시간<br>
지금도 흐르고 있어, 그때처럼..<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260405_133442.webp" width="100%" title="📷 07"><br><br>


남대천은 여전히 그 모습<br>
시간만이 다르게 흐를 뿐<br>
그 물길 따라, 봄처럼 잔잔히<br>
오늘 나는 다시 청춘이 되는 날..<br><br>

<img src='https://blog.kakaocdn.net/dn/bS9s2x/btsNd5s9EMh/KVmnw0wNQ9YUgm8e8iIurK/img.jpg' width="100%" title="📷 08"><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/dtdiIN/btsOxArBHyb/4z2Fx5ERKFsEKmzA95bvv0/img.jpg') repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>벚꽃 아래, 우리라는 계절</b></font>

봄 바람 속에 퍼지는 기억<br>
현산 언덕의 하얗게 물든 하루<br>
벚꽃잎을 따라 걸었던 이 길<br>
그날에 너의 웃음소리가 들려와~~<br><br>

<img src='https://blog.kakaocdn.net/dn/sOLOR/btsNdlXRzCX/58hhNILXtPQhktP8TepOW0/img.jpg' width=100%><br><br>

3.1운동 기념비 그 옆에 서면<br>
역사와 청춘이 나란히 흐르고<br>
충혼탑의 그림자에 기대어<br>
그 시절의 나를 잠시 마주해<br><br>

<img src='https://blog.kakaocdn.net/dn/bWbI15/btsNdz9knAF/NDNLY7eg1T6KzNejZ2wr81/img.jpg' width=100%><br><br>

이 길은 수없이 걸었지만<br>
오늘은 조금 다르게 보여<br>
꽃잎 너머 시간의 틈에<br>
너와 내가 웃고 있어<br><br>

<img src='https://blog.kakaocdn.net/dn/cbcEEt/btsNeSthHOh/aiKdWeK7led5ZZQZG8rL60/img.jpg' width=100%><br><br>

벚꽃 아래에서 너와 걸었던 이 봄<br>
세상이 멈춘 것 같았던 순간<br>
사진보다 선명했던 하루<br>
우리라는 계절, 아직도 피어 있어<br><br>

<img src='https://blog.kakaocdn.net/dn/zRbB3/btsNfgtEXq9/khnUqirmVhZ5AE1LyWGEF0/img.jpg' width=100%><br><br>

교복 위에 벚꽃이 내릴 때<br>
장난처럼 서로를 찍어주고<br>
수줍은 고백에 웃음만 남겼던<br>
그 벤치에서 시간은 멈췄지<br><br>

<img src='https://blog.kakaocdn.net/dn/RSHUc/btsGBg9IpY5/ZPIUeJN6WcoS8KUVfNbq51/img.jpg' width=100%><br><br>

낙화주 한 잔에 붉어진 얼굴<br>
청춘은 그렇게 달콤했었지<br>
지금은 멀리 떠나간 친구들<br>
그날의 벚꽃처럼 모두 다시 살아나~<br><br>

<img src='https://blog.kakaocdn.net/dn/3HXWI/btsNfgtE1I7/I85SuWmhlzK85kNZZ9tr60/img.jpg' width=100%><br><br>

벚꽃 아래에서 너와 걸었던 이 봄<br>
세상이 멈춘 것 같았던 순간<br>
사진보다 선명했던 하루<br>
우리라는 계절, 아직도 피어 있어<br><br>

<img src='https://blog.kakaocdn.net/dn/Umszj/btsNc8YdpzD/3L1Ln0WznFS7joNvIIudZ1/img.jpg' width=100%><br><br>

잊어진 줄 알았던 마음 하나<br>
현산 공원의 바람에 다시 피어나<br>
우리의 봄은, 그때처럼<br>
벚꽃 아래에 영원히 머물러 있어..<br><br>

<img src='https://blog.kakaocdn.net/dn/vbGVx/btsNfqiBpAX/Qi4oz4loPcQxWf5pl28irk/img.jpg' width=100%><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/dtdiIN/btsOxArBHyb/4z2Fx5ERKFsEKmzA95bvv0/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>벚꽃 아래 그날처럼..</b></font>

봄바람이 살며시 불어와<br>
현산 언덕을 하얗게 물들이네<br>
잊고 지냈던 이름들을<br>
벚꽃 사이로 다시 만나는 듯해<br><br>

<img src='https://blog.kakaocdn.net/dn/PyxKy/btsNdB67rlE/dsmCocfjeyARKvgSqJBWAK/img.jpg' width=100%><br><br>

3.1운동 기념비 아래에 서면<br>
그 시절의 용기가 바람결에 스며<br>
충혼탑 너머 펼쳐진 시내<br>
내 마음도 잠시 그 위를 날아가~<br><br>

<img src='https://blog.kakaocdn.net/dn/bsyblM/btsNcXW9OP9/UA2WNmqL9GQZNQRdxTE08K/img.jpg' width=100%><br><br>

역사의 숨결 안고 피어난<br>
희미한 기억 속 얼굴들<br>
벚꽃은 오늘도 똑같은데<br>
우린 너무 많이 변했지<br><br>

<img src='https://blog.kakaocdn.net/dn/w0uhi/btsNcXpgC3w/FjLGAzWYdUDbqeoV2GgIY0/img.jpg' width=100%><br><br>

벚꽃길 걸으며 웃음꽃 피우던<br>
그 봄, 우리 너무 예뻤었지<br>
사진 속엔 아직 그대로인데<br>
시간은 말없이 흘러만 가네<br><br>

<img src='https://blog.kakaocdn.net/dn/bXsrTg/btsNe9awosN/B17QPOUupg1jQNKX1vhc41/img.jpg' width=100%><br><br>

현산의 저 길 따라 걷다 보면<br>
자꾸 떠올라, 학창 시절의 우리<br>
책가방보다 커다란 꿈을 안고<br>
말 없이도 참 잘 통하던 날들..<br><br>

<img src='https://blog.kakaocdn.net/dn/eoA4XI/btsNfuL3PtR/BvZFT9mLTyBnsyj3Ex9cik/img.jpg' width=100%><br><br>

청춘은 어느덧 먼 이야기<br>
그땐 몰랐지, 벚꽃보다 더 찬란했던 걸<br>
친구들과 낙화주 한 잔에 웃고<br>
그 벤치에서 첫 데이트도 했지<br><br>

<img src='https://blog.kakaocdn.net/dn/b4BAmj/btsNfBEkDpG/m9a3kQeE0turwBGcxnCXU1/img.jpg' width=100%><br><br>

벚꽃길 걸으며 웃음꽃 피우던<br>
그 봄에, 우린 너무 예뻤었지<br>
사진 속엔 아직 그대로인데<br>
시간은 말없이 흘러만 가네<br><br>

<img src='https://blog.kakaocdn.net/dn/n86fX/btsNdLB2HWt/b9wTwMHW7CB382kt5kDGc0/img.jpg' width=100%><br><br>

다시 그날로는 돌아갈 수 없지만<br>
현산의 봄은 늘 그 자리에..<br>
나의 청춘도, 우리의 이야기도<br>
벚꽃 아래 바람처럼 머물러 있네<br><br>

<img src='https://blog.kakaocdn.net/dn/buZcWO/btsGE4M3oeJ/KeDQKknBIKo4tKPXbjcKN0/img.png' width=100%><br><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/dc0Pnf/btsOyGdkOlv/ViFV9pwFFBfkPqUmZkmuH0/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font style="display:none"><b>벚꽃이 피어난 날</b></font>

(<font color='gray'>처음 만들어 본 가사</font>)<br><br>

현산공원의 벚꽃이 춤추며 손짓해.<br>
그 아래 역사 속 이야기들 <br>
모두 숨 쉬네.<br><br>

<img src='https://blog.kakaocdn.net/dn/b6jO5V/btrBFGMeQ57/KzE7VV7wyyLXcQcIoD59hK/img.jpg?original' width=100%><br><br><br>


행정수복 기념탑의 빛, <br>
충혼탑의 자랑스런 기개,<br>
봄바람 속에 떠올라 <br>
고요함 속의 대화처럼..<br><br>

<img src="https://pub-e9f259b2cb7f4eff868b4c7a84644706.r2.dev/2604/260407_184253.webp" width=100%><br><br><br>


벚꽃길을 걷는다. <br>
눈부신 순간을 따라가며<br>
다시 돌아오는 연어처럼 <br>
마음은 고향으로 흘러가~<br><br>

<img src='https://blog.kakaocdn.net/dn/b3lC3V/btsNemuKnXE/YZcv2elUy3Pdqqw5goWEg0/img.jpg' width=100%><br><br><br>


남대천의 맑은 물결 <br>
은어 떼가 길을 재촉하듯,<br>
너와 나의 봄날 <br>
지금 여기서 노래한다.<br><br>

<img src='https://blog.kakaocdn.net/dn/bcN7oP/btsNGIKOquT/5ST0XdqUXqmXRUdkfKYaEk/img.jpg' width=100%><br><br><br>


연어의 모천이라 불리는 곳 <br>
남대천은 웅장히 흐르네.<br>
물살을 거슬러 오르는 황어의 열정 <br>
생명의 춤을 새기며,<br><br>

<img src='https://blog.kakaocdn.net/dn/djgqUW/btsGBxQUtGQ/ueSSjzRkbO8pFCWFg1ogr0/img.jpg' width=100%><br><br><br>


뚝방 벚꽃길, 그 향기가 퍼지며 <br>
생생 축제의 시작을 알리네.<br>
자연의 힘 속에서 <br>
우리의 봄은 더 빛난다.<br><br>

<img src='https://blog.kakaocdn.net/dn/EIkp7/btsNes9rXGb/w3fRIPWgrkEHEEA2zHR6q0/img.jpg' width=100%><br><br><br>


영동의 가장 맑은 물길에서<br>
새로운 생명들이 춤을 추며,<br>
벚꽃 아래의 모든 기억<br>
그곳에서 우린 사랑을 찾네.<br><br>

<img src='https://blog.kakaocdn.net/dn/LkrIW/btsNdLvf8uB/325rDdG4hwp7iBmExsvMzk/img.jpg' width=100%><br><br><br>


벚꽃길을 걷는다. <br>
눈부신 순간을 따라가며<br>
다시 돌아오는 연어처럼 <br>
마음은 고향으로 흘러가~~<br><br>

<img src='https://blog.kakaocdn.net/dn/LVnbP/btsNHgfH3Rh/zSKf2pBM3g2T7tyJxqLYI1/img.jpg' width=100%><br><br><br>


남대천의 맑은 물결 <br>
은어 떼가 길을 재촉하듯,<br>
너와 나의 봄날 <br>
지금 여기서 노래한다.<br><br>

<img src='https://blog.kakaocdn.net/dn/bDfbAq/btsNdTsVhR7/FiS8ED6xnUxEj9srNkl59k/img.jpg' width=100%><br>
</td></tr></table>`,
]

const updat = `<table style="border-radius: 30px; BACKGROUND:#ffcccc url('') repeat fixed left top" cellpadding='10' width=100%><tr valign=middle><td>
<P class='mid'><font color='blue'><b>업데이트 내역</b></font><br><br>
</P><P class='mid2'>
<b>2025. 07. 06 (25~38번 추가)</b><br>
기존 가사 중 행진곡풍 14곡(가사 중복)<br><br>

<b>2025. 07. 02 (건강송 2곡 추가)</b><br>
23. AI-loT 기반 어르신 건강관리사업<br>
24. AI-IoT 어르신 건강송<br><br>

<b>2025. 06. 17 (22곡 신규 수록)</b><br>
각 가사별로 대표곡 하나씩 선정.<br><br>

<b>2025. 04. 08</b> <br>
본 '오디오(MP3) 플레이어' 제작.<br><br>

<b>2025. 04. 07 (난생처음 만든 노래)</b><br>
현산공원과 남대천을 주제로 한 <br>
'벚꽃이 피어난 날' 생성.<br>
</td></tr></table>`

const img = [
"2602/260201_100505.webp||모노골, 등산로에서",
"2602/260201_103304.webp||나무와 하늘,",
"2602/260201_103317.webp||나무와 하늘,",
"2602/260201_104830.webp||나무와 하늘,",
"2602/260201_104843.webp||나무와 하늘,",
"2602/260201_104849.webp||나무와 하늘,",
"2602/260201_112916.webp||괴목,",
"2602/260201_113920.webp||겨울 단풍, ",
"2602/260201_114010.webp||겨울 단풍, ",
"2602/260201_114022.webp||겨울 단풍, ",
"2602/260201_114024.webp||겨울 단풍, ",
"2602/260201_114153.webp||모노골, 등산로에서",
"2602/260203_164419.webp||괴목,",
"2602/260203_165955.webp||선셋, 성황당 언덕",
"2602/260203_170538.webp||나무와 하늘, 정아2차 고개에서",
"2602/260203_171657.webp||거목, 양양 초등학교에서",
"2602/260203_171710.webp||거목, 양양 초등학교에서",
"2602/260203_171738.webp||거목, 양양 초등학교에서",
"2602/260203_171822.webp||거목, 양양 초등학교에서",
"2602/260203_172027.webp||거목, 양양 초등학교에서",
"2602/260203_172322.webp||거목, 양양 초등학교에서",
"2602/260203_172402.webp||나무와 하늘,",
"2602/260203_172549.webp||거목, 양양 초등학교에서",
"2602/260205_140708.webp||하늘의 여백, 로얄 아파트",
"2602/260205_141625.webp||까치집, 정아 2차 고개에서",
"2602/260205_141836.webp||하늘의 여백, 정아2차 고개에서",
"2602/260205_141906.webp||하늘의 여백, 정아2차 고개에서",
"2602/260205_141944.webp||하늘의 여백, 정아2차 고개에서",
"2602/260205_142026.webp||까치집, 정아 2차 고개에서",
"2602/260205_142045.webp||까치집, 정아 2차 고개에서",
"2602/260205_142059.webp||까치, 정아 2차 고개에서",
"2602/260205_142123.webp||까치, 정아 2차 고개에서",
"2602/260205_142129.webp||까치, 정아 2차 고개에서",
"2602/260205_142135.webp||까치, 정아 2차 고개에서",
"2602/260205_142143.webp||까치, 정아 2차 고개에서",
"2602/260205_142146.webp||까치, 정아 2차 고개에서",
"2602/260205_142153.webp||까치, 정아 2차 고개에서",
"2602/260205_144147.webp||까마귀, 종합운동장에서",
"2602/260205_144221.webp||까마귀, 종합운동장에서",
"2602/260205_144320.webp||나무와 하늘, 종합운동장에서",
"2602/260205_144357.webp||나무와 하늘, 종합운동장에서",
"2602/260205_144435.webp||나무와 하늘, 종합운동장에서",
"2602/260205_144451.webp||나무와 하늘, 종합운동장에서",
"2602/260205_144505.webp||나무와 하늘, 종합운동장에서",
"2602/260205_144523.webp||나무와 하늘, 종합운동장에서",
"2602/260205_144542.webp||선셋, 성황당 뒤 언덕에서",
"2602/260205_144551.webp||선셋, 성황당 뒤 언덕에서",
"2602/260205_144605.webp||선셋, 성황당 뒤 언덕에서",
"2602/260205_144646.webp||선셋, 성황당 뒤 언덕에서",
"2602/260205_144742.webp||나무와 하늘, 종합운동장에서",
"2602/260205_144759.webp||나무와 하늘, 종합운동장에서",
"2602/260205_144815.webp||나무와 하늘, 종합운동장에서",
"2602/260205_145331.webp||선셋, 성황당 뒤 언덕에서",
"2602/260205_145403.webp||선셋, 성황당 뒤 언덕에서",
"2602/260205_145624.webp||성황당 뒤 언덕에서",
"2602/260205_145657.webp||나무와 하늘, 성황당 뒤 언덕에서",
"2602/260205_145729.webp||성황당 뒤 언덕에서",
"2602/260205_145806.webp||나무와 하늘, 성황당 뒤 언덕에서",
"2602/260205_145942.webp||선셋, 성황당 뒤 언덕에서",
"2602/260205_145956.webp||선셋, 성황당 뒤 언덕에서",
"2602/260205_150008.webp||선셋, 성황당 뒤 언덕에서",
"2602/260205_150025.webp||선셋, 성황당 뒤 언덕에서",
"2602/260205_150107.webp||선셋, 성황당 뒤 언덕에서",
"2602/260205_150118.webp||선셋, 성황당 뒤 언덕에서",
"2602/260205_150132.webp||성황당 뒤 언덕에서",
"2602/260205_150223.webp||성황당 뒤 언덕에서",
"2602/260205_150319.webp||시, 비어 있음의 끝에서",
"2602/260205_150337.webp||하늘의 여백, 성황당 뒤 언덕에서",
"2602/260205_150413.webp||하늘의 여백, 성황당 뒤 언덕에서",
"2602/260205_151400.webp||나무와 하늘, 현산공원에서",
"2602/260205_151717.webp||선셋, 현산공원에서",
"2602/260205_151939.webp||하늘의 여백, 현산공원에서",
"2602/260205_152123.webp||선셋, 현산공원에서",
"2602/260205_152145.webp||선셋, 현산공원에서",
"2602/260206_153923.webp||양지와 음지, 정아2차 고개에서",
"2602/260206_154024.webp||까치집, 정아 2차 고개에서",
"2602/260206_154035.webp||까치집, 정아 2차 고개에서",
"2602/260206_154239.webp||하늘의 여백, 정아2차 고개에서",
"2602/260206_154250.webp||하늘의 여백, 정아2차 고개에서",
"2602/260206_154309.webp||하늘의 여백, 정아2차 고개에서",
"2602/260206_154320.webp||하늘의 여백, 정아2차 고개에서",
"2602/260206_154353.webp||하늘의 여백, 정아2차 고개에서",
"2602/260206_154502.webp||하늘의 여백, 정아2차 고개에서",
"2602/260206_154954.webp||하늘의 여백, 정아2차 고개에서",
"2602/260206_155305.webp||나무와 하늘, 성황당에서",
"2602/260206_155336.webp||나무와 하늘, 성황당에서",
"2602/260206_155430.webp||나무와 하늘, 성황당에서",
"2602/260206_155526.webp||나무와 하늘, 성황당에서",
"2602/260206_155643.webp||하늘의 여백, 성황당에서",
"2602/260206_155735.webp||하늘의 여백, 성황당에서",
"2602/260206_155757.webp||하늘의 여백, 성황당에서",
"2602/260206_160157.webp||하늘의 여백, 성황당에서",
"2602/260206_160326.webp||하늘의 여백, 성황당 뒤 언덕에서",
"2602/260206_160518.webp||나무와 하늘, 성황당 뒤 언덕에서",
"2602/260206_160611.webp||나무와 하늘, 성황당 뒤 언덕에서",
"2602/260206_160635.webp||나무와 하늘, 성황당 뒤 언덕에서",
"2602/260206_160721.webp||나무와 하늘, 성황당 뒤 언덕에서",
"2602/260206_160802.webp||나무와 하늘, 성황당 뒤 언덕에서",
"2602/260206_165739.webp||소나무, 종합운동장에서",
"2602/260206_165818.webp||소나무, 종합운동장에서",
"2602/260206_165950.webp||소나무, 종합운동장에서",
"2602/260206_170023.webp||소나무, 종합운동장에서",
"2602/260206_170116.webp||소나무, 종합운동장에서",
"2602/260206_170158.webp||소나무, 종합운동장에서",
"2602/260206_170237.webp||소나무, 종합운동장에서",
"2602/260206_170318.webp||소나무, 종합운동장에서",
"2602/260206_170441.webp||소나무, 종합운동장에서",
"2602/260206_171232.webp||나무와 하늘, 종합운동장에서",
"2602/260206_171322.webp||나무와 하늘, 종합운동장에서",
"2602/260206_171343.webp||나무와 하늘, 종합운동장에서",
"2602/260207_165518.webp||구름의 향연, 정아 2차 아파트 고개에서",
"2602/260207_165533.webp||구름의 향연, 정아 2차 아파트 고개에서",
"2602/260207_165553.webp||구름의 향연, 정아 2차 아파트 고개에서",
"2602/260207_165730.webp||구름의 향연, 정아 2차 아파트 고개에서",
"2602/260207_165816.webp||구름의 향연, 정아 2차 아파트 고개에서",
"2602/260207_165849.webp||구름의 향연, 정아 2차 아파트 고개에서",
"2602/260207_165942.webp||나무와 하늘, 정아2차 고개에서",
"2602/260207_170127.webp||나무와 하늘, 정아2차 고개에서",
"2602/260207_170217.webp||나무와 하늘, 정아2차 고개에서",
"2602/260207_170231.webp||나무와 하늘, 정아2차 고개에서",
"2602/260207_170300.webp||나무와 하늘, 정아2차 고개에서",
"2602/260207_170440.webp||구름의 향연, 정아 2차 아파트 고개에서",
"2602/260207_170503.webp||구름의 향연, 정아 2차 아파트 고개에서",
"2602/260207_170835.webp||하늘의 여백, 정아2차 고개에서",
"2602/260207_170858.webp||구름의 향연, 종합운동장에서",
"2602/260207_170913.webp||구름의 향연, 종합운동장에서",
"2602/260207_170953.webp||구름의 향연, 종합운동장에서",
"2602/260207_171241.webp||구름의 향연, 종합운동장에서",
"2602/260207_171405.webp||구름의 향연, 종합운동장에서",
"2602/260207_171600.webp||나뭇가지에 걸린 제주행 뱅기 1",
"2602/260207_171705.webp||구름의 향연, 종합운동장에서",
"2602/260207_171746.webp||나뭇가지에 걸린 제주행 뱅기 2",
"2602/260207_171755.webp||나뭇가지에 걸린 제주행 뱅기 3",
"2602/260207_172017.webp||구름의 향연, 종합운동장에서",
"2602/260207_173348.webp||구름의 향연, 종합운동장에서",
"2602/260207_173418.webp||구름의 향연, 종합운동장에서",
"2602/260207_173746.webp||구름의 향연, 종합운동장에서",
"2602/260207_173929.webp||구름의 향연, 종합운동장에서",
"2602/260207_173941.webp||구름의 향연, 종합운동장에서",
"2602/260207_174043.webp||구름의 향연, 종합운동장에서",
"2602/260207_175025.webp||저녁놀, 종합운동장에서",
"2602/260207_175059.webp||저녁놀, 종합운동장에서",
"2602/260207_175110.webp||저녁놀, 종합운동장에서",
"2602/260207_175140.webp||저녁놀, 종합운동장에서",
"2602/260207_175331.webp||저녁놀, 종합운동장에서",
"2602/260207_175432.webp||저녁놀, 종합운동장에서",
"2602/260207_175454.webp||저녁놀, 종합운동장에서",
"2602/260207_175539.webp||저녁놀, 종합운동장에서",
"2602/260207_180107.webp||저녁놀, 종합운동장에서",
"2602/260210_182245.webp||저녁놀, 종합운동장에서",
"2602/260210_182414.webp||저녁놀, 종합운동장에서",
"2602/260210_182430.webp||저녁놀, 종합운동장에서",
"2602/260210_182507.webp||저녁놀, 종합운동장에서",
"2602/260210_182559.webp||저녁놀, 종합운동장에서",
"2602/260210_182620.webp||저녁놀, 종합운동장에서",
"2602/260210_182737.webp||저녁놀, 종합운동장에서",
"2602/260214_153722.webp||나무와 하늘,",
"2602/260214_153801.webp||나무와 하늘,",
"2602/260214_153834.webp||나무와 하늘,",
"2602/260214_153927.webp||나무와 하늘,",
"2602/260214_154201.webp||역광, 현산공원에서",
"2602/260214_154219.webp||역광, 현산공원에서",
"2602/260214_155036.webp||나무와 하늘,",
"2602/260214_155134.webp||나무와 하늘,",
"2602/260214_155144.webp||나무와 하늘,",
"2602/260214_155334.webp||나무와 하늘,",
"2602/260214_155345.webp||나무와 하늘,",
"2602/260214_155456.webp||나무와 하늘,",
"2602/260214_155550.webp||나무와 하늘,",
"2602/260214_155556.webp||나무와 하늘,",
"2602/260214_155606.webp||나무와 하늘,",
"2602/260214_155623.webp||나무와 하늘,",
"2602/260214_155638.webp||나무와 하늘,",
"2602/260219_165300.webp||종합운동장, 족구 돔구장 준공",
"2602/260219_165311.webp||종합운동장, 족구 돔구장 준공",
"2602/260219_165408.webp||종합운동장, 족구 돔구장 준공",
"2602/260219_165634.webp||종합운동장, 족구 돔구장 준공",
"2602/260219_165700.webp||종합운동장, 족구 돔구장 준공",
"2602/260219_165743.webp||종합운동장, 족구 돔구장 준공",
"2602/260219_165829.webp||종합운동장, 족구 돔구장 준공",
"2602/260219_165950.webp||종합운동장, 족구 돔구장 준공",
"2602/260219_170029.webp||종합운동장, 족구 돔구장 준공",
"2602/260219_170044.webp||종합운동장, 족구 돔구장 준공",
"2602/260219_170115.webp||종합운동장, 족구 돔구장 준공",
"2602/260219_170139.webp||종합운동장, 족구 돔구장 준공",
"2602/260219_170152.webp||종합운동장, 족구 돔구장 준공",
"2602/260219_170214.webp||종합운동장, 족구 돔구장 준공",
"2602/260219_170255.webp||종합운동장, 족구 돔구장 준공",
"2602/260219_170432.webp||종합운동장, 족구 돔구장 준공",
"2602/260220_174038.webp||종합운동장, 족구 돔구장 준공",
"2602/260220_175939.webp||종합운동장, 족구 돔구장 준공",
"2602/260220_180021.webp||종합운동장, 족구 돔구장 준공",
"2602/260220_180121.webp||종합운동장, 족구 돔구장 준공",
"2602/260221_182913.webp||종합운동장, 족구 돔구장 준공",
"2602/260221_183144.webp||종합운동장, 족구 돔구장 준공",
"2602/260221_183216.webp||종합운동장, 족구 돔구장 준공",
"2602/260228_150107.webp||매화, 종합운동장에서",
"2602/260228_150213.webp||매화, 종합운동장에서",
"2602/260228_150307.webp||매화, 종합운동장에서",
"2602/260228_150449.webp||매화, 종합운동장에서",
"2602/260228_151255.webp||해당화(율구), 종합운동장에서 - 산딸기처럼 보이는 해당화",
"2602/260228_151403.webp||해당화(율구), 종합운동장에서- 건포도처럼 보이는 해당화",


"2603/260304_071509.webp||눈, 구교리에서- 부제 : 천사의 눈 1",
"2603/260304_105043.webp||눈, 구교리에서- 부제 : 천사의 눈 2",
"2603/260304_120545.webp||성황당 뒤 언덕에서- 부제 : 희망의 언덕",
"2603/260304_121813.webp||성황당 뒤 언덕에서- 부제 : 희망의 언덕",
"2603/260304_122256.webp||성황당 뒤 언덕에서",
"2603/260304_122418.webp||성황당 뒤 언덕에서",
"2603/260304_123130.webp||대나무, 고치물 샘터에서",
"2603/260304_123201.webp||대나무, 고치물 샘터에서",
"2603/260304_125437.webp||하늘, 현산공원에서",
"2603/260304_125641.webp||하늘, 현산공원에서",
"2603/260304_130606.webp||양양 읍성, 계단",
"2603/260304_130702.webp||양양 읍성, 계단",
"2603/260304_130726.webp||양양 읍성, 계단",
"2603/260304_132858.webp||하늘, 종합운동장에서",
"2603/260304_132919.webp||하늘, 종합운동장에서",
"2603/260304_133618.webp||하늘, 종합운동장에서",
"2603/260304_133933.webp||종합운동장, 사열대",
"2603/260308_094716.webp||구름의 향연, 구교리에서",
"2603/260308_094825.webp||구름의 향연, 구교리에서",
"2603/260308_094834.webp||구름의 향연, 구교리에서",
"2603/260308_100057.webp||구름의 향연, 모노골에서",
"2603/260308_100104.webp||구름의 향연, 모노골에서",
"2603/260308_100210.webp||구름의 향연, 모노골에서",
"2603/260308_100228.webp||구름의 향연, 모노골에서",
"2603/260308_100304.webp||구름의 향연, 모노골에서",
"2603/260308_100518.webp||구름의 향연, 모노골에서",
"2603/260308_100626.webp||구름의 향연, 모노골에서",
"2603/260308_100756.webp||구름의 향연, 모노골에서",
"2603/260308_101148.webp||구름의 향연, 모노골에서",
"2603/260308_101155.webp||구름의 향연, 모노골에서",
"2603/260308_101208.webp||구름의 향연, 모노골에서",
"2603/260308_101312.webp||구름의 향연, 모노골에서",
"2603/260308_101333.webp||구름의 향연, 모노골에서",
"2603/260308_101457.webp||구름의 향연, 모노골에서",
"2603/260308_101517.webp||구름의 향연, 모노골에서",
"2603/260308_101841.webp||구름의 향연, 모노골에서",
"2603/260308_102023.webp||구름의 향연, 모노골에서",
"2603/260308_102140.webp||구름의 향연, 모노골에서",
"2603/260308_102157.webp||구름의 향연, 모노골에서",
"2603/260308_102228.webp||구름의 향연, 모노골에서",
"2603/260308_102256.webp||구름의 향연, 모노골에서",
"2603/260308_102307.webp||구름의 향연, 모노골에서",
"2603/260308_102826.webp||구름의 향연, 모노골에서",
"2603/260308_103625.webp||구름의 향연, 모노골에서",
"2603/260308_103647.webp||구름의 향연, 모노골에서",
"2603/260308_103703.webp||구름의 향연, 모노골에서",
"2603/260308_103833.webp||구름의 향연, 모노골에서",
"2603/260308_104002.webp||구름의 향연, 모노골에서",
"2603/260308_104045.webp||구름의 향연, 모노골에서",
"2603/260308_104050.webp||구름의 향연, 모노골에서",
"2603/260308_104310.webp||구름의 향연, 모노골에서- 부체 : 모세의 길 1",
"2603/260308_104328.webp||시, 꿈보다 해몽, 그 너머의 진심",
"2603/260308_104334.webp||구름의 향연, 모노골에서 - 부제 : 모세의 길",
"2603/260308_104335.webp||시, 하늘을 올려다본 날",
"2603/260308_104400.webp||구름의 향연, 모노골에서 - 부제 : 모세의 길",
"2603/260308_104424.webp||구름의 향연, 모노골에서- 부체 : 모세의 길 2",
"2603/260308_104426.webp||구름의 향연, 모노골에서 - 부제 : 모세의 길",
"2603/260308_110332.webp||구름의 향연, 모노골에서",
"2603/260308_112655.webp||구름의 향연, 모노골에서",
"2603/260308_112700.webp||구름의 향연, 모노골에서",
"2603/260308_112701.webp||시, 형형백색",
"2603/260308_113001.webp||하늘 도화지, 종합운동장에서",
"2603/260308_113003.webp||구름의 향연, 종합운동장에서",
"2603/260308_113913.webp||대청봉, 조산에서",
"2603/260308_113919.webp||대청봉, 조산에서",
"2603/260308_113926.webp||구름의 향연, 조산에서",
"2603/260308_113928.webp||대청봉, 조산에서",
"2603/260308_122338.webp||구름의 향연, 청곡리에서",
"2603/260308_122540.webp||구교리 하늘",
"2603/260308_122618.webp||구름의 향연, 구교리에서",
"2603/260308_122619.webp||시, 하늘의 일필휘지",
"2603/260308_122633.webp||구름의 향연, 구교리에서",
"2603/260308_122639.webp||구름의 향연, 구교리에서",
"2603/260315_094801.webp||동백꽃, 동북 빌라에서",
"2603/260315_094802.webp||동백꽃, 동북 빌라에서",
"2603/260315_094817.webp||동백꽃, 동북 빌라에서",
"2603/260315_094818.webp||시, 봄의 인사",
"2603/260316_173808.webp||하늘, 종합운동장에서",
"2603/260316_175209.webp||하늘, 종합운동장에서",
"2603/260316_175234.webp||하늘, 종합운동장에서",
"2603/260316_175448.webp||하늘, 종합운동장에서",
"2603/260316_175501.webp||하늘, 종합운동장에서",
"2603/260316_175513.webp||하늘, 종합운동장에서",
"2603/260316_175634.webp||하늘, 종합운동장에서",
"2603/260316_180048.webp||하늘, 종합운동장 족구 돔구장",
"2603/260316_180113.webp||하늘, 종합운동장 족구 돔구장",
"2603/260316_180128.webp||하늘, 종합운동장 족구 돔구장",
"2603/260316_181221.webp||하늘, 종합운동장에서",
"2603/260316_181252.webp||하늘, 종합운동장에서",
"2603/260316_181305.webp||하늘, 종합운동장에서",
"2603/260316_181408.webp||매화, 종합운동장에서",
"2603/260316_181424.webp||매화, 종합운동장에서",
"2603/260316_181445.webp||매화, 종합운동장에서",
"2603/260316_181528.webp||소나무, 종합운동장에서",
"2603/260316_181543.webp||소나무, 종합운동장에서",
"2603/260316_181815.webp||하늘 도화지, 정아 2차 아파트",
"2603/260321_170015.webp||시, 마하반야바라밀다심경 01",
"2603/260321_170016.webp||시, 마하반야바라밀다심경 02",
"2603/260321_170017.webp||시, 마하반야바라밀다심경 03",
"2603/260329_094928.webp||백목련, 정아 1차 아파트 담장 안",
"2603/260329_094929.webp||백목련, 정아 1차 아파트 담장 안",
"2603/260329_094930.webp||시, 꽃과 나누는 봄날의 수다",
"2603/260329_094931.webp||시, 봄은 크게 오지 않는다",
"2603/260329_095015.webp||동백꽃, 동북 빌라에서",
"2603/260329_095025.webp||동백꽃, 동북 빌라에서",
"2603/260329_095033.webp||동백꽃, 동북 빌라에서",
"2603/260329_095040.webp||꽃, 동북 빌라에서",
"2603/260329_095112.webp||꽃, 동북 빌라에서",
"2603/260329_095128.webp||꽃, 동북 빌라에서",
"2603/260329_100940.webp||진달래, 모노골에서",
"2603/260329_101246.webp||새순, 모노골에서",
"2603/260329_101633.webp||진달래, 모노골에서",
"2603/260329_102511.webp||새순, 모노골에서",
"2603/260329_103950.webp||새순, 모노골에서",
"2603/260329_110429.webp||제비꽃, 모노골에서",
"2603/260329_110434.webp||제비꽃, 모노골에서",

"2604/260405_094643.webp||자목련, 구교리에서",
"2604/260405_094749.webp||꽃, 태산 아파트 앞에서",
"2604/260405_094804.webp||꽃, 태산 아파트 앞에서",
"2604/260405_095054.webp||꽃, 태산 아파트 앞에서",
"2604/260405_095256.webp||동백꽃, 동북빌라에서",
"2604/260405_095352.webp||민들레, 동북 빌라에서",
"2604/260405_100316.webp||산벚꽃, 모노골에서",
"2604/260405_100317.webp||시, 모노골, 다시 쓰는 하얀 설렘",
"2604/260405_100347.webp||꽃, 모노골에서",
"2604/260405_100351.webp||꽃, 모노골에서",
"2604/260405_100403.webp||꽃, 모노골에서",
"2604/260405_100543.webp||덩굴, 모노골에서",
"2604/260405_100552.webp||덩굴, 모노골에서",
"2604/260405_100952.webp||복사꽃, 모노골에서",
"2604/260405_101113.webp||복사꽃, 모노골에서",
"2604/260405_101123.webp||복사꽃, 모노골에서",
"2604/260405_101128.webp||복사꽃, 모노골에서",
"2604/260405_102124.webp||새순, 모노골에서",
"2604/260405_102931.webp||산벚꽃, 모노골에서",
"2604/260405_102948.webp||산벚꽃, 모노골에서",
"2604/260405_103001.webp||산벚꽃, 모노골에서",
"2604/260405_103009.webp||산벚꽃, 모노골에서",
"2604/260405_103014.webp||산벚꽃, 모노골에서",
"2604/260405_103024.webp||산벚꽃, 모노골에서",
"2604/260405_103254.webp||진달래, 모노골에서 - 예쁜 마음의 누군가가 빚어 놓은 하트",
"2604/260405_103258.webp||진달래, 모노골에서 - 예쁜 마음의 누군가가 빚어 놓은 하트",
"2604/260405_103506.webp||산벚꽃, 모노골에서",
"2604/260405_103523.webp||산벚꽃, 모노골에서",
"2604/260405_111701.webp||산벚꽃, 모노골에서",
"2604/260405_111707.webp||산벚꽃, 모노골에서",
"2604/260405_111718.webp||산벚꽃, 모노골에서",
"2604/260405_111726.webp||산벚꽃, 모노골에서",
"2604/260405_111738.webp||산벚꽃, 모노골에서",
"2604/260405_111808.webp||산벚꽃, 모노골에서",
"2604/260405_111810.webp||산벚꽃, 모노골에서",
"2604/260405_111841.webp||산벚꽃, 모노골에서",
"2604/260405_111850.webp||산벚꽃, 모노골에서",
"2604/260405_111920.webp||산벚꽃, 모노골에서",
"2604/260405_111935.webp||시, 고립 아닌 몰입",
"2604/260405_111936.webp||산벚꽃, 모노골에서",
"2604/260405_111942.webp||산벚꽃, 모노골에서",
"2604/260405_111950.webp||산벚꽃, 모노골에서",
"2604/260405_111957.webp||산벚꽃, 모노골에서",
"2604/260405_112015.webp||산벚꽃, 모노골에서",
"2604/260405_112020.webp||산벚꽃, 모노골에서",
"2604/260405_112028.webp||산벚꽃, 모노골에서",
"2604/260405_112056.webp||직박구리, 모노골에서",
"2604/260405_112136.webp||산벚꽃, 모노골에서",
"2604/260405_112140.webp||산벚꽃, 모노골에서",
"2604/260405_112152.webp||산벚꽃, 모노골에서",
"2604/260405_112200.webp||산벚꽃, 모노골에서",
"2604/260405_112206.webp||산벚꽃, 모노골에서",
"2604/260405_112214.webp||산벚꽃, 모노골에서",
"2604/260405_112217.webp||산벚꽃, 모노골에서",
"2604/260405_112218.webp||시, 봄의 설렘",
"2604/260405_112228.webp||산벚꽃, 모노골에서",
"2604/260405_112233.webp||산벚꽃, 모노골에서",
"2604/260405_112242.webp||산벚꽃, 모노골에서",
"2604/260405_113746.webp||진달래, 모노골에서",
"2604/260405_113919.webp||산벚꽃, 모노골에서",
"2604/260405_113933.webp||산벚꽃, 모노골에서",
"2604/260405_114208.webp||진달래, 모노골에서",
"2604/260405_114701.webp||진달래, 모노골에서",
"2604/260405_120120.webp||복사꽃, 모노골에서",
"2604/260405_120127.webp||복사꽃, 모노골에서",
"2604/260405_120233.webp||복사꽃, 모노골에서",
"2604/260405_120718.webp||산벚꽃, 모노골에서",
"2604/260405_120723.webp||산벚꽃, 모노골에서",
"2604/260405_120750.webp||괴목, 모노골에서",
"2604/260405_120825.webp||괴목, 모노골에서",
"2604/260405_120855.webp||꽃, 모노골에서",
"2604/260405_120934.webp||꽃, 모노골에서",
"2604/260405_120939.webp||꽃, 모노골에서",
"2604/260405_120950.webp||꽃, 모노골에서",
"2604/260405_130717.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_130806.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_131317.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_131338.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_131413.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_131413.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_131432.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_131438.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_131450.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_131522.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_131522.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_131833.webp||시, 하늘과 벚꽃",
"2604/260405_131852.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_131915.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_131935.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_131935_2.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_131951.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_132016.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_132115.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_132124.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_132144.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_132303.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_132544.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_132558.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_132656.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_132656.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_132704.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_132731.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_132819.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_132832.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_132839.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_132908.webp||시, 벚꽃의 이름표",
"2604/260405_132931.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_132946.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_133012.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_133036.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_133043.webp||시, 벚나무에 핀 글꽃",
"2604/260405_133049.webp||시, 벚나무 시인의 캡션",
"2604/260405_133139.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_133155.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_133233.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_133314.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_133345.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_133413.webp||시, 파란 하늘 위 벚꽃의 하얀 편지",
"2604/260405_133414.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_133420.webp||시, 벚꽃 가도의 봄",
"2604/260405_133421.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_133421_2.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_133442.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_133442_2.webp||시, 지금이라는 순간",
"2604/260405_133449.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_133502.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260405_133502_2.webp||시, 몰입의 봄",
"2604/260405_133517.webp||벚꽃, 제방뚝 벚꽃가도에서",
"2604/260406_172559.webp||꽃잔디, 양양 감리교회에서",
"2604/260406_172832.webp||꽃, 성내리에서",
"2604/260406_173322.webp||꽃, 정아2차 고개에서",
"2604/260406_173338.webp||꽃, 정아2차 고개에서",
"2604/260406_173408.webp||꽃, 정아2차 고개에서",
"2604/260406_173544.webp||홍매화, 정아2차 고개에서",
"2604/260406_173555.webp||홍매화, 정아2차 고개에서",
"2604/260406_173556.webp||홍매화, 정아2차 고개에서",
"2604/260406_173616.webp||홍매화, 정아2차 고개에서",
"2604/260406_173729.webp||홍매화, 정아2차 고개에서",
"2604/260406_173756.webp||홍매화, 정아2차 고개에서",
"2604/260406_173901.webp||수선화, 성내리에서",
"2604/260406_173926.webp||수선화, 성내리에서",
"2604/260406_173951.webp||수선화, 정아2차 고개에서",
"2604/260406_174002.webp||수선화, 성내리에서",
"2604/260406_174018.webp||수선화, 정아2차 고개에서",
"2604/260406_174036.webp||수선화, 성내리에서",
"2604/260406_174141.webp||철쭉, 양양 읍성 터널 도로변",
"2604/260406_174210.webp||철쭉, 양양 읍성 터널 도로변",
"2604/260406_174344.webp||시, 푸른 도화지의 봄",
"2604/260406_174345.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_174437.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_174441.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_174516.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_174548.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_174703.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_174756.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_174801.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_174812.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_174829.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_174842.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_175018.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_175040.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_175123.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_175135.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_175203.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_175247.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_175340.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_175420.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_175513.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_175544.webp||시, 하양 벚꽃 분홍 벚꽃",
"2604/260406_175607.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_175652.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_175843.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_175907.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_175956.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_180057.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_180133.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_180253.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_180320.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_180355.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_180400.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_180420.webp||시, 달라지는 봄",
"2604/260406_180437.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_180524.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_180617.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_180705.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_180739.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260406_180755.webp||벚꽃, 고치물 샘터에서",
"2604/260406_180911.webp||시, 벚꽃과 직박구리",
"2604/260406_180918.webp||시, 한 입 작아진 봄",
"2604/260406_180925.webp||직박구리, 고치물 샘터에서",
"2604/260406_180926.webp||직박구리, 고치물 샘터에서",
"2604/260406_180937.webp||시, 꽃잎 삼킨 미식가 1/4",
"2604/260406_180938.webp||시, 꽃잎 삼킨 미식가 2/4",
"2604/260406_181019.webp||시, 꽃잎 삼킨 미식가 3/4",
"2604/260406_181020.webp||시, 꽃잎 삼킨 미식가 4/4",
"2604/260406_181058.webp||벚꽃, 고치물 샘터에서",
"2604/260406_181127.webp||벚꽃, 고치물 샘터에서",
"2604/260406_181143.webp||벚꽃, 고치물 샘터에서",
"2604/260406_181221.webp||벚꽃, 고치물 샘터에서",
"2604/260406_181243.webp||벚꽃, 고치물 샘터에서",
"2604/260406_181253.webp||벚꽃, 고치물 샘터에서",
"2604/260406_181552.webp||벚꽃, 현산공원에서",
"2604/260406_181654.webp||벚꽃, 현산공원에서",
"2604/260407_174140.webp||나무와 하늘, 정아2차 고개에서",
"2604/260407_174141.webp||나무와 하늘, 정아2차 고개에서",
"2604/260407_174203.webp||나무와 하늘, 정아2차 고개에서",
"2604/260407_174241.webp||나무와 하늘, 정아2차 고개에서",
"2604/260407_174335.webp||나무와 하늘, 정아2차 고개에서",
"2604/260407_174520.webp||홍매화, 정아2차 고개에서",
"2604/260407_174547.webp||홍매화, 정아2차 고개에서",
"2604/260407_174548.webp||홍매화, 정아2차 고개에서",
"2604/260407_174658.webp||시, 조금 더 와 있는 봄",
"2604/260407_174736.webp||홍매화, 정아2차 고개에서",
"2604/260407_174807.webp||홍매화, 정아2차 고개에서",
"2604/260407_174808.webp||홍매화, 정아2차 고개에서",
"2604/260407_174926.webp||수선화, 정아2차 고개에서",
"2604/260407_174958.webp||수선화, 정아2차 고개에서",
"2604/260407_175022.webp||수선화, 정아2차 고개에서",
"2604/260407_175313.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_175405.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_175420.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_175530.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_175559.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_175624.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_175640.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_175717.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_175727.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_175808.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_175831.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_175936.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_175937.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_180007.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_180008.webp||시, 생동하는 희망의 언덕",
"2604/260407_180054.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_180146.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_180205.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_180252.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_180335.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_180404.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_180426.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_180453.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_180504.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_180521.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_180551.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_180612.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_180625.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_180640.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_180658.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_180715.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_180729.webp||글, 크로마키 하늘과 희망의 언덕 1/3",
"2604/260407_180730.webp||글, 크로마키 하늘과 희망의 언덕 2/3",
"2604/260407_180731.webp||글, 크로마키 하늘과 희망의 언덕 3/3",
"2604/260407_180907.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_181017.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_181102.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_181117.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_181236.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_181324.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_181414.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_181538.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_181723.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_181824.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_181850.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_182033.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_182056.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_182243.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_182320.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_182349.webp||벚꽃, 성황당 뒤 언덕에서",
"2604/260407_182425.webp||벚꽃, 고치물 샘터에서",
"2604/260407_182448.webp||벚꽃, 고치물 샘터에서",
"2604/260407_182523.webp||벚꽃, 고치물 샘터에서",
"2604/260407_182643.webp||벚꽃, 고치물 샘터에서",
"2604/260407_1831340_1.webp||시, 우리들의 현산은 여전히 하얀 설렘입니다 1/4",
"2604/260407_1831340_2.webp||시, 우리들의 현산은 여전히 하얀 설렘입니다 2/4",
"2604/260407_1831340_3.webp||시, 우리들의 현산은 여전히 하얀 설렘입니다 3/4",
"2604/260407_1831340_4.webp||시, 우리들의 현산은 여전히 하얀 설렘입니다 4/4",
"2604/260407_183139.webp||벚꽃, 현산공원에서",
"2604/260407_183237.webp||벚꽃, 현산공원에서",
"2604/260407_183309.webp||나무와 하늘, 현산공원에서",
"2604/260407_183406.webp||벚꽃, 현산공원에서",
"2604/260407_183430.webp||벚꽃, 현산공원에서",
"2604/260407_183437.webp||벚꽃, 현산공원에서",
"2604/260407_183444.webp||벚꽃, 현산공원에서",
"2604/260407_183503.webp||벚꽃, 현산공원에서",
"2604/260407_183620.webp||벚꽃, 현산공원에서",
"2604/260407_183621.webp||벚꽃, 현산공원에서",
"2604/260407_183653.webp||글, 벚꽃 여정의 마지막, 현산공원 1/2 🌸 송강이 즈려밟았다던 철쭉이 피어있는 길",
"2604/260407_183653_2.webp||글, 벚꽃 여정의 마지막, 현산공원 2/2 🌸 관동별곡의 송강 정철이 올랐던 곳",
"2604/260407_183654.webp||벚꽃, 현산공원에서",
"2604/260407_183654.webp||벚꽃, 현산공원에서",
"2604/260407_183733.webp||벚꽃, 현산공원에서",
"2604/260407_183738.webp||벚꽃, 현산공원에서",
"2604/260407_183753.webp||벚꽃, 현산공원에서",
"2604/260407_183847.webp||벚꽃, 현산공원에서",
"2604/260407_183854.webp||벚꽃, 현산공원에서",
"2604/260407_183918.webp||벚꽃, 현산공원에서",
"2604/260407_183919.webp||벚꽃, 현산공원에서",
"2604/260407_183932.webp||벚꽃, 현산공원에서",
"2604/260407_183933.webp||벚꽃, 현산공원에서",
"2604/260407_183957.webp||벚꽃, 현산공원에서",
"2604/260407_184015.webp||벚꽃, 현산공원에서",
"2604/260407_184015.webp||벚꽃, 현산공원에서",
"2604/260407_184052.webp||벚꽃, 현산공원에서",
"2604/260407_184201.webp||벚꽃, 현산공원에서",
"2604/260407_184202_1.webp||시, 현산, 그 품격에 대하여 1/4",
"2604/260407_184202_2.webp||시, 현산, 그 품격에 대하여 2/4",
"2604/260407_184202_3.webp||시, 현산, 그 품격에 대하여 3/4",
"2604/260407_184202_4.webp||시, 현산, 그 품격에 대하여 4/4",
"2604/260407_184216.webp||시, 우리라는 이름의 영원한 봄",
"2604/260407_184227.webp||벚꽃, 현산공원에서",
"2604/260407_184228.webp||벚꽃, 현산공원에서",
"2604/260407_184253.webp||벚꽃, 현산공원에서",
"2604/260407_184344.webp||벚꽃, 현산공원에서",
"2604/260407_184405.webp||벚꽃, 현산공원에서",
"2604/260407_184406.webp||벚꽃, 현산공원에서",
"2604/260407_184415.webp||벚꽃, 현산공원에서",
"2604/260407_184416.webp||벚꽃, 현산공원에서",
"2604/260412_094008.webp||박태기나무, 구교리에서",
"2604/260412_094009.webp||시, 이름 모를 꽃",
"2604/260412_094018.webp||박태기나무, 구교리에서",
"2604/260412_094027.webp||박태기나무, 구교리에서",
"2604/260412_094028.webp||박태기나무, 구교리에서",
"2604/260412_094113.webp||복사꽃, 구교리에서",
"2604/260412_094114.webp||복사꽃, 구교리에서",
"2604/260412_094124.webp||복사꽃, 구교리에서",
"2604/260412_094125.webp||복사꽃, 구교리에서",
"2604/260412_094141.webp||복사꽃, 구교리에서",
"2604/260412_100917.webp||복사꽃, 모노골에서",
"2604/260412_100928.webp||복사꽃, 모노골에서",
"2604/260412_100946.webp||복사꽃, 모노골에서",
"2604/260412_100954.webp||복사꽃, 모노골에서",
"2604/260412_101015.webp||복사꽃, 모노골에서",
"2604/260412_101157.webp||산벚꽃, 모노골에서",
"2604/260412_101203.webp||산벚꽃, 모노골에서",
"2604/260412_101506.webp||복사꽃, 모노골에서",
"2604/260412_101507.webp||복사꽃, 모노골에서",
"2604/260412_101516.webp||복사꽃, 모노골에서",
"2604/260412_101523.webp||복사꽃, 모노골에서",
"2604/260412_101558.webp||복사꽃, 모노골에서",
"2604/260412_101601.webp||복사꽃, 모노골에서",
"2604/260412_101602.webp||복사꽃, 모노골에서",
"2604/260412_102722.webp||먼 산, 모노골에서",
"2604/260412_102731.webp||먼 산, 모노골에서",
"2604/260412_102927.webp||복사꽃, 모노골에서",
"2604/260412_103033.webp||산벚꽃, 모노골에서",
"2604/260412_103051.webp||산벚꽃, 모노골에서",
"2604/260412_103055.webp||산벚꽃, 모노골에서",
"2604/260412_103103.webp||산벚꽃, 모노골에서",
"2604/260412_103254.webp||산벚꽃, 모노골에서",
"2604/260412_103304.webp||산벚꽃, 모노골에서",
"2604/260412_103334.webp||산벚꽃, 모노골에서",
"2604/260412_103342.webp||산벚꽃, 모노골에서",
"2604/260412_103352.webp||산벚꽃, 모노골에서",
"2604/260412_103424.webp||산벚꽃, 모노골에서",
"2604/260412_103434.webp||산벚꽃, 모노골에서",
"2604/260412_103637.webp||산벚꽃, 모노골에서",
"2604/260412_103643.webp||산벚꽃, 모노골에서",
"2604/260412_103658.webp||산벚꽃, 모노골에서",
"2604/260412_103707.webp||산벚꽃, 모노골에서",
"2604/260412_103815.webp||산벚꽃, 모노골에서",
"2604/260412_103822.webp||산벚꽃, 모노골에서",
"2604/260412_103834.webp||산벚꽃, 모노골에서",
"2604/260412_103910.webp||산벚꽃, 모노골에서",
"2604/260412_103950.webp||산벚꽃, 모노골에서",
"2604/260412_103955.webp||산벚꽃, 모노골에서",
"2604/260412_104008.webp||산벚꽃, 모노골에서",
"2604/260412_104106.webp||산벚꽃, 모노골에서",
"2604/260412_104121.webp||산벚꽃, 모노골에서",
"2604/260412_104131.webp||산벚꽃, 모노골에서",
"2604/260412_104137.webp||산벚꽃, 모노골에서",
"2604/260412_104206.webp||산벚꽃, 모노골에서",
"2604/260412_104613.webp||산철쭉, 모노골에서",
"2604/260412_104614.webp||산철쭉, 모노골에서",
"2604/260412_104615.webp||산철쭉, 모노골에서",
"2604/260412_104616.webp||산철쭉, 모노골에서",
"2604/260412_104618.webp||산철쭉, 모노골에서",
"2604/260412_104623.webp||산철쭉, 모노골에서",
"2604/260412_104635.webp||산철쭉, 모노골에서",
"2604/260412_110339.webp||복사꽃, 모노골 샘터에서",
"2604/260412_110346.webp||복사꽃, 모노골 샘터에서",
"2604/260412_110350.webp||복사꽃, 모노골 샘터에서",
"2604/260412_110356.webp||복사꽃, 모노골 샘터에서",
"2604/260412_110403.webp||복사꽃, 모노골 샘터에서",
"2604/260412_110404.webp||복사꽃, 모노골 샘터에서",
"2604/260412_110411.webp||복사꽃, 모노골 샘터에서",
"2604/260412_110422.webp||복사꽃, 모노골 샘터에서",
"2604/260412_110431.webp||복사꽃, 모노골 샘터에서",
"2604/260412_110448.webp||복사꽃, 모노골 샘터에서",
"2604/260412_111359.webp||산벚꽃, 모노골에서",
"2604/260412_111411.webp||산벚꽃, 모노골에서",
"2604/260412_111420.webp||산벚꽃, 모노골에서",
"2604/260412_111429.webp||산벚꽃, 모노골에서",
"2604/260412_111436.webp||산벚꽃, 모노골에서",
"2604/260412_111437.webp||산벚꽃, 모노골에서",
"2604/260412_111515.webp||산벚꽃, 모노골에서",
"2604/260412_111523.webp||산벚꽃, 모노골에서",
"2604/260412_111525.webp||산벚꽃, 모노골에서",
"2604/260412_111609.webp||산벚꽃, 모노골에서",
"2604/260412_111616.webp||산벚꽃, 모노골에서",
"2604/260412_111623.webp||산벚꽃, 모노골에서",
"2604/260412_111655.webp||산벚꽃, 모노골에서",
"2604/260412_111700.webp||산벚꽃, 모노골에서",
"2604/260412_111705.webp||산벚꽃, 모노골에서",
"2604/260412_111738.webp||산벚꽃, 모노골에서",
"2604/260412_111739.webp||산벚꽃, 모노골에서",
"2604/260412_111740.webp||산벚꽃, 모노골에서",
"2604/260412_111743.webp||산벚꽃, 모노골에서",
"2604/260412_111748.webp||산벚꽃, 모노골에서",
"2604/260412_111752.webp||산벚꽃, 모노골에서",
"2604/260412_111753.webp||산벚꽃, 모노골에서",
"2604/260412_112004.webp||산철쭉, 모노골에서",
"2604/260412_112013.webp||산철쭉, 모노골에서",
"2604/260412_112026.webp||산철쭉, 모노골에서",
"2604/260412_112031.webp||산철쭉, 모노골에서",
"2604/260412_112040.webp||산철쭉, 모노골에서",
"2604/260412_112245.webp||복사꽃, 모노골에서",
"2604/260412_112251.webp||복사꽃, 모노골에서",
"2604/260412_112300.webp||복사꽃, 모노골에서",
"2604/260412_112324.webp||먼 산, 모노골에서",
"2604/260412_112332.webp||먼 산, 모노골에서",
"2604/260412_113346.webp||복사꽃, 모노골에서",
"2604/260412_113349.webp||복사꽃, 모노골에서 🍃 꽃보다 잎사귀!",
"2604/260412_131250.webp||라일락, 구교리에서",
"2604/260412_131302.webp||라일락, 구교리에서",
"2604/260412_131311.webp||라일락, 구교리에서",
"2604/260412_131323.webp||라일락, 구교리에서",
"2604/260412_131345.webp||겹황매화 (죽단화), 구교리에서",
"2604/260412_131354.webp||겹황매화 (죽단화), 구교리에서",
"2604/260412_131406.webp||겹황매화 (죽단화), 구교리에서",
"2604/260412_131426.webp||겹황매화 (죽단화), 구교리에서",
"2604/260412_131433.webp||겹황매화 (죽단화), 구교리에서",
"2604/260412_131443.webp||겹황매화 (죽단화), 구교리에서",
"2604/260412_131452.webp||겹황매화 (죽단화), 구교리에서",
"2604/260412_131505.webp||라일락, 구교리에서",
"2604/260412_131513.webp||라일락, 구교리에서",
"2604/260412_131539.webp||라일락, 구교리에서",
"2604/260412_131544.webp||라일락, 구교리에서",
"2604/260412_131631.webp||튤립, 구교리에서",
"2604/260412_131640.webp||튤립, 구교리에서",
"2604/260412_131656.webp||튤립, 구교리에서",
"2604/260412_131657.webp||시, 지워지지 않는 시간",
"2604/260412_131717.webp||튤립, 구교리에서",
"2604/260412_131729.webp||튤립, 구교리에서",
"2604/260412_131734.webp||튤립, 구교리에서",
"2604/260412_131746.webp||수선화, 구교리에서",
"2604/260412_131802.webp||수선화, 구교리에서",
"2604/260412_131809.webp||수선화, 구교리에서",
"2604/260412_132057.webp||라일락, 구교리에서",
"2604/260412_132104.webp||라일락, 구교리에서",
"2604/260412_132112.webp||라일락, 구교리에서",
"2604/260412_132127.webp||라일락, 구교리에서",
"2604/260412_132139.webp||라일락, 구교리에서",
"2604/260413_182802.webp||꽃잔디, 구교리에서",
"2604/260413_182825.webp||시, 분홍빛 합창",
"2604/260413_182843.webp||꽃잔디, 구교리에서",
"2604/260413_182844.webp||시, 바위와 분홍빛 융단",
"2604/260413_182900.webp||꽃잔디, 구교리에서",
"2604/260413_183839.webp||수선화, 구교리에서",
"2604/260413_183845.webp||수선화, 구교리에서",
"2604/260413_183853.webp||수선화, 구교리에서",
"2604/260413_183900.webp||수선화, 구교리에서",
"2604/260413_183920.webp||꽃사과나무, 구교리에서",
"2604/260413_183928.webp||꽃사과나무, 구교리에서",
"2604/260413_184149.webp||겹조팝나무, 구교리에서",
"2604/260413_184155.webp||겹조팝나무, 구교리에서",
"2604/260413_184205.webp||겹조팝나무, 구교리에서",
"2604/260413_184219.webp||수선화, 구교리에서",
"2604/260413_184227.webp||수선화, 구교리에서",
"2604/260413_184237.webp||수선화, 구교리에서",
"2604/260413_184244.webp||시, 순결한 솜사탕",
"2604/260413_184251.webp||겹조팝나무, 구교리에서",
"2604/260413_184302.webp||겹조팝나무, 구교리에서",
"2604/260413_184317.webp||수선화, 구교리에서",
"2604/260413_184348.webp||라일락, 구교리에서",
"2604/260413_184627.webp||겹황매화 (죽단화), 정아1차 앞에서",
"2604/260413_184635.webp||겹황매화 (죽단화), 정아1차 앞에서",
"2604/260413_184644.webp||겹황매화 (죽단화), 정아1차 앞에서",
"2604/260413_184658.webp||겹황매화 (죽단화), 정아1차 앞에서",
"2604/260413_184703.webp||겹황매화 (죽단화), 정아1차 앞에서",
"2604/260413_184710.webp||겹황매화 (죽단화), 정아1차 앞에서",
"2604/260413_184729.webp||겹황매화 (죽단화), 정아1차 앞에서",
"2604/260413_184737.webp||겹황매화 (죽단화), 정아1차 앞에서",
"2604/260413_184741.webp||겹황매화 (죽단화), 정아1차 앞에서",
"2604/260413_184801.webp||겹황매화 (죽단화), 정아1차 앞에서",
"2604/260413_184815.webp||겹황매화 (죽단화), 정아1차 앞에서",
"2604/260413_184832.webp||겹황매화 (죽단화), 정아1차 앞에서",
"2604/260413_184904.webp||겹황매화 (죽단화), 정아1차 앞에서",
"2604/260413_185306.webp||저녁놀, 종합운동장 육교에서",
"2604/260413_185314.webp||저녁놀, 종합운동장 육교에서",
"2604/260413_185350.webp||저녁놀, 종합운동장 육교에서",
"2604/260413_190533.webp||라일락, 종합운동장 도로변에서",
"2604/260413_190547.webp||라일락, 종합운동장 도로변에서",
"2604/260413_190600.webp||라일락, 종합운동장 도로변에서",
"2604/260413_190615.webp||라일락, 종합운동장 도로변에서",
"2604/260413_190626.webp||라일락, 종합운동장 도로변에서",
"2604/260413_190631.webp||라일락, 종합운동장 도로변에서",
"2604/260413_190700.webp||라일락, 종합운동장 도로변에서",
"2604/260413_190719.webp||라일락, 종합운동장 도로변에서",
"2604/260413_190733.webp||라일락, 종합운동장 도로변에서",
"2604/260413_190745.webp||라일락, 종합운동장 도로변에서",
"2604/260413_190759.webp||라일락, 종합운동장 도로변에서",
"2604/260419_094859.webp||시, 바위 앞의 봄",
"2604/260419_094902.webp||수선화, 구교리에서",
"2604/260419_094903.webp||수선화, 구교리에서",
"2604/260419_094914.webp||시, 시골 마당",
"2604/260419_094926.webp||수선화, 구교리에서",
"2604/260419_094942.webp||꽃사과나무, 구교리에서",
"2604/260419_094943.webp||꽃사과나무, 구교리에서",
"2604/260419_095059.webp||겹조팝나무, 구교리에서",
"2604/260419_095103.webp||겹조팝나무, 구교리에서",
"2604/260419_095113.webp||겹조팝나무, 구교리에서",
"2604/260419_095114.webp||시, 오랍뜰 솜사탕",
"2604/260419_101054.webp||겹황매화 (죽단화), 모노골에서",
"2604/260419_101103.webp||겹황매화 (죽단화), 모노골에서",
"2604/260419_101111.webp||겹황매화 (죽단화), 모노골에서",
"2604/260419_101122.webp||겹황매화 (죽단화), 모노골에서",
"2604/260419_104936.webp||산철쭉, 모노골에서",
"2604/260419_104947.webp||산철쭉, 모노골에서",
"2604/260419_105137.webp||산철쭉, 모노골에서",
"2604/260419_105147.webp||산철쭉, 모노골에서",
"2604/260419_112908.webp||산철쭉, 모노골에서",
"2604/260419_112954.webp||산철쭉, 모노골에서",
"2604/260419_113008.webp||산철쭉, 모노골에서",
"2604/260419_113016.webp||산철쭉, 모노골에서",
"2604/260419_113044.webp||산철쭉, 모노골에서",
"2604/260419_113050.webp||산철쭉, 모노골에서",
"2604/260419_113058.webp||산철쭉, 모노골에서",
"2604/260419_113106.webp||산철쭉, 모노골에서",
"2604/260419_114245.webp||산철쭉, 모노골에서",
"2604/260419_114253.webp||산철쭉, 모노골에서",
"2604/260419_122403.webp||조팝나무, 모노골에서",
"2604/260419_122406.webp||조팝나무, 모노골에서",
"2604/260419_122414.webp||조팝나무, 모노골에서",
"2604/260419_122420.webp||조팝나무, 모노골에서",
"2604/260419_122429.webp||조팝나무, 모노골에서",
"2604/260419_122433.webp||조팝나무, 모노골에서",
"2604/260419_122439.webp||조팝나무, 모노골에서",
"2604/260419_122457.webp||조팝나무, 모노골에서",
"2604/260419_122531.webp||시, 풍요의 나무, 이팝",
"2604/260419_122543.webp||조팝나무, 모노골에서",
"2604/260419_122545.webp||조팝나무, 모노골에서",
"2604/260419_122601.webp||조팝나무, 모노골에서",
"2604/260419_122602.webp||조팝나무, 모노골에서",
"2604/260424_112127.webp||서양철쭉, 남문리에서",
"2604/260424_112128.webp||서양철쭉, 남문리에서",
"2604/260424_112131.webp||서양철쭉, 남문리에서",
"2604/260424_112136.webp||서양철쭉, 남문리에서",
"2604/260424_112144.webp||서양철쭉, 남문리에서",
"2604/260424_112154.webp||서양철쭉, 남문리에서",
"2604/260424_112204.webp||서양철쭉, 남문리에서",
"2604/260424_112213.webp||서양철쭉, 남문리에서",
"2604/260424_112334.webp||목단 (모란), 남문리에서",
"2604/260424_112338.webp||목단 (모란), 남문리에서",
"2604/260424_112345.webp||목단 (모란), 남문리에서",
"2604/260424_112354.webp||목단 (모란), 남문리에서",
"2604/260424_112404.webp||목단 (모란), 남문리에서",
"2604/260424_112405.webp||시, 담장 안 도도함의 비밀",
]
