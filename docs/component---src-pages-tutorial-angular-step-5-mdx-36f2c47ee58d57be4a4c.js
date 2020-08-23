(window.webpackJsonp=window.webpackJsonp||[]).push([[2080],{PkG3:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return f}));n("3bBZ"),n("q1tI");var a=n("7ljp"),o=n("013z"),i=n("V8m9");n("qKvR");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)},p=c("PageDescription"),b=c("AnchorLinks"),u=c("AnchorLink"),d=c("InlineNotification"),m={_frontmatter:l},h=o.a;function f(e){let{components:t}=e,n=r(e,["components"]);return Object(a.b)(h,s({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(p,{mdxType:"PageDescription"},Object(a.b)("p",null,"This step takes what we’ve built so far and optimizes the app for a production\nenvironment. We’ll be deploying the production build to IBM Cloud.")),Object(a.b)(b,{mdxType:"AnchorLinks"},Object(a.b)(u,{mdxType:"AnchorLink"},"Fork, clone and branch"),Object(a.b)(u,{mdxType:"AnchorLink"},"Create IBM Cloud account"),Object(a.b)(u,{mdxType:"AnchorLink"},"Optimize Sass"),Object(a.b)(u,{mdxType:"AnchorLink"},"Build for production"),Object(a.b)(u,{mdxType:"AnchorLink"},"Create manifest file"),Object(a.b)(u,{mdxType:"AnchorLink"},"Create static file"),Object(a.b)(u,{mdxType:"AnchorLink"},"Deploy app"),Object(a.b)(u,{mdxType:"AnchorLink"},"Submit pull request")),Object(a.b)("h2",null,"Preview"),Object(a.b)("p",null,"A ",Object(a.b)("a",s({parentName:"p"},{href:"https://angular-step-6-carbon-tutorial.netlify.com"}),"preview")," of what you’ll\nbuild (visually no different, but built for production):"),Object(a.b)(i.a,{height:"400",title:"Carbon Angular Tutorial Step 5",src:"https://angular-step-6-carbon-tutorial.netlify.com",frameBorder:"no",allowtransparency:"true",allowFullScreen:"true",mdxType:"Preview"}),Object(a.b)("h2",null,"Fork, clone and branch"),Object(a.b)("p",null,"This tutorial has an accompanying GitHub repository called\n",Object(a.b)("a",s({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon-tutorial-angular"}),"carbon-tutorial-angular"),"\nthat we’ll use as a starting point for each step. If you haven’t forked and\ncloned that repository yet, and haven’t added the upstream remote, go ahead and\ndo so by following the\n",Object(a.b)("a",s({parentName:"p"},{href:"/tutorial/angular/step-1#fork-clone--branch"}),"step 1 instructions"),"."),Object(a.b)("h3",null,"Branch"),Object(a.b)("p",null,"With your repository all set up, let’s check out the branch for this tutorial\nstep’s starting point."),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-bash"}),"git fetch upstream\ngit checkout -b angular-step-5 upstream/angular-step-5\n")),Object(a.b)(d,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," This builds on top of step 4, but be sure to check out the upstream\nstep 5 branch because it includes the static assets required to get through this\nstep.")),Object(a.b)("h3",null,"Build and start app"),Object(a.b)("p",null,"Install the app’s dependencies (in case you’re starting fresh in your current\ndirectory and not continuing from the previous step):"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-bash"}),"npm install\n")),Object(a.b)("p",null,"Then, start the app:"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-bash"}),"npm start\n")),Object(a.b)("p",null,"You should see something similar to where the\n",Object(a.b)("a",s({parentName:"p"},{href:"/tutorial/angular/step-4"}),"previous step")," left off."),Object(a.b)("h2",null,"Create IBM Cloud account"),Object(a.b)("p",null,"Before we get started,\n",Object(a.b)("a",s({parentName:"p"},{href:"https://cloud.ibm.com/registration"}),"create an IBM Cloud account")," if you don’t\nalready have one, as we’ll be deploying there in a bit."),Object(a.b)("h2",null,"Optimize Sass"),Object(a.b)("p",null,"So far we’ve been developing in a, well, development environment where static\nasset optimization hasn’t been a priority. If you reference ",Object(a.b)("inlineCode",{parentName:"p"},"/src/styles.scss"),",\nyou’ll see one ",Object(a.b)("inlineCode",{parentName:"p"},"@import")," that is pulling in Carbon’s full Sass build."),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-scss",metastring:"path=src/styles.scss",path:"src/styles.scss"}),'@import "~carbon-components/scss/globals/scss/styles";\n')),Object(a.b)("p",null,"To give you an idea of what’s all included, open up\n",Object(a.b)("inlineCode",{parentName:"p"},"node_modules/carbon-components/scss/globals/scss/styles.scss"),". You’ll see\nimports for components like accordion, slider, tooltip, etc. Since we aren’t\nusing those components, let’s exclude them from our built stylesheets. Keeping\nthe ",Object(a.b)("inlineCode",{parentName:"p"},"$feature-flags")," Sass map, and ",Object(a.b)("inlineCode",{parentName:"p"},"carbon-overrides.scss"),", replace the\n",Object(a.b)("inlineCode",{parentName:"p"},"styles.scss")," import with:"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-scss",metastring:"path=src/styles.scss",path:"src/styles.scss"}),'// Feature flags\n$css--font-face: true;\n$css--plex: true;\n\n// Global styles\n@import "~carbon-components/scss/globals/scss/css--font-face";\n@import "~carbon-components/scss/globals/grid/grid";\n\n// Carbon components\n@import "~carbon-components/scss/components/breadcrumb/breadcrumb";\n@import "~carbon-components/scss/components/button/button";\n@import "~carbon-components/scss/components/data-table/data-table";\n@import "~carbon-components/scss/components/link/link";\n@import "~carbon-components/scss/components/pagination/pagination";\n@import "~carbon-components/scss/components/tabs/tabs";\n@import "~carbon-components/scss/components/ui-shell/ui-shell";\n')),Object(a.b)("p",null,"Looking at the new ",Object(a.b)("inlineCode",{parentName:"p"},"styles.scss")," file, you may be asking what happened to\nimporting ",Object(a.b)("inlineCode",{parentName:"p"},"_vars.scss"),", ",Object(a.b)("inlineCode",{parentName:"p"},"_colors.scss"),", ",Object(a.b)("inlineCode",{parentName:"p"},"_theme.scss"),", etc.? Many of those\nglobal Sass partials get imported through the components. For example, open\n",Object(a.b)("inlineCode",{parentName:"p"},"node_modules/carbon-components/scss/components/button/_button.scss")," to see its\ndependencies. No harm in importing them as ",Object(a.b)("inlineCode",{parentName:"p"},"styles.scss")," does, but for\nsimplicity here, we’ll let the components pull them in."),Object(a.b)("p",null,"You can read more about optimizing Carbon’s Sass in the\n",Object(a.b)("a",s({parentName:"p"},{href:"https://medium.com/carbondesign/minimal-css-with-carbon-b0c089ccfa71"}),"Carbon Design System publication"),"\non Medium."),Object(a.b)("h2",null,"Build for production"),Object(a.b)("p",null,"Before we deploy our app, we need to create an optimized production build with\nthis command. You may need to ",Object(a.b)("inlineCode",{parentName:"p"},"CTRL-C")," to stop the development environment\nfirst."),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-bash"}),"npm run build\n")),Object(a.b)("p",null,"Looking at ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),", you’ll find ",Object(a.b)("inlineCode",{parentName:"p"},"yarn build")," to run ",Object(a.b)("inlineCode",{parentName:"p"},"ng build"),". This\nbuilds the app for production to the ",Object(a.b)("inlineCode",{parentName:"p"},"dist")," folder. It bundles Angular in\nproduction mode and optimizes the build for the best performance. It even goes\nso far to minify files and include hashes in filenames for caching."),Object(a.b)("p",null,"As a lot of this may seem like magic since the build configuration came from\nCreate React App, go ahead and check out their\n",Object(a.b)("a",s({parentName:"p"},{href:"https://facebook.github.io/create-react-app/docs/production-build"}),"production build guidelines"),"\nfor a full description of what’s happening."),Object(a.b)("h2",null,"Create manifest file"),Object(a.b)("p",null,"Now that we have a production build, let’s get it on the cloud. We’re going to\nuse\n",Object(a.b)("a",s({parentName:"p"},{href:"https://github.com/cloudfoundry/staticfile-buildpack.git"}),"staticfile-buildpack"),"\nto deploy our webapp. Since this is a Cloud Foundry buildpack, we’ll be using\nthe ",Object(a.b)("inlineCode",{parentName:"p"},"cf")," command line interface (CLI). If running ",Object(a.b)("inlineCode",{parentName:"p"},"cf --help")," doesn’t work for\nyou, chances are you need to\n",Object(a.b)("a",s({parentName:"p"},{href:"https://docs.cloudfoundry.org/cf-cli/install-go-cli.html"}),"install the CLI"),"."),Object(a.b)(d,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," If unfamiliar with buildpacks, the\n",Object(a.b)("a",s({parentName:"p"},{href:"https://docs.cloudfoundry.org/buildpacks/staticfile/index.html"}),"staticfile buildpack docs"),"\nhas good definitions and configuration documentation.")),Object(a.b)("p",null,"With the Cloud Foundry CLI installed, next, we need to create a ",Object(a.b)("inlineCode",{parentName:"p"},"manifest.yml"),"\nfile in the root of the project. To prevent multiple apps trying to use the\n",Object(a.b)("inlineCode",{parentName:"p"},"carbon-tutorial-angular")," name, replace ",Object(a.b)("inlineCode",{parentName:"p"},"USERNAME")," with your GitHub username\nbelow to make sure our apps are uniquely named."),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-bash",metastring:"path=manifest.yml",path:"manifest.yml"}),"---\napplications:\n  - name: carbon-tutorial-angular-USERNAME\n    memory: 64M\n    buildpack: https://github.com/cloudfoundry/staticfile-buildpack.git\n")),Object(a.b)(d,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," With this set-up we’re still using a GitHub personal access token\nsaved in ",Object(a.b)("inlineCode",{parentName:"p"},".env.local"),". If you haven’t created a GitHub access token yet, see\n",Object(a.b)("a",s({parentName:"p"},{href:"/tutorial/react/step-3#create-access-token"}),"step 3"),". You can put the\nenvironment variable in the manifest file, or manually add it in the IBM Cloud\ndashboard, but since we’re building off previous tutorial steps nothing more is\nneeded.")),Object(a.b)("h2",null,"Create static file"),Object(a.b)("p",null,"Create a new static file in the root of the project named ",Object(a.b)("inlineCode",{parentName:"p"},"Staticfile"),". This\ntells the app to deploy from the ",Object(a.b)("inlineCode",{parentName:"p"},"dist")," folder and not the root of the project."),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-bash",metastring:"path=Staticfile",path:"Staticfile"}),"root: dist\n")),Object(a.b)("h3",null,"Cloud Foundry ignore"),Object(a.b)("p",null,"After telling Cloud Foundry what to include, we can also specify what to ignore.\nCreate a top-level ",Object(a.b)("inlineCode",{parentName:"p"},".cfignore")," file. Cloud Foundry doesn’t let you push\nread-only files (specifically, files with permissions <",Object(a.b)("inlineCode",{parentName:"p"},"400"),"), so to prevent\nissues with the deploy, add:"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-bash",metastring:"path=.cfignore",path:".cfignore"}),"node_modules/.cache\n")),Object(a.b)("p",null,"You can speed up deploys by decreasing the files uploaded through cloud foundry.\nTo accomplish this, ignore any folder not required by the production application\non IBM Cloud. For example, in the case of serving static files, you can ignore\n",Object(a.b)("inlineCode",{parentName:"p"},"node_modules/")," and ",Object(a.b)("inlineCode",{parentName:"p"},"src/")," because the only folder being served is ",Object(a.b)("inlineCode",{parentName:"p"},"build/"),"."),Object(a.b)("h2",null,"Deploy app"),Object(a.b)("p",null,"Login to IBM Cloud with:"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-bash"}),"cf login -a https://api.ng.bluemix.net -sso\n")),Object(a.b)("p",null,"Deploy app using the ",Object(a.b)("inlineCode",{parentName:"p"},"cf push")," command. Since ",Object(a.b)("inlineCode",{parentName:"p"},"manifest.yml")," is in our root\ndirectory, we don’t need to specify it in the push command. But, if you have\nmultiple manifest files that target different environments, it’s good practice\nto specify the file."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Note: To successfully deploy, you might need to update the region code (e.g.\n",Object(a.b)("inlineCode",{parentName:"em"},"api.[REGION].bluemix.net"),").\n",Object(a.b)("a",s({parentName:"em"},{href:"https://developer.ibm.com/answers/answers/166990/view.html"}),"Learn more."))),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-bash"}),"cf push -f manifest.yml\n")),Object(a.b)("p",null,"To make it easy on ourselves by not needing to remember that command, let’s add\na script in ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),". We can combine the build and deploy steps to make\nsure we only deploy immediately after running the build. In the ",Object(a.b)("inlineCode",{parentName:"p"},'"scripts"'),"\nobject in ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),", add:"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-bash",metastring:"path=package.json",path:"package.json"}),'"deploy": "rm -rf ./dist && yarn build && cf push -f manifest.yml"\n')),Object(a.b)("p",null,"Next time you want to deploy, you can simply run ",Object(a.b)("inlineCode",{parentName:"p"},"yarn deploy"),"."),Object(a.b)("h2",null,"Submit pull request"),Object(a.b)("p",null,"That does it! We’re going to submit a pull request to verify completion of this\ntutorial step. In doing so, ",Object(a.b)("strong",{parentName:"p"},"please include the mybluemix.net URL for your\ndeployed app in your pull request description"),"."),Object(a.b)("h3",null,"Git commit and push"),Object(a.b)("p",null,"Before we can create a pull request, stage and commit all of your changes:"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-bash"}),'git add --all && git commit -m "feat(tutorial): complete step 5"\n')),Object(a.b)("p",null,"Then, push to your repository:"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-bash"}),"git push origin angular-step-5\n")),Object(a.b)(d,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," Having issues pushing your changes?\n",Object(a.b)("a",s({parentName:"p"},{href:"/tutorial/angular/step-1#git-commit-and-push"}),"Step 1")," has troubleshooting notes\nthat may help.")),Object(a.b)("h3",null,"Pull request (PR)"),Object(a.b)("p",null,"Finally, visit\n",Object(a.b)("a",s({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon-tutorial-angular"}),"carbon-tutorial-angular"),"\nto “Compare & pull request”. In doing so, make sure that you are comparing to\n",Object(a.b)("inlineCode",{parentName:"p"},"angular-step-5")," into ",Object(a.b)("inlineCode",{parentName:"p"},"base: angular-step-5"),"."),Object(a.b)(d,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," Expect your tutorial step PRs to be reviewed by the Carbon team but\nnot merged. We’ll close your PR so we can keep the repository’s remote branches\npristine and ready for the next person!")))}f.isMDXComponent=!0}}]);