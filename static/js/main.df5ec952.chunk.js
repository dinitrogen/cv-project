(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(2),i=n.n(s),a=n(9),c=n.n(a),d=(n(14),n(15),n(3)),r=n(4),h=n(1),l=n(6),b=n(5),o=n(7),j=n(0),u=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={name:"",address:"",phone:"",isSubmitted:!1},s.handleChange=s.handleChange.bind(Object(h.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(h.a)(s)),s.handleEditClicked=s.handleEditClicked.bind(Object(h.a)(s)),s}return Object(r.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.value,s=t.name;this.setState(Object(o.a)({},s,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({isSubmitted:!0})}},{key:"handleEditClicked",value:function(){this.setState({isSubmitted:!1})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:["Personal info:",Object(j.jsx)("br",{}),!this.state.isSubmitted&&Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{children:["Name:",Object(j.jsx)("input",{name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{children:["Address:",Object(j.jsx)("input",{name:"address",type:"text",value:this.state.address,onChange:this.handleChange})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{children:["Phone:",Object(j.jsx)("input",{name:"phone",type:"text",value:this.state.phone,onChange:this.handleChange})]}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"submit",value:"Submit"})]}),this.state.isSubmitted&&Object(j.jsxs)("div",{children:["Name: ",this.state.name,Object(j.jsx)("br",{}),"Address: ",this.state.address,Object(j.jsx)("br",{}),"Phone: ",this.state.phone,Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:this.handleEditClicked,children:"Edit"})]})]})}}]),n}(s.Component),m=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(d.a)(this,n),s=t.call(this,e),console.log(e),s.state={name:"",address:"",isSubmitted:!1},s.handleChange=s.handleChange.bind(Object(h.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(h.a)(s)),s.handleEditClicked=s.handleEditClicked.bind(Object(h.a)(s)),s}return Object(r.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.value,s=t.name;this.setState(Object(o.a)({},s,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({isSubmitted:!0})}},{key:"handleEditClicked",value:function(){this.setState({isSubmitted:!1})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{children:["School Info:",Object(j.jsx)("br",{}),!this.state.isSubmitted&&Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{children:["Name:",Object(j.jsx)("input",{name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{children:["Address:",Object(j.jsx)("input",{name:"address",type:"text",value:this.state.address,onChange:this.handleChange})]}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"submit",value:"Submit"})]}),this.state.isSubmitted&&Object(j.jsxs)("div",{children:["Name: ",this.state.name,Object(j.jsx)("br",{}),"Address: ",this.state.address,Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:this.handleEditClicked,children:"Edit"}),Object(j.jsx)("button",{onClick:function(){return e.props.handleDelete(e.props.type,e.props.id)},children:"Delete"})]})]})}}]),n}(s.Component),O=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(d.a)(this,n),s=t.call(this,e),console.log(e),s.state={name:"",address:"",isSubmitted:!1},s.handleChange=s.handleChange.bind(Object(h.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(h.a)(s)),s.handleEditClicked=s.handleEditClicked.bind(Object(h.a)(s)),s}return Object(r.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.value,s=t.name;this.setState(Object(o.a)({},s,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({isSubmitted:!0})}},{key:"handleEditClicked",value:function(){this.setState({isSubmitted:!1})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{children:["Employer Info:",Object(j.jsx)("br",{}),!this.state.isSubmitted&&Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{children:["Name:",Object(j.jsx)("input",{name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{children:["Address:",Object(j.jsx)("input",{name:"address",type:"text",value:this.state.address,onChange:this.handleChange})]}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"submit",value:"Submit"})]}),this.state.isSubmitted&&Object(j.jsxs)("div",{children:["Name: ",this.state.name,Object(j.jsx)("br",{}),"Address: ",this.state.address,Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:this.handleEditClicked,children:"Edit"}),Object(j.jsx)("button",{onClick:function(){return e.props.handleDelete(e.props.type,e.props.id)},children:"Delete"})]})]})}}]),n}(s.Component),x=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={schoolForms:[],experienceForms:[],schoolForm:{id:1},experienceForm:{id:1}},s.addSchoolForm=s.addSchoolForm.bind(Object(h.a)(s)),s.addExperienceForm=s.addExperienceForm.bind(Object(h.a)(s)),s.handleDelete=s.handleDelete.bind(Object(h.a)(s)),s}return Object(r.a)(n,[{key:"addSchoolForm",value:function(e){var t=this.state.schoolForms,n=this.state.schoolForm.id;n++,this.setState({schoolForms:t.concat(Object(j.jsx)(m,{type:"education",id:this.state.schoolForm.id,handleDelete:this.handleDelete},this.state.schoolForm.id)),schoolForm:{id:n}})}},{key:"addExperienceForm",value:function(e){var t=this.state.experienceForms,n=this.state.experienceForm.id;n++,this.setState({experienceForms:t.concat(Object(j.jsx)(O,{type:"experience",id:this.state.experienceForm.id,handleDelete:this.handleDelete},this.state.experienceForm.id)),experienceForm:{id:n}})}},{key:"handleDelete",value:function(e,t){if("education"===e){var n=this.state.schoolForms.filter((function(e){return e.props.id!==t}));this.setState({schoolForms:n})}else{var s=this.state.experienceForms.filter((function(e){return e.props.id!==t}));this.setState({experienceForms:s})}}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:this.addSchoolForm,children:"Add School"}),Object(j.jsx)("div",{className:"schoolsDiv",children:this.state.schoolForms.map((function(e){return e}))}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:this.addExperienceForm,children:"Add Experience"}),Object(j.jsx)("div",{className:"experienceDiv",children:this.state.experienceForms.map((function(e){return e}))})]})}}]),n}(s.Component);var p=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(x,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),a(e),c(e)}))};c.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.df5ec952.chunk.js.map