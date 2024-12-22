import {RiDeleteBin5Fill} from "react-icons/ri";

function FeedbackTableRaw(props){
    // eslint-disable-next-line react/prop-types
    const item=props.item;
    // eslint-disable-next-line react/prop-types
    const deleteFeedback=props.deleteFeedback;
    // eslint-disable-next-line react/prop-types
    const handleToggle=props.handleToggle;
    // eslint-disable-next-line react/prop-types
    const isToggled=props.isToggled;
    // eslint-disable-next-line react/prop-types
    const updateVisible=props.updateVisible;


    return(
        <>
            <tr key={item.email}
                className="border-b border-gray-200 hover:bg-gray-100"
            >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                    {item.email}
                </td>
                <td className="py-3 px-6 text-left">{item.feedback}</td>
                <td className="py-3 px-6 text-left">{isToggled?"true":"false"}</td>
                <td className="py-3 px-6 text-left flex">

                    <div className="flex fixed">
                        <button onClick={()=>{
                            updateVisible(item.email,item.visible)
                            handleToggle()
                        }}
                                className={`px-6 flex justify-center items-center h-5 py-2 rounded-md text-white font-semibold focus:outline-none transition ${
                                isToggled ? "bg-green-500" : "bg-gray-400"
                            }`}
                        >
                            {isToggled ? "Visible" : "Invisible"}
                        </button>
                        <button
                            onClick={() => deleteFeedback(item.email)}
                            className="w-7 h-5 bg-red-700 mx-5 text-amber-50 rounded-2xl hover:bg-red-600"
                        >
                                        <span className="flex justify-center">
                                            <RiDeleteBin5Fill/>
                                        </span>
                        </button>
                    </div>


                </td>
            </tr>
        </>
    )
}

export default FeedbackTableRaw;