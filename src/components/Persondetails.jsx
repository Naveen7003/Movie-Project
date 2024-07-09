import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/personAction";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import HorizontalCards from "../components/partials/HorizontalCards"

const Persondetails = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate();
  const { id } = useParams(); //data routes se aa rha hai isliye use params me ayega
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.person); //person ko show krne ke liye person ko save krna padega jiske liye person ko redux se lana padega
  console.log(info);
  useEffect(() => {
    dispatch(asyncloadperson(id));

    return () => {
      //isse person remove ho jayegi component se
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    <div className="px-[15%] w-screen">

      <nav className="w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] mr-3  ri-arrow-left-line"
        ></Link>
      </nav>


    </div>
  ):(
    <Loader />
  )
}

export default Persondetails