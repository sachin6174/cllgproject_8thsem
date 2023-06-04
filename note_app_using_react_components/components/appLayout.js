import { HeaderComponent } from "./header"
import  {BodyComponent} from "./body"
import { FooterComponent } from "./footer"
import SignUpSignIn from "./SignUpSignIn"

module.exports.AppLayoutComponent =()=>{   
        return(
            <>
                <SignUpSignIn/>
                <HeaderComponent user_name="Demo"/>
                < BodyComponent/>
                <FooterComponent/>
           </>
        )
    }
