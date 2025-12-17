const title0 = "강상 '소년시대' 시리즈 삽입곡"

odi = [
"https://cdn1.suno.ai/d944e335-4207-4101-afe6-2931427812b6.mp3|[포크] 소년시대, 그 아득한 날들.. (포크 발라드)_M02|",
"https://cdn1.suno.ai/59ddd8aa-8a81-49ae-b2ee-d8440d1eca1d.mp3|[포크] 강릉 단오제 고교축구 라이벌 상농전 (오케스트라)_M04|",
"https://cdn1.suno.ai/3c4e4fd1-fa08-4be6-9c80-e2ae0ecad084.mp3|*[포크] 상농전, 그 푸른 붉은 물결 (7080 포크 70bpm)_M11|",
"https://cdn1.suno.ai/dca1b62a-b510-44ba-b3ad-df81e9afb43b.mp3|[포크] 1학년 신입생의 설움 (포크 발라드)_M09|",
"https://cdn1.suno.ai/f119c0e4-f6ef-4018-9308-3301e8ea4a26.mp3|*[포크] 음악실 앞의 그림자 (어쿠스틱 기타)_W01|",
"https://cdn1.suno.ai/a1a7bc1c-45be-4b4f-bc66-bb92e40b7f88.mp3|[포크] 고교 시절 선배들의 군기 (통기타 포크)_M12|",
"https://cdn1.suno.ai/6f6ea4af-fca3-446e-93ba-33cea5916c66.mp3|*[포크] 감초 선생님과의 월담 (포크송)_M04|",
"https://cdn1.suno.ai/05b9f5d8-570d-44f8-8fc0-256d4f2b4b04.mp3|[포크] 홍제동에서의 객지 설움 (포크송)_M07|",
"https://cdn1.suno.ai/30f4ee9f-fdf7-4b89-a459-43f2ea3886cb.mp3|*[포크] 멋쟁이 기타리스트를 꿈꾸며.. (포크송)_W02|",
"https://cdn1.suno.ai/1eca5072-bc9b-44bd-87c2-39e0c7c6a8ba.mp3|*[포크] 고삐 풀린 영화 매니아 (재밌는 포크송)_M18|",
"https://cdn1.suno.ai/6ef1b17e-0375-4ca2-9009-25131d537737.mp3|*[포크] 도민체전 마스게임, 나의 긍지 (7080 포크송 kch)_MW05|255",
"https://cdn1.suno.ai/4ad84a38-c6ad-42c1-ab8f-323e6ceae0ce.mp3|*[포크] 반공일 재낀 설악산 이야기 (록 포크송)_WM01|",
"https://cdn1.suno.ai/fc91b2be-fb47-46cb-b21e-4c4717c61902.mp3|*[포크] 강릉상고 축구의 전성기 (브라스)_M01|",
"https://cdn1.suno.ai/41b1e1c1-9c45-481a-a863-ec78af360981.mp3|*[포크] 열여섯 살 펜팔 소년 (7080 포크송)_M04|",
"https://cdn1.suno.ai/7c837185-f7e4-45b3-a563-64044208b3f7.mp3|*[포크] 난리 부르스 수학여행 (코미디 영화 음악)_M13|",
"https://cdn1.suno.ai/dcdeaee1-3e83-4628-80b1-f7c7acc88405.mp3|[포크] 소년시대의 철부지 싸움 (포크 록)_M01|",
"https://cdn1.suno.ai/9de33817-0abb-46d3-9276-e8a928697466.mp3|*[포크] 고3, 실망하신 아버지의 편지 (우울한 기타)_M20|",
"https://cdn1.suno.ai/6c0766ef-b360-4e53-8fb2-9d1cde4b8e2f.mp3|*[포크] 고교 시절의 '덕찬 육천지교' (70년대 포크 록)_M04|",
"https://cdn1.suno.ai/c3301159-0a40-4d02-8cdc-55622975ef04.mp3|*[포크] 심성 착한 완수 이야기 (포크 록 발라드)_M10|",
"https://cdn1.suno.ai/c5cf9049-9105-43f4-adac-96d02139167d.mp3|*[포크] 희야를 만났던 '설악산 로망스' (드라마틱한 영화)_M03|268",
"https://cdn1.suno.ai/4d22c524-c28d-4192-9e38-3872fa13f58f.mp3|*[포크] 설악산 1주년에 만난 희야의 편지 (기타 중심의 회상)_W02|",
"https://cdn1.suno.ai/ba13dad6-7367-4158-ba19-d844f004282a.mp3|[포크] 내 서랍 속 추억의 편지 (인디 포크  발라드)_W01|",
"https://cdn1.suno.ai/0fefaa74-cc3f-4167-b5be-06dd840b5784.mp3|[포크] 봉투 속의 마음 (어쿠스틱 기타)_W02|238",
"https://cdn1.suno.ai/35ca5d6f-c9e5-412e-a2c6-9773728a5318.mp3|[포크] 편지, 그 추억의 날들.. (7080 포크송)_M03|",
"https://cdn1.suno.ai/5c39c235-f4ab-4769-a6b5-22bc2ac6ee41.mp3|*[포크] 해태 퍼모스트의 연서 (70년대 포크팝)_M01|",
"https://cdn1.suno.ai/6dcabcce-34c6-4d83-a567-ef262fc67438.mp3|*[포크] 강릉 밥 서울 똥? 달부어엽구나~ (70년대 포크팝)_M07|",
"https://cdn1.suno.ai/c435b417-9f6e-4a01-8e70-44695f2f7277.mp3|*[포크] 소년시대, 그 추억의 조각들 (포크 발라드)_M02|",
"https://cdn1.suno.ai/72d9acd4-96f0-416d-90c1-55078d8bda25.mp3|*[포크] 소년시대, 찬란했던 날들 (포크팝)_M04|",
"https://cdn1.suno.ai/af872bd9-460d-42bd-a5f9-5e4ded92d3db.mp3|*[트롯] 강릉 단오제 고교축구 라이벌 상농전 (트로트)_MW04|",
"https://cdn1.suno.ai/47c9bf5c-f283-492a-95b2-6d7969edea76.mp3|*[트롯] 청룡과 백호의 날, 상농전 (트로트)_MW01|",
"https://cdn1.suno.ai/16708f9f-0deb-4b1c-b9f4-52dfe2726f09.mp3|*[트롯] 상농전, 그 푸른 붉은 물결 (트로트)_MW02|",
"https://cdn1.suno.ai/54ee3892-70a6-40ca-939c-06705f1751b6.mp3|*[트롯] 청룡과 백호, 다정한 맞수 상농전 (트로트)_MW07|",
"https://cdn1.suno.ai/16aee058-d0ec-447a-834f-15b547d1c46e.mp3|*[트롯] 1학년 신입생의 설움 (트로트)_M11|",
"https://cdn1.suno.ai/fb28b5b5-0880-49c4-8f6c-e522f02bcab1.mp3|*[트롯] 어리버리 1학년의 설움 (트로트)_MW02|",
"https://cdn1.suno.ai/f941e5c0-a9c4-40ce-ab75-9022118b97b5.mp3|*[트롯] 음악실 앞의 그림자 (트로트)_MW07|",
"https://cdn1.suno.ai/6243da43-be4e-451f-8576-a7e05a2eb56f.mp3|*[트롯] 고교 시절 선배들의 군기 (트로트)_MW06|",
"https://cdn1.suno.ai/3dfdc356-a012-44fc-adcd-cec5323acdb5.mp3|*[트롯] 감초 선생님과의 월담 (트로트)_M15|",
"https://cdn1.suno.ai/813af1c1-25d7-4d6b-bb70-4f3ab39d0cfd.mp3|*[트롯] 홍제동에서의 객지 설움 (트로트)_MW02|178",
"https://cdn1.suno.ai/e2b6f36f-3b9b-42cf-be5c-9fcc9702e8ab.mp3|*[트롯] 멋쟁이 기타리스트를 꿈꾸며.. (트로트)_W05|",
"https://cdn1.suno.ai/70aba0e0-7b0c-4f78-8ea9-0fc16562d4ea.mp3|*[트롯] 고삐 풀린 영화 매니아 (트로트)_M10|",
"https://cdn1.suno.ai/794d5027-991c-4cff-a982-e3b3bfb7061e.mp3|*[트롯] 도민체전 마스게임, 나의 긍지 (트로트)_W03|",
"https://cdn1.suno.ai/0207b74a-76b2-4eba-9d8c-b61c6e78fe54.mp3|*[트롯] 반공일 재낀 설악산 이야기 (트로트)_W16|",
"https://cdn1.suno.ai/2d2eef06-99a3-4ffc-9264-a46922a046c7.mp3|*[트롯] 강릉상고 축구의 전성기 (트로트)_M12|",
"https://cdn1.suno.ai/70cb6e44-57db-4823-a0ca-890d76942798.mp3|*[트롯] 열여섯 살 펜팔 소년 (트로트)_W04|",
"https://cdn1.suno.ai/d0192415-a4f9-4241-baad-7f944838c07e.mp3|*[트롯] 난리 부르스 수학여행 (트로트)_MW01|",
"https://cdn1.suno.ai/063cf202-d17e-4165-929a-403143945f99.mp3|*[트롯] 소년시대의 철부지 싸움 (트로트)_M12|",
"https://cdn1.suno.ai/9cd1eee9-06d4-4286-85a2-893b137a88f7.mp3|*[트롯] 친구 따라 간 '옥거리' 로망스 (트로트)_W06|",
"https://cdn1.suno.ai/f2e4a532-37ae-4fd2-9dff-982568e77337.mp3|*[트롯] 하숙생들의 일탈, 향토 장학금 (트로트)_MW05|",
"https://cdn1.suno.ai/0e91bc72-2a64-4b21-bd42-e5be2a45b271.mp3|*[트롯] 고교 시절의 '덕찬 육천지교' (트로트)_MW01|",
"https://cdn1.suno.ai/6d5ffd55-43e8-428a-8c6f-630d3a37801f.mp3|*[트롯] 심성 착한 완수 이야기 (트로트)_MW01|",
"https://cdn1.suno.ai/18ee1d3f-6383-4163-bd13-7eb9e2804095.mp3|*[트롯] 희야를 만났던 '설악산 로망스' (트로트)_M08|",
"https://cdn1.suno.ai/7d4375c1-b9da-464d-bf7b-91f52c812f0f.mp3|*[트롯] 설악산 1주년에 만난 희야의 편지 (트로트 90bpm)_MW05|",
"https://cdn1.suno.ai/00d32f45-fd5f-41f0-ab79-7bd39eca57c2.mp3|*[트롯] 내 서랍 속 추억의 편지 (트로트)_W05|",
"https://cdn1.suno.ai/d37eb17e-c6b8-4fac-b829-92ab08082c39.mp3|*[트롯] 편지, 그 추억의 날들.. (트로트)_MW02|",
"https://cdn1.suno.ai/6d778a5b-d240-4830-874e-9f4daede3668.mp3|*[트롯] 도용당한 연서의 자초지종 (트로트)_W01|",
"https://cdn1.suno.ai/5c6144a1-ff69-46e0-9283-44718e5ce8a2.mp3|*[트롯] 해태 퍼모스트의 연서 (트로트)_W04|",
"https://cdn1.suno.ai/e99d0f31-fcd5-48a4-bb6f-26c7904cdfc5.mp3|*[트롯] 강릉 밥 서울 똥? 달부어엽구나~ (트로트 90bpm)_MW03|",
"https://cdn1.suno.ai/713b8faf-feb1-4730-a3af-2099991e04f7.mp3|*[트롯] 소년시대, 그 추억의 조각들 (트로트)_MW03|",
"https://cdn1.suno.ai/fc1c9496-d39d-4641-bd2e-db376e17c0d9.mp3|*[트롯] 소년시대, 찬란했던 날들 (트로트)_MW05|",
"https://cdn1.suno.ai/d608b0c0-323e-4d0f-9494-c8e8869e1375.mp3|*[트롯댄스] 강릉 단오제 고교축구 라이벌 상농전 (행진)_M30|",
"https://cdn1.suno.ai/4a9f1be0-b726-451e-b643-29d21f1b55af.mp3|[트롯댄스] 청룡과 백호, 다정한 맞수 상농전 (트로트 90bpm)_MW03|",
"https://cdn1.suno.ai/ac997247-dc74-4235-bcb1-f1f73522cd18.mp3|*[트롯댄스] 도민체전 마스게임, 나의 긍지 (트로트 댄스)_MW04|",
"https://cdn1.suno.ai/eb72e795-6028-45eb-ba29-c3664fe1538c.mp3|*[트롯댄스] 열여섯 살 펜팔 소년 (트로트 댄스)_MW03|",
"https://cdn1.suno.ai/583e7fb9-8ad1-406c-80c1-3c7605ebb69e.mp3|*[트롯댄스] 난리 부르스 수학여행 (트로트 댄스)_MW03|",
"https://cdn1.suno.ai/00d22e3c-b561-480b-945d-bc7a8fcad6f3.mp3|*[트롯댄스] 소년시대의 철부지 싸움 (트로트 댄스)_MW02|",
"https://cdn1.suno.ai/f9a9c89e-e05d-4bbe-8504-704f6ab7bf84.mp3|*[트롯댄스] 친구 따라 간 '옥거리' 로망스 (트로트 댄스)_MW03|",
"https://cdn1.suno.ai/2e487d73-1ef2-45d8-8b88-bd2f1cbcbdf9.mp3|*[트롯댄스] 하숙생들의 일탈, 향토 장학금 (트로트 댄스)_MW10|",
"https://cdn1.suno.ai/eff99ea7-f19d-4351-b7d4-464bc7389d1c.mp3|*[트롯댄스] 고교 시절의 '덕찬 육천지교' (트로트 댄스)_MW03|",
"https://cdn1.suno.ai/f5749954-1918-4753-bc1f-ffe108af5d50.mp3|*[트롯댄스] 희야를 만났던 '설악산 로망스' (트로트 댄스)_WM02|",
"https://cdn1.suno.ai/a1159fa7-ae5f-4489-bc65-16ce8eaa2d94.mp3|*[트롯댄스] 설악산 1주년에 만난 희야의 편지 (트로트 댄스)_MW04|",
"https://cdn1.suno.ai/d3a5a4b8-f679-458e-896b-16804a5a560d.mp3|*[트롯댄스] 내 서랍 속 추억의 편지 (트로트 댄스)_MW04|",
"https://cdn1.suno.ai/34479b2d-f0cc-450a-af12-f3de61f71edb.mp3|*[트롯댄스] 봉투 속의 마음 (트로트 댄스)_MW02|",
"https://cdn1.suno.ai/7413e45c-09f7-438d-879d-2841d599d1ef.mp3|*[트롯댄스] 편지, 그 추억의 날들.. (트로트 댄스)_MW07|",
"https://cdn1.suno.ai/d9f97cb6-7fd1-4f07-807c-f3367d668287.mp3|*[트롯댄스] 도용당한 연서의 자초지종 (트로트 댄스)_MW06|",
"https://cdn1.suno.ai/d0a18d38-fa43-4f20-b6aa-edba9f09418c.mp3|*[브라스] 강릉 단오제 고교축구 라이벌 상농전 (브라스)_M29|",
"https://cdn1.suno.ai/e84751cf-402d-4c71-841c-106371464e77.mp3|*[브라스] 청룡과 백호의 날, 상농전 (브라스)_M04|",
"https://cdn1.suno.ai/ee499948-f2fa-4ca2-ab2a-ad5654ef341b.mp3|*[브라스] 상농전, 그 푸른 붉은 물결 (브라스)_M06|",
"https://cdn1.suno.ai/173c01ce-380a-4253-8236-a83dd7045279.mp3|*[브라스] 청룡과 백호, 다정한 맞수 상농전 (브라스)_M01|",
"https://www.dropbox.com/scl/fi/7awv623r99jws1715vkt4/kch-_M12.mp3?rlkey=epdxcvt8l6sryoxa793psfkca&st=x3jgxo8v&raw=1|*[브라스] 도민체전 마스게임, 나의 긍지 (브라스 KCH)_M12|206",
"https://cdn1.suno.ai/0d635586-6716-4eb2-b81a-e06647c38b24.mp3|*[브라스] 반공일 재낀 설악산 이야기 (브라스)_M05|",
"https://www.dropbox.com/scl/fi/smbu5p2d4z3csnb8tak9u/_M33.mp3?rlkey=ews88logdxqcmvhsnu7jzj43k&st=upnhfozz&raw=1|*[브라스] 강릉상고 축구의 전성기 (브라스 KCH)_M33|",
"https://cdn1.suno.ai/08093cea-09ec-4f7c-9ffb-e0982221b42b.mp3|*[미분류] 소년시대, 그 아득한 날들.. (신스팝)_W01|",
"https://cdn1.suno.ai/aee92ff4-6906-4cc2-87a7-12807842f457.mp3|*[미분류] 강릉 단오제 고교축구 라이벌 상농전 (브라스)_M16|",
"https://cdn1.suno.ai/b233babf-d6ca-4ff2-9cf5-6df499f3d46b.mp3|[미분류] 상농전, 그 푸른 붉은 물결 (레트로 K팝)_M02|",
"https://cdn1.suno.ai/285a626d-0674-44b7-afcb-b364251544f4.mp3|[미분류] 청룡과 백호, 다정한 맞수 상농전 (에모팝)_M05|",
"https://cdn1.suno.ai/83f69986-70c6-467b-87a7-8918027da0aa.mp3|[미분류] 1학년 신입생의 설움 (신스팝)_MW04|",
"https://cdn1.suno.ai/a7e7721a-247b-4fb8-bb35-8372ed1281dd.mp3|[미분류] 고교 시절 선배들의 군기 (레트로 팝)_M05|",
"https://cdn1.suno.ai/57ae16e9-abcb-4348-a678-efdd0e41d76a.mp3|*[미분류] 감초 선생님과의 월담 (코미디 영화)_W01|",
"https://cdn1.suno.ai/e5761086-a9ad-464c-be3a-ae7350f74db7.mp3|[미분류] 멋쟁이 기타리스트를 꿈꾸며.. (기타 중심의 회상)_W03|",
"https://cdn1.suno.ai/390b02c8-aa33-4740-a0fc-820ed5b600d0.mp3|*[미분류] 고삐 풀린 영화 매니아 (유머러스 포크)_M16|",
"https://cdn1.suno.ai/e5cd0d61-62c0-439d-b329-032bf2f74d96.mp3|[미분류] 도민체전 마스게임, 나의 긍지 (브라스)_M03|",
"https://cdn1.suno.ai/d0e5df36-01d8-473c-b35b-e1aaa305a0b7.mp3|*[미분류] 반공일 재낀 설악산 이야기 (에모팝)_M03|",
"https://cdn1.suno.ai/34961ce4-2cd5-483f-8119-ae8ad18d3d39.mp3|*[미분류] 강릉상고 축구의 전성기 (브라스 kch)_M31   노래|",
"https://cdn1.suno.ai/f96fccf7-d646-41cb-aad8-596582faf44d.mp3|*[미분류] 난리 부르스 수학여행 (록 앤섬)_M12|",
"https://cdn1.suno.ai/dc26c2ee-ad28-4444-a3db-76729b6bb2cc.mp3|*[미분류] 친구 따라 간 '옥거리' 로망스 (코믹한 스토리)_M06|",
"https://cdn1.suno.ai/4a92b057-f407-420c-af3d-b8c83cad52f7.mp3|*[미분류] 하숙생들의 일탈, 향토 장학금 (인디 팝)_MW02|",
"https://cdn1.suno.ai/d7c4b913-bb19-429d-8b89-4a349a38eeb0.mp3|[미분류] 고3, 실망하신 아버지의 편지 (바이올린 신스팝)_M27|",
"https://cdn1.suno.ai/ef2a3f07-fda9-4363-ae54-0f21c7aa90f4.mp3|*[미분류] 고교 시절의 '덕찬 육천지교' (코믹 영화)_M08|",
"https://cdn1.suno.ai/6ccdf1b1-5c87-47a7-b121-96ceb41e6c42.mp3|[미분류] 심성 착한 완수 이야기 (인디 팝)_M06|",
"https://cdn1.suno.ai/b58f49b5-4a41-4de0-aaf4-af0a7d8c1f89.mp3|*[미분류] 희야를 만났던 '설악산 로망스' (레트로 팝 록)_M01|",
"https://cdn1.suno.ai/3e43b007-9075-4c17-b3af-3d3298d3c16c.mp3|*[미분류] 설악산 1주년에 만난 희야의 편지 (신스팝)_MW02|",
"https://cdn1.suno.ai/fe98f523-3f33-46a8-968a-8e8c47fbcf60.mp3|[미분류] 도용당한 연서의 자초지종 (어쿠스틱 팝)_M04|",
"https://cdn1.suno.ai/5698bc3e-adb2-4b6b-8147-3b6e6c07d16a.mp3|*[미분류] 해태 퍼모스트의 연서 (코믹 미스터리 영화)_MW07|",
"https://cdn1.suno.ai/40a06e8d-503d-4388-b5e1-fb41ebdfddf9.mp3|*[미분류] 강릉 밥 서울 똥? 달부어엽구나~ (코믹 드라마틱한 영화)_M04|",
"https://cdn1.suno.ai/9fe0e069-2b3d-4508-a36f-6f4c10b91cb8.mp3|*[미분류] 소년시대, 그 추억의 조각들 (레트로 팝)_M04|",
"https://cdn1.suno.ai/4fc40f71-9ff8-49f3-aa98-3173b0860e96.mp3|*[미분류] 소년시대, 찬란했던 날들 (인디 팝)_M02|",
"https://cdn1.suno.ai/c1bd1aee-de71-4457-bb92-c9b038f0a3f2.mp3|[트롯발라드] 소년시대, 그 아득한 날들.. (트로트 발라드)_MW14|",
"https://cdn1.suno.ai/defa3ff8-225f-4143-b22d-cf863850d7b6.mp3|[트롯발라드] 청룡과 백호, 다정한 맞수 상농전 (트로트)_MW01|",
"https://cdn1.suno.ai/1d6ad60b-d086-4c1f-9ccd-195b06cc30f6.mp3|*[트롯발라드] 1학년 신입생의 설움 (트로트 발라드)_M08|",
"https://cdn1.suno.ai/6b8a20a6-641f-46f7-926d-5217067f2757.mp3|[트롯발라드] 음악실 앞의 그림자 (트로트)_MW08|",
"https://cdn1.suno.ai/ec521c3e-ace7-4926-86c3-33f1f9978643.mp3|*[트롯발라드] 고교 시절 선배들의 군기 (트로트)_MW05|",
"https://cdn1.suno.ai/33f4440a-884a-4ce4-afbc-3af37795db1e.mp3|[트롯발라드] 멋쟁이 기타리스트를 꿈꾸며.. (트로트 발라드)_M08|",
"https://cdn1.suno.ai/73a920fa-ac86-42be-b187-a18e5f14d97d.mp3|[트롯발라드] 고삐 풀린 영화 매니아 (레트로 포크)_M02|162",
"https://cdn1.suno.ai/36fd0908-a3c9-474f-9c51-5eb5b74cf7cc.mp3|[트롯발라드] 도민체전 마스게임, 나의 긍지 (트로트)_M06|",
"https://cdn1.suno.ai/0536dbc6-cba7-4d3a-9d7e-51fa6e675536.mp3|*[트롯발라드] 강릉상고 축구의 전성기 (발라드)_M18|",
"https://cdn1.suno.ai/4c465f9b-aec1-42d0-b149-a54023ee5567.mp3|*[트롯발라드] 소년시대의 철부지 싸움 (트로트 발라드)_M11|",
"https://cdn1.suno.ai/91069710-0eb8-459f-bf4c-676e2a02e946.mp3|*[트롯발라드] 하숙생들의 일탈, 향토 장학금 (트로트)_MW04|",
"https://cdn1.suno.ai/63905c4b-a06b-4f96-93ad-8f8ee4292946.mp3|*[트롯발라드] 고3, 실망하신 아버지의 편지 (트로트 발라드)_M25|",
"https://cdn1.suno.ai/c57132e3-61bd-43d3-be12-d5f50a1895be.mp3|*[트롯발라드] 봉투 속의 마음 (트로트 발라드)_MW04|",
"https://cdn1.suno.ai/09b115b1-d00d-4649-b2d6-083815c36431.mp3|*[트롯발라드] 편지, 그 추억의 날들.. (트로트 발라드)_MW05|",
"https://cdn1.suno.ai/2decabd6-86e4-4256-89ad-5730978ea040.mp3|*[트롯발라드] 도용당한 연서의 자초지종 (트로트 발라드)_MW04|",
"https://cdn1.suno.ai/f89b4740-f0e2-4314-ab2a-e6188f7bca33.mp3|*[트롯발라드] 해태 퍼모스트의 연서 (트로트 클래식)_MW02|",
"https://cdn1.suno.ai/fceb2f8b-dc75-48c2-b054-df9d67d83eaf.mp3|*[트롯발라드] 소년시대, 그 추억의 조각들 (트로트 발라드)_MW02|",
"https://cdn1.suno.ai/7d7a65ed-5049-40d4-ab4d-beb67a0f998f.mp3|*[트롯발라드] 소년시대, 찬란했던 날들 (트로트 90bpm)_MW01|",
"https://cdn1.suno.ai/34b8e612-1dd3-4cf7-bc5e-3948d7fd657b.mp3|*[발라드] 소년시대, 그 아득한 날들.. (바이올린 드럼)_MW01|",
"https://cdn1.suno.ai/0e218fe8-faf4-4532-8d8f-69fa3e67499b.mp3|[발라드] 상농전, 그 푸른 붉은 물결 (발라드)_M10|",
"https://cdn1.suno.ai/0f20953e-5363-49bb-b3d9-76399e608006.mp3|*[발라드] 청룡과 백호, 다정한 맞수 상농전 (발라드)_M03|",
"https://cdn1.suno.ai/3b02909b-2b15-4d30-b762-aa4e18a1e16b.mp3|*[발라드] 1학년 신입생의 설움 (포크 발라드)_W02|",
"https://cdn1.suno.ai/ba375b48-f125-46ff-9bb4-8ad3c36cf2e8.mp3|*[발라드] 어리버리 1학년의 설움 (발라드 바이올린)_W01|249",
"https://cdn1.suno.ai/a5119799-cef2-4fa5-be04-cb072f95f240.mp3|*[발라드] 음악실 앞의 그림자 (전통 발라드)_W03|",
"https://cdn1.suno.ai/333d7d0b-f8a0-44aa-bcb6-7bea4f907bae.mp3|*[발라드] 고교 시절 선배들의 군기 (전통 사극 발라드)_W03|",
"https://cdn1.suno.ai/c94150b3-249a-4c0a-a313-27a2814d72c8.mp3|*[발라드] 홍제동에서의 객지 설움 (전통 사극 발라드)_W01|",
"https://cdn1.suno.ai/96c88905-f44c-4c55-b6fd-09e9c1bd54e5.mp3|*[발라드] 멋쟁이 기타리스트를 꿈꾸며.. (전통 발라드)_W09|",
"https://cdn1.suno.ai/fb550705-58ba-452a-9474-83c57274f51f.mp3|[발라드] 고삐 풀린 영화 매니아 (발라드)_M14|",
"https://cdn1.suno.ai/e1cef3a6-ff16-44b5-a946-72bf462a3590.mp3|*[발라드] 반공일 재낀 설악산 이야기 (전통 발라드)_W21|",
"https://cdn1.suno.ai/45eec384-7a2d-4758-b70b-33a7bc51dd31.mp3|*[발라드] 강릉상고 축구의 전성기 (발라드)_M06|",
"https://cdn1.suno.ai/9333da80-1458-4897-8fcc-d0602220f9a5.mp3|*[발라드] 열여섯 살 펜팔 소년 (전통 발라드)_W06|",
"https://cdn1.suno.ai/483d3e20-14f0-481b-b79a-95329d17bdee.mp3|*[발라드] 난리 부르스 수학여행 (발라드 피아노)_W02|",
"https://cdn1.suno.ai/45b9bf3a-4856-4250-a5b6-ac8c01e2daf5.mp3|*[발라드] 소년시대의 철부지 싸움 (전통 사극 발라드)_W02|",
"https://cdn1.suno.ai/ed5d062f-ee4f-423c-a95b-1001ea7b26ca.mp3|*[발라드] 친구 따라 간 '옥거리' 로망스 (발라드 피아노)_W02|216",
"https://cdn1.suno.ai/dd352ba8-e6e5-4f6b-810d-4937f4c90775.mp3|*[발라드] 하숙생들의 일탈, 향토 장학금 (발라드 피아노)_M01|",
"https://cdn1.suno.ai/b87d63f6-9bdb-4921-9e55-4f091ea7781f.mp3|*[발라드] 고3, 실망하신 아버지의 편지 (느린 발라드)_M29|",
"https://cdn1.suno.ai/a4464bce-f393-4162-8992-349e4c11ad19.mp3|[발라드] 고교 시절의 '덕찬 육천지교' (어쿠스틱 발라드)_M05|300",
"https://cdn1.suno.ai/9df8d04e-0807-43f9-9315-38d1682d1ae7.mp3|*[발라드] 심성 착한 완수 이야기 (전통 사극 발라드)_W01|",
"https://cdn1.suno.ai/76e9b930-3e63-4da7-8978-00d0268bda37.mp3|[발라드] 희야를 만났던 '설악산 로망스' (전통 발라드)_M11|",
"https://cdn1.suno.ai/a5775f09-6fba-47e6-b4c0-2cddc88c7bc3.mp3|*[발라드] 설악산 1주년에 만난 희야의 편지 (전통 발라드)_W07|",
"https://cdn1.suno.ai/d3721865-6930-4d13-bf5c-655561ed6b7c.mp3|*[발라드] 내 서랍 속 추억의 편지 (전통 발라드)_W10|",
"https://cdn1.suno.ai/3707082f-be73-44ae-9bc1-dc06f4c172e1.mp3|*[발라드] 봉투 속의 마음 (전통 발라드)_M05|",
"https://cdn1.suno.ai/cd171453-5abe-4d0c-ad4c-114b60b74525.mp3|*[발라드] 편지, 그 추억의 날들.. (발라드)_W04|",
"https://cdn1.suno.ai/3c85a6e5-cedc-4cdf-a1a0-d44ff7254096.mp3|*[발라드] 해태 퍼모스트의 연서 (발라드 신스)_MW06|261",
"https://cdn1.suno.ai/818d8351-09c6-4148-943a-93b50a88bfc8.mp3|*[발라드] 소년시대, 그 추억의 조각들 (어쿠스틱 발라드)_M07|",
"https://cdn1.suno.ai/a578c255-e6ad-40ae-a428-20d3f3e201fa.mp3|*[발라드] 소년시대, 찬란했던 날들 (바이올린 드럼)_MW03|",
"https://cdn1.suno.ai/601e0193-14bb-40c7-b2a2-17808340be50.mp3|[포크] 소년시대, 그 아득한 날들.. (포크 발라드)_M01|",
"https://cdn1.suno.ai/447f50b6-e658-44bd-a9d7-053ca056cba4.mp3|[포크] 강릉 단오제 고교축구 라이벌 상농전 (행진)_M28|",
"https://cdn1.suno.ai/84b02b91-c2b9-4729-bffb-253588dd1dc9.mp3|[포크] 상농전, 그 푸른 붉은 물결 (7080 포크 70bpm)_M12|",
"https://cdn1.suno.ai/a20f1f82-3311-410c-a8f6-9568d0c51fa8.mp3|[포크] 1학년 신입생의 설움 (포크 발라드)_W01|",
"https://cdn1.suno.ai/eec08429-d225-487e-879a-952f28972597.mp3|*[포크] 음악실 앞의 그림자 (어쿠스틱 기타)_M05|",
"https://cdn1.suno.ai/097a1a4a-5aea-430a-a3bd-8c1e06ee7514.mp3|[포크] 고교 시절 선배들의 군기 (포크 록)_M07|236",
"https://cdn1.suno.ai/4ee58d35-7ea7-4663-9acb-e3fb25e0844c.mp3|[포크] 감초 선생님과의 월담 (포크송)_M11|",
"https://cdn1.suno.ai/cc2d316d-7dcf-494b-9703-b730de7e3313.mp3|[포크] 홍제동에서의 객지 설움 (포크 발라드)_W02|",
"https://cdn1.suno.ai/bab7b7da-b7ea-482f-9d8c-6fa79366bc05.mp3|*[포크] 멋쟁이 기타리스트를 꿈꾸며.. (포크송)_M07|",
"https://cdn1.suno.ai/cf8b92db-3b47-4e46-924a-6563ed2b71e0.mp3|*[포크] 고삐 풀린 영화 매니아 (재밌는 포크송)_M11|",
"https://cdn1.suno.ai/450b7d02-5f99-48ce-912c-a19132759ed9.mp3|*[포크] 도민체전 마스게임, 나의 긍지 (7080 포크송)_W02|",
"https://cdn1.suno.ai/745c38a2-f105-4a77-91ca-2c76e2808ae0.mp3|[포크] 반공일 재낀 설악산 이야기 (록 포크송)_W18|",
"https://cdn1.suno.ai/f991f6d6-6d16-4d5f-b51c-ce3c0dfbd0df.mp3|*[포크] 강릉상고 축구의 전성기 (브라스 KCH)_M28|",
"https://cdn1.suno.ai/a0c365c4-9da4-49ca-a194-7d4e670d9516.mp3|[포크] 열여섯 살 펜팔 소년 (7080 포크송)_M03|",
"https://cdn1.suno.ai/445b093a-2bc5-4658-846b-c6617130438c.mp3|*[포크] 난리 부르스 수학여행 (코미디 영화 음악)_M14|",
"https://cdn1.suno.ai/7b7c84fa-8638-41e8-9ffb-588be4a487da.mp3|[포크] 소년시대의 철부지 싸움 (포크 록)_M02|214",
"https://cdn1.suno.ai/fab51cdb-b131-45c5-8fcb-36c8338a69c5.mp3|*[포크] 고3, 실망하신 아버지의 편지 (우울한 피아노)_M19|",
"https://cdn1.suno.ai/a0cbd1f4-8289-428c-867c-186d07a201e0.mp3|*[포크] 심성 착한 완수 이야기 (포크 록 발라드)_M11|",
"https://cdn1.suno.ai/05e2379c-46c6-4caf-91e4-9ac2277efa2b.mp3|*[포크] 희야를 만났던 '설악산 로망스' (70년대 포크 발라드)_M12|",
"https://cdn1.suno.ai/61daa4c9-c795-48c0-97e7-b3208ac9de26.mp3|[포크] 설악산 1주년에 만난 희야의 편지 (기타 중심의 회상)_W06|",
"https://cdn1.suno.ai/316edd8a-5ce3-4f45-9e3e-7e505325c690.mp3|*[포크] 내 서랍 속 추억의 편지 (인디 포크  발라드)_W02|",
"https://cdn1.suno.ai/421d47eb-72db-49cf-9623-8a6879a9139d.mp3|*[포크] 봉투 속의 마음 (피아노)_W04|",
"https://cdn1.suno.ai/516f3de0-96b3-4d8c-a7cf-112353d33a36.mp3|[포크] 편지, 그 추억의 날들.. (7080 포크송)_M04|",
"https://cdn1.suno.ai/a5a1976c-6562-46b0-b745-8e8ebebf2c95.mp3|[포크] 도용당한 연서의 자초지종 (기타 중심의 회상)_M01|",
"https://cdn1.suno.ai/169ebb2d-f151-4646-9eba-66d18bc913ef.mp3|[포크] 해태 퍼모스트의 연서 (70년대 포크팝)_M02|",
"https://cdn1.suno.ai/1c3bfcea-eba0-4e1a-9fbe-0e22aaacde8a.mp3|*[포크] 강릉 밥 서울 똥? 달부어엽구나~ (70년대 포크팝)_M06|",
"https://cdn1.suno.ai/1a37ecd5-e33e-4afb-bce6-6770b1539be9.mp3|[포크] 소년시대, 그 추억의 조각들 (포크 발라드)_M01|",
"https://cdn1.suno.ai/dadb5ccd-550b-4619-9f87-a4fa7dfee7af.mp3|*[포크] 소년시대, 찬란했던 날들 (어쿠스틱 기타)_W02|",
"https://cdn1.suno.ai/f7c45e33-73c9-4347-8b09-cbb3da90906d.mp3|*[트롯] 강릉 단오제 고교축구 라이벌 상농전 (트로트)_MW03|",
"https://cdn1.suno.ai/c007b356-c34b-4240-a2ea-37e96c469c4c.mp3|*[트롯] 청룡과 백호의 날, 상농전 (트로트)_MW02|",
"https://cdn1.suno.ai/9c48b69c-ec5e-4dd6-a5db-4dc193caebd4.mp3|*[트롯] 상농전, 그 푸른 붉은 물결 (트로트)_MW01|",
"https://cdn1.suno.ai/ee59d7a3-1afb-41bc-83e9-1524124fa9c1.mp3|*[트롯] 청룡과 백호, 다정한 맞수 상농전 (트로트)_MW08|",
"https://cdn1.suno.ai/dda7a973-528b-4c20-ae92-0bfdfa018662.mp3|*[트롯] 어리버리 1학년의 설움 (트로트)_MW01|",
"https://cdn1.suno.ai/fd633eea-cf84-4b03-ac0c-a2db86f69683.mp3|[트롯] 음악실 앞의 그림자 (트로트 90bpm)_MW02|181",
"https://cdn1.suno.ai/0694f961-2b72-4a3e-9b18-e39d7c53433d.mp3|*[트롯] 고교 시절 선배들의 군기 (트로트 90bpm)_MW04|",
"https://cdn1.suno.ai/721b9897-bd19-4569-9260-a77cafb0dd67.mp3|*[트롯] 감초 선생님과의 월담 (트로트)_M16|",
"https://cdn1.suno.ai/ffd69067-a693-4e54-a859-c99b0e2e9b6b.mp3|*[트롯] 홍제동에서의 객지 설움 (트로트)_W03|",
"https://cdn1.suno.ai/b1547938-87bf-44ca-b52a-162e5b4615fe.mp3|*[트롯] 멋쟁이 기타리스트를 꿈꾸며.. (트로트)_MW02|",
"https://cdn1.suno.ai/4bf48c7d-f4d8-4267-b928-ec86cc23de9c.mp3|*[트롯] 고삐 풀린 영화 매니아 (트로트)_W02|",
"https://cdn1.suno.ai/f63d7d40-e4c9-4858-9371-89b26c10f751.mp3|*[트롯] 도민체전 마스게임, 나의 긍지 (트로트)_M09|",
"https://cdn1.suno.ai/86138ef3-d2f5-474e-bb91-d7dbb822a4e7.mp3|*[트롯] 반공일 재낀 설악산 이야기 (트로트)_WM07|",
"https://cdn1.suno.ai/6d4a0673-2b05-48c7-ae3a-ea369f130f16.mp3|*[트롯] 강릉상고 축구의 전성기 (트로트)_M07|",
"https://cdn1.suno.ai/c7819e98-10ad-45a4-bc8e-47190e2a8beb.mp3|*[트롯] 열여섯 살 펜팔 소년 (트로트)_MW02|",
"https://cdn1.suno.ai/511c3925-e4d2-401a-902f-c68f235f5933.mp3|*[트롯] 난리 부르스 수학여행 (트로트)_W04|",
"https://cdn1.suno.ai/530b2fa9-a810-474c-8c25-b7f3784c4655.mp3|*[트롯] 소년시대의 철부지 싸움 (트로트)_MW04|",
"https://cdn1.suno.ai/3fc838c8-48f7-4183-865a-d660494ace0d.mp3|*[트롯] 친구 따라 간 '옥거리' 로망스 (트로트)_MW02|",
"https://cdn1.suno.ai/e1320666-db84-4866-a355-801c4b8fe019.mp3|[트롯] 고3, 실망하신 아버지의 편지 (느린 발라드)_M30|",
"https://cdn1.suno.ai/71888440-17d9-422b-ae73-15d0cdf9e207.mp3|*[트롯] 고교 시절의 '덕찬 육천지교' (트로트)_MW02|",
"https://cdn1.suno.ai/c1278d9e-be7c-44c5-bcca-1f5395369d85.mp3|*[트롯] 심성 착한 완수 이야기 (트로트)_M09|",
"https://cdn1.suno.ai/baf4a867-0fa2-4507-b5fc-4acc8ca13076.mp3|*[트롯] 희야를 만났던 '설악산 로망스' (트로트)_M09|",
"https://cdn1.suno.ai/2733d92d-7118-422d-8acc-dccc0656b5e4.mp3|*[트롯] 설악산 1주년에 만난 희야의 편지 (트로트)_W03|",
"https://cdn1.suno.ai/d51f68a8-53b5-4ae1-a9c4-fcab2a1d35e0.mp3|*[트롯] 내 서랍 속 추억의 편지 (트로트)_MW01|",
"https://cdn1.suno.ai/1387039e-d387-4b06-b126-d9502f453b27.mp3|*[트롯] 편지, 그 추억의 날들.. (트로트)_MW03|",
"https://cdn1.suno.ai/e8812435-a194-4bc5-9ff9-60fb156395f7.mp3|*[트롯] 도용당한 연서의 자초지종 (트로트)_W02|",
"https://cdn1.suno.ai/69163ed6-1ffe-415f-8c94-745bed49a599.mp3|*[트롯] 해태 퍼모스트의 연서 (트로트 90bpm)_MW04|220",
"https://cdn1.suno.ai/46266774-3f36-4c72-b02b-775fe3a3c422.mp3|*[트롯] 강릉 밥 서울 똥? 달부어엽구나~ (트로트)_MW02|",
"https://cdn1.suno.ai/41a4d3a5-d054-4512-9f61-98fe5cad09ae.mp3|*[트롯] 소년시대, 그 추억의 조각들 (트로트)_W03|",
"https://cdn1.suno.ai/739f2348-748b-4d08-847e-aa5288a99698.mp3|*[트롯] 소년시대, 찬란했던 날들 (트로트)_M05|",
"https://cdn1.suno.ai/55a9caf3-f00c-4e1d-bcb3-266a763acc5f.mp3|[트롯댄스] 강릉 단오제 고교축구 라이벌 상농전 (행진곡풍)_M06|",
"https://cdn1.suno.ai/01b93599-cb03-40be-b812-f4630d74c6cb.mp3|[트롯댄스] 청룡과 백호, 다정한 맞수 상농전 (트로트 90bpm)_MW04|",
"https://cdn1.suno.ai/e8dbc7a1-40fc-4af8-a954-a2f647f29778.mp3|[트롯댄스] 고교 시절 선배들의 군기 (트로트 90bpm)_MW03|",
"https://cdn1.suno.ai/a2020c74-0ab6-4daf-ab5a-a1b52c89b6da.mp3|[트롯댄스] 도민체전 마스게임, 나의 긍지 (트로트 댄스)_MW02|",
"https://cdn1.suno.ai/c27154a6-619b-467a-a627-68d72c0d2cdd.mp3|[트롯댄스] 난리 부르스 수학여행 (트로트)_W03|",
"https://cdn1.suno.ai/3dba7a72-c0a5-43af-aa3b-223169fbb8ba.mp3|*[트롯댄스] 소년시대의 철부지 싸움 (트로트 댄스)_MW03|",
"https://cdn1.suno.ai/e529c6f1-4ea5-430f-afe9-81c39aa6c5e1.mp3|*[트롯댄스] 친구 따라 간 '옥거리' 로망스 (트로트 댄스)_MW04|",
"https://cdn1.suno.ai/dffe30e7-ac5b-4e6d-9434-ae67cec52068.mp3|[트롯댄스] 하숙생들의 일탈, 향토 장학금 (트로트 댄스)_MW09|",
"https://cdn1.suno.ai/edec3400-03f3-41c1-9433-985eab56fe86.mp3|*[트롯댄스] 고교 시절의 '덕찬 육천지교' (트로트 댄스)_MW04|",
"https://cdn1.suno.ai/061a13fc-df4d-4565-bc7b-93a1e52539d3.mp3|*[트롯댄스] 희야를 만났던 '설악산 로망스' (트로트 댄스)_WM03|",
"https://cdn1.suno.ai/3d08e4d5-30d0-4512-beb5-f79dc5ffa6b2.mp3|[트롯댄스] 설악산 1주년에 만난 희야의 편지 (트로트 댄스)_MW03|",
"https://cdn1.suno.ai/fae3ae7b-2232-4a94-840b-9058d922df19.mp3|*[트롯댄스] 내 서랍 속 추억의 편지 (트로트 댄스)_MW03|",
"https://cdn1.suno.ai/53df61fc-d897-415a-97f8-41dd16bad8f2.mp3|*[트롯댄스] 봉투 속의 마음 (트로트 댄스)_MW01|",
"https://cdn1.suno.ai/a7d81b7e-ffdc-40db-a09a-ef2a5624b538.mp3|*[트롯댄스] 편지, 그 추억의 날들.. (트로트 댄스)_MW06|",
"https://cdn1.suno.ai/ebde0278-8622-4e27-969b-868848c9ee91.mp3|[트롯댄스] 도용당한 연서의 자초지종 (트로트 댄스)_MW05|",
"https://cdn1.suno.ai/5523a1d9-f213-4950-a141-8206d2020bc0.mp3|[브라스] 강릉 단오제 고교축구 라이벌 상농전 (브라스)_M21|",
"https://cdn1.suno.ai/4c78e619-4bfa-407c-834f-a972b229e676.mp3|*[브라스] 청룡과 백호의 날, 상농전 (브라스)_M01|",
"https://cdn1.suno.ai/a32ca02a-ddf4-492f-a1e9-a0ac927df382.mp3|*[브라스] 상농전, 그 푸른 붉은 물결 (행진)_M08|",
"https://cdn1.suno.ai/f123e79e-a4b1-42c1-92c7-b06e234e1132.mp3|*[브라스] 청룡과 백호, 다정한 맞수 상농전 (브라스)_M02|",
"https://cdn1.suno.ai/b9efacae-bf9e-4a21-b77e-1ab804d12ac8.mp3|*[브라스] 도민체전 마스게임, 나의 긍지 (브라스 KCH)_M15|",
"https://www.dropbox.com/scl/fi/ap9x82dzuuiyuuz117pp0/_M25.mp3?rlkey=opaqwayvopmql3u87kdg74e1u&st=0b9ojaoc&raw=1|*[브라스] 강릉상고 축구의 전성기 (브라스 KCH)_M25|",
"https://cdn1.suno.ai/a02799d4-b243-4dc3-a59e-d241fcfc1081.mp3|*[미분류] 소년시대, 그 아득한 날들.. (인디)_MW04|",
"https://cdn1.suno.ai/2db5bffd-0228-4859-9a64-2a009bafeda9.mp3|[미분류] 강릉 단오제 고교축구 라이벌 상농전 (브라스)_M20|",
"https://cdn1.suno.ai/7eb7edea-2a2b-41c5-b453-159949d41541.mp3|[미분류] 상농전, 그 푸른 붉은 물결 (레트로 K팝)_M01|253",
"https://cdn1.suno.ai/689dc561-e41b-4cc0-9439-585582078a46.mp3|[미분류] 청룡과 백호, 다정한 맞수 상농전 (에모팝)_M06|",
"https://cdn1.suno.ai/d7dbf262-60a6-461d-a49c-075fc0714e7a.mp3|[미분류] 1학년 신입생의 설움 (신스팝)_MW03|",
"https://cdn1.suno.ai/94c9bc8c-782e-4f81-b1c3-d5860bd43d95.mp3|[미분류] 고교 시절 선배들의 군기 (록 포크송)_W02|",
"https://cdn1.suno.ai/90f17a5e-7223-4a49-ab9d-76a47725c05c.mp3|[미분류] 감초 선생님과의 월담 (에모팝)_M08|",
"https://cdn1.suno.ai/6479cbb7-c3b2-4ff4-b562-9cad38f112bb.mp3|*[미분류] 멋쟁이 기타리스트를 꿈꾸며.. (7080 포크송)_M12|",
"https://cdn1.suno.ai/01d23e06-4820-4cc0-b35a-bae8403306de.mp3|[미분류] 고삐 풀린 영화 매니아 (유머러스 포크)_M05|",
"https://cdn1.suno.ai/d4bb2ab9-d5ba-4cc4-8445-6f21bcf79fd7.mp3|[미분류] 도민체전 마스게임, 나의 긍지 (브라스 kch)_M13|",
"https://cdn1.suno.ai/bdfcda83-df79-4494-b7f0-c4c29837f13f.mp3|[미분류] 반공일 재낀 설악산 이야기 (에모팝)_W11|",
"https://cdn1.suno.ai/72ccd606-6756-4790-be1e-6bce818f2810.mp3|[미분류] 강릉상고 축구의 전성기 (브라스 kch)_M27|",
"https://cdn1.suno.ai/c0ee2fae-b9b0-4869-8f14-16bb5b9e2164.mp3|*[미분류] 난리 부르스 수학여행 (록 앤섬)_M02|",
"https://cdn1.suno.ai/d8e9075b-c30b-4795-9803-95546d43d676.mp3|*[미분류] 친구 따라 간 '옥거리' 로망스 (인디 팝)_M03|",
"https://cdn1.suno.ai/e567475c-0b81-4a0b-befb-721eeb433248.mp3|[미분류] 하숙생들의 일탈, 향토 장학금 (인디 팝)_MW01|",
"https://cdn1.suno.ai/7d06beca-2010-4538-9dc3-1feeced07540.mp3|*[미분류] 고3, 실망하신 아버지의 편지 (인디 포크)_M24|",
"https://cdn1.suno.ai/7d61f263-9490-4a04-bdff-f4472922c284.mp3|*[미분류] 고교 시절의 '덕찬 육천지교' (신스팝)_M01|",
"https://cdn1.suno.ai/be22fffe-e5ba-47a1-960c-d7a0b05c1bb4.mp3|[미분류] 심성 착한 완수 이야기 (인디 팝)_M05|",
"https://cdn1.suno.ai/8b4488d4-ab47-46c1-936b-3ea5402d476e.mp3|[미분류] 희야를 만났던 '설악산 로망스' (레트로 팝 록)_M14|",
"https://cdn1.suno.ai/96b8b317-8c99-417e-b946-90b81e70484a.mp3|[미분류] 설악산 1주년에 만난 희야의 편지 (신스팝)_MW01|",
"https://cdn1.suno.ai/7cf7790a-dbfb-4348-a5cd-53b67eaec81f.mp3|*[미분류] 도용당한 연서의 자초지종 (어쿠스틱 팝)_M03|",
"https://cdn1.suno.ai/3449cda0-fea7-4fc0-a163-4835106e7fa0.mp3|*[미분류] 해태 퍼모스트의 연서 (코믹 미스터리 영화)_W01|213",
"https://cdn1.suno.ai/dc7d16a0-45ee-42bb-b531-09e8661c480b.mp3|*[미분류] 강릉 밥 서울 똥? 달부어엽구나~ (코믹 드라마틱한 영화)_M05|",
"https://cdn1.suno.ai/94785afc-ccc7-45e8-8e09-e92577cc8a23.mp3|*[미분류] 소년시대, 그 추억의 조각들 (신스팝)_M05|",
"https://cdn1.suno.ai/dacccb18-f110-4f40-b273-2cd145a28765.mp3|[미분류] 소년시대, 찬란했던 날들 (인디 팝)_M01|",
"https://cdn1.suno.ai/c98da48d-f4e4-4c0f-bdcd-772b4d6e8536.mp3|*[트롯발라드] 소년시대, 그 아득한 날들.. (트로트)_MW09|",
"https://cdn1.suno.ai/1721f511-19da-496d-920a-bcd2b16aae8c.mp3|[트롯발라드] 청룡과 백호, 다정한 맞수 상농전 (트로트 80bpm)_MW05|",
"https://cdn1.suno.ai/711527b6-4c5b-406d-8ba2-e54c0b790aef.mp3|*[트롯발라드] 1학년 신입생의 설움 (트로트)_M12|",
"https://cdn1.suno.ai/cae8ad07-4dba-4e5e-92ce-37a141642e08.mp3|[트롯발라드] 음악실 앞의 그림자 (트로트)_MW04|",
"https://cdn1.suno.ai/37e0d001-fc2c-4db3-af82-d7c32492a88b.mp3|[트롯발라드] 고교 시절 선배들의 군기 (포크 발라드)_M08|",
"https://cdn1.suno.ai/51dc2d03-f323-40fe-a6ac-952b01725140.mp3|[트롯발라드] 멋쟁이 기타리스트를 꿈꾸며.. (트로트 발라드)_M09|",
"https://cdn1.suno.ai/62cca7cb-87ef-47bc-b034-674d3c74eb3a.mp3|[트롯발라드] 난리 부르스 수학여행 (레트로 팝 록)_M10|",
"https://cdn1.suno.ai/4b2864a9-cf0d-4d63-84b9-d8155ac37999.mp3|[트롯발라드] 소년시대의 철부지 싸움 (트로트 발라드)_M10|",
"https://cdn1.suno.ai/a3720cd1-7315-4c90-8c52-d52f168ab13a.mp3|*[트롯발라드] 하숙생들의 일탈, 향토 장학금 (트로트)_MW07|",
"https://cdn1.suno.ai/ae1f7f63-309a-4417-9040-9349b76ea77e.mp3|[트롯발라드] 고3, 실망하신 아버지의 편지 (우울한 보컬)_M16|",
"https://cdn1.suno.ai/f0257818-dba0-4a9f-82de-6230d3374513.mp3|*[트롯발라드] 봉투 속의 마음 (트로트 발라드)_MW03|",
"https://cdn1.suno.ai/6ec110c6-2a21-4bc4-8c85-27030e0993d7.mp3|[트롯발라드] 편지, 그 추억의 날들.. (트로트 발라드)_MW04|",
"https://cdn1.suno.ai/c5ef4bcd-5f97-4786-80b1-234775835774.mp3|*[트롯발라드] 도용당한 연서의 자초지종 (트로트 발라드)_MW03|",
"https://cdn1.suno.ai/fc1bb037-29ec-4b03-8708-67916fb5a37e.mp3|[트롯발라드] 해태 퍼모스트의 연서 (트로트 클래식)_MW03|",
"https://cdn1.suno.ai/6ddba757-5da6-4f47-8969-24c306b9662a.mp3|*[트롯발라드] 소년시대, 찬란했던 날들 (트로트)_MW06|",
"https://cdn1.suno.ai/7143e1a5-2dbc-49d6-bf01-3e4fb1453a66.mp3|*[발라드] 소년시대, 그 아득한 날들.. (전통 사극 발라드)_W04|",
"https://cdn1.suno.ai/cf76e41f-b910-47f1-aff0-273fd19a2e2b.mp3|[발라드] 상농전, 그 푸른 붉은 물결 (발라드)_M03|",
"https://cdn1.suno.ai/ab935204-3bd3-4fcf-ac30-e252f0676708.mp3|[발라드] 청룡과 백호, 다정한 맞수 상농전 (발라드)_M04|",
"https://cdn1.suno.ai/5fb4508c-e1f3-418d-86ea-65b7f48ee54f.mp3|*[발라드] 1학년 신입생의 설움 (록 발라드)_M03|",
"https://cdn1.suno.ai/77a57cc3-72c5-49cc-b349-0f5261e9335d.mp3|*[발라드] 어리버리 1학년의 설움 (발라드 피아노)_MW04|263",
"https://cdn1.suno.ai/238faa07-9666-43ae-a8c1-d7320b99f95b.mp3|*[발라드] 음악실 앞의 그림자 (전통 발라드)_W02|",
"https://cdn1.suno.ai/87655de3-d3fb-4922-ab84-e7df09763850.mp3|*[발라드] 고교 시절 선배들의 군기 (전통 사극 발라드)_W04|",
"https://cdn1.suno.ai/7772103b-1b0c-45b5-829c-1eb6c408b8c5.mp3|*[발라드] 홍제동에서의 객지 설움 (전통 사극 발라드)_W02|",
"https://cdn1.suno.ai/37f27fc6-3d43-4843-b265-bc0f30d503a6.mp3|*[발라드] 멋쟁이 기타리스트를 꿈꾸며.. (전통 발라드)_W08|",
"https://cdn1.suno.ai/b2b18d8b-9d92-4e27-a5b9-d611b021d3d3.mp3|[발라드] 고삐 풀린 영화 매니아 (발라드)_M13|249",
"https://cdn1.suno.ai/597d6e77-8604-451a-8062-753a4cfa70b3.mp3|*[발라드] 반공일 재낀 설악산 이야기 (전통 발라드)_W20|",
"https://cdn1.suno.ai/08c6f589-6b9b-4afa-8d3f-57be704dc464.mp3|[발라드] 강릉상고 축구의 전성기 (발라드)_M05|",
"https://cdn1.suno.ai/a2955d1e-cfb5-4b62-8335-7e4b7d45303b.mp3|*[발라드] 열여섯 살 펜팔 소년 (발라드 피아노)_W01|",
"https://cdn1.suno.ai/f30690b0-85ba-4515-9fa9-c817a9f75736.mp3|*[발라드] 소년시대의 철부지 싸움 (추모 피아노)_M14|",
"https://cdn1.suno.ai/e1366fa1-7380-4a53-9589-167f6cce8dbf.mp3|[발라드] 친구 따라 간 '옥거리' 로망스 (발라드 피아노)_W01|197",
"https://cdn1.suno.ai/80cff2e7-0941-4482-8315-dd7fc011307f.mp3|*[발라드] 하숙생들의 일탈, 향토 장학금 (전통 발라드)_W04|",
"https://cdn1.suno.ai/6a22dff2-e69d-4262-8dc2-78ae3ca7d6c5.mp3|*[발라드] 고3, 실망하신 아버지의 편지 (전통 사극 발라드)_W01|",
"https://cdn1.suno.ai/0ce4498a-c19a-46a4-a639-342a762ff27f.mp3|[발라드] 고교 시절의 '덕찬 육천지교' (어쿠스틱 발라드)_M06|248",
"https://cdn1.suno.ai/06a9cb1a-ff7d-4f17-933e-97712a8b7e43.mp3|*[발라드] 심성 착한 완수 이야기 (발라드)_M07|252",
"https://cdn1.suno.ai/661ba1db-0b8a-44ea-b822-68749ee0e8db.mp3|[발라드] 희야를 만났던 '설악산 로망스' (전통 발라드)_M10|",
"https://cdn1.suno.ai/186fe481-df41-498e-99a7-405e25f6abe5.mp3|*[발라드] 설악산 1주년에 만난 희야의 편지 (전통 발라드)_M05|",
"https://cdn1.suno.ai/dc69b7d1-e313-4b35-911a-a9615be91e1a.mp3|*[발라드] 내 서랍 속 추억의 편지 (전통 발라드)_W09|",
"https://cdn1.suno.ai/cebf91e1-b483-41ff-bac4-f311e9fe8cf7.mp3|*[발라드] 봉투 속의 마음 (전통 사극 발라드)_W05|",
"https://cdn1.suno.ai/5eba966f-c23c-4a40-b119-9f421020d592.mp3|*[발라드] 편지, 그 추억의 날들.. (전통 사극 발라드)_W02|",
"https://cdn1.suno.ai/955e0def-b814-4313-855b-b6ae077296dc.mp3|[발라드] 해태 퍼모스트의 연서 (발라드 신스)_M03|",
"https://cdn1.suno.ai/a2423c65-0501-4368-916b-1a7745e0ffec.mp3|*[발라드] 소년시대, 그 추억의 조각들 (어쿠스틱 발라드)_M08|",
"https://cdn1.suno.ai/36a2a195-7eba-4acc-a703-1309baf16bea.mp3|*[발라드] 소년시대, 찬란했던 날들 (바이올린 드럼)_MW04|",
"https://cdn1.suno.ai/cc1057ba-e152-42dd-8cff-8ea81bc7110b.mp3|[포크] 소년시대, 그 아득한 날들.. (신스팝)_W02|",
"https://cdn1.suno.ai/e256fbe1-9637-499d-8d12-27f92cd8264d.mp3|[포크] 강릉 단오제 고교축구 라이벌 상농전 (브라스)_M22|236",
"https://cdn1.suno.ai/f1e59388-5fc1-4210-b629-0d96b534a662.mp3|[포크] 1학년 신입생의 설움 (포크 발라드)_M02|",
"https://cdn1.suno.ai/cf59044e-b1ce-4c88-8177-3ba92efc74ff.mp3|*[포크] 음악실 앞의 그림자 (어쿠스틱 기타)_M03|",
"https://cdn1.suno.ai/9928834c-3095-4e3e-85c5-1422b28a7651.mp3|[포크] 고교 시절 선배들의 군기 (포크 록)_M08|",
"https://cdn1.suno.ai/c4602857-927f-478b-8cff-aa864f0be6db.mp3|[포크] 감초 선생님과의 월담 (포크송)_M03|",
"https://cdn1.suno.ai/2de9633f-6baf-4ce2-aef0-b5b96252f50d.mp3|[포크] 홍제동에서의 객지 설움 (포크송)_M08|",
"https://cdn1.suno.ai/c9181814-7fec-4af6-a86b-75fb1bfb3f9b.mp3|*[포크] 멋쟁이 기타리스트를 꿈꾸며.. (7080 포크송)_M05|236",
"https://cdn1.suno.ai/2dce5f6b-7911-4be6-a59b-8c9c1371967c.mp3|[포크] 고삐 풀린 영화 매니아 (재밌는 포크송)_M19|",
"https://cdn1.suno.ai/d15af34e-6fb4-42a6-bb23-52e23b3ed5a2.mp3|*[포크] 도민체전 마스게임, 나의 긍지 (7080 포크송 KCH)_M17|",
"https://cdn1.suno.ai/a9232455-880c-4382-bbe8-dd6fd7872a4a.mp3|[포크] 반공일 재낀 설악산 이야기 (록 포크송)_W19|",
"https://cdn1.suno.ai/a4780295-515c-4ddc-8a54-e6be5f34fa8d.mp3|*[포크] 강릉상고 축구의 전성기 (행진)_M15|",
"https://cdn1.suno.ai/93340437-02bb-4b50-b1d4-09fed63ef4a7.mp3|*[포크] 소년시대의 철부지 싸움 (추모 피아노)_W05|",
"https://cdn1.suno.ai/56f92fdb-7b24-48c7-aef3-d12f5b13c021.mp3|*[포크] 고3, 실망하신 아버지의 편지 (우울한 포크송)_M23|",
"https://cdn1.suno.ai/ae024fc0-90ff-4939-afc6-89f99bca1563.mp3|[포크] 심성 착한 완수 이야기 (포크 록 발라드)_M01|226",
"https://cdn1.suno.ai/855b6833-88a6-408b-b3f2-7300b2a326c8.mp3|*[포크] 희야를 만났던 '설악산 로망스' (70년대 포크 발라드)_M13|",
"https://cdn1.suno.ai/c1415c51-0e9c-42f2-a631-bb10b53f48ab.mp3|[포크] 설악산 1주년에 만난 희야의 편지 (기타 중심의 회상)_M08|",
"https://cdn1.suno.ai/861c7492-68c5-4efe-afbe-e8461d68630b.mp3|[포크] 내 서랍 속 추억의 편지 (기타 중심의 회상)_W07|",
"https://cdn1.suno.ai/ff3b8971-b677-407f-956a-d7d636745ac8.mp3|[포크] 봉투 속의 마음 (어쿠스틱 기타)_W01|",
"https://cdn1.suno.ai/146ea70a-9766-4c18-8d78-70d6ee4d5e56.mp3|[포크] 도용당한 연서의 자초지종 (어쿠스틱 팝)_MW07|",
"https://cdn1.suno.ai/9d022e68-d6e7-4f61-9eef-33906d2564ec.mp3|[포크] 소년시대, 찬란했던 날들 (어쿠스틱 기타)_W01|277",
"https://cdn1.suno.ai/006a96bc-a9fc-4573-951a-6c55b273d367.mp3|*[트롯] 강릉 단오제 고교축구 라이벌 상농전 (브라스)_MW05|",
"https://cdn1.suno.ai/f539be2b-c124-490d-962c-6e45f352dcf2.mp3|*[트롯] 1학년 신입생의 설움 (트로트)_MW02|",
"https://cdn1.suno.ai/ff3e09d7-f17c-479a-9d30-ea15103e39ca.mp3|[트롯] 음악실 앞의 그림자 (트로트 90bpm)_MW01|",
"https://cdn1.suno.ai/9c267566-1c5b-4a9d-b904-64c13522c89e.mp3|[트롯] 고교 시절 선배들의 군기 (트로트)_MW01|",
"https://cdn1.suno.ai/aa0b511c-43f7-45d3-9cd3-f5edac31a1c1.mp3|*[트롯] 감초 선생님과의 월담 (트로트)_M10|",
"https://cdn1.suno.ai/2ddfcecf-1f20-4153-91cc-747977958926.mp3|*[트롯] 홍제동에서의 객지 설움 (트로트)_W04|",
"https://cdn1.suno.ai/1eaa9b93-5e39-4ec7-abd7-068e3b254ce6.mp3|*[트롯] 멋쟁이 기타리스트를 꿈꾸며.. (트로트)_M16|",
"https://cdn1.suno.ai/be7fc6cc-35ef-4285-82b1-d3469c68f8ca.mp3|*[트롯] 고삐 풀린 영화 매니아 (트로트)_M15|",
"https://cdn1.suno.ai/e9e9d712-a287-4dbe-95f9-299861effc3d.mp3|[트롯] 도민체전 마스게임, 나의 긍지 (트로트)_W05|",
"https://cdn1.suno.ai/21b8640b-3f0a-454b-9b4e-bbb29cbcfe76.mp3|*[트롯] 반공일 재낀 설악산 이야기 (트로트)_M06|",
"https://cdn1.suno.ai/220c7cd2-9f27-4836-bd0e-6596941f980f.mp3|*[트롯] 강릉상고 축구의 전성기 (트로트)_MW01|",
"https://cdn1.suno.ai/c1d0a1b9-52ad-47fc-93ff-e0473705130b.mp3|*[트롯] 열여섯 살 펜팔 소년 (트로트)_MW01|",
"https://cdn1.suno.ai/9acd7ca0-f8e1-4491-98b6-4de4eeb1eb60.mp3|[트롯] 난리 부르스 수학여행 (트로트)_MW02|",
"https://cdn1.suno.ai/56f33268-bd60-4536-a007-b6a8def48639.mp3|[트롯] 소년시대의 철부지 싸움 (트로트)_W03|",
"https://cdn1.suno.ai/5383ce6f-4034-424b-bf50-66e542a7e4a8.mp3|*[트롯] 친구 따라 간 '옥거리' 로망스 (트로트)_MW01|",
"https://cdn1.suno.ai/cf6bc305-e000-4b8e-92b7-3446993d8f24.mp3|*[트롯] 하숙생들의 일탈, 향토 장학금 (트로트)_W03|",
"https://cdn1.suno.ai/8e99ab7f-c521-4fb8-89ae-c9b291abb9e2.mp3|[트롯] 고3, 실망하신 아버지의 편지 (우울한 기타)_M21|",
"https://cdn1.suno.ai/4a67c48a-753e-46b5-afaf-2ecc25144a3d.mp3|*[트롯] 희야를 만났던 '설악산 로망스' (트로트)_WM01|",
"https://cdn1.suno.ai/3865a8f2-a46c-4dbb-a1d8-1960ce673cff.mp3|*[트롯] 설악산 1주년에 만난 희야의 편지 (트로트 90bpm)_MW06|",
"https://cdn1.suno.ai/82a91284-cf73-4a74-9a3f-078a2f92964f.mp3|*[트롯] 내 서랍 속 추억의 편지 (트로트)_W06|",
"https://cdn1.suno.ai/d0e8fce5-6986-4880-a419-5a9fe48031cf.mp3|*[트롯] 편지, 그 추억의 날들.. (트로트)_W06|",
"https://cdn1.suno.ai/3d915950-620b-4134-9b57-302f455e54d3.mp3|*[트롯] 도용당한 연서의 자초지종 (트로트)_W03|",
"https://cdn1.suno.ai/adcbc85a-61d8-4f0a-8e6f-becd10524388.mp3|*[트롯] 해태 퍼모스트의 연서 (트로트)_W03|",
"https://cdn1.suno.ai/7d483d50-81be-47be-b71e-e3f7e4e9b351.mp3|*[트롯] 강릉 밥 서울 똥? 달부어엽구나~ (트로트 90bpm)_MW04|",
"https://cdn1.suno.ai/8a3a8c42-a01a-485f-9ef0-49e33f8bba06.mp3|*[트롯] 소년시대, 그 추억의 조각들 (트로트)_W01|",
"https://cdn1.suno.ai/fa721236-48f3-42c8-8362-1c8d672960c2.mp3|*[트롯] 소년시대, 찬란했던 날들 (트로트)_W03|",
"https://cdn1.suno.ai/7fb01736-c181-44b3-ad30-ce4c0fae3256.mp3|[트롯댄스] 강릉 단오제 고교축구 라이벌 상농전 (브라스)_M24|",
"https://cdn1.suno.ai/fa026b2f-4ecc-40d5-a17e-7ff313f0a27b.mp3|*[트롯댄스] 도민체전 마스게임, 나의 긍지 (트로트 댄스)_MW03|",
"https://cdn1.suno.ai/bee86388-a19d-4c41-8524-45244b3cf261.mp3|[트롯댄스] 난리 부르스 수학여행 (트로트 댄스)_MW04|",
"https://cdn1.suno.ai/1deb51ab-781a-49b5-9c75-f73e220b60dd.mp3|*[트롯댄스] 친구 따라 간 '옥거리' 로망스 (트로트 댄스)_MW05|",
"https://cdn1.suno.ai/66f90ec7-1cad-4058-92cd-159fe5903217.mp3|[트롯댄스] 하숙생들의 일탈, 향토 장학금 (트로트)_W02|",
"https://cdn1.suno.ai/1f67cb09-1f75-4449-a35e-fbdf7344b843.mp3|[브라스] 강릉 단오제 고교축구 라이벌 상농전 (브라스)_M26|",
"https://cdn1.suno.ai/cbc03b52-7f6d-4cb1-b057-4eda25733284.mp3|*[브라스] 청룡과 백호의 날, 상농전 (마칭 밴드)_M03|",
"https://cdn1.suno.ai/ffcb5664-67e3-4e47-b881-45323f51ee66.mp3|[브라스] 상농전, 그 푸른 붉은 물결 (행진)_M07|",
"https://cdn1.suno.ai/a8963c0e-11e1-43a9-a617-c1def3aa2dcf.mp3|*[브라스] 도민체전 마스게임, 나의 긍지 (브라스)_M07|",
"https://cdn1.suno.ai/e08c95e9-1287-4eb0-b1e0-dbc1abfe1e18.mp3|*[브라스] 강릉상고 축구의 전성기 (브라스 KCH)_M21|",
"https://cdn1.suno.ai/c623a76d-d571-467b-a486-d6011185b5bd.mp3|[미분류] 소년시대, 그 아득한 날들.. (인디)_M06|",
"https://cdn1.suno.ai/064f7de4-de37-4f21-bbd9-9457f0d39c34.mp3|[미분류] 강릉 단오제 고교축구 라이벌 상농전 (오케스트라)_M10|",
"https://cdn1.suno.ai/54e658d4-699a-4932-81b1-a4029b56b5e9.mp3|[미분류] 청룡과 백호의 날, 상농전 (행진)_M06|",
"https://cdn1.suno.ai/7e347e71-88c8-4888-b38d-8014853122c8.mp3|[미분류] 1학년 신입생의 설움 (록 발라드)_M06|",
"https://cdn1.suno.ai/b8e208eb-7e8b-42a9-89b0-6996239dc795.mp3|[미분류] 고교 시절 선배들의 군기 (컨트리)_M09|",
"https://cdn1.suno.ai/5632a6c0-e550-44e9-89ca-4a1209b050ac.mp3|[미분류] 감초 선생님과의 월담 (에모팝)_M07|245",
"https://cdn1.suno.ai/75b94d42-b14d-4e40-9897-0be3edbf99f5.mp3|[미분류] 멋쟁이 기타리스트를 꿈꾸며.. (인디 팝)_M04|",
"https://cdn1.suno.ai/5a73dd65-f0ab-4c73-8d18-c55311d4561f.mp3|[미분류] 고삐 풀린 영화 매니아 (유머러스 포크)_M17|",
"https://cdn1.suno.ai/be05e6b4-b06d-446b-83bf-928a191e854c.mp3|[미분류] 도민체전 마스게임, 나의 긍지 (7080 포크송)_M02|",
"https://cdn1.suno.ai/a7f85d48-6c12-49e6-9dc1-6dab7c66b7b6.mp3|[미분류] 반공일 재낀 설악산 이야기 (인디)_M02|",
"https://cdn1.suno.ai/b3fab0ff-d032-49c5-a590-5c50a43ef54d.mp3|[미분류] 강릉상고 축구의 전성기 (행진곡)_M03|",
"https://cdn1.suno.ai/c1f3ba75-b856-4f05-884c-b77006edbcdc.mp3|[미분류] 난리 부르스 수학여행 (레트로 팝)_M08|",
"https://cdn1.suno.ai/3d291f9f-390a-4298-bc71-2b2df1bde351.mp3|*[미분류] 친구 따라 간 '옥거리' 로망스 (인디 팝)_M04|",
"https://cdn1.suno.ai/76e8f70b-0a28-4f22-86c0-3d1517c16e03.mp3|[미분류] 고3, 실망하신 아버지의 편지 (바이올린 신스팝)_M28|",
"https://cdn1.suno.ai/59fa4e0c-05ba-4042-a6ca-cb3580568743.mp3|*[미분류] 고교 시절의 '덕찬 육천지교' (코믹 영화)_M07|",
"https://cdn1.suno.ai/b1ad8433-dbb2-4d7d-9e18-0e2b1933c11a.mp3|[미분류] 희야를 만났던 '설악산 로망스' (레트로 팝 록)_M15|",
"https://cdn1.suno.ai/1fb0bea9-ff10-4a22-a5bf-ff56d7ce081a.mp3|[미분류] 설악산 1주년에 만난 희야의 편지 (신스팝)_W10|",
"https://cdn1.suno.ai/b58f1f8a-8c65-42b7-89c9-dc9a7d41ce2f.mp3|[미분류] 도용당한 연서의 자초지종 (어쿠스틱 팝)_M05|",
"https://cdn1.suno.ai/df1f4707-32ee-4821-a244-0aba2ead8a29.mp3|*[미분류] 해태 퍼모스트의 연서 (인디)_M04|",
"https://cdn1.suno.ai/f8226249-2eb0-4656-bc5f-8397c3c7ee9a.mp3|*[미분류] 소년시대, 그 추억의 조각들 (신스팝)_M06|",
"https://cdn1.suno.ai/41e4b801-a342-450f-84ba-8e7fee940270.mp3|[트롯발라드] 소년시대, 그 아득한 날들.. (트로트)_MW08|",
"https://cdn1.suno.ai/2355a194-694c-4252-aba1-902d6f3824e5.mp3|[트롯발라드] 강릉 단오제 고교축구 라이벌 상농전 (심포닉)_MW02|",
"https://cdn1.suno.ai/9d24905f-1632-41d8-904f-8e7bfcd6c4d2.mp3|[트롯발라드] 청룡과 백호, 다정한 맞수 상농전 (트로트 80bpm)_MW06|",
"https://cdn1.suno.ai/affe8f73-3afe-4787-b729-9e61c65d79b1.mp3|[트롯발라드] 1학년 신입생의 설움 (트로트 발라드)_M07|",
"https://cdn1.suno.ai/b5587fb3-e6bb-476c-a250-d0b384395adc.mp3|[트롯발라드] 음악실 앞의 그림자 (트로트 80bpm)_MW06|",
"https://cdn1.suno.ai/87e9c063-8c48-40a9-87a0-368e488e5285.mp3|[트롯발라드] 고교 시절 선배들의 군기 (포크 발라드)_M07|",
"https://cdn1.suno.ai/820d69f6-57a5-4b6c-b7cd-dd2b8c706a8d.mp3|[트롯발라드] 멋쟁이 기타리스트를 꿈꾸며.. (7080 통기타)_MW03|",
"https://cdn1.suno.ai/1a68d6f7-1766-4575-b97a-169e3f111dd3.mp3|[트롯발라드] 강릉상고 축구의 전성기 (행진 kch)_M29|",
"https://cdn1.suno.ai/bce615e6-8f5e-4f56-b1ec-5197117de45d.mp3|[트롯발라드] 소년시대의 철부지 싸움 (감성 발라드)_M06|",
"https://cdn1.suno.ai/7f93cf72-dfe4-4d6c-bed6-da19266b3ffb.mp3|*[트롯발라드] 하숙생들의 일탈, 향토 장학금 (트로트)_MW08|",
"https://cdn1.suno.ai/a74c8ef8-0361-4370-bd48-524f9a699ef5.mp3|[트롯발라드] 고3, 실망하신 아버지의 편지 (트로트 발라드)_M26|",
"https://cdn1.suno.ai/6489e1ee-87ed-42f5-9dfb-69a48a2505cd.mp3|*[트롯발라드] 편지, 그 추억의 날들.. (바이올린 신스팝)_M05|",
"https://cdn1.suno.ai/6e449afd-a8e5-402a-8eca-e2cb158a3150.mp3|[트롯발라드] 소년시대, 찬란했던 날들 (트로트 90bpm)_MW02|",
"https://cdn1.suno.ai/0299bb9d-624d-4a72-8b0b-c234e6bbce4a.mp3|*[발라드] 소년시대, 그 아득한 날들.. (전통 사극 발라드)_W03|",
"https://cdn1.suno.ai/ce123c2c-833a-4ff9-88f7-0ac881fc9d2f.mp3|[발라드] 상농전, 그 푸른 붉은 물결 (발라드)_M09|",
"https://cdn1.suno.ai/0f1b171b-144c-4006-ab6f-c54255a513aa.mp3|*[발라드] 1학년 신입생의 설움 (전통 사극 발라드)_W06|",
"https://cdn1.suno.ai/d861f162-9c9b-421a-930a-c8634c46bb90.mp3|*[발라드] 어리버리 1학년의 설움 (발라드 피아노)_M04|",
"https://cdn1.suno.ai/598b943b-044e-46f8-b6e0-a56144656ead.mp3|[발라드] 홍제동에서의 객지 설움 (발라드)_M02|220",
"https://cdn1.suno.ai/71fc21fb-689d-48e7-a320-437559be42b1.mp3|[발라드] 멋쟁이 기타리스트를 꿈꾸며.. (발라드 기타)_M02|215",
"https://cdn1.suno.ai/84f98c7b-6774-4849-af0a-bd8cfb20261c.mp3|[발라드] 고삐 풀린 영화 매니아 (발라드)_M03|",
"https://cdn1.suno.ai/642ab5b8-b06b-4d74-bef1-63d6303f2836.mp3|[발라드] 강릉상고 축구의 전성기 (발라드)_M16|",
"https://cdn1.suno.ai/fabe8fa9-4d21-4807-938e-e56d5ef5e7fd.mp3|*[발라드] 열여섯 살 펜팔 소년 (전통 발라드)_W05|",
"https://cdn1.suno.ai/7d691784-f635-4bee-81a0-c4a07cbdae62.mp3|[발라드] 난리 부르스 수학여행 (포크 발라드)_M06|277",
"https://cdn1.suno.ai/f596ce97-0a06-4d1b-9f35-e85ebcafa553.mp3|*[발라드] 소년시대의 철부지 싸움 (전통 사극 발라드)_W01|",
"https://cdn1.suno.ai/454695ca-5adf-44d5-bcd1-1cec0726812f.mp3|*[발라드] 하숙생들의 일탈, 향토 장학금 (전통 발라드)_W05|",
"https://cdn1.suno.ai/b4a496a2-0f3b-46bc-957e-3081ca8ef5d5.mp3|*[발라드] 고3, 실망하신 아버지의 편지 (전통 사극 발라드)_W02|",
"https://cdn1.suno.ai/f1e6725e-44c5-485c-ba8c-af48e2ab44aa.mp3|*[발라드] 심성 착한 완수 이야기 (전통 발라드)_M12|",
"https://cdn1.suno.ai/a30e759e-7e52-42c2-a029-615f82cb8054.mp3|*[발라드] 설악산 1주년에 만난 희야의 편지 (전통 발라드)_W08|",
"https://cdn1.suno.ai/6986e65b-cfa7-4a44-9ad5-e2347dc89084.mp3|*[발라드] 내 서랍 속 추억의 편지 (발라드)_W03|237",
"https://cdn1.suno.ai/a2b4b43e-f4a5-4239-b2b8-933c90c7b1f7.mp3|*[발라드] 봉투 속의 마음 (전통 사극 발라드)_W06|",
"https://cdn1.suno.ai/95bd9f6e-0759-4414-9e4a-43aa23b52e77.mp3|*[발라드] 편지, 그 추억의 날들.. (전통 사극 발라드)_W03|",
"https://cdn1.suno.ai/2ea1aa4d-3bb8-43db-b327-08c2d6dd1751.mp3|[포크] 소년시대, 그 아득한 날들.. (바이올린 신스팝)_M08|",
"https://cdn1.suno.ai/f6c9276d-fa91-4ff6-ab3a-bb3ac9637e73.mp3|[포크] 강릉 단오제 고교축구 라이벌 상농전 (브라스)_M01|",
"https://cdn1.suno.ai/877bcf84-ddd7-4159-8544-71a3bb421ecd.mp3|[포크] 1학년 신입생의 설움 (포크 발라드)_M10|",
"https://cdn1.suno.ai/235223c4-4d44-463d-a027-55cbe669d745.mp3|[포크] 음악실 앞의 그림자 (어쿠스틱 기타)_M04|",
"https://cdn1.suno.ai/7aa10d90-cb0f-47a4-bf6d-61cfb6130a60.mp3|[포크] 고교 시절 선배들의 군기 (포크 록)_M01|",
"https://cdn1.suno.ai/4b445b66-9a26-4412-8537-d517bad7051f.mp3|[포크] 감초 선생님과의 월담 (포크송)_MW01|",
"https://cdn1.suno.ai/1e3034a3-ec92-4237-88af-5d2d853c26cd.mp3|[포크] 홍제동에서의 객지 설움 (7080 포크송)_M09|188",
"https://cdn1.suno.ai/05107b2d-6dcd-4fb4-b51d-dd7c5eb70427.mp3|*[포크] 멋쟁이 기타리스트를 꿈꾸며.. (7080 포크송)_M06|",
"https://cdn1.suno.ai/bf5b3cab-b669-497f-bf45-c001c829061e.mp3|[포크] 고삐 풀린 영화 매니아 (레트로 포크)_M01|",
"https://cdn1.suno.ai/00c6f9a7-3a14-4c7c-a3a0-179543eb709f.mp3|*[포크] 도민체전 마스게임, 나의 긍지 (7080 포크송)_W01|",
"https://cdn1.suno.ai/36651d7f-504a-4cc0-8ff4-e2181319d05a.mp3|[포크] 반공일 재낀 설악산 이야기 (록 포크송)_W05|",
"https://cdn1.suno.ai/7f91eb2d-f173-4f32-9c4a-1194e50200c0.mp3|[포크] 강릉상고 축구의 전성기 (브라스 kch)_M24|",
"https://cdn1.suno.ai/78f3b752-46f4-4baf-bc7d-34922425d1fa.mp3|[포크] 열여섯 살 펜팔 소년 (7080 포크송)_M02|",
"https://cdn1.suno.ai/cde1b752-d23d-47dd-85e1-b71b24b8620c.mp3|*[포크] 소년시대의 철부지 싸움 (추모 피아노)_M15|",
"https://cdn1.suno.ai/cb8bc0fe-5120-4a20-871e-6556d85f6267.mp3|[포크] 고3, 실망하신 아버지의 편지 (어쿠스틱 악기)_M09|",
"https://cdn1.suno.ai/940e533d-8d57-4bd0-b75d-8b0bc9bebcf3.mp3|[포크] 심성 착한 완수 이야기 (포크 록 발라드)_M02|",
"https://cdn1.suno.ai/9d6b5e34-67ae-4b5a-af37-c406f8ee2e63.mp3|[포크] 희야를 만났던 '설악산 로망스' (드라마틱한 영화)_M04|",
"https://cdn1.suno.ai/eaac66d1-87e5-43cb-8dec-f272efdf4d63.mp3|[포크] 설악산 1주년에 만난 희야의 편지 (기타 중심의 회상)_W01|",
"https://cdn1.suno.ai/0bf63554-edaa-4ee5-a09d-2e43f7b37e95.mp3|[포크] 내 서랍 속 추억의 편지 (기타 중심의 회상)_W08|",
"https://cdn1.suno.ai/95c579cc-0482-42b8-80af-4a48a791b933.mp3|[포크] 봉투 속의 마음 (피아노)_M03|243",
"https://cdn1.suno.ai/3e5e7670-e806-4404-a333-11b497aa20d8.mp3|[포크] 소년시대, 찬란했던 날들 (포크팝)_M03|",
"https://cdn1.suno.ai/096918d3-7696-409c-8243-2a5bb2866b0b.mp3|[트롯] 소년시대, 그 아득한 날들.. (트로트)_MW07|",
"https://cdn1.suno.ai/f964a258-a0e1-44c6-ae92-724bae842a24.mp3|*[트롯] 강릉 단오제 고교축구 라이벌 상농전 (행진곡풍)_M05|",
"https://cdn1.suno.ai/9f56d64d-772b-4cb6-a17f-f1d3f9415916.mp3|[트롯] 1학년 신입생의 설움 (트로트)_MW01|",
"https://cdn1.suno.ai/5e904769-05b6-44a3-a879-55096b0abf42.mp3|[트롯] 고교 시절 선배들의 군기 (트로트)_MW02|",
"https://cdn1.suno.ai/719640d3-0774-4ca1-86ad-b72ba60fac94.mp3|[트롯] 감초 선생님과의 월담 (트로트)_M09|",
"https://cdn1.suno.ai/76edd868-4da1-4efc-83ed-4eee8ea703fa.mp3|*[트롯] 멋쟁이 기타리스트를 꿈꾸며.. (트로트)_W06|",
"https://cdn1.suno.ai/575dab6c-36c7-41ae-8602-ad462fe07180.mp3|*[트롯] 고삐 풀린 영화 매니아 (트로트)_W01|",
"https://cdn1.suno.ai/4ba1ac6c-7c05-4399-a5a8-fde0cad167d0.mp3|[트롯] 도민체전 마스게임, 나의 긍지 (트로트)_W06|",
"https://cdn1.suno.ai/dc6eaf51-1b48-412d-af6e-f67e0eb23542.mp3|*[트롯] 반공일 재낀 설악산 이야기 (트로트)_WM06|",
"https://cdn1.suno.ai/959956a0-c736-4bfa-8298-d20ab83cac64.mp3|[트롯] 강릉상고 축구의 전성기 (트로트)_M08|",
"https://cdn1.suno.ai/c58deb55-1c2a-458b-b4cd-ec295bc58f73.mp3|*[트롯] 열여섯 살 펜팔 소년 (트로트)_W07|",
"https://cdn1.suno.ai/ec980a0f-12b8-44d0-a0c7-c7c9af6b9814.mp3|[트롯] 소년시대의 철부지 싸움 (트로트)_W04|",
"https://cdn1.suno.ai/9ae2ae42-9277-4b2f-944c-ec420b752387.mp3|*[트롯] 친구 따라 간 '옥거리' 로망스 (트로트)_W03|",
"https://cdn1.suno.ai/09bbae24-1de6-4f8a-84d6-9cf657cc6a5b.mp3|*[트롯] 하숙생들의 일탈, 향토 장학금 (트로트)_M03|",
"https://cdn1.suno.ai/e98969ca-ddb0-4bc9-b6de-39a600287fb5.mp3|[트롯] 고3, 실망하신 아버지의 편지 (어쿠스틱 악기)_M10|268",
"https://cdn1.suno.ai/c8845ea0-0a74-4b85-86e2-5a14e54e8892.mp3|[트롯] 희야를 만났던 '설악산 로망스' (트로트)_M07|",
"https://cdn1.suno.ai/aae0f43d-06f0-4b2e-849d-2f6f65cf1fd2.mp3|*[트롯] 설악산 1주년에 만난 희야의 편지 (트로트)_M03|",
"https://cdn1.suno.ai/073eb48a-a60f-4c2d-89c4-0c0437bf2b5f.mp3|[트롯] 내 서랍 속 추억의 편지 (트로트)_MW02|",
"https://cdn1.suno.ai/fe568535-57e2-42fb-865f-24abb2298e8c.mp3|*[트롯] 편지, 그 추억의 날들.. (트로트)_W07|",
"https://cdn1.suno.ai/4ee8b8da-b8c4-4730-b02a-a8378c1a5ea8.mp3|*[트롯] 도용당한 연서의 자초지종 (트로트)_W04|",
"https://cdn1.suno.ai/e2c1ef8f-2abe-440a-ad01-1acf68bb90a2.mp3|*[트롯] 해태 퍼모스트의 연서 (트로트)_W02|",
"https://cdn1.suno.ai/867e22d0-5076-4469-a879-88fd6f27179e.mp3|[트롯] 강릉 밥 서울 똥? 달부어엽구나~ (트로트)_MW01|",
"https://cdn1.suno.ai/dda322e9-8db7-4706-a519-242acbd3a283.mp3|*[트롯] 소년시대, 그 추억의 조각들 (트로트)_W02|",
"https://cdn1.suno.ai/2832640b-c360-4fd8-80fc-79c8025bbcaa.mp3|*[트롯] 소년시대, 찬란했던 날들 (트로트)_W04_Edit|",
"https://cdn1.suno.ai/65587869-f2fc-4709-a875-9cadec7de7b3.mp3|[트롯댄스] 강릉 단오제 고교축구 라이벌 상농전 (오케스트라)_M09|",
"https://cdn1.suno.ai/2ded5f36-29e9-4d83-8421-29db9f1f5f2e.mp3|[트롯댄스] 도민체전 마스게임, 나의 긍지 (트로트 댄스)_MW01|",
"https://cdn1.suno.ai/4e51bcca-8b4e-4097-ab02-393d7ccfcc10.mp3|*[트롯댄스] 친구 따라 간 '옥거리' 로망스 (트로트 댄스)_MW06|",
"https://cdn1.suno.ai/c277925f-8e2d-4baa-a7b1-9ab1c7ed4816.mp3|[브라스] 강릉 단오제 고교축구 라이벌 상농전 (브라스)_M23|",
"https://cdn1.suno.ai/c8494984-6e19-482e-9b7a-93b9b6661ce5.mp3|[브라스] 청룡과 백호의 날, 상농전 (브라스)_M05|148",
"https://cdn1.suno.ai/b7b3c9c4-ac63-4c0b-874e-67d4c794a160.mp3|*[브라스] 청룡과 백호, 다정한 맞수 상농전 (브라스)_M07|",
"https://cdn1.suno.ai/c9734111-ff2d-4704-ba26-8232ecfb03eb.mp3|*[브라스] 도민체전 마스게임, 나의 긍지 (브라스 KCH)_M14|",
"https://cdn1.suno.ai/e4f93640-5c7b-4b37-81e8-befd0064361b.mp3|*[브라스] 강릉상고 축구의 전성기 (브라스 KCH)_M32|",
"https://cdn1.suno.ai/8ff13806-ed32-4f59-a30d-47bf62797cf0.mp3|[미분류] 소년시대, 그 아득한 날들.. (인디)_M05|",
"https://cdn1.suno.ai/fd8bf296-2d2e-44ff-a59d-d9d320295130.mp3|[미분류] 강릉 단오제 고교축구 라이벌 상농전 (행진)_M17|201",
"https://cdn1.suno.ai/fa4fcc3b-2333-432b-bf4e-b0639ff8b259.mp3|[미분류] 청룡과 백호의 날, 상농전 (마칭 밴드)_M02|",
"https://cdn1.suno.ai/62da17d5-7f0b-4e80-b724-b5e48bf4ca9b.mp3|[미분류] 1학년 신입생의 설움 (록 발라드)_M04|",
"https://cdn1.suno.ai/178bd7b1-12eb-430f-84ea-3d373c023923.mp3|[미분류] 고교 시절 선배들의 군기 (레트로 팝)_M06|236",
"https://cdn1.suno.ai/efe37f7d-29de-4c58-9de6-b108447d9d07.mp3|[미분류] 감초 선생님과의 월담 (코미디 영화)_M12|",
"https://cdn1.suno.ai/54e88096-26f0-463c-8178-0cd929be38b0.mp3|*[미분류] 멋쟁이 기타리스트를 꿈꾸며.. (포크팝 기타)_W02|",
"https://cdn1.suno.ai/5899bc63-e21e-47ff-a90c-c4ed42f0f7ae.mp3|[미분류] 고삐 풀린 영화 매니아 (유머러스 포크)_M06|",
"https://cdn1.suno.ai/89fb5e3a-2591-48a6-b340-50b3eff7aabc.mp3|[미분류] 도민체전 마스게임, 나의 긍지 (7080 포크송 kch)_M16|239",
"https://cdn1.suno.ai/9ef91283-2196-457c-8337-cb8b5b6aacb5.mp3|[미분류] 반공일 재낀 설악산 이야기 (에모팝)_WM05|",
"https://cdn1.suno.ai/975d0cec-89b2-49af-8a62-daca61a9948a.mp3|[미분류] 강릉상고 축구의 전성기 (브라스 kch)_M26|",
"https://cdn1.suno.ai/9ead2315-ca1f-4ddc-a4f4-700845b97d2f.mp3|[미분류] 난리 부르스 수학여행 (록 앤섬)_M11|",
"https://cdn1.suno.ai/4cc262d6-5b93-43e2-b683-3e667adb7790.mp3|*[미분류] 친구 따라 간 '옥거리' 로망스 (코믹한 스토리)_M05|",
"https://cdn1.suno.ai/1ded9f5c-3251-4d5b-9f51-23479067afff.mp3|[미분류] 고3, 실망하신 아버지의 편지 (우울한 피아노)_M18|",
"https://cdn1.suno.ai/4cc3345a-548b-4408-8152-37d2b42d6eb1.mp3|[미분류] 고교 시절의 '덕찬 육천지교' (신스팝)_M02|",
"https://cdn1.suno.ai/c58680ed-6126-420c-8f6c-d624be55c7dd.mp3|[미분류] 희야를 만났던 '설악산 로망스' (인디 포크)_M06|",
"https://cdn1.suno.ai/e04d2d85-9f25-4c8d-8ad1-c0aa87e9cb1c.mp3|[미분류] 설악산 1주년에 만난 희야의 편지 (신스팝)_M09|",
"https://cdn1.suno.ai/20c356d6-0e68-4a51-ac0b-ab6a55dec987.mp3|*[미분류] 해태 퍼모스트의 연서 (코믹 미스터리 영화)_MW01|",
"https://cdn1.suno.ai/0d65617e-d347-4a68-b03f-ecbd8ebadf18.mp3|[미분류] 소년시대, 그 추억의 조각들 (레트로 팝)_M03|",
"https://cdn1.suno.ai/4868845a-a4c4-475a-a38b-0d690af33346.mp3|[트롯발라드] 소년시대, 그 아득한 날들.. (바이올린 신스팝)_M07|",
"https://cdn1.suno.ai/9de0ac21-65bf-4b69-a6f8-a0552c7aef90.mp3|[트롯발라드] 강릉 단오제 고교축구 라이벌 상농전 (행진)_M27|",
"https://cdn1.suno.ai/7d2314b3-8ebb-4ffa-90aa-61a5d774d00a.mp3|[트롯발라드] 청룡과 백호, 다정한 맞수 상농전 (트로트)_MW02|",
"https://cdn1.suno.ai/fc4fc6e0-4999-4384-b701-b99bdf0a4c66.mp3|[트롯발라드] 1학년 신입생의 설움 (록 발라드)_M05|",
"https://cdn1.suno.ai/c3bd1d1c-ab54-4458-bbcb-6515388cc93f.mp3|[트롯발라드] 음악실 앞의 그림자 (트로트 80bpm)_MW05|212",
"https://cdn1.suno.ai/98a5193c-717c-446b-a04f-c7f09efe31bc.mp3|[트롯발라드] 멋쟁이 기타리스트를 꿈꾸며.. (7080 포크송)_M11|",
"https://cdn1.suno.ai/8ae7d057-2e9b-4314-bd39-3080ac99318d.mp3|[트롯발라드] 강릉상고 축구의 전성기 (행진곡)_M11|",
"https://cdn1.suno.ai/f3550f64-9db4-4e8e-9700-fe55802e3dde.mp3|*[트롯발라드] 소년시대의 철부지 싸움 (추모 피아노)_M04|",
"https://cdn1.suno.ai/7866bc1d-0718-4e29-975b-2cb1d9339dff.mp3|[트롯발라드] 하숙생들의 일탈, 향토 장학금 (트로트)_MW03|231",
"https://cdn1.suno.ai/2e44a57c-9492-4371-8971-4e872f47322b.mp3|[트롯발라드] 고3, 실망하신 아버지의 편지 (우울한 보컬)_M17|",
"https://cdn1.suno.ai/b2a4a0cd-182d-4fc2-ad88-7809221f570f.mp3|[트롯발라드] 설악산 1주년에 만난 희야의 편지 (발라드)_M07|",
"https://cdn1.suno.ai/796eafe5-950a-44e8-a3ff-85da43f29a42.mp3|[트롯발라드] 편지, 그 추억의 날들.. (발라드)_MW01|",
"https://cdn1.suno.ai/3a2c510a-9e5d-45d9-a41b-78328bf01f32.mp3|*[발라드] 소년시대, 그 아득한 날들.. (바이올린 드럼)_MW02|",
"https://cdn1.suno.ai/f5f5a288-a554-4901-8afd-74663940859d.mp3|[발라드] 1학년 신입생의 설움 (전통 사극 발라드)_W05|",
"https://cdn1.suno.ai/c7854ccb-a4ff-430c-83ac-849b6a7aaa12.mp3|[발라드] 어리버리 1학년의 설움 (발라드 바이올린)_W02|",
"https://cdn1.suno.ai/7ffe8d84-17a0-42c1-8daf-06a4cf24e502.mp3|[발라드] 홍제동에서의 객지 설움 (발라드)_M06|",
"https://cdn1.suno.ai/c865ab3a-8c4e-4a43-99dc-61e068f01fdb.mp3|[발라드] 멋쟁이 기타리스트를 꿈꾸며.. (기타 중심의 회상)_W04|",
"https://cdn1.suno.ai/6f246a48-1f48-4017-b36e-1e53b284ad01.mp3|[발라드] 고삐 풀린 영화 매니아 (발라드 피아노)_M07|",
"https://cdn1.suno.ai/498b9d32-2365-4166-9db5-3a5fc202fe80.mp3|[발라드] 강릉상고 축구의 전성기 (발라드)_M17|",
"https://cdn1.suno.ai/9e5197f5-efb4-49a9-bd23-b514da6b25f1.mp3|[발라드] 열여섯 살 펜팔 소년 (발라드 피아노)_W02|211",
"https://cdn1.suno.ai/49ef0edf-db5c-4665-bf78-f3d76399afbc.mp3|*[발라드] 소년시대의 철부지 싸움 (추모 피아노)_M13|",
"https://cdn1.suno.ai/6eea04b1-5c95-40b3-814c-f95dce44d11a.mp3|[발라드] 하숙생들의 일탈, 향토 장학금 (발라드 피아노)_M02|",
"https://cdn1.suno.ai/74a2cbc1-677d-4181-a50d-186112799221.mp3|*[발라드] 고3, 실망하신 아버지의 편지 (느린 발라드)_M08_가사2|",
"https://cdn1.suno.ai/cc7aad18-dde8-4809-9c93-2a1fc67dd30a.mp3|*[발라드] 심성 착한 완수 이야기 (전통 사극 발라드)_W02|",
"https://cdn1.suno.ai/9e43cb4d-4554-4a20-a9c4-53e8dfc8fbeb.mp3|[발라드] 설악산 1주년에 만난 희야의 편지 (발라드)_M01|174",
"https://cdn1.suno.ai/de0a3177-3ac0-404d-a06c-ce27c28d47ea.mp3|*[발라드] 내 서랍 속 추억의 편지 (전통 발라드)_M12|",
"https://cdn1.suno.ai/d0ccd1bd-e64e-419a-b733-9dd3a0f30615.mp3|*[발라드] 봉투 속의 마음 (전통 발라드)_W03|",
"https://cdn1.suno.ai/67f35f88-0b3c-4da8-b0b6-551233662b3d.mp3|[발라드] 편지, 그 추억의 날들.. (발라드)_M02|",
"https://cdn1.suno.ai/099dce45-17c8-4f12-9a6d-47c4b85fb405.mp3|[포크] 소년시대, 그 아득한 날들.. (바이올린 드럼)_MW05|",
"https://cdn1.suno.ai/e60ec056-2f80-48de-83b6-dd92d6979919.mp3|[포크] 강릉 단오제 고교축구 라이벌 상농전 (브라스)_M02|",
"https://cdn1.suno.ai/dbf4e3e6-cec8-4b77-898b-ab620f2c8226.mp3|[포크] 1학년 신입생의 설움 (포크 발라드)_M01|",
"https://cdn1.suno.ai/5f4b90b7-07e7-4926-ac08-05d269e506e8.mp3|[포크] 고교 시절 선배들의 군기 (컨트리)_M10|",
"https://cdn1.suno.ai/39ed5027-8cf6-453d-acda-ae05d84b4b51.mp3|[포크] 감초 선생님과의 월담 (인디 팝)_M01|",
"https://cdn1.suno.ai/0333eb28-20e3-4fee-96cb-5b90541e61b7.mp3|[포크] 홍제동에서의 객지 설움 (7080 포크송)_M10|265",
"https://cdn1.suno.ai/dbc69445-5922-4c20-b4fe-598366cc378d.mp3|*[포크] 멋쟁이 기타리스트를 꿈꾸며.. (포크송)_W07|",
"https://cdn1.suno.ai/9132fe7d-d637-4122-87e1-ab85f76e0238.mp3|[포크] 도민체전 마스게임, 나의 긍지 (7080 포크송 KCH)_M18|",
"https://cdn1.suno.ai/a799f73d-49d0-494f-9cfb-3c8e02f66b93.mp3|[포크] 강릉상고 축구의 전성기 (행진곡)_M04|",
"https://cdn1.suno.ai/a9bdf4c1-8d0e-4327-9088-1844cd8f884f.mp3|[포크] 열여섯 살 펜팔 소년 (7080 포크송)_M01|",
"https://cdn1.suno.ai/91c2d4c1-ac13-440b-9f6c-3bd18eae3cd9.mp3|*[포크] 난리 부르스 수학여행 (레트로 팝 록)_M09|",
"https://cdn1.suno.ai/306d5b50-62c8-4c31-b311-23d5e6ec91af.mp3|[포크] 소년시대의 철부지 싸움 (바이올린)_M05|",
"https://cdn1.suno.ai/2f49241a-33e9-4088-942e-4f3df5bc0c5b.mp3|[포크] 고3, 실망하신 아버지의 편지 (우울한 포크송)_M22|",
"https://cdn1.suno.ai/aa17355d-d8db-4610-b02d-b0902d4def5c.mp3|[포크] 희야를 만났던 '설악산 로망스' (인디 포크)_M05|",
"https://cdn1.suno.ai/b70add5c-8e52-4cd2-af4a-75afbbad34fe.mp3|[포크] 봉투 속의 마음 (피아노)_M04|251",
"https://cdn1.suno.ai/73654a16-694d-4128-97ae-7e1c1cf2b046.mp3|[포크] 도용당한 연서의 자초지종 (기타 중심의 회상)_M02|",
"https://cdn1.suno.ai/251590c1-2b21-4177-8da1-c93b37d63def.mp3|*[트롯] 소년시대, 그 아득한 날들.. (트로트)_MW12|",
"https://cdn1.suno.ai/2b197552-4ae5-49e6-8794-dacfca725d88.mp3|*[트롯] 강릉 단오제 고교축구 라이벌 상농전 (행진)_M31|",
"https://cdn1.suno.ai/8517b3bc-acb5-4e48-b736-d40c5af3b177.mp3|[트롯] 감초 선생님과의 월담 (레트로 팝)_M13|",
"https://cdn1.suno.ai/d0a69f37-4f6e-4d09-9d70-88fcd316ece4.mp3|*[트롯] 홍제동에서의 객지 설움 (트로트)_MW01|212",
"https://cdn1.suno.ai/da1b5a9d-d58e-4cbb-9707-51f63bc241a3.mp3|[트롯] 고삐 풀린 영화 매니아 (트로트)_MW01|",
"https://cdn1.suno.ai/d9ce4248-08cd-47cf-ad79-5af3faffdc40.mp3|[트롯] 도민체전 마스게임, 나의 긍지 (트로트)_M10|",
"https://cdn1.suno.ai/3b9a42e2-e0a2-498d-8138-91df8683f22e.mp3|*[트롯] 반공일 재낀 설악산 이야기 (트로트)_WM08|",
"https://cdn1.suno.ai/75b94fd4-ba09-48a4-ac54-62f750ed472d.mp3|*[트롯] 열여섯 살 펜팔 소년 (트로트)_W03|",
"https://cdn1.suno.ai/3b70cf1b-cc0b-4c0b-a8e9-9ea76ca2c738.mp3|*[트롯] 친구 따라 간 '옥거리' 로망스 (트로트)_W04|",
"https://cdn1.suno.ai/97edba59-e625-45ab-bb86-6ee921d2bf3f.mp3|*[트롯] 하숙생들의 일탈, 향토 장학금 (트로트)_MW06|",
"https://cdn1.suno.ai/6071a413-8465-42d4-bc01-b82d106cdbab.mp3|[트롯] 고3, 실망하신 아버지의 편지 (느린 발라드)_M07|",
"https://cdn1.suno.ai/6f7183cd-4e0c-4910-a2a9-154d9b09d9c4.mp3|*[트롯] 설악산 1주년에 만난 희야의 편지 (트로트)_W05|",
"https://cdn1.suno.ai/d2d3a0f4-22eb-4d20-98a4-15d8fe7616c6.mp3|[트롯] 도용당한 연서의 자초지종 (트로트 80bpm)_MW01|",
"https://cdn1.suno.ai/9d05b4e7-b141-4654-9c90-717eadddf939.mp3|[트롯] 해태 퍼모스트의 연서 (트로트 90bpm)_MW05|213",
"https://cdn1.suno.ai/ae7880be-ff65-4dcb-8be8-fa4c13e26415.mp3|[트롯] 소년시대, 그 추억의 조각들 (트로트)_MW01|",
"https://cdn1.suno.ai/1d152d03-d379-41ca-9b6a-85d0e6ffcf16.mp3|[트롯] 소년시대, 찬란했던 날들 (트로트)_W04|",
"https://cdn1.suno.ai/dc20cbad-6b39-41fa-b962-88bad544373f.mp3|[트롯댄스] 강릉 단오제 고교축구 라이벌 상농전 (브라스)_M11|",
"https://cdn1.suno.ai/a5195311-41ea-496e-ac15-1eaf01bc6ae2.mp3|[트롯댄스] 강릉상고 축구의 전성기 (브라스)_M12|",
"https://cdn1.suno.ai/7523e190-2639-4b45-bf2c-477e552e8b4b.mp3|[트롯댄스] 난리 부르스 수학여행 (코미디 영화 음악)_M03|",
"https://cdn1.suno.ai/bf2f6265-c208-401e-a4f8-c605f9d2896a.mp3|[브라스] 강릉 단오제 고교축구 라이벌 상농전 (브라스)_M13|",
"https://cdn1.suno.ai/2f14732f-f475-43eb-8f46-8dfa593a8915.mp3|[브라스] 청룡과 백호의 날, 상농전 (브라스)_WM01|",
"https://cdn1.suno.ai/ccb3a848-e3ef-4cf0-98b7-29b7ab0512c5.mp3|[브라스] 청룡과 백호, 다정한 맞수 상농전 (브라스)_M08|",
"https://cdn1.suno.ai/2862a017-5929-4a94-84ca-8b11a67031e8.mp3|*[브라스] 도민체전 마스게임, 나의 긍지 (브라스)_M04|",
"https://cdn1.suno.ai/53909398-d5c4-413b-bb6f-208d80c30f19.mp3|[브라스] 반공일 재낀 설악산 이야기 (행진)_M07|",
"https://cdn1.suno.ai/14168dff-dbe0-4733-9b9c-78790a521737.mp3|[브라스] 강릉상고 축구의 전성기 (행진)_M14|",
"https://cdn1.suno.ai/53d9f3e1-5f48-457a-a038-f9d6d45e25b7.mp3|[미분류] 소년시대, 그 아득한 날들.. (인디)_MW03|",
"https://cdn1.suno.ai/55e482d1-6dfa-45f4-9b6a-6f2701eeada7.mp3|[미분류] 강릉 단오제 고교축구 라이벌 상농전 (오케스트라)_M03|231",
"https://cdn1.suno.ai/ca9cbc88-6dda-4889-8e70-a88040bc0bca.mp3|[미분류] 1학년 신입생의 설움 (바이올린 드럼)_M13|",
"https://cdn1.suno.ai/84570b62-0b03-4b83-85f7-4685690e7167.mp3|[미분류] 고교 시절 선배들의 군기 (클래식 록)_M03|",
"https://cdn1.suno.ai/930d79be-7c5d-4f67-9ca9-a37a384673b2.mp3|[미분류] 감초 선생님과의 월담 (팝록)_M05|",
"https://cdn1.suno.ai/cf6879b1-96a8-4be8-8ee2-67ca5a27ffde.mp3|[미분류] 멋쟁이 기타리스트를 꿈꾸며.. (포크팝 기타)_W01|",
"https://cdn1.suno.ai/43f9fcfe-9395-4ad0-ad4e-ea7103f65cce.mp3|[미분류] 고삐 풀린 영화 매니아 (재밌는 포크송)_M12|",
"https://cdn1.suno.ai/9c36022b-552a-413c-b6d0-6a4e59c25d8d.mp3|[미분류] 도민체전 마스게임, 나의 긍지 (브라스)_M08|",
"https://cdn1.suno.ai/3e57248e-43c8-4fea-b0d9-e8e2509adc66.mp3|[미분류] 반공일 재낀 설악산 이야기 (에모팝)_M04|",
"https://cdn1.suno.ai/9f80e14f-6c43-4951-8b77-ec48f548bfed.mp3|[미분류] 강릉상고 축구의 전성기 (브라스)_M10|",
"https://cdn1.suno.ai/9754a2ba-782d-4a2a-9741-3d19a6fb8415.mp3|[미분류] 난리 부르스 수학여행 (레트로 팝)_M07|",
"https://cdn1.suno.ai/223e8afd-3797-41c6-a67c-a194251e45c8.mp3|[미분류] 친구 따라 간 '옥거리' 로망스 (레트로 팝 록)_M01|",
"https://cdn1.suno.ai/54da2167-bb4f-48aa-bd53-d770ab345e08.mp3|[미분류] 고3, 실망하신 아버지의 편지 (7080 레트로 팝)_M12|",
"https://cdn1.suno.ai/7d9ce093-de55-4a4d-8f40-3278a4619b0d.mp3|[미분류] 희야를 만났던 '설악산 로망스' (레트로 팝 록)_M02|",
"https://cdn1.suno.ai/dd6082b9-751b-4555-b85f-9cc97cb6fff9.mp3|[미분류] 설악산 1주년에 만난 희야의 편지 (신스팝)_M10|",
"https://cdn1.suno.ai/d21a3309-c5c0-440a-a8b6-6947cbc4ea36.mp3|*[미분류] 해태 퍼모스트의 연서 (코믹 미스터리 영화)_W02|",
"https://cdn1.suno.ai/f04da4eb-982e-43a8-9ebd-85f52955a1c8.mp3|[트롯발라드] 소년시대, 그 아득한 날들.. (트로트 발라드)_MW13|",
"https://cdn1.suno.ai/00143fd2-2678-40b4-bc80-921790e0d0df.mp3|[트롯발라드] 강릉 단오제 고교축구 라이벌 상농전 (브라스)_M19|224",
"https://cdn1.suno.ai/d2b168fe-cd6b-45d1-affd-2b00202951c0.mp3|[트롯발라드] 음악실 앞의 그림자 (트로트)_MW03|",
"https://cdn1.suno.ai/7e4a1ab2-b5be-4e09-86a2-89da86dfeaf1.mp3|[트롯발라드] 고교 시절 선배들의 군기 (클래식 록)_M04|",
"https://cdn1.suno.ai/e423eb96-6496-4434-a717-add3c09623cf.mp3|[트롯발라드] 홍제동에서의 객지 설움 (기타 빈티지)_M04|",
"https://cdn1.suno.ai/70945f5d-f82b-4ecb-8955-d562a73485d3.mp3|[트롯발라드] 멋쟁이 기타리스트를 꿈꾸며.. (7080 포크송)_M10|",
"https://cdn1.suno.ai/3d045886-ea37-4fc3-a91d-70ab6ad20191.mp3|[트롯발라드] 도민체전 마스게임, 나의 긍지 (트로트)_M05|",
"https://cdn1.suno.ai/852cfefd-3c8e-4b5a-8821-bbcc87f1aec2.mp3|[트롯발라드] 강릉상고 축구의 전성기 (브라스)_M02|",
"https://cdn1.suno.ai/e8b43fe1-3ae6-4cd3-acfd-9343c503afc4.mp3|[트롯발라드] 소년시대의 철부지 싸움 (추모 피아노)_M09|",
"https://cdn1.suno.ai/626f9236-c2ed-4109-9009-68778323a271.mp3|[트롯발라드] 고3, 실망하신 아버지의 편지 (전통 발라드)_M31|",
"https://cdn1.suno.ai/070c0ec2-30c2-4f6b-88e6-844c340fe2c1.mp3|[트롯발라드] 설악산 1주년에 만난 희야의 편지 (발라드)_M02|182",
"https://cdn1.suno.ai/48fdf699-5ea6-4614-afa7-b238c07630ed.mp3|[트롯발라드] 봉투 속의 마음 (발라드)_M02|235",
"https://cdn1.suno.ai/4b22e8ac-2e95-4af9-9794-1da62b7aa494.mp3|[트롯발라드] 편지, 그 추억의 날들.. (발라드)_W05|",
"https://cdn1.suno.ai/113ce197-1d97-41c3-8f2c-62d7f888bb78.mp3|*[발라드] 소년시대, 그 아득한 날들.. (발라드)_M04|",
"https://cdn1.suno.ai/cac26ace-0893-43d5-bbf7-43d9a97025f6.mp3|[발라드] 1학년 신입생의 설움 (전통 발라드)_W04|",
"https://cdn1.suno.ai/666f328f-81e6-4dbc-8656-6ba07acf749b.mp3|[발라드] 어리버리 1학년의 설움 (레트로 팝)_M01|",
"https://cdn1.suno.ai/89889439-1b8f-498a-898e-6268d5d16126.mp3|[발라드] 홍제동에서의 객지 설움 (발라드)_M01|",
"https://cdn1.suno.ai/92549fb3-99b9-4fb7-953f-231568b8b0d6.mp3|[발라드] 멋쟁이 기타리스트를 꿈꾸며.. (발라드 기타)_M01|",
"https://cdn1.suno.ai/95dd36b2-37e5-4a87-82ca-7a0a2e5d1a32.mp3|[발라드] 고삐 풀린 영화 매니아 (발라드)_M04|",
"https://cdn1.suno.ai/aa35a37d-b2d3-45f8-99d2-3cc544c3bba2.mp3|[발라드] 반공일 재낀 설악산 이야기 (발라드)_M09|",
"https://cdn1.suno.ai/ed69211a-382f-44c0-a155-122cf6c42c33.mp3|[발라드] 난리 부르스 수학여행 (발라드 피아노)_W01|",
"https://cdn1.suno.ai/d3d686c0-82dd-4a7e-a36d-397dddbed206.mp3|[발라드] 소년시대의 철부지 싸움 (감성 발라드)_M07|",
"https://cdn1.suno.ai/f51547fb-0e30-418c-9038-c8d4d848766a.mp3|*[발라드] 고3, 실망하신 아버지의 편지 (전통 발라드)_M32|",
"https://cdn1.suno.ai/727aa890-4b4a-40dd-a647-99a16326f95f.mp3|*[발라드] 심성 착한 완수 이야기 (전통 발라드)_M13|",
"https://cdn1.suno.ai/89771c62-0da6-46b3-99f6-fc118f0574ac.mp3|[발라드] 설악산 1주년에 만난 희야의 편지 (전통 발라드)_M04|",
"https://cdn1.suno.ai/691e1047-e3da-4bd5-95ab-02b9c70c657f.mp3|[발라드] 내 서랍 속 추억의 편지 (발라드)_W04|",
"https://cdn1.suno.ai/4626b958-6839-4da8-a41f-dabbdcc085f5.mp3|*[발라드] 봉투 속의 마음 (전통 발라드)_W04|",
"https://cdn1.suno.ai/2a0d8491-9d2c-415b-b34e-b12fa2f8e1cd.mp3|[발라드] 편지, 그 추억의 날들.. (발라드)_M01|",
"https://cdn1.suno.ai/dd82ad0f-8f5f-43b4-ad92-efe3fd75dd79.mp3|[포크] 소년시대, 그 아득한 날들.. (바이올린 드럼)_MW06|",
"https://cdn1.suno.ai/c2f63985-2ffc-4810-a6d5-fdccb2e52785.mp3|[포크] 강릉 단오제 고교축구 라이벌 상농전 (브라스)_M12|",
"https://cdn1.suno.ai/4d244cd8-610a-4e65-bb23-1b4ec3bf60a2.mp3|[포크] 음악실 앞의 그림자 (포크 발라드)_M02|",
"https://cdn1.suno.ai/51183589-7ddb-463f-91f5-23a5a4309fa2.mp3|[포크] 고교 시절 선배들의 군기 (포크 록)_M02|",
"https://cdn1.suno.ai/e5b63c4b-f8d2-4efa-8880-ba68dc06ac76.mp3|[포크] 감초 선생님과의 월담 (팝록)_M06|",
"https://cdn1.suno.ai/6f277f1e-de18-4cb9-87fa-7de99ac0755e.mp3|[포크] 홍제동에서의 객지 설움 (포크 발라드)_W01|",
"https://cdn1.suno.ai/5a98ac0f-d0a3-49b3-87e4-2fcdc9124b63.mp3|*[포크] 멋쟁이 기타리스트를 꿈꾸며.. (포크송)_M15|",
"https://cdn1.suno.ai/a1636578-5d73-4c40-abf3-c2d20bb23273.mp3|[포크] 도민체전 마스게임, 나의 긍지 (7080 포크송)_M01|",
"https://cdn1.suno.ai/db4e2460-666e-4f35-9e55-8dba6faa25cf.mp3|[포크] 강릉상고 축구의 전성기 (브라스 kch)_M20|",
"https://cdn1.suno.ai/d4d63378-75c2-42c6-869d-04b24b5ca856.mp3|[포크] 소년시대의 철부지 싸움 (추모 피아노)_M08|",
"https://cdn1.suno.ai/4e78639d-3532-46ab-81c1-7a12404c142e.mp3|[포크] 고3, 실망하신 아버지의 편지 (포크 발라드)_M11|",
"https://cdn1.suno.ai/e9d8899e-d4fb-492b-b791-863195ec431d.mp3|[포크] 봉투 속의 마음 (피아노)_W03|",
"https://cdn1.suno.ai/4acc628d-62d4-4409-8d4a-6399e9d9a5dc.mp3|[트롯] 소년시대, 그 아득한 날들.. (트로트)_MW10|",
"https://cdn1.suno.ai/b84edd69-6236-4390-9834-a3f98ec26016.mp3|[트롯] 강릉 단오제 고교축구 라이벌 상농전 (심포닉)_MW01|",
"https://cdn1.suno.ai/a846b228-8465-42cc-a96b-d1deca15c12e.mp3|[트롯] 감초 선생님과의 월담 (레트로 팝)_M14|",
"https://cdn1.suno.ai/bb6f461d-297e-46b3-89b8-d675926f2861.mp3|[트롯] 고삐 풀린 영화 매니아 (트로트)_M09|",
"https://cdn1.suno.ai/6c4c781d-e2fa-4fd3-b06d-07ba10c08351.mp3|[트롯] 도민체전 마스게임, 나의 긍지 (트로트)_W04|",
"https://cdn1.suno.ai/4a44b079-1390-423f-9bdb-cc8e30d0f878.mp3|[트롯] 반공일 재낀 설악산 이야기 (트로트)_W17|",
"https://cdn1.suno.ai/301d6e70-4a14-459d-a978-1fea69955ef0.mp3|*[트롯] 열여섯 살 펜팔 소년 (트로트)_W08|",
"https://cdn1.suno.ai/2530fd08-ddd8-4ba0-82e0-d0f68c810268.mp3|*[트롯] 친구 따라 간 '옥거리' 로망스 (트로트)_W05|",
"https://cdn1.suno.ai/cf892f02-83a7-41f7-8e4c-134be5ae02ca.mp3|[트롯] 하숙생들의 일탈, 향토 장학금 (트로트)_W01|",
"https://cdn1.suno.ai/478e2bff-7c7d-4397-a7ac-566dccc11433.mp3|[트롯] 고3, 실망하신 아버지의 편지 (우울한 발라드)_M14|",
"https://cdn1.suno.ai/bcdc1126-ea8a-4e5a-baca-80185b10bdc2.mp3|[트롯] 설악산 1주년에 만난 희야의 편지 (트로트)_W04|",
"https://cdn1.suno.ai/d9e29737-9c7f-44a4-8bf2-de2eee8fcdf4.mp3|[트롯] 도용당한 연서의 자초지종 (트로트 80bpm)_MW02|176",
"https://cdn1.suno.ai/d28b2451-b19d-4ce7-94e7-37769662f6b9.mp3|[트롯댄스] 강릉 단오제 고교축구 라이벌 상농전 (브라스)_M25|",
"https://cdn1.suno.ai/2fe752b1-c655-4d7a-b15f-8e644d8059dd.mp3|[트롯댄스] 강릉상고 축구의 전성기 (브라스)_M13|",
"https://cdn1.suno.ai/b01a0470-9955-41d7-ad0d-c5bab1b98c6b.mp3|[트롯댄스] 난리 부르스 수학여행 (코미디 영화 음악)_M04|",
"https://cdn1.suno.ai/478c2d83-dd4b-476c-a44d-e2a400531099.mp3|[브라스] 강릉 단오제 고교축구 라이벌 상농전 (브라스)_M07|175",
"https://cdn1.suno.ai/82ef9e1e-9365-4394-9ffe-f873cb48ba10.mp3|[브라스] 청룡과 백호의 날, 상농전 (행진)_M07|",
"https://cdn1.suno.ai/71c209e2-2ecb-496e-8191-487266b0058e.mp3|[브라스] 상농전, 그 푸른 붉은 물결 (브라스)_M05|208",
"https://cdn1.suno.ai/6a520bfc-443e-40d1-b189-4acdba7cf902.mp3|[브라스] 도민체전 마스게임, 나의 긍지 (브라스 KCH)_M11|",
"https://cdn1.suno.ai/3e9998d9-a31e-40a2-9c72-ce643db5bd48.mp3|[브라스] 반공일 재낀 설악산 이야기 (행진)_M08|",
"https://cdn1.suno.ai/845cadff-66bb-49ea-8f0d-b645b2a83668.mp3|[브라스] 강릉상고 축구의 전성기 (행진 kch)_M30|",
"https://cdn1.suno.ai/7c471eff-6ebe-46c2-b676-e0a85773d186.mp3|[미분류] 소년시대, 그 아득한 날들.. (더브 베이스)_M10|",
"https://cdn1.suno.ai/402d2fa4-265f-4dcb-bdd4-592e575c0591.mp3|[미분류] 강릉 단오제 고교축구 라이벌 상농전 (행진)_M18|",
"https://cdn1.suno.ai/ee729daf-ed73-42e1-ab0b-76beb8e84a26.mp3|[미분류] 고교 시절 선배들의 군기 (록 포크송)_W01|",
"https://cdn1.suno.ai/82fee7d2-6b7a-462f-a56f-fa1179395a52.mp3|[미분류] 감초 선생님과의 월담 (인디 팝)_M02|",
"https://cdn1.suno.ai/12993858-06bd-46bf-98bb-776fe8148e59.mp3|[미분류] 멋쟁이 기타리스트를 꿈꾸며.. (인디 팝)_M03|",
"https://cdn1.suno.ai/64503750-61f9-4afa-a3e5-e270a7a3564f.mp3|[미분류] 반공일 재낀 설악산 이야기 (에모팝)_W15|",
"https://cdn1.suno.ai/775bb194-8893-4c63-9f71-d536fef00e75.mp3|[미분류] 강릉상고 축구의 전성기 (행진곡 KCH)_M23|",
"https://cdn1.suno.ai/4d42c8be-b2c5-48cf-944d-b5568dc65f3a.mp3|[미분류] 난리 부르스 수학여행 (록 앤섬)_M01|",
"https://cdn1.suno.ai/a82a91bf-bd42-48fb-9249-159e0ffd8655.mp3|[미분류] 친구 따라 간 '옥거리' 로망스 (레트로 팝 록)_M02|",
"https://cdn1.suno.ai/f0116e74-06ee-4118-b87c-541475de2de6.mp3|[미분류] 고3, 실망하신 아버지의 편지 (7080 레트로 팝)_M13|",
"https://cdn1.suno.ai/21111621-d24a-400d-8b21-16c211238f86.mp3|[미분류] 고교 시절의 '덕찬 육천지교' (70년대 포크 록)_M03|",
"https://cdn1.suno.ai/f5eec475-ceb9-427b-9aa5-4611416cf1b5.mp3|[미분류] 설악산 1주년에 만난 희야의 편지 (신스팝)_W09|",
"https://cdn1.suno.ai/452008e2-d179-4016-9ea5-1010f754bb7e.mp3|[미분류] 해태 퍼모스트의 연서 (인디)_M05|",
"https://cdn1.suno.ai/c0c6d2d5-2692-4c9e-afee-1568fcbd4c47.mp3|[트롯발라드] 소년시대, 그 아득한 날들.. (트로트)_MW11|",
"https://cdn1.suno.ai/26380d80-9b2c-4e00-8729-2220bd8cc704.mp3|[트롯발라드] 강릉 단오제 고교축구 라이벌 상농전 (브라스)_M08|192",
"https://cdn1.suno.ai/423ae286-c2da-4ae2-aa98-846543804cad.mp3|[트롯발라드] 1학년 신입생의 설움 (바이올린 드럼)_M14|",
"https://cdn1.suno.ai/ad3c8e73-a38e-495b-b906-9ff25e3e9460.mp3|[트롯발라드] 어리버리 1학년의 설움 (레트로 팝)_M02|207",
"https://cdn1.suno.ai/8cd4a2c2-a7b9-4e35-82a9-0375c152a8e4.mp3|[트롯발라드] 음악실 앞의 그림자 (포크 발라드)_M01|",
"https://cdn1.suno.ai/d3b39b1e-2e87-441e-91f7-7019ba6946b6.mp3|[트롯발라드] 고교 시절 선배들의 군기 (통기타 포크)_M11|",
"https://cdn1.suno.ai/b117c412-1c94-4440-8c00-835c082cbfa9.mp3|[트롯발라드] 홍제동에서의 객지 설움 (기타 빈티지)_M03|218",
"https://cdn1.suno.ai/2ecf4103-506f-4e32-84c1-23dea6c032d4.mp3|[트롯발라드] 멋쟁이 기타리스트를 꿈꾸며.. (7080 통기타)_M14|",
"https://cdn1.suno.ai/9122c4e3-52ed-47e2-af55-0c7ed25b2ace.mp3|[트롯발라드] 강릉상고 축구의 전성기 (행진곡 KCH)_M22|",
"https://cdn1.suno.ai/5b6cc39d-c28d-4389-8190-1418b59e4839.mp3|[트롯발라드] 소년시대의 철부지 싸움 (추모 피아노)_M03|",
"https://cdn1.suno.ai/574bb0f5-3765-41d9-83b8-fdb3621a0f34.mp3|[트롯발라드] 고3, 실망하신 아버지의 편지 (우울한 발라드)_M15|",
"https://cdn1.suno.ai/5c31bb29-0820-4dff-8e87-c12854684f7d.mp3|[트롯발라드] 편지, 그 추억의 날들.. (바이올린 신스팝)_M06|",
"https://cdn1.suno.ai/fdade1b6-102d-459f-8177-e9efb5f56e55.mp3|[발라드] 소년시대, 그 아득한 날들.. (발라드)_M03|",
"https://cdn1.suno.ai/90a280d8-10b1-4de9-b3d2-57b00e7c90f0.mp3|[발라드] 상농전, 그 푸른 붉은 물결 (발라드)_M04|",
"https://cdn1.suno.ai/23908cfa-f460-43d9-8185-b79c03a21b70.mp3|[발라드] 1학년 신입생의 설움 (전통 발라드)_W03|",
"https://cdn1.suno.ai/da10527b-dcc9-489b-931e-2bcfa5a474c1.mp3|[발라드] 어리버리 1학년의 설움 (발라드 피아노)_MW03|274",
"https://cdn1.suno.ai/cbd14b54-f430-4e51-944d-f24bc2cfee55.mp3|[발라드] 홍제동에서의 객지 설움 (발라드)_M05|",
"https://cdn1.suno.ai/aa9d8e91-5db1-4eb8-b2c1-262640cbda3f.mp3|[발라드] 멋쟁이 기타리스트를 꿈꾸며.. (어쿠스틱 기타)_M13|",
"https://cdn1.suno.ai/bbf2c6ea-9c70-49fb-a27b-603313723bf0.mp3|[발라드] 고삐 풀린 영화 매니아 (발라드 피아노)_M08|197",
"https://cdn1.suno.ai/ab245c16-7fd5-45ef-9e57-05dda13774cb.mp3|[발라드] 반공일 재낀 설악산 이야기 (발라드)_M10|",
"https://cdn1.suno.ai/09fc9b91-2f1c-43ba-8656-1ef1f0a39872.mp3|[발라드] 강릉상고 축구의 전성기 (발라드)_M19|",
"https://cdn1.suno.ai/0d4e87dc-fd62-4ec5-bff2-9d70d14a556e.mp3|[발라드] 난리 부르스 수학여행 (포크 발라드)_M05|256",
"https://cdn1.suno.ai/0b35ad42-18f9-466c-bc47-08752b4555d7.mp3|[발라드] 소년시대의 철부지 싸움 (바이올린)_MW01|224",
"https://cdn1.suno.ai/e1d85b38-fd71-4180-8123-f7314df66e31.mp3|*[발라드] 고3, 실망하신 아버지의 편지 (느린 발라드)_M08|284",
"https://cdn1.suno.ai/490fabfc-772d-49e3-a2bc-d9f0a1a98f92.mp3|[발라드] 심성 착한 완수 이야기 (발라드)_M08|",
"https://cdn1.suno.ai/d0a0ffe9-eb9e-461c-b61c-d334fab216ac.mp3|[발라드] 설악산 1주년에 만난 희야의 편지 (발라드)_M06|",
"https://cdn1.suno.ai/81f6b0ad-0028-46ce-bcf4-3a5405188bca.mp3|*[발라드] 내 서랍 속 추억의 편지 (전통 발라드)_M11|",
"https://cdn1.suno.ai/5edf67eb-914d-43e7-928d-f3ca7d134f58.mp3|[발라드] 봉투 속의 마음 (발라드)_M01|",
"https://cdn1.suno.ai/4b725ed4-8ac3-4c73-ace8-efd31b1f67b5.mp3|[발라드] 편지, 그 추억의 날들.. (발라드)_W01|",
"https://cdn1.suno.ai/42966c4a-85f4-4134-ae8a-13f3f6377154.mp3|*[포크] 논산 제2훈련소, 전반기의 추억 (7080 포크송)_M02|",
"https://cdn1.suno.ai/546281a6-be4e-4802-b440-2762baad57b4.mp3|*[포크] 논산 제2훈련소, 후반기의 추억 (7080 포크송)_M04|",
"https://cdn1.suno.ai/03189bd0-4ff6-4dd6-b630-c6fcf23e330c.mp3|*[포크] 훈병에서, 전경대 이경으로.. (7080 포크송)_M02|",
"https://cdn1.suno.ai/9e10d723-1d03-4529-8ee4-447d725a032b.mp3|*[포크] 논산 제2훈련소, 전반기의 추억 (7080 포크송)_M01|",
"https://cdn1.suno.ai/6293ed7a-444a-4249-aa70-ea0ecd1294e1.mp3|*[포크] 논산 제2훈련소, 후반기의 추억 (7080 포크송)_M05|",
"https://cdn1.suno.ai/0be3f41e-53cd-4c18-91ed-562aac2538e3.mp3|*[포크] 훈병에서, 전경대 이경으로.. (7080 포크송)_M07|",
"https://cdn1.suno.ai/546fb08c-bd41-4525-818e-562977f3fd22.mp3|*[포크] 훈병에서, 전경대 이경으로.. (7080 포크송)_M01|",
"https://cdn1.suno.ai/f2cbdc9f-ec4f-4ac9-ad82-9f85b7102d40.mp3|*[포크] 훈병에서, 전경대 이경으로.. (7080 포크송)_M08|",
"https://cdn1.suno.ai/43c83958-6769-4ac2-85fc-5aca816a2123.mp3|*[트롯] 논산 제2훈련소, 전반기의 추억 (트로트)_MW01|",
"https://cdn1.suno.ai/17d13db3-78c1-4278-94ba-5482afd2fe56.mp3|*[트롯] 논산 제2훈련소, 후반기의 추억 (트로트)_MW02|",
"https://cdn1.suno.ai/f498e1fa-e4c3-447d-916b-4af162a68922.mp3|*[트롯] 훈병에서, 전경대 이경으로.. (트로트)_M06|",
"https://cdn1.suno.ai/8fa3898e-b6c7-44fa-be28-709b91eaf8ee.mp3|*[트롯] 논산 제2훈련소, 전반기의 추억 (트로트)_M05|",
"https://cdn1.suno.ai/c14b30bf-91ca-41de-a2fd-1def7bbf74a5.mp3|*[트롯] 논산 제2훈련소, 후반기의 추억 (트로트)_MW03|",
"https://cdn1.suno.ai/897978e6-05d9-418b-bdca-2c3188131eca.mp3|*[트롯] 훈병에서, 전경대 이경으로.. (트로트)_MW01|",
"https://cdn1.suno.ai/92cb7f88-f006-45de-bb10-11330fc7035d.mp3|*[트롯] 논산 제2훈련소, 후반기의 추억 (트로트)_MW01|",
"https://cdn1.suno.ai/203336f1-266a-4b6a-bd44-044fc0509618.mp3|*[트롯] 훈병에서, 전경대 이경으로.. (트로트)_MW02|",
"https://cdn1.suno.ai/b31f8051-eccf-421c-8df6-af5c3c9f21a0.mp3|*[트롯] 논산 제2훈련소, 후반기의 추억 (트로트)_M03|",
"https://cdn1.suno.ai/fbca9516-9397-4a1c-ab9f-d0467e99458f.mp3|*[트롯] 훈병에서, 전경대 이경으로.. (트로트)_M05|",
"https://cdn1.suno.ai/cdf23da5-32f5-4e7f-8711-ef30aca79737.mp3|*[브라스] 논산 제2훈련소, 전반기의 추억 (브라스)_M04|",
"https://cdn1.suno.ai/cc2e0ce2-4c0e-43ac-b774-947066c43a62.mp3|*[브라스] 논산 제2훈련소, 후반기의 추억 (브라스)_M06|",
"https://cdn1.suno.ai/03650977-675f-43e6-9fbb-3377147d28f1.mp3|*[브라스] 훈병에서, 전경대 이경으로.. (브라스)_M04|",
"https://cdn1.suno.ai/afd09c4e-4e69-4b23-b52e-1c6b4622ba93.mp3|*[브라스] 논산 제2훈련소, 전반기의 추억 (브라스)_M03|",
"https://cdn1.suno.ai/9eaae616-58c2-40e1-a04a-ad247345ea22.mp3|*[브라스] 논산 제2훈련소, 후반기의 추억 (브라스)_M07|",
"https://cdn1.suno.ai/57dac648-3084-495c-ba5a-eee45d77b631.mp3|*[브라스] 훈병에서, 전경대 이경으로.. (브라스)_M03|",
"https://cdn1.suno.ai/62812de6-1cb1-4e19-bdde-9fb72b009811.mp3|*[발라드] 논산 제2훈련소, 전반기의 추억 (발라드)_W01|",
"https://cdn1.suno.ai/789fddc4-22d8-4efa-8fe8-691b74f29656.mp3|*[발라드] 논산 제2훈련소, 후반기의 추억 (발라드)_M02|",
"https://cdn1.suno.ai/5f927b15-e546-438e-80d3-bd35765fe8b3.mp3|*[발라드] 논산 제2훈련소, 전반기의 추억 (발라드)_W02|",
"https://cdn1.suno.ai/736c90a4-9c7a-4639-b474-15cc2c838778.mp3|*[발라드] 논산 제2훈련소, 후반기의 추억 (발라드)_M01|",
]

song = [
`<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/w2O7G/btsOwvLzvhs/ZIe7tvEvh6OwCShCEqEJVK/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>당신들의 생일을 축하합니다</b></font><br><br>

사랑하는 아들, 고운 며느리<br>
오늘 당신들의 생일을 축하합니다<br>
두 사람이 함께 걸어가는 길<br>
언제나 행복과 웃음 가득하기를..<br><br>

생일 축하해요, 나의 소중한 두 사람<br>
세상 가장 아름다운 당신들을 위해<br>
이 노래를 불러요, 마음을 담아<br><br>

늘 건강하고, <br>
늘 사랑하며, <br>
늘 행복하세요<br><br>

처음 당신들을 만났던 그날<br>
가슴 벅찬 설렘과 기쁨이었소<br>
어느새 이렇게 훌쩍 자라<br>
나의 든든한 버팀목이 되어주었네요<br><br>

생일 축하해요, 나의 소중한 두 사람<br>
세상 가장 아름다운 당신들을 위해<br>
이 노래를 불러요, 마음을 담아<br><br>

늘 건강하고, <br>
늘 사랑하며, <br>
늘 행복하세요<br><br>

때로는 힘든 날도 있겠지만<br>
서로를 보듬어주며 이겨내길 바라요<br>
함께 살아가며 아름다운 추억을<br>
하나하나 만들어가는 당신들이 되기를<br><br>

생일 축하해요, 나의 소중한 두 사람<br>
세상 가장 아름다운 당신들을 위해<br>
이 노래를 불러요, 마음을 담아<br><br>

늘 건강하고, <br>
늘 사랑하며, <br>
늘 행복하세요<br><br>

다시 한번 생일을 축하하며,<br>
이 기쁜 날, 오래도록 기억되기를..<br><br>

사랑해요, 나의 아들, 나의 며느리<br>
영원히 축복합니다~~<br>
</td></tr></table>`,
`<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/w2O7G/btsOwvLzvhs/ZIe7tvEvh6OwCShCEqEJVK/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid2'>
<font color='blue'><b>로운이와 함께 하는 결혼 4주년 축하해!</b></font><br><br>

경진과 휘경, 두 사람의 이야기<br>
사랑으로 엮어가는 4년의 시간<br><br>

햇살 닮은 미소로 처음 만난 날<br>
설렘 가득한 눈빛, 운명처럼 이끌렸지<br><br>

함께 걸어온 발걸음, <br>
때론 힘들 때도 있었지만<br>
서로를 향한 믿음으로 굳건히 지켜왔네<br><br>

시간은 흘러 4주년, <br>
혁혼의 약속으로 다시 한번<br>
두 사람의 사랑을 세상에 노래하네<br><br>

경진아, 휘경아, <br>
너희들의 결혼 4주년을 축하한다<br><br>

함께 웃고 울었던 소중한 기억들<br>
앞으로도 변치 않을 사랑으로<br>
행복 가득한 날들만 만들어가기를..<br><br>

작년엔 없었던 작은 천사, <br>
로운이가 찾아왔으니<br>
온 세상의 빛이 되어 너희 곁을 지키네<br><br>

세 식구가 된 너희들의 모습, <br>
얼마나 아름다운지<br>
사랑이 넘치는 가정, 희망이 꽃피는구나~<br><br>

시간은 흘러 4주년, <br>
혁혼의 약속으로 다시 한번<br>
두 사람의 사랑을 세상에 노래하네<br><br>

경진아, 휘경아, <br>
너희들의 결혼 4주년을 축하한다<br><br>

함께 웃고 울었던 소중한 기억들<br>
앞으로도 변치 않을 사랑으로<br>
행복 가득한 날들만 만들어가기를..<br><br>

로운이의 환한 웃음처럼<br>
너희들의 앞날도 늘 밝게 빛나기를<br>
축복의 노래가 끊이지 않기를..<br><br>

경진아, 휘경아, <br>
결혼 4주년을 진심으로 축하한다<br><br>

함께 써 내려갈 수많은 날들<br>
영원한 사랑을 맹세하며<br>
세상 가장 행복한 부부가 되기를..<br><br>

축하한다, 그리고 사랑한다<br>
경진아, 휘경아, 로운아!<br>
영원히 행복하기를…<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/w2O7G/btsOwvLzvhs/ZIe7tvEvh6OwCShCEqEJVK/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b></b></font><br><br>

</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/w2O7G/btsOwvLzvhs/ZIe7tvEvh6OwCShCEqEJVK/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b></b></font><br><br>

</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/w2O7G/btsOwvLzvhs/ZIe7tvEvh6OwCShCEqEJVK/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b></b></font><br><br>

</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/w2O7G/btsOwvLzvhs/ZIe7tvEvh6OwCShCEqEJVK/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b></b></font><br><br>

</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/w2O7G/btsOwvLzvhs/ZIe7tvEvh6OwCShCEqEJVK/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b></b></font><br><br>

</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/w2O7G/btsOwvLzvhs/ZIe7tvEvh6OwCShCEqEJVK/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b></b></font><br><br>

</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/w2O7G/btsOwvLzvhs/ZIe7tvEvh6OwCShCEqEJVK/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b></b></font><br><br>

</td></tr></table>`,
`<table class='box' style="BACKGROUND:#C1B0D8 url('https://i.imgur.com/HtGpbPG.jpeg') no-repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>훈병에서, 전경대 이경으로..</b></font><br><br>

백만촉광에 빛나는 금의환향 개선장군<br><br>

아~ 몰랐었네, <br>
수용연대 배출대의 특명이여~<br><br>

간다 간다, 나는 간다 <br>
전라남도, 열차 5소대!<br><br>

이게 무슨 청천벽력! <br>
감자의 꿈은 날아 가고,<br><br>

팔자에 없는 낯선 곳, <br>
머나먼 저 남쪽으로..<br><br>

이별속의 아쉬운밤 강경역의 달밤이여<br>
생사고락 같이하던 동기들아 잘가거라<br><br>

송충이 이경 달고 대대, 중대 배치받아<br>
얼떨떨한 신고식에 실감난다 자대생활<br><br>

선배기수 1주 차에 후배기수 6주 차라<br>
아득하다 군대생활! 왕고참은 1주밖에<br><br>

하필이면 타격대냐 하루종일 교육훈련<br>
거수자가 출현하면 5분만에 승차 출동<br><br>

열외없는 군장구보 쪽팔린다 낙오병사<br>
그무엇과 비교하리 완주후의 개운함을<br><br>

한두대로 시작해서 스므대로 끝나가는<br>
오금마져 저려오던 공포속의 기수빠따<br>
집합없인 잠못잔다 얼능맞고 잠좀자자<br><br>

눈물난다 식사당번 애달프다 신병생활<br>
해안초소 경비견도 3년이면 라면 끓여<br>
우리애인 영희보다 요리솜씨 능가하리<br><br>

전출신고 전입신고 다시되는 쫄병신세<br>
따블빽을 한번싸면 사회생활 3년 보장<br>
일곱번의 따블빽에 신고식은 도사됐다<br><br>

생각못한 자대교육 다중범죄 진압훈련<br>
지랄같은 싸싸싸에 청천벽력 복창소리<br>
다다다다 발구르며 빌어먹을 충성용감<br><br>

분대 횡대 소대 설대 이중 중대 횡대로<br>
시가지진압 초동진압 상황끝 헤쳐모여<br>
곡차중심 이중중대 끝을맺는 진압훈련<br><br>

진압 수칙, 제 1조,<br>
데모 군중은 우리의 적이 아니다~<br>
준수하자 발사 각도, 가스총의 45 도!<br><br>

막아내자 교외진출 대학정문 대치근무<br>
여학생이 껌하나로 감명주던 착한손길<br><br>

방독면 방석모 방석복이 철갑이로다~<br>
MPG 100 사과탄 개스 범벅 와중속에<br><br>

날아드는 돌멩이와 화염병을 감수하며<br>
오직하나 사명감에 신명바친 데모진압<br><br>

교통보조 방범근무 거점배치 혼잡경비<br>
숨막히고 힘들었다 닭장버스 부동자세<br>
긴장속의 닭장생활 얼마만한 날이었나<br><br>

길고길다 쫄병생활 언제쯤에 고참될까<br>
청소당번 식사당번 워카당번 진급돼도<br>
중고참도 멀었구나 부러버라 왕고참아<br><br>

거.꾸.로. 매달아도 국방시계 돌아간다<br>
더딘시계 돌고돌아 제대증을 받은지금<br>
남은것은 개구리복 허무함과 아쉬움뿐<br><br>

후배들아 잘있거라 나는간다 고향으로<br>
국방부의 고된훈련 내무부의 힘든근무<br>
파란만장 병영생활 모든것을 반납하고<br><br>

부모형제 기다리는 고향으로 돌아간다<br><br><br>


서울시 전경교통 1기생, 견장 85번<br><br>

동대문 경찰서 교통계 일동이 <br>
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
함께 하시길...<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:white url('https://i.imgur.com/USjr2mA.jpeg') no-repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='green'><b>논산 제2훈련소, 후반기의 추억</b><br><br></P>
<P class='mid2'>
훈련 끝이 아니구나, 후반기는 이제 시작<br>
따블 백을 짊어지고, 27연대 들어 서니..<br>
우랄 같은 내무반장, 공갈치며 군기 잡네<br><br>

에이아르 자동 소총, 헷갈린다 분해 결합<br>
어깨 위에 8.8 Kg, 90도 방향 대공 쏴~<br>
'어머님 은혜' 부르며 눈물흘린 이병생활<br><br>

입만 벙긋, 군가 측정, 반동 준비, 으악!!<br>
반동은, 천당에서 지옥으로 "군가 시작!"<br>
목 터지는 군가 속에 사명감이 솟구친다.<br><br>

처음 겪는 사격소리, 어리벙벙 귀가 멍멍<br>
영점 사격 빗나가니 초장부터 원산 폭격<br>
방아쇠를 당길 때는 소녀가슴 만지듯이..<br>
산에가야 범을잡지 보긴 했나 소녀 가슴!<br><br>

총열 위에 바둑돌의 거짓 격발 들통나서<br>
하나 양심 둘에 불량, 고문관이 따로없네<br>
L.M.G. 조총 훈련, 뜀박질에 새빠지고..<br><br>

얄궂구나 조교 장난, 에레무지 총검술아<br>
부사수의 필수 도구, 귀마개용 담배필터<br><br>

달콤했던 5분 휴식, 꿀맛 같다 화랑 담배<br>
노래 1 발 장전 속에, 싹터가는 전우애도<br>
천장 없는 변소에선, 도난방지 사주 경계<br><br>

목숨 걸던 10원짜리 쿠폰마저 바닥나고<br>
철망 밖의 뽀빠이들, 손짓하며 유혹하니<br>
독사 눈길 피해가며, 반입성공 사제음식<br><br>

오뉴월의 폭염 속에, 뺑이 치던 각개전투<br>
간절해진 염분 섭취, 스페어 깡 들려다가<br>
워카발에 걷어 차인, 애처로운 내 엉덩아<br><br><br>


유방봉에 올라가며 조교 향한 성난 함성!<br>
정상에서 분풀이다 폐 타이어 찔러 찔러!<br>
내려다본 고속도로 절로 난다 고향생각~<br><br>

미숙함의 완전군장 대충 메고 행군이다<br>
아량있다 작전실패, 용서없다 경계실패!<br>
전방같은 철책 모형 스산함이 몰려온다~<br><br>

신기하다 땅굴 견학, 흠칫 놀란 크레모아<br>
경계교장 소풍 가니 후반기도 "상황 끝!"<br>
정들었나 조교님들, 애썼네요 교관님들..<br><br><br>


백만촉광 하나 달고, 금의환향 수용연대<br>
한결같이 애덜같은 어리버리 장정들아~<br>
이리 온나 아그들아! 고향초 좀 헌납하렴<br><br>

내 세상이 따로 없구나, <br>
역시 군대는 짬밥이다~~<br><br>

(하하하~ 하하하~ 하~~)</font><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#99FFFF url('https://i.imgur.com/45OAhcx.jpeg') no-repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>논산 제2훈련소, 전반기의 추억</b></font><br><br></P>
<P class='mid2'>
통기타에 장발머리, 음악다방 유행할 때<br>
논산으로 집결하는 소집 영장 받고 보니<br>
섭하구나 학우들아, 잘 있게나 댕겨오마<br><br>

부모님께 인사하고, 연무대에 들어갈 제<br>
애자숙자 잘 있거라, 사나이 돼 나오려마<br>
훈련소에 들자마자 '여러분'이 '새끼'된다<br><br>

나는 새도 떨군다는 조교들의 고함 소리<br>
동작봐라 발 보인다, 발바닥에 불나도록<br>
방울소리 딸랑딸랑, 인간개조 시간 문제<br><br>

횡대 종대 헤쳐 모여, 선착순 몇 번 만에<br>
굼벵이가 번개 되고, 장정 눈에 불이난다<br>
앉은번호 시켜보니 '하나' 하자 '번호 끝!'<br><br>

아랫도리 훌렁 까고 신체검사 통과하니<br>
방역 주사 완짜 맞고, 장정에서 훈병으로<br>
잠시나마 부러웠다, <br>
트럭에 탄 "고향 앞으로.."<br><br>

수용 연대 뒤로하고, 29 연대 들어설 제<br>
지랄 같고 독사 같은 조교들이 하는 말이<br>
피는 뽑아 헌혈하고, 뼈는 추려 관물하니<br>
여기메가 지옥이냐 때려잡는 도살장이냐<br><br>

좌로 굴러 우로 굴러, 엎어졌다 일어섰다<br>
혼비백산 중대 편성, 우왕좌왕 소대 편성<br>
놓지 말자 다짐했던, 친구 손은 멀어지고<br><br>

내무반에 배치되니, 침상 위에 3선 정렬<br>
'사제물건 몽땅꺼내' 서슬퍼런 협박 속에<br>
아깝고도 아까워라, 팬티 속의 만 원짜리<br><br>

부동자세 제식훈련, 1주일이 가버리고<br>
피가 나고 알이 배고 이 갈리는 P.R.I.<br>
봉체조와 도수체조 총검술에 2주일이..<br><br>

모닝커피 쪼글뛰기, 밥 먹듯이 오리걸음<br>
귀따갑게 못 박혔다, "0.5 초, 동작그만"<br>
에구에구 지겨워라, 도로 아미 "원위치!"<br><br>

엉덩이가 무거워서 시범케스 따놓은당상<br>
얼 차려에 얼 빠지고, 쪼인트는 간식이다<br>
처음 듣는 소원수리, 알고보니 죽음 종이<br><br>

힘겨웠던 훈병에겐 위문편지 약일진대<br>
야속하다 이쁜이야 고무신만 꺾는구나<br>
서러버서 우는구나 10문 7의 통일화야<br><br>

선착순도 불사했던 건빵 제공 사역 집합<br>
생선튀김 나올 때면 자원해서 식사 당번<br>
그때 먹어 평생 물린 뿔은라면, 노란카레<br><br>

일요일은 환자의 날, 너도나도 종교 환자<br>
연무관에 가는 날은, 훈련병들 최고의 날<br>
설사빵은 먹지 마라, 먹는 즉시 직방이다<br><br>

총열잡고 머리위로 오리걸음 쭐떡미끈~<br>
눈물고개 넘어서니 각개전투 황하 교장<br>
높은포복 낮은포복 응용포복 빡빡 기고..<br><br>

수류탄의 투척 시범, 가슴 속은 벌렁벌렁<br>
눈물콧물 범벅속에 슬픈합창 '고향의 봄'<br>
눈물어린 화생방에 전반기는 "상황 끝!"<br><br><br>


호텔 같은 신규 막사, 29 연대여!<br>
이제는.. 안녕~~<br><br>

중화기 사수가 되기 위하여<br>
"김 일병과 이쁜이", 그 막사가 있는 곳<br><br>

27 연대로 나는 간다~~~<br>
 <br>
(라라라~ 라라라~ 라~~)<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/w2O7G/btsOwvLzvhs/ZIe7tvEvh6OwCShCEqEJVK/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>영미 동생, 영선의 노래</b></font><br><br>

양초 동창 영미의 여동생,  <br>
임영선이라는 그 이름!  <br>
간호조무사 자격증보다  <br>
그녀의 눈빛이 더 빛났었네<br><br>

스타월드 양호 담당 면접에서 <br>
채용되어 웃으며 나서던 그 순간  <br>
속초 시청의 전화 한 통에  <br>
모든 게 뒤집혀 버렸네<br><br>

벽에 기대어 펑펑 울던 그녀!<br>
처음 본 날, 처음 본 그 눈물에  <br>
나는 아무것도 해줄 게 없었네<br><br>

술잔 권하며 풀 수 있었더라면.. <br>
어찌 달래야 할지 엄청 난감했었지 <br><br>

영선아, 미안 했어..  <br>
그날의 눈물은  <br>
내 마음에 오래 남았고,<br><br>

너의 웃음은<br>
내게 위로가 되었어..<br><br>

훗날 속초 치과에 취직하여<br>
언니 가게 '영미 화원' 꽃을 안고  <br>
매일 버스에 오르던 너의 모습은 <br>
"꽃보다 영선!" 이었지..<br><br>

외려 더 많이 볼 수 있어서 <br>
나는 좋았단다~<br><br>

명성 콘도 사직 무렵, 대포의 횟집에서<br>
내게 베풀어 주었던 저녁 한 끼가<br>
내 마음 한 켠에 <br>
따뜻한 추억으로 남았어..<br><br>

삼성 취직 후에도 너를 찾아 갔었단다~ (하. 하. 하~)<br><br>

처음 본 날에 내 마음 울린 <br>
영선이라는 그 이름!  <br>
내 기억 속에 오래도록 남아~~<br>
  <br><br>

나의 동창생의 여동생이자<br>
나의 남동생의 동창이기에<br>
좀 더 가까워질 수 있었겠지만..<br>
 <br>
나와 인연이 비껴간 사람들이<br>
행복하게 사는 것을 보았기에..<br><br>

차라리 다행이라 여기며<br>
잘 살아가고 있는 너의 모습 볼 때면<br>
내 마음도 행복해 진단다~~<br><br>

내 마음 한 켠의 추억, 영선이가..<br>
이 노래 듣는 날이 오기를 바래본다~~<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:white url('https://i.imgur.com/dgZzxa6.jpeg') no-repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>울 엄마의 기구했던 생일</b></font><br><br>

용띠 해 무진년에 오시어<br>
용띠 해 갑진년에 가신..<br>
막내도 같은 띠, 용띠라 하시며<br>
좋아하셨던 나의 어머니!<br><br>

울 엄마 생일은 음력 12월 30일.<br>
"올해는 엄마 생일이 없네?"<br>
"어머야! 왜 내 생일이 없니?"<br><br>

섣달그믐은 늘 오는데<br>
음력 서른 날은 없는 해가 많아요<br>
그래서 이제부터 울 엄마 생일은<br>
무조건 설날 하루 전!<br><br>

기구했던 엄마의 생일날이기에 <br>
모처럼 찾아온 온전한 올해는 <br>
케이크 들고 재롱 떨려 했는데, <br><br>

가족들 사진 보면 환하게 웃으시던<br>
그 모습 보고 싶어 애써 준비했는데<br>
불과 며칠 남기고, <br>
왜 홀연히 떠나셨나요..<br><br>

부엌에서 과수원으로 분주한 삶에도<br>
세월 따라 손주들 자라는 자리에, <br>
함께 웃던 그 모든 날의 그 모습들.. <br>
사진 속에는 선명하게 살아계시네요~<br><br>

1번 성찬, 2번 덕찬, 3번 승찬! <br>
휴대폰의 무용지물에 가슴 아파졌고,<br><br>

애지중지하던 통장을 내어주실 때<br>
가슴이 미어졌습니다~<br><br>

엘리베이터 안,<br>
"엄마! 안녕" 나의 손짓에<br>
맥없이 손 흔들어 주시던 그 모습!<br>
그것이 마지막 인사일 줄이야... 아~~<br><br>

논화리 아버님 모셔온 그 자리, <br>
7층 로얄층에 편히 잠드소서. <br><br>

섣달그믐 아닌 좋은 날에<br>
고통 없는 곳으로, <br>
부디 극락 왕생하세요. <br><br><br>


아버님! 어머님!<br>
언제나 고마웠습니다!<br><br>

나의 어머님!<br>
영원히 사랑합니다!<br><br>

나의 아버님!<br>
영원히 사랑합니다~~~<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/w2O7G/btsOwvLzvhs/ZIe7tvEvh6OwCShCEqEJVK/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid2'>
<font color='blue'><b>아-~ 그리운 명성 설악콘도 시절이여</b></font><br><br>

푸른 꿈 안고 명성의 문을 처음 열던 날  <br>
울산바위가 일상의 배경이었던 그 시절  <br>
나는 사회 초년생, 세상은 따뜻했었다~<br><br>

안전직 705번 수험표, 낯선 면접장!<br>
엘더베리처럼 낯설지만 달콤했던 시작  <br><br>

설악 레저타운, 위락 시설의 스타월드  <br>
그곳에 총무 직으로 <br>
안전하게 착지 했었지<br><br>

설악 현지 채용, 1기로 응시하였고,<br>
설악 명성콘도의 관문, <br>
스타월드 성벽에서<br><br>

자타공인 알삼육, <br>
3인방의 거침없는 기세로<br>
나의 직장 생활은 그렇게 시작되었다~<br><br>

'콘도미니엄'의 개념을 모르던 시절에<br>
명성의 이름 아래 우리는 꿈을 꾸었고,  <br>
웃고, 울고, 사랑했던 그 모든 순간들이  <br>
지금의 나를 만들어 준 시간이었다~<br><br>

한국의 레저 관광을 선도했던 명성 그룹!<br>
몇백 원짜리 딱사평이 기십만원 되었네<br><br>

빨간색 단복 선교단 노래가 <br>
내 가슴 울렸고,<br>
산정호수 발레리나 열정은 <br>
감동으로 남았네<br>
  <br>
천 원짜리 합승 택시, <br>
"청소 안 된 방" 있기에<br>
밤늦게까지 직원들과 어울렸던 그 시절!<br><br>

식권 없어도 내주던 <br>
계란 후라이가 그립고,<br>
나의 근태관리해 주는 <br>
미스김 있어 좋았다~<br><br>

서서히 다가왔던 <br>
세무조사의 검은 그림자!<br>
김철호 회장의 <br>
"강호 제현께 알리는 말씀"<br><br>

서슬 퍼런 공권력, 국세청장과의 맞짱!<br>
명성은 그렇게 <br>
역사의 뒤안길로 사라졌다~<br><br>

급여 3개월 체납, <br>
인사 담당자로 고심은 커졌고,<br>
인사발령 횡포로 <br>
근로 의욕, 극도로 떨어졌었네<br><br>

희망의 경리과조차 갈등으로 <br>
세 번째 사직서 내며.. <br>
나는 떠나고 싶지 않았으나, <br>
떠날 수밖에 없었다~<br><br>

마크 달린 왼쪽 가슴 내밀던 <br>
전도유망 기업,<br>
명성은 사라졌지만, <br>
그 시절 나는 살아 있다  <br><br>

나의 직장 생활, 첫걸음이었던 그곳은..<br>
아늑한 고향의 품, <br>
지상 낙원, 천국이었다~<br><br><br>


아~ 그리운 시절!<br>
그리운 사람들이여!<br><br>

많이 보고 싶습니다.<br>
꼭 만나고 싶습니다.<br><br>

이 노래 듣는 날에는 <br>
기별 주기를 바라면서..<br><br>

나는 이 노래를 만들고 있습니다~~<br><br>

(아아아~ 아아아~ 아~~)<br><br>

</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/w2O7G/btsOwvLzvhs/ZIe7tvEvh6OwCShCEqEJVK/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>나의 청량제, 갈천 약수터 가는 길</b></font><br><br>

초복날, 갈천 약수터로 가는 길..<br><br>

푸르른 이끼 사이로 흐르는 물결  <br>
그 길을 따라 걷는 마음 하나!  <br>
초복의 더위마저 잊게 해주는  <br>
청량제 같은 하루가 이제 시작 됩니다<br><br>

초입새 물길, 이끼 입은 바위  <br>
숲은 푸르름을 노래하고,  <br>
부부는 손을 잡고 물 건너며  <br>
젖은 마음으로 하루를 채웁니다~<br><br>

흘러가는 갈천 계곡의 물처럼  <br>
멈추지 않는 시간 속에  <br>
나는 걷고, 뛰고, 또 멈추면서  <br>
자연과 함께 숨을 쉽니다~  <br><br>

청량한 하늘 아래 약수터로 가는<br>
이 길은 나의 노래가 됩니다~~<br><br>

쓰러진 가지 하나, 오솔길의 쉼표  <br>
천천히 조심히, 더딘 발걸음이  <br>
생각을 부르고, 마음을 정리하고  <br>
그래서 그 길은 더욱 아름다워집니다<br><br>

산이 한숨 쉬듯 폭포처럼 쏟아지는 <br>
물줄기가 여름에게 고하노라~  <br>
“더위야, 이 계곡 앞에선 물러서라!”  <br><br>

물길의 계단은 잠깐의 쉼을 만들고,  <br>
그 흐름에 내 마음도 쉬어 갑니다~<br><br>

태고의 뿌리, 이시적(異時的)인 풍경!<br>
  <br>
공룡 숨결이 살랑이는 고사리,<br>
돌보다 단단한 나무 밑동,<br>
숲속의 맥박처럼 들려 옵니다.<br><br>

“서두르지 말고, 머물러도 괜찮아~”  <br><br>

벤치 위의 낙엽 하나, 기다림의 모양  <br>
햇살과 바람이 함께 머문 그 자리!<br>
나도 그 옆자리에 앉고 싶었지만  <br>
세상은 그 여유를 허락지 않았답니다~<br><br>

작은 나뭇조각들, 하루치의 둥지..<br>
소용돌이 속에 겨우 멈춘 쉼터이거늘<br>
이곳이 정착일까, 다시 떠내려갈까<br>
미지 속에 잠시나마 머물렀습니다<br><br>

갈천 약수터로 가던 날의 하늘은<br>
박카스 상표보다 더 파란 색깔이었고<br>
디저트 수박보다 더 청량 하였습니다<br><br>


이끼 낀 바위의 푸른 절개와 <br>
세월의 인고,<br>
계곡물과 공존하는 나무들의 지혜,<br>
멈춤의 미학을 가르쳐 준 <br>
오솔길의 쉼표,<br><br>

그리고 저 멀리 태고의 신비가 깃든 듯 <br>
이시적(異時的) 풍경을 보여주던 <br>
원시림의 시간..<br><br>

일행과 멀어져도 자연과 가까워지는..<br>
'고립' 아닌 '몰입'이란 현명한 선택!<br><br>

삶의 오솔길에서도 나는 멈추고,<br>
보고, 느끼며, <br>
'청량'을 찾아 걸으렵니다~~<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/KRX8Wga.jpeg') repeat fixed center center" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>소년시대, 찬란했던 날들</b></font><br><br>

어렴풋이 떠오르는 그 시절, <br>
희미한 빛줄기 따라..<br><br>

강릉 바닷바람, <br>
양양 언덕 위 친구들의 웃음소리<br><br>

<img src="https://i.imgur.com/w0wlofD.jpeg" width=100% title="📷 "><br><br>

풋풋했던 설렘, <br>
장난기 가득했던 우리들의 이야기<br><br>

예상치 못한 순간들, <br>
잊지 못할 해프닝들..<br>
가슴속 깊이 새겨진 <br>
소중한 추억의 조각들..<br><br>

<img src="https://i.imgur.com/FCAaIXg.jpeg" width=100% title="📷 "><br><br>

시간은 흘러 강물처럼, <br>
멈추지 않고 흘러왔지만<br>
문득 펼쳐 본 이곳에, <br>
그때의 우리가 살아 숨 쉬네<br><br>

소년시대, <br>
우리 철부지들의 찬란했던 날들<br>
함께 웃고 울었던, <br>
모든 순간들이 보석 같아~<br><br>

<img src="https://i.imgur.com/1nt6L0g.jpeg" width=100% title="📷 "><br><br>

다시 돌아갈 순 없겠지만, <br>
마음속엔 영원히<br>
그 시절의 온기, 그대로 간직할 거야~<br><br>

어머니의 위독함에, <br>
멈춰버렸던 나의 이야기들..<br>
마무리 짓지 못한 채, <br>
여기서 끝나지만 후회는 없어<br><br>

<img src="https://i.imgur.com/KhmqjPi.png" width=100% title="📷 "><br><br><br>

뒤처지지 않으려 <br>
삶은 늘 앞만 보고 달려가지<br>
가끔 뒤를 돌아보는 건, <br>
참 소중한 일인 거야<br><br>

<img src="https://i.imgur.com/r9Xkxsr.jpeg" width=100% title="📷 "><br><br><br>


소년시대, <br>
우리 철부지들의 찬란했던 날들<br>
함께 웃고 울었던, <br>
모든 순간들이 보석 같아~<br><br>

<img src="https://i.imgur.com/D8no9Gr.png" width=100% title="📷 "><br><br>

다시 돌아갈 순 없겠지만, <br>
마음속엔 영원히<br>
그 시절의 온기, 그대로 간직할 거야~<br><br>

이제 ‘추억’이라는 이름의 연재는 <br>
잠시 멈추지만,<br>
꺼지지 않는 불씨처럼, <br>
기억은 여전히 살아있네..<br><br><br>


추억 속 친구의 안부가 궁금하여 <br>
다시 펜을 들면, <br>
또다시 재밌는 새로운 이야기로 <br>
돌아오겠습니다<br><br>

<img src="https://i.imgur.com/KiCsOsc.jpeg" width=100% title="📷 "><br><br>

여기까지 함께해 주셔서, <br>
진심으로 고맙습니다<br><br>

<img src="https://i.imgur.com/RIx8oF2.jpeg" width=100% title="📷 "><br><br>

잠시만 안녕, 나의 소년시대여...<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/AX2zX1C.jpeg') repeat fixed center center" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>소년시대, 그 추억의 조각들</b></font><br><br>

강릉상고 졸업식 날, <br>
폼 잡기 위해 입은 외피<br>
사진 속엔 상일이와 백수, <br>
그리고 옥자 일행<br><br>

<img src="https://i.imgur.com/fCca3Ve.jpeg" width=100% title="📷 "><br><br>

소년시대의 마지막 증표, <br>
선명하게 남았네.<br>
내 삶에서 <br>
희미한 듯 가장 빛나던 순간이여!<br><br>

<img src="https://i.imgur.com/zsHFFh6.jpeg" width=100% title="📷 "><br><br>

머릿속 추억의 조각들을 <br>
하나둘 모았습니다.<br><br>

어설펐던 짝사랑 같은 첫사랑, <br>
철없던 우정들..<br>
아버지 편지 속 엄한 꾸중, <br>
더 큰 헌신과 사랑!<br><br>

<img src="https://i.imgur.com/80rCWCp.jpeg" width=100% title="📷 "><br><br>

여기에, <br>
내 마음속에, 영원히 살아서 숨 쉬네..<br><br>

어머니의 위중함으로 <br>
멈췄던 이 이야기들..<br>
다시 펼쳐 봐도 <br>
웃음소리와 풋풋한 설렘이<br><br>

<img src="https://i.imgur.com/vaei4Jv.jpeg" width=100% title="📷 "><br><br>

강릉과 양양, <br>
친구들과 벌였던 장난과 해프닝<br>
미소 짓게 할 이야기들이 <br>
여기에 있었습니다<br><br><br>


머릿속 추억의 조각들을 <br>
하나둘 모았습니다.<br><br>

어설펐던 짝사랑 같은 첫사랑, <br>
철없던 우정들..<br>
아버지 편지 속 엄한 꾸중, <br>
더 큰 헌신과 사랑!<br><br>

여기에, <br>
내 마음속에, 영원히 살아서 숨 쉬네..<br><br>

혹여 뒤질세라 <br>
삶은 늘 앞으로 달려가지만,<br>
가끔은 <br>
이렇게 뒤돌아보는 것도 소중한 일!<br><br>

열정이 고개 들어 <br>
다시 펜을 들고 싶은 날에는<br>
그땐 또 다른 이야기로, <br>
또다시 시작할 겁니다<br><br>

<img src="https://i.imgur.com/KxJNBch.jpeg" width=100% title="📷 "><br><br>

아스라이 먼 기억의 원초는 <br>
내 서랍 속 낙서장!<br>
그 시절에 끄적였던 낙서들이 <br>
글과 노래 되었네. <br><br>

<img src="https://i.imgur.com/nv2sIDT.jpeg" width=100% title="📷 "><br><br>

고맙습니다, <br>
여기까지 함께 걸어와 주셔서..<br>
내 소년시대, <br>
마지막 페이지를 장식해 주셔서..<br><br><br>


안녕을 기원하는 인사를 보낸다~<br><br>

<img src="https://i.imgur.com/qe3DPtN.jpeg" width=100% title="📷 "><br><br>

교동의 강릉상고 용봉대야<br>
홍제동의 토끼장 친구들아<br>
옥거리 농고 기고 친구들아<br>
그때 그 시절의 소녀들아~<br><br>

잠시만 안녕, 나의 소년시대야~~<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/4iJCfZy.jpeg') repeat fixed center center" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>강릉 밥 서울 똥? 달부어엽구나~</b></font><br><br>
<font color='white'>
나의 양양 말투를 흉내 내며 <br>
깔깔대던 친구들..<br><br>

"니 밥 먹었니? ↗, 나 밥 먹었니? ↗"<br>
말도 안 되는 억양의 말투를 <br>
흉내 내면서..<br><br>

<img src="https://i.imgur.com/ZLDhZ7x.jpeg" width=100% title="📷 "><br><br>

말 끝만 올리면 서울말 되는 거니? <br>
그런 거니? (하. 하. 하.)<br><br>

강릉 사람들은 신기해 했었지, <br>
나의 양양 말씨를..<br><br>

선생님께서 말씀하셨네 <br>
"양양 말씨는 참 고와~~"<br><br>

그땐 나는 몰랐었네, <br>
그 말이 무슨 의미인지<br>
야양 말이 강릉에선 <br>
서울 말씨로 울려 퍼졌네<br><br>

삼팔선 북쪽인 <br>
현북면에서 속초, 고성까지는<br>
묻는 말 끝에 '.. 니↗ ?' 자로, <br>
억양은 위로..<br><br>

<img src="https://i.imgur.com/VdVSg4e.jpeg" width=100% title="📷 "><br><br>

남쪽인 <br>
현남면부터 주문진, 강릉, 삼척까지는<br>
묻는 말 끝은 '.. 나↘ ?' 자로, <br>
억양은 아래로.. <br><br><br>


강릉 사람들은 신기해 했었지, <br>
나의 양양 말씨를..<br><br>

선생님께서 말씀하셨네 <br>
"양양 말씨는 참 고와~~"<br><br>

그땐 나는 몰랐었네, <br>
그 말이 무슨 의미인지<br>
야양 말이 강릉에선 <br>
서울 말씨로 울려 퍼졌네<br><br>

몰랐던 거야~, <br>
야양 말이 서울 말씨가 아니라<br>
말투와 억양이 <br>
거의 북한 말과 똑같다는 것을..<br><br>

한 친구가 <br>
경기도 시골의 구멍가게 들렀는데<br>
간첩 신고 들어와 지서에서 <br>
순경이 출동했었네 (하. 하. 하.)<br><br>

<img src="https://i.imgur.com/OL1IjhI.jpeg" width=100% title="📷 "><br><br>

나에게 야무지게 쏘아붙였던 <br>
크다마한 지즈바!<br><br>

"너는 왜.. 강릉 밥 먹고↘, <br>
서울 똥 싸니↗ ?"<br><br>

<img src="https://i.imgur.com/4CsLRAL.jpeg" width=100% title="📷 "><br><br>

멈칫, 무슨 말인가? <br>
강릉말로 달부어엽구나~ (하. 하. 하.)<br><br>

그 시절의 순수한 오해, <br>
말도 안 되는 말!<br>
이제는 모두 <br>
웃음만 나오는 추억이 되었네<br><br>

<img src="https://i.imgur.com/e8eBkt3.jpeg" width=100% title="📷 "><br><br><br>


그래도 궁금하긴 하네<br>
나의 말씨가 정말 고왔는지..<br><br>

<img src="https://i.imgur.com/DW2cIWu.png" width=100% title="📷 "><br><br>

내가 말하면 서울 사람인 줄<br>
여학생들도 심쿵~ 했었을까?<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/Gibh5i1.jpeg') repeat fixed center center" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='white'><b>해태 퍼모스트의 연서</b></font><br><br>
<font color='#D9C397'>
어느 날 친구가 <br>
해태 퍼모스트로 가자고 하네<br>
친구에게 끌려 <br>
영문도 모른 채 따라간 그곳<br><br>

여학생 둘이 앉아있었지만, <br>
나는 아무것도 몰라요<br>
내 이름을 도용해 연서를 보냈으니, <br>
정말 몰라요~<br><br>

<img src="https://i.imgur.com/pnktlFV.jpeg" width=100% title="📷 "><br><br>

창밖엔 가냘프게 비 내리고, <br>
날더러 단념하라 하네요<br>
할 말이 있으면 <br>
'땡땡'에게 이야기 하라 합니다~<br><br>

<img src="https://i.imgur.com/q9TOSlV.jpeg" width=100% title="📷 "><br><br>

"덕찬 오빠, 오랫만이군요", <br>
"글쎄 나는 초면이네요."<br><br>

<img src="https://i.imgur.com/7LlHEDn.jpeg" width=100% title="📷 "><br><br>

"얘기를 하자면 <br>
시간이 약간 필요할 것 같군요"<br><br>

자정 알리는 사이렌 울리는데 <br>
밤하늘엔 별이 없다 하네요<br><br>

"사랑하는 그대여! <br>
진리가 허위라 해도 좋지만..<br>
내 그대를 사랑하는 만큼은 <br>
조금도 의심치 말아다오."<br><br>

<img src="https://i.imgur.com/ZuI4v66.jpeg" width=100% title="📷 "><br><br>

가장 친한 친구 숙에게 받은 시, <br>
내게는 왜 보내셨나요?<br><br><br>


창밖엔 가냘프게 비 내리고, <br>
날더러 단념하라 하네요<br>
할 말이 있으면 <br>
'땡땡'에게 이야기 하라 합니다~<br><br>

"덕찬 오빠, 오랫만이군요", <br>
"글쎄 나는 초면이네요."<br><br>

"얘기를 하자면 <br>
시간이 약간 필요할 것 같군요"<br><br>

주차장 위 퍼모스트 집으로, <br>
여덟시 반까지..<br><br>

"누군지 나와 보면 알겠죠, <br>
아마 놀라실 거예요"<br><br>

'순정 아닌 그의 친구'로부터 온 편지..<br><br>

<img src="https://i.imgur.com/7uG8MAS.jpeg" width=100% title="📷 "><br><br>

나는 놀라기만 했을 뿐, <br>
아무 말도 할 수 없었네<br><br>

그때의 풋풋한 기억, 미스터리한 연서<br>
이제는 모두 <br>
웃음만 나오는 추억이 되었네<br><br>

<img src="https://i.imgur.com/ZtF8htc.png" width=100% title="📷 "><br><br>

내 이름 도용한 장본인, 친구 창현아!<br>
너 때문에 나는 <br>
이 노래를 만들고 있단다~~<br><br>

<img src="https://blog.kakaocdn.net/dn/bmOQMY/btsFsaVuVac/iBKrDo8umsvG5MKoHbI3Ik/img.jpg" width=100% title="📷 "><br><br><br>


지금 와 돌이켜 생각해 보니<br>
아무것도 몰랐어도..<br><br>

<img src="https://i.imgur.com/7qz6TfZ.jpeg" width=100% title="📷 "><br><br>

계속 만나기나 해볼걸..<br>
그냥 사귀기나 해볼걸..<br><br>

(푸~ 하하. 하하하~~~)<br><br>

</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/1Koix9k.jpeg') repeat fixed center center" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>도용당한 연서의 자초지종</b></font><br><br>

친구의 장난, 내 이름을 빌려 성사된<br>
주차장 위, 퍼모스트 집의 만남<br>
나는 눈만 뻐끔대며<br>
오가는 대화를 듣고 있었지<br><br>

<img src="https://i.imgur.com/hhrdAQ7.jpeg" width=100% title="📷 "><br><br>

편지 속 이름, 낯선 문장<br>
자초지종, 아직도 모르는 이야기<br>
그 시절의 연서(戀書)는<br>
지금도 내 마음을 헷갈리게 해<br><br>

<img src="https://i.imgur.com/tlVmTyT.jpeg" width=100% title="📷 "><br><br><br>


창밖엔 가냘프게 비 내리고<br>
자정의 사이렌이 울려 퍼질 때<br>
“사랑하는 그대여!”라는 문장,<br>
세익스피어보다 더 진심 같았지<br><br>

<img src="https://i.imgur.com/EOnEw6S.jpeg" width=100% title="📷 "><br><br>

편지 속 이름, 낯선 문장<br>
자초지종, 아직도 모르는 이야기<br>
그 시절의 연서(戀書)는<br>
지금도 내 마음을 헷갈리게 해<br><br>

<img src="https://i.imgur.com/suveXEp.jpeg" width=100% title="📷 "><br><br>

약속된 시간, 약속된 장소<br>
나는 그저 불려 나왔을 뿐<br>
그녀는 누구였을까?<br>
그 친구는 왜 그랬을까?<br><br><br>


미스터리는 끝나지 않았고,<br>
편지들은 미완의 시처럼 남아~<br><br>

<img src="https://i.imgur.com/9ZD5een.jpeg" width=100% title="📷 "><br><br>

그 시절의 연서(戀書)는<br>
지금도 내 마음속에 살아 있네..<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/nw80mPZ.jpeg') repeat fixed center center" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>봉투 속의 마음</b></font><br><br>

눈처럼 하얀 마음을<br>
봉투 속에 가득 담아<br>
그 시절의 너를 나에게<br>
조용히 보내주던 밤이 있었지<br><br>

<img src="https://i.imgur.com/D8b4DEX.png" width=100% title="📷 "><br><br>

기우는 들녘엔 강 울음 들리고<br>
머리 위엔 또 하나의 세계<br>
비수 같은 햇살이 얼굴을 쫓을 때<br>
너는 나의 심중을 불사르며 노래했지<br><br>

<img src="https://i.imgur.com/d0edMnL.jpeg" width=100% title="📷 "><br><br>

마알간 바람 속의 초록빛 눈망울<br>
낙숫물 소리와 바람의 속삭임<br>
책 한 장 넘기지 못한 채<br>
나를 향한 푸념이 가득했구나~<br><br>

<img src="https://i.imgur.com/hpksrz7.png" width=100% title="📷 "><br><br>

기우는 들녘엔 강 울음 들리고<br>
머리 위엔 또 하나의 세계<br>
비수 같은 햇살이 얼굴을 쫓을 때<br>
너는 나의 심중을 불사르며 노래했지<br><br>

<img src="https://i.imgur.com/QCQfQkJ.jpeg" width=100% title="📷 "><br><br>

그 시절의 편지들은<br>
지금도 내 서랍 속에 살아~<br>
추억으로 남겨진 문장들이<br>
내 마음을 적셔주네..<br><br>

<img src="https://i.imgur.com/M1e2R39.jpeg" width=100% title="📷 "><br><br><br>


혹여 언젠가 다시 펜을 들면<br>
그때도 나는 편지를 쓸 거야~<br><br>

<img src="https://i.imgur.com/zgyLIWH.png" width=100% title="📷 "><br><br>

하얀 봉투 속의 하얀 마음처럼<br>
지금도 나는 너에게 닿고 싶어..<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/9Sof1M8.jpeg') repeat fixed center center" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>내 서랍 속 추억의 편지</b></font><br><br>
<font color='skyblue'>
서랍 속에 고이 접어둔 <br>
그 시절의 편지 한 장!<br>
삐뚤빼뚤한 글씨 속에 <br>
너의 마음 살아 있구나~<br><br>

<img src="https://i.imgur.com/CaLeA9E.png" width=100% title="📷 "><br><br>

이 편지가 헛되지 않은 날,<br>
우리 다정한 사이가 되어<br>
고민과 정서를 함께 나누는<br>
그날을 꿈꾸며 보내왔던 사연<br><br>

별이 잠든 밤, <br>
톡톡 빗방울 소리에..<br>
외로움 흩어지던 그 순간<br>
시골의 소녀는 나를 불렀지<br><br>

<img src="https://i.imgur.com/8w5hOge.jpeg" width=100% title="📷 "><br><br>

이 편지가 헛되지 않은 날,<br>
우리 다정한 사이가 되어<br>
고민과 정서를 함께 나누는<br>
그날을 꿈꾸며 보내왔던 사연<br><br>

과거는 현실을 낳고<br>
현실은 미래를 잉태하듯<br>
너와 나는 떨어질 수 없는<br>
불가분한 존재가 되자꾸나~<br><br><br>


혹여 언젠가 다시 펜을 들면<br>
그때도 편지를 쓸 거야~<br><br>

<img src="https://i.imgur.com/onoyQFU.jpeg" width=100% title="📷 "><br><br>

서랍 속의 아련한 추억은<br>
지금도 내 마음을 적셔주네..<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/ualmMtw.jpeg') repeat fixed center center" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='white'><b>편지, 그 추억의 날들..</b></font><br><br>
</P><P class='mid2'><font color='pink'>
별이 잠든 밤, 가을 황혼 덮은 밤에<br>
타향의 벗을 그리며 늦게 서신 전하네<br>
우리의 심정을 누가 알아주셨는지<br>
찢어진 봉투 조각 맞추어 주소 찾았네<br><br>

<img src="https://i.imgur.com/f2U7Sru.png" width=100% title="📷 "><br><br>

내 서랍 속 깊이 잠든 수많은 편지들..<br>
사랑과 우정, 고민을 가득 담았네<br><br>

<img src="https://i.imgur.com/deilohs.jpeg" width=100% title="📷 "><br><br>

밤이 내리면, 밤이 깊으면, 펜을 들었지<br>
순수한 날들의 내가, 여기 살아 숨 쉬네<br><br>

<img src="https://i.imgur.com/5mj1XxP.jpeg" width=100% title="📷 "><br><br>

비 내리는 밤, 침묵을 지키는 밤에<br>
오직 홀로 고독에 잠겨 편지를 쓴다는<br>
어린 소녀의 애틋한 이야기와<br>
키스 경험은 있는가? 당돌한 앙케이트!<br><br>

<img src="https://i.imgur.com/U4dfMmT.jpeg" width=100% title="📷 "><br><br><br>


내 서랍 속 깊이 잠든 수많은 편지들..<br>
사랑과 우정, 고민을 가득 담았네<br><br>

<img src="https://i.imgur.com/q86HtIW.png" width=100% title="📷 "><br><br>

밤이 내리면, 밤이 깊으면, 펜을 들었지<br>
순수한 날들의 내가, 여기 살아 숨 쉬네<br><br>

"너의 눈을 보면 잠을 많이 잘 것 같아"<br>
"어디에다 하소연할 데 없어 쓴다"<br>
"오직 나에겐 나 밖엔 아무도 없어요"<br><br>

<img src="https://i.imgur.com/q0jpjhJ.jpeg" width=100% title="📷 "><br><br>

수많은 마음들이 봉투에 담겨 <br>
내게 왔었네<br><br><br>


지나간 그 시절의 순수한 감정들..<br>
세월의 강물 속에 모두 휩쓸려 갔지만<br><br>

<img src="https://i.imgur.com/jRom389.jpeg" width=100% title="📷 "><br><br>

내 마음속에는 여전히 그때처럼,<br>
그 편지의 온기가 온전히 남아있네..<br><br>

</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/2wSQWkF.jpeg') repeat fixed center top" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>설악산 1주년에 만난 희야의 편지</b></font><br><br>

설악산 1주년, <br>
푸르른 산야를 뒤로하고..<br><br>

길 건너 여학생의 미소, <br>
그날은 그렇게 시작됐지<br><br>

<img src="https://i.imgur.com/lalM1xF.jpeg" width=100% title="📷 "><br><br>

희야의 편지, <br>
서먹한 마음을 적어 내려간<br>
자그마한 날개짓 속에<br>
그 시절의 설렘이 담겨 있었네<br><br>

<img src="https://i.imgur.com/T4D8VBW.png" width=100% title="📷 "><br><br>

뚝방의 들꽃,<br>
시냇물의 속삭임<br>
그녀와 걷던 그 길은<br>
온통 아름다운 세상이었지<br><br>

<img src="https://i.imgur.com/IqUR41Q.jpeg" width=100% title="📷 "><br><br>

희야의 편지,<br>
서먹한 마음을 적어 내려간<br>
자그마한 날개짓 속에<br>
그 시절의 설렘이 담겨 있었네<br><br>

<img src="https://i.imgur.com/JVkZGDo.jpeg" width=100% title="📷 "><br><br>

군부대의 멱 감는 소리에<br>
무드는 날아가고, 나는 붉어지고<br><br>

<img src="https://i.imgur.com/6K7VSe7.jpeg" width=100% title="📷 "><br><br>

그녀의 웃음은 <br>
지금도 내 기억 속에 맴돌아~<br><br>

<img src="https://i.imgur.com/JGdYX5l.jpeg" width=100% title="📷 "><br><br>

그날의 편지 한 장 <br>
지금도 내 마음속에 살아~<br><br><br>


<img src="https://i.imgur.com/mmchbGW.jpeg" width=100% title="📷 "><br><br>

희야의 글씨, 그 여운<br>
소년의 여름을 물들였네..<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/iHLJLkm.jpeg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>희야를 만났던 '설악산 로망스'</b></font><br><br>

1976년의 유월, 설악산 입구에서<br>
친구는 뻐꾸기를 날렸었지<br><br>

<img src="https://i.imgur.com/I3BzMQP.jpeg" width=100% title="📷 "><br><br>

길 건너편의 여학생 둘, <br>
예상치 못한 호응<br>
설악산은 뒤로하고, <br>
그녀들을 향해 걸었네<br><br>

<img src="https://i.imgur.com/yIWvGFT.jpeg" width=100% title="📷 "><br><br>

너와 걷던 뚝방길, <br>
산삼 썩은 시냇물도<br>
산야의 푸르름도, <br>
이름 모를 들꽃도<br><br>

<img src="https://i.imgur.com/l5qzIbW.jpeg" width=100% title="📷 "><br><br>

온통 아름다운 세상에, <br>
하필 멱 감는 군인들이..<br><br>

<img src="https://i.imgur.com/klQwg3z.jpeg" width=100% title="📷 "><br><br>

풋~, 하고 웃던 너의 모습에 <br>
난 더 부끄러웠네<br><br>

무르익어가던 분위기는 <br>
모두 날아가 버렸고<br>
어색한 작별, <br>
그렇게 우린 헤어졌지만..<br><br>

<img src="https://i.imgur.com/n0lo58G.jpeg" width=100% title="📷 "><br><br>

그날에 내게 쓴 편지, <br>
희야의 순수한 글씨<br>
"아직 서먹서먹한 기분, <br>
헛되지 않은 날.."<br><br><br>


너와 걷던 뚝방길, <br>
산삼 썩은 시냇물도<br>
산야의 푸르름도, <br>
이름 모를 들꽃도<br><br>

<img src="https://i.imgur.com/pNZ8vs1.jpeg" width=100% title="📷 "><br><br>

온통 아름다운 세상에, <br>
하필 멱 감는 군인들이..<br><br>

풋~, 하고 웃던 너의 모습에 <br>
난 더 부끄러웠네<br><br>

<img src="https://i.imgur.com/elDFWXH.jpeg" width=100% title="📷 "><br><br>

크나큰 꿈을 위해 날개 퍼덕이던 소녀<br>
고민과 정서, <br>
감정을 나누고 싶다던 그 마음<br><br>

그때는 몰랐네, 그 편지의 의미를..<br>
이제야 알 것 같아, <br>
그때의 기쁜 설렘을..<br><br>

<img src="https://i.imgur.com/tdf6OCS.jpeg" width=100% title="📷 "><br><br><br>

설악산의 낭만은 짧았지만<br>
오랫동안 이어진 너와의 우정과 인연!<br><br>

지금도 나는 그날을 잊지 못하고<br>
입가에 미소 머금으며 <br>
이 노래를 만드네..<br><br>

<img src="https://i.imgur.com/MfrYGwj.jpeg" width=100% title="📷 "><br><br><br>


희야~ 너는 아니?<br>
"찬~의 벗이 되고픈 소녀가.."<br><br>

이 말에 내 가슴 얼마나 설레었는지..<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/rmQUpuv.jpeg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='yellow'><b>심성 착한 완수 이야기</b></font><br><br>
<font color='white'>
바지를 내리면 보였던, <br>
형형색색의 멍 자국!<br>
빨간색, 파란색, 검은색으로 물든 <br>
너의 허벅지<br><br>

<img src="https://i.imgur.com/dQma8pO.jpeg" width=100% title="📷 "><br><br>

맞은 데 또 맞은 것 같아, <br>
오금이 저려와서<br>
너무하다 싶었네, <br>
아무리 운동선수라도 그렇지<br><br>

나타나기만 하면 <br>
가만 안 둔다 벼르더니<br>
소주 한 병 들고 온 후배를 <br>
일으켜 세웠네<br><br>

<img src="https://i.imgur.com/2LMct9M.jpeg" width=100% title="📷 "><br><br>

인자하게 잔 따라주며 <br>
무슨 일 있었냐는 듯<br>
용쟁호투 대신 화기애애, <br>
웃음꽃 피웠네<br><br>

소주 사홉들이, 금세 바닥을 보이자<br>
나가서 <br>
댓병 하나 더 들고 온 너의 모습<br><br>

<img src="https://i.imgur.com/5Hh7w18.jpeg" width=100% title="📷 "><br><br>

분노를 용서로 바꾼 건 <br>
타고난 너의 본성인가..<br>
아니면 인간미 넘치는 <br>
양양의 인정이었을까?<br><br>

나타나기만 하면 <br>
가만 안 둔다 벼르더니<br>
소주 한 병 들고 온 후배를 <br>
일으켜 세웠네<br><br>

인자하게 잔 따라주며 <br>
무슨 일 있었냐는 듯<br>
용쟁호투 대신 화기애애, <br>
웃음꽃 피웠네<br><br>

혹독한 인고의 세월, <br>
선수 생활을 마치고<br>
강원대 체육과 졸업, <br>
선생님이 된 너의 모습<br><br>

<img src="https://i.imgur.com/bNihXYM.jpeg" width=100% title="📷 "><br><br>

고진감래, <br>
그 말처럼 너는 해냈구나~<br>
네가 겪었던 그 모든 고통을 <br>
나는 기억해..<br><br>

사홉들이 받고 댓병을 내어 주는..<br>
따뜻하고 착했던 나의 친구 완수야!<br>
노르딕 힘든 운동에 선배들 빠따까지,<br>
그때의 네 모습이 아직도 생생하구나~<br><br>

<img src="https://i.imgur.com/41L7Pi6.jpeg" width=100% title="📷 "><br><br><br>


근데 궁금하기는 하네<br><br>

그것이 너의 본성인지, <br>
양양의 인정이었는지..<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/QqCdDJ9.jpeg') repeat fixed center bottom" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='pink'><b>고교 시절의 '덕찬 육천지교'</b></font><br><br>
<font color='white'>
강릉에 나와 3년 동안 여섯 번, <br>
하숙집 옮겨 다녔네<br><br>

<img src="https://i.imgur.com/WaZfqxw.png" width=100% title="📷 "><br><br>

'맹모 삼천지교' 아닌, <br>
'덕찬 육천지교'라 불러다오<br><br>

옥천국민학교 담벼락 옆, <br>
새 마음 새 기분으로<br><br>

식구 단출해진 하숙집에서 <br>
마음을 다잡았네<br><br>

오래지 않아 <br>
'죽돌이' 하나둘씩 생기더니<br>
여기는 청춘들의 열린 광장이요, <br><br>

<img src="https://i.imgur.com/23VMVXL.jpeg" width=100% title="📷 "><br><br>

'상고 농고 기고' 친구들의 아지트요,<br>
우리 하숙방은 <br>
소년시대 우정의 사랑방 되었네 <br><br>

코에 고드름 달고 달렸던 <br>
노르딕 완수의 끈기!<br><br>

<img src="https://i.imgur.com/uhWByst.jpeg" width=100% title="📷 "><br><br>

30초 만에 금메달 따던 <br>
알파인 상권이의 영광!<br><br>

진공관에서 소리 흘러나오게 하던 <br>
태환이의 열정! <br><br>

<img src="https://i.imgur.com/SeAkUMQ.jpeg" width=100% title="📷 "><br><br>

친구들이여! <br>
그대들에게 갈채를 보낸다~~<br><br><br>


오래지 않아 <br>
'죽돌이' 하나둘씩 생기더니<br>
여기는 청춘들의 열린 광장이요, <br><br>

'상고 농고 기고' 친구들의 아지트요,<br>
우리 하숙방은 <br>
소년시대 우정의 사랑방 되었네 <br><br>

전국 금메달 태영이 갑빠는 <br>
투포환처럼 동그랑 땡!<br>
펑퍼짐 널찍한 상권이는 자유자재로, <br>
웃음꽃 피웠네<br><br>

<img src="https://i.imgur.com/UE1LccM.jpeg" width=100% title="📷 "><br><br>

룸메이트 나마저 쫓아내고 <br>
진공관 소리 만들며<br>
환호하던 태환이가 <br>
신기하고 대견하기도 했었지<br><br>

하숙집은 단순한 방이 아니었네<br>
우리들의 꿈과 열정, 우정이 쌓인 곳<br><br>

<img src="https://i.imgur.com/9Qskhzs.png" width=100% title="📷 "><br><br>

나의 고교 시절 피날레를 같이 했었던<br>
완래야! 완수야! 태환아! <br>
그리고 죽돌이 친구들아!<br><br>

그때를 추억하며 <br>
나는 이 노래를 만들고 있단다<br><br><br>


옥거리, 나의 옥천동!<br>
그리운 이름, 그리운 시절..<br><br>

풋풋했던 소년시대!<br>
아름다운 시절이었어라~~<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/G1I8Ib6.jpeg') repeat fixed center center" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>고3, 실망하신 아버지의 편지</b></font><br><br>
</P><P class='mid2'>
학년이 올라갈수록 <br>
나의 등수는 늘어만 갔고,<br>
나의 성적에 반비례하여 <br>
용돈은 줄어들었네..<br><br>

아버지의 편지 봉투, <br>
그 안에 담긴 말씀<br>
"공부 좀 잘할까 하여, 돈을 보낸다~"<br><br>

<img src="https://i.imgur.com/W1pno65.jpeg" width=100% title="📷 "><br><br>

아버지의 편지, <br>
"글씨 좀 꼬불꼬불하게 쓰지 말어라~"<br><br>

"왜 그렇게 공부를 허수룩하게 하느냐" <br>
한숨이 담겼네<br><br>

“공부가 싫으면 농사나 하자” <br>
그 말씀에 눈물이 고였고,<br><br>

<img src="https://i.imgur.com/6BtoCBj.jpeg" width=100% title="📷 "><br><br>

"돈 보내 줄 용기도 나지 않는다" <br>
그 진심에 가슴 아팠네<br><br>

"돈 아껴 쓰고, 잠도 참고 공부하라"던 <br>
그 말씀<br><br>

"성적이 나쁘면 졸업 후 <br>
학교 안 나온 사람만도 못하다"<br><br>

"농사는 흉작이고, <br>
돈이 없어 곤란하지만<br>
너의 공부, 시험에 지장 없도록 보내니<br> 
아껴 쓰거라~"<br><br>

<img src="https://i.imgur.com/p4VTpQ6.jpeg" width=100% title="📷 "><br><br>

아버지의 편지, <br>
"글씨 좀 꼬불꼬불하게 쓰지 말어라~"<br><br>

"왜 그렇게 공부를 허수룩하게 하느냐" <br>
한숨이 담겼네<br><br>

“공부가 싫으면 농사나 하자” <br>
그 말씀에 눈물이 고였고,<br><br>

"돈 보내 줄 용기도 나지 않는다" <br>
그 진심에 가슴 아팠네<br><br>

"이제는 집도 아담하게 수리되고,<br> 
너희들 공부 성적이 좋기만을 <br>
기다리고 있다"<br><br>

"시험에 합격하여 반가운 마음으로 <br>
500 원을 더 보낸다"<br><br>

고 3의 내가 무참히 무너트린 <br>
아버지의 기대와 희망!<br><br>

<DIV style="LEFT: 0px; POSITION: relative; TOP: 0px">
<DIV id=item4 style="Z-INDEX: 4; LEFT: 425px; POSITION: absolute; TOP: 60px; WIDTH: 80px; HEIGHT: 70px">
<img src=http://cfile210.uf.daum.net/image/1525F0494D8EFCD604323A>
</font></div></div>
<img src="https://blog.kakaocdn.net/dn/dyEJc8/btsFogoZU8t/kTJfqkSHr5pmEIXxSsQkKK/img.jpg" width=100% title="📷 3-1반 졸업 앨범 단체 사진"><br><br>

</P><P class='mid'>
이제야 알았네, <br>
돈보다 무거운 그 봉투의 무게를..<br><br>

사랑과 걱정, <br>
그리고 실망의 무게였음을..<br><br>

그때의 나는 그저 철없는 소년이었지만<br>
이제야 깨달았네, <br>
아버지의 헌신과 사랑! <br><br>

하늘에 계신 아버지, <br>
당신을 사랑합니다~~~<br><br>

<img src="https://i.imgur.com/TnA3QP1.jpeg" width=100% title="📷 "><br><br><br>


하늘에 계신 아버님!<br>
"불초 소생 사죄드립니다~"<br><br>

<img src="https://i.imgur.com/XeT8wwR.jpeg" width=100% title="📷 "><br><br>

하늘에 계신 어머님!<br>
"언제나 고마웠습니다~~~"<br><br>

</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/xiPi9jm.jpeg') repeat fixed center center" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='white'><b>하숙생들의 일탈, 향토 장학금</b></font><br><br>
<font color='pink'>
축구팀 하나 꾸릴 만큼 <br>
모여 살던 옥천동 하숙집<br>
강릉 여고 운동장으로 달려가 <br>
축구를 하던 날<br><br>

교실 창문이 열리며 <br>
여학생들의 함성이 쏟아졌네<br><br>

<img src="https://i.imgur.com/STgXpP4.jpeg" width=100% title="📷 "><br><br>

이건 뭐지? <br>
국가대표라도 된 이 기분, <br>
가슴 뛰었네<br><br>

향토 장학금 받으면 <br>
돌아가며 한 달 내내 주류 행사<br>
널찍하고 다락방까지, <br>
우리 방 아지트로 몰려들었지<br><br>

소주, 맥주, 막걸리, <br>
각양각색의 공병은 늘어만 갔고<br>
아주머니의 묵시적 시위, <br>
보란 듯이 쌓아둔 공병들!<br><br>

<img src="https://i.imgur.com/0fiYBbK.jpeg" width=100% title="📷 "><br><br>

그제서야 알았네, <br>
아주머니의 깊은 뜻을..<br><br>

대부분 농고생이었고 <br>
상고생이라곤 나 하나뿐<br>
강여고 농구부는 <br>
명륜고와 친선경기를 했었지<br><br>

<img src="https://i.imgur.com/yTap2oH.jpeg" width=100% title="📷 "><br><br>

코트 누비는 여학생 보는 것만으로도 <br>
가슴 설렜네<br>
강여고 배구부 코치했던 <br>
돈순이 친구도 설렜을까? (하.하.하.)<br><br>

<img src="https://i.imgur.com/aDg8ARL.jpeg" width=100% title="📷 "><br><br>

향토 장학금 받으면 <br>
돌아가며 한 달 내내 주류 행사<br>
널찍하고 다락방까지, <br>
우리 방 아지트로 몰려들었지<br><br>

소주, 맥주, 막걸리, <br>
각양각색의 공병은 늘어만 갔고<br>
아주머니의 묵시적 시위, <br>
보란 듯이 쌓아둔 공병들!<br><br>

그제서야 알았네, <br>
아주머니의 깊은 뜻을..<br><br>

이제는 빛바랜 사진 속의 모습들..<br>
그때의 순수한 일탈, <br>
모두가 일장춘몽 되었네<br><br>

<img src="https://i.imgur.com/CwfrGqo.jpeg" width=100% title="📷 "><br><br>

웃고 떠들던 소년들은 어디로 갔을까?<br>
보고 싶은 얼굴들, 그리운 이름들..<br><br>

결과가 뻔할 예비고사를 치렀던 <br>
강릉여고 교실<br>
그 시절 자유와 방황, <br>
우정의 모든 이야기들..<br><br>

<img src="https://i.imgur.com/1U1XuLo.jpeg" width=100% title="📷 "><br><br>

부모님의 피땀어린 <br>
'향토 장학금'의 블루스,<br><br>

반쯤은 접어두고 싶은 <br>
소년시대의 한 페이지!<br><br><br>


옥거리, 나의 옥천동<br>
그리운 이름, 그리운 시절..<br><br>

사춘기의 가오와 호기로 <br>
술잔을 기울였던<br><br>

그 친구들은 지금 <br>
어디에서 무얼 하고 있을까..<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/rmQUpuv.jpeg') repeat fixed center center" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='yellow'><b>친구 따라 간 '옥거리' 로망스</b></font><br><br>
<font color='white'>
어느 날 한국은행 앞, <br>
'찰떡'이라 부르던 목소리..<br>
얼굴마저 시커먼 토인, <br>
고향 까마구 '완수'였지<br><br>

<img src="https://i.imgur.com/CxOJGhR.jpeg" width=100% title="📷 "><br><br>

친구 따라 강남 아닌 <br>
옥거리로 왜 갔을까?<br>
리어카에 꿈을 싣고 <br>
여고와 가까운 곳으로..<br><br>

<img src="https://i.imgur.com/iiXfVLm.jpeg" width=100% title="📷 "><br><br>

매일 아침, <br>
여고 교복들이 하얗게 쏟아져 내려와~<br>
나는 머리가 어질, 허리가 휘청, <br>
다리는 후들후들~<br><br>

<img src="https://i.imgur.com/evWbn3J.png" width=100% title="📷 "><br><br>

이 차선 10 미터가 <br>
100 미터로 느껴졌던 등교길<br>
그 소녀에겐 <br>
말 한 번 못 건네고 지나쳤네<br><br>

임당동 그 길에 마주치던, <br>
예뻤던 그 여학생<br>
매일 지각하는 건 아닌지, <br>
궁금했던 나의 마음<br><br>

<img src="https://i.imgur.com/E5V1cA7.png" width=100% title="📷 "><br><br>

핫도그 가게에서 <br>
100 개를 채우겠다던 친구!<br>
여학생들 들어오면 <br>
어찌해보려던 요량이었나 <br>
(배짱도 좋네)<br><br>

매일 아침, <br>
여고 교복들이 하얗게 쏟아져 내려와~<br>
나는 머리가 어질, 허리가 휘청, <br>
다리는 후들후들~<br><br>

이 차선 10 미터가 <br>
100 미터로 느껴졌던 등교길<br>
그 소녀에겐 <br>
말 한 번 못 건네고 지나쳤네<br><br>

나의 숫기 없는 <br>
내성적인 성격을 탈피하여 <br>
여학생들과 자연스럽게 <br>
대화를 나눠 보고 싶었어<br><br>

<img src="https://i.imgur.com/7KUW7Lj.jpeg" width=100% title="📷 "><br><br>

성당에도 감리 교회에도 포교당에도 <br>
가 보았으나<br>
신부님도 목사님도 스님도 <br>
주선해 주시지는 않았네 <br><br>

이제는 얼굴의 윤곽마저 <br>
아스라이 사라져 버린<br>
말 한 번 못 건네 본 <br>
풋풋한 짝사랑이여!<br><br>

지금 생각하면 웃음만 나오는<br>
참으로 한심했던 소년의 <br>
"옥거리 로망스!"<br><br><br>


옥거리, 나의 옥천동!<br>
그리운 이름, 그리운 시절..<br><br>

풋풋했던 소년시대!<br>
아름다운 시절이었어라~~<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/w2O7G/btsOwvLzvhs/ZIe7tvEvh6OwCShCEqEJVK/img.jpg') repeat fixed center top" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>소년시대의 철부지 싸움</b></font><br><br>

2인용 공동 책상 가운데에 <br>
금 그어놓고,<br>
넘어오면 볼펜으로 찍어대던 <br>
철부지의 오기<br><br>

<img src="https://i.imgur.com/4lfLgis.jpeg" width=100% title="📷 "><br><br>

똥개도 제집에선 <br>
50 프로 먹고 들어간다는데<br>
지리 낯설고 구경꾼도 마카 강릉 출신<br>
기죽는 내 마음..<br><br>

홍제동 넘어가는 산 중턱에 <br>
책가방 내려놓고<br>
2단 옆차기 폼 잡다 무승부로 끝났네<br><br>

<img src="https://i.imgur.com/BlnuUca.jpeg" width=100% title="📷 "><br><br>

싸우고 나면 더욱 살가워진다더니..<br>
어쩌면 이런 게 진정한 우정이었을까?<br><br>

2천 원 빚 때문에 시작된 <br>
사소한 실랑이,<br>
칠판에 던진 주산이 <br>
내 꺼만 아니었더라도..<br><br>

<img src="https://i.imgur.com/cQxsjgj.jpeg" width=100% title="📷 "><br><br>

'양양 깡패'라 놀리던 덩치 큰 찬일아!<br>
그때는 몰랐네, 그게 마지막일 줄..<br><br>

홍제동 넘어가는 산 중턱에 <br>
책가방 내려놓고<br>
2단 옆차기 폼 잡다 무승부로 끝났네<br><br>

<img src="https://i.imgur.com/th7mn2w.jpeg" width=100% title="📷 "><br><br>

싸우고 나면 더욱 살가워진다더니..<br>
어쩌면 이런 게 진정한 우정이었을까?<br><br>

전지된 나뭇가지 잡고 버티던 너<br>
수업 시작 종에 방과 후를 기약했지만<br>
약속 장소에 나타나지 않았던 너!<br>
이제는 닿을 수 없는 곳에 있구나~~<br><br>

<img src="https://i.imgur.com/925jUaw.jpeg" width=100% title="📷 "><br><br>

철부지 시절의 허세와 가오 다툼<br>
이 또한 내 청춘의 한 조각일지언정<br>
이제는 헛웃음만 나오는 <br>
철이 없었던 기억!<br>
보고 싶은 친구야, 잘 지내니?<br><br><br>


오늘 그 친구들의 안부를 물어본다<br><br>

바다낚시 좋아하는 계선아!<br>
잘 지내니?<br><br>

<img src="https://i.imgur.com/hC5GS4e.png" width=100% title="📷 "><br><br>

높은 곳에 있는 찬일아! 잘 있니?<br>
내 돈, 2천 원은 괜찮아~~<br><br>

<img src="https://i.imgur.com/Y7hgipq.png" width=100% title="📷 "><br>

</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/6m4u82y.jpeg') repeat fixed center top" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='white'><b>난리 부르스 수학여행</b><br><br>

고2 수학여행, <br>
폼 잡으려 기타 들고 관광버스 올랐네<br>
뒷자리 가운데에 <br>
심벌즈와 작은북, 멋진 밴드 꾸렸지<br><br>

<img src="https://i.imgur.com/uEcaPOI.jpeg" width=100% title="📷 "><br><br>

김인순의 '여고 졸업반' 부르며, <br>
난리 부르스 시작됐네<br>
정문을 나서기도 전에 <br>
이팔청춘 자유의 몸부림이었지 <br><br>

호랑이 선생님의 타자 시간에 <br>
우리는 목숨 걸었었지<br>
나는 경제적 실리보다는 <br>
연분홍빛 낭만을 쫓았네<br><br>

<img src="https://i.imgur.com/vlI9YkX.jpeg" width=100% title="📷 "><br><br>

원구 형님 땜에 살 떨리게 만든 <br>
펜팔 페이퍼, 물거품 되었네<br>
기초도 떼지 못했는데 거금 주고 샀던 <br>
기타는 어디로 갔을까?<br><br>

꼬불꼬불 내리막길, <br>
기사님이 멈춰 세우고 한 말씀!<br><br>

<img src="https://i.imgur.com/omm31Ih.png" width=100% title="📷 "><br><br>

"20년 버스 운전에 <br>
이런 학생들은 처음"이라네<br><br>

그래도 우리는 멈출 수가 없었지<br>
소년시대의 열광은 경주까지 <br>
쉼 없이 흔들며 달려갔었네<br><br>

<img src="https://blog.kakaocdn.net/dn/Fhp43/btsC2yl1NIP/W3Fm4Ry56hAdxKiWWM4UY1/img.jpg" width=100% title="📷 "><br><br>

호랑이 선생님의 타자 시간에 <br>
우리는 목숨 걸었었지<br>
나는 경제적 실리보다는 <br>
연분홍빛 낭만을 쫓았네<br><br>

원구 형님 땜에 살 떨리게 만든 <br>
펜팔 페이퍼, 물거품 되었네<br>
기초도 떼지 못했는데 거금 주고 샀던 <br>
기타는 어디로 갔을까?<br><br>

잃어버린 나의 기타, <br>
펜팔 페이퍼의 허무한 결말!<br>
그때는 몰랐네, <br>
그게 전부가 아니었단 걸..<br><br>

타자 선생님의 엄격함과 <br>
감초 선생님의 호통!<br>
그 모든 게 나의 청춘을 만들어 주셨네<br><br>

<img src="https://blog.kakaocdn.net/dn/dSFSET/btsFjLpGjgz/njbUNfHptGPvVXlPbwAwwk/img.jpg" width=100% title="📷 "><br><br>

세월 지나 돌아보니, <br>
모든 게 빛바랜 추억되었고<br>
수학여행의 허망했던 기억은 <br>
이제 웃음만 남았네<br><br><br>


내 마음속의 영원한 '난리 부르스'<br>
그 시절 이야기는 노래가 되어 <br>
끝없이 흐르네<br><br>

내 마음속 '난리 부르스'<br>
노래 되어 끝없이 흐르네..<br><br>

내 마음속 '난리 부르스'<br>
노래 되어 끝없이 흐르네..<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/vR4Z1Bb.jpeg') repeat fixed center bottom" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid2'>
<font color='white'><b>열여섯 살 펜팔 소년</b></font><br><br>
</P><P class='mid2'><font color='pink'>
열여섯 살의 로망이었던, <br>
착하고 예쁜 여학생!<br><br>

<img src="https://i.imgur.com/WPXESnH.png" width=100% title="📷 "><br><br>

영석이 누나 책꽂이, <br>
월간지 펜팔난에 눈이 번뜩 ☆.☆<br><br>

우등생인 척 <br>
안경 쓰고 펜팔용 사진 찍어서<br>
설렘 가득한 내 마음도, <br>
편지에 담아보냈네<br><br>

<img src="https://i.imgur.com/jKVobqe.jpeg" width=100% title="📷 "><br><br>

여름날 함박눈이 펑펑 내린다고<br>
친구들 앞에 낭송하다 얼굴 빨개졌네<br>
삼천포에서 온 편지, '오빠'에서 '친구'<br>
그러다 다시 '동생'으로 돌아온 그 여름<br><br>

<img src="https://i.imgur.com/Cj7LKfF.jpeg" width=100% title="📷 "><br><br>

아빠의 양복 주머니에서 찾은 나의 주소<br>
찢어진 봉투 맞추던 칠곡의 소녀, 혜경!<br>
'왜 편지만 딸에게 전해주셨을까?'<br>
우여곡절 사연만은 보여주고 싶으셨나<br><br>

<img src="https://i.imgur.com/knJtqNp.jpeg" width=100% title="📷 "><br><br>

여름날 함박눈이 펑펑 내린다고<br>
친구들 앞에 낭송하다 얼굴 빨개졌네<br>
삼천포에서 온 편지, '오빠'에서 '친구'<br>
그러다 다시 '동생'으로 돌아온 그 여름<br><br>

빨간 손수건 감고 있을 테니 <br>
꼭 찾아달라던..<br>
그 소녀는 강릉 역전에서 <br>
나를 원망했겠지<br><br>

<img src="https://i.imgur.com/VPx2wPs.jpeg" width=100% title="📷 "><br><br>

끝내 전해주지 못한 미안함, <br>
아직도 마음에 남아~<br><br>

전해지지 않을지라도 보내렵니다. <br>
"정말 미안했습니다"<br><br>

“당신을 그리는 시골의 소녀”  <br>
그 문장은 지금도 내 마음을 울려~~<br><br>

내 서랍 속 그 시절의 편지들은  <br>
내 청춘의 가장 따뜻한 기록으로 남았네<br><br>

"미안합니다! 정말 미안했습니다!!"<br>
이 마음 전할 수 있다면..<br><br>

<img src="https://i.imgur.com/GFtw3WZ.jpeg" width=100% title="📷 "><br><br>

"미안합니다! 정말 미안했습니다!!"<br>
이 마음 전할 수 있다면..<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/dwZo6I/btsN2XUwqI8/CkK1VRyjRu4IaunWoiyQr1/img.png') repeat fixed center top" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>반공일 재낀 설악산 이야기</b></font><br><br></P><P class='mid2'>

고교 시절의 이야기, <br>
여덟 번째 추억을 열어요<br><br>

1975년 유월의 바람, <br>
우린 설악산으로 떠났지<br><br>

금요일 현충일에 이어진 반공일<br>
딱 네 시간만 재끼면 2박 3일의 천국!<br><br>

<img src="https://i.imgur.com/F4lO0zo.jpeg" width=100% title="📷 "><br><br><br>


1반 세용, 4반 경순, <br>
그리고 6반의 나<br>
반은 달랐어도 마음은 하나로..<br><br>

"이것이 인생이다!" <br>
외치며 떠났던 설악산<br><br>

하지만… <br>
막차 놓쳐 3박 4일의 연장전<br><br>

<img src="https://i.imgur.com/w2TM8oe.jpeg" width=100% title="📷 "><br><br><br>


네 시간 반공일 재낀 대가로 치러진<br>
무심한 감초 선생님의 학부형 호출!<br><br>

초등 6년 개근에 <br>
중학교 3년 개근생<br>
처음 지른 무단결석에 <br>
정근상도 날아갔네<br><br><br>


교복 왼쪽 주머니 안, 그 수첩 속에는<br>
정란여상 고적답사반 세 명의 주소!<br><br>

<img src="https://i.imgur.com/xdmZJmS.jpeg" width=100% title="📷 "><br><br>

감초샘은 망설임 없이 <br>
그 페이지 찢어버렸네<br><br>

'내 인생의 변곡점'이 <br>
날아가는 순간이었소<br><br><br>


임영 고개, 영동여상의 물결 헤치며<br>
유쾌하게 교실로 들어섰지만<br><br>

월담 단속의 제왕, <br>
감초 선생님의 추궁..<br>
과수원 핑계는 통하지 않았었지<br><br><br>


점심 밥상 대신 <br>
마주한 학부형 호출 통지서! <br><br>

두 시간 반, <br>버스 속 아버지의 심정 어땠을까?<br><br>

자식 걱정 내려놓으며 <br>
그제야 느낀 아버지의 배고픔, <br><br>

그 모습 바라보며.. <br>
내 콧등은 시큰해졌네<br><br>

그때 다짐했었지, 이제 다시는..<br>
오직 학업에만 전념하겠노라고..<br><br>

아버지 배웅하고 <br>
하숙집으로 돌아오는 길에<br>
'작심삼초'의 그 맹세 다 날아가 버렸네<br><br><br>


철 없이 질러 본 그때의 일탈 하나<br>
하염없이 날아가 버린 수첩 속의 인연<br><br>

그 끝에는 아버지의 허기졌던 뒷모습..<br>
후회와 다짐들, <br>
이제는 철부지 추억으로 남았네 <br><br>

상업 부기 선생님은 말씀하셨지<br>
차변에 설악산, 대변엔 대청봉이냐?<br><br>

<img src="https://i.imgur.com/uLzVM8H.jpeg" width=100% title="📷 "><br><br>

교복 속 추억은 나를 웃기고 울리며,<br>
그 시절의 이야기가 노래되어 퍼집니다~<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/GBSvwWl.jpeg') repeat fixed center top" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='yellow'><b>도민체전 마스게임, 나의 긍지</b></font><br><br>
<font color='white'>
1974년 강릉, <br>
칠사 칠사 도민체전의 날<br><br>

강릉상고가 마스게임 한단 말에 <br>
우린 환호했었지<br><br>

5교시, 청소 시간 끝나면 <br>
수업 대신 연습을 한다니..<br><br>

낭만이라 믿었던, <br>
그 시절 젊은 날의 소중한 추억!<br><br>

"양팔 간격, 좌우로 나란히", <br>
발에 불나게 뛰었었지<br><br>

"3열에 7번!" 호명에 심장이 쿵쾅, <br>
숨 막히던 시간들..<br><br>

빗물 고인 물웅덩이, <br>
거침없이 몸을 던지는 그 순간! <br><br>

터져 나오던 함성, <br>
전율 같은 짜릿함, 온몸으로 퍼졌네<br><br><br>


팔 꺾고 멱살 잡고 밀어붙이던, <br>
체육 선생님의 기술<br><br>

프로 레슬링처럼 혹독했던, <br>
공포의 연습 시간이었지<br><br>

논산훈련소에서 느꼈네, <br>
마스게임 연습의 데자뷔를..<br><br>


강상인 모두가 하나 되어 완성한 <br>
멋진 작품이었네<br><br><br>


"양팔 간격, 좌우로 나란히", <br>
발에 불나게 뛰었었지<br><br>

"3열에 7번!" 호명에 심장이 쿵쾅, <br>
숨 막히던 시간들..<br><br>

빗물 고인 물웅덩이, <br>
거침없이 몸을 던지는 그 순간! <br><br>

터져 나오던 함성, <br>
전율 같은 짜릿함, 온몸으로 퍼졌네<br><br><br>


<img src="https://i.imgur.com/K4k6yph.jpeg" width=100% title="📷 "><br><br>

그때는 몰랐었네, <br>
공포가 밀려오던 그 혹독한 연습이<br><br>

단결과 협동, 인내와 강인함을 <br>
가르쳐 주었다는 것을..<br><br>

수십 년 지난 지금에도, <br>
돌아 보면 가슴을 뛰게 하는<br><br>

잊지 못할 긍지와 자부심, <br>
영원한 소년시대의 추억!<br><br>

강원 도민체전 마스게임, <br>
그 찬란했던 젊은 날의 우리들..<br><br>

선생님들의 가르침, <br>
아직도 가슴에 남아 빛나네<br><br>

사랑하는 나의 모교, 강릉상고여! <br>
영원히 빛나기를..<br><br>

우리는 모두 하나, <br>
자랑스런 용봉대, 강상인들이여!<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/iJxr8ag.jpeg') repeat fixed center center" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>멋쟁이 기타리스트를 꿈꾸며..</b></font><br><br>

어느 여름날, 친구의 홍제동 하숙방<br>
이불 더미에 기대어 기타를 튕기며<br>
흥얼거리는 그 모습, 너무 부러웠고<br>
아홉 줄 그 소리에 내 가슴이 뛰었네<br><br>

<img src="https://i.imgur.com/pSc8Q2D.jpeg" width=100% title="📷 "><br><br>

나도 손에 쥐고 싶었어, 저 기타를..<br>
반짝이는 크롬, 묵직한 울림<br>
아버지께 정중하게 상서를 올렸네<br>
“음악 시간에 기타 가져오라 합니다”  <br><br>

<img src="https://i.imgur.com/2wa7Xhj.png" width=100% title="📷 "><br><br>

의외로 막힘없이 부쳐온 거금, <br>
가슴 벅찼네<br>
성남동 악기점에서 <br>
세고비아 사려 했었는데<br><br>

<img src="https://i.imgur.com/CllU9Xu.png" width=100% title="📷 "><br><br>

결국엔 <br>
그냥 구릿줄 여섯 줄짜리를 사고<br>
거금 4,000원을 남겨 돌아왔네<br><br>

<img src="https://i.imgur.com/9tgi0s1.png" width=100% title="📷 "><br><br>

나도 손에 쥐고 싶었어, 저 기타를..<br>
반짝이는 크롬, 묵직한 울림<br>
아버지께 정중하게 상서를 올렸네<br>
“음악 시간에 기타 가져오라 합니다”  <br><br>

아버지께선 캠핑 간다 하면 <br>
10원도 안 주시지만<br>
학교 일이라 하면 <br>
집까지도 팔아주실 분!<br><br>

그 마음 알기에.. <br>
더 죄송하고 고마웠습니다<br><br>

멋쟁이 기타리스트! <br>
열여섯 살의 커다란 꿈이었지<br><br>

<img src="https://i.imgur.com/8wAMlbm.jpeg" width=100% title="📷 "><br><br>

그때는 철부지였네, 기타가 전부였지<br>
이제는 알겠네, <br>
기타에 담긴 아버지의 마음~<br><br>

그 사랑이 내 청춘의 'bgm', <br>
배경음이었네<br><br>

그 사랑의 울림은 지금도.. <br>
내 마음에 울려 퍼져~~<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/VKWD8fF.jpeg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid2'>
<font color='blue'><b>고삐 풀린 영화 매니아</b></font><br><br>

열여섯 살, 기타 사고 남은 거금 4천 원<br>
그 돈이면 극장 네 곳 모두 누비고도 남아<br>
이소룡의 쌍절곤, 용쟁호투! 맹룡과강!<br>
숨죽이고 보았던 그 시절의 영웅들..<br><br>

<img src="https://i.imgur.com/zJ58GWy.jpeg" width=100% title="📷 "><br><br>

고삐 풀린 망아지처럼 달렸었지<br>
아버지의 눈길 벗어난 나의 자유를..<br><br>

동명극장에서, <br>
라면 끓여먹게 돈 달라던 녀석들<br>
"국물도 없어, 좋게 말할 때 내놔~"<br><br>

영화 중간에 나갈 수 없었기에<br>
보았던 장면 또 보면서 숨 가다듬었네<br><br>

<img src="https://i.imgur.com/nOpz1S2.jpeg" width=100% title="📷 "><br><br>

한용철의 뒤축 후리기는 정말 일품이었어<br>
야양 말, '몽댕이'라 했다가 <br>
친구에게 놀림당했네<br><br>

<img src="https://i.imgur.com/Qh1Ql1d.jpeg" width=100% title="📷 "><br><br>

고삐 풀린 망아지처럼 달렸었지<br>
아버지의 눈길 벗어난 나의 자유를..<br><br>

동명극장에서, <br>
라면 끓여먹게 돈 달라던 녀석들<br>
"국물도 없어, 좋게 말할 때 내놔~"<br><br>

별들의 고향, 미성년자 관람불가!<br>
들키면 죽을 줄 알았던, 금지된 영화!<br>
그날의 스릴과 설렘, 쫄깃했던 내 심장<br>
모든 게 아스라한 추억으로 남았네<br><br>

<img src="https://i.imgur.com/QgFlWFH.jpeg" width=100% title="📷 "><br><br>

그때는 몰랐었네, 그 자유의 의미를..<br>
그저 철이 없던 소년의 일탈이었지<br><br>

<img src="https://i.imgur.com/tdKsPId.jpeg" width=100% title="📷 "><br><br>

이제는 웃으며 말하는 이야기<br>
나의 빛나는 '영화 매니아'의 소년시대...<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/28BA0gS.jpeg') repeat fixed center top" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid2'>
<font color='blue'><b>홍제동에서의 객지 설움</b></font><br><br>

열여섯 살, 강릉의 여름 시작될 무렵<br>
허름한 러닝셔츠, 낯선 얼굴이 다가와<br>
거드름 떨며 내게 말했지 "돈 좀 주라~"<br>
내 수첩 속, 8천 원짜리 수표가 불안했네<br><br>

<img src="https://i.imgur.com/cXrYHfW.jpeg" width=100% title="📷 "><br><br>

"너 죽고, 나 살자", <br>
그 말 목까지 차올랐는데<br>
녀석은 송금수표를 모르고 돌려주었네<br><br>

분한 마음에 <br>
친구와 함께 거리를 뒤졌지만<br>
못 만난 게 다행, 웃음만 나오네<br><br>

궁중무술도장 가는 길 강릉국민학교 담장<br>
까마귀 떼처럼 앉아있는 '골말 아덜'<br>
시야까시, 그들의 놀림과 조롱에도<br>
나는 고개를 숙일 수밖에 없었네<br><br>

<img src="https://i.imgur.com/Z41YZDi.jpeg" width=100% title="📷 "><br><br>

"너 죽고, 나 살자", <br>
그 말 목까지 차올랐는데<br>
녀석은 송금수표를 모르고 돌려주었네<br><br>

분한 마음에 <br>
친구와 함께 거리를 뒤졌지만<br>
못 만난 게 다행, 웃음만 나오네<br><br>

고향이라면 어림도 없었을 일,<br>
서러운 1학년의 어리바리한 시절에..<br><br>

그래, 이것이 바로 객지 설움이었지<br>
차분히 삭여야 했던, 나의 젊은 날~<br><br>

그때는 몰랐네, 그 모든 순간이<br>
나를 단단하게 만들었단 걸..<br>
겁 많았던 소년, 이제는 웃으며 말하네<br><br>

그 시절 나의 빛바랜 객지 설움을~~~<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/sUJKROL.jpeg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>감초 선생님과의 월담</b></font><br><br>
<font color='white'>
학교 뒤 자취방의 낡은 부엌에<br>
연탄불은 꺼지고 밥은 덜 익었네<br><br>

시작 알리는 사이렌 울리면 <br>
정신없이 뛰쳐나갔지<br>
지각을 면할 방법은 오직 월담뿐~<br><br>

줄창~ 월담하시는 감초 선생님!<br>
바싹 따라붙어서 동시에 따라 넘어야<br><br>

<img src="https://i.imgur.com/UkNGuT6.jpeg" width=100% title="📷 "><br><br>

자칫 인터벌 늘어지면 <br>
자기는 안 넘은 척,<br>
월담 대장이 단속의 제왕으로 변신!<br><br>

시간차 공략의 숨 막히는 긴장감<br>
감초 선생님 몰래 웃음 짓던 순간<br>
시간은 흘러 희미해진 추억이지만<br>
담장 너머 함께 넘던 우리들의 스릴<br><br>

<img src="https://i.imgur.com/svjX1kK.jpeg" width=100% title="📷 "><br><br>

아~ 그 시절 시간차, <br>
아슬아슬 월담 작전<br>
우릴 보고도 어쩌지 못해 <br>
머쓱해진 선생님!<br><br>

회심의 미소 지으며 보무도 당당하게,<br>
이건 뭐지? <br>
'적과의 동침' 같은 이 기분. 하하하~<br><br>

월담 가능한 좁은 그 길 벗어나면<br>
높이 10미터, 닿을 수 없는 절벽<br>
타이밍 놓치면 정문으로 돌아가야..<br>
10분은 더 걸리는 지각이 뻔한 길!<br><br>

시간차 공략의 숨 막히는 긴장감<br>
감초 선생님 몰래 웃음 짓던 순간<br>
시간은 흘러 희미해진 추억이지만<br>
담장 너머 함께 넘던 우리들의 스릴<br><br>

자취방 생활은 보름을 못 넘기고<br>
홍제동 하숙집으로 발걸음 옮겼네<br><br>

월담의 갈등은 사라졌지만<br>
몇십 배 멀어진 길, <br>
이른 걸음 재촉하네<br><br>

아침 일찍 서둘러야 했던 그 길<br>
월담 대신 걸었던 긴 하루지만<br>
그래도 괜찮아, 함께 웃던 날들..<br><br>

아련한 추억 속에 담아두었네~~<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/wLBRHwo.jpeg') repeat fixed center center" cellpadding='80' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>강릉상고 축구의 전성기</b></font><br><br>

우리의 재학 시절은, <br>
강상 축구의 전성기!<br><br>

쉬는 시간 칠판에 쓰인<br>
승전보에 환호하던 날들..<br><br>

<img src="https://i.imgur.com/bCjUYAJ.jpeg" width=100% title="📷 "><br><br>

그때 우리는 꿈을 꾸었지, <br>
푸른 잔디 위를 누비던 <br>
열정을 보며..<br><br>

1975년, <br>
강릉상고 이름은 전설이 되었네<br>
청룡기 들어 올린 환희, <br>
준우승 세 번의 벅찬 순간들..<br><br>

동대문 운동장을 가득 채운 함성<br>
우리들의 함성이었지<br><br>

안개 낀 대관령 길, <br>
노란 불빛 따라 흐르던 밤<br>
우승기 휘날리며 돌아오던 <br>
자랑스러운 그 모습<br><br>

<img src="https://i.imgur.com/WQYSqNl.jpeg" width=100% title="📷 "><br><br>

강릉 시내 전 학생들의 <br>
양쪽 가득한 환호 속에<br>
선수들은 대관령부터 <br>
카퍼레이드 벌였었지. <br><br>

2002년 월드컵 4강 신화, <br>
이을용, 설기현! <br>
그 뿌리는 여기에 있었네, <br>
빛나는 땀방울의 전통!<br><br>

<img src="https://blog.kakaocdn.net/dn/dPVjMF/btsFiP58zh1/onqSkUt9QuZ5z9xjI5R3yk/img.jpg" width=100% title="📷 "><br><br>

1975년, <br>
강릉상고 이름은 전설이 되었네<br>
청룡기 들어 올린 환희, <br>
준우승 세 번의 벅찬 순간들..<br><br>

동대문 운동장을 가득 채운 함성<br>
우리들의 함성이었지<br><br>

다음 해의 아쉬움, <br>
연장전 역전패의 통분<br><br>

결석 처리 받으며 달려간 <br>
원정 응원의 눈물 ㅜ.ㅜ<br><br>

이불 보따리 이고 <br>
오리걸음 걷던 선수들 모습..<br><br>

졸업 후에 서울로 응원하러 온 <br>
강상 교복을 보면 <br>
마치 그 옛날 내 모습 같아 <br>
맘 한켠이 저려왔었지<br><br>

영동고속도로 위, <br>
기억은 흐릿해졌어도<br><br>

그날의 함성, <br>
영원히 가슴속에 남아 있어<br><br>

강상의 푸른 상징 같은 <br>
청룡기의 추억도..<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/1s4ujyt.jpeg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>1학년 신입생의 설움</b></font><br><br>

희미한 불빛, 갈매기 미곡상회<br>
교복은 헐렁, 호크는 풀려 있었네<br>
백수인 줄 알고 불러봤던 그 얼굴<br>
돌아선 순간, 2학년 선배였네<br><br>

<img src="https://i.imgur.com/Gr1iNjA.jpeg" width=100% title="📷 "><br><br>

숨죽이며 걷던 그 길 위에<br>
언제나 두려움이 서 있었네<br>
군기 속에 흔들리던 어린 날<br>
1학년 신입생의 설움이여!<br><br>

음악실 앞으로 나오라던 목소리<br>
피하고 또 피해도 가슴은 쿵쾅거렸네<br><br>

누군가의 외삼촌, <br>
이름 모를 보호 속에<br>
알 수 없는 운명이 날 지켜주었네<br><br>

숨죽이며 걷던 그 길 위에<br>
언제나 불안함이 서 있었네<br>
선배들의 눈빛 앞에 떨던 날<br>
1학년 신입생의 설움이여!<br><br>

경례할까, 눈을 피할까<br>
'모른 척' 선택은 몰매로 돌아왔고<br>
선배 말만 믿고 따랐던 나는<br>
어리바리 신입생일 뿐이었네<br><br>

지금은 웃으며 말할 수 있지만<br>
그때는 세상이 너무 야속하였네<br>
억눌림과 두려움 속에 자라난<br>
그 시절, 신입생의 설움이여!<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/cxpbMpf.jpeg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>어리버리 1학년의 설움</b></font><br><br>

교문 안은 또 다른 세상이었네<br>
입학한 지 얼마 안 된 새내기<br><br>

호크 풀린 교복, <br>
끈 없는 운동화 차림으로<br><br>

어스름 밤길에, <br>
백열등 아래 마주친 얼굴!<br><br>

아뿔싸, 2학년 선배님이셔<br>
"음악실 앞으로 나와!"<br>
심장은 두근두근~ 가슴은 덜컥!<br>
밴드부의 군기에 나는 불안에 떨었네<br><br>

머리 깨지고 턱 빠진 선배들..<br>
무서운 소문이 나를 찾아왔네<br>
조마조마한 나날을 보내다가<br>
알게 된 반전의 진실에, 한숨 돌렸네<br><br>

아뿔싸, 2학년 선배님이셔<br>
"음악실 앞으로 나와!"<br>
심장은 두근두근~ 가슴은 덜컥!<br>
밴드부의 군기에 나는 불안에 떨었네<br><br>

단골서점에서 만난 3학년 선배님<br>
"경례하지 마, 모른 척해!"<br>
그 말만 믿고 지나쳤다가<br>
골목으로 끌려가 불나게 터졌네<br><br>

<img src="https://i.imgur.com/7ghQ3oB.jpeg" width=100% title="📷 "><br><br>

나는 왜 그랬을까, 그냥 경례할 걸<br>
아직은 어리버리한 1학년의 팔자<br>
그 시절의 설움과 불안..<br>
이제는 웃으며 추억하는 이야기,<br><br>

노래가 되어 영원히 남았습니다~~<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/jL9S9dP.jpeg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'>
<font color='blue'><b>음악실 앞의 그림자</b></font><br><br>

갈매기 미곡상회, 희미한 불빛 아래<br>
친구인 줄 알았던 그 얼굴은<br>
낯선 2학년의 그림자였네<br>
"내일 점심, 음악실 앞으로 나와~"<br><br>

호크 풀어 재낀 교복, 끈 없는 운동화<br>
그날부터 시작된 조마조마한 나날들..<br>
복도 끝에서 들려오는 발소리마다<br>
심장이 쿵, 숨이 턱, 막혔었네<br><br>

음악실 앞의 그림자,<br>
내 이름을 부르던 그 목소리<br>
겁 많던 열여섯의 봄날은<br>
군기 속에 떨고 있었네<br><br>

<img src="https://i.imgur.com/49fskeP.jpeg" width=100% title="📷 "><br><br>

패싸움의 전설, 꼴통 3인방~~<br>
그들이 날 찾는다는 소문에<br>
잠 못 이루던 밤~~<br>
알고 보니 날 지켜주려던 인연이었네<br><br>

음악실 앞의 그림자,<br>
내 이름을 부르던 그 목소리<br>
겁 많던 열여섯의 봄날은<br>
군기 속에 떨고 있었네<br><br>

골목길로 끌려가던 그날~<br>
믿었던 선배의 한마디에<br>
웃어야 할지, 울어야 할지<br><br>

그저 어리버리한 <br>
신입생의 팔자였다오~~<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/iSILGzE.jpeg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid2'>
<font color='blue'><b>고교 시절 선배들의 군기</b></font><br><br>
<font color='bisque'>
1970년대, 우리들의 교실<br>
시간은 흘러갔지만, 그 기억은 그대로..<br><br>

교복은 단정하게, 머리 길이 규정대로<br>
주번은 살벌한 분위기로 복장 검사 시작<br>
어색한 경례, 벌컥 하는 선배들의 군기<br>
사소한 실수에도 날아오는 불호령<br><br>

<img src="https://i.imgur.com/9tueXME.jpeg" width=100% title="📷 "><br><br>

밴드부 선배가 호출하면<br>
음악실 앞에서 심장이 쿵쾅, <br>
일진의 선배가 등장하면 <br>
모두가 숨죽인 두려운 시간<br><br>

아~ 그 시절, <br>
풋풋했던 우리들의 고교 시절<br>
선배들의 호령에 떨었던, <br>
촌스럽지만 순수했던 날들..<br><br>

웃음과 눈물, 잊지 못할 추억들이여!<br>
그래도 돌아갈 수 있다면, <br>
그때로 달려가리..<br><br>

<img src="https://i.imgur.com/0n5xqvR.jpeg" width=100% title="📷 "><br><br>

기합 소리 복도에 울려 퍼지고, <br>
엉덩이는 얼얼~~<br>
나를 때렸던 3학년, <br>
경례 말렸던 1년 선배<br><br>

누가 더 미웠을까, 서운했을까, <br>
헷갈리기만 해<br>
그저 어리버리한, <br>
신입생 팔자려니 넘겼지 (하. 하. 하.)<br><br>

밴드부 선배가 호출하면<br>
음악실 앞에서 심장이 쿵쾅, <br>
일진의 선배가 등장하면 <br>
모두가 숨죽인 두려운 시간<br><br>

아~ 그 시절, <br>
풋풋했던 우리들의 고교 시절<br>
선배들의 호령에 떨었던, <br>
촌스럽지만 순수했던 날들..<br><br>

웃음과 눈물, 잊지 못할 추억들이여!<br>
그래도 돌아갈 수 있다면, <br>
그때로 달려가리..<br><br>

시간은 흘러 모두 변했지만<br>
그때의 우리는 그대로 남아<br>
사진 속 흑백의 웃음처럼..<br><br><br>

아~ 그 시절, <br>
풋풋했던 우리들의 고교 시절<br>
선배들의 호령에 떨었던, <br>
촌스럽지만 순수했던 날들..<br><br>

웃음과 눈물, 잊지 못할 추억들이여!<br>
그래도 돌아갈 수 있다면, <br>
그때로 달려가리..<br><br>

그 시절, 우리의 교실!<br>
영원히 기억될, 빛나는 젊음이었어라~~<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/I05si7x.jpeg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font color='#EB4E8D'><b>청룡과 백호, 다정한 맞수 상농전</b></font><br><br>

단오의 바람이 불어오면<br>
강릉은 다시 뜨거워진다<br>
푸른 청룡, 붉은 백호<br>
용호상박, 맞서는 순간!<br><br>

<img src="https://i.imgur.com/Ia7DIyZ.jpeg" width=100% title="📷 "><br><br>

브라스 밴드 울려 퍼지고<br>
가슴 뛰는 북소리 따라<br>
상고 농고 청춘의 함성,<br>
우리는 그 속에 서 있었다~<br><br>

<img src="https://i.imgur.com/d1uyAfy.jpeg" width=100% title="📷 "><br><br>

서울에 연고전이 있다면<br>
강릉에는 상농전이 있다.<br>
승패를 넘어, 뜨겁던 날들<br>
우리는 하나였다, 다정한 맞수!<br><br>

<img src="https://i.imgur.com/U0bPqR7.jpeg" width=100% title="📷 "><br><br>

케이씨에치! 키케이 키케이!<br>
토인들의 괴성과 인디언의 춤,<br>
거북선의 화염과 포성 울리면<br>
운동장은 바다처럼 출렁거렸다~<br><br>

벽돌 공장 패싸움의 기세마저<br>
달빛 아래 웃음으로 녹았고,<br>
재학 중엔 앙숙이던 우리<br>
졸업 후엔 친구가 되었다~<br><br>

서울에 연고전이 있다면<br>
강릉에는 상농전이 있다.<br>
승패를 넘어, 뜨겁던 날들<br>
우리는 하나였다, 다정한 맞수!<br><br>

응원가 따라, 깃발은 펄럭이고<br>
푸른 청룡과 붉은 백호의 용.호.상.박!<br>
다정한 맞수의 대결 속에<br>
아름다운 우정이 피어났다~<br><br>

<img src="https://i.imgur.com/4rVdS9J.jpeg" width=100% title="📷 "><br><br>

서울에 연고전이 있다면<br>
강릉에는 상농전이 있다.<br>
그 시절 철천지 앙숙이 <br>
지금은 영원한 동행자!<br><br>

다정한 맞수여,<br>
아름다운 우정이여!<br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://i.imgur.com/DEkUB7q.jpeg') repeat fixed center center" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font color='blue'><b>상농전, 그 푸른 붉은 물결</b></font><br><br>
<font color='white'>
하나, 둘, 셋, 넷!<br><br>

강릉 단오제, 들썩이는 푸른 물결<br>
저마다 다른 교복의 발걸음..<br>
상고의 청룡과 농고의 백호가<br>
그라운드 위에서 마주 서네<br><br>

<img src="https://i.imgur.com/6D7nMVn.jpeg" width=100% title="📷 "><br><br>

서울에 연고전 있다면 강릉엔 상농전!<br>
총동문과 가족들의 열기가 <br>
하늘을 찌르고..<br><br>

씩씩하고 용감하다! 강상 건아들!<br>
용감스럽다! 강농의 선수들!<br><br>

케이씨에치! <br>
외치면 뜨거워지는 가슴<br><br>

키케이 키케이! <br>
외치면 터져 나오는 함성<br><br>

용호상박의 그날, 우리는 영웅이었다<br><br>

하프타임, <br>
응원단의 열기는 뜨겁게 타오르네<br>
토인과 인디언 복장의 <br>
괴성이 울려 퍼지고<br><br>

거북선의 입에선 <br>
포성과 화염이 불을 뿜는다<br>
그날은 애교심과 영웅심리가 <br>
발동하는 밤!<br><br>

서울에 연고전 있다면 강릉엔 상농전!<br>
총동문과 가족들의 열기가 <br>
하늘을 찌르고..<br><br>

씩씩하고 용감하다! 강상 건아들!<br>
용감스럽다! 강농의 선수들!<br><br>

케이씨에치! <br>
외치면 뜨거워지는 가슴<br><br>

키케이 키케이! <br>
외치면 터져 나오는 함성<br><br>

용호상박의 그날, 우리는 영웅이었다<br><br>

<img src="https://i.imgur.com/GPMQWBT.png" width=100% title="📷 "><br><br>

재학 중엔 철천지 앙숙이었지만<br>
졸업 후엔 영원한 동행자의 친구<br>
교동의 벽돌 공장 패싸움의 긴장감!<br>
이제는 다정한 맞수, 아름다운 우정!<br><br>

<img src="https://blog.kakaocdn.net/dn/XkdTm/btsFjI5Wcmw/s7rJ2e7BeIcPuunHdyLOx0/img.jpg" width=100% title="📷 "><br><br>

졌으니까 한 잔, 이겼으니 나도 한잔<br>
감정에 취하고 술에 취했던 <br>
아련한 추억..<br><br>

<img src="https://i.imgur.com/nsI1Sm4.jpeg" width=100% title="📷 "><br><br>

그때의 열기와 함성이 노래가 되어<br>
브라스 밴드 음악처럼 <br>
영원히 퍼져간다~~~<br><br>

상.농.전! 영.원.하.라!<br>
케이씨에치! 키케이 키케이! <br>
케이씨에치! 키케이 키케이!<br></font>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/uWnZo/btsOxg1doCo/QyzvW4T03Y9tCyotueEjlK/img.png') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font color='blue'><b>청룡과 백호의 날, 상농전</b></font><br><br>

하나, 둘, 셋, 넷!<br><br>

강릉의 하늘이 들썩이던 그날<br>
단오제의 함성 속에 깃든 전설<br>
푸른 청룡이 꿈틀거리고<br>
붉은 백호가 불꽃을 뿜었지<br><br>

케이씨에치! 키케이 키케이!<br>
응원가의 구호 울려 퍼질 때<br>
우리는 하나의 깃발 아래<br>
젊음을 불태웠네<br><br>

<img src="https://i.imgur.com/G3LtwO0.png" width=100% title="📷 "><br><br>

청룡이 날았고 백호가 뛰었던<br>
그날의 함성은 지금도 살아 있어<br>
강릉의 심장 속에..<br>
우리는 여전히 함께 있네 (함께 있네)<br><br>

씩씩하고 용감하다! 강상 건아들!<br>
용감스럽다! 강농의 선수들!<br>
벽돌 공장 패싸움의 긴장도,<br>
웃음 속의 야릇한 재회로 끝났네<br><br>

재학 중엔 철천지 앙숙,<br>
졸업 후엔 영원한 친구!<br>
다정한 맞수, 아름다운 우정<br>
그 이름은 상.농.전!<br><br>

청룡이 날았고 백호가 뛰었던<br>
그날의 함성은 지금도 살아 있어<br>
강릉의 심장 속에..<br>
우리는 여전히 함께 있네 (함께 있네)<br><br>

<img src="https://i.imgur.com/2nYEDCe.jpeg" width=100% title="📷 "><br><br>

상.농.전! 영.원.하.라!<br>
케이씨에치! 키케이 키케이! <br>
케이씨에치! 키케이 키케이!<br>
</td></tr></table>`,
`<table style="BACKGROUND:#ffff66 url('https://blog.kakaocdn.net/dn/rrIsv/btsOyX0oTH2/Ir1qeTouu85h8RtHfrvihK/img.jpg') repeat fixed center top" cellpadding='10' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><br>
<font color='blue'><b>소년시대, 그 아득한 날들..</b></font><br><br>

종이 비행기처럼 날아가던 하루<br>
햇살에 물든 웃음과 작은 꿈들<br>
운동장 위에 번지던 발자국 소리<br>
아직도 내 마음에 살아 있네<br><br>

소년의 시절, 별빛 같던 날들<br>
책장 속에 빛바랜 추억들..<br>
시간은 멀리 떠나가 버렸지만<br>
그날의 노래, 지금도 울려오네<br><br>

창문을 스치던 봄바람 속에서<br>
백목련 향기, 마음을 열어주고<br>
서툰 인사, 떨리던 눈빛 하나<br>
나의 청춘은 별자리 되어 빛나네<br><br>

<img src="https://i.imgur.com/R7MOys6.png" width=100% title="📷 "><br><br>

소년의 시절, 별빛 같던 날들<br>
책장 속에 빛바랜 추억들..<br>
시간은 멀리 떠나가 버렸지만<br>
그날의 노래, 지금도 울려오네<br><br>

느리게 흐르던 하루하루가<br>
모래알처럼 스쳐 갔지만<br>
그 기억들이 나를 이끌어<br>
오늘의 나를 만들었네<br><br>

소년의 시절, 별빛 같던 날들<br>
지금도 가슴에 살아 있네<br><br>

아련한 미소, <br>
그날의 목소리,<br>
내 마음 속에.. <br>
아직도 끝없이 번져가네~~~<br><br>

<img src="https://i.imgur.com/2hqQjQz.jpeg" width=100% title="📷 "><br>
</td></tr></table>`,
`<table class='box' style="BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/bUJp7E/btsOynE6F2y/UOFyIzW0tYRK5jmgiXHqj0/img.jpg') repeat fixed center top" cellpadding='8' width=100%><tr valign=middle><td class='lt'>
<P class='mid'><font color='blue'><b>강릉 단오제 고교축구 라이벌 상농전</b></font><br><br>

</P><P class='mid2'><font color='yellow'>하나, 둘, 셋, 넷!<br><br>

유월의 태양 뜨겁던 날, <br>
강릉 시내는 들썩거렸네<br>
상농전, 이름만 들어도 <br>
가슴 뛰던 그날의 함성<br><br>

총동문, 가족 모두 모여 <br>
뜨거운 열기 가득했지<br>
푸른 용, 붉은 호랑이, <br>
용호상박 펼쳐질 무대<br><br>

청룡은 꿈틀, 비상하듯 춤추고<br>
토인들의 괴성과 인디언의 춤,<br>
거북선의 화염과 포성 울려 퍼지며<br>
심장은 터질 듯, 거침없이 타올라~<br><br>

<img src="https://i.imgur.com/x1L3HNE.png" width=100% title="📷 "><br><br>

케이씨에치! 외치는 우리 함성<br>
키케이 키케이! 맞서는 그 소리<br>
어제의 앙숙, 오늘은 친구 되는 날<br>
피 튀기는 싸움, 전설이 되었네<br><br>

응원석 가득한 파도, 열광의 물결 속에<br>
작은 몸짓 하나하나, 승리를 향한 열망<br>
땀방울, 눈물, 모든 것이 깃든 순간<br>
영웅심리, 호기가 발동하는 짜릿함<br><br>

<img src="https://blog.kakaocdn.net/dn/b0KrNw/btsC4bKRgk6/oIkpsXuFIktcwQAO9Rt1W1/img.jpg" width=100% title="📷 "><br><br>

청룡은 꿈틀, 비상하듯 춤추고<br>
토인들의 괴성과 인디언의 춤,<br>
거북선의 화염과 포성 울려 퍼지며<br>
심장은 터질 듯, 거침없이 타올라~<br><br>

케이씨에치! 외치는 우리 함성<br>
키케이 키케이! 맞서는 그 소리<br>
어제의 앙숙, 오늘은 친구 되는 날<br>
피 튀기는 싸움, 전설이 되었네<br><br>

함께 뛰었던 그 열정, 잊지 못할 추억<br>
다정한 맞수, 아름다운 우정!<br><br>

재학 중에는 철천지 앙숙,<br>
졸업 후에는 영원한 친구! <br><br>

케이씨에치! 외치는 우리 함성<br>
키케이 키케이! 맞서는 그 소리<br>
어제의 앙숙, 오늘은 친구 되는 날<br>
피 튀기는 싸움, 전설이 되었네<br><br>

<img src="https://i.imgur.com/4uyp8PX.jpeg" width=100% title="📷 "><br><br>

상.농.전! 영.원.하.라!<br>
케이씨에치! 키케이 키케이! <br>
케이씨에치! 키케이 키케이!<br>
</td></tr></table>`,
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/Xj6h3/btsOxjDAXcz/cen6SOE7KJFtvqXrwhQkEk/img.png') repeat fixed center center\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>AI-loT 기반 어르신 건강관리사업</b></font><br><br>\
\
'어르신'이 되었다면 건강 관리하세요.<br>\
AI 시대답게 loT 기반으로 하세요.<br><br>\
\
<img src='https://i.imgur.com/yrtA3EI.jpeg' width=100% title='📷 01 어르신 02'><br><br>\
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
<img src='https://i.imgur.com/HXJNyFv.jpeg' width=32% title='📷 01 걷기 01'> \
\
<img src='https://i.imgur.com/dIqO3ja.jpeg' width=32% title='📷 01 걷기 02'> \
\
<img src='https://i.imgur.com/Qr2twfb.jpeg' width=32% title='📷 01 걷기 03'><br><br>\
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
<img src='https://i.imgur.com/ineQWqL.jpeg' width=32% title='📷 01 혈압 03'> \
\
<img src='https://i.imgur.com/ORk8uP9.jpeg' width=32% title='📷 01 혈압 05'> \
\
<img src='https://i.imgur.com/nMSxQGV.jpeg' width=32% title='📷 01 혈압 06'><br><br>\
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
<img src='https://i.imgur.com/C7ZFvOa.png' width=45% title='📷 02 20250628_123400_craiyon'> \
\
<img src='https://i.imgur.com/AA3nTOp.jpeg' width=53% title='📷 01 혈압 02'><br><br>\
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
<img src='https://i.imgur.com/c64iljP.jpeg' width=64% title='📷 EZ그립 실리콘 악력기'> \
\
<img src='https://i.imgur.com/5ZK7w4c.jpeg' width=34% title='📷 건강밴드 운동 안내 도표'><br><br>\
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
<img src='https://i.imgur.com/nN7zAak.jpeg' width=32% title='📷 01 혈당 01'> \
\
<img src='https://i.imgur.com/Sb8sr1O.jpeg' width=32% title='📷 01 혈당 03'> \
\
<img src='https://i.imgur.com/QsKQ6O8.jpeg' width=32% title='📷 01 혈당 04'><br><br>\
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
<img src='https://i.imgur.com/0LCI7Jm.png' width=68% title='📷 02 20250630_223252_craiyon'> \
\
<img src='https://i.imgur.com/Urnk2dt.jpeg' width=30% title='📷 01 혈당 02'><br><br>\
\
140 이상은 경계, <br>\
200 넘으면 위험 단계이고요~<br>\
당화 혈색소는 <br>\
6.5% 넘어가면 위험 신호랍니다.<br><br><br>\
\
\
주간 미션의 체중 측정은 <br>\
2점 밖에 안 되네요.<br>\
체중 감량보다는 <br>\
체지방률 감소에 신경 쓰세요~<br><br>\
\
<img src='https://i.imgur.com/hpnwwu4.jpeg' width=32% title='📷 01 체중 03'> \
\
<img src='https://i.imgur.com/cw3EbbH.jpeg' width=32% title='📷 01 체중 05'> \
\
<img src='https://i.imgur.com/JWvqbCn.jpeg' width=32% title='📷 01 체중 06'><br><br>\
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
<img src='https://i.imgur.com/hGIzb3G.jpeg' width=32% title='📷 01 포인드 01'> \
\
<img src='https://i.imgur.com/plJuGRG.jpeg' width=32% title='📷 01 포인드 02'> \
\
<img src='https://i.imgur.com/8Qq0dqI.jpeg' width=32% title='📷 01 포인드 03'><br><br>\
\
뽕도 따고 임도 보고, <br>\
도랑 치고 가재 잡고..<br>\
꿩~ 먹고 알 먹고, <br>\
굿도 보고 떡도 먹어요~<br><br>\
\
<img src='https://i.imgur.com/km6xE80.jpeg' width=23% title='📷 01 미션 01'> \
\
<img src='https://i.imgur.com/MLr6x2f.jpeg' width=23% title='📷 01 미션 02'> \
\
<img src='https://i.imgur.com/zwruPYb.jpeg' width=23% title='📷 01 미션 03'> \
\
<img src='https://i.imgur.com/qHKHgCM.jpeg' width=23% title='📷 01 미션 04'><br><br>\
\
일거 양득의 건강 관리, <br>\
쉽고 즐겁게 함께 해요.<br><br>\
\
'어르신 인생'을.. <br>\
건강하고 행복하게 살아갑시다~~<br><br>\
\
<img src='https://i.imgur.com/6MPYp7j.jpeg' width=100% title='📷 01 어르신 04'><br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/w2O7G/btsOwvLzvhs/ZIe7tvEvh6OwCShCEqEJVK/img.jpg') repeat fixed center top\" cellpadding='6' width=100%><tr valign=middle><td class='lt'>\
\
<P class='mid'>\
<font color='blue'><b>AI-IoT 어르신 건강송</b></font><br><br></P><P class='mid2'>\
'어르신'이 되셨다면 건강 챙기세요<br>\
AI 시대, 이제는 IoT로 해봐요<br><br>\
\
<img src='https://i.imgur.com/HhMxJK8.jpeg' width=100% title='📷 01 어르신 03'><br><br>\
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
공복 혈당은 <br>\
최소 8시간 금식이 필요해요<br><br>\
\
물은 마셔도 돼요, <br>\
다른 건 먹으면 안 돼요.<br><br>\
\
100 넘으면 경계, <br>\
126 넘으면 위험이래요<br><br><br>\
\
\
식후 혈당은 <br>\
식사 후 두 시간에 재 봐요<br>\
여덟 시간까지도 식후로 본다네요<br><br>\
\
140 넘으면 경계, <br>\
200 넘으면 위험해요<br><br>\
\
당화혈색소 6.5% 넘으면 <br>\
위험 신호랍니다<br><br><br>\
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
재미있게 운동하는 오늘도 행복합니다~<br><br>\
\
<img src='https://i.imgur.com/QvCylUQ.png' width=100% title='📷 01 어르신 08_craiyon'><br>\
</td></tr></table>",
]

const updat = `<table style="border-radius: 30px; BACKGROUND:#ffcccc url('') repeat fixed left top\" cellpadding='10' width=100%><tr valign=middle><td>
<P class='mid'><font color='red'><b>업데이트 내역</b></font><br><br>

<font color='blue'><b>2025.12.04 (전경일대기 OST 추가)</b></font><br>
번외로 '전경 일대기'의 삽입곡 <br>
3가지 가사, 28곡 추가 (667~694번)<br><br>

1) 논산 제2훈련소, 전반기 8곡<br>
2) 논산 제2훈련소, 후반기 10곡<br>
3) 전투 경찰대, 자대 생활 10곡<br><br><br>


<font color='blue'><b>2025.12.03 ('계속 순환 재생' 방식)</b></font><br>

'장르별 묶음 재생' 방식에서<br>
"포크송→트롯→트롯 댄스→브라스→미분류→트롯 발라드→발라드" 순으로 계속 순환 재생 방식으로 변경<br><br>

1순환 152곡 (1~152번)<br>
2순환 146곡 (153~298번)<br>
3순환 108곡 (299~406번)<br>
4순환 100곡 (407~506번)<br>
5순환 85곡 (507~591번)<br>
6순환 75곡 (592~666번)<br><br><br>


<font color='blue'><b>2025.12.02 (최종 666곡 선정 수록)</b></font><br>
최종 선정 곡 아래와 같이 장르 분류.<br><br>

1. 포크송 126곡 (1~126번)<br>
2. 트롯 139곡 (127~265번)<br>
3. 트롯 댄스 44곡 (266~309번)<br>
4. 브라스 35곡 (310~344)<br>
5. 미분류 118곡 (345~462)<br>
6. 트롯 발라드 83곡 (463~545)<br>
7. 발라드 121곡 (546~666)<br><br><br>


<font color='blue'><b>2025. 09. 24 (삽입곡 생성 완료)</b></font><br>
에필로그 <br>
"소년시대, 찬란했던 날들" 생성.<br><br>

총 34가지 가사, 678곡 생성.<br><br><br>


<font color='blue'><b>2025. 08. 30 (삽입곡 생성 시작)</b></font><br>
프롤로그 <br>
"소년시대, 그 아득한 날들.." 생성.
</td></tr></table>`

const bon = "<!-- table style=\"border-radius: 30px; BACKGROUND:pink url('') repeat fixed left top\" cellpadding='10' width=100%><tr valign=middle><td>\
<P class='mid'><font color='blue'><b>본문 내역</b></font><br><br>\
\
<b>2025. 07. 02 (무료 버전 6곡 수록)</b><br>\
가사 1) 4곡, 가사 2) 2곡 선정.<br><br>\
\
<b>2025. 06. 24 (2가지 가사 생성)</b><br>\
1) AI-IoT 기반 어르신 건강관리사업 (나의 초안 작성)<br>\
2) AI-IoT 어르신 건강송 <br>\
(내 초안을 ChatGPT가 개사)<br><br>\
\
<b>2025. 04. 18 (사업 참여)</b><br>\
양양군 보건소 시행, <br>\
'AI-loT 기반 어르신 건강관리사업'<br>\
</td></tr></table><br><br><br><br><br //-->"
