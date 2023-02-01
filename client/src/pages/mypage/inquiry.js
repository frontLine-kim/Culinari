import Mypagehead from "../../components/MypageHead";
import styled from "styled-components";

const Layout = styled.div`
    height:250px;
    display:flex;
    flex-direction: column;

    .my_question{
        border-bottom: 1px solid #D7D7D7;
        flex:1;
        .my_question_header{
            border-top: 1px solid #515151;
            border-bottom: 1px solid #515151;
            padding: 10px 5px;
            display:flex;

            & > div{
                flex-basis:120px;
                text-align:center;
            }

            .q_header_title{
                text-align:left;
                flex:1;
            }
        }

        .my_question_list{
            justify-content:space-around;
            border-bottom: 1px solid #9B9898;
            padding: 8px 5px;
            display:flex;
            & > div{
                flex-basis:120px;
                text-align:center;
            }

            .q_list_title{
                text-align:left;
                flex:1;
            }

            .q_list_state{
                color: #C26D53;
            }

        }
        
    }



    .my_item_question{
        flex:1;

        h5{
            padding: 20px 0 15px 0;
            font-size: 16px;
        }

        .my_item_question_header{
            border-top: 1px solid #515151;
            border-bottom: 1px solid #515151;
            padding: 10px 5px 10px 10px;
            display:flex;

            & > div{
                flex-basis:120px;
                text-align:center;
            }

            .i_q_header_title{
                flex:1;
                text-align:left;
            }
        }

        .my_item_question_list{
            border-bottom: 1px solid #515151;
            padding: 10px 5px 10px 10px;
            display:flex;
            align-items:center;

            & > div{
                flex-basis:120px;
                text-align:center;
            }

            .i_q_list_title{
                flex:1;
                text-align:left;

                & > span:first-child{
                    padding-bottom: 2px;
                    color: #767676;
                }

            }
            .i_q_list_state{
                color: #C26D53;
            }
        }

    }
`

function Inquiry(){
    return(
        <Mypagehead title={"내 1:1 문의"} side_title={<div><span>{"고객센터 "}</span><span style={{color: "#FF6767"}}>{">"}</span></div>}>
           <Layout>
           <div className="my_question">
                 <div className="my_question_header">
                    <div><span>{"분류"}</span></div>
                    <div className="q_header_title"><span>{"제목"}</span></div>
                    <div><span>{"작성자"}</span></div>
                    <div><span>{"시간"}</span></div>
                    <div><span>{"답변 상태"}</span></div>
                 </div>
                 <ul>
                    <li className="my_question_list">
                        <div><span>{"주문/결제"}</span></div>
                        <div className="q_list_title"><span>{"내가 작성한 문의"}</span></div>
                        <div><span>{"나"}</span></div>
                        <div><span>{"23.01.01"}</span></div>
                        <div className="q_list_state"><span>{"확인중"}</span></div>
                    </li>
                 </ul>
            </div>

            <div className="my_item_question">
                <h5>{"내 상품 문의"}</h5>
                <div className="my_item_question_header">
                    <div className="i_q_header_title"><span>{"상품/제목"}</span></div>
                    <div><span>{"작성자"}</span></div>
                    <div><span>{"시간"}</span></div>
                    <div><span>{"답변 상태"}</span></div>
                    <div></div>
                 </div>
                 <ul>
                    <li className="my_item_question_list">
                        <div className="i_q_list_title"><span>{"상품 이름입니다"}</span><br/><span>{"유통기한 언제까지인가요?"}</span></div>
                        <div><span>{"나"}</span></div>
                        <div><span>{"23.01.01"}</span></div>
                        <div className="i_q_list_state"><span>{"확인중"}</span></div>
                        <div><span>{"상품상세 "}</span><span style={{color: "#FF6767"}}>{">"}</span></div>
                    </li>
                 </ul>
            </div>
           </Layout>
        </Mypagehead>
    );
}


export default Inquiry;