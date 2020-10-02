(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{362:function(e,a,t){"use strict";t.r(a);var s=t(42),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"track-base-image-update-from-any-azure-container-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#track-base-image-update-from-any-azure-container-registry"}},[e._v("#")]),e._v(" Track base image update from any Azure Container Registry")]),e._v(" "),t("p",[e._v("ACR Tasks supports automated builds for when a container's base iamge is updated. Previously, these automated builds were supported for base images in public repositories, such as DockerHub, or from base images from a task's home registry. Now ACR Tasks can also track base image updates from another ACR than the task's. This base image registry can be "),t("strong",[e._v("any Azure Container Registry, anywhere in the world")]),e._v(", even geo-replicated. This tutorial combines much of the steps seen in the existing tutorials for "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/container-registry/container-registry-tutorial-base-image-update",target:"_blank",rel:"noopener noreferrer"}},[e._v("base image update"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/container-registry/container-registry-tasks-cross-registry-authentication",target:"_blank",rel:"noopener noreferrer"}},[e._v("cross-registry auth"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h1",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("p",[e._v("In this tutorial you will need to first create two registries in different regions.")]),e._v(" "),t("ul",[t("li",[e._v("The first registry ("),t("code",[e._v("homeRegistry")]),e._v(") will be used to create and execute a task. Create this registry in West US.")]),e._v(" "),t("li",[e._v("The second registry ("),t("code",[e._v("baseRegistry")]),e._v(") will host a base image that will be used by the task to build an image. Create this registry in East US.")])]),e._v(" "),t("h2",{attrs:{id:"prepare-base-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare-base-registry"}},[e._v("#")]),e._v(" Prepare Base Registry")]),e._v(" "),t("p",[e._v("Fork the repo https://github.com/Azure-Samples/acr-build-helloworld-node.git")]),e._v(" "),t("p",[e._v("In the current directory build and push the base image to the base registry")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az acr build --image baseimages/node:9-alpine --registry baseRegistry --file Dockerfile-base .\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"create-a-task-that-tracks-the-private-base-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-task-that-tracks-the-private-base-image"}},[e._v("#")]),e._v(" Create a task that tracks the private base image")]),e._v(" "),t("p",[e._v("Create a task in the home registry with a system-assigned identity. This task depends on the base image built above.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az acr task create \\\n  --registry homeRegistry \\\n  --name hometask \\\n  --image helloworld:v2 \\\n  --context https://github.com/$GIT_USER/acr-build-helloworld-node.git \\\n  --file Dockerfile-app \\\n  --git-access-token $GIT_PAT \\\n  --arg REGISTRY_NAME=baseRegistry.azurecr.io \\\n  --assign-identity\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("h2",{attrs:{id:"give-the-identity-pull-permissions-to-the-base-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#give-the-identity-pull-permissions-to-the-base-registry"}},[e._v("#")]),e._v(" Give the identity pull permissions to the base registry")]),e._v(" "),t("p",[e._v("You must grand the managed identity pull permission to the base image registry.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("principalID=$(az acr task show --name hometask --registry homeRegistry --query identity.principalId --output tsv)\nbaseregID=$(az acr show --name baseRegistry --query id --output tsv)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("Only allow the task to pull images from the base image registry.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az role assignment create --assignee $principalID --scope $baseregID --role acrpull\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"add-target-registry-credentials-to-the-task"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-target-registry-credentials-to-the-task"}},[e._v("#")]),e._v(" Add target registry credentials to the task")]),e._v(" "),t("p",[e._v("Add a custom registry credential to the task so that it can authenticate to the base image registry.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az acr task credential add \\\n  --name hometask \\\n  --registry homeRegistry \\\n  --login-server baseRegistry.azurecr.io \\\n  --use-identity [system]\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("h2",{attrs:{id:"manually-run-the-task"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manually-run-the-task"}},[e._v("#")]),e._v(" Manually run the task")]),e._v(" "),t("p",[e._v("You must run a task first in order to track the private base image.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az acr task run --registry homeRegistry --name hometask\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"update-the-base-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-the-base-image"}},[e._v("#")]),e._v(" Update the base image")]),e._v(" "),t("p",[e._v('Here you simulate a framework patch in the base image. Edit Dockerfile-base, and add an "a" after the version number defined in NODE_VERSION:\n'),t("code",[e._v("ENV NODE_VERSION 9.11.2a")])]),e._v(" "),t("p",[e._v("Now build and push the updated base image to the base registry.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az acr build --registry baseRegistry --image baseimages/node:9-alpine --file Dockerfile-base .\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"list-the-updated-build"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-the-updated-build"}},[e._v("#")]),e._v(" List the updated build")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az acr task list-runs --registry homeRegistry --name hometask -o table\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);