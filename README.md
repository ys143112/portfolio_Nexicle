# 정연수 · Unity 클라이언트 개발 포트폴리오

슬라임 목장에서 담당한 C# 수치 표시, 도감·안내 개선, GIF 프레임 변환 작업을 정리한 정적 웹사이트입니다.

- 배포: https://ys143112.github.io/portfolio_Nexicle/
- 원 프로젝트: https://github.com/JugleGame/Slime
- 플레이: https://juglegame.github.io/Slime/

## 실행
저장소 루트에서 `python -m http.server 8765`를 실행한 뒤 로컬 주소를 엽니다. 별도 빌드나 패키지 설치는 필요하지 않습니다.

## 배포
GitHub Pages의 Source를 `GitHub Actions`로 설정합니다. `main`에 변경 사항을 반영하면 공식 Pages 워크플로로 배포합니다.

## 구성
- `index.html`: 프로젝트 내용과 근거 링크
- `styles.css`: 반응형 배치와 출력 스타일
- `script.js`: 이미지 확대, 코드 보기, GIF 재생/정지
- `assets/`: 실제 게임 캡처, GIF·PNG 결과물, PDF

실제 게임 캡처는 원본을 그대로 보관하고 CSS에서 필요한 영역을 보여 줍니다.
스크린샷과 게임 에셋을 사이트 제작자의 독립적인 아트 작업으로 소개하지 않습니다.


