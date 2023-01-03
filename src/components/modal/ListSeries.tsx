import { CloseOutlined } from "@ant-design/icons";
import styled from "./MenuModal.module.css";
// import useModalFixed from "../../hooks/useModalFixed";
import { useEffect, useState } from "react";
import { MenuClickProps, MenuListModalProps } from "../../types";
import { series, interest, 테스트 } from "./menuListData";

const ListSeries = ({ openListExpand }: MenuListModalProps) => {
  const [seriesModalVisible, setSeriesmodalVisible] = useState<boolean>(true);
  const seriesVisible = () => {
    setSeriesmodalVisible(!seriesModalVisible);
  };

  const newSeriesList1 = series.map((series) => {
    return series.id === 1 ? <li key={series.title}>{series.title}</li> : null;
    // return <>({series.id === 1 ? <li key={index}>{series.title}</li> : null})</>
    // 위와 같이 <> </> fragment를 넣어서 할 시 고유 key값 오류가 발생함, 형제 요소 전체에서 고유해야 하기 때문에 fragment 없애기
  });

  const newSeriesList2 = series.map((series) => {
    return series.id === 2 ? <li key={series.title}>{series.title}</li> : null;
  });

  return (
    <>
      {seriesModalVisible ? (
        <section className={`${styled.menu_list_expand_box}`}>
          <CloseOutlined
            className={styled.close_expand}
            onClick={() => {
              seriesVisible(); // 새로 생성한 boolean 값
              openListExpand();
            }}
          />
          <ul className={styled.menu_list_expand}>
            <div>{newSeriesList1}</div>
            <div>{newSeriesList2}</div>
          </ul>
        </section>
      ) : null}
    </>
  );
};

const ListInterest = ({ openListExpand }: MenuListModalProps) => {
  const [seriesModalVisible, setSeriesmodalVisible] = useState<boolean>(true);
  const seriesVisible = () => {
    setSeriesmodalVisible(!seriesModalVisible);
  };

  const newInterestList1 = interest.map((interest, index) => {
    return interest.id === 1 ? <li key={index}>{interest.title}</li> : null;
    // <>({interest.id === 1 ? <li key={index}>{interest.title}</li> : null})</>
    // 위와 같이 <> </> fragment를 넣어서 할 시 고유 key값 오류가 발생함, 형제 요소 전체에서 고유해야 하기 때문에 fragment 없애기
  });

  const newInterestList2 = interest.map((interest, index) => {
    return interest.id === 2 ? <li key={index}>{interest.title}</li> : null;
  });

  return (
    <>
      {seriesModalVisible ? (
        <section className={`${styled.menu_list_expand_box}`}>
          <CloseOutlined
            className={styled.close_expand}
            onClick={() => {
              seriesVisible(); // 새로 생성한 boolean 값
              openListExpand(); // 기존 boolean 값
            }}
          />
          <ul className={styled.menu_list_expand}>
            <div>{newInterestList1}</div>
            <div>{newInterestList2}</div>
          </ul>
        </section>
      ) : null}
    </>
  );
};

const TestMan = ({ openListExpand }: MenuListModalProps) => {
  const [seriesModalVisible, setSeriesmodalVisible] = useState<boolean>(true);
  const seriesVisible = () => {
    setSeriesmodalVisible(!seriesModalVisible);
  };

  const 뉴테스트1 = 테스트.map((테스트, index) => {
    return 테스트.id === 1 ? <li key={index}>{테스트.title}</li> : null;
    // <>({interest.id === 1 ? <li key={index}>{interest.title}</li> : null})</>
    // 위와 같이 <> </> fragment를 넣어서 할 시 고유 key값 오류가 발생함, 형제 요소 전체에서 고유해야 하기 때문에 fragment 없애기
  });

  const 뉴테스트2 = 테스트.map((테스트, index) => {
    return 테스트.id === 2 ? <li key={index}>{테스트.title}</li> : null;
  });

  return (
    <>
      {seriesModalVisible ? (
        <section className={`${styled.menu_list_expand_box}`}>
          <CloseOutlined
            className={styled.close_expand}
            onClick={() => {
              seriesVisible(); // 새로 생성한 boolean 값
              openListExpand(); // 기존 boolean 값
            }}
          />
          <ul className={styled.menu_list_expand}>
            <div>{뉴테스트1}</div>
            <div>{뉴테스트2}</div>
          </ul>
        </section>
      ) : null}
    </>
  );
};

export const TabContent = ({ clickTab, openListExpand }: MenuClickProps) => {
  if (clickTab === 0) {
    return <ListSeries openListExpand={openListExpand} />;
  } else if (clickTab === 1) {
    return <ListInterest openListExpand={openListExpand} />;
  } else {
    return null;
  }
};
