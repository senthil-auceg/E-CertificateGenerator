import React, { useState, memo, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faPen , faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import EditLayerName from "../Pages/Components/EditLayerName";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { assets } from "../constants/certificate_assets";
import { showToast } from "../services/showToast";
import {
  handleLayerClick,
  handleEditPenClick,
  changeCertificateType,
  deleteLayer,
  addLayer,
  addImage,
} from "../hooks/reducers/certificateSlice";

import { useNavigate } from "react-router-dom";

function LeftSideBar({ handleBrowserResize }) {
  const navigate = useNavigate();

  const [layerClick, setLayerClick] = useState(true);
  const [assetsClick, setAssetsClick] = useState(false);
  const [nameChangeSelected, setNameChangeSelected] = useState(false);

  const dispatch = useDispatch();
  const textLayers = useSelector((state) => state.certificate.textLayers);
  const selectedText = useSelector((state) => state.certificate.selectedText);
  const imgUrl = useSelector((state) => state.certificate.imgUrl);

  function LayerClick() {
    console.log("layer click");
    setLayerClick(true);
    setAssetsClick(false);
  }

  function AssetsClick() {
    console.log("assets click");
    setLayerClick(false);
    setAssetsClick(true);
  }

  function Layers() {
    return textLayers.map((val) => (
      <div
        key={val.id}
        style={{
          backgroundColor: selectedText == val.id ? "#788C9E" : "",
        }}
        className="w-full h-[50px] pl-6 cursor-pointer
        flex justify-start items-center text-white"
      >
        <div className="w-full flex justify-start items-center">
          <FontAwesomeIcon
            icon={faPen}
            width="10px"
            className="cursor-pointer pr-6 pt-1"
            onClick={() => {
              dispatch(handleEditPenClick({ id: val.id, name: val.name }));
              setNameChangeSelected(!nameChangeSelected);
            }}
          />
          <h1
            onClick={() =>
              dispatch(
                handleLayerClick({
                  id: val.id,
                  val: val.val,
                  color: val.color,
                  fontWeight: val.fontWeight,
                  fontSize: val.fontSize,
                  fontFamily: val.fontFamily,
                })
              )
            }
            className="select-none w-full text-start"
          >
            {val.name}
          </h1>
        </div>
        <FontAwesomeIcon
          icon={faTrash}
          width="10px"
          className="cursor-pointer pr-4 pt-1"
          onClick={() => dispatch(deleteLayer(val.id))}
        />
      </div>
    ));
  }

  const Assets = memo(() => {
    return (
      <div
        style={{
          overflowAnchor: "auto",
        }}
        className="w-full h-[100vh] overflow-y-scroll"
      >
        {assets.map((val) => (
          <img
            key={Math.random()}
            // style={{
            //   backgroundColor: assetSelected == val ? "#788C9E" : "",
            // }}
            onClick={() => {
              dispatch(changeCertificateType(true));
              dispatch(addImage({ img: val }));
              handleBrowserResize();
            }}
            src={val}
            className="p-4 cursor-pointer"
          />
        ))}
      </div>
    );
  });

  return (
    <>
      {/* hidden layers for entering name */}
      <EditLayerName
        nameChangeSelected={nameChangeSelected}
        setNameChangeSelected={setNameChangeSelected}
      />
      {/* left bar */}
      <div
        className="bg-greyHighlight h-screen w-[20%] 
      border-stroke border-solid border-[1px]"
      >
        <div
          className="w-full h-[50px] border-stroke border-solid border-b-[1px]
        flex justify-around items-center text-white cursor-pointer"
        >
 <FontAwesomeIcon
          icon={faArrowLeft}
          width="10px"
          className="cursor-pointer pr-4 pt-1"
          onClick={() => navigate("/home")}        />

          <h1
            style={{
              fontWeight: layerClick ? "600" : "300",
            }}
            onClick={LayerClick}
          >
            Layers
          </h1>
          <h1
            style={{
              fontWeight: assetsClick ? "600" : "300",
            }}
            onClick={AssetsClick}
          >
            Assets
          </h1>
          <FontAwesomeIcon
            icon={faPlus}
            className="cursor-pointer"
            onClick={() => {
              if (imgUrl) {
                handleBrowserResize();
                dispatch(addLayer());
              } else {
                showToast(toast, "error", "Add an image to add Layer");
              }
            }}
          />
        </div>
        {layerClick ? <Layers /> : <Assets />}
        <div
          className="h-full"
          onClick={() => dispatch(handleLayerClick(""))}
        ></div>
      </div>
    </>
  );
}

export default LeftSideBar;
