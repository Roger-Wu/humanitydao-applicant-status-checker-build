(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,a){e.exports=a(314)},129:function(e,t,a){},164:function(e,t){},166:function(e,t){},193:function(e,t){},238:function(e,t){},312:function(e,t,a){},314:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(116),r=a.n(o),i=(a(129),a(121)),p=a(15),l=a.n(p),u=a(30),c=a(117),m=a(118),y=a(122),d=a(119),b=a(123),v=a(120),h=a(59),f=a(60),E=a(42),w=a.n(E),g=function(){return new Promise(function(e,t){window.addEventListener("load",Object(u.a)(l.a.mark(function a(){var n,s,o,r;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.ethereum){a.next=13;break}return n=new w.a(window.ethereum),a.prev=2,a.next=5,window.ethereum.enable();case 5:e(n),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(2),t(a.t0);case 11:a.next=14;break;case 13:window.web3?(s=window.web3,console.log("Injected web3 detected."),e(s)):(o=new w.a.providers.HttpProvider("https://mainnet.infura.io/v3/"),r=new w.a(o),console.log("Using infura's Ethereum API."),e(r));case 14:case"end":return a.stop()}},a,this,[[2,8]])})))})},x=(a(312),function(e,t){return e?s.a.createElement("span",{className:"text-success"},t):s.a.createElement("span",{className:"text-danger"},t)}),N={0:s.a.createElement("span",{className:"text-info"},"Pending"),1:s.a.createElement("span",{className:"text-success"},"Yes"),2:s.a.createElement("span",{className:"text-danger"},"No")},M=function(e){return s.a.createElement("a",{href:"https://etherscan.io/address/".concat(e),target:"_blank",rel:"noopener noreferrer"},e)},k=function(e){var t="".concat(e.substring(0,8),"...");return s.a.createElement("a",{href:"https://etherscan.io/tx/".concat(e),target:"_blank",rel:"noopener noreferrer"},t)},I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(y.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={web3:null,accounts:null,humanityRegistryContract:null,humanityGovernanceContract:null,proposalIdText:"",proposal:null,voteEvents:[],removeVoteEvents:[],isSearching:!1},a.componentDidMount=Object(u.a)(l.a.mark(function e(){var t,n,s,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g();case 3:return t=e.sent,e.next=6,t.eth.getAccounts();case 6:n=e.sent,1,s=new t.eth.Contract(h.abi,h.networks[1].address),o=new t.eth.Contract(f.abi,f.networks[1].address),a.setState({web3:t,accounts:n,humanityRegistryContract:s,humanityGovernanceContract:o}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert("Failed to load web3, accounts, or contract. Check console for details."),console.error(e.t0);case 17:case"end":return e.stop()}},e,this,[[0,13]])})),a.fetchProposalState=Object(u.a)(l.a.mark(function e(){var t,n,s,o,r,p,u,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.proposalIdText,t.humanityRegistryContract,s=t.humanityGovernanceContract,a.setState({isSearching:!0}),e.prev=2,e.next=5,Promise.all([s.methods.getProposal(n).call(),s.getPastEvents("Vote",{filter:{proposalId:n},fromBlock:7723872}),s.getPastEvents("RemoveVote",{filter:{proposalId:n},fromBlock:7723872})]);case 5:o=e.sent,r=Object(i.a)(o,3),p=r[0],u=r[1],c=r[2],console.log("proposal",p),console.log("voteEvents",u),console.log("removeVoteEvents",c),a.setState({isSearching:!1,proposal:p,voteEvents:u,removeVoteEvents:c}),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(2),console.error(e.t0),alert("Wrong Proposal ID."),a.setState({isSearching:!1});case 21:case"end":return e.stop()}},e,this,[[2,16]])})),a.handleProposalIdTextChange=function(e){a.setState({proposalIdText:e.target.value})},a.handleSearch=function(e){e.preventDefault(),a.fetchProposalState()},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this.state,a=t.web3,n=t.proposal,o=t.voteEvents,r=t.removeVoteEvents,i=t.isSearching;return a?s.a.createElement("div",{className:"App"},s.a.createElement("nav",{className:"navbar navbar-light bg-light"},s.a.createElement("span",{className:"navbar-brand mb-0 h1"},"HumanityDAO Applicant Status Checker")),s.a.createElement("div",{className:"container pt-3 pb-3"},s.a.createElement("form",{onSubmit:this.handleSearch,className:"form-inline justify-content-center mb-5"},s.a.createElement("input",{type:"text",pattern:"\\d*",className:"form-control",value:this.state.proposalIdText,onChange:this.handleProposalIdTextChange,placeholder:"Proposal ID"}),s.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Search"})),i&&s.a.createElement("div",{className:"spinner-grow",role:"status"},s.a.createElement("span",{className:"sr-only"},"Loading...")),n&&s.a.createElement("div",{className:"mb-3"},s.a.createElement("h3",null,"Proposal"),s.a.createElement("table",{className:"table"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{className:"bg-gray"},"Applicant"),s.a.createElement("td",null,M(n.feeRecipient))),s.a.createElement("tr",null,s.a.createElement("td",{className:"bg-gray"},"Starting Time"),s.a.createElement("td",null,v.unix(parseInt(n.startTime)).format("MMM DD YYYY HH:mm:ss Z"))),s.a.createElement("tr",null,s.a.createElement("td",{className:"bg-gray"},"Votes (Yes / No)"),s.a.createElement("td",null,x(!0,a.utils.fromWei(n.yesCount))," / ",x(!1,a.utils.fromWei(n.noCount)))),s.a.createElement("tr",null,s.a.createElement("td",{className:"bg-gray"},"Result"),s.a.createElement("td",null,(e=n.result,N[e])))))),o.length>0&&s.a.createElement("div",{className:"mb-3"},s.a.createElement("h3",null,"Votes"),s.a.createElement("table",{className:"table"},s.a.createElement("thead",{className:"thead-light"},s.a.createElement("tr",null,s.a.createElement("th",null,"TX"),s.a.createElement("th",null,"Voter"),s.a.createElement("th",null,"Voted for"),s.a.createElement("th",null,"Weight"))),s.a.createElement("tbody",null,o.map(function(e,t){var n=e.returnValues;return s.a.createElement("tr",{key:"vote-event-"+t},s.a.createElement("td",null,k(e.transactionHash)),s.a.createElement("td",null,M(n.voter)),s.a.createElement("td",null,n.approve?s.a.createElement("span",{className:"text-success"},"Yes"):s.a.createElement("span",{className:"text-danger"},"No")),s.a.createElement("td",null,x(n.approve,a.utils.fromWei(n.weight))))})))),r.length>0&&s.a.createElement("div",{className:"mb-3"},s.a.createElement("h3",null,"Removed Votes"),s.a.createElement("table",{className:"table"},s.a.createElement("thead",{className:"thead-light"},s.a.createElement("tr",null,s.a.createElement("th",null,"TX"),s.a.createElement("th",null,"Voter"))),s.a.createElement("tbody",null,r.map(function(e,t){var a=e.returnValues;return s.a.createElement("tr",{key:"vote-event-"+t},s.a.createElement("td",null,k(e.transactionHash)),s.a.createElement("td",null,M(a.voter)))}))))),s.a.createElement("footer",{className:"footer bg-light"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"text-muted"},s.a.createElement("a",{href:"https://github.com/Roger-Wu/humanitydao-applicant-status-checker",target:"_blank",rel:"noopener noreferrer"},"Source Code on GitHub")),s.a.createElement("div",{className:"text-muted"},"Donate ETH or tokens: ",M("0x36fAa1e49fF125ac72ceae0d5a2E35bC9aDD6591"))))):s.a.createElement("div",null,"Loading Web3, accounts, and contract...")}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e){e.exports={contractName:"HumanityRegistry",abi:[{constant:!1,inputs:[{name:"who",type:"address"}],name:"add",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"who",type:"address"}],name:"remove",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"humanity",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"governance",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"humans",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"who",type:"address"}],name:"isHuman",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"_humanity",type:"address"},{name:"_governance",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"}],networks:{1:{name:"Mainnet",address:"0x4EE46dc4962C2c2F6bcd4C098a0E2b28f66A5E90"}}}},60:function(e){e.exports={contractName:"HumanityGovernance",abi:[{constant:!0,inputs:[{name:"",type:"uint256"}],name:"proposals",outputs:[{name:"result",type:"uint8"},{name:"target",type:"address"},{name:"data",type:"bytes"},{name:"proposer",type:"address"},{name:"feeRecipient",type:"address"},{name:"fee",type:"uint256"},{name:"startTime",type:"uint256"},{name:"yesCount",type:"uint256"},{name:"noCount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"proposalId",type:"uint256"}],name:"finalize",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"},{name:"",type:"address"}],name:"yesVotes",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"fee",type:"uint256"}],name:"setProposalFee",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"time",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"proposalId",type:"uint256"}],name:"voteNo",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"proposalId",type:"uint256"}],name:"removeVote",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"OPEN_VOTE_PERIOD",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"proposalId",type:"uint256"}],name:"voteYes",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"TOTAL_VOTE_PERIOD",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getProposalsCount",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"target",type:"address"},{name:"data",type:"bytes"}],name:"propose",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"void",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"withdrawTimes",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"deposit",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"proposalFee",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"proposalId",type:"uint256"}],name:"getProposal",outputs:[{components:[{name:"result",type:"uint8"},{name:"target",type:"address"},{name:"data",type:"bytes"},{name:"proposer",type:"address"},{name:"feeRecipient",type:"address"},{name:"fee",type:"uint256"},{name:"startTime",type:"uint256"},{name:"yesCount",type:"uint256"},{name:"noCount",type:"uint256"}],name:"",type:"tuple"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"},{name:"",type:"address"}],name:"noVotes",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"feeRecipient",type:"address"},{name:"target",type:"address"},{name:"data",type:"bytes"}],name:"proposeWithFeeRecipient",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"VETO_PERIOD",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"token",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"deposits",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"humanity",type:"address"},{name:"proposalFee",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"proposalId",type:"uint256"}],name:"Execute",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"proposalId",type:"uint256"},{indexed:!0,name:"proposer",type:"address"},{indexed:!0,name:"target",type:"address"},{indexed:!1,name:"data",type:"bytes"}],name:"Propose",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"proposalId",type:"uint256"},{indexed:!0,name:"voter",type:"address"}],name:"RemoveVote",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"proposalId",type:"uint256"}],name:"Terminate",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"proposalId",type:"uint256"},{indexed:!0,name:"voter",type:"address"},{indexed:!1,name:"approve",type:"bool"},{indexed:!1,name:"weight",type:"uint256"}],name:"Vote",type:"event"}],networks:{1:{name:"Mainnet",address:"0xDd806c4fDAd2949a97Fda79036cfbb8750181b37"}}}}},[[124,2,1]]]);
//# sourceMappingURL=main.3d10cb65.chunk.js.map