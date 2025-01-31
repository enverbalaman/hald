import SectionHeading from "../SectionHeading"


const Faq = ({img , data , ClassSpanTitle}) => {

    return (

      <div className={`${ClassSpanTitle} addMLInSmall`} id="faq">
        <div className="container">
          <SectionHeading
            ClassSpanTitle="gradient-t green"
            titleUp="Token FAQ"
            titleDown="Frequently Questions"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
          />
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-sm-12">
              <img draggable="false" src={img} alt="" className="center-block img-responsive" />
            </div>
            <div className="col-12 col-lg-6 col-md-12">
              <div className="dream-faq-area mt-s ">
                <dl id="basicAccordion" style={{marginBottom: 0}}>
                  {data && data.map((item , key) => (
                    <>
                      <dt className="wave" data-bs-toggle="collapse" data-bs-target={`#${item.ID}`} aria-expanded="false">{item.title}</dt>
                      <dd data-aos="fade-up" id={item.ID} aria-labelledby="headingOne" data-bs-parent="#basicAccordion" className="accordion-collapse collapse">
                          <p className="accordion-body">{item.text}</p>
                      </dd>
                    </>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}

export default Faq