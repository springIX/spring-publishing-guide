import React from "react";
import styles from "./GuidePage.module.scss";

const GuidePage = () => {
  return (
    <>
      <div className={`${styles.guide_container} spring_container`}>
        <h2 className="title">개발 환경 기본 가이드</h2>
        <section className={styles.environment_inner}>
          <h3 className="guide-title">프로젝트 환경</h3>
          <table>
            <tbody>
              <tr>
                <th>문서 및 버전</th>
                <td>HTML5, PHP, SCSS, JavaScript</td>
              </tr>
              <tr>
                <th>인코딩</th>
                <td>UTF-8</td>
              </tr>
              <tr>
                <th>웹 유형</th>
                <td>PC, Mobile, Responsive</td>
              </tr>
              <tr>
                <th>크로스 브라우징</th>
                <td>chrome, firefox, safari</td>
              </tr>
              <tr>
                <th>해상도 기준 / 디자인 너비</th>
                <td>pc : 1920px / 1920px | mo : 750 / 375</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className={styles.folder_inner}>
          <h3 className="guide-title">파일 / 폴더 규칙</h3>
          <table>
            <thead>
              <tr className={styles.table_header}>
                <th>분류 폴더</th>
                <th>서브 폴더</th>
                <th>파일 이름</th>
                <th>파일 설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>font</td>
                <td>font</td>
                <td>font.css, _font.scss</td>
                <td>웹폰트 - 가져오기</td>
              </tr>
              <tr>
                <td rowspan="2">CSS</td>
                <td rowspan="2">styles</td>
                <td>style.css</td>
                <td>스타일 - 공통 영역</td>
              </tr>
              <tr>
                <td>페이지네임.css</td>
                <td>스타일 - 개별 영역</td>
              </tr>
              <tr>
                <td rowspan="6">SCSS</td>
                <td rowspan="5">partials</td>
                <td>_variable.scss</td>
                <td>스타일 - 변수</td>
              </tr>
              <tr>
                <td>_mixin.scss</td>
                <td>스타일 - 믹스인</td>
              </tr>
              <tr>
                <td>_reset.scss</td>
                <td>스타일 - 리셋</td>
              </tr>
              <tr>
                <td>_common.scss</td>
                <td>스타일 - 공통 영역</td>
              </tr>
              <tr>
                <td>_layout.scss</td>
                <td>스타일 - 레이아웃</td>
              </tr>
              <tr>
                <td>components</td>
                <td>페이지네임.scss</td>
                <td>스타일 - 개별 영역</td>
              </tr>
              <tr>
                <td rowspan="2">SCSS</td>
                <td></td>
                <td>common.js</td>
                <td>스크립트 - 공통 영역</td>
              </tr>
              <tr>
                <td>components</td>
                <td>페이지네임.js</td>
                <td>스크립트 - 개별 영역</td>
              </tr>
              <tr>
                <td rowspan="2">images</td>
                <td>common</td>
                <td>svg, png, jpg</td>
                <td>공통 이미지</td>
              </tr>
              <tr>
                <td>페이지명</td>
                <td>svg, png, jpg</td>
                <td>개별 이미지</td>
              </tr>
              <tr>
                <td rowspan="2">video</td>
                <td>common</td>
                <td>mp4</td>
                <td>공통 비디오</td>
              </tr>
              <tr>
                <td>페이지명</td>
                <td>mp4</td>
                <td>개별 비디오</td>
              </tr>
              <tr>
                <td rowspan="3">레이아웃</td>
                <td rowspan="3">layout/include</td>
                <td>_aside.html</td>
                <td>레이아웃 - 사이드</td>
              </tr>
              <tr>
                <td>_header.html</td>
                <td>레이아웃 - 헤더</td>
              </tr>
              <tr>
                <td>_footer.html</td>
                <td>레이아웃 - 푸터</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className={styles.page_layout_inner}>
          <h3 className="guide-title">Page Layout</h3>
          
        </section>
      </div>
    </>
  );
};

export default GuidePage;
