<main id="content" class="content" role="main">
    <div id="toast-container" ng-class="[config.position, config.animation]" class="toast-top-right"><!----></div>
    
    <div class="tab-content">
  <div class="tab-pane">
    <section class="widget">
      <div ng-controller="EventsController as vm">
        <!----><div ng-include="'templates/events/index.html'"><!----><div ng-if="!vm.loading &amp;&amp; vm.step" class="" style="">
  <h2 class="events-header" ng-hide="vm.step.step == 'review' || vm.step.step == '0' || vm.step.step == 'template_name'" aria-hidden="false">STEP 2: Create a New Event</h2>
  <h2 class="events-header ng-hide" ng-hide="vm.step.step == 'review' || (vm.step.step != '0' &amp;&amp; vm.step.step != 'template_name')" aria-hidden="true">Create a New Event</h2>
  <h2 class="events-header ng-hide" ng-show="vm.step.step == 'review'" ng-switch="vm.eventModel.status" aria-hidden="true">
    <!----><span ng-if="vm.entry_type != 'template'">
      <!---->
      <!----><span ng-if="vm.eventModel.status != 'draft'">Event Info</span><!---->
    </span><!---->
    <!---->
  </h2>

  <!----><div ng-include="vm.step.template" class="" style=""><div class="general-wrapper">
  <div class="form-group form-group-lg name-holder" ng-class="{'has-error': vm.eventModelErrors.title}">
    <input type="text" ng-model="vm.eventModel.title" class="form-control ng-pristine ng-valid ng-empty ng-touched" placeholder="Enter Event Name *" aria-invalid="false" style="">
    <!---->
  </div>
  <h4 class="text-center">Event Type (select one)</h4>
  <div class="row event-type-list">
    <!----><div class="col-md-4 col-lg-3 col-xs-12 col-sm-6" ng-repeat="eventType in vm.eventTypes">
      <div ng-click="vm.chooseEventType(eventType)" ng-class="['thumbnail', {active: vm.eventModel.event_type_id === eventType.id}, {'coming-soon': eventType.coming_soon}]" role="button" tabindex="0" class="thumbnail active" style="">
        <div class="image" background-image="eventType.image.medium.url" style="background-image: url(&quot;https://promogo-content-us.s3.amazonaws.com/event_type/image/2/medium_beverage_models.jpg&quot;);"></div>
        <div class="label-holder">
          <p>On-Site Promo</p>
        </div>
      </div>
    </div><!----><div class="col-md-4 col-lg-3 col-xs-12 col-sm-6" ng-repeat="eventType in vm.eventTypes">
      <div ng-click="vm.chooseEventType(eventType)" ng-class="['thumbnail', {active: vm.eventModel.event_type_id === eventType.id}, {'coming-soon': eventType.coming_soon}]" role="button" tabindex="0" class="thumbnail">
        <div class="image" background-image="eventType.image.medium.url" style="background-image: url(&quot;https://promogo-content-us.s3.amazonaws.com/event_type/image/6/medium_swim_suit_models.jpg&quot;);"></div>
        <div class="label-holder">
          <p>Swim Suit Models</p>
        </div>
      </div>
    </div><!----><div class="col-md-4 col-lg-3 col-xs-12 col-sm-6" ng-repeat="eventType in vm.eventTypes">
      <div ng-click="vm.chooseEventType(eventType)" ng-class="['thumbnail', {active: vm.eventModel.event_type_id === eventType.id}, {'coming-soon': eventType.coming_soon}]" role="button" tabindex="0" class="thumbnail" style="">
        <div class="image" background-image="eventType.image.medium.url" style="background-image: url(&quot;https://promogo-content-us.s3.amazonaws.com/event_type/image/5/medium_offsite.jpg&quot;);"></div>
        <div class="label-holder">
          <p>Off-Site Promo</p>
        </div>
      </div>
    </div><!----><div class="col-md-4 col-lg-3 col-xs-12 col-sm-6" ng-repeat="eventType in vm.eventTypes">
      <div ng-click="vm.chooseEventType(eventType)" ng-class="['thumbnail', {active: vm.eventModel.event_type_id === eventType.id}, {'coming-soon': eventType.coming_soon}]" role="button" tabindex="0" class="thumbnail" style="">
        <div class="image" background-image="eventType.image.medium.url" style="background-image: url(&quot;https://promogo-content-us.s3.amazonaws.com/event_type/image/1/medium_atmosphere_models.jpg&quot;);"></div>
        <div class="label-holder">
          <p>Atmosphere Models</p>
        </div>
      </div>
    </div><!----><div class="col-md-4 col-lg-3 col-xs-12 col-sm-6" ng-repeat="eventType in vm.eventTypes">
      <div ng-click="vm.chooseEventType(eventType)" ng-class="['thumbnail', {active: vm.eventModel.event_type_id === eventType.id}, {'coming-soon': eventType.coming_soon}]" role="button" tabindex="0" class="thumbnail">
        <div class="image" background-image="eventType.image.medium.url" style="background-image: url(&quot;https://promogo-content-us.s3.amazonaws.com/event_type/image/3/medium_commercial_print.jpg&quot;);"></div>
        <div class="label-holder">
          <p>Commercial / Print</p>
        </div>
      </div>
    </div><!----><div class="col-md-4 col-lg-3 col-xs-12 col-sm-6" ng-repeat="eventType in vm.eventTypes">
      <div ng-click="vm.chooseEventType(eventType)" ng-class="['thumbnail', {active: vm.eventModel.event_type_id === eventType.id}, {'coming-soon': eventType.coming_soon}]" role="button" tabindex="0" class="thumbnail">
        <div class="image" background-image="eventType.image.medium.url" style="background-image: url(&quot;https://promogo-content-us.s3.amazonaws.com/event_type/image/7/medium_trade_show_models.jpg&quot;);"></div>
        <div class="label-holder">
          <p>Trade Show Models</p>
        </div>
      </div>
    </div><!----><div class="col-md-4 col-lg-3 col-xs-12 col-sm-6" ng-repeat="eventType in vm.eventTypes">
      <div ng-click="vm.chooseEventType(eventType)" ng-class="['thumbnail', {active: vm.eventModel.event_type_id === eventType.id}, {'coming-soon': eventType.coming_soon}]" role="button" tabindex="0" class="thumbnail coming-soon">
        <div class="image" background-image="eventType.image.medium.url" style="background-image: url(&quot;https://promogo-content-us.s3.amazonaws.com/event_type/image/8/medium_translator.jpg&quot;);"></div>
        <div class="label-holder">
          <p>Translator</p>
        </div>
      </div>
    </div><!----><div class="col-md-4 col-lg-3 col-xs-12 col-sm-6" ng-repeat="eventType in vm.eventTypes">
      <div ng-click="vm.chooseEventType(eventType)" ng-class="['thumbnail', {active: vm.eventModel.event_type_id === eventType.id}, {'coming-soon': eventType.coming_soon}]" role="button" tabindex="0" class="thumbnail coming-soon">
        <div class="image" background-image="eventType.image.medium.url" style="background-image: url(&quot;https://promogo-content-us.s3.amazonaws.com/event_type/image/9/medium_go_media.png&quot;);"></div>
        <div class="label-holder">
          <p>Go Media</p>
        </div>
      </div>
    </div><!----><div class="col-md-4 col-lg-3 col-xs-12 col-sm-6" ng-repeat="eventType in vm.eventTypes">
      <div ng-click="vm.chooseEventType(eventType)" ng-class="['thumbnail', {active: vm.eventModel.event_type_id === eventType.id}, {'coming-soon': eventType.coming_soon}]" role="button" tabindex="0" class="thumbnail coming-soon">
        <div class="image" background-image="eventType.image.medium.url" style="background-image: url(&quot;https://promogo-content-us.s3.amazonaws.com/event_type/image/10/medium_bartenders.png&quot;);"></div>
        <div class="label-holder">
          <p>Bartenders</p>
        </div>
      </div>
    </div><!----><div class="col-md-4 col-lg-3 col-xs-12 col-sm-6" ng-repeat="eventType in vm.eventTypes">
      <div ng-click="vm.chooseEventType(eventType)" ng-class="['thumbnail', {active: vm.eventModel.event_type_id === eventType.id}, {'coming-soon': eventType.coming_soon}]" role="button" tabindex="0" class="thumbnail coming-soon">
        <div class="image" background-image="eventType.image.medium.url" style="background-image: url(&quot;https://promogo-content-us.s3.amazonaws.com/event_type/image/11/medium_go_go_dancers.png&quot;);"></div>
        <div class="label-holder">
          <p>Go Go Dancers</p>
        </div>
      </div>
    </div><!----><div class="col-md-4 col-lg-3 col-xs-12 col-sm-6" ng-repeat="eventType in vm.eventTypes">
      <div ng-click="vm.chooseEventType(eventType)" ng-class="['thumbnail', {active: vm.eventModel.event_type_id === eventType.id}, {'coming-soon': eventType.coming_soon}]" role="button" tabindex="0" class="thumbnail coming-soon">
        <div class="image" background-image="eventType.image.medium.url" style="background-image: url(&quot;https://promogo-content-us.s3.amazonaws.com/event_type/image/12/medium_djs.png&quot;);"></div>
        <div class="label-holder">
          <p>DJ's</p>
        </div>
      </div>
    </div><!---->
  </div>
</div></div>

  <!----><div ng-if="vm.mode !== 'show' || vm.step.step === 'review'" class="events-navigation" ng-class="{'no-border': vm.step.step == 'review'}">
    <div class="row">
      <div ng-show="vm.step.step === 'review' &amp;&amp; vm.eventModel.status === 'draft' &amp;&amp; vm.entry_type != 'template'" aria-hidden="true" class="ng-hide">
        <div class="col-md-4 col-md-offset-2 col-xs-12">
          <a ng-click="vm.saveAsDraft()" ng-disabled="!vm.getPrevStep()" class="btn btn-navigation btn-prev btn-mobile-full">Save as Draft</a>
        </div>
        <div class="col-md-4 col-xs-12">
          <a ng-click="vm.submit()" ng-disabled="!vm.canSubmit()" class="btn btn-navigation btn-next btn-mobile-full" disabled="disabled">Submit Direct To Promogo</a>
        </div>
      </div>
      <div ng-show="vm.step.step === 'review' &amp;&amp; vm.entry_type == 'template'" aria-hidden="true" class="ng-hide">
        <div class="save-template-block">
          <a ng-click="vm.saveTemplate()" ng-disabled="!vm.getPrevStep()" class="btn btn-navigation">Save Template</a>
        </div>
      </div>
      <div ng-hide="vm.step.step == 'review'" aria-hidden="false" class="">
        <div class="col-md-4 col-md-offset-1 col-xs-6">
          <a ng-click="vm.prevStep()" ng-disabled="!vm.getPrevStep()" class="btn btn-navigation btn-prev"><i class="fa fa-lg fa-caret-left"></i>Back</a>
        </div>
        <div class="col-md-2 hidden-sm hidden-xs">
          <div class="progress" value="vm.percent">
  <div class="progress-bar" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="23" aria-valuemin="0" aria-valuemax="100" ng-style="{width: (percent < 100 ? percent : 100) + '%'}" aria-valuetext="23%" aria-labelledby="progressbar" ng-transclude="" style="width: 23%;"></div>
</div>
        </div>
        <div class="col-md-4 col-xs-6">
          <a ng-click="vm.submit()" ng-disabled="!vm.canSubmit()" class="btn btn-navigation btn-next" disabled="disabled">Continue<i class="fa fa-lg fa-caret-right"></i></a>
        </div>
      </div>
    </div>
  </div><!---->
  <!---->
</div><!---->
<!----></div>
        <input type="hidden" name="" id="referrer" value="https://go.promogo.io/events?status=pending" autocomplete="off">
        <input type="hidden" name="" id="action" value="" autocomplete="off">

      </div>
    </section>
  </div>
</div>


  </main>