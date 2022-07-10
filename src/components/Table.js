import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addDay, removeDay } from "../features/reserves";
import { useSelector } from "react-redux";

const Table = ({ day, reserved }) => {
  const user = useSelector((state) => state.user.value);
  const reservedDays = useSelector((state) => state.reserves.value);
  const [getHidden, setHidden] = useState(true);
  const [getHiddenCard, setHiddenCard] = useState(true);
  const [resCard, setResCard] = useState("");
  const index =  reservedDays.days.map(x  => x.calendar).indexOf(day)
  const classRef = useRef();
  let tempStyle = {};
  let delButton
  if (reserved) {
    tempStyle = { backgroundColor: "gray" };
    if (reservedDays.days[index].who.email === user.loggedIn.email){
        delButton = 
        <button onClick={deleteRes}>Remove</button>
    }
  }
  const dispatch = useDispatch();
  const toggleClass = () => {
      console.log(reservedDays);
    if (reserved) {
      setHiddenCard(!getHiddenCard);
      setResCard(
        <div className={`${getHiddenCard ? null : "hiddenCard"} owner`}>
          <h3>Reserved by: {reservedDays.days[index].who.email}</h3>
          {delButton}
        </div>
      );
      return;
    }
    setHidden(!getHidden);
  };

  function resDay() {
    let reservation = {
      calendar: day,
      who: user.loggedIn,
    };
    dispatch(addDay(reservation));
    setHidden(!getHidden);
  }
  function deleteRes () {
    dispatch(removeDay(reservedDays.days[index].calendar))
    console.log(reservedDays);
    setResCard("")
  }

  return (
    <div style={{ display: "flex" }}>
      <div
        style={tempStyle}
        onClick={toggleClass}
        className="dayWrap"
        ref={classRef}
      >
        <h5>July {day + 1}</h5>
      </div>
      <div className={`${getHidden ? "hidden" : null} reserve`}>
        <button onClick={resDay}>Reserve</button>
      </div>
      {resCard}
    </div>
  );
};

export default Table;
