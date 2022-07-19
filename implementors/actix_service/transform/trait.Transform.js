(function() {var implementors = {};
implementors["actix_cors"] = [{"text":"impl&lt;S, B&gt; Transform&lt;S, ServiceRequest&gt; for <a class=\"struct\" href=\"actix_cors/struct.Cors.html\" title=\"struct actix_cors::Cors\">Cors</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Service&lt;ServiceRequest, Response = ServiceResponse&lt;B&gt;, Error = Error&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: MessageBody + 'static,&nbsp;</span>","synthetic":false,"types":["actix_cors::builder::Cors"]}];
implementors["actix_identity"] = [{"text":"impl&lt;S, B&gt; Transform&lt;S, ServiceRequest&gt; for <a class=\"struct\" href=\"actix_identity/struct.IdentityMiddleware.html\" title=\"struct actix_identity::IdentityMiddleware\">IdentityMiddleware</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Service&lt;ServiceRequest, Response = ServiceResponse&lt;B&gt;, Error = Error&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: MessageBody + 'static,&nbsp;</span>","synthetic":false,"types":["actix_identity::middleware::IdentityMiddleware"]}];
implementors["actix_limitation"] = [{"text":"impl&lt;S, B&gt; Transform&lt;S, ServiceRequest&gt; for <a class=\"struct\" href=\"actix_limitation/struct.RateLimiter.html\" title=\"struct actix_limitation::RateLimiter\">RateLimiter</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Service&lt;ServiceRequest, Response = ServiceResponse&lt;B&gt;, Error = Error&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: 'static,&nbsp;</span>","synthetic":false,"types":["actix_limitation::middleware::RateLimiter"]}];
implementors["actix_session"] = [{"text":"impl&lt;S, B, Store&gt; Transform&lt;S, ServiceRequest&gt; for <a class=\"struct\" href=\"actix_session/struct.SessionMiddleware.html\" title=\"struct actix_session::SessionMiddleware\">SessionMiddleware</a>&lt;Store&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Service&lt;ServiceRequest, Response = ServiceResponse&lt;B&gt;, Error = Error&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: MessageBody + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Store: <a class=\"trait\" href=\"actix_session/storage/trait.SessionStore.html\" title=\"trait actix_session::storage::SessionStore\">SessionStore</a> + 'static,&nbsp;</span>","synthetic":false,"types":["actix_session::middleware::SessionMiddleware"]}];
implementors["actix_web_httpauth"] = [{"text":"impl&lt;S, B, T, F, O&gt; Transform&lt;S, ServiceRequest&gt; for <a class=\"struct\" href=\"actix_web_httpauth/middleware/struct.HttpAuthentication.html\" title=\"struct actix_web_httpauth::middleware::HttpAuthentication\">HttpAuthentication</a>&lt;T, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Service&lt;ServiceRequest, Response = ServiceResponse&lt;B&gt;, Error = Error&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(ServiceRequest, T) -&gt; O + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;ServiceRequest, (Error, ServiceRequest)&gt;&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_web_httpauth/extractors/trait.AuthExtractor.html\" title=\"trait actix_web_httpauth::extractors::AuthExtractor\">AuthExtractor</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: MessageBody + 'static,&nbsp;</span>","synthetic":false,"types":["actix_web_httpauth::middleware::HttpAuthentication"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()