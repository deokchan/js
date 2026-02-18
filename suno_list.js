const title0 = "내가 선택한 suno의 playlist"

odi = [
"https://cdn1.suno.ai/ee8618b3-85b2-4bac-8ac8-265e19459b6e.mp3|[발라드] 붉게 물든 노을(A Sunset Dyed in Red) / JinSeo_v4.5|",
"https://cdn1.suno.ai/74f3cae2-c816-4178-8192-b31018bf117f.mp3|[발라드] 칼끝에 핀 연꽃 / 천상의 바람 OST_v4.5+|",
"https://cdn1.suno.ai/330d7204-c583-4686-bd18-d706f7d5054b.mp3|[발라드] Again(Cover)Korean pop ballad / JinSeo_v4.5+|",
"https://cdn1.suno.ai/8e030812-7169-45ef-a840-beadb725535d.mp3|[발라드] 발자국(Korean Ballad)(Cover) / JinSeo_v4.5+|",
"https://cdn1.suno.ai/98ecfa32-4921-4d7c-89f9-6899efe59117.mp3|[발라드] 가장 추운 겨울에도 잘 버텨 / forestopia_v5|",
"https://cdn1.suno.ai/6781b942-93dc-4ba7-b8be-54a119fb1a6f.mp3|[발라드] 우산속의 기적 / BGKIM_v5|",
"https://cdn1.suno.ai/7c16d6ce-9b27-427b-a0b3-cb2865f24e5c.mp3|[발라드] 작은 할아버지의 이름으로 / 빗소리 뮤직_v5|",
"https://cdn1.suno.ai/56f042a3-d573-4d0b-8a73-5842990c1392.mp3|[발라드] 나는 자랑스런 한국인 / 조성현_v5|",
"https://cdn1.suno.ai/512444a9-8ad1-4b74-b6b6-d949add4ef8e.mp3|[발라드] 사랑하는 천사에게 ... / Mr. DJ_v5|",
"https://cdn1.suno.ai/776667ad-fe63-4cad-aaa0-280971aa9e74.mp3|[발라드] 겨울 / Xharp_v5|",
"https://cdn1.suno.ai/65cd7904-50c4-43fb-a2f1-2e780dc7d5af.mp3|[발라드] 안개 속의 약속 / 2020kog_v5|",
"https://cdn1.suno.ai/43730bac-bf51-4db7-835a-1fc3ac9b3601.mp3|[발라드] Day 7.  잠시 멈춰 ? 어쿠스틱 발라드 / harvestermusic_v5|",
"https://cdn1.suno.ai/af021a47-98e4-4a33-831e-fb5eb73c85b2.mp3|[발라드] 네가 떠난 자리에 피어난 꽃 / 음악 제작소 77 , Music producer 77_v4.5+|",
"https://cdn1.suno.ai/1e8299a3-ee15-4249-8957-6becb119859d.mp3|[발라드] almost / ExcitingSurfPunk3715_v5|",
"https://cdn1.suno.ai/871bcb6f-7eaf-430a-bdb2-75a59fa074e6.mp3|[발라드] 별이 쏟아지는 밤 / Sound Mosaic_v4.5+|",
"https://cdn1.suno.ai/0c307ba8-e91c-40e2-8806-ccc7e5c48438.mp3|[발라드] 내 마음의 마지막 말 / zsxa0718_v5|",
"https://cdn1.suno.ai/ea9db77e-6352-4a88-a982-d96cf636b1c9.mp3|[발라드] 사랑한데이(발) / 리향_v5|",
"https://cdn1.suno.ai/6b9db555-c582-4e39-8cfc-0ab5d4922a99.mp3|[발라드] 버텨내는 하루 / 샤오 리버스_v5|",
"https://cdn1.suno.ai/8a077a59-e10d-4169-bb17-b1c0b9b035af.mp3|[발라드] 말하지 않아도 알아줬으면 했고 (Remix) / coco_v4.5+|",
"https://cdn1.suno.ai/259414e4-705f-4929-8516-cf7652e66a53.mp3|[발라드] 귀여운 손자 / seungboo10_v4.5-all|",
"https://cdn1.suno.ai/12495b41-dac2-4458-b47f-50c32d419044.mp3|[발라드] 생로병사 / sindrom_v4.5-all|",
"https://cdn1.suno.ai/2b0131dd-9f77-4c16-a859-b805bc99684b.mp3|[발라드] 첫사랑, 그녀는 / Wind_leessam_v5|",
"https://cdn1.suno.ai/c0a346eb-d383-4f5b-aa8a-82abe2528e09.mp3|[발라드] 하늘에서 보고 있니? / 심서픽 뮤직_v4.5-all|",
"https://cdn1.suno.ai/158c508b-492e-4c07-93de-4f153f740084.mp3|[발라드] 사랑해요 / daivd park_v4.5-all|",
"https://cdn1.suno.ai/b95a9396-f2ce-4fb2-994b-2d216b9f162b.mp3|[포크] ?????? 윤회 [부모의 그림자 ]-Cycle of rebirth -輪廻 / KAEL_v4.5+|",
"https://cdn1.suno.ai/1bae8982-adde-4b85-88c1-f4910422a998.mp3|[포크] 계절이 지나도 / Luck Jjuni_v5|",
"https://cdn1.suno.ai/335a51f2-f10f-4901-b4b4-3edbf8357678.mp3|[포크] 시월의  만남 v5 / hmk090701_v5|",
"https://cdn1.suno.ai/f9a1a9bf-d231-4cec-b016-db2820a306b2.mp3|[포크] 이 밤이 지나가기 전에 / D.Rachel ??_v5|",
"https://cdn1.suno.ai/7c713fc6-51ef-4b76-be89-5f75eb0cca94.mp3|[포크] 어쩌면 운명 / JJ DY_v5|",
"https://cdn1.suno.ai/f426d80a-b9ac-4fd8-9df9-184d24d15cfd.mp3|[포크] 조용한 밤에 woohoo (acoustic heartfelt) / Andre Sky (south korea)_v5|",
"https://cdn1.suno.ai/b6c7f3c7-bd81-4d29-8743-6e6a617918b6.mp3|[포크] 새벽아침의 기분좋은 느낌과 희망찬 꿈 / Music Shuttle No.999_v4|",
"https://cdn1.suno.ai/510405ad-8d5e-410c-a148-19bdc2b71c1e.mp3|[포크] 기다린다고 했잖아요 / MUSIC NOVA_v5|",
"https://cdn1.suno.ai/b2e2cf1f-a4d1-4504-9d3b-31f0eb4a06b0.mp3|[포크] (공부) 균형의 걸음 / KIMJonggi_v5|",
"https://cdn1.suno.ai/e589fdb9-5233-4c1e-8ea0-5ab2138d30d5.mp3|[포크] 흔들리는 시간 속에서 / yoo62749_v5|",
"https://cdn1.suno.ai/c3dc2744-768e-48cb-9924-3d1aebc933c2.mp3|[포크] 스웨터  (Remastered).mp3 (리믹스) / 7bok2nom_v5|",
"https://cdn1.suno.ai/3526f315-bc86-46c9-b88e-bfe6a66c251c.mp3|[포크] 붉은 여운의 시간 (바다에게) / ychoe6478_v5|",
"https://cdn1.suno.ai/01ac57a3-b144-4570-a855-296539a121d6.mp3|[포크] 비로 그린 풍경 / ROGIY??이현록_v4.5+|",
"https://cdn1.suno.ai/a3b3e1e6-f168-4bd2-af59-fdd060b133ea.mp3|[포크] 기다림 정통포크KPOP (Remastered) / SJP The Light of Darkness_v5|",
"https://cdn1.suno.ai/edb6987b-1518-4121-a356-4a3bd2e482eb.mp3|[포크] 75.그대 오는 길 / wonjichan_v5|",
"https://cdn1.suno.ai/b498ff22-8a9f-4d8a-8b06-f10eadfcbd3f.mp3|[포크] 한없이 아름다우리 / RhythmicHalfNote6647_v5|",
"https://cdn1.suno.ai/49ea6400-4240-4d95-8455-fc250e26bfc6.mp3|[포크] 두 사람, 한 믿음(결혼식 축가) (Remastered) / harvestermusic_v4.5|",
"https://cdn1.suno.ai/30b8cd17-653c-4488-97b1-d4a3a384c146.mp3|[포크] 잔잔한 행복 / 소리샘_v5|",
"https://cdn1.suno.ai/3dcf0c66-45a1-4f69-8706-3078ac670490.mp3|[포크] 바람에 실려온 너 / JADE.J_v4.5+|",
"https://cdn1.suno.ai/ff1fa960-3f1f-4668-a9cc-6498c5ec804b.mp3|[포크] 그대 그리움에 젖어 / kwanho3579_v5|",
"https://cdn1.suno.ai/ac9640c3-cf19-4764-bb4b-d10e4cead247.mp3|[포크] 별똥별 ★★★★★(굿굿굿) / gwonnohaeman_v4.5+|",
"https://cdn1.suno.ai/c4824a6a-d7ee-4775-9123-974ccb0e7652.mp3|[포크] 청춘에게 / 둔키_v5|",
"https://cdn1.suno.ai/84f496a0-8125-4e55-b555-e3f25afb182a.mp3|[포크] 아버지 그대여 / k-rok_v5|",
"https://cdn1.suno.ai/dbaf9e5f-2582-4443-943b-552b96836106.mp3|[포크] 여보 사랑해요 / namsangjung0071_v4.5-all|",
"https://cdn1.suno.ai/13241787-c47b-49a4-bec7-706361091464.mp3|[포크] (공부) 배움을 외면할 때 / KIMJonggi_v5|",
"https://cdn1.suno.ai/14af1f7a-01b3-491b-8d85-4d177c4ea564.mp3|[포크] 돌아오지 않는 답장 / 양정암_v4.5-all|",
"https://cdn1.suno.ai/28535642-c1f9-476c-a692-4ffcf6aef0d6.mp3|[포크] 안개꽃 같은 어머니 / InspiringTurntablist5348_v4.5-all|",
"https://cdn1.suno.ai/17d41abd-f8d0-4ca5-a00c-a1035e57fcc9.mp3|[포크] 45년, 같은 자리에서 / ljh1844_v4.5-all|",
"https://cdn1.suno.ai/3e17c036-a550-4d81-bca6-862aa580e168.mp3|[포크] 어머니의 바다 / 문성진_v4.5-all|",
"https://cdn1.suno.ai/62a35689-f694-41a6-a566-b30d32f966a5.mp3|[포크] 우리 다음엔 / Kang jong sik_v5|",
"https://cdn1.suno.ai/b004f187-e487-43e2-a84c-a200fb2628f4.mp3|[포크] 나를 위한 아침 / minkyoungoun_min_v5|",
"https://cdn1.suno.ai/87a4acf9-b04d-4f2a-ad90-6fb07655c98d.mp3|[포크] 흐린 하늘 아래 길을 나서요 / gomugomu_v5|",
"https://cdn1.suno.ai/fea4f596-4b69-49c7-8601-142c09d17f1a.mp3|[포크] 눈보라 치던 제주의 추억을 안고 서울로 / gomugomu_v5|",
"https://cdn1.suno.ai/780efcd2-cc32-460a-8b55-0f8bb1587f63.mp3|[포크] 쪼개진 옷깃, 통으로 짠 눈물 / James King_v5|",
"https://cdn1.suno.ai/ce763a52-4282-4c26-8f96-36396d485434.mp3|[포크] 새싹에서 나무로 / Victory_333_v5|",
"https://cdn1.suno.ai/45c48bcb-4240-4c87-814f-a05a73ce02da.mp3|[포크] ## 하얀 날개 / janefun007_v5|",
"https://cdn1.suno.ai/9bc0a8e4-e1f2-4216-8238-1669b984ff99.mp3|[포크] 눈의노래, 태백산의노래 02 / yeppssir_v5|",
"https://cdn1.suno.ai/ee2c3e72-5577-4604-a240-379e2f1930cf.mp3|[포크] 마지막 희망의 끈 / Victory_333_v5|",
"https://cdn1.suno.ai/91ca506f-591b-4966-9de1-99ff5393846c.mp3|[포크] 꾀꼬리 같은 당신 / Victory_333_v5|",
"https://cdn1.suno.ai/4755414c-85d8-4511-8314-72a31eb6e46b.mp3|[포크] (명상록) 행(行)으로 남은 마음 / KIMJonggi_v5|",
"https://cdn1.suno.ai/a3abc67c-9852-443d-9d01-5cbcddcba5f1.mp3|[포크] 둬라 / JKH_v4.5-all|",
"https://cdn1.suno.ai/e427505d-219d-417f-b0dd-429998b41adc.mp3|[포크] 눈 내리는 설날 새배 / Victory_333_v5|",
"https://cdn1.suno.ai/cd4a0d42-6b1e-4719-8143-a1810d569e56.mp3|[포크] 아리랑 심포니 / Jay_v5|",
"https://cdn1.suno.ai/adb9250f-2ce9-47b8-ab3f-9d12a3145c27.mp3|[포크] 집 앞 버드나무 / Victory_333_v5|",
"https://cdn1.suno.ai/e570ac5e-a44e-4a92-9e4e-8fbcd9df22f2.mp3|[포크] 설악산 울산바위 산중취담 BGM / yeppssir_v5|",
"https://cdn1.suno.ai/d78358dd-d0d9-4982-9fa0-283e08acb916.mp3|[포크] 봄은 언제쯤 올까요 / Victory_333_v5|",
"https://cdn1.suno.ai/3818c88b-4be1-4518-ac8b-521b7a276036.mp3|[포크] Yearning(그리움) / AIDEN_v5|",
"https://cdn1.suno.ai/837cc71d-175a-441d-a20d-9b849a1e0b8c.mp3|[포크] 인생은 언제나 현재 진행형이다. / kokakola_v5|",
"https://cdn1.suno.ai/b193d7e9-b95b-436b-b761-78f86e33fb81.mp3|[포크] 메모가 너희를 구원하리라 / kokakola_v5|",
"https://cdn1.suno.ai/6305b8ee-c53a-404c-8bf1-f57020243a4d.mp3|[포크] 잠깐만이 왜 두 시간인데 / sayraks116_v5|",
"https://cdn1.suno.ai/00bd55b2-758a-46d1-ae66-19450d54c391.mp3|[포크] GL-b's Fusion 창부타령(천지편)BB / Gold Laser-beam_v5|",
"https://cdn1.suno.ai/ca324859-d305-4e95-ab86-21e45c7baefd.mp3|[포크] GL-b's Fusion 창부타령(천지편)AA / Gold Laser-beam_v5|",
"https://cdn1.suno.ai/c43a85dc-f7c1-4ea1-9ea7-ebc6e758f32d.mp3|[포크] 아낌없이 주는 산딸나무 / 이토비_v5|",
"https://cdn1.suno.ai/d505ba38-ae92-4923-aa2d-43406f0968d1.mp3|[포크] Teach Me How To Walk Your Way / djcassyjams_v5|",
"https://cdn1.suno.ai/7314f6c1-4774-47db-b8e4-1d3a3fdb6d06.mp3|[미분류] Stay with me / Ccerise ??_v4.5|",
"https://cdn1.suno.ai/b65d5143-2870-427d-aafd-af9e56672f02.mp3|[미분류] Miło?? w nas / MIHX_v3.5|",
"https://cdn1.suno.ai/67920e54-9da9-4e50-bca5-b538152abeea.mp3|[미분류] Crimson Prelude / caits_v4|",
"https://cdn1.suno.ai/b78b9de1-3664-46dc-aea9-bc5ea866eaac.mp3|[미분류] 2. Colosseum: Bestiarius / Varegg_v4|",
"https://cdn1.suno.ai/d2f5cf92-dd4a-4d81-b42b-10c2f3ec4219.mp3|[미분류] Endless Love / Proximus ReL Armedas_v4|",
"https://cdn1.suno.ai/ed29379f-ef32-4abe-b091-2fed18e0cdea.mp3|[미분류] The Matzo Ballers - SPIN ME LIKE A DREIDEL / XAVI_v4|",
"https://cdn1.suno.ai/dd6d2555-04ef-4f11-a3be-a109676ce4be.mp3|[미분류] This Place / TheOrganist_v3|",
"https://cdn1.suno.ai/de44e6b3-0078-4462-8408-56e56264f483.mp3|[미분류] Through The Window [Softly Emotional] / Sp@rviero ????_v4|",
"https://cdn1.suno.ai/97e7b862-a2af-404d-acdd-98f822f0a326.mp3|[미분류] The Golden Age of America / MAXIMUM_v4|",
"https://cdn1.suno.ai/b6440d3d-c2b9-4c14-98ee-510f5a1a5b50.mp3|[미분류] The Lost Symphony / TongMick….. ??.??.??_v3|",
"https://cdn1.suno.ai/198c3c51-6ee3-4803-9801-1bdaf7fde44c.mp3|[미분류] Now it's right and wrong / Ersi - Heartmusic_v4|",
"https://cdn1.suno.ai/fa8844ce-aeee-413b-a2da-de19e802835f.mp3|[미분류] Love you again  (Remastered) - Instrumental / Rosspurdy11_v4|",
"https://cdn1.suno.ai/146f5008-3245-46c1-9355-0dd62abf01e2.mp3|[미분류] Gaming at Harebakken / Fox plaid _v4|",
"https://cdn1.suno.ai/628ddbfe-30fa-4cc0-bda7-0fb62f2aa9e1.mp3|[미분류] Cool People Saying Smart Things INTRO - 80s / Andrea Larsen_v4|",
"https://cdn1.suno.ai/327b1dbc-71ac-481e-b57a-5ad6c8c1fca7.mp3|[미분류] Neon Nights (Remastered) / Peppper_v4|",
"https://cdn1.suno.ai/e06f3e49-4ffb-41d9-8a41-c6c6c95c5e5c.mp3|[미분류] Mystery / teeima65_v4|",
"https://cdn1.suno.ai/4eb55e39-3876-4022-b078-390bf85fed6b.mp3|[미분류] I am Ronaldo / hayasigrg99_v4|",
"https://cdn1.suno.ai/f7540d03-407a-471e-b79d-3e0a2d60069f.mp3|[미분류] &quot;Neon Shadows&quot; / harsh _v4|",
"https://cdn1.suno.ai/89e19655-0ad9-425b-8a33-76b7b4988b6f.mp3|[미분류] Sibling Gods in Chaos / FunkChoir2432_v4|",
"https://cdn1.suno.ai/0eeeddab-8760-423c-bba7-e0513e3eba01.mp3|[미분류] Fortune Teller21/12/24 / YuliiaK_v4|",
"https://cdn1.suno.ai/0836bf46-3827-4b95-b30d-1d88f1b56e7b.mp3|[미분류] Summer Air / Donato_v4|",
"https://cdn1.suno.ai/3f837e48-9f17-4c8f-8d1a-6860e165db40.mp3|[미분류] Robot NRG / StingingHarmonica4826_v4|",
"https://cdn1.suno.ai/4527a99a-fbab-4839-a631-c21b23a0ee3c.mp3|[미분류] Lonely Universe / Udan_v4|",
"https://cdn1.suno.ai/44bf0a28-faca-4a89-8096-c134c39174ab.mp3|[미분류] Job 32: The Youthful Voice of Wisdom (Remastered) / DJShark12_v5|",
"https://cdn1.suno.ai/7a706c62-1c2e-4d4a-a41d-8e7b8e4bf114.mp3|[미분류] Manchild / shaneanigans_Edit|",
"https://cdn1.suno.ai/1fb9f663-232a-4dce-b692-770cf246641a.mp3|[미분류] The Little Things / Rise up Cold_v5|",
"https://cdn1.suno.ai/5c3a5ab9-b22c-4a5b-9792-5971236ddd83.mp3|[미분류] My Two Hands / Gilbert Diaz_v5|",
"https://cdn1.suno.ai/7fb4c42a-cdcd-4f6a-99b6-ca1b25218032.mp3|[미분류] My Old Man / Steve Klein_v5|",
"https://cdn1.suno.ai/c57a850b-1b56-4487-bd75-6c83bb8fff8e.mp3|[미분류] Every Step of the Way (For My Better Half) / Shawn Ash_v5|",
"https://cdn1.suno.ai/fbf6d426-2b72-4454-ac92-76965b2ed269.mp3|[미분류] Back To God / Jase Montgomery_v5|",
"https://cdn1.suno.ai/3743df3a-6d0a-48b8-aedf-5eee1b435799.mp3|[미분류] Infinite Possibilities / Yu-n-Joy_v5|",
"https://cdn1.suno.ai/9e74df9a-435a-493a-af8d-d430f7f12646.mp3|[미분류] 488 Ferrari / Tennessee Amber Light_v5|",
"https://cdn1.suno.ai/d1a2f5f9-bdce-4a8d-9f26-221b934fd800.mp3|[미분류] New Old Memory / Jeff Swope_v5|",
"https://cdn1.suno.ai/a0a91544-13db-4663-9950-2e13f5799ee7.mp3|[미분류] No one lives here anymore / RichardHendry2025_v5|",
"https://cdn1.suno.ai/f4906cf4-ab3e-4ae0-9fe9-325364948c9a.mp3|[미분류] Grab Your Togs / Junkz_v5|",
"https://cdn1.suno.ai/2b312611-cbb3-4ec5-8057-82aa2d7053b1.mp3|[미분류] Take the Broken Heart / See Joy_v5|",
"https://cdn1.suno.ai/971585a5-da91-4d57-9558-0a5d3bda6b8e.mp3|[미분류] My sweet little woman / Tom Bright_v5|",
"https://cdn1.suno.ai/7b688627-cc04-4af4-b304-30765ae11f4a.mp3|[미분류] True Hearts / Dj Ced84_v5|",
"https://cdn1.suno.ai/7420cef8-3da8-4e7c-a523-8d5e8ccc56ba.mp3|[미분류] Nothing´s Compared to you. / WilsonGomes_v5|",
"https://cdn1.suno.ai/c4ca7cf6-8e17-41bf-9e6a-a4debad7eb64.mp3|[미분류] MY LADY / Dan Gandy_v5|",
"https://cdn1.suno.ai/21b85e05-684d-44a5-877c-8d80d67314e7.mp3|[미분류] Front Street &amp; Forever / JohnS_v5|",
"https://cdn1.suno.ai/8832be31-dc95-4ef8-a58d-91d2d99e8ca4.mp3|[미분류] YOU ARE NOT A FAILURE / NINJAKILLSWITCH STUDIOS_v5|",
"https://cdn1.suno.ai/7e13c66a-12f7-41b3-acf5-fb9ac5b05a95.mp3|[미분류] Gatling gun ??country song / Smete 2-4-64_v5|",
"https://cdn1.suno.ai/9e93dece-f712-4e2c-9a48-062208204bec.mp3|[미분류] BREAK THE RULES FOR ME / MaryZimmer96_v5|",
"https://cdn1.suno.ai/348ee0de-a406-47df-8944-c3cf88afe7f7.mp3|[미분류] Friends  Like Yesterday / CuriousHallucination9616_v5|",
"https://cdn1.suno.ai/6d5f507a-0140-4eba-aa34-ba6bb3cfabf0.mp3|[미분류] Then It Went Quiet (Sonny Lee James) / Sonny Lee ????_v5|",
"https://cdn1.suno.ai/866313cf-8b81-496d-b58d-31b8072eaf60.mp3|[미분류] Blue Ribbon Heartache / Dj Ced84_v5|",
"https://cdn1.suno.ai/0fff570c-1bd2-429b-8ca7-87bcbde5d9f3.mp3|[미분류] Terms and Conditions / AstralSession0647_v5|",
"https://cdn1.suno.ai/6adf5284-c94f-43f5-81fc-198d3f4eeb11.mp3|[미분류] He said it was ok / RichardHendry2025_v5|",
"https://cdn1.suno.ai/008a6bea-c3a8-4b93-a6e5-ef682e097279.mp3|[미분류] Thinking 'Bout You, Dad / William Debes_v5|",
"https://cdn1.suno.ai/7828e618-aa6f-43e8-92aa-7d1f39fd992f.mp3|[미분류] Midnight Train / Sophie Lover 67 ????_v4.5-all|",
"https://cdn1.suno.ai/8b971883-31e2-4c7f-8577-46b7f98be898.mp3|[미분류] LIFE IN A FLASH / daveandtash3_v5|",
"https://cdn1.suno.ai/43519725-f8fc-480a-926c-70dbd4372593.mp3|[미분류] “Front Porch &amp; Backroads” / April blue_v5|",
"https://cdn1.suno.ai/8c8cadaa-e65c-43c9-87ff-9d59ce1d8cbc.mp3|[미분류] What Would The Machines Dream? / Clanker Larsen_v5|",
"https://cdn1.suno.ai/a4c5ad09-509e-4029-ac22-7d17ce8088bb.mp3|[미분류] SAME DIRT, SAME SKY / Misfits AI_v5|",
"https://cdn1.suno.ai/d40a4fdc-f06a-46e7-816d-12a02442636d.mp3|[미분류] Nothing Sweet (Aftertaste Remix) / rico_v4.5-all|",
"https://cdn1.suno.ai/4f20c394-2dc6-490b-8f7f-ffb9e65406a5.mp3|[미분류] Throwing sparks / Tipsykitty_v5|",
"https://cdn1.suno.ai/c1ad2351-6648-4227-97d4-5f8987003533.mp3|[미분류] 불타는 금요일 / 한잔의 커피_v5|",
"https://cdn1.suno.ai/7fb75e04-2847-462f-a498-b369299c1725.mp3|[미분류] 오늘 밤은 트롯이야 / 한잔의 커피_v5|",
"https://cdn1.suno.ai/d0a623a8-70ff-4775-9ffb-f8caa6216543.mp3|[미분류] Replay / WhimsicalComposers684_v4.5-all|",
"https://cdn1.suno.ai/0572fbc8-f789-428c-8981-b153fe963c9e.mp3|[미분류] 산골짜기 이야기 5-EDM1 / elecpapaya_v5|",
"https://cdn1.suno.ai/9a8f0a46-72f8-41aa-8329-fc9deefa3e79.mp3|[미분류] 산골짜기 이야기 5-EDM3 / elecpapaya_v5|",
"https://cdn1.suno.ai/08ad57a6-0740-4bac-bc07-0a7f11b46d8f.mp3|[미분류] 산골짜기 이야기 5-EDM5 / elecpapaya_v5|",
"https://cdn1.suno.ai/2ed89b98-9ddf-4370-a827-2af927b2a018.mp3|[미분류] 산골짜기 이야기 5-EDM4 / elecpapaya_v5|",
"https://cdn1.suno.ai/46c23284-9f09-4ff2-a3c3-3b7eb81afeb4.mp3|[미분류] 아름다운 소풍(귀천) / A Beautiful Picnic / Bitmoon_v5|",
"https://cdn1.suno.ai/e80fa537-8a67-4ac6-b6ee-d0d48fb4a133.mp3|[미분류] 흔들려 (Heundeullyeo) / Calizambri_v5|",
"https://cdn1.suno.ai/f72138c0-1b4a-4fc2-b6d7-13f35a5c6b2c.mp3|[미분류] AFTERGLOW x LOSE THE FRAME (Mashup) / E.S.T_v5|",
"https://cdn1.suno.ai/98d634cf-8684-4999-9940-18e20e24f2ab.mp3|[미분류] 어느 봄날의 이별처럼 / Beat한잔_v5|",
"https://cdn1.suno.ai/0913246f-cce1-4d25-be59-5f1632a64fbc.mp3|[미분류] A Sweet Revenge / Ommymon_v5|",
"https://cdn1.suno.ai/f047e1f4-66fa-4341-a0d5-16573832fe9f.mp3|[미분류] 두근두근 반짝여 흔들려 / Nikonekomeburiko_v5|",
"https://cdn1.suno.ai/30ad6eda-f3cb-43c9-9455-caa084dfeb08.mp3|[미분류] 그런데, 금요일 밤이라 너를 잊었어 / Kellydain_v5|",
"https://cdn1.suno.ai/ed819816-faa9-4dc3-a232-9157de63b425.mp3|[로운] 파랑이의 꿈_MW06 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/2a564d1c-a959-4802-8f03-cfa686987bdd.mp3|[로운] 파랑이의 꿈_MW04 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/56256ca4-6ce8-4be4-933d-85b2aa27e290.mp3|[로운] 파랑이의 꿈_WM04 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/d00fd9cf-4a74-412e-a342-5db985825535.mp3|[로운] 파랑이의 꿈_W02 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/45e853e5-2238-4ed4-a938-123ca8cfd735.mp3|[로운] 파랑이의 꿈 (케이팝)_M01 / Chaneey_v4|",
"https://cdn1.suno.ai/6723d32e-109c-462a-8363-ee000a733f79.mp3|[로운] 파랑이의 꿈 (케이팝)_W01 / Chaneey_v4|",
"https://cdn1.suno.ai/56d66f16-1e2d-43e9-b300-723c51ed4af5.mp3|[로운] 파랑이의 노래_MW02 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/e750f9d7-a91c-464b-bf56-aefc5f302844.mp3|[로운] 파랑이의 노래_W04 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/839e04bc-4a63-4d67-b485-3aab7b33cd93.mp3|[로운] 파랑이의 노래_MW07 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/68db7f93-dd78-43ee-851e-074cd15fdfed.mp3|[로운] 파랑이의 노래 (신스 멜로디)_W01 / Chaneey_v4|",
"https://cdn1.suno.ai/9e89c24f-5add-4c60-884f-8779362bdcd7.mp3|[로운] 파랑이의 노래 (신스 멜로디)_W02 / Chaneey_v4|",
"https://cdn1.suno.ai/3600c86c-8d73-45d2-981c-c46c9e723848.mp3|[로운] 파랑아, 우리 곁에 올 그날까지_MW03 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/cf5475df-6c32-485a-8a6a-c9af276aabfe.mp3|[로운] 파랑아, 우리 곁에 올 그날까지_W03 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/aa0878fb-a7b6-4b43-ad38-8e2475e66d9c.mp3|[로운] 파랑아, 우리 곁에 올 그날까지_MW07 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/bf65f8e0-775d-4011-8f0e-bfdfdbd7a4f6.mp3|[로운] 파랑아, 우리 곁에 올 그날까지_MW02 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/a3784a59-08b7-4f26-9260-b59e31ccb0f3.mp3|[로운] 파랑이에게 보내는 엄마 아빠의 축복_MW38 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/b7e45779-6b08-41f8-80b0-81374e765c51.mp3|[로운] 파랑이에게 보내는 엄마 아빠의 축복_WM32 / Chaneey_v4.5|",
"https://cdn1.suno.ai/c43eb309-81c7-47ce-a2f6-1340d948103c.mp3|[로운] 파랑이에게 보내는 엄마 아빠의 축복_MW37 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/53356ebf-1ea1-417c-a65e-4fd9b0f01bcb.mp3|[로운] 파랑이에게 보내는 엄마 아빠의 축복_MW33 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/8ee07cb1-38e0-4b8c-a546-323a0900ea54.mp3|[로운] 할아버지 할머니의 사랑을, 파랑에게_MW37 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/4a43e689-b9de-47e0-b26c-a8aced94e990.mp3|[로운] 할아버지 할머니의 사랑을, 파랑에게_MW32 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/501ad502-f776-4f21-8cbe-fc8e9ac83a71.mp3|[로운] 할아버지 할머니의 사랑을, 파랑에게_MW34 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/851344a2-c452-4f3c-b316-138ce71f5baf.mp3|[로운] 할아버지 할머니의 사랑을, 파랑에게_MW31 / Chaneey_v4.5|",
"https://cdn1.suno.ai/134a34c9-5ed4-4547-a31e-4e94b4142123.mp3|[로운] 할아버지 할머니의 사랑을, 파랑에게_MW35 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/8d1cab81-0a83-413e-9319-30d8c279a1d3.mp3|[로운] 할아버지 할머니가 보내는 파랑이의 축복_MW31 / Chaneey_v4.5|",
"https://cdn1.suno.ai/e9b26c85-d329-4895-bd1f-039c5a6b842e.mp3|[로운] 할아버지 할머니가 보내는 파랑이의 축복_W31 / Chaneey_v4.5|",
"https://cdn1.suno.ai/e7209213-81da-45fe-aa92-53f8ea38963b.mp3|[로운] 할아버지 할머니가 보내는 파랑이의 축복_MW32 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/14fbc195-88e8-41ee-9735-5f94addfde38.mp3|[로운] 할아버지 할머니가 보내는 파랑이의 축복_MW34 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/0d5c01fa-a6d5-442d-8c51-597498588ed2.mp3|[로운] 로운에게 보내는 엄마 아빠의 축복_M07 / Chaneey_v4.5|",
"https://cdn1.suno.ai/53f58222-9e8d-441e-9511-b2f4a671fabc.mp3|[로운] 로운에게 보내는 엄마 아빠의 축복_WM03 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/deea0b3a-aee5-405e-be1c-7236e33ec6e1.mp3|[로운] 로운에게 보내는 엄마 아빠의 축복_MW02 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/5568b824-2ee7-429b-9a5f-e6338d6bf2cc.mp3|[로운] 로운에게 보내는 엄마 아빠의 축복 (발라드)_WM01 / Chaneey_v4.5|",
"https://cdn1.suno.ai/5cf91fa4-d395-4f76-98ab-29a5d03498ba.mp3|[로운] 로운에게 보내는 엄마 아빠의 축복_MW06 / Chaneey_v4.5-all|",
"https://cdn1.suno.ai/57eb2949-f85e-486f-9b26-3559071feea6.mp3|[로운] 로운에게 보내는 엄마 아빠의 축복 (에모팝)_M04 / Chaneey_v4.5|",
]

song = [
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
</td></tr></table>`
]

const updat = `<table style=\"border-radius: 30px; BACKGROUND:#ffcccc url('') repeat fixed left top\" cellpadding='10'><tr valign=middle width=100%><td>
<P class='mid'><font color='red'><b>업데이트 내역</b></font><br><br>

<font color='blue'><b></b></font>
<font color='blue'><b></b></font>
<font color='blue'><b></b></font>

<font color='blue'><b>2026.02.18 깃허브 링크 생성</b></font><br>
본 html을 github에 업로드.<br><br>

<font color='blue'><b>2026.02.17 재생곡 데이터 가져오기 </b></font><br>
현재 재생되고 있는 곡에 대하여 가사, 생성일자, 생성 시 프롬프트 등<br>
관련 곡의 데이터를 실시간으로 가져 오기 (Claude)<br><br>

<font color='blue'><b>2026.02.16 재생 목록 생성</b></font><br>
suno의 내가 선호하는 playlist에서 로운(손자)의 노래, 발라드, 포크송, 참조 등의 list를<br>
본 '오디오 플레이어'의 재생 목록으로 만들기 위한 배열 생성 (EXEL)<br>
</td></tr></table>`