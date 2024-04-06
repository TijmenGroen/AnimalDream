import Logo from "/assets/img/animaldreamlogo.png";

function Navigation() {
  return (
    <div className="flex justify-between p-6 font-semibold text-black text-xl">
      <div className="flex justify-start basis-full">
        <img src={Logo} alt="logo" className="w-12 float-left translate-y-[-3px] mr-4" />Animal Dream
      </div>
      <div className="flex justify-between basis-1/2">
        <a href="">Products</a>
        <a href="">Cart</a>
        <a href="">About</a>
      </div>
      <div className="flex justify-end basis-full">
        <a href="">Log In</a>
      </div>
    </div>
  );
}

export default Navigation;
