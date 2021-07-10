const LoginPage = () => {
    return (
        <section>
            <div class="row gtr-200">
                <div class="col-6 col-12-medium">
                    <h3>Register</h3>
                    <form method="post" action="#">
                        <div class="row gtr-uniform box">
                            <div class="col-12 col-12-xsmall">
                                <input type="text" name="username" id="username" value="" placeholder="Username" />
                            </div>
                            <div class="col-12 col-12-xsmall">
                                <input type="password" name="password" id="password" value="" placeholder="Password" />
                            </div>
                            <div class="col-12 col-12-xsmall">
                                <input type="password" name="password1" id="password1" value="" placeholder="Repeat Password" />
                            </div>
                            <div class="col-12 col-12-xsmall">
                                <a href="#" class="button primary">Register</a>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-6 col-12-medium">
                    <h3>Login</h3>
                    <form method="post" action="#">
                        <div class="row gtr-uniform box">
                            <div class="col-12 col-12-xsmall">
                                <input type="text" name="username" id="username" value="" placeholder="Username" />
                            </div>
                            <div class="col-12 col-12-xsmall">
                                <input type="password" name="password" id="password" value="" placeholder="Password" />
                            </div>
                            <div class="col-12 col-12-xsmall">
                                <a href="#" class="button primary">Login</a>
                            </div>                                    
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}


export default LoginPage;