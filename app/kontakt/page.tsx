import React from 'react';

export default function page() {
  return (
    <div>
      <section>
        <div>
          <div>
            <h1>Kontakta Oss!</h1>
            <p>
              Något du funderar över eller skulle vilja berätta för oss? Fyll i
              formuläret så svara vi så fort vi kan!
            </p>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <label>Namn</label>
                  <input />
                </div>
              </div>
              <div>
                <div>
                  <label>Email</label>
                  <input />
                </div>
              </div>
              <div>
                <div>
                  <label>Meddelande</label>
                  <textarea></textarea>
                </div>
              </div>
              <div>
                <button>Skicka</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
