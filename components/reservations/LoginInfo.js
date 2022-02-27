const LoginInfo = ({ setIsModalOpen }) => {
    return (
        <section className="h-auto bg-camel/30 rounded-sm w-80 text-sm p-5 lg:w-2/3 lg:mx-auto sm:w-11/12">
            <div className="flex flex-col space-y-3">
                <h6>Login for faster booking and reservations management</h6>
                <button onClick={() => setIsModalOpen('login')} type="button" className="self-end text-sm rounded font-light tracking-wider text-snow px-5 py-2 transition-all border border-jungle/30 hover:border-jungle/60 bg-moss/70 hover:bg-moss/60">
                    Login
                </button>
            </div>
            <hr className="bg-jungle/20 h-0.5 mx-2 my-5 sm:my-2" />
            <p>Having an account offer easy managing or cancelling your bookings and simplify future bookings.</p>
        </section>
    )
}

export default LoginInfo
