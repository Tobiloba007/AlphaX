import img1 from '../../assets/img-13.png'
import bgImg from '../../assets/bg-11.png'
import { TiSocialTwitterCircular, TiSocialFacebookCircular, TiSocialLinkedinCircular } from 'react-icons/ti'
import { useParams } from 'react-router-dom';

const BlogContent = () => {

  const {id}=useParams()

  const items = [
    {
      'id': 1,
      'headerTitle': 'Understanding The Code Review Automation Process in DevOps',
      'headerContent': 'DevOps is a methodology that has been employed over the years in firms and organizations, especially the big ones. It is a series of processes ranging from development to operational IT.',
      'image': img1,
      'name': 'Onanuga Oreoluwa',
      'position': 'DevOps Engineer',
      'facebook': 'facebook.com',
      'twitter': 'twitter.com',
      'linkedin': 'linkedin.com',
      'title': 'What do we mean by Code Review Automation?',
      'content': <div>
        <p>
           DevOps is a methodology that has been employed over the years in firms and organizations, especially the big ones. It is a series of processes ranging from development to operational IT. <br />
           The commonly used word “ DevOps Engineering” is a body of three main processes 
        </p>
        <ul className='list-disc px-4 lg:text-[13px] lg:font-medium'>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
              Code Review Automation
          </li>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
              Deployment 
          </li>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
              Application Performance Management(APM)
          </li>
        </ul>



        <p className='text-[#403E3E] text-[12px] font-semibold lg:text-[13px] mt-5 lg:font-bold xl:text-[16px]'>
              What do we mean by Code Review Automation?
        </p>
        <p>
            When a developer writes a code, and pushes it to GitHub. Changes can be made, but these changes might affect the already deployed application, and new bugs may arise. Organizations, businesses and developers with applications that engage a lot of users who will notice if there is a downtime can not afford to experience downtime during upgrades. Performing upgrades without downtime is the goal of every organization, but how do we ensure the changes made will not affect the code base. We need a mechanism that reviews the code, the changes made, and monitors the stability of the application before merging the pull request.<br />
            Code Review Automation makes use of the following:
        </p>
        <ul className='list-disc px-4 lg:text-[13px] lg:font-medium'>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
              Continuous Integration
          </li>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
              Test Driven Development 
          </li>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
              Code coverage
          </li>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
               Linting
          </li>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
               Nit Approach 
          </li>
        </ul>

        <p className='text-[#403E3E] text-[12px] font-semibold lg:text-[13px] mt-5 lg:font-bold xl:text-[16px]'>
             Continuous Integration
        </p>
        <p>
        Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early. It is an automation process that help developers to push their code to a repository easily. There are several automation tools used for continuous integration like the layer CI and Jenkins. Continuous Integration pipelines hold the key to the development processes in DevOps. It helps to run test before a pull request is merged, in order to ensure there is no downtime.
        </p>


        <p className='text-[#403E3E] text-[12px] font-semibold lg:text-[13px] mt-5 lg:font-bold xl:text-[16px]'>
             Test Driven Development
        </p>
        <p>
        Test-driven development is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases. Here we find code coverage.
        </p>


        <p className='text-[#403E3E] text-[12px] font-semibold lg:text-[13px] mt-5 lg:font-bold xl:text-[16px]'>
             Code Coverage
        </p>
        <p>
        Code coverage ensures efficient continuous integration and help to know how stable and reliable the tests are. Since the goal is to make changes and upgrades with little or no downtime, tests are attached to the code repository and are run for every change. The pull request is merged only after the code passes the test. <br />
         This picture is a typical form for code coverage. It is similar to a heat map, the green parts show the part of the code with test attached to them, while the red parts have no test. This shows the stability of the code as we can notice the parts of the code that need to be tested. It is given by the formula: <br />
          Total Code in the non-syntax lines with test/ Total code in the non-syntax lines
        </p>

        <p className='text-[#403E3E] text-[12px] font-semibold lg:text-[13px] mt-5 lg:font-bold xl:text-[16px]'>
             Branch Coverage
        </p>
        <p>
          Branch Coverage is a relevant concept in code coverage, instead of measuring how many lines of code, it measures groups of lines.<br />
           When do you care about code coverage?
        </p>
        <ul className='list-disc px-4 lg:text-[13px] lg:font-medium'>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
             Your product has users and those users might leave if they are affected by bugs 
          </li>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
             You are working with developers that aren’t immediately trustworthy like contractors
          </li>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
              You are working on a very large code base with many testable components.
          </li>
        </ul>

        <p className='text-[#403E3E] text-[12px] font-semibold lg:text-[13px] mt-5 lg:font-bold xl:text-[16px]'>
             Policies in code coverage
        </p>
        <ul className='list-disc px-4 lg:text-[13px] lg:font-medium'>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
             Code coverage must not decrease
          </li>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
          Code owners attach test filestors
          </li>
        </ul>
        <p className='mt-3'>
           In a DevOps code review pipeline, CI and testing are the main things, It requires the developers to be on board. However, it may prove cumbersome to have the developer do all the work of writing tests for almost every line of code, hence the need for linting practices arises 
        </p>

        <p className='text-[#403E3E] text-[12px] font-semibold lg:text-[13px] mt-5 lg:font-bold xl:text-[16px]'>
           What are Linters? 
        </p>
        <p>
             find problems automatically. They are a common feature of pull request automation because they ensure that “obvious bugs” do make it to production. This reduces the work the developers has to do.<br />
             From the python code, obvious bugs that can be noticed are that the same variable name x was used twice with different values. Also, since x is equal to 5, the while loop will not end and will keep on running as x is less than 100. Errors like this are detected by the linters automatically, this makes the code review automation process faster.<br />
             Leaving comments after code reviews is called the Nit Approach.<br />
             It is cheap and convenient to run linting formatting within CI steps Instead of waiting for a human reviewer. So if the linter fails, then no merging will occur. Any team with more than one developer working in the same codebase should set up a linter to catch obvious bugs.
        </p>

        <p className='text-[#403E3E] text-[12px] font-semibold lg:text-[13px] mt-5 lg:font-bold xl:text-[16px]'>
           Conclusion
        </p>
        <p>
           With this information, you can see that the DevOps methodology looks at your code in a bigger picture. The lifecycle of the application, the building, planning, testing and deploying processes are handled using DevOps Engineering.
        </p>
      </div>,
      'list':
      <> 
    </>
    },



    {
      'id': 2,
      'headerTitle': 'Setting your Kubernetes cluster up with Prometheus and Grafana using Helm',
      'headerContent': 'Prometheus and Grafana using Helm charts. To follow this guide properly, you will need to have basic knowledge of Kubernetes and communicating with the cluster using the kubectl command line tool, Prometheus and Grafana.',
      'image': img1,
      'name': 'Onanuga Oreoluwa',
      'position': 'DevOps Engineer',
      'facebook': 'facebook.com',
      'twitter': 'twitter.com',
      'linkedin': 'linkedin.com',
      'title': '',
      'content': 
      <div>
        <p>
        Hello World, welcome to this space!I will be talking about how to set your Kubernetes cluster up with Prometheus and Grafana using Helm charts. To follow this guide properly, you will need to have basic knowledge of Kubernetes and communicating with the cluster using the kubectl command line tool, Prometheus and Grafana.Without further ado, let’s delve into what we have.<br />
        Table of Contents
        </p>
        <ul className='list-disc px-4 lg:text-[13px] lg:font-medium'>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
              What is Kubernetes?
          </li>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
            Why do we have to monitor our cluster?
          </li>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
            Prometheus and Grafana
          </li>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
            Helm charts and releases
          </li>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
            Installing Prometheus and Grafana on the cluster using Helm
          </li>
        </ul>

        <p className='text-[#403E3E] text-[12px] font-semibold lg:text-[13px] mt-5 lg:font-bold xl:text-[16px]'>
           What is Kubernetes?
        </p>
        <p>
           According to 
           <a className='underline' href="https://www.figma.com/file/RiGL8JcB1idEqRrKQAv5Va/AlphaX-website?node-id=836%3A515&mode=dev" target="_blank"  rel="noreferrer"> Kubernetes docs</a>, 
           Kubernetes is an open-source container orchestration engine for automating deployment, scaling, and management of containerized applications.You might be wondering what containers are, well, Containers are executable units of software in which application code is packaged, along with its libraries and dependencies, in common ways so that it can be run anywhere, whether it be on desktop, traditional IT, or the cloud according to 
           <a className='underline' href="https://www.ibm.com/topics/containers" target="_blank"  rel="noreferrer"> IBM</a>. They serve as a way to package our applications in very small self sufficient units that can be run on any platform that has a container runtime engine such as Docker. Now, lets say we want to deploy multiple units of these so-called containers, we need a tool that can manage this for us. This is what kubernetes does, it manages the containers across different nodes(servers). We are able to control which containers go to each server, how they are exposed to external and internal traffic, how the containers recover, how to maintain the state of these ephemeral containers for stateful applications, how we manage canary deployments. If deployments were music, I would say Kubernetes is the conductor in an orchestra. There is always one or more master node and multiple worker nodes in a Kubernetes cluster. The cluster is a collection of linked nodes that are managed by Kubernetes. The command line tool used to communicate with the cluster is the kubectl.
        </p>


        <p className='text-[#403E3E] text-[12px] font-semibold lg:text-[13px] mt-5 lg:font-bold xl:text-[16px]'>
           A kubernetes Cluster
        </p>
        <p>
          This is not a Kubernetes class so I would stop here. To learn more about Kubernetes, visit the official documentation here. Why do we have to monitor our cluster? I already said that Kubernetes manages the containers and all, so why do we have to monitor the cluster. <br /> 
          Well, you guessed the answer right. Some things are beyond the control of Kubernetes. These include the cpu, memory and disk space of the nodes. The networking between the nodes, the latency and many others. We just want to be sure everything is going as planned. From the common saying<br /> 
          To be forewarned is to be forearmed <br /> 
          Well, Monitoring makes you forearmed. Monitoring makes you very much prepared when things go wrong. This in turn reduces the MTTR (Mean Time To Recovery) in case of any downtime. Today, we have a lot of monitoring tools that help us achieve this. And for this article, we will be making use of Prometheus and Grafana.
        </p>


        <p className='text-[#403E3E] text-[12px] font-semibold lg:text-[13px] mt-5 lg:font-bold xl:text-[16px]'>
           Prometheus and Grafana
        </p>
        <p>
          Prometheus and Grafana are mostly used together due to how much compatible they. But lets see the different tasks they perform. Prometheus is an open-source monitoring and alerting tool. It collects and stores metrics as time-series data. Time-series in the sense that, there is a timestamp for each metric that is recorded. Each server, container, and pod produce logs as it executes various processes, programs, and applications. In Linux machines, they can be found in the /var/log directory. Prometheus fetches these logs and converts them to readable formats (text). It is not enough to read this time-series metrics as plain text; we need a means to visualize this data. Visualization can be in form of graphs, pie charts, bar charts, gauges and so on. This makes it easily to analyze the metrics. Grafana helps to visualize data gotten from a time-series data source, Prometheus in the case. The visualization is obtained by using a query language called PromQL(Prometheus Query Language) to obtain specific data from the Prometheus data source. So, let's call Grafana the web UI that presents metrics and logs in user friendly format called dashboards. You do not have to be a DevOps Engineer, a system administrator or a Site Reliability Engineer to understand the Grafana UI.<br />
          Prometheus Architecture <br />
          Helm Charts and Releases <br />
          If you are a programmer, you have probably heard of npm and/or pip. They are used to install packages. Well, Helm is a package manager for kubernetes. These packages are called charts and in the charts we define the applications that we want to deploy in manifests written in yaml. After installing the chart to the cluster, that installed chart is called a release.These helm charts are stored in repositories, and we use the helm command line tool to install helm charts to our cluster.<br />
          Installing Prometheus and Grafana on the cluster using Helm<br />
          We will be making use of the prometheus-community helm repository and the chart we will be installing is the kube-prometheus-stack. This chart comes with all the required components of Prometheus; the node exporter, the kube-state metrics, the alert manager and it even installs the grafana chart preconfigured with the Prometheus data source it needs.To follow from this point, ensure you have:
        </p>
        <ul className='list-disc px-4 lg:text-[13px] lg:font-medium'>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
              A Kubernetes Cluster you wish to work on and your kubectl configured with the right cluster context using kubeconfig
          </li>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
              Cluster level administrative access to the kubernetes cluster using kubectl (This means you can create, edit, get, and delete API objects like deployment and secrets on the Cluster)
          </li>
          <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
              Helm command line tool installed on your machine
          </li>
        </ul>


        <p className='text-[#403E3E] text-[12px] font-semibold lg:text-[13px] mt-5 lg:font-bold xl:text-[16px]'>
            Step By Step Procedure
        </p>
        <p>
          Launch the command prompt or terminal on your machine. Then add the prometheus community repository to your list or repositories using helm with the command below <br />
          helm repo add prometheus-community 
          <a className='underline text-blue-500' href="https://prometheus-community.github.io/helm-charts/" target="_blank"  rel="noreferrer"> https://prometheus-community.github.io/helm-charts</a> <br />
          Confirm that you have added it to your list of repositories using the following command to check if the repository has been added with the name prometheus-community
        </p>
        <button className='text-black bg-[#DDDCDC] py-0 px-8 my-3 font-light text-center'>
            helm repo list
        </button>
        <p>
          Now install the kube-prometheus-stack chart with the command below.<br />
          helm install monitoring prometheus-community/kube-prometheus-stack -n monitoring --create-namespace This installs the kube-prometheus-stack chart with the release name monitoring in the namespace monitoring. To confirm the installation, list your releases using the command<br />
          helm list -aA<br />
          To see all the resources that were installed by the release, do a kubectl get all to list them.<br />
          kubectl get all -n monitoring<br />
          To see the grafana UI, expose the installed grafana deployment in the namespace monitoring either as a NodePort or by using an ingress. If an ingress is used, helm can be used to install the ingress controller.<br />
          A sample Grafana dashboard from Grafana official page<br />
          Helm charts can be customized to suit your needs. The best way to achieve this is to pull the chart locally, then edit the values.yaml file which contains all the editable configurations (config map) for the chart. To install the chart in this case, we pull the remote chart using<br />
          helm pull prometheus-community/kube-prometheus-stack<br />
          Then edit the values.yaml file with the adjustments you want so it suits your need. Adjustments that can be made include enabling autoscaling, enabling ingress and configuring the host url and uri paths rules, changing the default password and admin user. To do this, you must have prior experience dealing with Kubernetes and Helm; otherwise, things could get tricky, and you might not obtain the desired chart.Install the chart after making your changes by starting a terminal in the directory where the content of the pulled chart is located and executing the following command. Visit 
          <a className='underline' href="https://helm.sh/docs/helm/helm_install/" target="_blank"  rel="noreferrer"> helm official page</a> to get this better<br />
          helm install -f values.yaml monitoring ./ -n monitoring --create-namespace<br />
          Other monitoring tools that can be employed include the ELK(ElasticSearch Logstash and Kibana) stack, Nagios, datadog. Some monitoring tools are specific to cloud providers such as AWS cloudwatch, AKS container Insights and so on.<br />
          <br />
          Congrats buddy!<br />
          You just finished the setup, and I hope it works just well for the monitoring you require.
        </p>

      </div>,
      'list': 
      <> 

    </>,
    },
  ]


   let item = items.filter(item=> item.id == id)
  item = item[0]
  console.log(item)

  return (
    <div className="flex flex-col items-center justify-center w-full text-[#000] pt-24 pb-5 px-6 bg-[length:350px_350px] bg-right-top bg-no-repeat md:px-14 lg:px-16 
    lg:bg-[length:450px_450px] lg:pb-8 xl:px-24 xl:pb-10 xl:bg-[length:600px_600px]"
    style={{backgroundImage: `url(${bgImg})`}}
    >
      <p className="text-[#FD602A] text-left w-full mb-3 text-[14px] pt-4 font-medium md:text-[16px] md:pb-0 md:pt-8 lg:text-[18px] xl:text-[23px] xl:pt-20">
         Inside Alpha-X
      </p>
      <div className="flex flex-col items-start justify-center w-full">
          <p className="text-[#504E4E] text-[23px] font-semibold w-[80%] leading-8 md:text-[22px] md:w-[60%] lg:text-[30px] lg:w-[55%] lg:leading-10 xl:text-[43px] 
          xl:leading-[3.2rem]">
            {item.headerTitle}
          </p>
          <p className="text-[#504E4E] pt-2 text-[13px] font-medium leading-6 md:text-[12px] md:w-[60%] lg:w-[55%] lg:text-[16px] xl:text-[20px] xl:leading-9 lg:pt-4">
             {item.headerContent}
           </p>
      </div>

      <div className="flex flex-col items-start justify-center w-full mt-6  bg-[length:350px_350px] bg-right-bottom bg-no-repeat md:mt-4 lg:bg-[length:350px_350px] 
      xl:mt-6 xl:bg-[length:500px_500px]"
      style={{backgroundImage: `url(${bgImg})`}}>
          <img className="w-[80%] h-full md:w-[55%] lg:w-[55%]"
           src={item.image} alt="" />
           <div className='flex flex-col items-start justify-start w-full mt-2 lg:mt-3'>
            <p className='text-[#504E4E] text-[15px] font-semibold md:text-[16px] lg:text-[18px] xl:text-[23px]'>
              {item.name}
            </p>
            <p className='text-[#504E4E] text-[12px] font-medium md:text-[13px] lg:text-[14px] xl:text-[17px]'>
               {item.position}
            </p>
           </div>
      </div>

      <div className='flex flex-col items-start justify-center w-full bg-[length:350px_350px] bg-right bg-no-repeat md:flex-row md:mt-4 xl:mt-7'
      style={{backgroundImage: `url(${bgImg})`}}
      >
        <div className='flex items-start justify-between w-[30%] mt-2 md:flex-col md:mt-0 md:w-[15%] lg:w-[15%]'>
          <a href={item.facebook}>
            <TiSocialFacebookCircular className='text-[#D8D4D4] text-[28px] md:mb-2 lg:text-[32px] xl:text-[40px] xl:mb-3' />
          </a>
          <a href={item.twitter}>
            <TiSocialTwitterCircular className='text-[#D8D4D4] text-[28px] md:mb-2 lg:text-[32px] xl:text-[40px] xl:mb-3' />
          </a>
          <a href={item.linkedin}>
             <TiSocialLinkedinCircular className='text-[#D8D4D4] text-[28px] md:mb-2 lg:text-[32px] xl:text-[40px] xl:mb-3' />
          </a>
        </div>

        <div className='flex flex-col items-center justify-start mt-5 md:mt-0 md:w-[85%] lg:w-[85%] lg:pr-10 xl:pr-24'>
          <div className='flex flex-col items-start justify-start w-full mb-5 lg:mb-6 xl:mb-9'>
            <p className='text-[#504E4E] text-[12px] leading-5 md:text-[12px] lg:text-[13px] lg:font-medium xl:text-[16px] xl:leading-7'>
              {item.content}
            </p>

          </div>
        </div>

      </div>
        
    </div>
  )
}

export default BlogContent