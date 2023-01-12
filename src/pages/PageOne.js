import React from 'react'
import { useRef } from 'react';
import  '../mystyle.css'
import Mynav from './Mynav';
import { Link } from 'react-router-dom'

function PageOne() {
  const sectionRef = useRef(null);
  return (
  
    <div>
        <Mynav />
    <div className="containerbox">
  <div className="herolocal">
    <div className="casa">
      <div className="insidethedragon">
        <div className="dragon1">
          Equal Opportunity Through <span>Education
            <span className="abso">
              <svg width={321} height={38} viewBox="0 0 321 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 32.2334C51.4312 16.6204 184.235 -8.37117 320 16.5671" stroke="#E56346" strokeWidth="10.2374" />
              </svg>
            </span>
          </span>
        </div>
        <div className="dragon2">
          <br />
          Our organization is dedicated to empowering women through education by providing access to
          scholarships, mentorship programs, and a wide range of online courses and educational materials.
        </div>
        <div className="dragon3">
          <Link to="/signin">
            <div className="user-name signup"> Get Started</div>
          </Link>
         
          <Link to="/signup" style={{color: 'white'}}>
            <div className="user-name login">Become a partner</div>
          </Link>
        </div>
        <div className="dragon4">
          <style dangerouslySetInnerHTML={{__html: "\n\n                        " }} />
          <div className="dragonflex">
            <div className="dragonaccess">
              <div className="dragonicon">
                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20.0004C4.477 20.0004 0 15.5234 0 10.0004C0 4.47743 4.477 0.000427246 10 0.000427246C15.523 0.000427246 20 4.47743 20 10.0004C20 15.5234 15.523 20.0004 10 20.0004ZM7.71 17.6674C6.72341 15.5747 6.15187 13.3106 6.027 11.0004H2.062C2.25659 12.5393 2.89392 13.9886 3.89657 15.1721C4.89922 16.3557 6.22401 17.2225 7.71 17.6674ZM8.03 11.0004C8.181 13.4394 8.878 15.7304 10 17.7524C11.1523 15.677 11.8254 13.3699 11.97 11.0004H8.03ZM17.938 11.0004H13.973C13.8481 13.3106 13.2766 15.5747 12.29 17.6674C13.776 17.2225 15.1008 16.3557 16.1034 15.1721C17.1061 13.9886 17.7434 12.5393 17.938 11.0004ZM2.062 9.00043H6.027C6.15187 6.69021 6.72341 4.42611 7.71 2.33343C6.22401 2.77831 4.89922 3.64518 3.89657 4.82872C2.89392 6.01226 2.25659 7.46153 2.062 9.00043ZM8.031 9.00043H11.969C11.8248 6.63103 11.152 4.32396 10 2.24843C8.84768 4.32388 8.17456 6.63095 8.03 9.00043H8.031ZM12.29 2.33343C13.2766 4.42611 13.8481 6.69021 13.973 9.00043H17.938C17.7434 7.46153 17.1061 6.01226 16.1034 4.82872C15.1008 3.64518 13.776 2.77831 12.29 2.33343Z" fill="white" />
                </svg>
              </div>
              <div className="dragontext">
                <span>Access to financial resources:</span>
                <div className="xs">
                  Providing scholarships and other financial assistance can help remove financial
                  barriers
                </div>
              </div>
            </div>
            <div className="dragonmentor">
              <div className="dragonicon">
                <svg width={21} height={22} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.6821 15.9477C20.6817 17.3153 20.2142 18.6417 19.3572 19.7074C18.5001 20.773 17.3048 21.514 15.9691 21.8077L15.3311 19.8937C15.9154 19.7975 16.471 19.5729 16.9579 19.236C17.4449 18.8992 17.851 18.4585 18.1471 17.9457H15.6821C15.1517 17.9457 14.643 17.735 14.2679 17.36C13.8928 16.9849 13.6821 16.4762 13.6821 15.9457V11.9457C13.6821 11.4153 13.8928 10.9066 14.2679 10.5315C14.643 10.1565 15.1517 9.94574 15.6821 9.94574H18.6201C18.3761 8.01264 17.435 6.23501 15.9736 4.94642C14.5121 3.65782 12.6306 2.94682 10.6821 2.94682C8.73368 2.94682 6.8522 3.65782 5.3907 4.94642C3.92921 6.23501 2.98816 8.01264 2.74413 9.94574H5.68213C6.21256 9.94574 6.72127 10.1565 7.09634 10.5315C7.47142 10.9066 7.68213 11.4153 7.68213 11.9457V15.9457C7.68213 16.4762 7.47142 16.9849 7.09634 17.36C6.72127 17.735 6.21256 17.9457 5.68213 17.9457H2.68213C2.1517 17.9457 1.64299 17.735 1.26792 17.36C0.892843 16.9849 0.682129 16.4762 0.682129 15.9457V10.9457C0.682129 5.42274 5.15913 0.94574 10.6821 0.94574C16.2051 0.94574 20.6821 5.42274 20.6821 10.9457V15.9477ZM18.6821 15.9457V11.9457H15.6821V15.9457H18.6821ZM2.68213 11.9457V15.9457H5.68213V11.9457H2.68213Z" fill="white" />
                </svg>
              </div>
              <div className="dragontext">
                <span>Mentorship programs</span>
                <div className="xs">
                  Connecting women with experienced mentors can provide valuable guidance,
                  support.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="job">
    <div className="mdan">
      More than 27 big teams partner with us
    </div>
    <br />
    <div className="container">
      <div className="brands">
        <div className="brands__preWrapper">
          <div className="brands__wrapper">
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group%20141.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 142.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 144.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 145.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 146.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 144.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 141.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 144.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 146.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 142.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 144.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 141.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 142.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 144.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 145.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 146.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 144.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 141.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 144.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 146.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 142.png" /></a>
            <a href="#"><img src="https://github.com/Manlikevee/mpawa/raw/master/New%20folder/Group 144.png" /></a>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div className="sectionthree"  ref={sectionRef}>
      <div className="sectrea">
        <div className="support">
          How we support our partner all over the world
        </div>
        <div className="supportsmall">
          Join Us in Empowering Women Through Education and Career Development, By partnering with our
          organization, you will have the opportunity to make a positive impact in the lives of women.
        </div>
        <div className="supportthree">
          <div className="fiv">
            <div className="star">
              <svg width={26} height={24} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z" fill="#FFC728" />
              </svg>
              <svg width={26} height={24} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z" fill="#FFC728" />
              </svg>
              <svg width={26} height={24} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z" fill="#FFC728" />
              </svg>
              <svg width={26} height={24} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z" fill="#FFC728" />
              </svg>
              <svg width={26} height={24} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z" fill="#FFC728" />
              </svg>
            </div>
            <div className="rat">
              <span>4.9 </span> / 5 rating
            </div>
            <div className="laz">
              databricks
            </div>
          </div>
          <div className="fiv">
            <div className="star">
              <svg width={26} height={24} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z" fill="#FFC728" />
              </svg>
              <svg width={26} height={24} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z" fill="#FFC728" />
              </svg>
              <svg width={26} height={24} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z" fill="#FFC728" />
              </svg>
              <svg width={26} height={24} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z" fill="#FFC728" />
              </svg>
              <svg width={26} height={24} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z" fill="#BBBBBB" />
              </svg>
            </div>
            <div className="rat">
              <span>4.8 </span> / 5 rating
            </div>
            <div className="laz">
              Chainalysis
            </div>
          </div>
          <div className="fiv" />
        </div>
      </div>
      <div className="sectreb">
        <div className="sidbcont">
          <div className="sidbico">
            <svg width={18} height={22} viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.783 1.826L9 0L17.217 1.826C17.4391 1.87536 17.6377 1.99897 17.78 2.1764C17.9224 2.35384 18 2.57452 18 2.802V12.789C17.9999 13.7767 17.756 14.7492 17.2899 15.62C16.8238 16.4908 16.1499 17.2331 15.328 17.781L9 22L2.672 17.781C1.85027 17.2332 1.17646 16.4911 0.710348 15.6205C0.244236 14.7498 0.000236356 13.7776 0 12.79V2.802C3.90378e-05 2.57452 0.0776379 2.35384 0.21999 2.1764C0.362341 1.99897 0.560937 1.87536 0.783 1.826ZM10 9V4L5 11H8V16L13 9H10Z" fill="#E56346" />
            </svg>
          </div>
          <div className="isdbtxt">
            <div className="sidbh">
              Skilled and diverse talent
            </div>
            Partnering with Mpawa allows access to skilled and diverse talent through tech education and
            mentorship.
          </div>
        </div>
        <div className="sidbcont">
          <div className="sidbico">
            <svg width={20} height={19} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 9C4.40905 9 3.82389 8.8836 3.27792 8.65746C2.73196 8.43131 2.23588 8.09984 1.81802 7.68198C1.40016 7.26412 1.06869 6.76804 0.842542 6.22208C0.616396 5.67611 0.5 5.09095 0.5 4.5C0.5 3.90905 0.616396 3.32389 0.842542 2.77792C1.06869 2.23196 1.40016 1.73588 1.81802 1.31802C2.23588 0.900156 2.73196 0.568688 3.27792 0.342542C3.82389 0.116396 4.40905 -8.80582e-09 5 0C6.19347 1.77842e-08 7.33807 0.474106 8.18198 1.31802C9.02589 2.16193 9.5 3.30653 9.5 4.5C9.5 5.69347 9.02589 6.83807 8.18198 7.68198C7.33807 8.52589 6.19347 9 5 9ZM15.5 13C14.4391 13 13.4217 12.5786 12.6716 11.8284C11.9214 11.0783 11.5 10.0609 11.5 9C11.5 7.93913 11.9214 6.92172 12.6716 6.17157C13.4217 5.42143 14.4391 5 15.5 5C16.5609 5 17.5783 5.42143 18.3284 6.17157C19.0786 6.92172 19.5 7.93913 19.5 9C19.5 10.0609 19.0786 11.0783 18.3284 11.8284C17.5783 12.5786 16.5609 13 15.5 13ZM15.5 14C16.6935 14 17.8381 14.4741 18.682 15.318C19.5259 16.1619 20 17.3065 20 18.5V19H11V18.5C11 17.3065 11.4741 16.1619 12.318 15.318C13.1619 14.4741 14.3065 14 15.5 14ZM5 10C5.65661 10 6.30679 10.1293 6.91342 10.3806C7.52004 10.6319 8.07124 11.0002 8.53553 11.4645C8.99983 11.9288 9.36812 12.48 9.6194 13.0866C9.87067 13.6932 10 14.3434 10 15V19H0V15C0 13.6739 0.526784 12.4021 1.46447 11.4645C2.40215 10.5268 3.67392 10 5 10Z" fill="#E56346" />
            </svg>
          </div>
          <div className="isdbtxt">
            <div className="sidbh">
              Diversity and inclusion
            </div>
            Partnering with Mpawa promotes diversity and inclusion and can improve a company's
            reputation and work environment.
          </div>
        </div>
        <div className="sidbcont">
          <div className="sidbico">
            <svg width={19} height={23} viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 13V21H0C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13ZM14 20.5L11.061 22.045L11.622 18.773L9.245 16.455L12.531 15.977L14 13L15.47 15.977L18.755 16.455L16.378 18.773L16.938 22.045L14 20.5ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12Z" fill="#E56346" />
            </svg>
          </div>
          <div className="isdbtxt">
            <div className="sidbh">
              Employee development and engagement
            </div>
            Offering Mpawa's tech education and mentorship program to employees can improve their skills
            and engagement, leading to increased retention and performance.
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div className="sectionthree">
      <div className="bulls">
        <div className="bullbox">
          <div className="bullicon">
            <div className="sidbico">
              <svg width={28} height={27} viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26 24H15.3333V4C15.3333 2.93913 15.7548 1.92172 16.5049 1.17157C17.2551 0.421427 18.2725 0 19.3333 0H26C26.3536 0 26.6928 0.140476 26.9428 0.390524C27.1929 0.640573 27.3333 0.979711 27.3333 1.33333V22.6667C27.3333 23.0203 27.1929 23.3594 26.9428 23.6095C26.6928 23.8595 26.3536 24 26 24ZM12.6667 24H2.00001C1.64638 24 1.30724 23.8595 1.0572 23.6095C0.807147 23.3594 0.666672 23.0203 0.666672 22.6667V1.33333C0.666672 0.979711 0.807147 0.640573 1.0572 0.390524C1.30724 0.140476 1.64638 0 2.00001 0H8.66667C9.72754 0 10.745 0.421427 11.4951 1.17157C12.2452 1.92172 12.6667 2.93913 12.6667 4V24ZM12.6667 24H15.3333V26.6667H12.6667V24Z" fill="#E56346" />
              </svg>
            </div>
          </div>
          <div className="bullheader">Tech education courses</div>
          <div className="bulltext">
            Mpawa offers a range of tech courses tailored for women including courses in fields such as
            business, technology, and leadership.
          </div>
        </div>
        <div className="bullbox">
          <div className="bullicon">
            <div className="sidbico">
              <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3334 24.3307V19.8667C11.3334 18.156 12.66 16.8107 14.6227 16.0427C13.3569 15.5719 12.0171 15.3317 10.6667 15.3334C8.14669 15.3334 5.81869 16.156 3.93735 17.5467C4.5207 19.1965 5.50014 20.6778 6.78969 21.8606C8.07924 23.0435 9.63945 23.8917 11.3334 24.3307ZM23.1734 19.448C22.6467 18.7374 20.8934 18 18.6667 18C15.992 18 14 19.0627 14 19.8667V24.6667C15.8505 24.6677 17.6693 24.1871 19.2777 23.2721C20.8861 22.3571 22.2287 21.0392 23.1734 19.448ZM10.7334 13.3334C11.529 13.3334 12.2921 13.0173 12.8547 12.4547C13.4173 11.8921 13.7334 11.129 13.7334 10.3334C13.7334 9.5377 13.4173 8.77464 12.8547 8.21203C12.2921 7.64942 11.529 7.33335 10.7334 7.33335C9.9377 7.33335 9.17464 7.64942 8.61203 8.21203C8.04942 8.77464 7.73335 9.5377 7.73335 10.3334C7.73335 11.129 8.04942 11.8921 8.61203 12.4547C9.17464 13.0173 9.9377 13.3334 10.7334 13.3334ZM18.6667 14.6667C19.3739 14.6667 20.0522 14.3857 20.5523 13.8856C21.0524 13.3855 21.3334 12.7073 21.3334 12C21.3334 11.2928 21.0524 10.6145 20.5523 10.1144C20.0522 9.61431 19.3739 9.33335 18.6667 9.33335C17.9594 9.33335 17.2812 9.61431 16.7811 10.1144C16.281 10.6145 16 11.2928 16 12C16 12.7073 16.281 13.3855 16.7811 13.8856C17.2812 14.3857 17.9594 14.6667 18.6667 14.6667ZM14 27.3334C6.63602 27.3334 0.666687 21.364 0.666687 14C0.666687 6.63602 6.63602 0.666687 14 0.666687C21.364 0.666687 27.3334 6.63602 27.3334 14C27.3334 21.364 21.364 27.3334 14 27.3334Z" fill="#ECC607" />
              </svg>
            </div>
          </div>
          <div className="bullheader">Mentorship program</div>
          <div className="bulltext">
            Mpawa pairs experienced tech professionals with women looking to learn and grow in the tech
            industry.
          </div>
        </div>
        <div className="bullbox">
          <div className="bullicon">
            <div className="sidbico">
              <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 12.6667C15.7681 12.6667 17.4638 13.3691 18.714 14.6193C19.9642 15.8695 20.6666 17.5652 20.6666 19.3334V27.3334H7.33329V19.3334C7.33329 17.5652 8.03567 15.8695 9.28591 14.6193C10.5362 13.3691 12.2318 12.6667 14 12.6667ZM5.05063 16.6747C4.83844 17.3904 4.71309 18.129 4.67729 18.8747L4.66663 19.3334V27.3334H0.666626V21.3334C0.666364 20.1835 1.09066 19.0739 1.85814 18.2176C2.62561 17.3613 3.68222 16.8185 4.82529 16.6934L5.05196 16.6747H5.05063ZM22.9493 16.6747C24.1358 16.747 25.2501 17.2693 26.0648 18.135C26.8794 19.0007 27.3331 20.1446 27.3333 21.3334V27.3334H23.3333V19.3334C23.3333 18.4094 23.2 17.5174 22.9493 16.6747ZM5.33329 8.66669C6.21735 8.66669 7.06519 9.01788 7.69031 9.643C8.31544 10.2681 8.66663 11.116 8.66663 12C8.66663 12.8841 8.31544 13.7319 7.69031 14.357C7.06519 14.9822 6.21735 15.3334 5.33329 15.3334C4.44924 15.3334 3.60139 14.9822 2.97627 14.357C2.35115 13.7319 1.99996 12.8841 1.99996 12C1.99996 11.116 2.35115 10.2681 2.97627 9.643C3.60139 9.01788 4.44924 8.66669 5.33329 8.66669ZM22.6666 8.66669C23.5507 8.66669 24.3985 9.01788 25.0236 9.643C25.6488 10.2681 26 11.116 26 12C26 12.8841 25.6488 13.7319 25.0236 14.357C24.3985 14.9822 23.5507 15.3334 22.6666 15.3334C21.7826 15.3334 20.9347 14.9822 20.3096 14.357C19.6845 13.7319 19.3333 12.8841 19.3333 12C19.3333 11.116 19.6845 10.2681 20.3096 9.643C20.9347 9.01788 21.7826 8.66669 22.6666 8.66669ZM14 0.666687C15.4144 0.666687 16.771 1.22859 17.7712 2.22878C18.7714 3.22898 19.3333 4.58553 19.3333 6.00002C19.3333 7.41451 18.7714 8.77106 17.7712 9.77126C16.771 10.7715 15.4144 11.3334 14 11.3334C12.5855 11.3334 11.2289 10.7715 10.2287 9.77126C9.22853 8.77106 8.66663 7.41451 8.66663 6.00002C8.66663 4.58553 9.22853 3.22898 10.2287 2.22878C11.2289 1.22859 12.5855 0.666687 14 0.666687Z" fill="#12B347" />
              </svg>
            </div>
          </div>
          <div className="bullheader">Community support</div>
          <div className="bulltext">
            Mpawa fosters a supportive community of women in tech through events, meetups, and online
            forums. Members can connect and share knowledge.
          </div>
        </div>
      </div>
    </div>
    <div className="flippingside ">
      <div className="flipsidea">
        <img src="https://github.com/Manlikevee/mpawa/raw/master/Frame 247.png" alt="asa" />
      </div>
      <div className="flipsideb">
        <div className="littletxt">MPAWA</div>
        <div className="bigtxt">
          Unlock Your Potential with Our Educational Programs for Women
        </div>
        <div className="mediumtxt">
          Transform Your Career with Online Courses, Scholarships, and Mentorship, Sign Up for Our
          Programs Today and Start Your Journey to Success!
          <p>
            Offering Mpawa's tech education and mentorship program to employees can improve their skills and engagement, leading to increased retention and performance.
          </p>
        </div>
        <div className="dragon3">
          <div style={{display: 'flex', margin: '10px'}}>
            <div className="tickcon">
              <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99997 16.1386C3.78101 16.1386 0.361084 12.7187 0.361084 8.49973C0.361084 4.28077 3.78101 0.86084 7.99997 0.86084C12.2189 0.86084 15.6389 4.28077 15.6389 8.49973C15.6389 12.7187 12.2189 16.1386 7.99997 16.1386ZM7.23838 11.5553L12.6391 6.15383L11.5589 5.07369L7.23838 9.39501L5.07733 7.23397L3.9972 8.3141L7.23838 11.5553Z" fill="#E56346" />
              </svg>
            </div>      Guarantee Letter
          </div>
          <div style={{display: 'flex', margin: '10px'}}>
            <div className="tickcon">
              <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99997 16.1386C3.78101 16.1386 0.361084 12.7187 0.361084 8.49973C0.361084 4.28077 3.78101 0.86084 7.99997 0.86084C12.2189 0.86084 15.6389 4.28077 15.6389 8.49973C15.6389 12.7187 12.2189 16.1386 7.99997 16.1386ZM7.23838 11.5553L12.6391 6.15383L11.5589 5.07369L7.23838 9.39501L5.07733 7.23397L3.9972 8.3141L7.23838 11.5553Z" fill="#E56346" />
              </svg>
            </div>   Special Discount 50%
          </div>
        </div>
        <a href='#'>
          <p>
          </p><div className="user-name signup" style={{width: 'fit-content', padding: '15px'}}> Learn More </div>
          <p />
        </a>
      </div>
    </div>
    <div className="flippingside flp">
      <div className="flipsideb">
        <div className="littletxt">MPAWA</div>
        <div className="bigtxt" style={{width: '90%'}}>
          Mpawa for children and young girls
        </div>
        <div className="mediumtxt">
          Mpawa's tech education courses and mentorship program are specifically tailored for women and are open to women only. However, men can support Mpawa's mission through other means, such as by donating, volunteering, or spreading the word about the organization.
          <p>
            Join Us in Empowering Women Through Education and Career Development, By partnering with our organization.
          </p>
        </div>
        <a href>
          <p>
          </p><div className="user-name signup" style={{width: 'fit-content', padding: '15px'}}> Learn More </div>
          <p />
        </a>
      </div>
      <div className="flipsidea">
        <img src="https://github.com/Manlikevee/mpawa/raw/master/gettyimages-504918954-2048x2048 1.png" alt="sample" style={{borderRadius: '20px'}} />
      </div>
    </div>
    <div className="flippingside">
      <div className="flipsidea">
        <img src="https://github.com/Manlikevee/mpawa/raw/master/gettyimages-1340847240-2048x2048 1.png" alt="sas" style={{borderRadius: '20px'}} />
      </div>
      <div className="flipsideb">
        <div className="littletxt">MPAWA</div>
        <div className="biggetxt" style={{width: '100%'}}>
          Make a Difference in the Lives of <span style={{color: '#E56346'}}>Women</span> 
        </div>
        <div className="numbersection">
          <div className="numberflex">
            <div className="number">
              01
            </div> <div className="txtnumber">
              Improved career prospects and advancement opportunities
            </div>
          </div>
          <div className="numberflex">
            <div className="number">
              02
            </div> <div className="txtnumber">
              Increased knowledge and skills in a particular field or industry
            </div>
          </div>
          <div className="numberflex">
            <div className="number">
              03
            </div> <div className="txtnumber">
              Personal growth and development in a particular field or industry
            </div>
          </div>
          <div className="numberflex">
            <div className="number">
              04
            </div> <div className="txtnumber">
              professional growth and development in a particular field or industry
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sectionthree">
      <div className="bulls">
        <div className="bullorange">
          Women make up only 25% of the tech industry workforce.
        </div>
        <div className="bullorange">
          Companies with diverse leadership teams have 19% higher revenues.
        </div>
        <div className="bullorange">
          Investing in employee development can lead to a 24% increase in productivity.
        </div>
      </div>
    </div>
    <br />
    <br />
    <p className="faq">
      Frequently asked questions
    </p>
    <p className="freq">
      Everything you need to know about us
    </p>
    <div className="accordion">
      <div className="accordion-item">
        <button id="accordion-button-1" aria-expanded="false"><span className="accordion-title">Who is eligible to participate in Mpawa's mentorship program?</span><span className="icon" aria-hidden="true" /></button>
        <div className="accordion-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
        </div>
      </div>
      <div className="accordion-item">
        <button id="accordion-button-2" aria-expanded="false"><span className="accordion-title">Can companies partner with Mpawa to offer tech education and mentorship to their employees?</span><span className="icon" aria-hidden="true" /></button>
        <div className="accordion-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
        </div>
      </div>
      <div className="accordion-item">
        <button id="accordion-button-3" aria-expanded="false"><span className="accordion-title">How long do Mpawa's tech education courses take to complete?</span><span className="icon" aria-hidden="true" /></button>
        <div className="accordion-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
        </div>
      </div>
      <div className="accordion-item">
        <button id="accordion-button-4" aria-expanded="false"><span className="accordion-title">How does Mpawa's community support program work?</span><span className="icon" aria-hidden="true" /></button>
        <div className="accordion-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
        </div>
      </div>
      <div className="accordion-item">
        <button id="accordion-button-5" aria-expanded="false"><span className="accordion-title">How do airplanes stay up?</span><span className="icon" aria-hidden="true" /></button>
        <div className="accordion-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default PageOne
