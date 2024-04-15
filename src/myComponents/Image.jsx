import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Image = () => {
  const [imageSrc, setimageSrc] = useState();
  const { toast } = useToast();

  function handleChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.onload = function (event) {
        setimageSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleShowToast() {
    let cal = prompt("what is cal", "");
    if (Number(cal) === 10) {
      toast({
        title: "Success",
        description: "Caal is 10",
      });
    } else {
      toast({
        title: "error",
        description: "calis not 10 but" + cal,
      });
    }
  }
  return (
    <div>
      <input type="file" onChange={handleChange} />
      <img className="w-20 h-20 rounded-full" src={imageSrc} alt="" />

      <Button onClick={handleShowToast}>Show Toast</Button>
    </div>
  );
};

export default Image;
