module.exports = [
"[project]/app/gallery/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GalleryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
;
function GalleryPage() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Dynamically import Flip to avoid build issues
        __turbopack_context__.A("[project]/node_modules/gsap/dist/Flip.js [app-ssr] (ecmascript, async loader)").then(({ Flip })=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(Flip);
            const items = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.toArray(".gallery-item");
            const details = document.querySelector('.gallery-detail');
            const detailContent = document.querySelector('.gallery-content');
            const detailImage = document.querySelector('.gallery-detail img');
            const detailTitle = document.querySelector('.gallery-detail .gallery-title');
            const detailSecondary = document.querySelector('.gallery-detail .gallery-secondary');
            const detailDescription = document.querySelector('.gallery-detail .gallery-description');
            let activeItem;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(detailContent, {
                yPercent: -100
            });
            function showDetails(item) {
                if (activeItem) {
                    return hideDetails();
                }
                // Prevent background scrolling
                document.body.style.overflow = 'hidden';
                let onLoad = ()=>{
                    Flip.fit(details, item, {
                        scale: true,
                        fitChild: detailImage
                    });
                    const state = Flip.getState(details);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(details, {
                        clearProps: true
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(details, {
                        xPercent: -50,
                        top: "50%",
                        yPercent: -50,
                        visibility: "visible",
                        overflow: "hidden"
                    });
                    Flip.from(state, {
                        duration: 0.5,
                        ease: "power2.inOut",
                        scale: true,
                        onComplete: ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(details, {
                                overflow: "auto"
                            });
                        }
                    }).to(detailContent, {
                        yPercent: 0
                    }, 0.2);
                    detailImage?.removeEventListener("load", onLoad);
                    document.addEventListener('click', hideDetails);
                };
                const data = item.dataset;
                if (detailImage && detailTitle && detailSecondary && detailDescription) {
                    detailImage.addEventListener("load", onLoad);
                    detailImage.src = item.querySelector('img')?.src || '';
                    detailTitle.innerText = data.title || '';
                    detailSecondary.innerText = data.secondary || '';
                    detailDescription.innerText = data.text || '';
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(items, {
                    opacity: 0.3,
                    stagger: {
                        amount: 0.7,
                        from: items.indexOf(item),
                        grid: "auto"
                    }
                }).kill(item);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(".gallery-app", {
                    backgroundColor: "#64748b",
                    duration: 1,
                    delay: 0.3
                });
                activeItem = item;
            }
            function hideDetails() {
                document.removeEventListener('click', hideDetails);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(details, {
                    overflow: "hidden"
                });
                // Restore background scrolling
                document.body.style.overflow = '';
                const state = Flip.getState(details);
                Flip.fit(details, activeItem, {
                    scale: true,
                    fitChild: detailImage
                });
                const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
                tl.set(details, {
                    overflow: "hidden"
                }).to(detailContent, {
                    yPercent: -100
                }).to(items, {
                    opacity: 1,
                    stagger: {
                        amount: 0.7,
                        from: items.indexOf(activeItem),
                        grid: "auto"
                    }
                }).to(".gallery-app", {
                    backgroundColor: "#fff"
                }, "<");
                Flip.from(state, {
                    scale: true,
                    duration: 0.5,
                    delay: 0.2,
                    onInterrupt: ()=>{
                        tl.kill();
                    }
                }).set(details, {
                    visibility: "hidden"
                });
                activeItem = null;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.toArray('.gallery-item').forEach((item)=>item.addEventListener('click', ()=>showDetails(item)));
        });
        return ()=>{
            const items = document.querySelectorAll('.gallery-item');
            items.forEach((item)=>{
                const newItem = item.cloneNode(true);
                item.parentNode?.replaceChild(newItem, item);
            });
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-8ec8b4716665b23a" + " " + "gallery-page-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "8ec8b4716665b23a",
                children: '.gallery-page-container.jsx-8ec8b4716665b23a{color:#1e293b;background:#fff;min-height:100vh;padding:0;font-family:Lato,sans-serif;font-size:14px}.gallery-app.jsx-8ec8b4716665b23a{background:#fff;width:100vw;min-height:100vh;position:relative;overflow:auto}.gallery-grid.jsx-8ec8b4716665b23a{grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;max-width:1400px;margin:0 auto;padding:40px 60px;display:grid}.gallery-item.jsx-8ec8b4716665b23a{cursor:pointer;border-radius:8px;font-size:0;transition:transform .3s,box-shadow .3s;overflow:hidden;box-shadow:0 4px 6px -1px #0000001a}.gallery-item.jsx-8ec8b4716665b23a:hover{transform:translateY(-5px);box-shadow:0 10px 25px -3px #0000001a}.gallery-item.jsx-8ec8b4716665b23a img.jsx-8ec8b4716665b23a{object-fit:cover;width:100%;height:250px;transition:transform .3s;display:block}.gallery-item.jsx-8ec8b4716665b23a:hover img.jsx-8ec8b4716665b23a{transform:scale(1.05)}.gallery-detail.jsx-8ec8b4716665b23a{cursor:pointer;visibility:hidden;z-index:1000;border-radius:12px;flex-direction:column;width:90vw;max-width:1000px;max-height:90vh;font-size:0;display:flex;position:fixed;top:10px;left:50%;overflow:auto;box-shadow:0 25px 50px -12px #00000040}.gallery-detail.jsx-8ec8b4716665b23a>img.jsx-8ec8b4716665b23a{z-index:1;width:100%;height:auto;position:relative}.gallery-content.jsx-8ec8b4716665b23a{box-sizing:border-box;background:#fff;border-top:1px solid #e2e8f0;flex-grow:1;padding:2rem 1.5rem;font-size:1rem}.gallery-content.jsx-8ec8b4716665b23a>.jsx-8ec8b4716665b23a{margin-bottom:1rem}.gallery-title.jsx-8ec8b4716665b23a{text-transform:uppercase;color:#1e293b;font-size:2rem;font-weight:700}.gallery-secondary.jsx-8ec8b4716665b23a{color:#64748b;font-size:1.1rem;font-weight:500}.gallery-description.jsx-8ec8b4716665b23a{color:#475569;font-size:1rem;line-height:1.6}.gallery-header.jsx-8ec8b4716665b23a{color:#1e293b;text-align:center;background:#fff;border-bottom:1px solid #e2e8f0;padding:60px 40px;position:relative;overflow:hidden}.gallery-header.jsx-8ec8b4716665b23a:before{content:"";opacity:.3;background:url("data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 100 100\\"><defs><pattern id=\\"grain\\" width=\\"100\\" height=\\"100\\" patternUnits=\\"userSpaceOnUse\\"><circle cx=\\"25\\" cy=\\"25\\" r=\\"1\\" fill=\\"rgba(30,41,59,0.05)\\"/><circle cx=\\"75\\" cy=\\"75\\" r=\\"1\\" fill=\\"rgba(30,41,59,0.05)\\"/><circle cx=\\"50\\" cy=\\"10\\" r=\\"0.5\\" fill=\\"rgba(30,41,59,0.03)\\"/><circle cx=\\"20\\" cy=\\"80\\" r=\\"0.5\\" fill=\\"rgba(30,41,59,0.03)\\"/></pattern></defs><rect width=\\"100\\" height=\\"100\\" fill=\\"url(%23grain)\\"/></svg>");position:absolute;inset:0}.gallery-header-content.jsx-8ec8b4716665b23a{z-index:1;max-width:800px;margin:0 auto;position:relative}.gallery-main-title.jsx-8ec8b4716665b23a{color:#1e293b;text-shadow:none;margin-bottom:.5rem;font-size:3rem;font-weight:800}.gallery-subtitle.jsx-8ec8b4716665b23a{color:#64748b;margin-bottom:0;font-family:Devanagari,serif;font-size:1.8rem;font-weight:600}@media (width<=768px){.gallery-header.jsx-8ec8b4716665b23a{padding:40px 20px}.gallery-main-title.jsx-8ec8b4716665b23a{font-size:2.2rem}.gallery-subtitle.jsx-8ec8b4716665b23a{font-size:1.4rem}.gallery-grid.jsx-8ec8b4716665b23a{padding:40px 30px}}@media (width<=480px){.gallery-grid.jsx-8ec8b4716665b23a{padding:40px 20px}}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-8ec8b4716665b23a" + " " + "gallery-app",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8ec8b4716665b23a" + " " + "gallery-header",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-8ec8b4716665b23a" + " " + "gallery-header-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "jsx-8ec8b4716665b23a" + " " + "gallery-main-title",
                                    children: "Our Gallery"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-8ec8b4716665b23a" + " " + "gallery-subtitle",
                                    children: "हाम्रो ग्यालरी"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/gallery/page.tsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/gallery/page.tsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8ec8b4716665b23a" + " " + "gallery-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Women Empowerment Program",
                                "data-secondary": "सशक्तिकरण कार्यक्रम",
                                "data-text": "ग्रामीण नारी उत्थान संघ हरिपुरले महिलाहरूको सशक्तिकरणका लागि विभिन्न कार्यक्रमहरू सञ्चालन गर्दै आएको छ। यी कार्यक्रमहरूले महिलाहरूलाई आर्थिक रूपमा स्वावलम्बी बनाउन मद्दत गर्छ।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
                                    alt: "Women Empowerment",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 299,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Skill Development Training",
                                "data-secondary": "सीप विकास तालिम",
                                "data-text": "हाम्रो संस्थाले ग्रामीण महिलाहरूलाई विभिन्न सीपहरू सिकाउने कार्यक्रम सञ्चालन गर्छ। यसमा सिलाई, बुनाई, कृषि र व्यवसायिक सीपहरू समावेश छन्।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
                                    alt: "Skill Training",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Community Development",
                                "data-secondary": "समुदायिक विकास",
                                "data-text": "समुदायिक विकासका लागि हामीले स्थानीय समुदायसँग मिलेर काम गर्छौं। यसले समुदायमा सकारात्मक परिवर्तन ल्याउन मद्दत गर्छ।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
                                    alt: "Community Development",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 305,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Education Programs",
                                "data-secondary": "शिक्षा कार्यक्रम",
                                "data-text": "शिक्षाको क्षेत्रमा हामीले साक्षरता कक्षा, बाल शिक्षा र वयस्क शिक्षाका कार्यक्रमहरू सञ्चालन गर्छौं। यसले समुदायमा शिक्षाको स्तर बढाउँछ।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
                                    alt: "Education Programs",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Health Awareness",
                                "data-secondary": "स्वास्थ्य चेतना",
                                "data-text": "स्वास्थ्य चेतना कार्यक्रमअन्तर्गत हामीले मातृ स्वास्थ्य, बाल स्वास्थ्य र सामान्य स्वास्थ्य सम्बन्धी जानकारी प्रदान गर्छौं।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
                                    alt: "Health Awareness",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Agricultural Support",
                                "data-secondary": "कृषि सहयोग",
                                "data-text": "कृषि क्षेत्रमा आधुनिक प्रविधि र उन्नत बीउ बिजनका बारेमा जानकारी दिएर किसानहरूलाई सहयोग गर्छौं।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
                                    alt: "Agricultural Support",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Microfinance Program",
                                "data-secondary": "लघुवित्त कार्यक्रम",
                                "data-text": "महिलाहरूको आर्थिक सशक्तिकरणका लागि लघुवित्त कार्यक्रम सञ्चालन गर्छौं। यसले उनीहरूलाई सानो व्यवसाय सुरु गर्न मद्दत गर्छ।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
                                    alt: "Microfinance",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Cooperative Formation",
                                "data-secondary": "सहकारी गठन",
                                "data-text": "महिला सहकारी संस्थाहरूको गठन र सञ्चालनमा सहयोग गर्छौं। यसले सामूहिक रूपमा काम गर्न प्रेरणा दिन्छ।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop",
                                    alt: "Cooperative",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Leadership Training",
                                "data-secondary": "नेतृत्व विकास",
                                "data-text": "महिला नेतृत्व विकासका लागि विशेष तालिम कार्यक्रम सञ्चालन गर्छौं। यसले महिलाहरूलाई नेतृत्व क्षमता विकास गर्न मद्दत गर्छ।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                                    alt: "Leadership Training",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 323,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Digital Literacy",
                                "data-secondary": "डिजिटल साक्षरता",
                                "data-text": "आजको डिजिटल युगमा महिलाहरूलाई कम्प्युटर र इन्टरनेटको प्रयोग सिकाउने कार्यक्रम सञ्चालन गर्छौं।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
                                    alt: "Digital Literacy",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 325,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Nutrition Program",
                                "data-secondary": "पोषण कार्यक्रम",
                                "data-text": "मातृ र शिशु पोषणका बारेमा जानकारी दिने र पोषणयुक्त खाना पकाउने तरिका सिकाउने कार्यक्रम सञ्चालन गर्छौं।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
                                    alt: "Nutrition Program",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 328,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Environmental Conservation",
                                "data-secondary": "वातावरण संरक्षण",
                                "data-text": "वातावरण संरक्षणका लागि वृक्षारोपण, फोहोर व्यवस्थापन र सफाई अभियान जस्ता कार्यक्रमहरू सञ्चालन गर्छौं।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
                                    alt: "Environment",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Youth Development",
                                "data-secondary": "युवा विकास",
                                "data-text": "युवाहरूको क्षमता विकास र रोजगारीका अवसर सिर्जना गर्ने कार्यक्रमहरू सञ्चालन गर्छौं।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=300&fit=crop",
                                    alt: "Youth Development",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 335,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Disaster Preparedness",
                                "data-secondary": "विपद् तयारी",
                                "data-text": "प्राकृतिक विपदका समयमा समुदायलाई तयार राख्न र राहत कार्यमा सहयोग गर्ने कार्यक्रम सञ्चालन गर्छौं।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
                                    alt: "Disaster Preparedness",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 338,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Cultural Preservation",
                                "data-secondary": "संस्कृति संरक्षण",
                                "data-text": "स्थानीय संस्कृति, भाषा र परम्पराको संरक्षण र प्रवर्धनका लागि विभिन्न कार्यक्रमहरू आयोजना गर्छौं।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop",
                                    alt: "Cultural Preservation",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 340,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Legal Awareness",
                                "data-secondary": "कानुनी चेतना",
                                "data-text": "महिला अधिकार र कानुनी जानकारीका बारेमा चेतना फैलाउने कार्यक्रम सञ्चालन गर्छौं।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
                                    alt: "Legal Awareness",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 343,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Handicraft Training",
                                "data-secondary": "हस्तकला तालिम",
                                "data-text": "परम्परागत हस्तकला र आधुनिक डिजाइनको तालिम दिएर महिलाहरूलाई आर्थिक रूपमा सशक्त बनाउँछौं।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=300&fit=crop",
                                    alt: "Handicraft",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 347,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Water & Sanitation",
                                "data-secondary": "पानी र सरसफाइ",
                                "data-text": "स्वच्छ खानेपानी र सरसफाइका बारेमा जानकारी दिने र सम्बन्धित पूर्वाधार निर्माणमा सहयोग गर्छौं।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
                                    alt: "Water Sanitation",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 350,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Community Events",
                                "data-secondary": "सामुदायिक कार्यक्रम",
                                "data-text": "समुदायिक एकताका लागि विभिन्न सांस्कृतिक र सामाजिक कार्यक्रमहरू आयोजना गर्छौं।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop",
                                    alt: "Community Events",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 353,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Success Stories",
                                "data-secondary": "सफलताका कथा",
                                "data-text": "हाम्रा कार्यक्रमबाट लाभान्वित भएका महिलाहरूका प्रेरणादायक सफलताका कथाहरू साझा गर्छौं।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
                                    alt: "Success Stories",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 356,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Partnership Programs",
                                "data-secondary": "साझेदारी कार्यक्रम",
                                "data-text": "अन्य संस्थाहरूसँग साझेदारी गरेर सञ्चालन गरिने विभिन्न विकास कार्यक्रमहरूको तस्बिरहरू।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop",
                                    alt: "Partnership",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 359,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 358,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Volunteer Activities",
                                "data-secondary": "स्वयंसेवक गतिविधि",
                                "data-text": "स्वयंसेवकहरूको सहयोगमा सञ्चालन हुने विभिन्न सामुदायिक सेवाका गतिविधिहरू।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
                                    alt: "Volunteer Activities",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Training Workshops",
                                "data-secondary": "तालिम कार्यशाला",
                                "data-text": "विभिन्न विषयहरूमा आयोजना गरिने तालिम कार्यशालाहरूका तस्बिरहरू र सहभागीहरूका अनुभवहरू।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
                                    alt: "Training Workshops",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 365,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-title": "Annual Programs",
                                "data-secondary": "वार्षिक कार्यक्रम",
                                "data-text": "हरेक वर्ष आयोजना गरिने विशेष कार्यक्रमहरू र उत्सवहरूका यादगार क्षणहरू।",
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
                                    alt: "Annual Programs",
                                    className: "jsx-8ec8b4716665b23a"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/page.tsx",
                                    lineNumber: 368,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 367,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gallery/page.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/gallery/page.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-8ec8b4716665b23a" + " " + "gallery-detail",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        alt: "",
                        className: "jsx-8ec8b4716665b23a"
                    }, void 0, false, {
                        fileName: "[project]/app/gallery/page.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8ec8b4716665b23a" + " " + "gallery-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-title",
                                children: "Placeholder title"
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 376,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-secondary",
                                children: "Placeholder secondary"
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 377,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8ec8b4716665b23a" + " " + "gallery-description",
                                children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/page.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gallery/page.tsx",
                        lineNumber: 375,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/gallery/page.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/gallery/page.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_gallery_page_tsx_08dd9cd6._.js.map