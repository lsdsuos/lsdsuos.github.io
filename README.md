# lsdsuos.github.io
The Lab for Spatial Data Science at UOS

## **1. 개요**

- **프로젝트 명:** 서울시립대학교 공간정보공학과 공간데이터과학 연구실 반응형 홈페이지 제작
- **개발 기간:** 2025. 02. 03 ~ (진행 중)
- **인력 구성:** 1명
- **서비스 링크:** [lsdsuos.github.io](https://lsdsuos.github.io/) (추후 학교 도메인 연결 필요)
- **Github 링크:** [GitHub Repository](https://github.com/lsdsuos/lsdsuos.github.io)

## **2. 시스템 아키텍처**
- https://github.com/user-attachments/assets/2321df2f-2ecc-4d48-ae93-45f12b5dd7ad
- Google Sheets를 직접 호출하지 않고, **Cloudflare Workers 기반의 API Proxy**를 통해 데이터를 호출함.
- Cloudflare에서 **환경 변수**로 Google Sheets ID 및 API Key를 관리.
- Cloudflare가 Google Sheets API를 호출하여 데이터를 변환 후 반환.

## **3. 기술 스택**
### **Frontend**
- HTML5
- Pug (템플릿 엔진)
- CSS3
- JavaScript (ES6)

### **Backend / Database**
- Google Sheets (데이터 저장소)
- Cloudflare Workers (API 프록시)
- Google Drive (이미지 저장소)

### **Deployment**
- GitHub Pages (정적 사이트 호스팅)

## **4. 주요 기능**
- 연구실 소개 및 연구 프로젝트 정보 제공
- 연구 성과 및 출판 논문 관리
- **Cloudflare Workers 기반 API 프록시**를 통해 Google Sheets 데이터를 호출
- 반응형 웹 디자인 적용 (PC, 태블릿, 모바일 지원)

## **5. 설치 및 실행 방법**
### **1) 프로젝트 클론**
```bash
git clone https://github.com/lsdsuos/lsdsuos.github.io.git
cd lsdsuos.github.io
```

### **2) 패키지 설치**
```bash
npm install
```

### **3) 개발 서버 실행**
```bash
npm run dev
```
브라우저에서 접속 후 확인.

### **4) 배포 (Github Pages)**
```bash
npm run deploy
```
build시 **dist** 폴더가 생기며, 이를 **gh-pages** 브런치에 배포

## **6. API 연동 (Cloudflare Workers Proxy)**
- Google Sheets 데이터를 직접 호출하는 대신, **Cloudflare Workers**에서 API Proxy 역할을 수행.
- Cloudflare에서는 환경 변수로 **SPREADSHEET_ID**와 **API_KEY**를 등록하여 보안 유지.
- 클라이언트는 **Cloudflare API**를 호출하여 데이터를 가져옴.

### **📌 데이터 호출 예시**
```javascript
fetch('https://api.example.com/get-data?sheet=Research')
  .then(response => response.json())
  .then(data => console.log(data));
```

> ⚠️ API Key 및 Sheet ID는 `.env` 파일이 아닌 **Cloudflare 환경 변수**에서 관리하여 보안 유지.