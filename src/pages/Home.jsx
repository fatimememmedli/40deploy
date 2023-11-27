import React from "react";
import style from "../assets/style/Home.module.css";
function Home() {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.leftText}>
          Social media shared today, tomorrow or by location
        </div>
        <div className={style.image}></div>
      </div>
      <div className={style.right}>
        <div className={style.rightLogoText}>
          <div className={style.rightLogo}></div>
          <div className="logostext">Capzul</div>
        </div>
        <div className={style.createAccText}>
          <p className={style.createAcc}>Create account</p>
          <p className={style.forB}>For business, band or celebrity.</p>
        </div>
        <div className={style.inputs}>
          <div className={style.leftInputs}>
            <div className="input-label">
              <div className={style.inputText}>First name</div>
              <div>
                <input className={style.input} type="text" />
              </div>
            </div>
            <div className="input-label">
              <div className={style.inputText}>First name</div>
              <div className="input">
                <input className={style.input} type="text" />
              </div>
            </div>
            <div className="input-label">
              <div className={style.inputText}>First name</div>
              <div className="input">
                <input className={style.input} type="text" />
              </div>
            </div>
          </div>
          <div className={style.leftInputs}>
            <div className="input-label">
              <div className={style.inputText}>First name</div>
              <div className="input">
                <input className={style.input} type="text" />
              </div>
            </div>
            <div className="input-label">
              <div className={style.inputText}>First name</div>
              <div className="input">
                <input className={style.input} type="text" />
              </div>
            </div>
            <div className="input-label">
              <div className={style.inputText}>First name</div>
              <div className="input">
                <input className={style.input} type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className={style.checks}>
          <div className={style.checkLink}>
            <div className={style.checkInput}>
              <input className={style.checkbox} type="checkbox" />
              <span className={style.checkSpan}>Remember me</span>
            </div>
            <a className={style.a} href="">
              Forgot Password
            </a>
          </div>
          <div className={style.checkInput}>
            <input className={style.checkbox} type="checkbox" />
            <span className={style.checkSpan}>
              I agree to all the Terms and Privacy policy
            </span>
          </div>
        </div>
        <div className={style.buttons}>
          <button className={style.button1}>Create Account</button>
          <button className={style.button2}>
            <span className={style.buttonLogo}></span>
            <span>Sign-in with google</span>
          </button>
        </div>
        <div className={style.login}>
          Don’t have an account? <a href="">Log In</a>
        </div>
        <div className={style.footerImage}></div>
      </div>
    </div>
  );
}

export default Home;
