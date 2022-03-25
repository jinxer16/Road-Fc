import React, { useState } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'
import { Link } from "react-router-dom";
import "./MysteryBox.css"
import Modal from 'react-bootstrap/Modal';
// import Modal from 'react-bootstrap/Modal';
import Group609 from "../../Assets/Group 609.png"
import card1 from "../../Assets/card 1.png"
import { IoMdClose } from "react-icons/io";
import Box from "../../Assets/Box.png"
import nft1 from "../../Assets/nft 1.png"
import marketplace1 from "../../Assets/marketplace 1.png"
import Group593 from "../../Assets/Group 593.png"
import Growth from "../../Assets/Growth.png"
import Frame2 from "../../Assets/Frame 2.png"
import Frame3 from "../../Assets/Frame 3.png"
import mystery from "../../Assets/mystery.png"
import Mins from "../../Assets/Mins.png"
import plus from "../../Assets/plus.png"
import RollIMG from "../../Assets/RollIMG.png"
function MysteryBox() {
    const [modalShow, setModalShow] = useState(false);
    const [modalShowSecond, setModalShowSecond] = useState(false);
    let [valueone, setValueone] = useState(1)
    const increaseValuebox = () => {
        setValueone(++valueone)
    }
    const decreaseValuebox = () => {
        if (valueone > 1) {

            setValueone(--valueone)
        }
    }
    return (
        <div className='imagePool'>
            <div className='container'>
                <div className='row d-flex justify-content-between align-items-center pt-5 pb-3'>
                    <div className='col-lg-2 col-md-3 col-4 d-flex justify-content-start' >
                        <span id="presale-back"><Link to="/"><MdOutlineKeyboardBackspace size={40} style={{ color: "white" }} /></Link> Back</span>
                    </div>
                    <div className='col-lg-2 col-md-3 col-5' >
                        <button className='btn poolbtn'>CONNECT</button>
                    </div>
                </div>
                <div className='row d-flex justify-content-center justify-content-around'>
                    <div className='col-3 staking-box'>
                        <div className='row d-flex justify-content-center mt-5 mb-3'>
                            <div className='col-11'>
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center ' >
                                        <img src={Growth} width="30px" />&nbsp;&nbsp; Staking & Point
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center mt-3 mb-3'>
                            <div className='col-11'>
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center ' >
                                        <img src={Frame2} width="30px" />&nbsp;&nbsp; Mint
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center mt-3 mb-3'>
                            <div className='col-11'>
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center' >
                                        <img src={Frame3} width="24px" />&nbsp;&nbsp; Breed
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center mt-3 mb-3'>
                            <div className='col-11'>
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center active' >
                                        <img src={Box} width="30px" />&nbsp;&nbsp; Mystery Box
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center mt-3 mb-3'>
                            <div className='col-11'>
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center' >
                                        <img src={nft1} width="30px" />&nbsp;&nbsp; NFT Staking
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center mt-3 mb-3'>
                            <div className='col-11'>
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center' >
                                        <img src={marketplace1} width="30px" />&nbsp;&nbsp; NFT Market
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center mt-3 mb-3'>
                            <div className='col-11'>
                                <div className="d-grid gap-2">
                                    <button className='btn staking-btn text-start d-flex align-items-center' >
                                        <img src={Group593} width="30px" />&nbsp;&nbsp; My NFT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-11 mb-3 staking-coll'>

                        <div class="accordion " id="accordionFlushExample">
                            <div class="accordion-item staking-boxResponsive">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" style={{ color: "white" }} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        <div className='col-10 active' >
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={Growth} width="30px" />&nbsp;&nbsp; Staking & Point
                                                </button>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div className='col-10'>
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={Frame2} width="30px" />&nbsp;&nbsp; Mint
                                                </button>
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2'>
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={Frame3} width="24px" />&nbsp;&nbsp; Breed
                                                </button>
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2'>
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={Box} width="30px" />&nbsp;&nbsp; Mystery Box
                                                </button>
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2'>
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={nft1} width="30px" />&nbsp;&nbsp; NFT Staking
                                                </button>
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2 '>
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={marketplace1} width="30px" />&nbsp;&nbsp; NFT Market
                                                </button>
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2'>
                                            <div className="d-grid gap-2">
                                                <button className='btn staking-btn text-start d-flex align-items-center' >
                                                    <img src={Group593} width="30px" />&nbsp;&nbsp; My NFT
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8 col-11 mb-md-1 mb-4 mt-4'>
                        {modalShow ? <Modal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <div className='Breed-model-image'>
                                <div className='row d-flex justify-content-center' >
                                    <div className=' col-12 d-flex flex-row justify-content-between mt-3'>
                                        <h4 className='ps-3' style={{ color: "white" }}>Mystery Box</h4>
                                        <IoMdClose className='pe-3' onClick={() => setModalShow(false)} size={38} style={{ color: "white", cursor: "pointer" }} />
                                    </div>
                                    <div className='col-md-12 d-flex justify-content-center'>
                                        <img className='pt-3 congrat-image' src={Group609} />
                                    </div>
                                    <div className='col-md-12 d-flex justify-content-center mt-4'>
                                        <p className='breed-p'>You got a fighter now!</p>
                                    </div>
                                    <div className='row d-flex justify-content-center justify-content-around mt-4 mb-4'>
                                        <div className='col-md-3 box-mystry'>
                                            <div className='col-md-12 d-flex justify-content-center mystrey-imagess mb-3'>
                                                <img src={card1} className="mystrey-pic pt-4 pb-3" />
                                            </div>
                                            <div className='text-center'>
                                                <span className='congrat-span'>#20211 Alien Fighter</span>
                                            </div>
                                            <div className='row d-flex justify-content-center mt-3'>
                                                <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                                    <span className='mystrey-span21'>Rarity:</span>
                                                    <span className='mystrey-span22'>Mythic</span>
                                                </div>
                                                <div className='col-11 mt-2' >
                                                    <p style={{ border: "1px solid rgba(119, 119, 119, 0.25)" }}></p>
                                                </div>
                                            </div>
                                            <div className='row d-flex justify-content-center mt-2'>
                                                <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                                    <span className='mystrey-span21'>Level:</span>
                                                    <span className='mystrey-span22'>+3</span>
                                                </div>
                                                <div className='col-11 mt-2' >
                                                    <p style={{ border: "1px solid rgba(119, 119, 119, 0.25)" }}></p>
                                                </div>
                                            </div>
                                            <div className='row d-flex justify-content-center mt-2'>
                                                <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                                    <span className='mystrey-span21'>Has Power:</span>
                                                    <span className='mystrey-span22'>15</span>
                                                </div>
                                                <div className='col-11 mt-2' >
                                                    <p style={{ border: "1px solid rgba(119, 119, 119, 0.25)" }}></p>
                                                </div>
                                            </div>
                                        </div>



                                        <div className='col-md-3 box-mystry'>
                                            <div className='col-md-12 d-flex justify-content-center mystrey-imagess mb-3'>
                                                <img src={card1} className="mystrey-pic pt-4 pb-3" />
                                            </div>
                                            <div className='text-center'>
                                                <span className='congrat-span'>#20211 Alien Fighter</span>
                                            </div>
                                            <div className='row d-flex justify-content-center mt-3'>
                                                <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                                    <span className='mystrey-span21'>Rarity:</span>
                                                    <span className='mystrey-span22'>Mythic</span>
                                                </div>
                                                <div className='col-11 mt-2' >
                                                    <p style={{ border: "1px solid rgba(119, 119, 119, 0.25)" }}></p>
                                                </div>
                                            </div>
                                            <div className='row d-flex justify-content-center mt-2'>
                                                <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                                    <span className='mystrey-span21'>Level:</span>
                                                    <span className='mystrey-span22'>+3</span>
                                                </div>
                                                <div className='col-11 mt-2' >
                                                    <p style={{ border: "1px solid rgba(119, 119, 119, 0.25)" }}></p>
                                                </div>
                                            </div>
                                            <div className='row d-flex justify-content-center mt-2'>
                                                <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                                    <span className='mystrey-span21'>Has Power:</span>
                                                    <span className='mystrey-span22'>15</span>
                                                </div>
                                                <div className='col-11 mt-2' >
                                                    <p style={{ border: "1px solid rgba(119, 119, 119, 0.25)" }}></p>
                                                </div>
                                            </div>
                                        </div>



                                        <div className='col-md-3 box-mystry'>
                                            <div className='col-md-12 d-flex justify-content-center mystrey-imagess mb-3'>
                                                <img src={card1} className="mystrey-pic pt-4 pb-3" />
                                            </div>
                                            <div className='text-center'>
                                                <span className='congrat-span'>#20211 Alien Fighter</span>
                                            </div>
                                            <div className='row d-flex justify-content-center mt-3'>
                                                <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                                    <span className='mystrey-span21'>Rarity:</span>
                                                    <span className='mystrey-span22'>Mythic</span>
                                                </div>
                                                <div className='col-11 mt-2' >
                                                    <p style={{ border: "1px solid rgba(119, 119, 119, 0.25)" }}></p>
                                                </div>
                                            </div>
                                            <div className='row d-flex justify-content-center mt-2'>
                                                <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                                    <span className='mystrey-span21'>Level:</span>
                                                    <span className='mystrey-span22'>+3</span>
                                                </div>
                                                <div className='col-11 mt-2' >
                                                    <p style={{ border: "1px solid rgba(119, 119, 119, 0.25)" }}></p>
                                                </div>
                                            </div>
                                            <div className='row d-flex justify-content-center mt-2'>
                                                <div className='col-11 d-flex justify-content-between align-items-center mt-1'>
                                                    <span className='mystrey-span21'>Has Power:</span>
                                                    <span className='mystrey-span22'>15</span>
                                                </div>
                                                <div className='col-11 mt-2' >
                                                    <p style={{ border: "1px solid rgba(119, 119, 119, 0.25)" }}></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className='col-md-12 d-flex justify-content-center breed-imagess mt-3 mb-3'>
                                        <img src={card1} className="mint-pic pt-4 pb-3" />
                                    </div> */}
                                    <div className='col-md-12 d-flex justify-content-center'>
                                        <span className='congrat-span'>Do you want to Breed card or sell in the market?</span>
                                    </div>

                                </div>
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-lg-2 col-md-3 mt-3 mb-3'>
                                        <div className="d-grid gap-2">
                                            <button className='btn btn-congrats' size="lg">
                                                Breed
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-md-3 mt-3 mb-3'>
                                        <div className="d-grid gap-2">
                                            <button className='btn btn1-congrats' size="lg" onClick={() => setModalShowSecond(true)}>
                                                Sell
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-4 mt-3 mb-3'>
                                        <div className="d-grid gap-2">
                                            <button className='btn btn2-congrats' size="lg">
                                                Do it Later
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </Modal.Body> */}
                        </Modal> : <></>}


                        {modalShowSecond ? <Modal
                            show={modalShowSecond}
                            onHide={() => setModalShowSecond(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            className='second-modal-color'
                        >
                            <div className='Breed-model-image'>
                                <div className='row d-flex justify-content-center' >
                                    <div className=' col-12 d-flex flex-row justify-content-between mt-3'>
                                        <h4 className='ps-3' style={{ color: "white" }}>Mystery Box</h4>
                                        <IoMdClose className='pe-3' onClick={() => setModalShowSecond(false)} size={38} style={{ color: "white", cursor: "pointer" }} />
                                    </div>
                                    <div className='col-md-12 d-flex justify-content-center'>
                                        <img className='pt-3 congrat-image' src={Group609} />
                                    </div>
                                    <div className='col-md-12 d-flex justify-content-center mt-4'>
                                        <p className='breed-p'>You got a fighter now!</p>
                                    </div>
                                    <div className='row d-flex justify-content-center justify-content-around mt-4 mb-5'>
                                        <div className='col-md-3 box-mystry mt-3'>
                                            <div className='col-md-12 d-flex justify-content-center mystrey-imagess mb-3'>
                                                <img src={card1} className="mystrey-pic pt-4 pb-3" />
                                            </div>
                                            <div className='text-center'>
                                                <span className='congrat-span'>#20211 Alien Fighter</span>
                                            </div>
                                            <div className='d-flex flex-row mt-3 mb-3'>
                                                <div className='col-md-6'>
                                                    <form>
                                                        <input type='number' class="form-control" placeholder='0' style={{ border: "2px solid " }} />
                                                    </form>
                                                </div>
                                                <div className='col-md-6 d-flex align-items-center'>
                                                    <span className='text-infom'>ROAD ($100.82)</span>
                                                </div>
                                            </div>
                                            <div className='col-10 d-flex justify-content-center mb-3'>
                                                <div className="d-grid gap-2">
                                                    <button className='btn btn-congrats' size="lg">
                                                        SUMBIT
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-3 box-mystry mt-3'>
                                            <div className='col-md-12 d-flex justify-content-center mystrey-imagess mb-3'>
                                                <img src={card1} className="mystrey-pic pt-4 pb-3" />
                                            </div>
                                            <div className='text-center'>
                                                <span className='congrat-span'>#20211 Alien Fighter</span>
                                            </div>
                                            <div className='d-flex flex-row mt-3 mb-3'>
                                                <div className='col-md-6'>
                                                    <form>
                                                        <input type='number' class="form-control" placeholder='0' style={{ border: "2px solid " }} />
                                                    </form>
                                                </div>
                                                <div className='col-md-6 d-flex align-items-center'>
                                                    <span className='text-infom'>ROAD ($100.82)</span>
                                                </div>
                                            </div>
                                            <div className='col-10 d-flex justify-content-center mb-3'>
                                                <div className="d-grid gap-2">
                                                    <button className='btn btn-congrats' size="lg">
                                                        SUMBIT
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-3 box-mystry mt-3'>
                                            <div className='col-md-12 d-flex justify-content-center mystrey-imagess mb-3'>
                                                <img src={card1} className="mystrey-pic pt-4 pb-3" />
                                            </div>
                                            <div className='text-center'>
                                                <span className='congrat-span'>#20211 Alien Fighter</span>
                                            </div>

                                            <div className='d-flex flex-row mt-3 mb-3'>
                                                <div className='col-md-6'>
                                                    <form>
                                                        <input type='number' class="form-control" placeholder='0' style={{ border: "2px solid " }} />
                                                    </form>
                                                </div>
                                                <div className='col-md-6 d-flex align-items-center'>
                                                    <span className='text-infom'>ROAD ($100.82)</span>
                                                </div>
                                            </div>
                                            <div className='col-10 d-flex justify-content-center mb-3'>
                                                <div className="d-grid gap-2">
                                                    <button className='btn btn-congrats' size="lg">
                                                        SUMBIT
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal> : <></>}
                        <div className='row d-flex justify-content-center mt-4 mb-4'>
                            <div className='col-lg-12 col-11 presale-box1'>
                                <img src={mystery} className="mint-image" />
                                <div className='row d-flex justify-content-center justify-content-lg-around'>
                                    <div className='col-lg-7 col-10 mystrybox mb-3'>
                                        <div className='row d-flex justify-content-center align-items-center p-xl-5 pt-3 pb-3'>

                                            <div className='col-12'>
                                                <img src={RollIMG} className="mybox-image" />
                                            </div>
                                        </div>
                                        <div className='row '>
                                            <div className='col-12 p-2 steryboxes'>
                                                <div className='row d-flex justify-content-center pt-3'>
                                                    <div className='col-xl-2 col-4  d-flex flex-row justify-content-center '>
                                                        <div>
                                                            <RiCheckboxBlankCircleFill size={12} style={{ color: "#45AE3C" }} />
                                                        </div>
                                                        <div className=''>
                                                            <p className='stery-span ps-2'>35%</p>
                                                            <p className='stery-span1 ps-2 '>Common</p>
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-2 col-4 d-flex flex-row justify-content-center '>
                                                        <div>
                                                            <RiCheckboxBlankCircleFill size={12} style={{ color: "#AE653C" }} />
                                                        </div>
                                                        <div className=''>
                                                            <p className='stery-span ps-2'>26%</p>
                                                            <p className='stery-span1 ps-2 '>Uncommon</p>
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-2 col-4 d-flex flex-row justify-content-center '>
                                                        <div>
                                                            <RiCheckboxBlankCircleFill size={12} style={{ color: "#3489D8" }} />
                                                        </div>
                                                        <div className=''>
                                                            <p className='stery-span ps-2'>19%</p>
                                                            <p className='stery-span1 ps-2 '>Rare</p>
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-2 col-4 d-flex flex-row justify-content-center '>
                                                        <div>
                                                            <RiCheckboxBlankCircleFill size={12} style={{ color: "#903CAE" }} />
                                                        </div>
                                                        <div className=''>
                                                            <p className='stery-span ps-2'>11%</p>
                                                            <p className='stery-span1 ps-2 '>Epic</p>
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-2 col-4 d-flex flex-row justify-content-center '>
                                                        <div>
                                                            <RiCheckboxBlankCircleFill size={12} style={{ color: "#CC3E93" }} />
                                                        </div>
                                                        <div className=''>
                                                            <p className='stery-span ps-2'>6.2%</p>
                                                            <p className='stery-span1 ps-2 '>Legendary</p>
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-2 col-4 d-flex flex-row justify-content-center '>
                                                        <div>
                                                            <RiCheckboxBlankCircleFill size={12} style={{ color: "#AE8E3C;" }} />
                                                        </div>
                                                        <div className=''>
                                                            <p className='stery-span ps-2'>1.3%</p>
                                                            <p className='stery-span1 ps-2 '>Mythic</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-10 mystrybox mb-3'>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-12 staking-col12-Box pb-2 pt-2'>
                                                <div className='row d-flex justify-content-center'>
                                                    <div className='col-12 d-flex justify-content-between align-items-center mt-3 mb-3'>
                                                        <span className='presale-span21' style={{ color: "white" }}>Your Balance:</span>
                                                        <span className='presale-span1'>1000&nbsp;<span className='presale-span1' style={{ color: "white" }}>ROAD</span></span>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='col-12 mt-5'>
                                                <h3 className='mystery-h3'>Mystery Box Amount</h3>
                                            </div>
                                            <div className=' d-flex justify-content-center justify-content-around align-items-center mt-4'>
                                                <a onClick={decreaseValuebox} style={{ cursor: "pointer" }}><img src={Mins} /></a>
                                                <div className='boxess d-flex justify-content-center align-items-center'>{valueone}</div>
                                                <a onClick={increaseValuebox} style={{ cursor: "pointer" }}> <img src={plus} /></a>
                                            </div>
                                            <div className='col-11 mint-boxes d-flex justify-content-between mt-5 mb-3 pt-3 pb-3'>
                                                <span className='mint-span ps-2'>Total Cost:</span>
                                                <span className='mint-span1'>1,000 $ROAD</span>
                                            </div>
                                            <span className='mystrybox-span1'>MAXIMUM OF 3 NFTs Box PER tx</span>
                                            <div className='col-xl-7 mt-4 mb-2'>
                                                <div className="d-grid gap-2">
                                                    <button className='btn mystrybtn' onClick={() => setModalShow(true)}>Open Box</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12 col-11 mint-Page-border mb-4'>
                                        <div className='row pt-3 text-start text-sm-center '>
                                            <div className='col-sm-4 text-start' >
                                                <span className='Mint-Time '>Time</span>
                                            </div>
                                            <div className='col-sm-2 text-start'>
                                                <span className='Mint-Time'>Type</span>
                                            </div>
                                            <div className='col-sm-2 text-start'>
                                                <span className='Mint-Time'>Amount</span>
                                            </div>
                                            <div className='col-sm-2 text-start'>
                                                <span className='Mint-Time'>Status</span>
                                            </div>
                                            <div className='col-sm-2 text-start'>
                                                <span className='Mint-Time'>TX</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MysteryBox