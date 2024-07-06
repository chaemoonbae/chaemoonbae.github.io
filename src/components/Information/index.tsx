import ContactItem from "../ContactItem";
import Introduce from "./Introduce";

import { DataProps } from "@/types";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="leading-[1.15] pb-20">
          {/* 포지션에 맞게 문구를 수정해주세요. 혹은, 본인이 원하는 대로 문구를 바꿔주세요. */}
          <span className="font-semibold text-PRIMARY">{information.name}</span> 포트폴리오
          <br /> 게시판과 이 포토폴리오의 css는 월요일 전에 꼭 수정하겠습니다..
        </h1>
        {/* <div className="flex gap-1">
          {information.contact.map((contact) => (
            <ContactItem
              key={contact.id}
              className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
              {...contact}
            >
              {contact.name}
            </ContactItem>
          ))}
        </div> */}
      </div>
      <Introduce markdown={information.markdown} />
    </div>
  );
};

export default Information;
