function DisplayCard({ children, className = "" }) {
  return (
    <section
      className={`section px-4 md:px-[30px] grid place-items-center ${className}`}
    >
      {children}
      <section className="fixed inset-0 z-10 pointer-events-none">
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "109px",
            backgroundRepeat: "repeat",
            backgroundImage:
              "url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png)",
            opacity: 0.09,
            borderRadius: "0px",
          }}
        ></div>
      </section>
    </section>
  );
}
export default DisplayCard;
