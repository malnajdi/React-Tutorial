const LoginPage = () => {
    return (
        <section>
            <div className="row gtr-200">
                <div className="col-6 col-12-medium">
                    <h3>Register</h3>
                    <form method="post" action="#">
                        <div className="row gtr-uniform box">
                            <div className="col-12 col-12-xsmall">
                                <input type="text" name="username" id="username" value="" placeholder="Username" />
                            </div>
                            <div className="col-12 col-12-xsmall">
                                <input type="password" name="password" id="password" value="" placeholder="Password" />
                            </div>
                            <div className="col-12 col-12-xsmall">
                                <input type="password" name="password1" id="password1" value="" placeholder="Repeat Password" />
                            </div>
                            <div className="col-12 col-12-xsmall">
                                <a href="#" className="button primary">Register</a>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-6 col-12-medium">
                    <h3>Login</h3>
                    <form method="post" action="#">
                        <div className="row gtr-uniform box">
                            <div className="col-12 col-12-xsmall">
                                <input type="text" name="username" id="username" value="" placeholder="Username" />
                            </div>
                            <div className="col-12 col-12-xsmall">
                                <input type="password" name="password" id="password" value="" placeholder="Password" />
                            </div>
                            <div className="col-12 col-12-xsmall">
                                <a href="#" className="button primary">Login</a>
                            </div>                                    
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}


export default LoginPage;