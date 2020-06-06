{"changed":true,"filter":false,"title":"Header.js","tooltip":"/client/src/Components/Header.js","value":"import React, { Component } from 'react';\nimport { Navbar, Nav, NavItem, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';\nimport { LinkContainer } from \"react-router-bootstrap\";\nimport { Route, Redirect } from 'react-router'\nimport { conditionalExpression } from \"babel-types\";\nimport { SET_DETAILS, setUserDetails } from '../Actions'\nimport { store } from '../Store'\n\n\nconst Header = (props) => {\n\n\t{\n\n\t\tconsole.log(\"Rendering Header\")\n\t\tconst firstName = store.getState().firstName;\n\n\t\tlet greeting = 'Hello User, Plesae Sign In'\n\n\t\tif (firstName != \"\") {\n\t\t\tgreeting = \"Welcome, \" + firstName;\n\t\t}\n\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<Navbar bg=\"light\" expand=\"lg\" fixed=\"top\" >\n\t\t\t\t  <LinkContainer to=\"/app\">\n\t\t\t\t  <Navbar.Brand>Affinity@UCLA</Navbar.Brand>\n\t\t\t\t  </LinkContainer>\n\t\t\t\t  <Navbar.Toggle aria-controls=\"basic-navbar-nav\" />\n\t\t\t\t  <Navbar.Collapse id=\"basic-navbar-nav\">\n\t\t          <Nav className=\"mr-auto\">\n\n\t\t\t\t\t<LinkContainer to={{\n\t\t\t\t\t\tpathname: \"/app\",\n\t\t\t\t\t\tstate: {test: \"test\"}\n\t\t\t\t\t}}>\n\t\t              <Nav.Link>Home</Nav.Link>\n\t\t            </LinkContainer>\n\n\t\t            <LinkContainer to={{\n\t\t\t\t\t\tpathname: \"/profile\",\n\t\t\t\t\t\tstate: {}\n\t\t\t\t\t}}>\n\t\t              <Nav.Link>My Profile</Nav.Link>\n\t\t            </LinkContainer>\n\t\t            \n\t\t            <h2> { store.getState().firstName} </h2> \n\n\t\t\t\t    </Nav>\n\t\t\t\t    <Form inline>\n\t\t\t\t      <FormControl type=\"text\" placeholder=\"Search\" className=\"mr-sm-2\" />\n\t\t\t\t      <Button variant=\"outline-success\">Search</Button>\n\t\t\t\t    </Form>\n\t\t\t\t  </Navbar.Collapse>\n\t\t\t\t</Navbar>\n            </div>\n\t\t)\n\t}\n}\n\n\n\nexport default Header\n","undoManager":{"mark":101,"position":99,"stack":[[{"start":{"row":14,"column":25},"end":{"row":14,"column":26},"action":"insert","lines":[" "],"id":101}],[{"start":{"row":14,"column":25},"end":{"row":14,"column":26},"action":"remove","lines":[" "],"id":102}],[{"start":{"row":14,"column":25},"end":{"row":14,"column":26},"action":"insert","lines":[" "],"id":103}],[{"start":{"row":14,"column":25},"end":{"row":14,"column":26},"action":"remove","lines":[" "],"id":104},{"start":{"row":14,"column":24},"end":{"row":14,"column":25},"action":"remove","lines":["o"]}],[{"start":{"row":14,"column":24},"end":{"row":14,"column":25},"action":"insert","lines":["o"],"id":105}],[{"start":{"row":14,"column":25},"end":{"row":14,"column":26},"action":"insert","lines":[" "],"id":106},{"start":{"row":14,"column":26},"end":{"row":14,"column":27},"action":"insert","lines":["U"]},{"start":{"row":14,"column":27},"end":{"row":14,"column":28},"action":"insert","lines":["s"]},{"start":{"row":14,"column":28},"end":{"row":14,"column":29},"action":"insert","lines":["e"]},{"start":{"row":14,"column":29},"end":{"row":14,"column":30},"action":"insert","lines":["r"]},{"start":{"row":14,"column":30},"end":{"row":14,"column":31},"action":"insert","lines":[","]}],[{"start":{"row":14,"column":31},"end":{"row":14,"column":32},"action":"insert","lines":[" "],"id":107},{"start":{"row":14,"column":32},"end":{"row":14,"column":33},"action":"insert","lines":["P"]},{"start":{"row":14,"column":33},"end":{"row":14,"column":34},"action":"insert","lines":["l"]},{"start":{"row":14,"column":34},"end":{"row":14,"column":35},"action":"insert","lines":["e"]},{"start":{"row":14,"column":35},"end":{"row":14,"column":36},"action":"insert","lines":["s"]},{"start":{"row":14,"column":36},"end":{"row":14,"column":37},"action":"insert","lines":["a"]},{"start":{"row":14,"column":37},"end":{"row":14,"column":38},"action":"insert","lines":["e"]}],[{"start":{"row":14,"column":38},"end":{"row":14,"column":39},"action":"insert","lines":[" "],"id":108},{"start":{"row":14,"column":39},"end":{"row":14,"column":40},"action":"insert","lines":["d"]},{"start":{"row":14,"column":40},"end":{"row":14,"column":41},"action":"insert","lines":["i"]}],[{"start":{"row":14,"column":40},"end":{"row":14,"column":41},"action":"remove","lines":["i"],"id":109},{"start":{"row":14,"column":39},"end":{"row":14,"column":40},"action":"remove","lines":["d"]}],[{"start":{"row":14,"column":39},"end":{"row":14,"column":40},"action":"insert","lines":["s"],"id":110},{"start":{"row":14,"column":40},"end":{"row":14,"column":41},"action":"insert","lines":["i"]},{"start":{"row":14,"column":41},"end":{"row":14,"column":42},"action":"insert","lines":["n"]},{"start":{"row":14,"column":42},"end":{"row":14,"column":43},"action":"insert","lines":["g"]}],[{"start":{"row":14,"column":43},"end":{"row":14,"column":44},"action":"insert","lines":[" "],"id":111},{"start":{"row":14,"column":44},"end":{"row":14,"column":45},"action":"insert","lines":["i"]}],[{"start":{"row":14,"column":44},"end":{"row":14,"column":45},"action":"remove","lines":["i"],"id":112},{"start":{"row":14,"column":43},"end":{"row":14,"column":44},"action":"remove","lines":[" "]},{"start":{"row":14,"column":42},"end":{"row":14,"column":43},"action":"remove","lines":["g"]},{"start":{"row":14,"column":41},"end":{"row":14,"column":42},"action":"remove","lines":["n"]},{"start":{"row":14,"column":40},"end":{"row":14,"column":41},"action":"remove","lines":["i"]},{"start":{"row":14,"column":39},"end":{"row":14,"column":40},"action":"remove","lines":["s"]}],[{"start":{"row":14,"column":39},"end":{"row":14,"column":40},"action":"insert","lines":["S"],"id":113},{"start":{"row":14,"column":40},"end":{"row":14,"column":41},"action":"insert","lines":["i"]},{"start":{"row":14,"column":41},"end":{"row":14,"column":42},"action":"insert","lines":["g"]},{"start":{"row":14,"column":42},"end":{"row":14,"column":43},"action":"insert","lines":["n"]}],[{"start":{"row":14,"column":43},"end":{"row":14,"column":44},"action":"insert","lines":[" "],"id":114},{"start":{"row":14,"column":44},"end":{"row":14,"column":45},"action":"insert","lines":["i"]},{"start":{"row":14,"column":45},"end":{"row":14,"column":46},"action":"insert","lines":["n"]}],[{"start":{"row":14,"column":46},"end":{"row":14,"column":47},"action":"insert","lines":[" "],"id":115}],[{"start":{"row":14,"column":46},"end":{"row":14,"column":47},"action":"remove","lines":[" "],"id":116},{"start":{"row":14,"column":45},"end":{"row":14,"column":46},"action":"remove","lines":["n"]},{"start":{"row":14,"column":44},"end":{"row":14,"column":45},"action":"remove","lines":["i"]}],[{"start":{"row":14,"column":44},"end":{"row":14,"column":45},"action":"insert","lines":["I"],"id":117},{"start":{"row":14,"column":45},"end":{"row":14,"column":46},"action":"insert","lines":["n"]}],[{"start":{"row":14,"column":46},"end":{"row":14,"column":47},"action":"insert","lines":[" "],"id":118}],[{"start":{"row":14,"column":46},"end":{"row":14,"column":47},"action":"remove","lines":[" "],"id":119}],[{"start":{"row":14,"column":47},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":120},{"start":{"row":15,"column":0},"end":{"row":15,"column":2},"action":"insert","lines":["\t\t"]},{"start":{"row":15,"column":2},"end":{"row":16,"column":0},"action":"insert","lines":["",""]},{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"insert","lines":["\t\t"]}],[{"start":{"row":14,"column":2},"end":{"row":14,"column":7},"action":"remove","lines":["const"],"id":121},{"start":{"row":14,"column":2},"end":{"row":14,"column":3},"action":"insert","lines":["l"]},{"start":{"row":14,"column":3},"end":{"row":14,"column":4},"action":"insert","lines":["e"]},{"start":{"row":14,"column":4},"end":{"row":14,"column":5},"action":"insert","lines":["t"]}],[{"start":{"row":15,"column":2},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":122},{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"insert","lines":["\t\t"]},{"start":{"row":16,"column":2},"end":{"row":16,"column":3},"action":"insert","lines":["i"]},{"start":{"row":16,"column":3},"end":{"row":16,"column":4},"action":"insert","lines":["f"]}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"insert","lines":[" "],"id":123}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"remove","lines":[" "],"id":124}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":6},"action":"insert","lines":["()"],"id":125}],[{"start":{"row":16,"column":5},"end":{"row":16,"column":6},"action":"insert","lines":["f"],"id":126},{"start":{"row":16,"column":6},"end":{"row":16,"column":7},"action":"insert","lines":["i"]},{"start":{"row":16,"column":7},"end":{"row":16,"column":8},"action":"insert","lines":["r"]},{"start":{"row":16,"column":8},"end":{"row":16,"column":9},"action":"insert","lines":["s"]}],[{"start":{"row":16,"column":5},"end":{"row":16,"column":9},"action":"remove","lines":["firs"],"id":127},{"start":{"row":16,"column":5},"end":{"row":16,"column":14},"action":"insert","lines":["firstName"]}],[{"start":{"row":16,"column":14},"end":{"row":16,"column":15},"action":"insert","lines":[" "],"id":128},{"start":{"row":16,"column":15},"end":{"row":16,"column":16},"action":"insert","lines":["!"]},{"start":{"row":16,"column":16},"end":{"row":16,"column":17},"action":"insert","lines":["="]}],[{"start":{"row":16,"column":17},"end":{"row":16,"column":18},"action":"insert","lines":[" "],"id":129}],[{"start":{"row":16,"column":18},"end":{"row":16,"column":20},"action":"insert","lines":["\"\""],"id":130}],[{"start":{"row":16,"column":21},"end":{"row":16,"column":22},"action":"insert","lines":["{"],"id":131}],[{"start":{"row":16,"column":22},"end":{"row":18,"column":3},"action":"insert","lines":["","\t\t\t","\t\t}"],"id":132}],[{"start":{"row":17,"column":3},"end":{"row":17,"column":4},"action":"insert","lines":["g"],"id":133},{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"insert","lines":["r"]},{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"insert","lines":["e"]},{"start":{"row":17,"column":6},"end":{"row":17,"column":7},"action":"insert","lines":["e"]},{"start":{"row":17,"column":7},"end":{"row":17,"column":8},"action":"insert","lines":["t"]},{"start":{"row":17,"column":8},"end":{"row":17,"column":9},"action":"insert","lines":["i"]},{"start":{"row":17,"column":9},"end":{"row":17,"column":10},"action":"insert","lines":["n"]},{"start":{"row":17,"column":10},"end":{"row":17,"column":11},"action":"insert","lines":["g"]}],[{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"insert","lines":[" "],"id":134},{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"insert","lines":["="]}],[{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"insert","lines":[" "],"id":135}],[{"start":{"row":17,"column":14},"end":{"row":17,"column":16},"action":"insert","lines":["\"\""],"id":136}],[{"start":{"row":17,"column":15},"end":{"row":17,"column":16},"action":"insert","lines":["W"],"id":137},{"start":{"row":17,"column":16},"end":{"row":17,"column":17},"action":"insert","lines":["e"]},{"start":{"row":17,"column":17},"end":{"row":17,"column":18},"action":"insert","lines":["l"]},{"start":{"row":17,"column":18},"end":{"row":17,"column":19},"action":"insert","lines":["c"]},{"start":{"row":17,"column":19},"end":{"row":17,"column":20},"action":"insert","lines":["o"]},{"start":{"row":17,"column":20},"end":{"row":17,"column":21},"action":"insert","lines":["m"]},{"start":{"row":17,"column":21},"end":{"row":17,"column":22},"action":"insert","lines":["e"]}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":[" "],"id":138},{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"insert","lines":[","]}],[{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"insert","lines":[" "],"id":139}],[{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"remove","lines":[" "],"id":140},{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"remove","lines":[","]},{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"remove","lines":[" "]}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":[" "],"id":141}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"remove","lines":[" "],"id":142}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":[","],"id":143}],[{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"insert","lines":[" "],"id":144}],[{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"remove","lines":[" "],"id":145},{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"remove","lines":[","]}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":[","],"id":146}],[{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"insert","lines":[" "],"id":147}],[{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"remove","lines":[" "],"id":148},{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"remove","lines":[","]}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":[" "],"id":149}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"remove","lines":[" "],"id":150}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":[","],"id":151}],[{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"insert","lines":[" "],"id":152}],[{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"insert","lines":["{"],"id":153},{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"insert","lines":["}"]}],[{"start":{"row":17,"column":26},"end":{"row":17,"column":27},"action":"remove","lines":["\""],"id":154},{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"remove","lines":["}"]},{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"remove","lines":["{"]}],[{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"insert","lines":["\""],"id":155}],[{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"insert","lines":[" "],"id":156},{"start":{"row":17,"column":26},"end":{"row":17,"column":27},"action":"insert","lines":["+"]}],[{"start":{"row":17,"column":27},"end":{"row":17,"column":28},"action":"insert","lines":[" "],"id":157}],[{"start":{"row":17,"column":28},"end":{"row":17,"column":29},"action":"insert","lines":["f"],"id":158},{"start":{"row":17,"column":29},"end":{"row":17,"column":30},"action":"insert","lines":["i"]},{"start":{"row":17,"column":30},"end":{"row":17,"column":31},"action":"insert","lines":["r"]},{"start":{"row":17,"column":31},"end":{"row":17,"column":32},"action":"insert","lines":["s"]}],[{"start":{"row":17,"column":28},"end":{"row":17,"column":32},"action":"remove","lines":["firs"],"id":159},{"start":{"row":17,"column":28},"end":{"row":17,"column":37},"action":"insert","lines":["firstName"]}],[{"start":{"row":17,"column":37},"end":{"row":17,"column":38},"action":"insert","lines":[";"],"id":160}],[{"start":{"row":42,"column":30},"end":{"row":43,"column":0},"action":"insert","lines":["",""],"id":161},{"start":{"row":43,"column":0},"end":{"row":43,"column":14},"action":"insert","lines":["\t\t            "]},{"start":{"row":43,"column":14},"end":{"row":44,"column":0},"action":"insert","lines":["",""]},{"start":{"row":44,"column":0},"end":{"row":44,"column":14},"action":"insert","lines":["\t\t            "]},{"start":{"row":44,"column":14},"end":{"row":44,"column":15},"action":"insert","lines":["h"]},{"start":{"row":44,"column":15},"end":{"row":44,"column":16},"action":"insert","lines":["1"]}],[{"start":{"row":44,"column":15},"end":{"row":44,"column":16},"action":"remove","lines":["1"],"id":162},{"start":{"row":44,"column":14},"end":{"row":44,"column":15},"action":"remove","lines":["h"]}],[{"start":{"row":44,"column":14},"end":{"row":44,"column":15},"action":"insert","lines":["<"],"id":163},{"start":{"row":44,"column":15},"end":{"row":44,"column":16},"action":"insert","lines":["h"]},{"start":{"row":44,"column":16},"end":{"row":44,"column":17},"action":"insert","lines":["2"]},{"start":{"row":44,"column":17},"end":{"row":44,"column":18},"action":"insert","lines":[">"]}],[{"start":{"row":44,"column":18},"end":{"row":44,"column":19},"action":"insert","lines":[" "],"id":164}],[{"start":{"row":44,"column":18},"end":{"row":44,"column":19},"action":"remove","lines":[" "],"id":165}],[{"start":{"row":44,"column":18},"end":{"row":44,"column":19},"action":"insert","lines":[" "],"id":166}],[{"start":{"row":44,"column":19},"end":{"row":44,"column":20},"action":"insert","lines":["{"],"id":167},{"start":{"row":44,"column":20},"end":{"row":44,"column":21},"action":"insert","lines":["g"]},{"start":{"row":44,"column":21},"end":{"row":44,"column":22},"action":"insert","lines":["r"]},{"start":{"row":44,"column":22},"end":{"row":44,"column":23},"action":"insert","lines":["e"]}],[{"start":{"row":44,"column":20},"end":{"row":44,"column":23},"action":"remove","lines":["gre"],"id":168},{"start":{"row":44,"column":20},"end":{"row":44,"column":23},"action":"insert","lines":["gre"]}],[{"start":{"row":44,"column":23},"end":{"row":44,"column":24},"action":"insert","lines":["e"],"id":169},{"start":{"row":44,"column":24},"end":{"row":44,"column":25},"action":"insert","lines":["t"]}],[{"start":{"row":44,"column":20},"end":{"row":44,"column":25},"action":"remove","lines":["greet"],"id":170},{"start":{"row":44,"column":20},"end":{"row":44,"column":28},"action":"insert","lines":["greeting"]}],[{"start":{"row":44,"column":28},"end":{"row":44,"column":29},"action":"insert","lines":["}"],"id":171}],[{"start":{"row":44,"column":29},"end":{"row":44,"column":30},"action":"insert","lines":[" "],"id":172},{"start":{"row":44,"column":30},"end":{"row":44,"column":31},"action":"insert","lines":["<"]},{"start":{"row":44,"column":31},"end":{"row":44,"column":32},"action":"insert","lines":["/"]}],[{"start":{"row":44,"column":32},"end":{"row":44,"column":33},"action":"insert","lines":["h"],"id":173},{"start":{"row":44,"column":33},"end":{"row":44,"column":34},"action":"insert","lines":["2"]},{"start":{"row":44,"column":34},"end":{"row":44,"column":35},"action":"insert","lines":[">"]}],[{"start":{"row":44,"column":35},"end":{"row":44,"column":36},"action":"insert","lines":[" "],"id":174}],[{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"remove","lines":["\t\t"],"id":175},{"start":{"row":15,"column":0},"end":{"row":15,"column":2},"action":"remove","lines":["\t\t"]},{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"insert","lines":[" "]},{"start":{"row":16,"column":22},"end":{"row":16,"column":23},"action":"insert","lines":[" "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"remove","lines":["\t\t"]}],[{"start":{"row":11,"column":2},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":176},{"start":{"row":12,"column":0},"end":{"row":12,"column":2},"action":"insert","lines":["\t\t"]},{"start":{"row":12,"column":2},"end":{"row":13,"column":0},"action":"insert","lines":["",""]},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"insert","lines":["\t\t"]}],[{"start":{"row":13,"column":2},"end":{"row":13,"column":4},"action":"insert","lines":["\"\""],"id":177}],[{"start":{"row":13,"column":3},"end":{"row":13,"column":4},"action":"insert","lines":["R"],"id":178},{"start":{"row":13,"column":4},"end":{"row":13,"column":5},"action":"insert","lines":["e"]},{"start":{"row":13,"column":5},"end":{"row":13,"column":6},"action":"insert","lines":["n"]},{"start":{"row":13,"column":6},"end":{"row":13,"column":7},"action":"insert","lines":["d"]},{"start":{"row":13,"column":7},"end":{"row":13,"column":8},"action":"insert","lines":["e"]},{"start":{"row":13,"column":8},"end":{"row":13,"column":9},"action":"insert","lines":["r"]},{"start":{"row":13,"column":9},"end":{"row":13,"column":10},"action":"insert","lines":["i"]},{"start":{"row":13,"column":10},"end":{"row":13,"column":11},"action":"insert","lines":["n"]},{"start":{"row":13,"column":11},"end":{"row":13,"column":12},"action":"insert","lines":["g"]}],[{"start":{"row":13,"column":12},"end":{"row":13,"column":13},"action":"insert","lines":[" "],"id":179}],[{"start":{"row":13,"column":12},"end":{"row":13,"column":13},"action":"remove","lines":[" "],"id":180}],[{"start":{"row":13,"column":12},"end":{"row":13,"column":13},"action":"insert","lines":[" "],"id":181},{"start":{"row":13,"column":13},"end":{"row":13,"column":14},"action":"insert","lines":["H"]},{"start":{"row":13,"column":14},"end":{"row":13,"column":15},"action":"insert","lines":["e"]},{"start":{"row":13,"column":15},"end":{"row":13,"column":16},"action":"insert","lines":["a"]},{"start":{"row":13,"column":16},"end":{"row":13,"column":17},"action":"insert","lines":["d"]},{"start":{"row":13,"column":17},"end":{"row":13,"column":18},"action":"insert","lines":["e"]},{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"insert","lines":["r"]}],[{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"insert","lines":[" "],"id":182}],[{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"remove","lines":[" "],"id":183}],[{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"insert","lines":[")"],"id":184}],[{"start":{"row":13,"column":2},"end":{"row":13,"column":3},"action":"insert","lines":["("],"id":185}],[{"start":{"row":13,"column":2},"end":{"row":13,"column":3},"action":"insert","lines":["c"],"id":186},{"start":{"row":13,"column":3},"end":{"row":13,"column":4},"action":"insert","lines":["o"]},{"start":{"row":13,"column":4},"end":{"row":13,"column":5},"action":"insert","lines":["n"]},{"start":{"row":13,"column":5},"end":{"row":13,"column":6},"action":"insert","lines":["s"]},{"start":{"row":13,"column":6},"end":{"row":13,"column":7},"action":"insert","lines":["o"]},{"start":{"row":13,"column":7},"end":{"row":13,"column":8},"action":"insert","lines":["l"]},{"start":{"row":13,"column":8},"end":{"row":13,"column":9},"action":"insert","lines":["e"]},{"start":{"row":13,"column":9},"end":{"row":13,"column":10},"action":"insert","lines":["."]}],[{"start":{"row":13,"column":10},"end":{"row":13,"column":11},"action":"insert","lines":["l"],"id":187},{"start":{"row":13,"column":11},"end":{"row":13,"column":12},"action":"insert","lines":["o"]},{"start":{"row":13,"column":12},"end":{"row":13,"column":13},"action":"insert","lines":["g"]}],[{"start":{"row":13,"column":13},"end":{"row":13,"column":14},"action":"insert","lines":[" "],"id":188}],[{"start":{"row":12,"column":0},"end":{"row":12,"column":2},"action":"remove","lines":["\t\t"],"id":189},{"start":{"row":13,"column":13},"end":{"row":13,"column":14},"action":"remove","lines":[" "]}],[{"start":{"row":59,"column":0},"end":{"row":60,"column":0},"action":"insert","lines":["",""],"id":190},{"start":{"row":60,"column":0},"end":{"row":60,"column":1},"action":"insert","lines":["s"]},{"start":{"row":60,"column":1},"end":{"row":60,"column":2},"action":"insert","lines":["t"]},{"start":{"row":60,"column":2},"end":{"row":60,"column":3},"action":"insert","lines":["o"]},{"start":{"row":60,"column":3},"end":{"row":60,"column":4},"action":"insert","lines":["r"]}],[{"start":{"row":60,"column":4},"end":{"row":60,"column":5},"action":"insert","lines":["e"],"id":191},{"start":{"row":60,"column":5},"end":{"row":60,"column":6},"action":"insert","lines":["."]}],[{"start":{"row":60,"column":5},"end":{"row":60,"column":6},"action":"remove","lines":["."],"id":192},{"start":{"row":60,"column":4},"end":{"row":60,"column":5},"action":"remove","lines":["e"]},{"start":{"row":60,"column":3},"end":{"row":60,"column":4},"action":"remove","lines":["r"]},{"start":{"row":60,"column":2},"end":{"row":60,"column":3},"action":"remove","lines":["o"]},{"start":{"row":60,"column":1},"end":{"row":60,"column":2},"action":"remove","lines":["t"]},{"start":{"row":60,"column":0},"end":{"row":60,"column":1},"action":"remove","lines":["s"]}],[{"start":{"row":60,"column":0},"end":{"row":60,"column":1},"action":"insert","lines":["s"],"id":193},{"start":{"row":60,"column":1},"end":{"row":60,"column":2},"action":"insert","lines":["t"]},{"start":{"row":60,"column":2},"end":{"row":60,"column":3},"action":"insert","lines":["o"]},{"start":{"row":60,"column":3},"end":{"row":60,"column":4},"action":"insert","lines":["r"]},{"start":{"row":60,"column":4},"end":{"row":60,"column":5},"action":"insert","lines":["e"]},{"start":{"row":60,"column":5},"end":{"row":60,"column":6},"action":"insert","lines":["."]},{"start":{"row":60,"column":6},"end":{"row":60,"column":7},"action":"insert","lines":["s"]}],[{"start":{"row":60,"column":7},"end":{"row":60,"column":8},"action":"insert","lines":["u"],"id":194},{"start":{"row":60,"column":8},"end":{"row":60,"column":9},"action":"insert","lines":["b"]},{"start":{"row":60,"column":9},"end":{"row":60,"column":10},"action":"insert","lines":["s"]}],[{"start":{"row":60,"column":6},"end":{"row":60,"column":10},"action":"remove","lines":["subs"],"id":195},{"start":{"row":60,"column":6},"end":{"row":60,"column":15},"action":"insert","lines":["subscribe"]}],[{"start":{"row":60,"column":15},"end":{"row":60,"column":17},"action":"insert","lines":["()"],"id":196}],[{"start":{"row":60,"column":0},"end":{"row":61,"column":0},"action":"remove","lines":["store.subscribe()",""],"id":197},{"start":{"row":59,"column":0},"end":{"row":60,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":59,"column":0},"end":{"row":60,"column":0},"action":"insert","lines":["",""],"id":198}],[{"start":{"row":46,"column":20},"end":{"row":46,"column":28},"action":"remove","lines":["greeting"],"id":199},{"start":{"row":46,"column":20},"end":{"row":46,"column":48},"action":"insert","lines":[" store.getState().firstName;"]}],[{"start":{"row":46,"column":47},"end":{"row":46,"column":48},"action":"remove","lines":[";"],"id":200}],[{"start":{"row":46,"column":48},"end":{"row":46,"column":49},"action":"insert","lines":[" "],"id":202},{"start":{"row":46,"column":49},"end":{"row":46,"column":50},"action":"insert","lines":[" "]}],[{"start":{"row":46,"column":47},"end":{"row":46,"column":48},"action":"insert","lines":[" "],"id":201}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":46,"column":47},"end":{"row":46,"column":47},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":6,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1585209839918}