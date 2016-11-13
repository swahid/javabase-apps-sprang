<%@ include file="/WEB-INF/tags/layout/includes.jsp"%>
<t:dashboard>
	<jsp:attribute name="header">
		<title>Dashboard Spring Angular js app</title>
		<!-- Home Controller js -->
    	<script src="resources/js/controller/homeController.js"></script>
    	<script src="resources/js/controller/homeController2.js"></script>
		<!-- Home Service js -->
    	<script src="resources/js/service/homeService.js"></script>
    	<script src="resources/js/service/homeService2.js"></script>
	</jsp:attribute>
	
	<jsp:body>
	<div ng-view></div>
	<div ng-controller="homeController as home">
	<h1>welcome {{home.user}} </h1>
	<p>This is sample project Spring MVC Spring security and  Hibernate for mysql connectivity</p>
	<p><b>note :</b> after run this project make changes db.propersie file hibernate.hnb2ddl.auto property create to update
	otherwise every time database drop and create data will be lost
	</p>
	<p>This is an open source project</p>
	</div>
	
	</jsp:body>
</t:dashboard>
</html>