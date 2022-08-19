module.exports = {
    getLang(req, res){
        const headerLangsPT = {
            "lang": "pt",
            "slogan": "Compre sem complicações",
            "plSearch": "Pesquisar...",
            "whoWeAre": "Quem nos somos?",
            "accountArea": "A minha area",
            "hoverCart": "Têns __QTDITENS__ items no teu carrinho",
            "homeMenu": "Página Inicial",
            "ticketMenu": "Bilhetes",
            "storesMenu": "Lojas",
            "helpMenu": "Ajuda"
        };
        const headerLangsEN = {
            "lang": "en",
            "slogan": "Buy hassle free",
            "plSearch": "Search...",
            "whoWeAre": "Who we are?",
            "accountArea": "My account",
            "hoverCart": "You have __QTDITENS__ items on your cart",
            "homeMenu": "Home",
            "ticketMenu": "Tickets",
            "storesMenu": "Stores",
            "helpMenu": "Help"
        };
        const footerLangsPT = {
            "footerMaps": "Mapa",
            "footerCart": "O meu carrinho",
            "footerTermsAndConds": "Termos e condições",
            "footerExchanges": "Trocas e devoluções",
            "footerAtend": "Contatos",
            "footerPayMethod": "Metodos de Pagamento",
            "payMethodCard": "Cartão de debito/credito via GPay",
            "payMethodMbWay": "MbWay (Verificação Manual)",
            "payMethodBank": "Transferência bancaria",
            "payMethodCarrier": "Operadoras (__CARRIERS__) via GPay",
            "footerSocial": "Redes Sociais",
            "copyright": "Site criado na"
        };
        const footerLangsEN = {
            "footerMaps": "Map",
            "footerCart": "My Cart",
            "footerTermsAndConds": "Terms and Conditions",
            "footerExchanges": "Exchanges and returns",
            "footerAtend": "Contact us",
            "footerPayMethod": "Payment Methods",
            "payMethodCard": "Debit/credit card via GPay",
            "payMethodMbWay": "MbWay (Manual Verification)",
            "payMethodBank": "Bank Transfer",
            "payMethodCarrier": "Carrier (__CARRIERS__) via GPay",
            "footerSocial": "Social Networks",
            "copyright": "Website created at"
        };
        if(req.params.context === "home" && req.params.lang === "pt"){
            return res.status(200).json({
                "footer": footerLangsPT,
                "header": headerLangsPT,
                "sliderSlFirst": "Pagamentos fáceis e seguros",
                "sliderSlSecond": "Somos 100% transparentes",
                "sliderSlThird": "Video técnicos no YouTube",
                "mostEventsTl": "Os eventos mais visitados",
                "mostStoresTl": "As lojas mais visitadas"
            });
        }
        if(req.params.context === "home" && req.params.lang === "en"){
            return res.status(200).json({
                "footer": footerLangsEN,
                "header": headerLangsEN,
                "sliderSlFirst": "Easy and secure payments",
                "sliderSlSecond": "We are 100% transparent",
                "sliderSlThird": "Technical videos on YouTube",
                "mostEventsTl": "The most visited events",
                "mostStoresTl": "The most visited stores"
            });
        }
        if(req.params.context === "login" && req.params.lang === "pt"){
            return res.status(200).json({
                "footer": footerLangsPT,
                "header": headerLangsPT,
                "idTitle": "Identificação",
                "userlbl": "Utilizador",
                "passlbl": "Password",
                "lblacctype": "Tipo de conta",
                "clientTp": "Cliente",
                "lojisTp": "Lojista",
                "eventsTp": "Eventos",
                "forgotPass": "Esqueceu a sua password?",
                "btnStartSession": "Iniciar Sessão",
                "createAcct": "Ainda não têm conta? Crie uma!"
            });
        }
        if(req.params.context === "login" && req.params.lang === "en"){
            return res.status(200).json({
                "footer": footerLangsEN,
                "header": headerLangsEN,
                "idTitle": "Authentication",
                "userlbl": "Username",
                "passlbl": "Palavra-passe",
                "lblacctype": "Account Type",
                "clientTp": "Client",
                "lojisTp": "Shopkeeper",
                "eventsTp": "Events",
                "forgotPass": "Forgot your password?",
                "btnStartSession": "Login",
                "createAcct": "Don't have an account yet? Create one!"
            });
        }
        if(req.params.context === "not-found-page" && req.params.lang === "pt"){
            return res.status(200).json({
                "footer": footerLangsPT,
                "header": headerLangsPT,
                "imgError": "Erro 404",
                "notFoundTxt": "A página que procuras não existe!",
                "btnBack": "Voltar para a Página Inicial"
            });
        }
        if(req.params.context === "not-found-page" && req.params.lang === "en"){
            return res.status(200).json({
                "footer": footerLangsEN,
                "header": headerLangsEN,
                "imgError": "404 Error",
                "notFoundTxt": "The page you are looking for does not exist!",
                "btnBack": "Back to Home Page"
            });
        }
        if(req.params.context === "account" && req.params.lang === "pt"){
            return res.status(200).json({
                "footer": footerLangsPT,
                "header": headerLangsPT,
                "menTitle": "Menu",
                "tickMenOpt": "Os meus bilhetes",
                "orderMenOpt": "As minha encomendas",
                "fatsMenOpt": "Faturas",
                "addrMenOpt": "Moradas",
                "confMenOpt": "Configurações",
                "endSessMenOpt": "Terminar sessão"
            });
        }
        if(req.params.context === "account" && req.params.lang === "en"){
            return res.status(200).json({
                "footer": footerLangsEN,
                "header": headerLangsEN,
                "menTitle": "Menu",
                "tickMenOpt": "My Tickets",
                "orderMenOpt": "My Orders",
                "fatsMenOpt": "Invoices",
                "addrMenOpt": "Addresses",
                "confMenOpt": "Settings",
                "endSessMenOpt": "Logout"
            });
        }
        if(req.params.context === "tickets" && req.params.lang === "pt"){
            return res.status(200).json({
                "ticketTitle": "Os meus bilhetes",
                "conserWarm": "Pense antes de imprimir! Pode apresentar os bilhetes de forma digital.",
                "ticketTitle": "Dados do Bilhete",
                "lblname": "Nome:",
                "lbllocal": "Local:",
                "lblvalidtk": "Bilhetes válidos:",
                "lblrestrict": "Restrições:",
                "lbldate": "Data:",
                "lblduraction": "Duração:",
                "lvlViewTk": "Ver bilhete(s)",
                "lvldate": "__DATE__ às __HOUR__"
            });
        }
        if(req.params.context === "tickets" && req.params.lang === "en"){
            return res.status(200).json({
                "ticketTitle": "My Tickets",
                "conserWarm": "Think before you print! You can present your tickets digitally.",
                "ticketTitle": "Ticket Data",
                "lblname": "Name:",
                "lbllocal": "Location:",
                "lblvalidtk": "Valid tickets:",
                "lblrestrict": "Restrictions:",
                "lbldate": "Date:",
                "lblduraction": "Duration:",
                "lvlViewTk": "View ticket(s)",
                "lvldate": "__DATE__ at __HOUR__"
            });
        }
        if(req.params.context === "cart" && req.params.lang === "pt"){
            return res.status(200).json({
                "footer": footerLangsPT,
                "header": headerLangsPT
            });
        }
        if(req.params.context === "cart" && req.params.lang === "en"){
            return res.status(200).json({
                "footer": footerLangsEN,
                "header": headerLangsEN
            });
        }
        return res.status(404).json({
            "message": "Context or language not found"
        });
    }
};