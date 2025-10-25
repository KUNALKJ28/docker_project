<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Docker_Project_Nodejs_Frontend__Flask_Backend_0"></a>Docker Project: Node.js Frontend + Flask Backend</h1>
<p class="has-line-data" data-line-start="2" data-line-end="3">This project demonstrates a full-stack web application using <strong>Node.js with Express</strong> for the frontend and <strong>Flask</strong> for the backend, all containerized using Docker and orchestrated with Docker Compose.</p>
<hr>
<h2 class="code-line" data-line-start=6 data-line-end=7 ><a id="Project_Overview_6"></a><strong>Project Overview</strong></h2>
<h3 class="code-line" data-line-start=8 data-line-end=9 ><a id="Frontend_Nodejs_with_Express_8"></a><strong>Frontend (Node.js with Express)</strong></h3>
<ul>
<li class="has-line-data" data-line-start="9" data-line-end="10">Built using <strong>Express.js</strong> and <strong>Node.js</strong>.</li>
<li class="has-line-data" data-line-start="10" data-line-end="11">Includes a <strong>form</strong> similar to the one from the Flask Assignment 2.</li>
<li class="has-line-data" data-line-start="11" data-line-end="13">The form is configured to <strong>send data to the Flask backend</strong> for processing.</li>
</ul>
<h3 class="code-line" data-line-start=13 data-line-end=14 ><a id="Backend_Flask_13"></a><strong>Backend (Flask)</strong></h3>
<ul>
<li class="has-line-data" data-line-start="14" data-line-end="15">Handles <strong>form submissions</strong> from the frontend.</li>
<li class="has-line-data" data-line-start="15" data-line-end="17">Processes the data and returns a response.</li>
</ul>
<hr>
<h2 class="code-line" data-line-start=19 data-line-end=20 ><a id="Folder_Structure_19"></a><strong>Folder Structure</strong></h2>
<p class="has-line-data" data-line-start="20" data-line-end="39">DOCKER_PROJECT/<br>
├── .gitignore<br>
├── docker-compose.yml<br>
│<br>
├── backend/<br>
│   ├── .venv/            (This is your Python virtual environment)<br>
│   ├── <a href="http://app.py">app.py</a>            (Your Flask code)<br>
│   ├── Dockerfile        (For the backend)<br>
│   └── requirements.txt  (Python libraries)<br>
│<br>
└── frontend/<br>
├── .vscode/          (Editor settings)<br>
├── node_modules/     (Node.js libraries)<br>
├── public/<br>
│   └── index.html    (Your HTML form)<br>
├── Dockerfile        (For the frontend)<br>
├── package.json      (Node.js project info)<br>
├── package-lock.json (Not in pic, but should be here)<br>
└── server.js         (Your Express server code)</p>
<hr>
<h2 class="code-line" data-line-start=41 data-line-end=42 ><a id="Docker_Configuration_41"></a><strong>Docker Configuration</strong></h2>
<h3 class="code-line" data-line-start=43 data-line-end=44 ><a id="Dockerfiles_43"></a><strong>Dockerfiles</strong></h3>
<ul>
<li class="has-line-data" data-line-start="44" data-line-end="45"><strong>Frontend</strong>: <code>frontend/Dockerfile</code></li>
<li class="has-line-data" data-line-start="45" data-line-end="47"><strong>Backend</strong>: <code>backend/Dockerfile</code></li>
</ul>
<h3 class="code-line" data-line-start=47 data-line-end=48 ><a id="Docker_Compose_47"></a><strong>Docker Compose</strong></h3>
<ul>
<li class="has-line-data" data-line-start="48" data-line-end="49"><code>docker-compose.yaml</code> connects both frontend and backend in the <strong>same network</strong>.</li>
<li class="has-line-data" data-line-start="49" data-line-end="51">Run the following command to start both services:</li>
</ul>
<p class="has-line-data" data-line-start="51" data-line-end="53">docker-compose up --build<br>
Docker Hub Images</p>
<p class="has-line-data" data-line-start="54" data-line-end="55">Both images are uploaded to Docker Hub:</p>
<p class="has-line-data" data-line-start="56" data-line-end="58">Frontend + Backend combined repo:<br>
Docker Hub: docker_project</p>
<p class="has-line-data" data-line-start="59" data-line-end="60">Tags used:</p>
<p class="has-line-data" data-line-start="61" data-line-end="62">backend → Flask backend</p>
<p class="has-line-data" data-line-start="63" data-line-end="64">frontend → Node.js frontend</p>
<p class="has-line-data" data-line-start="65" data-line-end="69">1 - Pull the images directly if needed:<br>
docker pull kunaljadhav643/docker_project:backend<br>
docker pull kunaljadhav643/docker_project:frontend<br>
Setup Instructions</p>
<p class="has-line-data" data-line-start="70" data-line-end="76">Clone the repository:<br>
git clone <a href="https://github.com/kunaljadhav643/Docker_Project.git">https://github.com/kunaljadhav643/Docker_Project.git</a><br>
cd Docker_Project<br>
2 - Build and run using Docker Compose:<br>
docker-compose up --build<br>
3 - Access the frontend</p>
<p class="has-line-data" data-line-start="77" data-line-end="78">Open your browser at <a href="http://localhost:3000">http://localhost:3000</a> (or port defined in frontend Dockerfile).</p>
<p class="has-line-data" data-line-start="79" data-line-end="80">Form submission</p>
<p class="has-line-data" data-line-start="81" data-line-end="82">Submit the form and see how the Flask backend handles the request.</p>
<p class="has-line-data" data-line-start="83" data-line-end="84">Notes</p>
<p class="has-line-data" data-line-start="85" data-line-end="86">Ensure Docker and Docker Compose are installed on your machine.</p>
<p class="has-line-data" data-line-start="87" data-line-end="88">All unnecessary files like node_modules/ and .vscode/ are excluded via .gitignore.</p>
<p class="has-line-data" data-line-start="89" data-line-end="92">The project is fully containerized for easy deployment.<br>
Developed by: Kunal Sandeep Jadhav<br>
GitHub: Docker_Project</p>
<p class="has-line-data" data-line-start="93" data-line-end="94">Docker Hub: docker_project</p>
