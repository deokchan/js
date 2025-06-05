const title0 = "파랑(로운)이를 위한 태담과 노래"

odi = [
"https://blog.kakaocdn.net/dn/beEsax/btsOofuql2d/btaoyrTbliKDw4ClrUS3N0/%EC%98%88%EC%81%9C%20%EC%9D%B4%EB%A6%84%20%EB%A1%9C%EC%9A%B4%EC%95%84%2C%20%EC%B6%95%ED%95%98%ED

%95%B4%21_M2_Sunoprompt_Suno4.5.mp3?attach=1&knm=tfile.mp3|예쁜 이름 로운아, 축하해! (작명)_M2W_Sunoprompt_Suno4.5",
"https://blog.kakaocdn.net/dn/bkRMkq/btsOoPwDE5c/yU7Z54znnQGr3CkPvFcVZk/%ED%95%A0%EC%95%84%EB%B2%84%EC%A7%80%20%ED%95%A0%EB%A8%B8%EB%8B%88%EC%9D%98%20%EC%82%AC%EB%9E%91%EC%9D%84%2C%20%EB%A1%9C

%EC%9A%B4%EC%97%90%EA%B2%8C_M8_GPT_Suno4.5.mp3?attach=1&knm=tfile.mp3|할아버지 할머니의 사랑을, 로운에게 (작명 후 수정)_M8_GPT_Suno4.5",
"https://blog.kakaocdn.net/dn/bCQPG0/btsNTlXgmhK/9kEvkLKdNMsxcYZUx5c7P1/%EB%82%98%EB%A0%88%EC%9D%B4%EC%85%98_%ED%95%A0%EC%95%84%EB%B2%84%EC%A7%80%20%ED%95%A0%EB%A8%B8%EB%8B%88%EC%9D%98%20%EC

%82%AC%EB%9E%91%EC%9D%84%2C%20%ED%8C%8C%EB%9E%91%EC%97%90%EA%B2%8C%20%28%EC%86%90%EC%9E%90%EC%9D%98%20%EC%B6%95%EB%B3%B5%29_WM34_GPT_Suno4.5.mp3?attach=1&knm=tfile.mp3|나레이션_할아버지 할머니의 

사랑을, 파랑에게 (손자의 축복)_WM34_GPT_Suno4.5",
"https://blog.kakaocdn.net/dn/l4E0C/btsNSIRDm6K/d9fklZg4HOK1qN6coBHlv1/%ED%8C%8C%EB%9E%91%EC%9D%B4%EC%97%90%EA%B2%8C%20%EB%B3%B4%EB%82%B4%EB%8A%94%20%EC%97%84%EB%A7%88%20%EC%95%84%EB%B9%A0%EC%9D

%98%20%EC%B6%95%EB%B3%B5%20%28%EC%82%AC%EB%9E%91%2C%20%EC%B6%95%EB%B3%B5%2C%20%ED%9D%AC%EB%A7%9D%29_WM32_GPT_Suno4.5.mp3?attach=1&knm=tfile.mp3|파랑이에게 보내는 엄마 아빠의 축복 (사랑, 축복, 

희망)_WM32_GPT_Suno4.5",
"https://blog.kakaocdn.net/dn/de4Fap/btsNRMtNYiE/0Z18kkf6Uka4GIvg9Jepm0/%ED%95%A0%EC%95%84%EB%B2%84%EC%A7%80%20%ED%95%A0%EB%A8%B8%EB%8B%88%EC%9D%98%20%EC%82%AC%EB%9E%91%EC%9D%84%2C%20%ED%8C%8C

%EB%9E%91%EC%97%90%EA%B2%8C%20%28%EA%B0%90%EC%84%B1%EC%A0%81%EC%9D%B8%20%EA%B0%80%EC%A1%B1%20%EB%AA%A8%EC%9E%84%29_MW31_GPT_Suno4.5.mp3?attach=1&knm=tfile.mp3|할아버지 할머니의 사랑을, 파랑에게 (감

성적인 가족 모임)_MW31_GPT_Suno4.5",
"https://blog.kakaocdn.net/dn/bcmKcs/btsNTj4QBeQ/wvcWHWQhqDb1t608FwhSJ1/%ED%95%A0%EC%95%84%EB%B2%84%EC%A7%80%20%ED%95%A0%EB%A8%B8%EB%8B%88%EA%B0%80%20%EB%B3%B4%EB%82%B4%EB%8A%94%20%ED%8C%8C

%EB%9E%91%EC%9D%B4%EC%9D%98%20%EC%B6%95%EB%B3%B5%20%28%EC%95%84%EA%B8%B0%20%27%ED%8C%8C%EB%9E%91%27%EC%97%90%EA%B2%8C%29_WM32_Sunoprompt_Suno4.5.mp3?attach=1&knm=tfile.mp3|할아버지 할머니가 보내

는 파랑이의 축복 (아기 '파랑'에게)_WM32_Sunoprompt_Suno4.5",
"https://blog.kakaocdn.net/dn/bqJREe/btsNR8jfu96/SGKmzuZPkgvIPc4K64oxn1/%ED%8C%8C%EB%9E%91%EC%9D%B4%EC%97%90%EA%B2%8C%20%EB%B3%B4%EB%82%B4%EB%8A%94%20%EC%97%84%EB%A7%88%20%EC%95%84%EB%B9%A0%EC%9D

%98%20%EC%B6%95%EB%B3%B5%20%28%EC%82%AC%EB%9E%91%2C%20%ED%83%84%EC%83%9D%2C%20%EA%BF%88%2C%20%EA%B0%90%EC%82%AC%29_M23_GPT_riffusion.mp3?attach=1&knm=tfile.mp3|파랑이에게 보내는 엄마 아빠의 축복 (사랑, 

탄생, 꿈, 감사)_M23_GPT_FUZZ-1.0",
"https://blog.kakaocdn.net/dn/y9Oxo/btsNRMN2wK8/fOVlR9Bu2ZdK4kIt5crTy1/%ED%95%A0%EC%95%84%EB%B2%84%EC%A7%80%20%ED%95%A0%EB%A8%B8%EB%8B%88%EC%9D%98%20%EC%82%AC%EB%9E%91%EC%9D%84%2C%20%ED%8C%8C

%EB%9E%91%EC%97%90%EA%B2%8C%20%28%EA%B8%B0%EC%81%9C%20%EC%B6%95%EB%B3%B5%29_M27_GPT_riffusion.mp3?attach=1&knm=tfile.mp3|할아버지 할머니의 사랑을, 파랑에게 (기쁜 축복)_M27_GPT_FUZZ-1.0",
"https://blog.kakaocdn.net/dn/dmHLen/btsNSaOUrEs/ojrz7EIbse9cGcJ7HzFOw0/%ED%95%A0%EC%95%84%EB%B2%84%EC%A7%80%20%ED%95%A0%EB%A8%B8%EB%8B%88%EA%B0%80%20%EB%B3%B4%EB%82%B4%EB%8A%94%20%ED%8C%8C%EB

%9E%91%EC%9D%B4%EC%9D%98%20%EC%B6%95%EB%B3%B5%20%28%EC%A1%B0%EB%B6%80%EB%AA%A8%EB%8B%98%EC%9D%98%20%EC%86%8C%EC%9B%90%29_M21_GPT_riffusion.mp3?attach=1&knm=tfile.mp3|할아버지 할머니가 보내는 파랑이

의 축복 (조부모님의 소원)_M21_Sunoprompt_FUZZ-0.8",
"https://blog.kakaocdn.net/dn/bbwDRl/btsNSzN7ZJt/qND59SdjXjsrNWDAF9fa6k/%ED%8C%8C%EB%9E%91%EC%9D%B4%EC%97%90%EA%B2%8C%20%EB%B3%B4%EB%82%B4%EB%8A%94%20%EC%97%84%EB%A7%88%20%EC%95%84%EB%B9%A0%EC

%9D%98%20%EC%B6%95%EB%B3%B5%20%28%ED%83%84%EC%83%9D%EC%9D%84%20%EC%B6%95%ED%95%98%29_W22_GPT_riffusion.mp3?attach=1&knm=tfile.mp3|파랑이에게 보내는 엄마 아빠의 축복 (탄생을 축하)_W22_GPT_FUZZ-1.0",
"https://blog.kakaocdn.net/dn/bx7hfL/btsNScyH44X/nsYd115RXh0JEXB2jjKjs0/%ED%95%A0%EC%95%84%EB%B2%84%EC%A7%80%20%ED%95%A0%EB%A8%B8%EB%8B%88%EC%9D%98%20%EC%82%AC%EB%9E%91%EC%9D%84%2C%20%ED%8C%8C%EB

%9E%91%EC%97%90%EA%B2%8C%20%28%EC%9E%91%EC%9D%80%20%EB%B3%84%EC%9D%98%20%EC%9E%90%EC%9E%A5%EA%B0%80%29_W22_GPT_riffusion.mp3?attach=1&knm=tfile.mp3|할아버지 할머니의 사랑을, 파랑에게 (작은 별의 

자장가)_W22_GPT_FUZZ-1.0",
"https://blog.kakaocdn.net/dn/boeMZb/btsNSNLZ0bz/F02i8ktkxg9HIkgzMXOCL0/%ED%95%A0%EC%95%84%EB%B2%84%EC%A7%80%20%ED%95%A0%EB%A8%B8%EB%8B%88%EA%B0%80%20%EB%B3%B4%EB%82%B4%EB%8A%94%20%ED%8C%8C%EB

%9E%91%EC%9D%B4%EC%9D%98%20%EC%B6%95%EB%B3%B5%20%28%EC%95%84%EA%B8%B0%20%27%ED%8C%8C%EB%9E%91%27%EC%97%90%EA%B2%8C%29_W28_GPT_riffusion.mp3?attach=1&knm=tfile.mp3|할아버지 할머니가 보내는 파랑이의 축

복 (아기 '파랑'에게)_W28_Sunoprompt_FUZZ-0.8",
"https://blog.kakaocdn.net/dn/vk2Y2/btsNR3hG4pM/lmiHTOJaTckKhPskiGXY10/%ED%8C%8C%EB%9E%91%EC%9D%B4%EC%97%90%EA%B2%8C%20%EB%B3%B4%EB%82%B4%EB%8A%94%20%EC%97%84%EB%A7%88%20%EC%95%84%EB%B9%A0%EC

%9D%98%20%EC%B6%95%EB%B3%B5%20%28%EA%B8%B0%EC%81%A8%EA%B3%BC%20%EC%B6%95%EB%B3%B5%29_WM22_GPT_riffusion.mp3?attach=1&knm=tfile.mp3|파랑이에게 보내는 엄마 아빠의 축복 (기쁨과 축복)_WM22_GPT_FUZZ-1.0",
"https://blog.kakaocdn.net/dn/bHOfwL/btsNR5zOh6o/YKy4p3k4Anl0gI4KaYMfCK/%ED%95%A0%EC%95%84%EB%B2%84%EC%A7%80%20%ED%95%A0%EB%A8%B8%EB%8B%88%EC%9D%98%20%EC%82%AC%EB%9E%91%EC%9D%84%2C%20%ED%8C%8C

%EB%9E%91%EC%97%90%EA%B2%8C%20%28%EB%AC%B4%EC%A1%B0%EA%B1%B4%EC%A0%81%EC%9D%B8%20%EC%82%AC%EB%9E%91%29_WM33_GPT_Suno4.5.mp3?attach=1&knm=tfile.mp3|할아버지 할머니의 사랑을, 파랑에게 (무조건적인 

사랑)_WM33_GPT_Suno4.5",
"https://blog.kakaocdn.net/dn/bDOGDy/btsNUuq6Bl8/y98zlTmcdlkQ0rtC76riv0/%ED%95%A0%EC%95%84%EB%B2%84%EC%A7%80%20%ED%95%A0%EB%A8%B8%EB%8B%88%EA%B0%80%20%EB%B3%B4%EB%82%B4%EB%8A%94%20%ED%8C%8C%EB%9E

%91%EC%9D%B4%EC%9D%98%20%EC%B6%95%EB%B3%B5%20%28%EC%95%84%EA%B8%B0%20%27%ED%8C%8C%EB%9E%91%27%EC%97%90%EA%B2%8C%29_MW31_Sunoprompt_Suno4.5.mp3?attach=1&knm=tfile.mp3|할아버지 할머니가 보내는 파랑

이의 축복 (아기 '파랑'에게)_MW31_Sunoprompt_Suno4.5",
"https://blog.kakaocdn.net/dn/c4CU5t/btsNS3ak7IT/qaAd4kK2kRgKzrtQ4EeHik/%ED%8C%8C%EB%9E%91%EC%95%84%2C%20%EC%9A%B0%EB%A6%AC%20%EA%B3%81%EC%97%90%20%EC%98%AC%20%EA%B7%B8%EB%82%A0%EA%B9%8C%EC

%A7%80.._W14_GPT_riffusion.mp3?attach=1&knm=tfile.mp3|파랑아, 우리 곁에 올 그날까지 (여자)_W14_GPT_riffusion",
"https://blog.kakaocdn.net/dn/bwTak6/btsNR57ENE5/QEfm92XLdbxt1TJeoizi3K/%ED%95%A0%EC%95%84%EB%B2%84%EC%A7%80%20%ED%95%A0%EB%A8%B8%EB%8B%88%EA%B0%80%20%EB%B3%B4%EB%82%B4%EB%8A%94%20%ED%8C%8C%EB

%9E%91%EC%9D%B4%EC%9D%98%20%EC%B6%95%EB%B3%B5%20%28%EC%A1%B0%EB%B6%80%EB%AA%A8%EB%8B%98%EC%9D%98%20%EC%86%8C%EC%9B%90%29_W31_Sunoprompt_Suno4.5.mp3?attach=1&knm=tfile.mp3|할아버지 할머니가 보내

는 파랑이의 축복 (조부모님의 소원)_W31_Sunoprompt_Suno4.5",
"https://blog.kakaocdn.net/dn/bnXzao/btsNjbfOm02/vfBjFVvuYJFoEcNk8pA5A0/54%20%5B%EB%85%B8%EB%9E%98%5D%20%ED%8C%8C%EB%9E%91%EC%95%84%2C%20%EC%9A%B0%EB%A6%AC%20%EA%B3%81%EC%97%90%20%EC%98%AC%20%EA

%B7%B8%EB%82%A0%EA%B9%8C%EC%A7%80_WM%20%EB%A0%88%EB%AA%AC.mp3?attach=2&knm=tfile.mp3|파랑아, 우리 곁에 올 그날까지 (레몬)_WM_GPT_Suno4.0",
"https://blog.kakaocdn.net/dn/o29e6/btsNRI5ZgFs/L0iobJjKLQyRNd4mp14h91/%ED%95%A0%EC%95%84%EB%B2%84%EC%A7%80%20%ED%95%A0%EB%A8%B8%EB%8B%88%EA%B0%80%20%EB%B3%B4%EB%82%B4%EB%8A%94%20%ED%8C%8C%EB%9E

%91%EC%9D%B4%EC%9D%98%20%EC%B6%95%EB%B3%B5%20%28%EC%A7%84%EC%8B%AC%20%EC%96%B4%EB%A6%B0%20%EC%B6%95%EB%B3%B5%29_W36_GPT_riffusion.mp3?attach=1&knm=tfile.mp3|할아버지 할머니가 보내는 파랑이의 축복 (진심 

어린 축복)_W36_Sunoprompt_FUZZ-0.8",
"https://blog.kakaocdn.net/dn/b0fd6f/btsNR8RcVqB/y7kJ7iGg2RhGQK5niiSKPK/%ED%8C%8C%EB%9E%91%EC%95%84%2C%20%EC%9A%B0%EB%A6%AC%20%EA%B3%81%EC%97%90%20%EC%98%AC%20%EA%B7%B8%EB%82%A0%EA%B9%8C%EC

%A7%80.._W13_GPT_riffusion.mp3?attach=1&knm=tfile.mp3|파랑아, 우리 곁에 올 그날까지 (여자)_W13_GPT_riffusion",
"https://blog.kakaocdn.net/dn/AKQCd/btsNSx3TWPI/kyMPuZfS0YQWrSf3QP8Ilk/%ED%8C%8C%EB%9E%91%EC%9D%B4%EC%97%90%EA%B2%8C%20%EB%B3%B4%EB%82%B4%EB%8A%94%20%EC%97%84%EB%A7%88%20%EC%95%84%EB%B9%A0%EC

%9D%98%20%EC%B6%95%EB%B3%B5_W31_GPT_Suno4.5.mp3?attach=1&knm=tfile.mp3|파랑이에게 보내는 엄마 아빠의 축복 (사랑, 탄생, 꿈, 감사)_W31_GPT_Suno4.5",
"https://blog.kakaocdn.net/dn/csFT1X/btsNboz4Bed/KlZFlr2khzfWq6i1WUCKtK/%ED%8C%8C%EB%9E%91%EC%9D%B4%EC%9D%98%20%EB%85%B8%EB%9E%98%20%28%EB%B2%84%EC%A0%84%201%29.mp3?attach=2&knm=tfile.mp3|파랑이의 노래 (여자 

2)_copilot_Suno4.0",
"https://blog.kakaocdn.net/dn/2JT5s/btsNaKvPbXk/jbkcKISkGT7yPcgIP832fK/%ED%8C%8C%EB%9E%91%EC%9D%B4%EC%9D%98%20%EA%BF%88_M.mp3?attach=2&knm=tfile.mp3|파랑이의 꿈 (남자)_copilot_Suno4.0",
"https://blog.kakaocdn.net/dn/buiifG/btsNUstsmau/8ocSvcZcg3BC8890VYxgcK/%ED%8C%8C%EB%9E%91%EC%95%84%2C%20%EC%9A%B0%EB%A6%AC%20%EA%B3%81%EC%97%90%20%EC%98%AC%20%EA%B7%B8%EB%82%A0%EA%B9%8C%EC

%A7%80.._MW12_GPT_riffusion.mp3?attach=1&knm=tfile.mp3|파랑아, 우리 곁에 올 그날까지 (남자 여자)_MW12_GPT_riffusion",
"https://blog.kakaocdn.net/dn/k8u19/btsNjGfhvrJ/Ibt5HNKxidqIGk7dmxgRck/84%20%5B%EB%85%B8%EB%9E%98%5D%20%ED%8C%8C%EB%9E%91%EC%95%84%2C%20%EC%9A%B0%EB%A6%AC%20%EA%B3%81%EC%97%90%20%EC%98%AC%20%EA

%B7%B8%EB%82%A0%EA%B9%8C%EC%A7%80_W%20%EB%A0%88%EB%AA%AC.mp3?attach=2&knm=tfile.mp3|파랑아, 우리 곁에 올 그날까지 (레몬)_W_GPT_Suno4.0",
"https://blog.kakaocdn.net/dn/SN9Fg/btsNcSGGbQj/4FkkIOLb6XkP2zEIDPQBm1/%ED%8C%8C%EB%9E%91%EC%9D%B4%EC%9D%98%20%EB%85%B8%EB%9E%98%20%28%EB%B2%84%EC%A0%84%202%29.mp3?attach=2&knm=tfile.mp3|파랑이의 노래 (여

자 1)_copilot_Suno4.0",
"https://blog.kakaocdn.net/dn/wBycF/btsNjGTVMSP/U54jICxNT8shkotYziU2RK/50%20%5B%EB%85%B8%EB%9E%98%5D%20%ED%8C%8C%EB%9E%91%EC%9D%B4%EC%9D%98%20%EA%BF%88_W.mp3?attach=2&knm=tfile.mp3|파랑이의 꿈 

(여자)_copilot_Suno4.0",
"https://blog.kakaocdn.net/dn/bmr5oU/btsNahAVb5y/KCjkOnAGXuHouB2cK3R8M0/%ED%8C%8C%EB%9E%91%EC%9D%B4%EC%9D%98%20%EC%86%8C%EC%A4%91%ED%95%9C%20%EC%97%AC%EC%A0%95_%EC%84%A0%ED%9E%88.mp3?

attach=2&knm=tfile.mp3|파랑이의 소중한 여정 (선히)_[태담]",
"https://blog.kakaocdn.net/dn/blxWuV/btsNbg8Qdf1/KD2x0GBbT7iWQMGWMfdjn1/%ED%95%98%EB%8A%98%EA%B3%BC%20%EB%B0%94%EB%8B%A4%EC%9D%98%20%EC%84%A0%EB%AC%BC_%ED%98%84%EC%88%98.mp3?attach=2&knm=tfile.mp3|

하늘과 바다의 선물 (현수)_[태담]",
"https://blog.kakaocdn.net/dn/bCYfdo/btsNdidVK5J/5vLxj96qyB0aWo1lb4mqZ0/%5B%ED%83%9C%EB%8B%B4%5D%20%ED%8C%8C%EB%9E%91%EC%9D%B4%EC%99%80%20%ED%95%98%EB%8A%98%EC%9D%98%20%EC%84%A0%EB%AC%BC

%20%28%EC%84%9C%ED%98%84%29.mp3?attach=2&knm=tfile.mp3|파랑이와 하늘의 선물 (서현)_[태담]",
"https://blog.kakaocdn.net/dn/mkEzO/btsNc8oXJJu/KkPDz41GOHKIC8LZGbBHm0/%5B%ED%83%9C%EB%8B%B4%5D%20%ED%8C%8C%EB%9E%91%EC%95%84%2C%20%EB%84%88%EB%8A%94%20%ED%95%98%EB%8A%98%EC%9D%84%20%EB

%84%98%EC%96%B4%EC%98%A8%20%EC%9E%91%EC%9D%80%20%EA%B8%B0%EC%A0%81%21%20%28Hyunsu%20%EB%B2%84%EC%A0%84%29.mp3?attach=2&knm=tfile.mp3|파랑아, 너는 하늘을 넘어온 작은 기적 (Hyunsu 버전)_[태담]",
"https://blog.kakaocdn.net/dn/bITJOL/btsNbauhuwr/gYbefS7SEKgQKyKjynUARK/%ED%8C%8C%EB%9E%91%EC%9D%B4%EC%99%80%20%EC%84%B8%EC%83%81%20%ED%83%90%ED%97%98_%EB%B4%89%EC%A7%84.mp3?attach=2&knm=tfile.mp3|파랑이

와 세상 탐험 (봉진)_[태담]",
]

song = [
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/wBbix/btsN1lbKcry/EuTYJsBqFw6IGoAtF8uG6K/img.png') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>할아버지 할머니의 사랑을, 로운에게</b></font><br><br>\
\
로운아, 사랑스러운 우리 아가야<br>\
우리 곁에 와줘서 정말 고마워<br>\
엄마와 아빠를 닮은 너의 얼굴 보면<br>\
우리는 눈물이 나도록 감사해<br><br>\
\
로운이 엄마, 휘경아<br>\
로운이 아빠, 경진아<br>\
너희 둘의 사랑이 씨앗이 되었고<br>\
이제 결실을 맺은 기적을 축하해<br><br>\
\
둘이 만들었던 사랑과 믿음으로<br>\
지나온 시간들이 열매를 맺었구나<br>\
이제는 셋이서 더 큰 사랑으로<br>\
더 깊고 큰 행복을 만들어가기를..<br><br>\
\
로운아, 할아버지 할머니는 정말 좋아<br>\
너를 안을 수 있어서 너무 행복해<br>\
뛰어노는 너의 모습 상상만 해도<br>\
가슴이 벅차서 웃음이 그치지 않아<br><br>\
\
사랑스런 눈빛으로 세상을 보고<br>\
사랑 가득한 마음으로 자라나는<br>\
너의 반듯한 모습을 지켜보며<br>\
우리의 행복도 더 커져갈 거야<br><br>\
\
로운이의 희망, 우리가 키워줄게<br>\
로운이의 소원, 우리도 기도할게<br>\
맑은 마음으로 네 꿈을 피우고<br>\
힘찬 기백으로 그 꿈을 펼쳐라<br><br>\
\
로운아, 이 세상에 와줘서 고마워<br>\
우리에게 너는 세상 가장 큰 기쁨이야<br>\
큰 사랑 가득 담긴 이 노래처럼<br>\
언제나 너를 축복할게<br><br>\
\
로운아, 사랑해..<br>\
언제나 너의 편이 되어줄게<br>\
우리의 마음을 다하여 너를 응원할게, <br>\
언제까지나 영원토록..<br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ccffff url('https://blog.kakaocdn.net/dn/cNRdEW/btsN2lnXfqg/4hhAemVBwUY4WVniGa8NpK/img.png') repeat fixed left top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>예쁜 이름 로운아, 축하해!</b></font><br><br>\
\
파랑~, 고운 빛깔 품고 온 아가<br>\
로운~, 예쁜 이름 세상에 빛나네<br><br>\
\
세찬 여울처럼 씩씩하게 자라렴<br>\
가슴 벅찬 꿈을 향해 나아가렴<br><br>\
\
로운아, 축복 가득한 너의 길에<br>\
슬기롭고 이로운 빛을 더하려무나<br>\
높은 뜻 펼쳐서 밝게 빛나는<br>\
사랑스러운 아가, 우리 로운아<br><br>\
\
높을 '운'처럼 꿈을 높이 펼치고<br>\
이 세상 가득 사랑을 채워주렴<br><br>\
\
슬기로운 마음으로 세상을 배우고<br>\
이로운 손길로 행복을 만들어가려무나<br><br>\
\
로운아, 축복 가득한 너의 길에<br>\
슬기롭고 이로운 빛을 더하려무나<br>\
높은 뜻 펼쳐서 밝게 빛나는<br>\
사랑스러운 아가, 우리 로운아<br><br>\
\
때로는 힘겨운 날도 있겠지만<br>\
넘어져도 괜찮아, <br>\
다시 일어설 수 있으니까<br><br>\
\
로운아, 축복 가득한 너의 길에<br>\
슬기롭고 이로운 빛을 더하려무나<br>\
높은 뜻 펼쳐서 밝게 빛나는<br>\
사랑스러운 아가, 우리 로운아<br><br>\
\
밝고 건강하게, 로운아<br>\
사랑 가득하게, 로운아<br>\
언제나 응원할게<br>\
모든 순간, 너의 모든 날들을..<br>\
</td></tr></table>",
"<table class='box' style=\"BACKGROUND:#ffff66 url('https://blog.kakaocdn.net/dn/chruZW/btsN1CxdQ9V/hSKcEzMEaVPhtO5NXgcLZ0/img.jpg') repeat fixed center top\" cellpadding='8' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<font color='blue'><b>나레이션_할아버지 할머니의 사랑을, 파랑에게</b></font><br><br>\
\
<font color='#FF5722'>[Intro Narration 할아버지] </font><br><br>\
\
파랑아! <br>\
이 할아버지는 네가 태어난다는 소식을 들었을 때, 가슴이 뭉클했단다.  <br><br>\
\
그리고 눈물이 핑 돌 정도로 감격스러웠어. 너는 우리 가족에게 아주 큰 기쁨이란다.  <br><br>\
\
엄마와 아빠가 함께 걸어온 사랑의 시간이, 이제 너라는 선물로 찾아온 거지<br><br>\
\
할아버지는 네가 건강하게 자라고,  <br>\
밝은 웃음으로 세상을 가득 채우길 바란단다.  <br><br>\
\
언제나 네 곁을 지켜줄게.<br>\
사랑한다, 파랑아.<br><br><br><br>\
\
\
[노래]<br><br>\
\
파랑아, 사랑스러운 우리 아가야<br>\
우리 곁에 와줘서 정말 고마워<br>\
엄마와 아빠를 닮은 너의 얼굴 보면<br>\
우리는 눈물이 나도록 감사해<br><br>\
\
파랑이 엄마, 휘경아<br>\
파랑이 아빠, 경진아<br>\
너희 둘의 사랑이 씨앗이 되었고<br>\
이제는 결실이 된 기적을 축하해<br><br>\
\
서로 아껴주던 그날들을 기억해<br>\
함께한 시간들이 열매를 맺었구나<br>\
이제는 셋이서 더 큰 사랑으로<br>\
더 깊고 큰 행복을 만들어가기를..<br><br>\
\
파랑아, 할아버지 할머니는 좋아<br>\
너를 안을 수 있어서 너무 행복해<br>\
뛰어노는 너의 모습 상상만 해도<br>\
가슴이 벅차고 웃음이 멈추질 않아<br><br>\
\
사랑스런 눈빛으로 세상을 보고<br>\
사랑 가득한 마음으로 자라나는<br>\
너의 반듯한 모습 지켜보며<br>\
우리의 행복도 더 커져갈 거야<br><br>\
\
파랑이의 희망, 우리가 키워줄게<br>\
파랑이의 소원, 우리도 기도할게<br>\
맑은 마음으로 네 꿈을 피우고<br>\
힘찬 기백으로 그 꿈을 펼쳐라<br><br>\
\
파랑아, 이 세상에 와줘서 고마워<br>\
우리에게 너는 세상 가장 큰 기쁨이야<br>\
큰 사랑 가득 담긴 이 노래처럼<br>\
언제나 너를 축복할게<br><br>\
\
파랑아, 사랑해..<br>\
언제나 너의 편이 되어줄게<br>\
우리의 마음을 다하여<br>\
너를 응원할게, 영원토록..<br><br><br>\
\
\
<font color='#FF5722'>[Outro Narration 할머니] </font><br><br>\
\
파랑아! 사랑스러운 우리 손자야.  <br><br>\
\
네가 엄마 뱃속에 있을 때부터,  <br>\
할머니는 매일, 네가 태어날 날을 기다렸단다.  <br><br>\
\
너의 작은 숨결 하나, 작은 웃음 하나.  <br>\
그 모든 게, 우리에게는 말로 다 못할 기쁨이란다.  <br><br>\
\
너를 만나게 돼서, 정말 고맙구나.  <br>\
앞으로 네 삶이, 사랑으로 가득하길, 할머니는 늘 축복할게.  <br><br>\
\
사랑한다, 파랑아.  <br>\
할머니는 언제나, 네 편이야.<br>\
</td></tr></table>",
"<table style='BACKGROUND:#ffffcc repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<b>할아버지 할머니가 보내는 파랑이의 축복</b><br><br>\
\
작은 심장이 두근거려요<br>\
파랑이의 세상이 시작되었네<br><br>\
\
휘경아 경진아 애썼구나<br>\
사랑스런 아가를 품에 안으니<br>\
벅찬 기쁨에 눈물이 핑 돌아<br><br>\
\
파랑아, 할아버지 할머니는<br>\
너의 웃음소리에 힘이 솟는다<br>\
반짝이는 눈망울, 우리의 별이구나<br><br>\
\
파랑 파랑 우리 아가 파랑이는<br>\
온 세상 축복 속에 태어났어요<br>\
휘경아 경진아 마음껏 펼쳐라<br>\
희망과 사랑으로 가득한 미래를..<br><br>\
\
새근새근 잠든 모습이 천사 같아<br>\
아픔 없이 건강하게 자라려무나<br>\
지혜롭고 씩씩한 아이로..<br><br>\
\
엄마와 아빠의 사랑 듬뿍 받으며<br>\
세상 모든 아름다움을 배우려무나<br>\
할아버지 할머니가 언제나 지켜줄게<br><br>\
\
파랑 파랑 우리 아가 파랑이는<br>\
온 세상 축복 속에 태어났어요<br>\
휘경아 경진아 마음껏 펼쳐라<br>\
희망과 사랑으로 가득한 미래를..<br><br>\
\
작은 발걸음 하나하나에<br>\
소중한 추억 만들어가려무나<br>\
함께 노래하고 함께 웃으며..<br><br>\
\
파랑 파랑 우리 아가 파랑이는<br>\
온 세상 축복 속에 태어났어요<br>\
휘경아 경진아 마음껏 펼쳐라<br>\
희망과 사랑으로 가득한 미래를..<br><br>\
\
파랑아, 사랑한다<br>\
우리 아가 파랑아, 영원토록..<br>\
</td></tr></table>",
"<table style='BACKGROUND:#ccccff repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<b>할아버지 할머니의 사랑을, 파랑에게</b><br><br>\
\
파랑아, 사랑스러운 우리 아가야<br>\
우리 곁에 와줘서 정말 고마워<br>\
엄마와 아빠를 닮은 너의 얼굴 보면<br>\
우리는 눈물이 나도록 감사해<br><br>\
\
파랑이 엄마, 휘경아<br>\
파랑이 아빠, 경진아<br>\
너희 둘의 사랑이 씨앗이 되었고<br>\
이제는 결실이 된 기적을 축하해<br><br>\
\
서로 아껴주던 그날들을 기억해<br>\
함께한 시간들이 열매를 맺었구나<br>\
이제는 셋이서 더 큰 사랑으로<br>\
더 깊고 큰 행복을 만들어가기를..<br><br>\
\
파랑아, 할아버지 할머니는 좋아<br>\
너를 안을 수 있어서 너무 행복해<br>\
뛰어노는 너의 모습 상상만 해도<br>\
가슴이 벅차고 웃음이 멈추질 않아<br><br>\
\
사랑스런 눈빛으로 세상을 보고<br>\
사랑 가득한 마음으로 자라나는<br>\
너의 반듯한 모습 지켜보며<br>\
우리의 행복도 더 커져갈 거야<br><br>\
\
파랑이의 희망, 우리가 키워줄게<br>\
파랑이의 소원, 우리도 기도할게<br>\
맑은 마음으로 네 꿈을 피우고<br>\
힘찬 기백으로 그 꿈을 펼쳐라<br><br>\
\
파랑아, 이 세상에 와줘서 고마워<br>\
우리에게 너는 세상 가장 큰 기쁨이야<br>\
큰 사랑 가득 담긴 이 노래처럼<br>\
언제나 너를 축복할게<br><br>\
\
파랑아, 사랑해..<br>\
언제나 너의 편이 되어줄게<br>\
우리의 마음을 다하여<br>\
너를 응원할게, 영원토록..<br>\
</td></tr></table>",
"<table style='BACKGROUND:#ccffff repeat fixed left top;' cellpadding='7' width=100%><tr valign=middle><td class='lt'>\
<P class='mid2'>\
<b>파랑이에게 보내는 엄마 아빠의 축복</b><br><br>\
\
사랑스러운 우리 아기, 파랑아<br>\
건강하게 우리에게 와줘서 고마워<br>\
온 세상이 너의 탄생을 축하해<br>\
모두가 기뻐하며 축복을 보내<br><br>\
\
작은 손짓, 작은 발길이 감격스러워<br>\
너의 웃음, 너의 울음에 가슴이 벅차<br>\
바다 색, 하늘 빛깔 닮은 파랑아<br>\
너는 우리에게 소중한 기적의 선물이야 <br><br>\
\
파랑이의 꿈, 펼쳐질 세상이 온 거야<br>\
햇살이 눈부시고 뭉게구름이 피어나<br>\
너를 안을 수 있어서 너무 기뻐<br>\
너와 마주할 수 있어, 너무 행복해<br><br>\
\
튼튼하고 건강하게 자랄 수 있도록..<br>\
항상 든든하게 너의 곁에 서 있을게<br>\
언제나 사랑으로 너의 모습 바라볼게<br>\
모든 순간, 모든 날이 행복하기를..<br><br>\
\
파랑이의 미래를 함께 걸을 거야<br>\
희망을 더 크게, 키워줄 거야<br>\
사랑스런 눈빛으로 세상을 보고<br>\
사랑 가득한 마음으로 살 수 있도록..<br><br>\
\
파랑이의 꿈, 우리가 키워줄게<br>\
파랑이의 길, 우리가 밝혀줄게<br>\
엄마 품에서 네 꿈이 피어나고<br>\
아빠 품에선 그 꿈이 자랄 거야<br><br>\
\
파랑아, 사랑해<br>\
이 세상에 와줘서 고마워<br>\
너는 우리 삶에서<br>\
가장 찬란한 봄날의 시작이야<br>\
</td></tr></table>",
"<table style='BACKGROUND:#99ffff url('') repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<b>파랑아, 우리 곁에 올 그날까지</b><br><br>\
\
조용한 밤, 너를 떠올려  <br>\
아직 만나지 못한 너의 미소  <br>\
작은 심장 두근대는 소리  <br>\
우릴 향한 사랑의 시작  <br><br>\
\
파랑아, 너는 우리 꿈이야  <br>\
하루하루 너를 그리며 살아  <br>\
작은 손, 작은 발, 작은 눈망울  <br>\
세상 가장 귀한 선물  <br><br>\
\
파랑아, 사랑한단 말로는 모자라  <br>\
너의 모든 순간 함께할게  <br>\
건강하게 웃으며 와줘  <br>\
우린 널 위해 준비돼 있어  <br><br>\
\
파랑아, 너의 이름 부를 때마다  <br>\
가슴이 벅차 눈물이 흘러  <br>\
너를 품에 안을 그날만 기다려  <br>\
우리의 온 세상이 돼줄게  <br><br>\
\
파랑아, 자랑스러운 우리 아기야  <br>\
네가 오는 길 모든 순간이 기적이야  <br>\
작은 기침, 웃음소리까지도  <br>\
우리의 행복이 돼줄 거야  <br><br>\
\
파랑아, 밤하늘 별들처럼  <br>\
너의 길엔 빛이 가득하길  <br>\
넘어질 땐 우리가 손 내밀게  <br>\
언제나 네 편이 되어줄게  <br><br>\
\
파랑아, 사랑한단 말로는 모자라  <br>\
너의 모든 순간 함께할게  <br>\
건강하게 웃으며 와줘  <br>\
우린 널 위해 준비돼 있어  <br><br>\
\
파랑아, 사랑해  <br>\
언제까지나, 영원토록..<br>\
</td></tr></table>",
"<table style='BACKGROUND:#ccffff repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<b>파랑이의 노래</b><br><br>\
\
하늘빛의 선물로 온 너, 작은 파랑아<br>\
바다의 품 속에서 자란 소중한 꿈 <br>\
우리 마음속에 별처럼 빛나는  <br>\
파랑이, 넌 우리의 희망  <br><br>\
\
파랑아, 넌 세상을 밝혀 줄 빛  <br>\
우리 가슴속에 영원한 기쁨  <br>\
파란 하늘처럼, 깊은 바다처럼  <br>\
파랑아, 넌 사랑으로 자랄 거야  <br><br>\
\
작은 손, 작은 발로 세상을 만나  <br>\
희망의 노래를 부를 아가야  <br>\
엄마와 아빠의 끝없는 사랑 속에 <br>\
파랑아, 넌 영원히 빛나  <br><br>\
\
파란색 바다 속 무한한 꿈을  <br>\
파란색 하늘 속 자유를 담고  <br>\
너와 함께할 모든 날이  <br>\
기적 같은 순간, 특별한 선물  <br><br>\
\
파랑아, 넌 세상을 밝혀 주는 빛  <br>\
우리 가슴속에 영원한 기쁨  <br>\
파란 하늘처럼, 깊은 바다처럼  <br>\
파랑아, 넌 사랑으로 자랄 거야  <br><br>\
\
파랑아, 넌 우리의 소망  <br>\
너와 함께 그리는 하루하루  <br>\
사랑으로 가득 채워진 이 세상에서  <br>\
파랑아, 넌 언제나 빛날 거야 <br>\
</td></tr></table>",
"<table style='BACKGROUND:#33ffff repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<b>파랑이의 꿈</b><br><br>\
\
별이 내려와 속삭인 밤, <br>\
파랑이의 시작  <br><br>\
\
작은 손으로 세상을 안아줄 너  <br>\
하늘의 깊은 빛, 바다의 푸른 물결  <br>\
파랑아, 넌 우리의 가장 큰 꿈  <br><br>\
\
파랑아, 너는 세상을 환히 비춰 줄 별  <br>\
희망 속에 빛나는 우리 사랑의 아이  <br>\
너의 웃음은 태양처럼 따뜻하고  <br>\
파랑아, 넌 소중한 기적이야  <br><br>\
\
엄마의 품에서 자라는 너의 온기  <br>\
아빠의 손길로 느끼는 세상의 너  <br>\
작은 발걸음으로 이뤄낼 모든 꿈  <br>\
파랑아, 넌 끝없는 희망을 품었어  <br><br>\
\
하늘 위를 바라보며 우리는 약속해  <br>\
너의 날개가 커져서 <br>\
세상에 날 수 있길..  <br><br>\
\
바다처럼 넓은 마음으로 세상을 품고  <br>\
파랑아, 넌 사랑으로 물들일 거야  <br><br>\
\
파랑아, <br>\
너는 세상을 환히 비춰 줄 별<br><br>\
\
희망 속에 빛나는 우리 사랑의 아이  <br>\
너의 웃음은 태양처럼 따뜻하고  <br>\
파랑아, 넌 소중한 기적이야<br><br>\
\
파랑아, <br>\
우리의 노래는 너를 향해 울려  <br><br>\
\
너와 함께하는 하루가 가장 빛나  <br>\
사랑으로 가득한 세상 속에서  <br>\
파랑아, 넌 언제나 특별할 거야  <br>\
</td></tr></table>",
"<table style='BACKGROUND:#00ffff repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<b>파랑아, 너는 하늘을 넘어온 작은 기적</b><br><br>\
\
파랑아! 아빠가 오늘 너에게 아주 특별한 이야기를 들려줄게. <br><br>\
\
너는 알까? 엄마와 아빠가 처음 너를 느낀 그날, 하늘이 얼마나 파랗고 아름다웠는지. <br><br>\
\
우리는 그날 너를 '파랑이'라고 불렀단다, 하늘의 색처럼 순수하고 빛나는 이름이야.<br><br><br>\
\
\
파랑아, 너는 하늘에서 내려온 작은 기적이란다. <br><br>\
\
하늘의 바람이 속삭이며 우리에게 선물을 주겠다고 약속했지. <br><br>\
\
그리고 너는 그 약속을 이루기 위해 엄마 품속에서 자라고 있어. <br><br>\
\
아빠는 매일 너를 생각하며 얼마나 자랑스럽고 행복한지 몰라.<br><br><br>\
\
\
파랑아! 네가 자라고 있는 동안, 아빠는 세상의 모든 멋진 이야기를 준비하고 있어. <br><br>\
\
너와 함께 나무 아래서 바람을 느끼고, 별빛 아래서 너의 웃음을 듣고 싶단다. <br><br>\
\
네 작은 손으로 아빠의 손을 꼭 잡아주는 날을 상상하면, 아빠는 그저 눈물이 날 만큼 기쁘고 감사해.<br><br><br>\
\
\
파랑아, 건강하게 자라서 아빠와 만나면 너에게 세상의 놀라운 것들을 보여줄 거야. <br><br>\
\
커다란 나무, 바람의 속삭임, 그리고 사랑이 가득한 가족의 품이 얼마나 따뜻한지. <br><br>\
\
아빠는 매일 너의 첫 번째 웃음과 네 작은 발걸음을 기대하며 사랑으로 가득한 날을 꿈꾼단다.<br><br><br>\
\
\
파랑아! 너는 엄마와 아빠의 마음속에서 빛나는 별처럼, 세상을 밝히는 빛이 될 거란다. <br><br>\
\
그리고 우리는 항상 너를 사랑하고 응원할 거야. <br><br>\
\
우리 파랑아, 건강하게 자라서 아빠와 만나자. <br><br>\
\
아빠가 네게 세상에서 가장 큰 사랑을 보여줄게.<br>\
</td></tr></table>",
"<table style='BACKGROUND:#33ffcc repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<b>파랑이와 세상 탐험</b><br><br>\
\
아빠는 작은 파랑이를 품에 안고 다정하게 속삭였어요. <br><br>\
\
파랑아, 내 소중한 아가. 네가 엄마 품속에 들어오던 그날, 우리 마음엔 별처럼 빛나는 기적이 생겼단다.<br><br><br>\
\
\
파랑이는 아빠의 말을 들으며 작은 눈을 깜박였지요. <br><br>\
\
아빠는 따뜻한 미소를 지으며 이야기를 이어갔습니다. <br><br>\
\
\"파랑아, <br>\
세상은 넓고 신비로운 곳이란다.<br><br>\
\
내가 어릴 때, 커다란 나무 아래에서 바람이 속삭이는 소리를 들으며 꿈을 꾸었어. <br><br>\
\
그리고 나무 꼭대기에서 보면 하늘이 얼마나 파랗고 멋진지 알 수 있었지.\"<br><br><br>\
\
\
파랑이는 작은 손을 움찔하며 아빠의 말에 귀를 기울였어요. <br><br>\
\
아빠는 파랑이를 살짝 들어올려 작은 발을 가리키며 말했지요. <br><br>\
\
\"파랑아, 이 작은 발로 너는 언젠가 나무 아래를 달리고, 햇살을 따라 멀리 걷게 될 거야. <br><br>\
\
처음 걸음을 내딛는 그 순간이 얼마나 특별할지 알까?\"<br><br><br>\
\
\
아빠는 살며시 파랑이의 손을 잡으며 말했어요. <br><br>\
\
\"세상은 때때로 낯설고 어려워 보일 수 있지만, 파랑아, 너의 용기는 모든 것을 이겨낼 거야. <br><br>\
\
그리고 네 발걸음마다 새로운 이야기가 시작될 거란다.\"<br><br><br>\
\
\
파랑이는 미소를 띠며 아빠에게 더 가까이 다가갔습니다. <br><br>\
\
아빠는 마지막으로 속삭였어요. <br><br>\
\
\"파랑아, 네가 어디로 가든, 우리는 항상 너의 곁에 있을 거야. <br><br>\
\
별처럼 빛나는 세상을 너의 사랑으로 가득 채우길 바란다.\"<br><br><br>\
\
\
파랑이는 아빠의 품에서 편안히 잠이 들었고, 그 순간 아빠는 더없이 행복했답니다.<br>\
</td></tr></table>",
"<table style='BACKGROUND:#ccffff repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<b>파랑이와 하늘의 선물</b><br><br>\
\
옛날 옛적에, 하늘이 파랗고 바다가 깊은 곳에 아주 특별한 별이 살았단다<br><br>\
\
그 별은 다른 별들처럼 빛나지 않았지만, 눈부신 사랑과 희망의 힘을 지니고 있었어. <br><br><br>\
\
\
하늘의 바람은 그 별에게 속삭였지, <br><br>\
\
\"세상을 밝혀줄 작은 기적을 만들어 주렴.\"<br><br>\
\
그리고 그 별은 자신을 작은 씨앗으로 변신시켜 하늘에서 아래로 내려왔단다<br><br><br>\
\
\
아주 아름답고 따스한 날, <br>\
그 씨앗은 엄마와 아빠의 마음속 깊이 자리잡았어. <br><br>\
\
\"이 씨앗은 우리의 파랑이가 될 거야\"<br><br>\
\
엄마와 아빠는 기쁨과 설렘으로 속삭였지. <br><br>\
\
파랑이는 엄마 품속에서 자라며, 사랑과 행복의 멜로디로 가득한 세상을 꿈꾸었단다.<br><br><br>\
\
\
시간이 흘러 어느날, 엄마는 파랑이에게 이렇게 말했어. <br><br>\
\
\"파랑아, <br>\
너는 하늘에서 내려온 작은 별이란다. 세상을 환히 비추고 사랑을 전하기 위해 태어난 소중한 기적이지<br><br>\
\
엄마는 다정한 목소리로 이야기를 들려주며 파랑이에게 다가올 날들을 축복했어.<br><br><br>\
\
\
언젠가 너는 첫 번째 발걸음을 내딛을 거야, 엄마는 말했단다. <br><br>\
\
그리고 바람처럼 자유롭게 달리고, 별들처럼 반짝일 거란다.<br><br>\
\
세상은 넓고 놀라운 것들로 가득하지만, 너의 웃음과 사랑이 세상을 더 아름답게 만들 거야.\"<br><br><br>\
\
\
파랑이는 그 이야기를 듣고 마음속에서 따스한 햇살이 퍼지는 듯한 느낌을 받았어. <br><br>\
\
\"엄마, 나는 어떻게 사랑을 전할 수 있을까요?\" 파랑이가 물었지.<br><br>\
\
엄마는 환히 웃으며 대답했어. <br><br>\
\
\"파랑아, 사랑은 아주 간단하단다. <br>\
네가 웃을 때, 네가 따뜻한 마음으로 누군가를 바라볼 때, 그 모두가 사랑을 전하는 방법이란다.\"<br><br><br>\
\
\
그리고 파랑이는 엄마의 품에서 조용히 속삭였어. <br><br>\
\
\"엄마, <br>\
나도 하늘의 별처럼 빛날 거예요.\"<br><br>\
\
엄마는 파랑이를 꼭 안아주며 속삭였단다. <br><br>\
\
\"파랑아, 넌 이미 우리 세상을 환히 비추는 별이란다.\"<br>\
</td></tr></table>",
"<table style='BACKGROUND:#ccffff repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<b>파랑이의 소중한 여정</b><br><br>\
\
아주 오랜 옛날, 하늘과 바다는 특별한 약속을 나누었어요. <br><br>\
\
\"우리의 사랑과 희망을 담은 귀한 선물을 세상에 보내자,\" <br>\
하늘이 속삭였지요<br><br>\
\
바다는 고요한 물결로 대답했어요. <br><br>\
\
\"좋아, 우리의 모든 마음을 담아 특별한 존재를 만들자.\"<br><br><br>\
\
\
그리고 그 순간, 파란빛으로 빛나는 작은 별이 하늘에서 내려왔어요. <br><br>\
\
그 별은 하늘의 사랑과 바다의 품을 담고 있었답니다. <br><br>\
\
그래서 모두 '파랑'이라고 불렀어요. <br><br>\
\
\"파랑아, 넌 우리의 희망과 사랑을 품고 있어. 넌 세상에 무한한 기쁨과 따뜻함을 줄 존재란다,\" <br>\
하늘과 바다가 말했어요.<br><br><br>\
\
\
파랑이는 점점 세상으로 내려가 엄마와 아빠를 만나게 되었어요. <br><br>\
\
엄마는 파랑이를 품에 안으며 이렇게 속삭였답니다. <br><br>\
\
\"파랑아, 넌 우리에게 온 가장 소중한 선물이야. <br>\
너의 존재가 우리의 하루를 밝히고, <br>\
우리의 마음을 가득 채워준단다.\"<br><br><br>\
\
\
아빠는 작은 파랑이의 손을 잡으며 말했어요. <br><br>\
\
\"우리는 너를 기다리는 동안 얼마나 설레고 행복했는지 몰라. <br>\
너와 함께할 모든 날들이 더없이 특별하고 소중할 거야.\"<br><br><br>\
\
\
파랑이의 눈에는 하늘의 빛과 바다의 깊은 물결이 담겨 있었어요. <br><br>\
\
파랑이는 언제나 사랑받으며, 세상에 기쁨과 희망을 전해줄 존재가 될 거예요. <br><br>\
\
그리고 엄마와 아빠는 파랑이가 커가는 동안, 사랑과 기대, 그리고 무한한 희망을 함께 나누며 하루 하루를 보내겠지요.<br>\
</td></tr></table>",
"<table style='BACKGROUND:#66ffcc repeat fixed left top;' cellpadding='10' width=100%><tr valign=middle><td class='lt'>\
<P class='mid'>\
<b>하늘과 바다의 선물</b><br><br>\
\
옛날 아주 먼 옛날, 하늘은 파란 옷을 입고, 바다는 푸른 물결로 춤을 추며 서로를 바라보는 친구였어요. <br><br>\
\
하늘은 맑은 빛을, 바다는 촉촉한 바람을 서로 나누며 세상을 아름답게 만들었지요.<br><br><br>\
\
\
어느 날, 하늘과 바다는 사랑과 희망을 가득 담은 특별한 선물을 세상에 주기로 했어요. <br><br>\
\
그래서 둘은 힘을 모아 가장 반짝이는 별빛과 가장 따뜻한 물결을 모아 작은 씨앗을 만들었답니다. <br><br>\
\
그 씨앗은 세상을 따뜻하게 품어줄 아기였어요.<br><br><br>\
\
\
\"아가야, <br>\
넌 하늘의 넓은 사랑과 바다의 깊은 꿈을 간직한 특별한 선물이야,\"<br><br>\
\
하늘과 바다가 말했어요. <br><br>\
\
\"너의 웃음은 태양처럼 세상을 환히 비출 거야. 너의 손길은 꽃처럼 사람들에게 기쁨을 줄 거란다.\"<br><br><br>\
\
\
그리고 그 아가는 어느 멋진 날, 엄마와 아빠의 품에 안기게 되었어요. <br><br>\
\
엄마는 사랑스런 마음으로 아가를 품으며 속삭였어요. <br><br>\
\
\"너는 우리에게 온 가장 소중한 선물이야. <br><br>\
\
네가 오기 전부터 우리는 너를 기다렸고, 지금 너를 만나게 되어 정말 행복해.\"<br><br><br>\
\
\
아빠는 아가의 작은 손을 잡으며 말했어요. <br><br>\
\
\"하늘과 바다가 준 선물을 우리가 지켜줄게. <br><br>\
\
너는 언제나 사랑받고, 소중히 여겨질 거야.\"<br><br><br>\
\
\
이렇게 하늘과 바다가 아가에게 전한 사랑은 엄마와 아빠의 마음속에 더욱 크게 자라났답니다. <br><br>\
\
그리고 그 사랑은 아가가 커가는 동안에도 언제나 함께할 거예요.<br>\
</td></tr></table>"
]
