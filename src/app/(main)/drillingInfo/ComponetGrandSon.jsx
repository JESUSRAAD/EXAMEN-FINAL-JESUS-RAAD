

const ComponetGrandSon = ({x, incrementX}) => {


    return (
        <div className="border-[2px] border-black p-2">
          <h2 className="text-xl">ComponentC</h2>
          <p>x = {x}</p>
          <button
          className="flex justify-center items-center bg-blue-400 text-white  rounded-xl px-2 py-1" 
          onClick={incrementX}>
            x++
          </button>
        </div>
      );
    }

export default ComponetGrandSon