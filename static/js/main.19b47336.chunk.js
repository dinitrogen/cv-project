(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var n=i(2),s=i.n(n),a=i(10),c=i.n(a),d=(i(15),i(16),i(3)),r=i(4),l=i(1),o=i(6),h=i(5),b=i(7),u=(i(9),i(0)),j=function(e){Object(o.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(d.a)(this,i),(n=t.call(this,e)).state={name:"",address:"",phone:"",isSubmitted:!1},n.handleChange=n.handleChange.bind(Object(l.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n.handleEditClicked=n.handleEditClicked.bind(Object(l.a)(n)),n}return Object(r.a)(i,[{key:"handleChange",value:function(e){var t=e.target,i=t.value,n=t.name;this.setState(Object(b.a)({},n,i))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({isSubmitted:!0})}},{key:"handleEditClicked",value:function(){this.setState({isSubmitted:!1})}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[!this.state.isSubmitted&&Object(u.jsxs)("form",{className:"editForm",onSubmit:this.handleSubmit,children:[Object(u.jsxs)("label",{children:["Name:",Object(u.jsx)("input",{name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{children:["Address:",Object(u.jsx)("input",{name:"address",type:"text",value:this.state.address,onChange:this.handleChange})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{children:["Phone:",Object(u.jsx)("input",{name:"phone",type:"text",value:this.state.phone,onChange:this.handleChange})]}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]}),this.state.isSubmitted&&Object(u.jsxs)("div",{className:"subSectionDiv",children:[this.state.name,Object(u.jsx)("br",{}),this.state.address,Object(u.jsx)("br",{}),this.state.phone,Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"editButton",onClick:this.handleEditClicked,children:"Edit"})]})]})}}]),i}(n.Component),m=function(e){Object(o.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(d.a)(this,i),(n=t.call(this,e)).state={name:"",address:"",isSubmitted:!1},n.handleChange=n.handleChange.bind(Object(l.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n.handleEditClicked=n.handleEditClicked.bind(Object(l.a)(n)),n}return Object(r.a)(i,[{key:"handleChange",value:function(e){var t=e.target,i=t.value,n=t.name;this.setState(Object(b.a)({},n,i))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({isSubmitted:!0})}},{key:"handleEditClicked",value:function(){this.setState({isSubmitted:!1})}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{children:[!this.state.isSubmitted&&Object(u.jsxs)("form",{className:"editForm",onSubmit:this.handleSubmit,children:[Object(u.jsxs)("label",{children:["Name:",Object(u.jsx)("input",{name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{children:["Address:",Object(u.jsx)("input",{name:"address",type:"text",value:this.state.address,onChange:this.handleChange})]}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]}),this.state.isSubmitted&&Object(u.jsxs)("div",{className:"subSectionDiv",children:["Name: ",this.state.name,Object(u.jsx)("br",{}),"Address: ",this.state.address,Object(u.jsx)("br",{}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"editButton",onClick:this.handleEditClicked,children:"Edit"}),Object(u.jsx)("button",{className:"editButton",onClick:function(){return e.props.handleDelete(e.props.type,e.props.id)},children:"Delete"})]})]})]})}}]),i}(n.Component),O=function(e){Object(o.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(d.a)(this,i),(n=t.call(this,e)).state={name:"",address:"",isSubmitted:!1},n.handleChange=n.handleChange.bind(Object(l.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n.handleEditClicked=n.handleEditClicked.bind(Object(l.a)(n)),n}return Object(r.a)(i,[{key:"handleChange",value:function(e){var t=e.target,i=t.value,n=t.name;this.setState(Object(b.a)({},n,i))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({isSubmitted:!0})}},{key:"handleEditClicked",value:function(){this.setState({isSubmitted:!1})}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{children:[!this.state.isSubmitted&&Object(u.jsxs)("form",{className:"editForm",onSubmit:this.handleSubmit,children:[Object(u.jsxs)("label",{children:["Name:",Object(u.jsx)("input",{name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{children:["Address:",Object(u.jsx)("input",{name:"address",type:"text",value:this.state.address,onChange:this.handleChange})]}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]}),this.state.isSubmitted&&Object(u.jsxs)("div",{className:"subSectionDiv",children:["Name: ",this.state.name,Object(u.jsx)("br",{}),"Address: ",this.state.address,Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"editButton",onClick:this.handleEditClicked,children:"Edit"}),Object(u.jsx)("button",{className:"editButton",onClick:function(){return e.props.handleDelete(e.props.type,e.props.id)},children:"Delete"})]})]})}}]),i}(n.Component),x=(i(18),function(e){Object(o.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(d.a)(this,i),(n=t.call(this,e)).state={schoolForms:[],experienceForms:[],schoolForm:{id:1},experienceForm:{id:1},inPreviewMode:!1},n.addSchoolForm=n.addSchoolForm.bind(Object(l.a)(n)),n.addExperienceForm=n.addExperienceForm.bind(Object(l.a)(n)),n.handleDelete=n.handleDelete.bind(Object(l.a)(n)),n.showPreviewMode=n.showPreviewMode.bind(Object(l.a)(n)),n.hidePreviewMode=n.hidePreviewMode.bind(Object(l.a)(n)),n.generatePDF=n.generatePDF.bind(Object(l.a)(n)),n}return Object(r.a)(i,[{key:"addSchoolForm",value:function(e){var t=this.state.schoolForms,i=this.state.schoolForm.id;i++,this.setState({schoolForms:t.concat(Object(u.jsx)(m,{type:"education",id:this.state.schoolForm.id,handleDelete:this.handleDelete},this.state.schoolForm.id)),schoolForm:{id:i}})}},{key:"addExperienceForm",value:function(e){var t=this.state.experienceForms,i=this.state.experienceForm.id;i++,this.setState({experienceForms:t.concat(Object(u.jsx)(O,{type:"experience",id:this.state.experienceForm.id,handleDelete:this.handleDelete},this.state.experienceForm.id)),experienceForm:{id:i}})}},{key:"handleDelete",value:function(e,t){if("education"===e){var i=this.state.schoolForms.filter((function(e){return e.props.id!==t}));this.setState({schoolForms:i})}else{var n=this.state.experienceForms.filter((function(e){return e.props.id!==t}));this.setState({experienceForms:n})}}},{key:"showPreviewMode",value:function(){this.setState({inPreviewMode:!0}),document.querySelectorAll(".editButton").forEach((function(e){e.style.display="none"})),document.querySelectorAll(".editForm").forEach((function(e){e.style.display="none"}))}},{key:"hidePreviewMode",value:function(){this.setState({inPreviewMode:!1}),document.querySelectorAll(".editButton").forEach((function(e){e.style.display="inline",e.style.marginLeft="auto",e.style.marginRight="auto"})),document.querySelectorAll(".editForm").forEach((function(e){e.style.display="block"}))}},{key:"generatePDF",value:function(){}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"CVcontainer",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Personal Info:"}),Object(u.jsx)("div",{className:"CVFormDiv",children:Object(u.jsx)(j,{inPreviewMode:this.state.inPreviewMode})}),Object(u.jsx)("br",{}),Object(u.jsx)("h2",{children:"Education:"}),Object(u.jsx)("button",{className:"editButton",onClick:this.addSchoolForm,children:"Add School"}),Object(u.jsx)("div",{className:"CVFormDiv",children:this.state.schoolForms.map((function(e){return e}))}),Object(u.jsx)("br",{}),Object(u.jsx)("h2",{children:"Experience:"}),Object(u.jsx)("button",{className:"editButton",onClick:this.addExperienceForm,children:"Add Experience"}),Object(u.jsx)("div",{className:"CVFormDiv",children:this.state.experienceForms.map((function(e){return e}))}),Object(u.jsx)("br",{}),!this.state.inPreviewMode&&Object(u.jsx)("button",{onClick:this.showPreviewMode,children:"Show preview"})]}),this.state.inPreviewMode&&Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:this.hidePreviewMode,children:"Show edit mode"}),Object(u.jsx)("br",{})]})]})}}]),i}(n.Component));var v=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(x,{})})},p=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,20)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;i(e),n(e),s(e),a(e),c(e)}))};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),p()},9:function(e,t,i){}},[[19,1,2]]]);
//# sourceMappingURL=main.19b47336.chunk.js.map