# React Framework (Next.js 적용)

React를 활용한 프론트엔드 프레임워크 기본 구성

## 실행

### `npm run dev`

개발모드로 앱 실행\
브라우저에서 [http://localhost:3000](http://localhost:3000)로 확인\
포트 지정 시 npm run dev -- -p 80

### `npm build`

앱 빌드

### `npm start`

운영모드로 앱 실행
실행 전 npm run build 필요
포트 지정 시 npm start -- -p 80

## 기능 소개

### 프로젝트 설정

#### .prettierrc

VisualStudio Code의 prettier 플러그인에 대한 설정\
코딩 스타일에 관한 필수사항을 지정\
코딩 시 습관적으로 [Alt + Shift + F] 버튼을 누를 것을 권장함

#### jsconfig.json

import시 절대경로로 참조할 위치를 설정

#### next.config.json

	프록시
		rewrites에 설정
	리다이렉트
		redirects에 설정
	ie11 미호환 모듈에 대한 트랜스파일링 설정
		next-transpile-modules에 대상 추가

### 플러그인

#### VisualStudio Code

Prettier - Code formatter

#### Chrome

React Developer Tools\
Redux DevTools

### 디렉토리 구조

파일 종류에 따라 계층적으로 구성\
한 종류의 여러 개의 파일이 들어갈 경우 복수형으로 표시\
그 안에서 종류만 나눠질 경우 단수형으로 표시\
애매한 개념이긴 하지만 되도록 지키면 좋겠음

#### apis
서버와 통신하기 위한 api

#### assets

소스코드에서 참조하는 정적 리소스 파일

#### configs

어플리케이션 설정

#### constants

상수

#### locales

다국어 처리를 위한 단어 설정

#### stores

Redux 설정

#### utils

유틸

#### views

React 컴포넌트 파일
컴포넌트의 성격에 따라 별도의 디렉토리로 분류\

    commons
        공통으로 사용할 컴포넌트
    templates
        마크업, 스타일에 관한 컴포넌트
    containers
        상태, 로직에 관한 컴포넌트

### 파일 네이밍 규칙

#### 소문자 사용

자동 생성되는 파일은 예외\
컴포넌트 파일일 경우에는 React의 규칙에 따라 Upper Camel Case 사용

#### 단어 구분

단어를 구분할 때 단어 사이에 [-] 사용\
예) http-util.js

#### js와 jsx

컴포넌트 파일의 형식은 정식으로는 jsx이지만 js 사용\
최근에는 js 확장자를 사용하는 추세이고 CRA(Create React App)에서도 기본값으로 js로 생성함\
VisualStudio Code에서도 오류로 표시하지 않고 자동완성도 지원함

### import 다음에 있는 console.debug의 의미

해당 리소스 파일 로딩 여부 확인\
디버깅 시 해당 파일의 위치에 대한 링크

### ie11 호환성

babel regenerator-runtime과 react-app-polyfill 사용\
프로젝트 루트 하위의 index.js에 설정함

### 폰트

noto-sans-kr 기본\
MaterialUI의 기본 폰트인 roboto도 설정

### 다국어 처리

react-i18next로 처리\
i18next-browser-languagedetector로 브라우저 언어 자동 설정

### 라우터 설정

configs/router-config.js에 설정\
컴포넌트로도 설정 가능하지만 전체 페이지 계층구조를 한번에 알 수 있도록 하기 위해 별도의 js파일에 따로 설정\
js 파일 추출은 react-router-config를 사용하여 처리

### Redux 적용 대상 및 규칙

두 개 이상의 컴포넌트에서 항상 같은 값을 표시해야 하는 경우에만 사용\
하나의 컴포넌트에서만 사용될 경우 useState 사용\
두 개 이상의 컴포넌트에서 사용되지만 항상 동시에 표시할 필요가 없거나 컴포넌트가 아닌 js파일일 경우에는 전역변수 또는 session storage 또는 local storage 사용

### 공통 컴포넌트

#### async

비동기로 화면을 표시할 때 사용\
상태에 따라 로딩 중, 에러메시지 표시

#### dialog

많이 사용할 것 같은 형식에 따라 확인창, 알림창, 모달창을 표시하는 컴포넌트 생성

#### layout

헤더, 사이드바, 본문 영역

#### progress

화면 중앙에 로딩 중 표시

#### snackbar

snackbar의 기본 형태 설정\
렌더 중 snackbar를 표시해야 할 경우에 대비해 snackbar 표시 전용 컴포넌트 생성

### 그리드 적용

#### AgGrid

성능 좋고 안정적인 그리드\
서버 사이드 페이징을 위해서는 Enterprise 라이센스 필요

### 스타일 적용 방법

#### 전역

assets/styles/index.css에 설정

#### 개별 컴포넌트

    css module
	    각 컴포넌트와 같은 디렉토리에 [파일명].module.css 형식으로 스타일 설정
	    자동으로 클래스명에 고유값이 생성되어 해당 컴포넌트에만 적용됨
	styled components
	    스타일 전용 컴포넌트 생성
	    css문법을 사용하나 js파일 내에 string 형식으로 설정해야 함
	material ui의 makeStyles
	    기존 테마의 수정 가능
	    css 문법이 아닌 script로 설정
