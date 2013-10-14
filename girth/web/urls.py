from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    url(r'^$', 'web.views.home', name='home'),
)
