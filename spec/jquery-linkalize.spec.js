describe('jQuery Linkalize', function() {
  var $subject, $linkElement;

  function subject(domElement) {
    $subject = $(domElement);
  }

  beforeEach(function () {
    $subject = null;
    $linkElement = null;
  });

  it('should check a simple scenario', function() {
    subject('<p>Foo text: https://www.google.com.br</p>');

    $subject.linkalize();

    $linkElement = $subject.find('a');

    expect($linkElement.length).to.equal(1);
    expect($linkElement.attr('href')).to.equal('https://www.google.com.br');
    expect($linkElement.text()).to.equal('https://www.google.com.br');
  });

  it('should use the domain name as the label', function() {
    var values = ['https://www.google.com.br', 'https://twitter.com'];

    subject('<div><p>Foo text: https://www.google.com.br</p>' +
      '<p>And another bar text: https://twitter.com</p></div>');

    $subject.linkalize();

    $linkElement = $subject.find('a');

    expect($linkElement.length).to.equal(2);

    for (value in values) {
      var linkElement = $linkElement.eq(value),
        domainUrl = values[value];

      expect(linkElement.attr('href')).to.equal(domainUrl);
      expect(linkElement.text()).to.equal(domainUrl);
    }
  });

  it('should linkalize deep inner url', function() {
    subject('<table><tr><td><p>https://www.google.com.br</p></td></tr></table>');

    $subject.linkalize();

    $linkElement = $subject.find('a');

    expect($linkElement.length).to.equal(1);
    expect($linkElement.attr('href')).to.equal('https://www.google.com.br');
    expect($linkElement.text()).to.equal('https://www.google.com.br');
  });

  it('should add classes to the linkalized element', function() {
    subject('<p>Foo text: https://www.google.com.br</p>');

    $subject.linkalize({
      'class': 'foo bar baz'
    });

    $linkElement = $subject.find('a');

    expect($linkElement.length).to.equal(1);
    expect($linkElement.attr('href')).to.equal('https://www.google.com.br');
    expect($linkElement.text()).to.equal('https://www.google.com.br');

    expect($linkElement.hasClass('foo')).to.equal(true);
    expect($linkElement.hasClass('bar')).to.equal(true);
    expect($linkElement.hasClass('baz')).to.equal(true);
  });
});
