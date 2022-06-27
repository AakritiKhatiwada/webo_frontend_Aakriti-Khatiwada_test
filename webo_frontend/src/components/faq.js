import React, {useState} from 'react'
import './faq.css'
const Faq = () => {
    const[show, setShow] = useState(false);
    const toggle = index => {
        if(show === index){
            return setShow(null);
        }
        setShow(index);
    }
 
    const FAQ = [
        {
            id: 1,
            question: "The expense windows adapted sir. Wrong Wide drawn",
            answer: "Offending belonging promotion an be oh consulted ourselves it. Blessing welcomed ladyship shw met hurmoured sir breeding her."
        },
        {
            id: 2,
            question: "Six curiosity day assurance bed necessary?",
            answer: "Offending belonging promotion an be oh consulted ourselves it. Blessing welcomed ladyship shw met hurmoured sir breeding her."
        },
        {
            id: 3,
            question: "Produce say the ten moments parties?",
            answer: "Offending belonging promotion an be oh consulted ourselves it. Blessing welcomed ladyship shw met hurmoured sir breeding her."
        },
        {
            id: 4,
            question: "Simple innate summer fat appear basket his desire joy?",
            answer: "Offending belonging promotion an be oh consulted ourselves it. Blessing welcomed ladyship shw met hurmoured sir breeding her."
        },
        {
            id: 5,
            question: "Outward clothes promise at gravity do excited?",
            answer: "Offending belonging promotion an be oh consulted ourselves it. Blessing welcomed ladyship shw met hurmoured sir breeding her."
        }
    ]
    return (
        <section className="faqParent">
            <div className="faqHeading">
                <p>Frequently  asked questions</p>
            </div>
            <div className="subFaq">
                <div>
                    {
                        FAQ.map((element, index) => (
                            <div className="questionParent" key={element.id} onClick={()=> {toggle(index)}}>
                                <div className="question">
                                    <div className='question-faq'>
                                        <p>{element.question}</p>
                                    </div>
                                    <div className="plusIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className = {show === index ? 'answer show' : 'answer'}>{element.answer}</div>
                            </div>
                        ))
                    }
                </div>
                <div className="moreQuestion">
                    <div className='Question-wrap'>
                        <div>
                            <div className='message'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12 .0497-19.12-9.7v-83.98h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384C483.2 0 511.1 28.75 511.1 63.1z"/>
                                </svg>
                            </div>
                            <div>
                                <div className='questionHeading'>Do you have more questions?</div>
                                <div className='questionSub'>End-to-end payments and financial management in a single solution. Meet the right platorm to help realize.</div>
                            </div>
                        </div>
                        <div>
                            <button className="email">Shoot a Direct Mail</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default Faq