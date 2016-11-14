<%@ include file="/WEB-INF/tags/layout/includes.jsp"%>
<t:dashboard>
	<jsp:attribute name="header">
		<title>Spring MVC Angular js app</title>
		<!-- Home Controller js -->
    	<script src="resources/js/controller/indexController.js"></script>
    	<script src="resources/js/controller/homeController.js"></script>
		<!-- Home Service js -->
    	<script src="resources/js/service/indexService.js"></script>
    	<script src="resources/js/service/homeService.js"></script>
	</jsp:attribute>
	
	<jsp:body>
	<div ng-view></div>
	</jsp:body>
</t:dashboard>
